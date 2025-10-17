import React from 'react'
import Link from 'next/link'
import { Leaf, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quick: [
      { name: 'Home', href: '/' },
      { name: 'Products', href: '/products' },
      { name: 'Contact', href: '/contact' },
      { name: 'IG', href: '/instagram' },
      { name: 'Loyalty Program', href: '/loyalty' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">Big Chiefs Kush</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Locally owned micro-dispensary in KC bringing premium, exotic, and rare strains.
            </p>
          </div>

          {/* Store Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Store Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>(816) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@bigchiefskush.com</span>
              </div>
              <div className="text-sm text-gray-400">
                <p><strong>Waldo:</strong> 123 Waldo Street, KC, MO 64111</p>
                <p><strong>Crossroads:</strong> 456 Crossroads Blvd, KC, MO 64108</p>
              </div>
              <div className="text-sm text-gray-400">
                <p><strong>Hours:</strong> Mon-Fri 9AM-6PM, Sat 10AM-4PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-4">
              © {currentYear} Big Chiefs Kush. All rights reserved.
            </div>
            <div className="text-xs text-gray-500">
              <p>Must be 21+. Please consume responsibly.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
