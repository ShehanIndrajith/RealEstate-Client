'use client'

import React from 'react'
import { GridIcon, ListIcon, SlidersHorizontalIcon } from 'lucide-react'
interface SortingBarProps {
  totalResults: number
  viewMode: 'grid' | 'list'
  onViewModeChange: (mode: 'grid' | 'list') => void
  onFilterClick: () => void
}
export const SortingBar = ({
  totalResults,
  viewMode,
  onViewModeChange,
  onFilterClick,
}: SortingBarProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left Side - Results Count */}
        <div className="flex items-center gap-4">
          <button
            onClick={onFilterClick}
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <SlidersHorizontalIcon size={18} />
            <span className="text-sm font-medium">Filters</span>
          </button>
          <p className="text-gray-700 font-medium">
            <span className="text-blue-600 font-semibold">{totalResults}</span>{' '}
            Properties Found
          </p>
        </div>
        {/* Right Side - Sorting and View Toggle */}
        <div className="flex items-center gap-4">
          {/* Sort Dropdown */}
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm font-medium">
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="size-large">Size: Largest First</option>
            <option value="size-small">Size: Smallest First</option>
          </select>
          {/* View Toggle */}
          <div className="hidden sm:flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <GridIcon size={18} />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <ListIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
