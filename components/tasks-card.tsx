'use client'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { fadeIn } from '@/utils/motion'

const TasksCard = ({
  index,
  name,
  description,
  imgFile,
  logo_link,
  logo_img,
  source_img_link,
  collection,
}: {
  index: number
  name: string
  description: string
  imgFile: string
  logo_link: string
  logo_img: string
  source_img_link: string
  collection: string
}) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    className="px-2 mb-4 w-full flex-container md:w-1/2 lg:w-1/3"
  >
    <div className="my-5">
      <div className="flex justify-start">
        <div className="mt-1 mr-2">
          {logo_link && (
            <Link href={logo_link} passHref>
              <Image
                src={`/logos/${logo_img}`}
                className="rounded-full"
                alt={name}
                width={30}
                height={30}
              />
            </Link>
          )}
        </div>
        <h3 className="font-bold text-[24px]">{name}</h3>
      </div>
    </div>

    <div
      className="relative"
      style={{ height: 'auto', maxWidth: '640px', width: '100%' }}
    >
      <Link href={`/${collection}/${index}`} passHref>
        <Image
          src={`/img/${imgFile}`}
          alt="project tasks image"
          className="object-contain w-full h-full rounded-xl"
          width={500}
          height={500}
        />
      </Link>
    </div>

    <div className="my-5">
      <div className="flex gap-2 items-center">
        <p className="mt-2 text-secondary text-[14px] text-justify">
          {description}
        </p>
        {source_img_link && (
          <Link href={source_img_link} passHref>
            <ArrowTopRightOnSquareIcon className="w-6 h-6 text-gray-500" />
          </Link>
        )}
      </div>
    </div>
  </motion.div>
)

export default TasksCard
