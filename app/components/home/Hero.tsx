'use client'

import React, { useState } from 'react'
import {
  SearchIcon,
  MapPinIcon,
  HomeIcon,
  DollarSignIcon,
  BedIcon,
} from 'lucide-react'
import { Button } from '../ui/Button'
export const Hero = () => {
  const [location, setLocation] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Find Your Perfect Property
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Discover exceptional homes and commercial spaces with verified agents
          and trusted builders across the country
        </p>
        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Location */}
            <div className="relative">
              <MapPinIcon
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* Property Type */}
            <div className="relative">
              <HomeIcon
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <select
                value={propertyType}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPropertyType(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
            {/* Price Range */}
            <div className="relative">
              <DollarSignIcon
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <select
                value={priceRange}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriceRange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Price Range</option>
                <option value="0-100k">$0 - $100k</option>
                <option value="100k-300k">$100k - $300k</option>
                <option value="300k-500k">$300k - $500k</option>
                <option value="500k+">$500k+</option>
              </select>
            </div>
            {/* Bedrooms */}
            <div className="relative">
              <BedIcon
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <select
                value={bedrooms}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBedrooms(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Bedrooms</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4+">4+ Bedrooms</option>
              </select>
            </div>
          </div>
          <Button fullWidth size="lg" className="sm:w-auto sm:px-12">
            <SearchIcon size={20} className="mr-2" />
            Search Properties
          </Button>
        </div>
      </div>
    </div>
  )
}
