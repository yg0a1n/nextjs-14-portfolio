'use client'

import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import PersonalProjects from '@/components/PersonalProjects'
import Web3Projects from '@/components/Web3Projects'
import { myPortfolioItems, myPortfolioItemsWeb3, myPortfolioItemsWebsite, portfolioItemsWeb3Cards, web3ProExperiences } from '@/constants'

export default function Experience({ lang }: { lang: string }) {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setIsDark(theme === 'dark')
  }, [setIsDark, theme])

  const { typingText, title } =
    lang === 'en' ? myPortfolioItems.en : myPortfolioItems.fr

  const personalProjects =
    lang === 'en' ? myPortfolioItemsWebsite.en : myPortfolioItemsWebsite.fr

  const { typingText: typingTextWeb3, title: titleWeb3 } =
    lang === 'en' ? myPortfolioItemsWeb3.en : myPortfolioItemsWeb3.fr
  const web3ProCompany = lang === 'en' ? web3ProExperiences.en : web3ProExperiences.fr
  const web3ProProjectCards = lang === 'en' ? portfolioItemsWeb3Cards.en : portfolioItemsWeb3Cards.fr

  if (!mounted) return null

  return (
    <section className="relative z-10 px-6 py-12 sm:p-16 xs:p-8">
      <PersonalProjects
        typingText={typingText}
        title={title}
        personalProjects={personalProjects}
        isDark={isDark}
      />
      <div className="mt-20">
        <Web3Projects
          typingText={typingTextWeb3}
          title={titleWeb3}
          web3ProCompany={web3ProCompany}
          web3ProProjectCards={web3ProProjectCards}
        />
      </div>
    </section>
  )
}
