'use client'

import React from 'react'
import Image from 'next/image'
import { StarIcon, HomeIcon } from 'lucide-react'
import { Button } from '../ui/Button'
export const TopAgents = () => {
  const agents = [
    {
      name: 'Sarah Johnson',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop',
      rating: 4.9,
      properties: 47,
    },
    {
      name: 'Michael Chen',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
      rating: 4.8,
      properties: 52,
    },
    {
      name: 'Emily Rodriguez',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461&auto=format&fit=crop',
      rating: 5.0,
      properties: 38,
    },
    {
      name: 'David Kumar',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop',
      rating: 4.7,
      properties: 41,
    },
  ]
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Top Rated Agents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with our most trusted and experienced real estate
            professionals
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6 text-center">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {agent.name}
                </h3>
                <div className="flex items-center justify-center mb-3">
                  <StarIcon
                    size={16}
                    className="text-yellow-400 fill-yellow-400 mr-1"
                  />
                  <span className="text-gray-700 font-medium">
                    {agent.rating}
                  </span>
                </div>
                <div className="flex items-center justify-center text-gray-600 mb-4">
                  <HomeIcon size={16} className="mr-1" />
                  <span className="text-sm">{agent.properties} Properties</span>
                </div>
                <Button variant="outline" fullWidth size="sm">
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
