'use client'

import React, { useState } from 'react'
import { PropertyCard } from '../home/PropertyCard'
import { Button } from '../ui/Button'
import { GridIcon, ListIcon } from 'lucide-react'
export const AgentProperties = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filter, setFilter] = useState('all')
  const properties = [
    {
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      price: '$450,000',
      title: 'Modern Family Villa',
      location: 'Colombo 7, Sri Lanka',
      bedrooms: 4,
      bathrooms: 3,
      area: '2,500 sq ft',
      type: 'For Sale',
    },
    {
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      price: '$2,800/mo',
      title: 'Luxury Apartment',
      location: 'Galle, Sri Lanka',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,200 sq ft',
      type: 'For Rent',
    },
    {
      image:
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
      price: '$680,000',
      title: 'Beachfront Property',
      location: 'Negombo, Sri Lanka',
      bedrooms: 5,
      bathrooms: 4,
      area: '3,200 sq ft',
      type: 'For Sale',
    },
    {
      image:
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop',
      price: '$320,000',
      title: 'Urban Townhouse',
      location: 'Kandy, Sri Lanka',
      bedrooms: 3,
      bathrooms: 2,
      area: '1,800 sq ft',
      type: 'For Sale',
    },
    {
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
      price: '$890,000',
      title: 'Contemporary Estate',
      location: 'Mount Lavinia, Sri Lanka',
      bedrooms: 6,
      bathrooms: 5,
      area: '4,200 sq ft',
      type: 'For Sale',
    },
    {
      image:
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
      price: '$1,500/mo',
      title: 'City Center Apartment',
      location: 'Colombo 3, Sri Lanka',
      bedrooms: 1,
      bathrooms: 1,
      area: '800 sq ft',
      type: 'For Rent',
    },
  ]
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Listed Properties
          </h2>
          <p className="text-gray-600">
            <span className="font-semibold text-blue-600">
              {properties.length}
            </span>{' '}
            properties available
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Filter Tabs */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'all' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('sale')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'sale' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              For Sale
            </button>
            <button
              onClick={() => setFilter('rent')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'rent' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              For Rent
            </button>
          </div>
          {/* View Toggle */}
          <div className="hidden sm:flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <GridIcon size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <ListIcon size={18} />
            </button>
          </div>
        </div>
      </div>
      {/* Properties Grid */}
      <div
        className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}
      >
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline">Load More Properties</Button>
      </div>
    </div>
  )
}
