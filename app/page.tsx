import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Categories } from '@/components/categories'
import { Featured } from '@/components/featured'
import { Benefits } from '@/components/benefits'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Categories />
      <Featured />
      <Benefits />
      <Footer />
    </main>
  )
}
