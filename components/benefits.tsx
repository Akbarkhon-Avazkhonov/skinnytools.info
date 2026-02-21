import { Shield, Leaf, Globe, Wrench } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: '10-Year Warranty',
    description: 'Every product is backed by our industry-leading warranty. No questions asked.',
    accent: 'var(--terminal-amber)',
  },
  {
    icon: Leaf,
    title: 'Eco-Conscious Materials',
    description: 'Recycled fabrics, biodegradable packaging, and carbon-offset shipping.',
    accent: 'var(--passport-teal)',
  },
  {
    icon: Globe,
    title: 'Free Worldwide Shipping',
    description: 'We deliver to 120+ countries. Your nest arrives at your doorstep, anywhere.',
    accent: 'var(--terminal-amber)',
  },
  {
    icon: Wrench,
    title: 'Lifetime Repair Program',
    description: 'Broken zipper? Cracked shell? Send it in and we will fix it for free.',
    accent: 'var(--passport-teal)',
  },
]

export function Benefits() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 paper-texture">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[var(--passport-teal)]/10 text-[var(--passport-teal)] text-xs font-semibold rounded-full stamp-text tracking-widest mb-4">
            Why Outdoornests
          </span>
          <h2 className="font-archivo text-4xl md:text-5xl text-[var(--deep-altitude)] mb-4 text-balance">
            Built Different. Built to Last.
          </h2>
          <p className="text-[var(--deep-altitude)]/60 max-w-xl mx-auto leading-relaxed">
            We do not just sell luggage. We engineer mobile sanctuaries for the modern nomad.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 border border-[var(--deep-altitude)]/10 hover:border-[var(--terminal-amber)]/30 hover:shadow-xl hover:shadow-[var(--terminal-amber)]/5 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `color-mix(in srgb, ${benefit.accent} 12%, transparent)` }}
                >
                  <Icon size={24} style={{ color: benefit.accent }} />
                </div>
                <h3 className="font-archivo text-lg text-[var(--deep-altitude)] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[var(--deep-altitude)]/60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative rounded-2xl overflow-hidden bg-[var(--deep-altitude)] p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--terminal-amber)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--passport-teal)]/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-archivo text-2xl md:text-3xl text-[var(--cloud-paper)] mb-2">
                Ready to Find Your Nest?
              </h3>
              <p className="text-[var(--cloud-paper)]/60">
                Join 50,000+ travelers who carry comfort everywhere they go.
              </p>
            </div>
            <a
              href="#shop"
              className="shrink-0 px-8 py-4 bg-[var(--terminal-amber)] text-[var(--deep-altitude)] font-semibold rounded-xl hover:shadow-lg hover:shadow-[var(--terminal-amber)]/30 transition-all duration-300"
            >
              Shop the Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
