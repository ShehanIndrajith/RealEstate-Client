'use client'

import React, { useState } from 'react'
import {
  SearchIcon,
  MapPinIcon,
  SlidersHorizontalIcon,
  GridIcon,
  ListIcon,
} from 'lucide-react'
import { Button } from '../ui/Button'
interface AgentsSearchBarProps {
  totalResults: number
  viewMode: 'grid' | 'list'
  onViewModeChange: (mode: 'grid' | 'list') => void
}
export const AgentsSearchBar = ({
  totalResults,
  viewMode,
  onViewModeChange,
}: AgentsSearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')
  const [expertise, setExpertise] = useState('')
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  return (
    <div className="space-y-4">
      {/* Main Search Bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search by Name */}
          <div className="relative md:col-span-2">
            <SearchIcon
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search by agent name..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
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
          {/* Search Button */}
          <Button className="w-full">
            <SearchIcon size={18} className="mr-2" />
            Search
          </Button>
        </div>
      </div>
      {/* Filters & Sorting Bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <SlidersHorizontalIcon size={18} />
              <span className="text-sm font-medium">Filters</span>
            </button>
            <p className="text-gray-700 font-medium">
              <span className="text-blue-600 font-semibold">
                {totalResults}
              </span>{' '}
              Agents Found
            </p>
          </div>
          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm font-medium">
              <option value="most-listings">Most Listings</option>
              <option value="highest-rating">Highest Rating</option>
              <option value="newest">Newest</option>
              <option value="most-reviews">Most Reviews</option>
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
        {/* Expanded Filters */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Expertise */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Property Expertise
                </label>
                <select
                  value={expertise}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setExpertise(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">All Types</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="projects">Projects</option>
                  <option value="luxury">Luxury Properties</option>
                  <option value="land">Land</option>
                </select>
              </div>
              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Minimum Rating
                </label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                  <option value="">Any Rating</option>
                  <option value="4.5">4.5+ Stars</option>
                  <option value="4.0">4.0+ Stars</option>
                  <option value="3.5">3.5+ Stars</option>
                </select>
              </div>
              {/* Verified Toggle */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Verification Status
                </label>
                <label className="flex items-center justify-between cursor-pointer px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <span className="text-sm text-gray-700">Verified Only</span>
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
            </div>
            <div className="flex gap-3 mt-4">
              <Button>Apply Filters</Button>
              <Button variant="outline">Reset</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
