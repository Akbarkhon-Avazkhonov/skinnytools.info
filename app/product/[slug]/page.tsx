import Image from 'next/image'
import Link from 'next/link'
import { Star, ArrowLeft, ShieldCheck, Truck, RefreshCw } from 'lucide-react'
import { notFound } from 'next/navigation'
import { featuredProducts } from '@/components/featured'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = featuredProducts.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--cloud-paper)] pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-[var(--deep-altitude)]/60 hover:text-[var(--terminal-amber)] transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[var(--deep-altitude)]/5 border border-[var(--deep-altitude)]/10">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full ${product.badgeColor}`}>
                {product.badge}
              </span>
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating)
                        ? 'fill-[var(--terminal-amber)] text-[var(--terminal-amber)]'
                        : 'text-[var(--deep-altitude)]/20'}
                    />
                  ))}
                </div>
                <span className="text-[var(--deep-altitude)] font-semibold text-sm">{product.rating}</span>
                <span className="text-[var(--deep-altitude)]/40 text-sm">({product.reviews} reviews)</span>
              </div>

              <h1 className="font-archivo text-3xl md:text-4xl text-[var(--deep-altitude)] mb-3">
                {product.name}
              </h1>

              <p className="text-[var(--deep-altitude)]/60 leading-relaxed mb-6 text-lg">
                {product.description}
              </p>

              <div className="text-3xl font-bold text-[var(--terminal-amber)] mb-8">
                {product.price}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="px-8 py-3.5 rounded-full bg-[var(--terminal-amber)] text-[var(--deep-altitude)] font-semibold hover:shadow-lg hover:shadow-[var(--terminal-amber)]/30 transition-all duration-300">
                  Add to Cart
                </button>
                <button className="px-8 py-3.5 rounded-full border-2 border-[var(--deep-altitude)]/20 text-[var(--deep-altitude)] font-semibold hover:border-[var(--terminal-amber)] hover:text-[var(--terminal-amber)] transition-all duration-300">
                  Save to Wishlist
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[var(--deep-altitude)]/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--passport-teal)]/10 flex items-center justify-center">
                    <Truck size={18} className="text-[var(--passport-teal)]" />
                  </div>
                  <div>
                    <p className="text-[var(--deep-altitude)] text-sm font-semibold">Free Shipping</p>
                    <p className="text-[var(--deep-altitude)]/40 text-xs">Orders over $100</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--terminal-amber)]/10 flex items-center justify-center">
                    <ShieldCheck size={18} className="text-[var(--terminal-amber)]" />
                  </div>
                  <div>
                    <p className="text-[var(--deep-altitude)] text-sm font-semibold">Lifetime Warranty</p>
                    <p className="text-[var(--deep-altitude)]/40 text-xs">Against defects</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--deep-altitude)]/10 flex items-center justify-center">
                    <RefreshCw size={18} className="text-[var(--deep-altitude)]" />
                  </div>
                  <div>
                    <p className="text-[var(--deep-altitude)] text-sm font-semibold">30-Day Returns</p>
                    <p className="text-[var(--deep-altitude)]/40 text-xs">No questions asked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
