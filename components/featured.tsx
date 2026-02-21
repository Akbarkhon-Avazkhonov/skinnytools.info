import Image from 'next/image'
import { Star, ShoppingBag } from 'lucide-react'

const featuredProducts = [
  {
    name: 'NomadShell Pro 26"',
    description: 'Polycarbonate hardshell with silent spinner wheels and TSA lock.',
    price: '$349',
    rating: 4.9,
    reviews: 312,
    badge: 'Best Seller',
    badgeColor: 'bg-[var(--terminal-amber)] text-[var(--deep-altitude)]',
    image: '/products/hardshell.jpg',
  },
  {
    name: 'Canyon Weekender',
    description: 'Waxed canvas with full-grain leather trim and shoe compartment.',
    price: '$189',
    rating: 4.8,
    reviews: 186,
    badge: 'New Arrival',
    badgeColor: 'bg-[var(--passport-teal)] text-white',
    image: '/products/weekender.jpg',
  },
  {
    name: 'Summit Pack 45L',
    description: 'Ripstop nylon adventure backpack with hydration system.',
    price: '$229',
    rating: 4.7,
    reviews: 94,
    badge: 'Eco-Friendly',
    badgeColor: 'bg-[var(--passport-teal)] text-white',
    image: '/products/backpack.jpg',
  },
  {
    name: 'AeroCarry Aluminum',
    description: 'Brushed aluminum carry-on with corner guards and leather handle.',
    price: '$499',
    rating: 5.0,
    reviews: 67,
    badge: 'Premium',
    badgeColor: 'bg-[var(--deep-altitude)] text-[var(--cloud-paper)]',
    image: '/products/carryon.jpg',
  },
]

export function Featured() {
  return (
    <section id="shop" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--deep-altitude)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[var(--terminal-amber)]/15 text-[var(--terminal-amber)] text-xs font-semibold rounded-full stamp-text tracking-widest mb-4">
            Featured
          </span>
          <h2 className="font-archivo text-4xl md:text-5xl text-[var(--cloud-paper)] mb-4 text-balance">
            Traveler Favorites
          </h2>
          <p className="text-[var(--cloud-paper)]/50 max-w-xl mx-auto leading-relaxed">
            Handpicked by our community of globetrotters. Tried, tested, and trusted on every continent.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, idx) => (
            <div
              key={idx}
              className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--terminal-amber)]/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 px-3 py-1 text-[10px] font-bold rounded-full stamp-text ${product.badgeColor}`}>
                  {product.badge}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-2">
                  <Star size={14} className="fill-[var(--terminal-amber)] text-[var(--terminal-amber)]" />
                  <span className="text-[var(--cloud-paper)] text-sm font-semibold">{product.rating}</span>
                  <span className="text-[var(--cloud-paper)]/40 text-xs">({product.reviews})</span>
                </div>

                <h3 className="font-archivo text-lg text-[var(--cloud-paper)] mb-1">
                  {product.name}
                </h3>
                <p className="text-[var(--cloud-paper)]/50 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-[var(--terminal-amber)] font-bold text-xl">{product.price}</span>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--terminal-amber)]/10 text-[var(--terminal-amber)] text-sm font-semibold hover:bg-[var(--terminal-amber)] hover:text-[var(--deep-altitude)] transition-all duration-300">
                    <ShoppingBag size={14} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
