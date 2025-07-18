'use client'

import { motion } from 'framer-motion'

import TasksCard from '@/components/tasks-card'
import TitleText from '@/components/title-text'
import TypingText from '@/components/typing-text'
import { tasks, tasksCards } from '@/constants'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'

export default function Tasks({ lang }: { lang: string }) {
  const { typingText, title, content } = lang === 'en' ? tasks.en : tasks.fr

  const tasksCardsTranslated = lang === 'en' ? tasksCards.en : tasksCards.fr

  return (
    <section id="tasks" className="px-6 py-12 sm:p-16 xs:p-8">
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="show"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title={typingText} textStyles="text-center" />
        <motion.div variants={textVariant(1.1)}>
          <TitleText title={<>{title}</>} textStyles="text-center" />
        </motion.div>
        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="mt-3 text-secondary text-[17px] text-justify leading-[30px]"
        >
          {content}
        </motion.p>
        <div className="flex flex-wrap justify-between -mx-2 mt-20">
          {tasksCardsTranslated.map((project, index) => (
            <TasksCard key={`tasks-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
