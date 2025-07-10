import Image from 'next/image'
import Link from 'next/link'

const NewFeatures = ({
  imgFile,
  title,
  subtitle,
  href,
}: {
  imgFile: string
  title: string
  subtitle: string
  href: string
}) => (
  <div className="flex-1 sm:max-w-[350px] min-w-[210px]">
    <div className="flex flex-row items-center">
      <Link href={href}>
        <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[var(--secondary)] dark:bg-[var(--secondary)]">
          <Image
            src={`/img/${imgFile}`}
            alt="icon"
            className="object-contain w-1/2 h-1/2"
            width={100}
            height={100}
          />
        </div>
      </Link>
      <h1 className="ml-6 font-bold text-[24px] leading-[30.24px]">{title}</h1>
    </div>
    <p className="flex-1 mt-[16px] font-normal text-md leading-[32.4px] text-justify">
      {subtitle}
    </p>
  </div>
)

export default NewFeatures
