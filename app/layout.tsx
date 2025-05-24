import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SE²',
  description: 'Masterclass for software architecture',
  icons: {
    icon: '/Icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
