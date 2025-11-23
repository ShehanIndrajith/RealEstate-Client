"use client"

import React, { useState } from "react"
import {
  SendIcon,
  PhoneIcon,
  MailIcon,
  MessageCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
} from "lucide-react"
import { Button } from "../ui/Button"

export const ContactBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Contact Builder</h3>
        <p className="text-blue-100 text-sm">
          Get in touch for project inquiries and site visits
        </p>
      </div>

      {/* Form */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Project
            </label>
            <select
              value={formData.project}
              onChange={(e) =>
                setFormData({ ...formData, project: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="">Select a project</option>
              <option value="skyline-towers">Skyline Towers</option>
              <option value="marina-residences">Marina Residences</option>
              <option value="ocean-view-villas">Ocean View Villas</option>
              <option value="urban-heights">Urban Heights</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Message *
            </label>
            <textarea
              placeholder="I'm interested in learning more about..."
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              required
            />
          </div>

          <Button type="submit" fullWidth size="lg">
            <SendIcon size={18} className="mr-2" />
            Send Inquiry
          </Button>
        </form>

        {/* Quick Contact Options */}
        <div className="pt-6 border-t border-gray-200 mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-3">
            Or reach us directly:
          </p>

          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-lg transition-all duration-300 border border-blue-200">
              <PhoneIcon size={20} className="text-blue-600" />
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">Call Now</p>
                <p className="text-xs text-gray-600">+94 77 123 4567</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-lg transition-all duration-300 border border-green-200">
              <MessageCircleIcon size={20} className="text-green-600" />
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">WhatsApp</p>
                <p className="text-xs text-gray-600">Chat instantly</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-lg transition-all duration-300 border border-purple-200">
              <MailIcon size={20} className="text-purple-600" />
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">Email</p>
                <p className="text-xs text-gray-600">info@skylinedev.com</p>
              </div>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="space-y-3 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <ShieldCheckIcon size={18} className="text-green-600" />
            <span>Secure & confidential contact</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <ClockIcon size={18} className="text-blue-600" />
            <span>Response within 24 hours</span>
          </div>
        </div>

        {/* Availability */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm font-semibold text-gray-900 mb-1">
            Office Hours
          </p>
          <p className="text-sm text-gray-600">
            Monday - Saturday: 9:00 AM - 6:00 PM
          </p>
          <p className="text-sm text-gray-600">Sunday: By Appointment</p>
        </div>
      </div>
    </div>
  )
}
