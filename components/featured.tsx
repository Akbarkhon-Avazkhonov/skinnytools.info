'use client'

import Image from 'next/image'

const featuredProducts = [
  {
    name: 'Pro Elite Facial Massager',
    description: 'T-Shape fluid massager with micro-vibration',
    price: '$450',
    badge: 'Pro-Grade',
    image: '/products/massager.jpg'
  },
  {
    name: 'UltraLift Pro System',
    description: 'Professional ultrasonic system',
    price: '$1,200',
    badge: 'Premium',
    image: '/products/ultralift.jpg'
  },
  {
    name: 'Cryo-Precision Device',
    description: 'Next-generation cryotherapeutic device',
    price: '$850',
    badge: 'Innovation',
    image: '/products/cryo.jpg'
  },
  {
    name: 'LaserGlow Advanced',
    description: 'Multi-functional laser system',
    price: '$1,800',
    badge: 'Elite',
    image: '/products/laser.jpg'
  },
]

export function Featured() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 liquid-gradient opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Products
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Premium equipment curated by our experts for your salon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, idx) => (
            <div
              key={idx}
              className="group relative glass rounded-2xl overflow-hidden p-6 thin-border hover:border-[#00FFC2]/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Product image */}
              <div className="w-full h-48 rounded-lg mb-4 relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/40">
                  <span className="text-white text-sm font-semibold">View Details</span>
                </div>
              </div>

              {/* Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-[#00FFC2]/20 text-[#00FFC2] text-xs font-semibold mb-3">
                {product.badge}
              </div>

              <h3 className="font-syne font-bold text-white mb-2 text-lg">
                {product.name}
              </h3>
              <p className="text-white/60 text-sm mb-4">
                {product.description}
              </p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
