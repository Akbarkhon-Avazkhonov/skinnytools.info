import Image from 'next/image'
import Link from 'next/link'
import { Star, Eye } from 'lucide-react'

export const featuredProducts = [
  {
    slug: 'nomadshell-pro-26',
    name: 'NomadShell Pro 26"',
    description: 'Polycarbonate hardshell with silent spinner wheels and TSA lock.',
    fullDescription: 'Engineered for the modern explorer, the NomadShell Pro 26" combines aerospace-grade polycarbonate with a sleek, minimalist design. Its silent 360-degree spinner wheels glide effortlessly across any surface, while the integrated TSA-approved lock keeps your belongings secure. The interior features a compression system and mesh dividers for organized packing.',
    price: '$349',
    rating: 4.9,
    reviews: 312,
    badge: 'Best Seller',
    badgeColor: 'bg-[var(--terminal-amber)] text-[var(--deep-altitude)]',
    image: '/products/hardshell.jpg',
    specs: { Material: '100% Polycarbonate', Weight: '8.2 lbs (3.7 kg)', Dimensions: '26 x 17.5 x 11.5 in', Capacity: '68L', Wheels: '4x Silent Spinners', Lock: 'TSA-Approved Combo' },
    features: ['Scratch-resistant matte finish', 'Telescopic aluminum handle', 'Interior compression straps', 'Mesh zip dividers', 'Corner guard protection', 'Expandable design (+15%)'],
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE1',
  },
  {
    slug: 'canyon-weekender',
    name: 'Canyon Weekender',
    description: 'Waxed canvas with full-grain leather trim and shoe compartment.',
    fullDescription: 'The Canyon Weekender is crafted from premium waxed canvas that develops a unique patina over time. Accented with full-grain vegetable-tanned leather, this bag is built for weekend getaways or daily commutes. The dedicated shoe compartment keeps dirty soles separate, while the padded laptop sleeve protects your tech on the go.',
    price: '$189',
    rating: 4.8,
    reviews: 186,
    badge: 'New Arrival',
    badgeColor: 'bg-[var(--passport-teal)] text-white',
    image: '/products/weekender.jpg',
    specs: { Material: 'Waxed Canvas + Leather', Weight: '3.1 lbs (1.4 kg)', Dimensions: '20 x 11 x 10 in', Capacity: '35L', Strap: 'Detachable Shoulder', Closure: 'YKK Brass Zippers' },
    features: ['Separate shoe compartment', 'Padded 15" laptop sleeve', 'Interior zip pocket', 'Develops natural patina', 'Water-resistant treatment', 'Brass hardware accents'],
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE2',
  },
  {
    slug: 'summit-pack-45l',
    name: 'Summit Pack 45L',
    description: 'Ripstop nylon adventure backpack with hydration system.',
    fullDescription: 'Built for trail and travel alike, the Summit Pack 45L uses lightweight ripstop nylon reinforced at high-stress points. The integrated hydration sleeve fits a 3L reservoir, while the adjustable torso length and ventilated back panel ensure all-day comfort. Multiple access points let you grab gear without unpacking everything.',
    price: '$229',
    rating: 4.7,
    reviews: 94,
    badge: 'Eco-Friendly',
    badgeColor: 'bg-[var(--passport-teal)] text-white',
    image: '/products/backpack.jpg',
    specs: { Material: 'Ripstop Nylon (recycled)', Weight: '2.9 lbs (1.3 kg)', Dimensions: '28 x 14 x 9 in', Capacity: '45L', Hydration: '3L Reservoir Compatible', Back: 'Ventilated Mesh' },
    features: ['Hydration system compatible', 'Adjustable torso length', 'Rain cover included', 'Top, front & bottom access', 'Hip belt with zip pockets', 'Made from 100% recycled nylon'],
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE3',
  },
  {
    slug: 'aerocarry-aluminum',
    name: 'AeroCarry Aluminum',
    description: 'Brushed aluminum carry-on with corner guards and leather handle.',
    fullDescription: 'The AeroCarry Aluminum is our flagship carry-on, machined from a single block of aerospace-grade aluminum alloy. Every detail speaks to precision craftsmanship: reinforced corner guards absorb impacts, the hand-stitched leather handle provides a luxurious grip, and the dual TSA locks offer maximum security. This is luggage built for a lifetime.',
    price: '$499',
    rating: 5.0,
    reviews: 67,
    badge: 'Premium',
    badgeColor: 'bg-[var(--deep-altitude)] text-[var(--cloud-paper)]',
    image: '/products/carryon.jpg',
    specs: { Material: 'Aerospace Aluminum Alloy', Weight: '9.7 lbs (4.4 kg)', Dimensions: '21.5 x 13.5 x 9 in', Capacity: '36L', Wheels: '4x Japanese Hinomoto', Lock: 'Dual TSA-Approved' },
    features: ['Hand-stitched leather handle', 'Reinforced corner guards', 'Flex-divider interior system', 'Silent Hinomoto wheels', 'Lifetime manufacturer warranty', 'Personalized monogram option'],
    amazonUrl: 'https://www.amazon.com/dp/B0EXAMPLE4',
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
                  
                  <Link href={`/product/${product.slug}`} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--terminal-amber)]/10 text-[var(--terminal-amber)] text-sm font-semibold hover:bg-[var(--terminal-amber)] hover:text-[var(--deep-altitude)] transition-all duration-300">
                    <Eye size={14} />
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
