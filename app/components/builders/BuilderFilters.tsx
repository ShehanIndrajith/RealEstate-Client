'use client'

import React, { useState } from 'react'
import {
  MapPinIcon,
  BuildingIcon,
  TrendingUpIcon,
  CheckIcon,
  XIcon,
} from 'lucide-react'
import { Button } from '../ui/Button'

interface BuilderFiltersProps {
  onClose?: () => void
  isMobile?: boolean
}

export const BuilderFilters: React.FC<BuilderFiltersProps> = ({
  onClose,
  isMobile = false,
}) => {
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([])

  const expertiseOptions = ['Residential', 'Commercial', 'Mixed-use', 'Luxury']

  const toggleExpertise = (expertise: string) => {
    setSelectedExpertise((prev) =>
      prev.includes(expertise)
        ? prev.filter((e) => e !== expertise)
        : [...prev, expertise]
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
            City / Location
          </label>
          <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
            <option value="">All Cities</option>
            <option value="colombo">Colombo</option>
            <option value="galle">Galle</option>
            <option value="kandy">Kandy</option>
            <option value="negombo">Negombo</option>
            <option value="mount-lavinia">Mount Lavinia</option>
          </select>
        </div>

        {/* Expertise */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            <BuildingIcon size={16} className="inline mr-2" />
            Expertise
          </label>
          <div className="space-y-2">
            {expertiseOptions.map((expertise) => (
              <label
                key={expertise}
                className="flex items-center cursor-pointer group"
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center mr-3 transition-colors ${
                    selectedExpertise.includes(expertise)
                      ? 'bg-blue-600 border-blue-600'
                      : 'border-gray-300 group-hover:border-blue-500'
                  }`}
                  onClick={() => toggleExpertise(expertise)}
                >
                  {selectedExpertise.includes(expertise) && (
                    <CheckIcon size={14} className="text-white" />
                  )}
                </div>
                <span className="text-sm text-gray-700">{expertise}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Number of Projects */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            <TrendingUpIcon size={16} className="inline mr-2" />
            Number of Projects
          </label>
          <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
            <option value="">Any</option>
            <option value="1-5">1-5 Projects</option>
            <option value="6-10">6-10 Projects</option>
            <option value="11-20">11-20 Projects</option>
            <option value="20+">20+ Projects</option>
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Sort By
          </label>
          <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
            <option value="most-projects">Most Projects</option>
            <option value="highest-rating">Highest Rating</option>
            <option value="newest">Newest Builders</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>

        {/* Verified Only Toggle */}
        <div className="pt-4 border-t border-gray-200">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm font-semibold text-gray-900">
              Verified Builders Only
            </span>
            <div
              className={`w-12 h-6 rounded-full transition-colors ${
                verifiedOnly ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setVerifiedOnly(!verifiedOnly)}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                  verifiedOnly ? 'translate-x-6' : 'translate-x-1'
                } mt-0.5`}
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
