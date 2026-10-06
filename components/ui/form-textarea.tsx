"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const generatedId = React.useId()
    const textareaId = id || generatedId
    return (
      <div className="space-y-2">
        <label htmlFor={textareaId} className="text-sm font-medium text-foreground">
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full min-h-[120px] px-4 py-3 rounded-lg resize-none",
            "bg-input border border-border",
            "text-foreground placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
            "transition-all duration-200",
            error && "border-destructive focus:ring-destructive/50",
            className,
          )}
          {...props}
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    )
  },
)
FormTextarea.displayName = "FormTextarea"
