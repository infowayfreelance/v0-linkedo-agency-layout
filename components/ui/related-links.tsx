import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export interface RelatedLink {
  label: string
  href: string
}

interface RelatedLinksProps {
  title: string
  links: RelatedLink[]
  className?: string
}

/** Compact pill-style cross-link block, e.g. "Related Services" at the end of a page. */
export function RelatedLinks({ title, links, className }: RelatedLinksProps) {
  if (links.length === 0) return null

  return (
    <div className={`mt-8 pt-8 border-t border-border/50 ${className ?? ""}`}>
      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border/50 bg-card/40 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            {link.label}
            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  )
}
