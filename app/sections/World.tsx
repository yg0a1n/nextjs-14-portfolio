'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import TitleText from '@/components/TitleText'
import TypingText from '@/components/TypingText'
import { worldsContents } from '@/constants'
import { fadeIn, staggerContainer } from '@/utils/motion'

export default function World({ lang }: { lang: string }) {
  const { typingText, title } =
    lang === 'en' ? worldsContents.en : worldsContents.fr

  return (
    <section className="relative z-10 px-6 py-12 sm:p-16 xs:p-8">
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title={typingText} textStyles="text-center" />
        <TitleText title={<>{title}</>} textStyles="text-center" />

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <Image
            src="/img/map.png"
            alt="world map background"
            className="object-cover w-full h-full"
            width={500}
            height={500}
          />

          <div className="absolute top-1/2 left-[45%] w-[55px] h-[55px] p-[1px] rounded-full bg-white border-[6px] border-yellow-200">
            <Link href="https://nextjs.org/">
              <Image
                src="/logos/nextjs-logo.svg"
                alt="Nextjs logo"
                className="w-full h-full"
                width={70}
                height={70}
              />
            </Link>
          </div>

          <div className="absolute top-10 left-20 w-[60px] h-[60px] rounded-full bg-white border-[6px] border-green-200">
            <Link href="https://github.com/">
              <Image
                src="/logos/github-logo.svg"
                alt="Github logo"
                className="w-full h-full"
                width={60}
                height={60}
              />
            </Link>
          </div>

          <div className="absolute bottom-20 right-20 w-[60px] h-[60px] p-[3px] rounded-full bg-white border-[6px] border-red-200">
            <Link href="https://ipfs.tech/">
              <Image
                src="/logos/ipfs-logo.png"
                alt="Ipfs logo"
                className="w-full h-full"
                width={70}
                height={70}
              />
            </Link>
          </div>

          <div className="absolute top-20 left-[45%] w-[60px] h-[60px] p-[6px] pb-1 rounded-full bg-white border-[6px] border-orange-500">
            <Link href="https://www.postgresql.org/">
              <Image
                src="/logos/postgres-logo.png"
                alt="Postgres logo"
                className="w-full h-full"
                width={70}
                height={70}
              />
            </Link>
          </div>

          <div className="absolute top-1/3 left-[75%] w-[60px] h-[60px] p-[10px] rounded-full py-2 bg-white border-[6px] border-cyan-500">
            <Link href="https://www.heroku.com/platform">
              <Image
                src="/logos/heroku-logo-2.png"
                alt="Heroku logo"
                className="w-full h-full"
                width={70}
                height={70}
              />
            </Link>
          </div>

          <div className="absolute top-20 left-[65%] w-[60px] h-[60px] p-[4px] rounded-full bg-white border-[6px] border-green-500">
            <Link href="https://nodejs.org/en">
              <Image
                src="/logos/nodejs-logo.png"
                alt="Nodejs logo"
                className="w-full h-full"
                width={70}
                height={70}
              />
            </Link>
          </div>

          <div className="absolute top-40 left-[15%] w-[60px] h-[60px] p-[3px] rounded-full bg-white border-[6px] border-yellow-500">
            <Link href="https://ethereum.org/en/">
              <Image
                src="/logos/ethereum-logo.png"
                alt="Ethereum logo"
                className="w-full h-full rounded-full"
                width={70}
                height={70}
              />
            </Link>
          </div>

          <div className="absolute bottom-20 left-[15%] w-[60px] h-[60px] p-[6px] rounded-full bg-blue-500">
            <Link href="https://n8n.io/">
              <Image
                src="/logos/n8n-logo.png"
                alt="n8n logo"
                className="w-full h-full rounded-full"
                width={70}
                height={70}
              />
            </Link>
          </div>

          <div className="absolute top-1/4 left-[85%] w-[60px] h-[60px] p-[6px] rounded-full bg-red-500">
            <Link href="https://openai.com/">
              <Image
                src="/logos/chat-gpt-logo.webp"
                alt="chatGPT logo"
                className="w-full h-full rounded-full"
                width={70}
                height={70}
              />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
