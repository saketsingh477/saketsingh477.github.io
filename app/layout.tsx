import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Saket Singh | Embedded Firmware Engineer',
  description: 'From bare-metal registers to real-time systems — building firmware that works at the hardware boundary. Embedded firmware engineer specializing in STM32, FreeRTOS, and IoT systems.',
  keywords: ['Embedded Firmware Engineer', 'STM32', 'FreeRTOS', 'IoT', 'Bare-Metal', 'CMSIS', 'ARM Cortex-M4'],
  authors: [{ name: 'Saket Singh' }],
  openGraph: {
    title: 'Saket Singh | Embedded Firmware Engineer',
    description: 'From bare-metal registers to real-time systems — building firmware that works at the hardware boundary.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
