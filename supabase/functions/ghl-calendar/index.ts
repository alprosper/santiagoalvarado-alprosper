import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://alprosper.com',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const GHL_API_KEY = Deno.env.get('GHL_API_KEY');
  const GHL_LOCATION_ID = Deno.env.get('GHL_LOCATION_ID');
  const GHL_CALENDAR_ID = Deno.env.get('GHL_CALENDAR_ID');

  if (!GHL_API_KEY || !GHL_LOCATION_ID || !GHL_CALENDAR_ID) {
    console.error('Missing GHL configuration');
    return new Response(
      JSON.stringify({ error: 'Server configuration error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const { action, ...params } = await req.json();
    console.log('GHL Calendar action:', action, params);

    if (action === 'get-slots') {
      // Get available time slots for a date range
      const { startDate, endDate, timezone = 'America/New_York' } = params;
      
      const url = new URL(`https://services.leadconnectorhq.com/calendars/${GHL_CALENDAR_ID}/free-slots`);
      url.searchParams.set('startDate', startDate.toString());
      url.searchParams.set('endDate', endDate.toString());
      url.searchParams.set('timezone', timezone);

      console.log('Fetching slots from:', url.toString());

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Version': '2021-07-28',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('GHL API error fetching slots:', response.status, errorText);
        return new Response(
          JSON.stringify({ error: 'Failed to fetch available slots' }),
          { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const data = await response.json();
      console.log('Available slots fetched:', Object.keys(data).length, 'dates');

      return new Response(
        JSON.stringify(data),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else if (action === 'book-appointment') {
      // Book an appointment (requires a valid contact)
      const { selectedSlot, email, firstName, lastName, phone, timezone = 'America/New_York' } = params;

      if (!selectedSlot || !email) {
        return new Response(
          JSON.stringify({ error: 'Selected slot and email are required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (!firstName?.trim() || !lastName?.trim()) {
        return new Response(
          JSON.stringify({ error: 'First name and last name are required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const normalizePhone = (input: unknown): string | undefined => {
        const raw = typeof input === 'string' ? input.trim() : '';
        if (!raw) return undefined;
        if (raw.startsWith('+')) return raw;
        const digits = raw.replace(/\D/g, '');
        if (digits.length === 10) return `+1${digits}`;
        if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
        return undefined;
      };

      const normalizedPhone = normalizePhone(phone);
      const safeEmail = String(email).trim().toLowerCase();

      console.log('Booking appointment request:', {
        selectedSlot,
        email: safeEmail,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        phone: normalizedPhone,
        timezone,
      });

      // 1) Find existing contact by email
      let contactId: string | undefined;
      try {
        const searchUrl = new URL('https://services.leadconnectorhq.com/contacts/search');
        searchUrl.searchParams.set('locationId', GHL_LOCATION_ID);
        searchUrl.searchParams.set('query', safeEmail);

        const searchRes = await fetch(searchUrl.toString(), {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${GHL_API_KEY}`,
            'Version': '2021-07-28',
          },
        });

        if (searchRes.ok) {
          const searchJson = await searchRes.json();
          // common shapes: { contacts: [{ id }] } or { contact: { id } }
          contactId =
            searchJson?.contacts?.[0]?.id ||
            searchJson?.contacts?.[0]?._id ||
            searchJson?.contact?.id ||
            searchJson?.contact?._id;
        } else {
          const t = await searchRes.text();
          console.warn('Contact search failed:', searchRes.status, t);
        }
      } catch (e) {
        console.warn('Contact search error:', e);
      }

      // 2) Create contact if needed
      if (!contactId) {
        const contactBody: Record<string, unknown> = {
          locationId: GHL_LOCATION_ID,
          email: safeEmail,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          source: 'Website Booking',
          tags: ['alprosper site lead', 'strategy-call'],
        };
        if (normalizedPhone) contactBody.phone = normalizedPhone;

        const createRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${GHL_API_KEY}`,
            'Content-Type': 'application/json',
            'Version': '2021-07-28',
          },
          body: JSON.stringify(contactBody),
        });

        if (!createRes.ok) {
          const errorText = await createRes.text();
          console.error('GHL API error creating contact:', createRes.status, errorText);
          return new Response(
            JSON.stringify({ error: 'Failed to create contact', details: errorText }),
            { status: createRes.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const created = await createRes.json();
        contactId = created?.contact?.id || created?.contact?._id || created?.id || created?._id;
      }

      if (!contactId) {
        console.error('Could not resolve contactId');
        return new Response(
          JSON.stringify({ error: 'Failed to resolve contact' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // 3) Book appointment using contactId
      const appointmentBody: Record<string, unknown> = {
        calendarId: GHL_CALENDAR_ID,
        locationId: GHL_LOCATION_ID,
        contactId,
        selectedTimezone: timezone,
        startTime: selectedSlot,
      };

      const response = await fetch('https://services.leadconnectorhq.com/calendars/events/appointments', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28',
        },
        body: JSON.stringify(appointmentBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('GHL API error booking appointment:', response.status, errorText);
        return new Response(
          JSON.stringify({ error: 'Failed to book appointment', details: errorText }),
          { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const data = await response.json();
      console.log('Appointment booked successfully:', data);

      return new Response(
        JSON.stringify({ success: true, appointment: data }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } else {
      return new Response(
        JSON.stringify({ error: 'Invalid action' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

  } catch (error) {
    console.error('Error in GHL calendar function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
