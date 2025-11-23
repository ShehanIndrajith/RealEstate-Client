'use client'

import React from 'react'
import {
  ShieldCheckIcon,
  CreditCardIcon,
  ZapIcon,
  AwardIcon,
} from 'lucide-react'
export const PlatformHighlights = () => {
  const highlights = [
    {
      icon: <ShieldCheckIcon size={32} />,
      title: 'Verified Agents',
      description:
        'All agents and builders are thoroughly verified to ensure trust and reliability',
    },
    {
      icon: <CreditCardIcon size={32} />,
      title: 'Secure Payments',
      description:
        'Industry-standard encryption and secure payment gateways for all transactions',
    },
    {
      icon: <ZapIcon size={32} />,
      title: 'Fast Approval',
      description:
        'Quick property listing approval process to get your listings live faster',
    },
    {
      icon: <AwardIcon size={32} />,
      title: 'Trusted Listings',
      description:
        'Every property is verified and reviewed to maintain quality standards',
    },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose EstateHub?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a premium platform that connects property seekers with
            trusted professionals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
