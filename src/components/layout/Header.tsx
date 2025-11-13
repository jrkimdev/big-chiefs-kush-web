'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Menu, X, Instagram } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 10)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      style={isScrolled ? { backgroundColor: 'rgba(255, 248, 220, 0.95)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logos/main-logo.png"
                alt="Big Chiefs Kush"
                width={150}
                height={60}
                className="h-12 w-auto transition-opacity duration-300"
                priority
              />
              <span className={`text-xl font-bold transition-colors duration-300 uppercase ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>Big Chiefs Kush</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:!text-[#6b7d47]' 
                    : 'text-white hover:!text-[#a8b88a]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/bigchiefskush/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-2 transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:!text-[#6b7d47]' 
                  : 'text-white hover:!text-[#a8b88a]'
              }`}
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </nav>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? '' : 'text-white hover:text-white/80'}
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? '' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? '' : 'text-white'}`} />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className={`md:hidden absolute top-full left-0 right-0 border-t shadow-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'bg-white border-gray-200' 
                  : 'bg-white/95 backdrop-blur-sm border-white/20'
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-colors duration-300 ${
                  isScrolled 
                    ? 'bg-white border-gray-200' 
                    : 'bg-white/95 backdrop-blur-sm border-white/20'
                }`}
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:!text-[#6b7d47] block px-3 py-2 text-base font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="pt-4"
                >
                  <a
                    href="https://www.instagram.com/bigchiefskush/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:!text-[#6b7d47] flex items-center px-3 py-2 text-base font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Follow us on Instagram
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
