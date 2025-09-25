'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Leaf, Shield, Truck } from 'lucide-react'

const Hero = () => {

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Vimeo Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1121708392?autoplay=1&loop=1&muted=1&controls=0&background=1&quality=720p&title=0&byline=0&portrait=0&dnt=1"
            className="w-full h-full"
            style={{ 
              border: 'none',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '56.25vw', // 16:9 aspect ratio
              minHeight: '100vh',
              minWidth: '177.78vh', // 16:9 aspect ratio
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' 
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              CANNABIS
            </motion.h1>
            <motion.p 
              className="text-lg text-white mb-8 max-w-2xl leading-relaxed"
              style={{ 
                textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.3)' 
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Premium cannabis products delivered with quality, safety, and satisfaction guaranteed. 
              Discover our carefully curated selection of the finest cannabis products.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Button size="lg" className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-green-600 bg-transparent shadow-2xl">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image/Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border-2 border-green-100"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ 
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
              }}
            >
              {/* Product Grid Layout */}
              <div className="grid grid-cols-2 gap-6">
                {/* Cannabis Buds */}
                <motion.div 
                  className="bg-green-50 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">🌿</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Buds</h3>
                  <p className="text-sm text-gray-600">High-quality cannabis flowers</p>
                </motion.div>

                {/* CBD Oil */}
                <motion.div 
                  className="bg-green-50 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">💧</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">CBD Oil</h3>
                  <p className="text-sm text-gray-600">Pure CBD extracts</p>
                </motion.div>

                {/* Edibles */}
                <motion.div 
                  className="bg-green-50 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">🍫</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Edibles</h3>
                  <p className="text-sm text-gray-600">Delicious treats</p>
                </motion.div>

                {/* Concentrates */}
                <motion.div 
                  className="bg-green-50 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">💎</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Concentrates</h3>
                  <p className="text-sm text-gray-600">High-potency extracts</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.div 
            className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            whileHover={{ scale: 1.05, y: -5 }}
            style={{ 
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
            }}
          >
            <motion.div 
              className="bg-green-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Shield className="h-8 w-8" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lab Tested</h3>
            <p className="text-gray-600">All products are rigorously tested for quality and safety</p>
          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            style={{ 
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
            }}
          >
            <motion.div 
              className="bg-green-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Truck className="h-8 w-8" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick and discreet delivery to your doorstep</p>
          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            style={{ 
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
            }}
          >
            <motion.div 
              className="bg-green-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Leaf className="h-8 w-8" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">Carefully curated selection of the finest products</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
