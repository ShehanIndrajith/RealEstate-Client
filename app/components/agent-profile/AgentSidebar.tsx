'use client'

import React from 'react'
import Image from 'next/image'
import {
  TrendingUpIcon,
  HomeIcon,
  StarIcon,
  AwardIcon,
  CheckCircleIcon,
} from 'lucide-react'
import { Button } from '../ui/Button'
export const AgentSidebar = () => {
  const quickStats = [
    {
      label: 'Total Properties',
      value: '47',
      icon: <HomeIcon size={20} />,
    },
    {
      label: 'Avg. Rating',
      value: '4.9',
      icon: <StarIcon size={20} />,
    },
    {
      label: 'Total Sales',
      value: '200+',
      icon: <TrendingUpIcon size={20} />,
    },
    {
      label: 'Experience',
      value: '12 yrs',
      icon: <AwardIcon size={20} />,
    },
  ]
  const featuredProperties = [
    {
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      title: 'Modern Villa',
      price: '$450,000',
    },
    {
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      title: 'Luxury Apartment',
      price: '$2,800/mo',
    },
  ]
  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 text-blue-600">
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Featured Properties */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Featured Listings
        </h3>
        <div className="space-y-4">
          {featuredProperties.map((property, index) => (
            <div
              key={index}
              className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <Image
                src={property.image}
                alt={property.title}
                width={80}
                height={80}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">
                  {property.title}
                </h4>
                <p className="text-blue-600 font-bold">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" fullWidth className="mt-4">
          View All Listings
        </Button>
      </div>
      {/* Verification Badge */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-sm border border-blue-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
            <CheckCircleIcon size={24} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Verified Agent</h3>
            <p className="text-sm text-gray-600">Licensed & Certified</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          This agent has been verified by EstateHub and holds all necessary
          licenses and certifications.
        </p>
        <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
          <CheckCircleIcon size={16} />
          <span>Identity Verified</span>
        </div>
      </div>
      {/* CTA */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-sm p-6 text-white">
        <h3 className="text-xl font-bold mb-2">List Your Property</h3>
        <p className="text-white/90 text-sm mb-6">
          Get professional assistance in selling or renting your property
        </p>
        <Button
          fullWidth
          className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}
