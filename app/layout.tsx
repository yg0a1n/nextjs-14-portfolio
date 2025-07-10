import Providers from '@/app/providers'
import '@/styles/globals.css'
import { cn } from '@/utils/cn-clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const playfair = localFont({
  src: '../styles/fonts/playfairdisplay-regular.woff',
  variable: '--font-playfair',
  weight: '400',
  display: 'swap',
})

const geistMono = localFont({
  src: '../styles/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Créer par Yannick Goalen',
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          playfair.variable,
          geistMono.variable,
          'font-geist-mono text-[var(--high-contrast-text)] dark:text-[var(--high-contrast-text)]'
        )}
      >
        <Providers>
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  )
}
