'use client'

import React from 'react'
import Image from 'next/image'
import {
  StarIcon,
  HomeIcon,
  CheckCircleIcon,
  TrendingUpIcon,
  PhoneIcon,
} from 'lucide-react'
import { Button } from '../ui/Button'
export const FeaturedAgentsSidebar = () => {
  const featuredAgents = [
    {
      name: 'Sarah Johnson',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop',
      rating: 4.9,
      properties: 47,
      verified: true,
    },
    {
      name: 'Michael Chen',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
      rating: 4.8,
      properties: 52,
      verified: true,
    },
    {
      name: 'Emily Rodriguez',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461&auto=format&fit=crop',
      rating: 5.0,
      properties: 38,
      verified: true,
    },
  ]
  return (
    <div className="space-y-6 sticky top-24">
      {/* Featured Agents */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
            <StarIcon size={20} className="text-white fill-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Featured Agents</h3>
        </div>
        <div className="space-y-4">
          {featuredAgents.map((agent, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="relative flex-shrink-0">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover"
                />
                {agent.verified && (
                  <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                    <CheckCircleIcon size={12} className="text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 truncate">
                  {agent.name}
                </h4>
                <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-1">
                    <StarIcon
                      size={12}
                      className="text-yellow-400 fill-yellow-400"
                    />
                    <span className="font-medium">{agent.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HomeIcon size={12} />
                    <span>{agent.properties}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" fullWidth className="mt-4">
          View All Featured
        </Button>
      </div>
      {/* Help CTA */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-sm p-6 text-white">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
          <PhoneIcon size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2">
          Need Help Finding a Property?
        </h3>
        <p className="text-white/90 text-sm mb-6">
          Our expert agents are ready to assist you in finding your dream
          property
        </p>
        <Button
          fullWidth
          className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
        >
          Contact Us
        </Button>
      </div>
      {/* Promotional CTA */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-sm border border-green-200 p-6">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
          <TrendingUpIcon size={24} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          List Your Property Today
        </h3>
        <p className="text-gray-600 text-sm mb-6">
          Join thousands of successful agents and reach more potential buyers
        </p>
        <Button fullWidth variant="outline">
          Get Started
        </Button>
      </div>
    </div>
  )
}
