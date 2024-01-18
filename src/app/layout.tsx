import React from 'react' // Import React if you're using a version older than React 17
import { Inter } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: ReactNode
}
const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return (
    <div className={inter.className}>
      {children}
    </div>
  )
}

export default RootLayout
