import { Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[var(--deep-altitude)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[var(--terminal-amber)] flex items-center justify-center">
                <span className="font-archivo text-[var(--deep-altitude)] text-sm font-bold">ON</span>
              </div>
              <span className="font-archivo text-[var(--cloud-paper)] text-lg">Outdoornests</span>
            </div>
            <p className="text-[var(--cloud-paper)]/50 text-sm leading-relaxed mb-6">
              Precision-engineered luggage for those who find home on the road. Your next nest is right here.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[var(--cloud-paper)]/50 hover:bg-[var(--terminal-amber)] hover:text-[var(--deep-altitude)] transition-all duration-300" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[var(--cloud-paper)]/50 hover:bg-[var(--terminal-amber)] hover:text-[var(--deep-altitude)] transition-all duration-300" aria-label="Twitter">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-archivo text-[var(--cloud-paper)] mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-[var(--cloud-paper)]/50 text-sm hover:text-[var(--terminal-amber)] transition-colors">Hardshell Suitcases</a></li>
              <li><a href="#" className="text-[var(--cloud-paper)]/50 text-sm hover:text-[var(--terminal-amber)] transition-colors">Weekender Bags</a></li>
              <li><a href="#" className="text-[var(--cloud-paper)]/50 text-sm hover:text-[var(--terminal-amber)] transition-colors">Adventure Backpacks</a></li>
              <li><a href="#" className="text-[var(--cloud-paper)]/50 text-sm hover:text-[var(--terminal-amber)] transition-colors">Travel Organizers</a></li>
              <li><a href="#" className="text-[var(--cloud-paper)]/50 text-sm hover:text-[var(--terminal-amber)] transition-colors">Garment Bags</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-archivo text-[var(--cloud-paper)] mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-[var(--cloud-paper)]/50 text-sm hover:text-[var(--terminal-amber)] transition-colors">Our Story</a></li>
              <li><a href="#" className="text-[var(--cloud-paper)]/50 text-sm hover:text-[var(--terminal-amber)] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-[var(--cloud-paper)]/50 text-sm hover:text-[var(--terminal-amber)] transition-colors">Warranty & Repairs</a></li>
              <li><a href="#" className="text-[var(--cloud-paper)]/50 text-sm hover:text-[var(--terminal-amber)] transition-colors">Travel Blog</a></li>
              <li><a href="#" className="text-[var(--cloud-paper)]/50 text-sm hover:text-[var(--terminal-amber)] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-archivo text-[var(--cloud-paper)] mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+18005551234" className="flex items-center gap-2.5 text-[var(--cloud-paper)]/50 text-sm hover:text-[var(--terminal-amber)] transition-colors">
                <Phone size={15} />
                +1 (800) 555-1234
              </a>
              <a href="mailto:hello@outdoornests.com" className="flex items-center gap-2.5 text-[var(--cloud-paper)]/50 text-sm hover:text-[var(--terminal-amber)] transition-colors">
                <Mail size={15} />
                hello@outdoornests.com
              </a>
              <div className="flex items-center gap-2.5 text-[var(--cloud-paper)]/50 text-sm">
                <MapPin size={15} />
                Portland, Oregon, USA
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[var(--cloud-paper)]/40 text-sm">
              {'© 2026 Outdoornests. All rights reserved.'}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[var(--cloud-paper)]/40 text-sm hover:text-[var(--cloud-paper)]/70 transition-colors">Privacy Policy</a>
              <a href="#" className="text-[var(--cloud-paper)]/40 text-sm hover:text-[var(--cloud-paper)]/70 transition-colors">Terms of Service</a>
              <a href="#" className="text-[var(--cloud-paper)]/40 text-sm hover:text-[var(--cloud-paper)]/70 transition-colors">Shipping Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
