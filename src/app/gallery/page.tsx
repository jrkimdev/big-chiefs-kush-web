'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Instagram, Camera, Video } from 'lucide-react'

export default function GalleryPage() {
  const galleryImages = [
    { id: 1, src: '/api/placeholder/400/300', alt: 'Premium cannabis products', category: 'products' },
    { id: 2, src: '/api/placeholder/400/300', alt: 'Store interior', category: 'store' },
    { id: 3, src: '/api/placeholder/400/300', alt: 'Happy customers', category: 'customers' },
    { id: 4, src: '/api/placeholder/400/300', alt: 'Cannabis jars', category: 'products' },
    { id: 5, src: '/api/placeholder/400/300', alt: 'KC events collaboration', category: 'events' },
    { id: 6, src: '/api/placeholder/400/300', alt: 'Strain highlights', category: 'products' },
    { id: 7, src: '/api/placeholder/400/300', alt: 'Behind the scenes', category: 'store' },
    { id: 8, src: '/api/placeholder/400/300', alt: 'Team lifestyle', category: 'team' },
    { id: 9, src: '/api/placeholder/400/300', alt: 'Product showcase', category: 'products' },
  ]

  const videos = [
    { id: 1, title: 'Store Walkthrough', description: 'Take a virtual tour of our Waldo location' },
    { id: 2, title: 'Strain Highlights', description: 'Featured premium strains this week' },
    { id: 3, title: 'KC Events', description: 'Community collaborations and events' },
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
              Gallery & Media
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Experience Big Chiefs Kush through our photo gallery, videos, and social media content. 
              See our products, store, and community in action.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
            <p className="text-xl text-gray-600">
              Product shots, store interior, and community events
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Videos</h2>
            <p className="text-xl text-gray-600">
              Store walkthroughs, strain highlights, and KC events
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className="bg-white p-6 shadow-lg border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Video className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <Button size="sm" className="w-full">
                  Watch Video
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Us on Instagram</h2>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with our latest products, events, and community highlights
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                <Instagram className="mr-2 h-5 w-5" />
                Follow @BigChiefsKush
              </Button>
            </motion.div>
          </motion.div>

          {/* Instagram Feed Placeholder */}
          <motion.div 
            className="bg-gray-100 rounded-lg p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <Instagram className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Instagram Feed</h3>
            <p className="text-gray-600">
              Live Instagram feed will be embedded here to show our latest posts
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
