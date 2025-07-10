import Image from 'next/image'
import Link from 'next/link'

const SocialAssets = ({ isDark }: { isDark: boolean }) => (
  <div className="flex z-10 gap-4 p-2 rounded-lg">
    <Link href="https://www.linkedin.com/in/y-goalen/">
      <Image
        src={isDark ? '/logos/linkedin-white.svg' : '/logos/linkedin-black.svg'}
        alt="linkedin logo"
        className="w-[24px] h-[24px] object-contain cursor-pointer pt-[3px]"
        width={24}
        height={24}
      />
    </Link>
    <Link href="https://github.com/yg0a1n">
      <Image
        src={
          isDark
            ? '/logos/github-logo-white.svg'
            : '/logos/github-logo-black.svg'
        }
        alt="github logo"
        className="w-[25px] h-[25px] object-contain cursor-pointer pt-[2px] pl-[2px]"
        width={25}
        height={25}
      />
    </Link>
    <Link href="mailto:y.goalen@outlook.com">
      <Image
        src={isDark ? '/icons/at-white.svg' : '/icons/at-black.svg'}
        alt="at icon"
        className="w-[27px] h-[27px] object-contain cursor-pointer"
        width={27}
        height={27}
      />
    </Link>
  </div>
)

export default SocialAssets
