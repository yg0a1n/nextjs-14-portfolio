'use client'

import { useRouter } from 'next/navigation'
import { MouseEventHandler, useCallback, useEffect, useRef } from 'react'

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper]
  )

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss]
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <div
      ref={overlay}
      className="fixed top-0 right-0 bottom-0 left-0 z-10 mx-auto bg-black/60"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 p-6 w-full -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-8/12"
      >
        {children}
      </div>
    </div>
  )
}
