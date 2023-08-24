import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header/Header'
import CommunityProvider from './contexts/CommunityContext'
import HandProvider from './contexts/HandContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'POKERxAI',
  description: 'Poker app calculates hand strength',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header />
        <CommunityProvider>
          <HandProvider>
            {children}
          </HandProvider>
        </CommunityProvider>
        
      </body>
    </html>
  )
}
