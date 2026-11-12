"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FormInput } from "@/components/ui/form-input"
import { FormTextarea } from "@/components/ui/form-textarea"
import { FormSelect } from "@/components/ui/form-select"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ArrowRight, ArrowLeft, Check } from "lucide-react"

const serviceOptions = [
  { value: "web-design", label: "Website Design & Development" },
  { value: "web-app", label: "Web App Development" },
  { value: "seo", label: "SEO Optimization" },
  { value: "google-ads", label: "Google Ads" },
  { value: "meta-ads", label: "Meta Ads" },
  { value: "branding", label: "Branding" },
  { value: "consulting", label: "Consulting" },
  { value: "not-sure", label: "Not Sure" },
]

const getTimelineOptions = (service: string) => {
  if (service === "web-design" || service === "web-app") {
    return [
      { value: "1-3-days", label: "1–3 Days (Immediate)" },
      { value: "4-7-days", label: "4–7 Days" },
      { value: "7-14-days", label: "7–14 Days" },
      { value: "1-month", label: "1 Month" },
      { value: "3-months", label: "3 Months" },
    ]
  }

  if (service === "seo") {
    return [
      { value: "3-months", label: "Minimum 3 Months" },
      { value: "6-months", label: "6 Months" },
      { value: "1-year", label: "1 Year" },
      { value: "2-years", label: "2 Years" },
    ]
  }

  if (service === "google-ads" || service === "meta-ads") {
    return [
      { value: "1-month", label: "1 Month" },
      { value: "3-months", label: "3 Months" },
      { value: "6-months", label: "6 Months" },
      { value: "1-year", label: "1 Year" },
      { value: "2-years", label: "2 Years" },
    ]
  }

  return [
    { value: "immediate", label: "Immediately" },
    { value: "1-month", label: "Within 1 month" },
    { value: "1-3-months", label: "1–3 months" },
    { value: "exploring", label: "Just exploring" },
  ]
}

const budgetOptions = [
  { value: "150-300", label: "£150 – £300" },
  { value: "300-500", label: "£300 – £500" },
  { value: "500-1000", label: "£500 – £1,000" },
  { value: "1000-2000", label: "£1,000 – £2,000" },
  { value: "2000-5000", label: "£2,000 – £5,000" },
  { value: "5000-10000", label: "£5,000 – £10,000" },
  { value: "10000+", label: "£10,000+" },
]

interface FormData {
  service: string
  timeline: string
  projectBrief: string
  budget: string
  fullName: string
  email: string
  phone: string
  company: string
}

interface QuotationFormProps {
  onClose?: () => void
}

export function QuotationForm({ onClose }: QuotationFormProps) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    service: "",
    timeline: "",
    projectBrief: "",
    budget: "",
    fullName: "",
    email: "",
    phone: "",
    company: "",
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<FormData> = {}

    if (currentStep === 1) {
      if (!formData.service) newErrors.service = "Please select a service"
    }

    if (currentStep === 2) {
      if (!formData.budget) newErrors.budget = "Please select a budget"
    }

    if (currentStep === 3) {
      if (!formData.fullName) newErrors.fullName = "Full name is required"
      if (!formData.email) newErrors.email = "Email is required"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    setStep(step - 1)
    setErrors({})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(3)) return

    setLoading(true)

    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `📋 *Quotation Request*\n\n` +
        `🛠️ *Service:* ${serviceOptions.find((s) => s.value === formData.service)?.label || formData.service}\n` +
        `⏰ *Timeline:* ${formData.timeline ? getTimelineOptions(formData.service).find((t) => t.value === formData.timeline)?.label : "Not specified"}\n` +
        `💰 *Budget:* ${budgetOptions.find((b) => b.value === formData.budget)?.label || formData.budget}\n` +
        `📝 *Project Brief:* ${formData.projectBrief || "Not provided"}\n\n` +
        `👤 *Name:* ${formData.fullName}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📱 *Phone:* ${formData.phone || "Not provided"}\n` +
        `🏢 *Company:* ${formData.company || "Not provided"}\n\n` +
        `_Sent from Linkedo Quotation Form_`
    )

    const whatsappNumber = "447927969991"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank")

    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    onClose?.()
  }

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }

    if (field === "service") {
      setFormData((prev) => ({ ...prev, timeline: "" }))
      if (errors.timeline) {
        setErrors((prev) => ({ ...prev, timeline: undefined }))
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Step {step} of 3</span>
          <span className="text-foreground font-medium">
            {step === 1 && "Service & Timeline"}
            {step === 2 && "Project Details"}
            {step === 3 && "Contact Information"}
          </span>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                s <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          {step === 1 && (
            <>
              <FormSelect
                label="Service Interested In"
                placeholder="Select a service"
                options={serviceOptions}
                value={formData.service}
                onChange={(e) => updateFormData("service", e.target.value)}
                error={errors.service}
                required
              />
              <FormSelect
                label="Project Timeline"
                placeholder="Select timeline (optional)"
                options={getTimelineOptions(formData.service)}
                value={formData.timeline}
                onChange={(e) => updateFormData("timeline", e.target.value)}
              />
            </>
          )}

          {step === 2 && (
            <>
              <FormSelect
                label="Estimated Budget"
                placeholder="Select budget"
                options={budgetOptions}
                value={formData.budget}
                onChange={(e) => updateFormData("budget", e.target.value)}
                error={errors.budget}
                required
              />
              <FormTextarea
                label="Project Brief / Requirements"
                placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                rows={6}
                value={formData.projectBrief}
                onChange={(e) => updateFormData("projectBrief", e.target.value)}
                error={errors.projectBrief}
              />
            </>
          )}

          {step === 3 && (
            <>
              <FormInput
                label="Full Name"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) => updateFormData("fullName", e.target.value)}
                error={errors.fullName}
                required
              />
              <FormInput
                label="Email Address"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                error={errors.email}
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="Phone Number"
                  type="tel"
                  placeholder="+44 7927 969991"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                />
                <FormInput
                  label="Company Name"
                  placeholder="Acme"
                  value={formData.company}
                  onChange={(e) => updateFormData("company", e.target.value)}
                />
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-3 pt-2">
        {step > 1 && (
          <AnimatedButton type="button" variant="secondary" onClick={handleBack} className="flex-1">
            <ArrowLeft className="w-4 h-4" />
            Back
          </AnimatedButton>
        )}
        {step < 3 ? (
          <AnimatedButton type="button" onClick={handleNext} className="flex-1">
            Next
            <ArrowRight className="w-4 h-4" />
          </AnimatedButton>
        ) : (
          <AnimatedButton type="submit" loading={loading} className="flex-1">
            <Check className="w-4 h-4" />
            Request My Quote
          </AnimatedButton>
        )}
      </div>
    </form>
  )
}
