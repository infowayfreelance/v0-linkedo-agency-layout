"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare } from "lucide-react"
import { QuotationModal } from "@/components/ui/quotation-modal"

export function FloatingQuoteButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* Floating button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3"
      >
        {/* Tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="hidden sm:block bg-card border border-border rounded-lg px-4 py-2 shadow-lg"
            >
              <p className="text-sm font-medium text-foreground whitespace-nowrap">Get a Free Quote</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          aria-label="Get a free quote"
          className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-cyan-500 text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-cyan-500 opacity-50 blur-xl group-hover:opacity-75 transition-opacity" />

          {/* Icon */}
          <div className="relative flex items-center justify-center w-full h-full">
            <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20" />
        </motion.button>
      </motion.div>

      {/* Quotation modal */}
      <QuotationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
