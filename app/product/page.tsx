import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Featured } from '@/components/featured'
import { Categories } from '@/components/categories'

export default function ProductPage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="font-archivo text-4xl md:text-5xl text-[var(--deep-altitude)] mb-4">Our Products</h1>
        <p className="text-[var(--deep-altitude)]/60 max-w-2xl mb-12">
          Explore our full range of premium travel gear designed for the modern adventurer. Built to last, crafted for comfort.
        </p>
      </div>
      <Categories />
      <Featured />
      <Footer />
    </main>
  )
}
