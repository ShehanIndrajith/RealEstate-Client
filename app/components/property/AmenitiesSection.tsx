'use client'

import React from 'react'
import {
  WavesIcon,
  DumbbellIcon,
  ShieldCheckIcon,
  TreesIcon,
  AirVentIcon,
  WifiIcon,
  CarIcon,
  CameraIcon,
} from 'lucide-react'
export const AmenitiesSection = () => {
  const amenities = [
    {
      icon: WavesIcon,
      label: 'Swimming Pool',
    },
    {
      icon: DumbbellIcon,
      label: 'Gym',
    },
    {
      icon: ShieldCheckIcon,
      label: '24/7 Security',
    },
    {
      icon: TreesIcon,
      label: 'Garden',
    },
    {
      icon: AirVentIcon,
      label: 'Air Conditioning',
    },
    {
      icon: WifiIcon,
      label: 'High-Speed Internet',
    },
    {
      icon: CarIcon,
      label: 'Covered Parking',
    },
    {
      icon: CameraIcon,
      label: 'CCTV Surveillance',
    },
  ]
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
          >
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm">
              <amenity.icon size={24} className="text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-700 text-center">
              {amenity.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
