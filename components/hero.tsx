'use client'

import React, { useEffect, useRef } from 'react'
import { Sparkles } from 'lucide-react'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight / 2

    let animationId: number
    let time = 0

    const animate = () => {
      // Background
      ctx.fillStyle = '#0B0E14'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw animated particles
      time += 0.005
      for (let i = 0; i < 50; i++) {
        const x = (Math.sin(time + i * 0.1) * 100 + canvas.width / 2 + i * 5) % canvas.width
        const y = (Math.cos(time + i * 0.15) * 50 + canvas.height / 2) % canvas.height
        const size = Math.abs(Math.sin(time + i * 0.2)) * 2 + 1

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3)
        gradient.addColorStop(0, 'rgba(0, 255, 194, 0.8)')
        gradient.addColorStop(1, 'rgba(212, 165, 255, 0.0)')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight / 2
    }

    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden" style={{ backgroundImage: 'url(/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Canvas background */}
      

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center justify-start text-center pt-20">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
          <Sparkles size={16} className="text-[#00FFC2]" />
          <span className="text-xs font-medium text-[#00FFC2]">Pro-Grade Equipment</span>
        </div>

        <h1 className="font-syne text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
          <span className="text-white">Precision for the </span>
          <span className="bg-gradient-to-r from-[#00FFC2] to-[#D4A5FF] bg-clip-text text-transparent">Pro</span>
        </h1>

        <p className="text-lg text-white/70 max-w-2xl mb-10 leading-relaxed text-pretty">
          Curated salon and spa technology for elite practitioners. From ultrasonic precision to ergonomic comfort—upgrade your clinic today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-full bg-[#00FFC2] text-midnight-pearl font-semibold hover:shadow-xl hover:shadow-[#00FFC2]/50 transition-all duration-300 transform hover:scale-105">
            Browse Catalog
          </button>
          <button className="px-8 py-4 rounded-full border border-[#D4A5FF] text-[#D4A5FF] font-semibold hover:bg-[#D4A5FF]/10 transition-all duration-300">
            Request Consultation
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 glass rounded-2xl glow-mint opacity-20 animate-pulse" />
        <div className="absolute bottom-32 left-10 w-40 h-40 glass rounded-2xl glow-orchid opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  )
}
