'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Star, Heart } from 'lucide-react'

const FeaturedProducts = () => {

  // Mock product data
  const featuredProducts = [
    {
      id: '1',
      name: 'Purple Haze',
      category: 'Indica',
      price: 45.00,
      rating: 4.8,
      reviews: 124,
      image: '/api/placeholder/300/300',
      description: 'A classic strain with a sweet, earthy flavor and relaxing effects.',
      thc: '18-22%',
      cbd: '1-2%'
    },
    {
      id: '2',
      name: 'Blue Dream',
      category: 'Hybrid',
      price: 42.00,
      rating: 4.9,
      reviews: 89,
      image: '/api/placeholder/300/300',
      description: 'Balanced hybrid with uplifting cerebral effects and body relaxation.',
      thc: '17-24%',
      cbd: '0.1-0.2%'
    },
    {
      id: '3',
      name: 'Green Crack',
      category: 'Sativa',
      price: 48.00,
      rating: 4.7,
      reviews: 156,
      image: '/api/placeholder/300/300',
      description: 'Energizing sativa perfect for daytime use and creative activities.',
      thc: '15-20%',
      cbd: '0.1-0.3%'
    },
    {
      id: '4',
      name: 'OG Kush',
      category: 'Indica',
      price: 50.00,
      rating: 4.9,
      reviews: 203,
      image: '/api/placeholder/300/300',
      description: 'Legendary strain known for its potent effects and piney aroma.',
      thc: '20-25%',
      cbd: '0.1-0.2%'
    }
  ]


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Products
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our most popular and highest-rated cannabis products, 
            carefully selected for their exceptional quality and effects.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white text-2xl font-bold">🌿</span>
                  </div>
                  <p className="text-sm text-gray-600">Premium Quality</p>
                </div>
                
                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                  <Heart className="h-4 w-4 text-gray-400" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 ml-1">
                      {product.rating}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* THC/CBD Info */}
                <div className="flex space-x-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">THC:</span>
                    <span className="font-medium text-gray-900 ml-1">{product.thc}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">CBD:</span>
                    <span className="font-medium text-gray-900 ml-1">{product.cbd}</span>
                  </div>
                </div>

                {/* Price and Learn More */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className="group"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Products Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProducts
