import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah Mitchell',
    role: 'Travel Blogger',
    rating: 5,
    text: 'The hardshell carry-on survived a 3-week European trip without a scratch. The spinner wheels are incredibly smooth and the interior organization is top-notch.',
    product: 'Altitude Hardshell',
  },
  {
    name: 'James Chen',
    role: 'Business Traveler',
    rating: 5,
    text: 'I have tried dozens of travel bags over the years. The weekender from Outdoornests is hands down the best I have ever used. Perfect for short trips.',
    product: 'Canyon Weekender',
  },
  {
    name: 'Maria Rodriguez',
    role: 'Photographer',
    rating: 4,
    text: 'Great backpack for carrying camera gear on outdoor shoots. The padding is excellent and the waterproof coating has saved my equipment more than once.',
    product: 'Summit Backpack',
  },
  {
    name: 'David Park',
    role: 'Digital Nomad',
    rating: 5,
    text: 'Living out of a suitcase for 6 months straight and the Altitude Hardshell has held up beautifully. Worth every penny for serious travelers.',
    product: 'Altitude Hardshell',
  },
  {
    name: 'Emily Watson',
    role: 'Adventure Guide',
    rating: 5,
    text: 'The packing cubes changed my life. I can organize everything perfectly and they compress so well. A must-have for any trip.',
    product: 'Trail Organizer Set',
  },
  {
    name: 'Alex Turner',
    role: 'Frequent Flyer',
    rating: 4,
    text: 'Sleek design, durable build, and fits perfectly in overhead bins. The aluminum finish still looks brand new after months of heavy use.',
    product: 'Voyager Carry-On',
  },
]

export default function ReviewsPage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        <h1 className="font-archivo text-4xl md:text-5xl text-[var(--deep-altitude)] mb-4">Customer Reviews</h1>
        <p className="text-[var(--deep-altitude)]/60 max-w-2xl mb-12">
          Real stories from real travelers who trust Outdoornests on every journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[var(--cloud-paper)] border border-[var(--deep-altitude)]/10 rounded-2xl p-6 hover:shadow-lg hover:border-[var(--terminal-amber)]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? 'fill-[var(--terminal-amber)] text-[var(--terminal-amber)]' : 'text-[var(--deep-altitude)]/20'}
                  />
                ))}
              </div>
              <p className="text-[var(--deep-altitude)]/80 text-sm leading-relaxed mb-4">
                {`"${review.text}"`}
              </p>
              <div className="pt-4 border-t border-[var(--deep-altitude)]/10">
                <p className="font-semibold text-[var(--deep-altitude)] text-sm">{review.name}</p>
                <p className="text-[var(--deep-altitude)]/50 text-xs">{review.role}</p>
                <span className="inline-block mt-2 px-2 py-0.5 bg-[var(--terminal-amber)]/10 text-[var(--terminal-amber)] text-xs rounded-full font-medium">
                  {review.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
