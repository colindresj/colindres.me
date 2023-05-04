import { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Analytics } from '@vercel/analytics/react';
import NextProgressBar from 'nextjs-progressbar'
import { isDarkMode } from '../lib/util'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [color, setColor] = useState('')

  useEffect(() => {
    setColor(isDarkMode() ? '#fbebad' : '#3e54fa')
  }, [])

  return (
    <>
      <NextProgressBar color={color} height={2} />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
