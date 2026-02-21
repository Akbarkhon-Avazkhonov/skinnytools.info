import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const categories = [
  {
    title: 'Hardshell Suitcases',
    description: 'Indestructible polycarbonate shells built for the toughest journeys.',
    image: '/products/hardshell.jpg',
    span: 'md:col-span-2 md:row-span-2',
    size: 'large',
  },
  {
    title: 'Weekender Bags',
    description: 'Canvas and leather for short getaways.',
    image: '/products/weekender.jpg',
    span: 'md:col-span-1',
    size: 'small',
  },
  {
    title: 'Adventure Backpacks',
    description: 'Rugged packs for trails and cities.',
    image: '/products/backpack.jpg',
    span: 'md:col-span-1',
    size: 'small',
  },
  {
    title: 'Travel Organizers',
    description: 'Packing cubes and accessories for tidy travel.',
    image: '/products/organizer.jpg',
    span: 'md:col-span-1',
    size: 'small',
  },
  {
    title: 'Carry-On Collection',
    description: 'Aluminum spinners that fit every overhead bin.',
    image: '/products/carryon.jpg',
    span: 'md:col-span-1',
    size: 'small',
  },
]

export function Categories() {
  return (
    <section id="categories" className="py-24 px-4 sm:px-6 lg:px-8 paper-texture">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[var(--terminal-amber)]/10 text-[var(--terminal-amber)] text-xs font-semibold rounded-full stamp-text tracking-widest mb-4">
            Categories
          </span>
          <h2 className="font-archivo text-4xl md:text-5xl text-[var(--deep-altitude)] mb-4 text-balance">
            Gear for Every Journey
          </h2>
          <p className="text-[var(--deep-altitude)]/60 max-w-xl mx-auto leading-relaxed">
            From cabin-approved carry-ons to expedition-ready backpacks, find your perfect travel companion.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={`#${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
              className={`group relative rounded-2xl overflow-hidden ${cat.span} ${cat.size === 'large' ? 'min-h-[400px]' : 'min-h-[200px]'}`}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-altitude)]/90 via-[var(--deep-altitude)]/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className={`font-archivo text-[var(--cloud-paper)] mb-1 ${cat.size === 'large' ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                      {cat.title}
                    </h3>
                    <p className="text-[var(--cloud-paper)]/60 text-sm">
                      {cat.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[var(--terminal-amber)] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shrink-0">
                    <ArrowUpRight size={18} className="text-[var(--deep-altitude)]" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
