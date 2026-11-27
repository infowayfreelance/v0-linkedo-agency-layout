import type { Metadata } from "next"

const title = "Branding & Identity Services UK | Brand Strategy | Linkedo"
const description = "Brand strategy, logo and identity, brand guidelines and refreshes for UK businesses, with a clear process. Linkedo is open 24/7."
const url = "https://linkedo.co.uk/branding"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: "Linkedo",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Linkedo Digital Marketing Agency" }],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
}

export default function BrandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
