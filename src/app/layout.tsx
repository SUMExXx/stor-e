import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { AuthContextProvider } from '@/context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stor-E | E-Cell SGSITS',
  description: 'Official Website of Stor-E by E-Cell SGSITS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar/>
          <div className='mt-[72px]'>
            {children}
          </div>
          <Footer/>
        </AuthContextProvider>
      </body>
    </html>
  )
}
