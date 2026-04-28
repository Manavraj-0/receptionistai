export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DaizyAI",
    "url": "https://daizyai.uk",
    "logo": "https://daizyai.uk/icon.svg",
    "description": "Stop missing calls and start booking appointments automatically with our custom AI receptionist.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UK"
    },
    "sameAs": [
      // Add social media links here
    ],
    "offers": {
      "@type": "Offer",
      "category": "AI Receptionist Service",
      "description": "High-end, human-sounding AI receptionists for service businesses."
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
