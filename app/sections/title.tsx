'use client'

import { motion } from 'framer-motion'

import { staggerContainer, textVariant } from '@/utils/motion'

export default function Title() {
  return (
    <section id="title" className="py-12 pl-6 sm:py-16 xs:py-8 sm:pl-16">
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <div className="flex relative z-10 flex-col justify-center items-center">
          <motion.div
            variants={textVariant(0.4)}
            className="flex flex-row w-[95%] justify-center items-center mr-4 md:mr-20"
          >
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase">
              P
            </h1>
            <div className="lg:w-[280px] md:w-[180px] sm:w-[100px] w-[80px] lg:h-[70px] md:h-[50px] sm:h-[32px] h-[24px] lg:border-[22px] md:border-[16px] sm:border-[9px] border-[7px] rounded-full border-[var(--high-contrast-text)] dark:border-[var(--high-contrast-text)]lg:mb-[-50px] sm:ml-0.5 md:mb-[-12px] sm:mb-[-8px] ml-0.5" />
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase ml-1">
              rtf
            </h1>
            <div className="lg:w-[280px] md:w-[180px] sm:w-[100px] w-[80px] lg:h-[70px] md:h-[50px] sm:h-[32px] h-[24px] lg:border-[22px] md:border-[16px] sm:border-[9px] border-[7px] rounded-full border-[var(--high-contrast-text)] dark:border-[var(--high-contrast-text)]lg:mb-[-50px] sm:ml-0.5 md:mb-[-12px] sm:mb-[-8px] mr-1" />
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase">
              li
            </h1>
            <div className="lg:w-[280px] md:w-[180px] sm:w-[100px] w-[80px] lg:h-[70px] md:h-[50px] sm:h-[32px] h-[24px] lg:border-[22px] md:border-[16px] sm:border-[9px] border-[7px] rounded-full border-[var(--high-contrast-text)] dark:border-[var(--high-contrast-text)]lg:mb-[-50px] sm:ml-0.5 md:mb-[-12px] sm:mb-[-8px] ml-1" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
