'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Star } from 'lucide-react'

export default function ProductsPage() {
  const productCategories = [
    {
      id: 1,
      name: 'Flower',
      description: 'Premium, Exotic, Rare strains',
      icon: '🌿',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      name: 'Pre-Rolls',
      description: 'House, Snowcaps, Ice Caps',
      icon: '🚬',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      name: 'Carts & Vapes',
      description: 'Premium brands',
      icon: '💨',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      name: 'Edibles',
      description: 'Gummies, Chocolates, Drinks',
      icon: '🍫',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      name: 'Concentrates',
      description: 'Live Resin, Badder, Diamonds',
      icon: '💎',
      image: '/api/placeholder/400/300'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Products
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Discover our carefully curated selection of premium cannabis products. 
              Not an online menu, just a showcase with price ranges.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="bg-white shadow-lg border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Product Image */}
                <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    View Products
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlight Box */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-center text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="flex items-center justify-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Star className="h-8 w-8 mr-2" />
              <span className="text-2xl">🔥</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              New Strain Alert
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              Come in-store to check it out!
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
              >
                Visit Store
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Big Chiefs Kush?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  Top-tier quality you can see and smell in person
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🏪</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local KC Shop</h3>
                <p className="text-gray-600">
                  Locally owned micro-dispensary with authentic KC pride
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rare Strains</h3>
                <p className="text-gray-600">
                  Premium, exotic, and rare strains you won't find elsewhere
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
