'use client'

import React, { useState } from 'react';
import { Header } from '../components/home/Header';
import { BuilderSearchBar } from '../components/builders/BuilderSearchBar';
import { BuilderFilters } from '../components/builders/BuilderFilters';
import { BuildersGrid } from '../components/builders/BuildersGrid';
import { Pagination } from '../components/listing/Pagination';

const BuildersList = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title & Search Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top Verified Builders
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore trusted builders and their real estate projects
            </p>
            <BuilderSearchBar onFilterClick={() => setIsMobileFilterOpen(true)} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mt-8">
            {/* Filter Sidebar - Desktop */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <BuilderFilters />
              {/* Promotional Sidebar */}
              <div className="mt-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-sm p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Are You a Builder?</h3>
                <p className="text-white/90 text-sm mb-6">
                  List your projects and reach thousands of potential buyers today!
                </p>
                <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg">
                  List Your Project Today
                </button>
              </div>
            </div>

            {/* Mobile Filter Drawer */}
            {isMobileFilterOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div
                  className="absolute inset-0 bg-black/50"
                  onClick={() => setIsMobileFilterOpen(false)}
                />
                <div className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
                  <BuilderFilters
                    onClose={() => setIsMobileFilterOpen(false)}
                    isMobile={true}
                  />
                </div>
              </div>
            )}

            {/* Main Content */}
            <div className="flex-1">
              <BuildersGrid />
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
  );
};

export default BuildersList;
