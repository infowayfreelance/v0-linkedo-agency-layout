import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Marketing Consultancy UK: Strategy, Audits | Linkedo",
  description:
    "Digital marketing consultancy for UK businesses: strategy, SEO and ads audits, GA4 analytics set-up and team training. Book a free consultation.",
  alternates: { canonical: "https://linkedo.co.uk/consulting" },
  openGraph: {
    title: "Digital Marketing Consultancy UK: Strategy, Audits | Linkedo",
    description: "Digital marketing consultancy for UK businesses: strategy, SEO and ads audits, GA4 analytics set-up and team training. Book a free consultation.",
    url: "https://linkedo.co.uk/consulting",
  },
}

export default function ConsultingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
