"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface ParticleBackgroundProps {
  className?: string
}

// Caps the pairwise connection-line check below at a fixed cost regardless
// of viewport size, so a wide desktop screen can't blow up the O(n^2) work
// done every animation frame.
const MAX_PARTICLES = 60
const CONNECTION_DISTANCE = 100
const CONNECTION_DISTANCE_SQUARED = CONNECTION_DISTANCE * CONNECTION_DISTANCE

export function ParticleBackground({ className }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    // Cached CSS-pixel size, updated only on resize — reading
    // canvas.offsetWidth/offsetHeight on every particle on every frame was
    // the main source of main-thread work and forced-reflow risk here.
    let width = 0
    let height = 0
    let particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    const resize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const createParticles = () => {
      const count = Math.min(MAX_PARTICLES, Math.floor((width * height) / 15000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      }))
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity})`
        ctx.fill()
      })

      // Draw connections. Compares squared distance first so most
      // out-of-range pairs skip the Math.sqrt call entirely.
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distanceSquared = dx * dx + dy * dy

          if (distanceSquared < CONNECTION_DISTANCE_SQUARED) {
            const distance = Math.sqrt(distanceSquared)
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 * (1 - distance / CONNECTION_DISTANCE)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resize()
      createParticles()
    }

    resize()
    createParticles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 w-full h-full pointer-events-none", className)} />
}
