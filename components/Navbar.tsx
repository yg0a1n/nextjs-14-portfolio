'use client'

import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navbarContent } from '@/constants'
import { navVariants } from '@/utils/motion'
import SocialAssets from './SocialAssets'
import ThemeButton from './ThemeButton'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setIsDark(theme === 'dark')
  }, [setIsDark, theme])

  const pathname = usePathname()
  const href = pathname === '/en' ? '/fr' : '/en'

  // Détection de la langue pour la traduction du badge
  const lang = pathname.startsWith('/en') ? 'en' : 'fr'

  if (!mounted) return null

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="relative px-6 py-8 sm:px-16"
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8">
        <SocialAssets isDark={isDark} />
        <div className="flex gap-4 rounded-lg">
          <div
            className={`${
              isDark ? 'text-white' : 'text-black'
            } font-bold mt-2 ml-5`}
          >
            {href === '/en' ? (
              <Link href="/en">en</Link>
            ) : (
              <Link href="/fr">fr</Link>
            )}
          </div>
          <ThemeButton theme={theme} setTheme={setTheme} />
          <Link
            href="https://github.com/yg0a1n/nextjs-14-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2"
          >
            <span
              className="px-4 py-2 text-sm font-semibold text-white rounded-full border shadow-none transition-all duration-200 cursor-pointer border-white/30 dark:border-white/30 hover:drop-shadow-lg"
            >
              {navbarContent[lang].repoBadge}
            </span>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
