'use client'

import { motion } from 'framer-motion'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Products
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our carefully curated selection of premium cannabis products, 
            all lab-tested for quality and safety.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Product Categories */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div 
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-2xl">🌿</span>
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Flower</h3>
            <p className="text-gray-600 mb-4">
              Premium cannabis flower in various strains and potencies
            </p>
            <motion.button 
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Flower
            </motion.button>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div 
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-2xl">🍫</span>
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Edibles</h3>
            <p className="text-gray-600 mb-4">
              Delicious cannabis-infused treats and beverages
            </p>
            <motion.button 
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Edibles
            </motion.button>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.div 
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-2xl">💎</span>
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Concentrates</h3>
            <p className="text-gray-600 mb-4">
              High-potency concentrates and extracts
            </p>
            <motion.button 
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Concentrates
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
