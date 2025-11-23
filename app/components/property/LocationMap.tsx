'use client'

import React from 'react'
import Image from 'next/image'
import {
  MapPinIcon,
  SchoolIcon,
  HospitalIcon,
  ShoppingCartIcon,
} from 'lucide-react'
export const LocationMap = () => {
  const nearbyPlaces = [
    {
      icon: SchoolIcon,
      name: 'International School',
      distance: '0.8 km',
    },
    {
      icon: HospitalIcon,
      name: 'City Hospital',
      distance: '1.2 km',
    },
    {
      icon: ShoppingCartIcon,
      name: 'Shopping Mall',
      distance: '1.5 km',
    },
    {
      icon: MapPinIcon,
      name: 'Beach',
      distance: '0.3 km',
    },
  ]
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Location & Nearby
      </h2>
      {/* Map Placeholder */}
      <div className="bg-gray-200 rounded-xl h-80 mb-6 flex items-center justify-center relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
          alt="Map"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 1024px, 100vw"
        />
        <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
          <div className="bg-white px-6 py-3 rounded-full shadow-lg">
            <MapPinIcon size={24} className="text-blue-600" />
          </div>
        </div>
      </div>
      {/* Nearby Places */}
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Nearby Places
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {nearbyPlaces.map((place, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
          >
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <place.icon size={20} className="text-blue-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">{place.name}</div>
              <div className="text-sm text-gray-600">{place.distance}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
