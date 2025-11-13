'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center -mt-16 pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        {/* Vimeo Video Background */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            width: '100vw',
            height: '100vh',
            minWidth: '177.78vh',
            minHeight: '56.25vw'
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/1121708392?autoplay=1&loop=1&muted=1&controls=0&background=1&quality=720p&title=0&byline=0&portrait=0&dnt=1"
            className="w-full h-full"
            style={{ 
              border: 'none',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100%',
              height: '100%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="eager"
            title="Cannabis Background Video"
            sandbox="allow-scripts allow-same-origin allow-presentation"
          />
        </div>
        
        {/* Enhanced Dark Overlay for optimal text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/80 z-10"></div>
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 z-20"></div>
      </div>
      
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <Image
                src="/logos/main-logo.png"
                alt="Big Chiefs Kush"
                width={600}
                height={240}
                className="h-48 md:h-48 lg:h-64 w-auto mx-auto"
                priority
                style={{ 
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(0,0,0,0.5))' 
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <Image
                src="/logos/slogan.png"
                alt="Home of the $4 Pre-Roll"
                width={1200}
                height={400}
                className="h-32 md:h-48 lg:h-64 w-auto mx-auto"
                priority
                style={{ 
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(0,0,0,0.5))' 
                }}
              />
            </motion.div>
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-8 max-w-3xl mx-auto leading-relaxed text-center uppercase"
              style={{ 
                textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.3)' 
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Locally owned micro-dispensary in KC bringing premium, exotic, and rare strains with top-tier quality you can see and smell in person.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
