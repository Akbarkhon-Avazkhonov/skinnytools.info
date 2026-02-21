import type { Metadata } from 'next'
import { Archivo_Black, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const archivoBlack = Archivo_Black({ weight: '400', subsets: ['latin'], variable: '--font-archivo-black' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Outdoornests | Pack the World. Carry the Comfort.',
  description: 'Precision-engineered luggage for those who find home on the road. From indestructible hardshells to versatile weekenders.',
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${archivoBlack.variable} ${outfit.variable} font-outfit antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
