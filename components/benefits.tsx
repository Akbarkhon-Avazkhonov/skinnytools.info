'use client'

import { CheckCircle, Users, Zap, Award } from 'lucide-react'

const benefits = [
  {
    icon: CheckCircle,
    title: 'Verified Quality',
    description: 'All equipment has been tested and approved by industry professionals.'
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Our team of experts is ready to help you anytime.'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Professional equipment delivery worldwide.'
  },
  {
    icon: Award,
    title: 'Warranty',
    description: 'Full warranty and technical support throughout the entire period of use.'
  },
]

export function Benefits() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 glass rounded-full glow-mint opacity-5" />
      <div className="absolute bottom-20 left-10 w-80 h-80 glass rounded-full glow-orchid opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Choose SkinnyTools
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We offer not just equipment, but a complete solution for growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                className="glass rounded-2xl p-8 thin-border hover:border-[#D4A5FF]/50 transition-all duration-300 group hover:bg-[#D4A5FF]/5"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00FFC2] to-[#D4A5FF] mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-midnight-pearl" />
                </div>
                <h3 className="font-syne font-bold text-white mb-3 text-lg">
                  {benefit.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
