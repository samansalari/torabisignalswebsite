import React from 'react'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import '@/styles/globals.css'
import '@/styles/theme.css'
import '@/styles/typography.css'

export const metadata: Metadata = {
  title: {
    default: 'CardioCare Analyser',
    template: '%s | CardioCare Analyser',
  },
  description: 'Advanced cardiac care analysis and monitoring',
}

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



