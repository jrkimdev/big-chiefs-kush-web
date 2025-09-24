'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode, useState, useEffect } from 'react'

interface PageTransitionWrapperProps {
  children: ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
}

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.4,
}

export default function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const [currentPath, setCurrentPath] = useState(pathname)

  useEffect(() => {
    if (pathname !== currentPath) {
      setIsLoading(true)
      setCurrentPath(pathname)
      
      // Use a small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 50)

      return () => clearTimeout(timer)
    } else {
      setIsLoading(false)
    }
  }, [pathname, currentPath])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen"
        style={{
          // Force hidden state during loading
          opacity: isLoading ? 0 : undefined,
          transform: isLoading ? 'translateY(20px) scale(0.98)' : undefined,
          visibility: isLoading ? 'hidden' : 'visible'
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
