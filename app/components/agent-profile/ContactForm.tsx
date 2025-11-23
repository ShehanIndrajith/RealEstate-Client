'use client'

import React, { useState } from 'react'
import { SendIcon, PhoneIcon, MailIcon, MessageCircleIcon } from 'lucide-react'
import { Button } from '../ui/Button'
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Send Inquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+94 77 123 4567"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            placeholder="I'm interested in..."
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            rows={4}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            required
          />
        </div>
        <Button type="submit" fullWidth>
          <SendIcon size={18} className="mr-2" />
          Send Inquiry
        </Button>
      </form>
      {/* Quick Contact Options */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-700 mb-3">
          Or contact directly:
        </p>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left">
            <PhoneIcon size={18} className="text-blue-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">Call</p>
              <p className="text-xs text-gray-600">+94 77 123 4567</p>
            </div>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left">
            <MessageCircleIcon size={18} className="text-green-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">WhatsApp</p>
              <p className="text-xs text-gray-600">Chat instantly</p>
            </div>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left">
            <MailIcon size={18} className="text-blue-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">Email</p>
              <p className="text-xs text-gray-600">john@estatehub.com</p>
            </div>
          </button>
        </div>
      </div>
      {/* Availability */}
      <div className="mt-6 pt-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600">
          Available Mon-Sat, 9:00 AM - 6:00 PM
        </p>
      </div>
    </div>
  )
}
