'use client'

import React, { useState } from 'react'
import { Header } from '../components/home/Header'
import { FilterSidebar } from '../components/listing/FilterSidebar'
import { SortingBar } from '../components/listing/SortingBar'
import { PropertyCard } from '../components/home/PropertyCard'
import { Pagination } from '../components/listing/Pagination'
import { properties } from '../data/properties'
const PropertyListing = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const totalResults = properties.length
  const totalPages = Math.ceil(totalResults / 9)
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar - Desktop */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <FilterSidebar />
            </div>
            {/* Mobile Filter Drawer */}
            {isMobileFilterOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div
                  className="absolute inset-0 bg-black/50"
                  onClick={() => setIsMobileFilterOpen(false)}
                ></div>
                <div className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
                  <FilterSidebar
                    onClose={() => setIsMobileFilterOpen(false)}
                    isMobile={true}
                  />
                </div>
              </div>
            )}
            {/* Main Content */}
            <div className="flex-1">
              <SortingBar
                totalResults={totalResults}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                onFilterClick={() => setIsMobileFilterOpen(true)}
              />
              {/* Property Grid */}
              <div
                className={`grid gap-6 mt-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}
              >
                {properties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    image={property.image}
                    price={property.price}
                    title={property.title}
                    location={property.location}
                    bedrooms={property.bedrooms}
                    bathrooms={property.bathrooms}
                    area={property.area}
                    type={property.type}
                    href={`/property/${property.id}`}
                  />
                ))}
              </div>
              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PropertyListing
