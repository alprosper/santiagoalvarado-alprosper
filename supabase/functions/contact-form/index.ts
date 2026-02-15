import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message } = await req.json();
    
    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!name) {
      return new Response(
        JSON.stringify({ error: 'Name is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!message) {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const GHL_API_KEY = Deno.env.get('GHL_API_KEY');
    const GHL_LOCATION_ID = Deno.env.get('GHL_LOCATION_ID');
    
    if (!GHL_API_KEY) {
      console.error('GHL_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    if (!GHL_LOCATION_ID) {
      console.error('GHL_LOCATION_ID is not configured');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Adding contact form submission to GHL:', { name, email, phone, locationId: GHL_LOCATION_ID });

    // Create contact in GoHighLevel with contact-form tag
    const response = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        email,
        name,
        phone: phone || '',
        source: 'Website Contact Form',
        tags: ['contact-form', 'santiago - portfolio site lead'],
        customFields: [
          {
            key: 'contact_message',
            field_value: message
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GHL API error:', response.status, errorText);
      
      // If contact already exists, try to update with notes
      if (response.status === 422 || response.status === 409) {
        console.log('Contact may already exist, attempting to search and update');
        
        // Search for existing contact
        const searchResponse = await fetch(
          `https://services.leadconnectorhq.com/contacts/search/duplicate?locationId=${GHL_LOCATION_ID}&email=${encodeURIComponent(email)}`,
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${GHL_API_KEY}`,
              'Version': '2021-07-28',
            },
          }
        );

        if (searchResponse.ok) {
          const searchData = await searchResponse.json();
          if (searchData.contact?.id) {
            // Add note to existing contact
            const noteResponse = await fetch(
              `https://services.leadconnectorhq.com/contacts/${searchData.contact.id}/notes`,
              {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${GHL_API_KEY}`,
                  'Content-Type': 'application/json',
                  'Version': '2021-07-28',
                },
                body: JSON.stringify({
                  body: `Contact Form Message:\n\n${message}`,
                }),
              }
            );

            // Add contact-form tag to existing contact
            await fetch(
              `https://services.leadconnectorhq.com/contacts/${searchData.contact.id}/tags`,
              {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${GHL_API_KEY}`,
                  'Content-Type': 'application/json',
                  'Version': '2021-07-28',
                },
                body: JSON.stringify({
                  tags: ['contact-form'],
                }),
              }
            );

            console.log('Updated existing contact with note and tag');
            return new Response(
              JSON.stringify({ success: true, contactId: searchData.contact.id, updated: true }),
              { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }
        }
      }
      
      return new Response(
        JSON.stringify({ error: 'Failed to add contact to CRM' }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log('GHL contact created successfully:', data);

    // Add note with the message
    if (data.contact?.id) {
      await fetch(
        `https://services.leadconnectorhq.com/contacts/${data.contact.id}/notes`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${GHL_API_KEY}`,
            'Content-Type': 'application/json',
            'Version': '2021-07-28',
          },
          body: JSON.stringify({
            body: `Contact Form Message:\n\n${message}`,
          }),
        }
      );
      console.log('Added note to contact');
    }

    return new Response(
      JSON.stringify({ success: true, contactId: data.contact?.id }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});