"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "./badge"

interface CaseStudyCardProps {
  title: string
  client: string
  description: string
  image: string
  tags: string[]
  /** Omit when there is no live page to link to — the card renders as non-clickable. */
  href?: string
  className?: string
}

export function CaseStudyCard({ title, client, description, image, tags, href, className }: CaseStudyCardProps) {
  const content = (
    <>
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={cn("object-cover", href && "transition-transform duration-500 group-hover:scale-105")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">{client}</p>
        <h3
          className={cn(
            "text-xl font-semibold text-foreground mb-2 transition-colors flex items-center gap-2",
            href && "group-hover:text-primary",
          )}
        >
          {title}
          {href && (
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
          )}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={href ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative rounded-xl overflow-hidden",
        "bg-card/50 border border-border/50",
        href && "hover:border-primary/30",
        "transition-all duration-300",
        className,
      )}
    >
      {href ? (
        <Link href={href} className="block">
          {content}
        </Link>
      ) : (
        <div className="block cursor-default">{content}</div>
      )}
    </motion.div>
  )
}
