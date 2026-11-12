import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { MainShell } from "@/components/layout/main-shell"

export const metadata: Metadata = {
  title: "Cookie Policy | Linkedo",
  description:
    "Learn how Linkedo uses cookies and similar technologies on our website, and how you can manage your preferences.",
  alternates: { canonical: "https://linkedo.co.uk/cookie-policy" },
  openGraph: {
    title: "Cookie Policy | Linkedo",
    description:
      "Learn how Linkedo uses cookies and similar technologies on our website, and how you can manage your preferences.",
    url: "https://linkedo.co.uk/cookie-policy",
    siteName: "Linkedo",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Linkedo%20Logo-2ktZ7qcYVdGvooWw3nwry3bnN2kV5C.png",
        width: 1200,
        height: 630,
        alt: "Linkedo Cookie Policy",
      },
    ],
  },
}

const categories = [
  {
    name: "Strictly Necessary Cookies",
    description:
      "These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions you take such as setting your privacy preferences, logging in, or filling in forms.",
    examples: ["Session management", "Security tokens", "Load balancing"],
    canDisable: false,
  },
  {
    name: "Analytics Cookies",
    description:
      "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our website. All information these cookies collect is aggregated and therefore anonymous.",
    examples: ["Vercel Analytics (privacy-first, no persistent cookies)", "Page view counts", "Traffic source attribution"],
    canDisable: true,
  },
  {
    name: "Marketing Cookies",
    description:
      "These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites.",
    examples: ["Ad campaign measurement", "Remarketing tags", "Conversion tracking"],
    canDisable: true,
  },
  {
    name: "Functional Cookies",
    description:
      "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages.",
    examples: ["Chat widgets", "Embedded video players", "Social media plugins"],
    canDisable: true,
  },
]

export default function CookiePolicyPage() {
  return (
    <Section
      titleAs="h1"
      title="Cookie Policy"
      description="Last updated: September 2026"
      className="py-16 sm:py-20"
    >
      <MainShell>
        <div className="mx-auto max-w-3xl prose prose-invert prose-sm sm:prose-base">
          {/* Intro */}
          <div className="rounded-xl border border-border/50 bg-card/40 p-5 sm:p-6 mb-8 not-prose">
            <p className="text-sm text-muted-foreground leading-relaxed">
              This Cookie Policy explains how <strong className="text-foreground">Linkedo</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies and similar tracking technologies when you visit{" "}
              <strong className="text-foreground">linkedo.co.uk</strong>. It should be read alongside our{" "}
              <Link href="/privacy" className="text-primary underline underline-offset-2 hover:opacity-80">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <h2>What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your experience. Some cookies are essential; others are optional and can be declined.
          </p>

          <h2>How we use cookies</h2>
          <p>
            We use cookies to understand how visitors use our site, to improve performance, and — where you have consented — to deliver relevant marketing. We are committed to UK PECR and UK GDPR compliance.
          </p>

          {/* Category table */}
          <div className="not-prose space-y-4 my-8">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="rounded-xl border border-border/50 bg-card/30 p-5"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-sm font-semibold text-foreground">{cat.name}</h3>
                  {cat.canDisable ? (
                    <span className="shrink-0 inline-flex items-center rounded-full border border-border/60 px-2 py-0.5 text-xs text-muted-foreground">
                      Optional
                    </span>
                  ) : (
                    <span className="shrink-0 inline-flex items-center rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">
                      Always on
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{cat.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {cat.examples.map((ex) => (
                    <li
                      key={ex}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2>Third-party cookies</h2>
          <p>
            Some cookies may be set by third-party services that appear on our pages. We do not control the operation of these cookies. Please refer to the respective third-party privacy notices for more information.
          </p>

          <h2>Managing your preferences</h2>
          <p>
            You can review and update your cookie preferences at any time using the <strong>Cookie Settings</strong> link in our website footer. You can also configure your browser to block or delete cookies, though this may affect your experience of our site.
          </p>

          <h2>Contact us</h2>
          <p>
            If you have questions about our use of cookies, please contact us at{" "}
            <a href="mailto:info@linkedo.co.uk" className="text-primary underline underline-offset-2 hover:opacity-80">
              info@linkedo.co.uk
            </a>{" "}
            or visit our{" "}
            <Link href="/contact" className="text-primary underline underline-offset-2 hover:opacity-80">
              contact page
            </Link>
            .
          </p>
        </div>
      </MainShell>
    </Section>
  )
}
