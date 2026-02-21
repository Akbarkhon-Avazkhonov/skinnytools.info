'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingBag } from 'lucide-react'

const navItems = [
  { label: 'Hardshells', href: '#hardshells' },
  { label: 'Weekenders', href: '#weekenders' },
  { label: 'Backpacks', href: '#backpacks' },
  { label: 'Accessories', href: '#accessories' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--cloud-paper)]/90 backdrop-blur-md border-b border-[var(--deep-altitude)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[var(--deep-altitude)] flex items-center justify-center">
              <span className="font-archivo text-[var(--terminal-amber)] text-sm font-bold">ON</span>
            </div>
            <span className="font-archivo text-[var(--deep-altitude)] text-lg tracking-tight">Outdoornests</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-[var(--deep-altitude)]/70 hover:text-[var(--deep-altitude)] hover:bg-[var(--deep-altitude)]/5 rounded-lg transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[var(--cloud-paper)] border-t border-[var(--deep-altitude)]/10 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm text-[var(--deep-altitude)]/70 hover:text-[var(--deep-altitude)] hover:bg-[var(--deep-altitude)]/5 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#shop"
              className="mt-2 px-5 py-3 bg-[var(--terminal-amber)] text-[var(--deep-altitude)] text-sm font-semibold rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Shop Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
