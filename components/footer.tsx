'use client'

import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 liquid-gradient opacity-5" />

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00FFC2] to-[#D4A5FF] flex items-center justify-center font-syne font-bold text-midnight-pearl text-sm">S</div>
                <span className="font-syne font-bold text-white">SkinnyTools</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Premium equipment for beauty and wellness professionals.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-syne font-bold text-white mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 text-sm hover:text-[#00FFC2] transition-colors">Laser Systems</a></li>
                <li><a href="#" className="text-white/60 text-sm hover:text-[#00FFC2] transition-colors">Ultrasonic Devices</a></li>
                <li><a href="#" className="text-white/60 text-sm hover:text-[#00FFC2] transition-colors">Massage Devices</a></li>
                <li><a href="#" className="text-white/60 text-sm hover:text-[#00FFC2] transition-colors">Cryotherapy</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-syne font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 text-sm hover:text-[#D4A5FF] transition-colors">About Us</a></li>
                <li><a href="#" className="text-white/60 text-sm hover:text-[#D4A5FF] transition-colors">Blog</a></li>
                <li><a href="#" className="text-white/60 text-sm hover:text-[#D4A5FF] transition-colors">Careers</a></li>
                <li><a href="#" className="text-white/60 text-sm hover:text-[#D4A5FF] transition-colors">News</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-syne font-bold text-white mb-4">Contact</h4>
              <div className="space-y-3">
                <a href="tel:+14155552671" className="flex items-center gap-2 text-white/60 text-sm hover:text-[#00FFC2] transition-colors">
                  <Phone size={16} />
                  +1 (415) 555-2671
                </a>
                <a href="mailto:info@skinnytools.com" className="flex items-center gap-2 text-white/60 text-sm hover:text-[#00FFC2] transition-colors">
                  <Mail size={16} />
                  info@skinnytools.com
                </a>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <MapPin size={16} />
                  San Francisco, USA
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/50 text-sm">
                © 2024 SkinnyTools. All rights reserved.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
