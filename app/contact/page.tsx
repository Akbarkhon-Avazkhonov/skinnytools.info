import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@outdoornests.com',
    href: 'mailto:hello@outdoornests.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (415) 555-0192',
    href: 'tel:+14155550192',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '742 Evergreen Trail, Portland, OR 97201',
    href: null,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon - Fri, 9am - 6pm PST',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        <h1 className="font-archivo text-4xl md:text-5xl text-[var(--deep-altitude)] mb-4">Get in Touch</h1>
        <p className="text-[var(--deep-altitude)]/60 max-w-2xl mb-16">
          Have a question about our products or need help with an order? We would love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[var(--cloud-paper)] border border-[var(--deep-altitude)]/10 rounded-2xl p-8">
            <h2 className="font-archivo text-xl text-[var(--deep-altitude)] mb-6">Send us a message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-[var(--deep-altitude)]/70 mb-1.5">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--deep-altitude)]/5 border border-[var(--deep-altitude)]/10 text-[var(--deep-altitude)] text-sm placeholder:text-[var(--deep-altitude)]/30 focus:outline-none focus:border-[var(--terminal-amber)] transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-[var(--deep-altitude)]/70 mb-1.5">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--deep-altitude)]/5 border border-[var(--deep-altitude)]/10 text-[var(--deep-altitude)] text-sm placeholder:text-[var(--deep-altitude)]/30 focus:outline-none focus:border-[var(--terminal-amber)] transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[var(--deep-altitude)]/70 mb-1.5">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--deep-altitude)]/5 border border-[var(--deep-altitude)]/10 text-[var(--deep-altitude)] text-sm placeholder:text-[var(--deep-altitude)]/30 focus:outline-none focus:border-[var(--terminal-amber)] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-[var(--deep-altitude)]/70 mb-1.5">Subject</label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--deep-altitude)]/5 border border-[var(--deep-altitude)]/10 text-[var(--deep-altitude)] text-sm placeholder:text-[var(--deep-altitude)]/30 focus:outline-none focus:border-[var(--terminal-amber)] transition-colors"
                  placeholder="Order inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[var(--deep-altitude)]/70 mb-1.5">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--deep-altitude)]/5 border border-[var(--deep-altitude)]/10 text-[var(--deep-altitude)] text-sm placeholder:text-[var(--deep-altitude)]/30 focus:outline-none focus:border-[var(--terminal-amber)] transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[var(--terminal-amber)] text-[var(--deep-altitude)] font-semibold text-sm rounded-xl hover:bg-[var(--terminal-amber)]/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 bg-[var(--cloud-paper)] border border-[var(--deep-altitude)]/10 rounded-2xl hover:border-[var(--terminal-amber)]/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--terminal-amber)]/10 flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-[var(--terminal-amber)]" />
                </div>
                <div>
                  <p className="text-[var(--deep-altitude)]/50 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-[var(--deep-altitude)] text-sm font-medium hover:text-[var(--terminal-amber)] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[var(--deep-altitude)] text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* FAQ hint */}
            <div className="p-6 bg-[var(--terminal-amber)]/10 rounded-2xl">
              <h3 className="font-archivo text-lg text-[var(--deep-altitude)] mb-2">Quick Answers</h3>
              <p className="text-[var(--deep-altitude)]/60 text-sm leading-relaxed mb-4">
                Most questions about shipping, returns, and warranty are covered in our FAQ section.
              </p>
              <span className="text-[var(--terminal-amber)] text-sm font-semibold cursor-pointer hover:underline">
                Browse FAQ &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
