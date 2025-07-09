import NewFeatures from '@/components/NewFeatures'
import TasksCard from '@/components/TasksCard'
import TitleText from '@/components/TitleText'
import TypingText from '@/components/TypingText'
import { fadeIn, staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'

export default function Web3Projects({ typingText, title, web3ProCompany, web3ProProjectCards }: {
  typingText: string,
  title: string,
  web3ProCompany: any[],
  web3ProProjectCards: any[],
}) {
  return (
    <>
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title={typingText} />
          <TitleText title={<>{title}</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[52px]">
            {web3ProCompany.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>

        {web3ProProjectCards.map(
          (project, index) =>
            index === 0 && (
              <TasksCard key={`news-${index}`} index={index} {...project} />
            )
        )}
      </motion.div>
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <div className="flex flex-wrap justify-between -mx-2 mt-20">
          {web3ProProjectCards.map(
            (project, index) =>
              index !== 0 && (
                <TasksCard key={`news-${index}`} index={index} {...project} />
              )
          )}
        </div>
      </motion.div>
    </>
  )
}
