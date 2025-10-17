'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import Image from 'next/image'

export default function LocationsPage() {
  const locations = [
    {
      id: 1,
      name: 'Waldo Location',
      address: '123 Waldo Street, Kansas City, MO 64111',
      phone: '(816) 555-0123',
      hours: {
        weekdays: '9:00 AM - 6:00 PM',
        saturday: '10:00 AM - 4:00 PM',
        sunday: 'Closed'
      },
      image: '/api/placeholder/600/400',
      description: 'Our flagship location in the heart of Waldo, featuring our full product selection and expert staff.'
    },
    {
      id: 2,
      name: 'Crossroads Location',
      address: '456 Crossroads Blvd, Kansas City, MO 64108',
      phone: '(816) 555-0456',
      hours: {
        weekdays: '9:00 AM - 6:00 PM',
        saturday: '10:00 AM - 4:00 PM',
        sunday: 'Closed'
      },
      image: '/api/placeholder/600/400',
      description: 'Located in the vibrant Crossroads Arts District, offering premium cannabis products in a modern setting.'
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
              Our Locations
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Visit us at our Waldo and Crossroads locations. Both stores offer the same premium quality 
              products and exceptional customer service.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us on the Map</h2>
            <p className="text-xl text-gray-600">
              Click on a location to get directions
            </p>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div 
            className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-600">
                Interactive map with pins for Waldo & Crossroads locations will be embedded here
              </p>
            </div>
          </motion.div>

          {/* Location Cards */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                className="bg-white shadow-lg border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Storefront Image */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <Image
                    src={location.image}
                    alt={`${location.name} storefront`}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{location.name}</h3>
                  <p className="text-gray-600 mb-6">{location.description}</p>

                  {/* Contact Info */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">{location.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">{location.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Store Hours</p>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: {location.hours.weekdays}</p>
                          <p>Saturday: {location.hours.saturday}</p>
                          <p>Sunday: {location.hours.sunday}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Us Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Products</h3>
                <p className="text-gray-600">
                  Same high-quality products at both locations
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Staff</h3>
                <p className="text-gray-600">
                  Knowledgeable team ready to help you find the perfect product
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🏪</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Convenient Locations</h3>
                <p className="text-gray-600">
                  Easy to find locations in Waldo and Crossroads
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
