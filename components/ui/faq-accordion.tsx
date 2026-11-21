"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: ReactNode
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
  forceMount?: boolean
}

export function FAQAccordion({ items, className, forceMount = false }: FAQAccordionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("w-full", className)}
      suppressHydrationWarning
    >
      <Accordion type="single" collapsible className="space-y-4" suppressHydrationWarning>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card/50 border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
            suppressHydrationWarning
          >
            <AccordionTrigger
              className="text-left text-foreground hover:text-primary hover:no-underline py-5"
              suppressHydrationWarning
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent forceMount={forceMount ? true : undefined} className="text-muted-foreground pb-5" suppressHydrationWarning>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  )
}
