'use client'

import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import { footerContents } from '@/constants'
import { footerVariants } from '@/utils/motion'
import SocialAssets from './social-assets'

export default function Footer({ lang }: { lang: string }) {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setIsDark(theme === 'dark')
  }, [setIsDark, theme])

  const { copyright } = lang === 'en' ? footerContents.en : footerContents.fr

  if (!mounted) return null

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="relative px-6 py-8 sm:px-16"
    >
      <div className="z-0 footer-gradient" />
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex flex-wrap gap-4 justify-between items-center">
            <h4 className="font-extrabold text-[24px]">Portfolio</h4>
            <p className="font-normal text-[14px] opacity-50">{copyright}</p>

            <div className="flex z-10 gap-4 p-2 rounded-lg">
              <SocialAssets isDark={isDark} />
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
