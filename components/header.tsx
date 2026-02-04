'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <nav className="glass pulse-glow mx-4 my-4 rounded-full">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00FFC2] to-[#D4A5FF] flex items-center justify-center font-syne font-bold text-midnight-pearl text-sm">S</div>
            <span className="font-syne font-bold text-lg text-white group-hover:text-[#00FFC2] transition-colors">SkinnyTools</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#equipment" className="text-sm text-white/70 hover:text-[#00FFC2] transition-colors">Equipment</Link>
            <Link href="#categories" className="text-sm text-white/70 hover:text-[#D4A5FF] transition-colors">Categories</Link>
            <Link href="#professional" className="text-sm text-white/70 hover:text-[#00FFC2] transition-colors">For Professionals</Link>
            <Link href="#contact" className="text-sm text-white/70 hover:text-[#D4A5FF] transition-colors">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 rounded-full bg-[#00FFC2] text-midnight-pearl font-semibold text-sm hover:shadow-lg hover:shadow-[#00FFC2]/50 transition-all duration-300">
              Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3">
            <Link href="#equipment" className="block text-sm text-white/70 hover:text-[#00FFC2] transition-colors">Equipment</Link>
            <Link href="#categories" className="block text-sm text-white/70 hover:text-[#D4A5FF] transition-colors">Categories</Link>
            <Link href="#professional" className="block text-sm text-white/70 hover:text-[#00FFC2] transition-colors">For Professionals</Link>
            <Link href="#contact" className="block text-sm text-white/70 hover:text-[#D4A5FF] transition-colors">Contact</Link>
            <button className="w-full px-6 py-2 rounded-full bg-[#00FFC2] text-midnight-pearl font-semibold text-sm hover:shadow-lg hover:shadow-[#00FFC2]/50 transition-all duration-300">
              Consultation
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
