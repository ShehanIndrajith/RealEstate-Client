import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EstateHub - Real Estate Platform',
  description: 'Connect with top agents and builders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
