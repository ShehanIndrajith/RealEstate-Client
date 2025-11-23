'use client'

import React from 'react'
import {
  BuildingIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from 'lucide-react'
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                <BuildingIcon size={20} className="text-white" />
              </div>
              <span className="ml-2 text-xl font-bold">EstateHub</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted platform for finding and listing premium properties
              with verified agents and builders.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>123 Real Estate Ave</li>
              <li>Colombo, Sri Lanka</li>
              <li>Phone: +94 11 234 5678</li>
              <li>Email: info@estatehub.com</li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 EstateHub. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
