'use client'

import React, { useState } from 'react'
import {
  MapPinIcon,
  HomeIcon,
  DollarSignIcon,
  BedIcon,
  BathIcon,
  MaximizeIcon,
  CheckIcon,
  XIcon,
} from 'lucide-react'
import { Button } from '../ui/Button'
interface FilterSidebarProps {
  onClose?: () => void
  isMobile?: boolean
}
export const FilterSidebar = ({
  onClose,
  isMobile = false,
}: FilterSidebarProps) => {
  const [priceMin, setPriceMin] = useState('')
  const [priceMax, setPriceMax] = useState('')
  const [sizeMin, setSizeMin] = useState('')
  const [sizeMax, setSizeMax] = useState('')
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const amenities = [
    'Parking',
    'Swimming Pool',
    'Gym',
    'Security',
    'Garden',
    'Balcony',
    'Air Conditioning',
    'Elevator',
  ]
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity],
    )
  }
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Mobile Header */}
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XIcon size={20} />
          </button>
        </div>
      )}
      <div className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            <MapPinIcon size={16} className="inline mr-2" />
            Location
          </label>
          <input
            type="text"
            placeholder="Search location..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        {/* Property Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            <HomeIcon size={16} className="inline mr-2" />
            Property Type
          </label>
          <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="land">Land</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        {/* Price Range */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            <DollarSignIcon size={16} className="inline mr-2" />
            Price Range
          </label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Min"
              value={priceMin}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPriceMin(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Max"
              value={priceMax}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPriceMax(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            <BedIcon size={16} className="inline mr-2" />
            Bedrooms
          </label>
          <div className="grid grid-cols-5 gap-2">
            {['Any', '1', '2', '3', '4+'].map((bed) => (
              <button
                key={bed}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-sm font-medium"
              >
                {bed}
              </button>
            ))}
          </div>
        </div>
        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            <BathIcon size={16} className="inline mr-2" />
            Bathrooms
          </label>
          <div className="grid grid-cols-5 gap-2">
            {['Any', '1', '2', '3', '4+'].map((bath) => (
              <button
                key={bath}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-sm font-medium"
              >
                {bath}
              </button>
            ))}
          </div>
        </div>
        {/* Property Size */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            <MaximizeIcon size={16} className="inline mr-2" />
            Property Size (sq ft)
          </label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Min"
              value={sizeMin}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSizeMin(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Max"
              value={sizeMax}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSizeMax(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        {/* Amenities */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Amenities
          </label>
          <div className="space-y-2">
            {amenities.map((amenity) => (
              <label
                key={amenity}
                className="flex items-center cursor-pointer group"
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center mr-3 transition-colors ${selectedAmenities.includes(amenity) ? 'bg-blue-600 border-blue-600' : 'border-gray-300 group-hover:border-blue-500'}`}
                  onClick={() => toggleAmenity(amenity)}
                >
                  {selectedAmenities.includes(amenity) && (
                    <CheckIcon size={14} className="text-white" />
                  )}
                </div>
                <span className="text-sm text-gray-700">{amenity}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Verified Only Toggle */}
        <div className="pt-4 border-t border-gray-200">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm font-semibold text-gray-900">
              Verified Properties Only
            </span>
            <div
              className={`w-12 h-6 rounded-full transition-colors ${verifiedOnly ? 'bg-blue-600' : 'bg-gray-300'}`}
              onClick={() => setVerifiedOnly(!verifiedOnly)}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${verifiedOnly ? 'translate-x-6' : 'translate-x-1'} mt-0.5`}
              ></div>
            </div>
          </label>
        </div>
        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <Button fullWidth>Apply Filters</Button>
          <Button fullWidth variant="outline">
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  )
}
