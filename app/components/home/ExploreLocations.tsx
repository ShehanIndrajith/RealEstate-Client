'use client'

import React from 'react'
import Image from 'next/image'
export const ExploreLocations = () => {
  const locations = [
    {
      name: 'Colombo',
      image:
        'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=2787&auto=format&fit=crop',
      properties: 234,
    },
    {
      name: 'Galle',
      image:
        'https://i.pinimg.com/736x/07/89/5a/07895adcbddac6fb8e51ac711c6d0f0e.jpg',
      properties: 156,
    },
    {
      name: 'Kandy',
      image:
        'https://i.pinimg.com/1200x/1a/6f/c3/1a6fc3dd190e2ea9704a523dab6dc082.jpg',
      properties: 98,
    },
    {
      name: 'Negombo',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop',
      properties: 142,
    },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore by Location
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover properties in the most sought-after locations across the
            country
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={location.image}
                alt={location.name}
                width={400}
                height={256}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{location.name}</h3>
                <p className="text-sm text-white/90">
                  {location.properties} Properties
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
