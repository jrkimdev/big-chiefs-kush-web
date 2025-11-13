'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
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
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get in touch with Big Chiefs Kush. We&apos;re here to help with any questions 
              about our products or locations.
            </motion.p>
            
            {/* Contact Info Quick Access */}
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="text-lg font-medium">(816) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span className="text-lg font-medium">info@bigchiefskush.com</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Get in Touch
              </motion.h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(816) 555-0123</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM, Sat 10AM-4PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@bigchiefskush.com</p>
                    <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Locations</h3>
                    <div className="text-gray-600 space-y-1">
                      <p><strong>Waldo:</strong> 218 W 74th St, Kansas City, MO 64114</p>
                      <p><strong>Crossroads:</strong> 527 Southwest Blvd, Kansas City, MO 64108</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Store Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Send us a Message
              </motion.h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Us</h2>
            <p className="text-xl text-gray-600">
              Connect with us on social media for updates and community highlights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 shadow-lg border border-gray-200 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📷</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600 mb-4">Follow us for product highlights and KC events</p>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Follow @BigChiefsKush
              </Button>
            </motion.div>

            <motion.div 
              className="bg-white p-8 shadow-lg border border-gray-200 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-16 h-16 bg-black mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">TikTok</h3>
              <p className="text-gray-600 mb-4">Short videos and behind-the-scenes content</p>
              <Button className="w-full bg-black hover:bg-gray-800 text-white">
                Follow @BigChiefsKush
              </Button>
            </motion.div>

            <motion.div 
              className="bg-white p-8 shadow-lg border border-gray-200 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-16 h-16 bg-yellow-500 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">👻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Snapchat</h3>
              <p className="text-gray-600 mb-4">Daily stories and exclusive content</p>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                Add @BigChiefsKush
              </Button>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                📍 Get Directions
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
