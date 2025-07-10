import RealizationsCard from '@/components/realizations-card'
import TitleText from '@/components/title-text'
import TypingText from '@/components/typing-text'
import { staggerContainer, textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'

export default function PersonalProjects({
  typingText,
  title,
  personalProjects,
  isDark,
}: {
  lang?: string
  typingText: string
  title: string
  personalProjects: any[]
  isDark: boolean
}) {
  return (
    <motion.div
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
    >
      <TypingText title={typingText} textStyles="text-center" />
      <motion.div variants={textVariant(1.1)}>
        <TitleText title={<>{title}</>} textStyles="text-center" />
      </motion.div>
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {personalProjects.map((project, index) => (
          <RealizationsCard
            key={`realizations-${index}`}
            index={index}
            {...project}
            isDark={isDark}
          />
        ))}
      </div>
    </motion.div>
  )
}
