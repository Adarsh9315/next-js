// pages/_app.tsx
import type { AppProps } from 'next/app'
import React from 'react'
import '../app/globals.css' // Adjust the path to your global styles
import Layout from '../app/layout' // Adjust the path to your layout component

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
