'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Instagram, Camera, ZoomIn, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

type ImagePair = {
  id: number
  front: { id: number; src: string; alt: string; category: string }
  back: { id: number; src: string; alt: string; category: string }
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [imageFilter, setImageFilter] = useState<string>('all')
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  // Generate array of image paths from your public/images folder
  const galleryImages = [
    ...Array.from({ length: 32 }, (_, i) => ({
      id: i + 1,
      src: `/images/${i + 1}.png`,
      alt: `Big Chiefs Kush - ${i + 1}`,
      category: 'products'
    })),
  ]

  // Group images into pairs
  const imagePairs: ImagePair[] = []
  for (let i = 0; i < galleryImages.length; i += 2) {
    if (i + 1 < galleryImages.length) {
      imagePairs.push({
        id: Math.floor(i / 2) + 1,
        front: galleryImages[i],
        back: galleryImages[i + 1],
      })
    } else {
      // If odd number of images, pair the last one with itself
      imagePairs.push({
        id: Math.floor(i / 2) + 1,
        front: galleryImages[i],
        back: galleryImages[i],
      })
    }
  }

  const handleMouseEnter = (pairId: number) => {
    setFlippedCards((prev) => new Set(prev).add(pairId))
  }

  const handleMouseLeave = (pairId: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      newSet.delete(pairId)
      return newSet
    })
  }

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'products', name: 'Products', count: galleryImages.length },
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

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setImageFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  imageFilter === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid - Masonry Style */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Collection
            </h2>
            <p className="text-xl text-gray-600">
              Premium strains, quality products, and the Big Chiefs Kush experience
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {imagePairs.map((pair, index) => {
              const isFlipped = flippedCards.has(pair.id)
              return (
                <motion.div
                  key={pair.id}
                  className="relative w-full h-[400px]"
                  style={{ perspective: '1000px' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.05, 1) }}
                  onMouseEnter={() => handleMouseEnter(pair.id)}
                  onMouseLeave={() => handleMouseLeave(pair.id)}
                >
                  {/* Flip Card Container */}
                  <div
                    className="relative w-full h-full cursor-pointer"
                    style={{
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.6s',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* Front of Card */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-xl shadow-lg overflow-hidden bg-white"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(0deg)',
                      }}
                    >
                      <div className="relative w-full h-full group">
                        <Image
                          src={pair.front.src}
                          alt={pair.front.alt}
                          width={500}
                          height={500}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Zoom Icon */}
                        <div 
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        >
                          <div
                            className="pointer-events-auto"
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedImage(pair.front.id)
                            }}
                          >
                            <motion.div
                              className="bg-white/90 backdrop-blur-sm p-4 rounded-full"
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <ZoomIn className="h-6 w-6 text-green-600" />
                            </motion.div>
                          </div>
                        </div>

                        {/* Zoom Indicator */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-sm font-medium">Click to zoom</p>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-xl shadow-lg overflow-hidden bg-white"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <div className="relative w-full h-full group">
                        <Image
                          src={pair.back.src}
                          alt={pair.back.alt}
                          width={500}
                          height={500}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Zoom Icon */}
                        <div 
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        >
                          <div
                            className="pointer-events-auto"
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedImage(pair.back.id)
                            }}
                          >
                            <motion.div
                              className="bg-white/90 backdrop-blur-sm p-4 rounded-full"
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <ZoomIn className="h-6 w-6 text-green-600" />
                            </motion.div>
                          </div>
                        </div>

                        {/* Zoom Indicator */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-sm font-medium">Click to zoom</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="h-6 w-6 text-white" />
          </motion.button>

          <motion.div
            className="relative max-w-6xl max-h-[90vh] w-full"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                width={1200}
                height={1200}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
            <motion.button
              className="pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-colors disabled:opacity-30"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(prev => prev && prev > 1 ? prev - 1 : prev)
              }}
              disabled={selectedImage === 1}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              className="pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-colors disabled:opacity-30"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(prev => prev && prev < galleryImages.length ? prev + 1 : prev)
              }}
              disabled={selectedImage === galleryImages.length}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="text-white font-medium">
              {selectedImage} / {galleryImages.length}
            </p>
          </div>
        </motion.div>
      )}

      {/* Instagram Call-to-Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <Instagram className="h-16 w-16 text-white" />
              </div>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Follow Us on Instagram
            </motion.h2>

            <motion.p 
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Stay connected with daily updates, new product drops, special promotions, 
              and behind-the-scenes content from Big Chiefs Kush
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-2xl"
                >
                  <Instagram className="mr-2 h-6 w-6" />
                  Follow @BigChiefsKush
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
                >
                  <Camera className="mr-2 h-6 w-6" />
                  Share Your Experience
                </Button>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-white/70 mt-8 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Tag us in your posts for a chance to be featured! #BigChiefsKush
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
