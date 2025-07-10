'use client'

import TitleText from '@/components/title-text'
import TypingText from '@/components/typing-text'
import { aboutMeContent } from '@/constants'
import { motion } from 'framer-motion'

import { fadeIn, staggerContainer } from '@/utils/motion'

export default function About({ lang }: { lang: string }) {
  const { typingText, title, beforeText, boldText, content } =
    lang === 'en' ? aboutMeContent.en : aboutMeContent.fr

  return (
    <section id="about" className="relative z-10 px-6 py-12 sm:p-16 xs:p-8">
      <div className="z-0 gradient-02" />
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col"
      >
        <TypingText title={typingText} textStyles="text-center" />
        <TitleText title={<>{title}</>} />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          {beforeText} <span className="font-extrabold">{boldText}</span>
          {content}
        </motion.p>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/icons/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  )
}
