import { m } from "@/components/LazyMotionProvider";

const techItems = [
  "n8n", "REST APIs", "Webhooks", "PostgreSQL", "Slack", "Zapier", "Make",
  "Google Sheets", "CRM Integration", "Data Pipelines", "Node.js", "Python",
  "JSON", "OAuth", "GraphQL", "Airtable", "HubSpot", "Twilio",
];

export const TechMarquee = () => {
  const doubled = [...techItems, ...techItems];

  return (
    <div className="relative py-10 overflow-hidden">

      <div className="flex animate-marquee gap-6 w-max">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center px-5 py-2.5 rounded-full glass-card text-sm text-muted-foreground whitespace-nowrap hover:text-primary hover:border-primary/30 transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
