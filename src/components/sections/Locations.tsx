'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { MapPin, Clock, Navigation, ChevronDown, X } from 'lucide-react'
import Image from 'next/image'

const Locations = () => {
  // Get today's day name (0 = Sunday, 1 = Monday, etc.)
  const today = new Date().getDay()
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const todayName = dayNames[today]

  // Track expanded day for each location separately
  const [expandedDays, setExpandedDays] = useState<{ [key: number]: string | null }>({})
  
  // Track which image is open in modal
  const [modalImage, setModalImage] = useState<string | null>(null)

  const locations = [
    {
      id: 1,
      name: 'Waldo Location',
      address: '218 W 74th St, Kansas City, MO 64114',
      hours: '10AM-12AM Daily (7 Days a Week)',
      image: '/api/placeholder/600/400',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=218+W+74th+St,+Kansas+City,+MO+64114',
      dailyHours: {
        'Mon': '10 AM - 12 AM',
        'Tue': '10 AM - 12 AM',
        'Wed': '10 AM - 12 AM',
        'Thu': '10 AM - 12 AM',
        'Fri': '10 AM - 12 AM',
        'Sat': '10 AM - 12 AM',
        'Sun': '10 AM - 12 AM'
      }
    },
    {
      id: 2,
      name: 'Crossroads Location',
      address: '527 Southwest Blvd, Kansas City, MO 64108',
      hours: '10AM-1AM Daily (7 Days a Week)',
      image: '/logos/location-image-crossroads.png',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=527+Southwest+Blvd,+Kansas+City,+MO+64108',
      dailyHours: {
        'Mon': '10 AM - 1 AM',
        'Tue': '10 AM - 1 AM',
        'Wed': '10 AM - 1 AM',
        'Thu': '10 AM - 1 AM',
        'Fri': '10 AM - 3 AM',
        'Sat': '10 AM - 3 AM',
        'Sun': '10 AM - 1 AM'
      }
    }
  ]


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Our Locations
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Visit us at our Waldo and Crossroads locations. Both stores offer the same premium quality products.
          </motion.p>
        </motion.div>

        {/* Location Cards - Side by Side */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              className="bg-white shadow-lg border border-gray-200 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
            >
              {/* Map Section */}
              <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(location.address)}&hl=en&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${location.name} Map`}
                />
              </div>

              {/* Storefront Image */}
              <div 
                className="relative h-64 w-full overflow-hidden cursor-pointer"
                onClick={() => setModalImage(location.image)}
              >
                <Image
                  src={location.image}
                  alt={`${location.name} storefront`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>

              <div className="p-8 relative overflow-visible">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{location.name}</h3>

                {/* Address and Hours Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Address</p>
                      <p className="text-gray-600 text-sm">{location.address}</p>
                    </div>
                  </div>

                  {/* Store Hours */}
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div className="flex-1 relative z-50">
                      <p className="font-semibold text-gray-900 mb-1">Store Hours</p>
                      {location.dailyHours ? (
                        <div className="relative">
                          <button
                            onClick={() => setExpandedDays({
                              ...expandedDays,
                              [location.id]: expandedDays[location.id] ? null : 'open'
                            })}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg flex items-center justify-between text-left hover:bg-gray-50 transition-colors bg-white"
                          >
                            <span className="text-sm text-gray-900">
                              <span className="font-medium">{todayName}:</span>{' '}
                              {location.dailyHours[todayName as keyof typeof location.dailyHours]}
                            </span>
                            <ChevronDown
                              className={`h-4 w-4 text-gray-400 transition-transform ${
                                expandedDays[location.id] ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {expandedDays[location.id] && (
                            <div className="absolute z-50 w-full mt-1 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-lg">
                              {Object.entries(location.dailyHours).map(([day, hours]) => (
                                <button
                                  key={day}
                                  onClick={() => {
                                    setExpandedDays({
                                      ...expandedDays,
                                      [location.id]: null
                                    })
                                  }}
                                  className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 transition-colors whitespace-nowrap ${
                                    day === todayName ? 'bg-green-50 font-medium' : ''
                                  } ${day !== Object.keys(location.dailyHours)[0] ? 'border-t border-gray-200' : ''}`}
                                >
                                  <span className={`whitespace-nowrap ${day === todayName ? 'text-gray-900' : 'text-gray-600'}`}>
                                    {day}: {hours}
                                  </span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <p className="text-gray-600 text-sm">{location.hours}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Get Directions Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            onClick={() => setModalImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <X className="h-6 w-6 text-gray-900" />
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={modalImage}
                  alt="Location storefront"
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Locations

