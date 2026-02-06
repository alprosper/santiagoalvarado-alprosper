import { Helmet } from "react-helmet";

// Organization Schema - for homepage and global use
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://alprosper.com/#organization",
    name: "Alprosper",
    url: "https://alprosper.com",
    logo: "https://alprosper.com/favicon.png",
    description: "Alprosper is a business automation agency that helps small and medium businesses implement enterprise-grade tools and workflows.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surprise",
      addressRegion: "AZ",
      addressCountry: "US"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "support@alprosper.com",
      url: "https://alprosper.com/contact"
    },
    sameAs: [
      "https://www.facebook.com/alprosper",
      "https://www.linkedin.com/company/alprosper",
      "https://twitter.com/alprosper"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// WebSite Schema - for homepage
export const WebSiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://alprosper.com/#website",
    name: "Alprosper",
    url: "https://alprosper.com",
    description: "Business automation solutions for small and medium businesses",
    publisher: {
      "@id": "https://alprosper.com/#organization"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://alprosper.com/news?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// AggregateRating Schema - for star ratings in search results
interface AggregateRatingSchemaProps {
  ratingValue?: number;
  reviewCount?: number;
  bestRating?: number;
  worstRating?: number;
}

export const AggregateRatingSchema = ({
  ratingValue = 5,
  reviewCount = 50,
  bestRating = 5,
  worstRating = 1
}: AggregateRatingSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://alprosper.com/#localbusiness-rating",
    name: "Alprosper",
    image: "https://alprosper.com/favicon.png",
    url: "https://alprosper.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue,
      reviewCount: reviewCount,
      bestRating: bestRating,
      worstRating: worstRating
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// LocalBusiness Schema - for local SEO (with optional aggregate rating)
interface LocalBusinessSchemaProps {
  includeRating?: boolean;
  ratingValue?: number;
  reviewCount?: number;
}

export const LocalBusinessSchema = ({
  includeRating = true,
  ratingValue = 5,
  reviewCount = 50
}: LocalBusinessSchemaProps = {}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://alprosper.com/#localbusiness",
    name: "Alprosper",
    image: "https://alprosper.com/favicon.png",
    url: "https://alprosper.com",
    telephone: "",
    email: "support@alprosper.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surprise",
      addressRegion: "AZ",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.6292,
      longitude: -112.3679
    },
    areaServed: [
      {
        "@type": "City",
        name: "Surprise",
        containedInPlace: {
          "@type": "State",
          name: "Arizona"
        }
      },
      {
        "@type": "City",
        name: "Phoenix",
        containedInPlace: {
          "@type": "State",
          name: "Arizona"
        }
      }
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00"
    },
    ...(includeRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: ratingValue,
        reviewCount: reviewCount,
        bestRating: 5,
        worstRating: 1
      }
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// FAQPage Schema - for Help Center
interface FAQ {
  question: string;
  answer: string;
}

export const FAQPageSchema = ({ faqs }: { faqs: FAQ[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// BlogPosting Schema - for individual blog posts
interface BlogPostSchemaProps {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  modifiedAt?: string;
  featuredImage?: string;
  slug: string;
  tags?: string[];
}

export const BlogPostingSchema = ({
  title,
  description,
  author,
  publishedAt,
  modifiedAt,
  featuredImage,
  slug,
  tags
}: BlogPostSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://alprosper.com/news/${slug}#article`,
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: author
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://alprosper.com/#organization",
      name: "Alprosper",
      logo: {
        "@type": "ImageObject",
        url: "https://alprosper.com/favicon.png"
      }
    },
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://alprosper.com/news/${slug}`
    },
    ...(featuredImage && {
      image: {
        "@type": "ImageObject",
        url: featuredImage
      }
    }),
    ...(tags && tags.length > 0 && {
      keywords: tags.join(", ")
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Service Schema - for Features page
interface ServiceCategory {
  title: string;
  description: string;
}

export const ServiceSchema = ({ services }: { services: ServiceCategory[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://alprosper.com/features#service",
    name: "Business Automation Services",
    description: "Complete suite of automation tools designed for small businesses",
    provider: {
      "@type": "Organization",
      "@id": "https://alprosper.com/#organization"
    },
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Automation Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description
        },
        position: index + 1
      }))
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// BreadcrumbList Schema - for navigation
interface BreadcrumbItem {
  name: string;
  url: string;
}

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
