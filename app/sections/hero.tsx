'use client'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { useQRCode } from 'next-qrcode'

import TitleText from '@/components/title-text'
import TypingText from '@/components/typing-text'
import { getStartedContent, startingFeatures } from '@/constants'

import StartSteps from '@/components/start-steps'
import { fadeIn, staggerContainer } from '@/utils/motion'

export default function Hero({ lang }: { lang: string }) {
  const { Canvas } = useQRCode()

  const { typingText, title, linkText } =
    lang === 'en' ? getStartedContent.en : getStartedContent.fr

  const startingFeaturesTranslate =
    lang === 'en' ? startingFeatures.en : startingFeatures.fr

  return (
    <section id="hero" className="relative z-10 px-6 py-12 sm:p-16 xs:p-8">
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="lg:w-[70%] w-[100%] mx-auto flex lg:flex-row flex-col gap-8"
      >
        <div className="flex-[0.35] flex justify-center items-center">
          <motion.img
            variants={fadeIn('right', 'tween', 0.3, 1)}
            src="/img/photo-identité_280w.webp"
            alt="Yannick goalen identity photo"
            className="object-contain w-full max-w-lg rounded-lg"
            style={{ maxWidth: '500px', minWidth: '250px' }}
          />
        </div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title={typingText} />
          <TitleText title={<>{title}</>} />
          <div className="mt-[31px] flex flex-col max-w-[470px] gap-[24px]">
            {startingFeaturesTranslate.map((feature, index) => (
              <StartSteps
                key={feature}
                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                text={feature}
              />
            ))}
            <div className="flex gap-4 justify-between items-center">
              <div className="flex gap-2 items-center">
                {linkText}
                <a
                  href="https://storage.googleapis.com/cv-pwahost/CV_DEV_Y.Goalen.pdf"
                  className="cv-icon"
                  title="Web and Mobile Web Developer Resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowTopRightOnSquareIcon className="w-6 h-6 text-gray-500" />
                </a>
              </div>
              <a
                href="https://storage.googleapis.com/cv-pwahost/CV_DEV_Y.Goalen.pdf"
                className="cv-icon"
                title="Web and Mobile Web Developer Resume"
                target="_blank"
                rel="noreferrer"
              >
                <Canvas
                  text={
                    'https://storage.googleapis.com/cv-pwahost/CV_DEV_Y.Goalen.pdf'
                  }
                  options={{
                    errorCorrectionLevel: 'M',
                    margin: 3,
                    scale: 4,
                    width: 120,
                    color: {
                      dark: '#FFF',
                      light: '#000',
                    },
                  }}
                />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
