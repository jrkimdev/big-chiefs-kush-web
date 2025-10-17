'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
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
              About Big Chiefs Kush
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Locally owned micro-dispensary in KC bringing premium, exotic, and rare strains 
              with top-tier quality you can see and smell in person.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Our Story
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Born and raised in Kansas City, we started Big Chiefs Kush with a simple mission: 
                bring the highest quality cannabis products to our community. Our story is rooted 
                in KC pride and a deep understanding of what our customers truly want.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                We&apos;re not just another dispensary – we&apos;re your neighbors, your friends, 
                and your trusted source for premium cannabis in Kansas City.
              </motion.p>
            </motion.div>
            <motion.div 
              className="bg-green-100 p-8 text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="w-24 h-24 bg-green-600 flex items-center justify-center mx-auto mb-4"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
                whileHover={{ rotate: 360 }}
              >
                <span className="text-white text-3xl">🏠</span>
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                KC Proud
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                Locally owned and operated with authentic Kansas City pride
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600">
              Premium strains, loyalty program, and authentic KC shop experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-green-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Strains</h3>
              <p className="text-gray-600">
                We carry premium, exotic, and rare strains that you can see and smell in person. 
                Quality you can trust.
              </p>
            </div>

            <div className="bg-white p-8 text-center shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-green-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Loyalty Program</h3>
              <p className="text-gray-600">
                Our loyalty program rewards our regular customers with exclusive deals, 
                early access to new strains, and special promotions.
              </p>
            </div>

            <div className="bg-white p-8 text-center shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-green-600 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Authentic KC Shop</h3>
              <p className="text-gray-600">
                We&apos;re not a chain – we&apos;re a locally owned micro-dispensary with 
                authentic Kansas City culture and community focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Vibe Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Vibe</h2>
            <p className="text-xl text-gray-600">
              A few lifestyle pics of the staff, events, and behind-the-scenes shots
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📸</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Staff Lifestyle</h3>
              <p className="text-gray-600">
                Behind-the-scenes shots of our team in action, 
                showcasing our passion for cannabis culture
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">KC Events</h3>
              <p className="text-gray-600">
                Community collaborations and events where we connect 
                with our Kansas City neighbors
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🏪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Behind the Scenes</h3>
              <p className="text-gray-600">
                Store walkthroughs and daily operations, 
                showing the care we put into every product
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
