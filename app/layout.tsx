import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ConditionalLayout } from "@/components/layout/conditional-layout"
import { SchemaMarkup } from "@/components/seo/schema-markup"

const GTM_ID = "GTM-M6SD8PZX"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://linkedo.co.uk/#organization",
  name: "Linkedo",
  url: "https://linkedo.co.uk",
  logo: {
    "@type": "ImageObject",
    url: "https://linkedo.co.uk/favicon.png",
  },
  telephone: "+44 7927 969991",
  email: "info@linkedo.co.uk",
  description:
    "Linkedo delivers premium web development, SEO optimisation, and paid advertising services that generate real leads and measurable results for B2B businesses.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "483 Green Lanes",
    addressLocality: "London",
    postalCode: "N13 4BS",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "City", name: "London" },
    { "@type": "City", name: "Manchester" },
    { "@type": "City", name: "Birmingham" },
    { "@type": "City", name: "Leeds" },
    { "@type": "City", name: "Bristol" },
    { "@type": "City", name: "Liverpool" },
    { "@type": "City", name: "Glasgow" },
    { "@type": "City", name: "Edinburgh" },
    { "@type": "City", name: "Sheffield" },
    { "@type": "City", name: "Leicester" },
    { "@type": "City", name: "Nottingham" },
    { "@type": "City", name: "Newcastle" },
  ],
  knowsAbout: [
    "Search Engine Optimisation",
    "Web Development",
    "Google Ads",
    "Meta Ads",
    "Digital Marketing",
    "Branding",
    "Digital Consulting",
  ],
  sameAs: [
    "https://www.linkedin.com/company/linkedo",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+44 7927 969991",
    email: "info@linkedo.co.uk",
    areaServed: "GB",
    availableLanguage: "English",
    url: "https://linkedo.co.uk/contact",
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://linkedo.co.uk/#website",
  name: "Linkedo",
  url: "https://linkedo.co.uk",
  publisher: { "@id": "https://linkedo.co.uk/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://linkedo.co.uk/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

export const metadata: Metadata = {
  metadataBase: new URL("https://linkedo.co.uk"),
  title: "Linkedo | Web, SEO & Ads That Actually Bring Leads",
  description:
    "Linkedo delivers premium web development, SEO optimization, and paid advertising services that generate real leads and measurable results for B2B businesses.",
  generator: "v0.app",
  alternates: {
    canonical: "/",
  },
  keywords: ["digital agency", "web development", "SEO", "Google Ads", "lead generation", "B2B marketing"],
  authors: [{ name: "Linkedo" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Linkedo | Digital Marketing Agency",
    description: "Web Development, SEO, and Google Ads services for growth-focused businesses.",
    url: "https://linkedo.co.uk",
    siteName: "Linkedo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Linkedo Digital Marketing Agency",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linkedo | Digital Marketing Agency",
    description: "Web Development, SEO, and Google Ads services for growth-focused businesses.",
    images: ["/og-image.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#050814",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <SchemaMarkup schema={organizationSchema} />
        <SchemaMarkup schema={websiteSchema} />
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <ConditionalLayout>{children}</ConditionalLayout>
        <Analytics />
      </body>
    </html>
  )
}
