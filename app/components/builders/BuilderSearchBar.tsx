'use client'

import React, { useState } from 'react'
import { SearchIcon, MapPinIcon, SlidersHorizontalIcon } from 'lucide-react'
import { Button } from '../ui/Button'

interface BuilderSearchBarProps {
  onFilterClick: () => void
}

export const BuilderSearchBar: React.FC<BuilderSearchBarProps> = ({
  onFilterClick,
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="flex-1 relative">
            <SearchIcon
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search by builder name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Location Dropdown */}
          <div className="relative md:w-64">
            <MapPinIcon
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white appearance-none"
            >
              <option value="">All Locations</option>
              <option value="colombo">Colombo</option>
              <option value="galle">Galle</option>
              <option value="kandy">Kandy</option>
              <option value="negombo">Negombo</option>
              <option value="mount-lavinia">Mount Lavinia</option>
            </select>
          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={onFilterClick}
            className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
          >
            <SlidersHorizontalIcon size={20} />
            <span className="font-medium">Filters</span>
          </button>

          {/* Search Button */}
          <Button className="px-8 py-3">Search</Button>
        </div>
      </div>
    </div>
  )
}
