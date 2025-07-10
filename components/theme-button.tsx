'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const ThemeButton = ({
  theme,
  setTheme,
}: {
  theme: string | undefined
  setTheme: any
}) => (
  <button
    aria-label="Toggle Dark Mode"
    type="button"
    className="flex justify-center items-center p-2 rounded-lg transition-colors duration-200 focus:outline-none"
    onClick={() => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }}
  >
    {theme === 'dark' ? (
      <SunIcon className="w-5 h-5" />
    ) : (
      <MoonIcon className="w-5 h-5" />
    )}
  </button>
)

export default ThemeButton
