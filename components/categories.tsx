'use client'

import { Zap, Waves, Sparkles, Wind } from 'lucide-react'

const equipmentCategories = [
  {
    icon: Zap,
    title: 'Laser Systems',
    description: 'Advanced laser technology for hair removal, lifting and skin rejuvenation.',
    color: 'from-[#00FFC2] to-blue-500',
    glow: 'glow-mint'
  },
  {
    icon: Waves,
    title: 'Ultrasonic Devices',
    description: 'Ultrasonic systems for deep cleansing and facial lifting.',
    color: 'from-[#D4A5FF] to-pink-500',
    glow: 'glow-orchid'
  },
  {
    icon: Sparkles,
    title: 'Massage Devices',
    description: 'Innovative massagers with ergonomic design for client relaxation.',
    color: 'from-[#00FFC2] to-purple-500',
    glow: 'glow-mint'
  },
  {
    icon: Wind,
    title: 'Cryotherapy',
    description: 'Cryo-technology for pore minimization and inflammation control.',
    color: 'from-[#D4A5FF] to-cyan-500',
    glow: 'glow-orchid'
  },
]

export function Categories() {
  return (
    <section id="categories" className="relative py-24 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 liquid-gradient rounded-full filter blur-3xl opacity-5" />
      <div className="absolute bottom-0 left-0 w-96 h-96 liquid-gradient rounded-full filter blur-3xl opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4 text-white">
            Equipment Categories
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Complete range of professional equipment for beauty salons and spa centers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipmentCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={idx}
                className="group glass rounded-2xl p-6 thin-border hover:border-[#00FFC2]/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {/* Icon background */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} mb-4 flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                  <Icon size={24} className="text-white" />
                </div>

                <h3 className="font-syne font-bold text-white mb-2 text-lg">
                  {category.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {category.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center text-[#00FFC2] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more →
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
