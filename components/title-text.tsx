'use client'

import { motion } from 'framer-motion'

import { textVariant2 } from '@/utils/motion'

const TitleText = ({
  title,
  textStyles,
}: {
  title: JSX.Element
  textStyles?: string
}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`font-bold mt-[8px] md:text-[64px] text-[40px] ${textStyles}`}
  >
    {title}
  </motion.h2>
)

export default TitleText
