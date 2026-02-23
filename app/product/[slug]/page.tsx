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

              

              <p className="text-[var(--deep-altitude)]/60 leading-relaxed mb-8 text-base">
                {product.fullDescription}
              </p>

              {/* Action button */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="px-8 py-3.5 rounded-full bg-[var(--terminal-amber)] text-[var(--deep-altitude)] font-semibold hover:shadow-lg hover:shadow-[var(--terminal-amber)]/30 transition-all duration-300">
                  Buy on Amazon
                </button>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="font-archivo text-lg text-[var(--deep-altitude)] mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--deep-altitude)]/70">
                      <ShieldCheck size={16} className="text-[var(--passport-teal)] shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="font-archivo text-lg text-[var(--deep-altitude)] mb-4">Specifications</h3>
                <div className="border border-[var(--deep-altitude)]/10 rounded-xl overflow-hidden">
                  {Object.entries(product.specs).map(([key, value], i) => (
                    <div
                      key={key}
                      className={`flex items-center justify-between px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-[var(--deep-altitude)]/5' : ''}`}
                    >
                      <span className="text-[var(--deep-altitude)]/50 font-medium">{key}</span>
                      <span className="text-[var(--deep-altitude)] font-semibold">{value}</span>
                    </div>
                  ))}
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
