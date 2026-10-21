import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nationwide Digital Marketing Coverage Across the UK | Linkedo",
  description:
    "Linkedo delivers web development, SEO, Google Ads, and Meta Ads for businesses in every major UK city and region — see our full nationwide coverage.",
  alternates: { canonical: "/uk" },
}

export default function UKLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
