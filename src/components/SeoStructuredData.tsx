type SeoStructuredDataProps = {
  locale: "en" | "ko";
  siteUrl: string;
};

const safeSiteUrl = (value?: string) => {
  if (!value) return "https://ainativeehr.com";
  return value.endsWith("/") ? value.slice(0, -1) : value;
};

export default function SeoStructuredData({
  locale,
  siteUrl,
}: SeoStructuredDataProps) {
  const normalizedSiteUrl = safeSiteUrl(siteUrl);
  const baseUrl = `${normalizedSiteUrl}/${locale}`;
  const language = locale === "ko" ? "ko-KR" : "en-US";

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "AI Native EHR",
      url: normalizedSiteUrl,
      sameAs: [normalizedSiteUrl],
      inLanguage: language,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "AI Native EHR",
      url: baseUrl,
      inLanguage: language,
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "AI Native EHR",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        category: "Software",
        price: "0",
        priceCurrency: "USD",
      },
      url: baseUrl,
      inLanguage: language,
    },
  ];

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
