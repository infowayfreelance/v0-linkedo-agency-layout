"use client"

import { useState } from "react"
import { Section } from "@/components/ui/section"
import { ContactForm } from "@/components/forms/contact-form"
import { ContactModal } from "@/components/ui/contact-modal"
import { AnimatedButton } from "@/components/ui/animated-button"
import { motion } from "framer-motion"
import { Mail, Phone, Clock, Calendar } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@linkedo.co.uk",
    href: "mailto:info@linkedo.co.uk",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+447927969991",
    href: "tel:+447927969991",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "24 hours a day, 7 days a week",
  },
]

const locations = [
  {
    city: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    address: "483 Green Lanes, London N13 4BS, United Kingdom",
    timezone: "GMT / BST",
  },
]

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        {/* Hero */}
        <Section className="pt-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 text-balance">
              Tell Us About <span className="text-gradient-primary">Your Project</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to grow your business? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
        </Section>

        {/* Form + Info */}
        <Section>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Call CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-500/10 border border-primary/30"
              >
                <Calendar className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Prefer to Talk?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Book a free 30-minute strategy call with one of our experts.
                </p>
                <AnimatedButton onClick={() => setIsModalOpen(true)} className="w-full">
                  Book a Call
                </AnimatedButton>
              </motion.div>

              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Locations */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Our Locations</h3>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <motion.div
                      key={location.city}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="p-4 rounded-xl bg-card/50 border border-border/50"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{location.flag}</span>
                        <div>
                          <p className="font-medium text-foreground">{location.city}</p>
                          <p className="text-xs text-muted-foreground">{location.country}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{location.address}</p>
                      <p className="text-xs text-primary">{location.timezone}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  )
}
