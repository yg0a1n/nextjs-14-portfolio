'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'

import { fadeIn } from '@/utils/motion'

export default function RealizationsCard({
  index,
  imgFile,
  title,
  subtitle,
  href,
  tags,
  isDark,
}: {
  index: number
  imgFile: string
  title: string
  subtitle: string
  href: string
  tags: string[]
  isDark: boolean
}) {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className="flex flex-col gap-4 md:flex-row"
    >
      <Link href={href}>
        <Image
          src={`/img/${imgFile}`}
          alt={title}
          className="w-full rounded-3xl"
          width={250}
          height={250}
        />
      </Link>

      <div className="flex items-center justify-between w-full">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px]">{title}</h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
          <div className="flex justify-between">
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <p key={`realizations-${tag}`} className={`text-[14px]`}>
                  #{tag}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href={href}>
          <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-black dark:border-slate-50">
            <Image
              src={
                isDark
                  ? '/img/icons/arrow-white.svg'
                  : '/img/icons/arrow-black.svg'
              }
              alt="arrow"
              className="w-[40%] h-[40%] object-contain"
              width={250}
              height={250}
            />
          </div>
        </Link>
      </div>
    </motion.div>
  )
}
