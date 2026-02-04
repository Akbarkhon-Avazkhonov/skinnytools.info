import React from "react"
import type { Metadata } from 'next'
import { Syne, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({ subsets: ["latin"], variable: '--font-syne' });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: '--font-plus-jakarta-sans' });

export const metadata: Metadata = {
  title: 'SkinnyTools | Precision for the Pro',
  description: 'Curated salon and spa technology for elite practitioners. Premium equipment for aesthetic professionals.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${syne.variable} ${plusJakartaSans.variable} font-plus-jakarta-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
