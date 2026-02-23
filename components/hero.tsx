import Image from 'next/image'
import { ArrowRight, Shield, Truck, Award } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Mountain ridge at golden hour with premium luggage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-altitude)]/90 via-[var(--deep-altitude)]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-altitude)]/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
        <div className="max-w-2xl pt-20 pb-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--terminal-amber)]/20 border border-[var(--terminal-amber)]/40 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--terminal-amber)] animate-pulse" />
            <span className="text-xs font-semibold text-[var(--terminal-amber)] stamp-text tracking-widest">New Collection 2026</span>
          </div>

          {/* Headline */}
          <h1 className="font-archivo text-5xl sm:text-6xl lg:text-7xl text-[var(--cloud-paper)] leading-[1.05] mb-6">
            <span className="block">Pack the World.</span>
            <span className="block text-[var(--terminal-amber)]">Carry the Comfort.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[var(--cloud-paper)]/70 leading-relaxed mb-10 max-w-lg">
            Precision-engineered luggage for those who find home on the road. From indestructible hardshells to versatile weekenders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#shop"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--terminal-amber)] text-[var(--deep-altitude)] font-semibold rounded-xl hover:shadow-xl hover:shadow-[var(--terminal-amber)]/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Browse Collection
              <ArrowRight size={18} />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--cloud-paper)]/30 text-[var(--cloud-paper)] font-semibold rounded-xl hover:bg-[var(--cloud-paper)]/10 transition-all duration-300"
            >
              Explore Categories
            </a>
          </div>

          {/* Trust badges */}
          
        </div>
      </div>
    </section>
  )
}
