import type { Metadata } from "next"

const title = "Web Development Services UK | Custom Websites | Linkedo"
const description = "Custom websites and web apps for UK businesses, built on Next.js, React, WordPress or Shopify: discovery, design, build, testing and launch. Open 24/7."
const url = "https://linkedo.co.uk/web-development"

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Linkedo", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Linkedo Digital Marketing Agency" }], type: "website", locale: "en_GB" },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
}

export default function WebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
