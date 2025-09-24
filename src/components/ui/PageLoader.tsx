'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import LoadingSpinner from './LoadingSpinner'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100) // Very short delay to ensure smooth transition

    return () => clearTimeout(timer)
  }, [pathname])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <LoadingSpinner size="lg" text="Loading..." />
    </motion.div>
  )
}
