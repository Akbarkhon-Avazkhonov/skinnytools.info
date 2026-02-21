import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Mountain, Globe, Compass, Heart } from 'lucide-react'

const values = [
  {
    icon: Mountain,
    title: 'Built for Adventure',
    description: 'Every product is tested in real-world conditions, from rugged mountain trails to busy airport terminals.',
  },
  {
    icon: Globe,
    title: 'Sustainable Craft',
    description: 'We use recycled materials and ethical manufacturing processes to minimize our environmental footprint.',
  },
  {
    icon: Compass,
    title: 'Thoughtful Design',
    description: 'Every pocket, zipper, and compartment is intentionally designed to solve real travel problems.',
  },
  {
    icon: Heart,
    title: 'Community First',
    description: 'We are a community of travelers, adventurers, and explorers who believe the journey matters as much as the destination.',
  },
]

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        <h1 className="font-archivo text-4xl md:text-5xl text-[var(--deep-altitude)] mb-4">About Outdoornests</h1>
        <p className="text-[var(--deep-altitude)]/60 max-w-2xl mb-16">
          We started with a simple belief: travel gear should work as hard as you do. Founded by adventurers, built for everyone.
        </p>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-archivo text-2xl text-[var(--deep-altitude)] mb-4">Our Story</h2>
            <div className="space-y-4 text-[var(--deep-altitude)]/70 leading-relaxed">
              <p>
                Outdoornests was born in 2019 from a simple frustration: why does travel gear have to be either durable or stylish, but never both?
              </p>
              <p>
                Our founders, a group of seasoned travelers and product designers, set out to create luggage and accessories that could survive the toughest conditions while looking great at any destination.
              </p>
              <p>
                Today, we serve thousands of travelers worldwide, from weekend warriors to full-time digital nomads. Every piece we create is rigorously tested across real travel scenarios before it reaches your doorstep.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[var(--terminal-amber)]/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <span className="font-archivo text-3xl text-[var(--terminal-amber)]">50K+</span>
              <span className="text-[var(--deep-altitude)]/60 text-sm mt-1">Happy Travelers</span>
            </div>
            <div className="bg-[var(--deep-altitude)]/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <span className="font-archivo text-3xl text-[var(--deep-altitude)]">35+</span>
              <span className="text-[var(--deep-altitude)]/60 text-sm mt-1">Countries Shipped</span>
            </div>
            <div className="bg-[var(--deep-altitude)]/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <span className="font-archivo text-3xl text-[var(--deep-altitude)]">4.8</span>
              <span className="text-[var(--deep-altitude)]/60 text-sm mt-1">Average Rating</span>
            </div>
            <div className="bg-[var(--passport-teal)]/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <span className="font-archivo text-3xl text-[var(--passport-teal)]">100%</span>
              <span className="text-[var(--deep-altitude)]/60 text-sm mt-1">Recycled Materials</span>
            </div>
          </div>
        </div>

        {/* Values */}
        <h2 className="font-archivo text-2xl text-[var(--deep-altitude)] mb-8">What We Stand For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-[var(--cloud-paper)] border border-[var(--deep-altitude)]/10 rounded-2xl p-6 hover:border-[var(--terminal-amber)]/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--terminal-amber)]/10 flex items-center justify-center mb-4">
                <value.icon size={20} className="text-[var(--terminal-amber)]" />
              </div>
              <h3 className="font-archivo text-lg text-[var(--deep-altitude)] mb-2">{value.title}</h3>
              <p className="text-[var(--deep-altitude)]/60 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
