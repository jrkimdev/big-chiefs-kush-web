'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Leaf, Shield, Truck } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-green-100"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Premium Cannabis
              <motion.span 
                className="block text-green-600"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Delivered
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Discover our carefully curated selection of premium cannabis products. 
              Quality, safety, and satisfaction guaranteed with every purchase.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Button size="lg" className="group">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
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
              className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-8 text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                >
                  <Leaf className="h-24 w-24 text-green-600 mx-auto mb-4" />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  Premium Quality
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  Lab-tested, premium cannabis products
                </motion.p>
              </div>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-full shadow-lg"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.0, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Shield className="h-6 w-6" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Truck className="h-6 w-6" />
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
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            whileHover={{ scale: 1.05 }}
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
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            whileHover={{ scale: 1.05 }}
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
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            whileHover={{ scale: 1.05 }}
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
