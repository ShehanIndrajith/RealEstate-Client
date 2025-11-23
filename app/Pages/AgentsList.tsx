'use client'

import React, { useState } from 'react'
import { Header } from '../components/home/Header'
import { AgentsSearchBar } from '../components/agents/AgentsSearchBar'
import { AgentCard } from '../components/agents/AgentCard'
import { FeaturedAgentsSidebar } from '../components/agents/FeaturedAgentsSidebar'
import { Pagination } from '../components/listing/Pagination'
const AgentsList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const agents = [
    {
      id: 1,
      name: 'Sarah Johnson',
      designation: 'Senior Real Estate Agent',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop',
      verified: true,
      rating: 4.9,
      reviewCount: 127,
      propertyCount: 47,
      location: 'Colombo 7, Sri Lanka',
      expertise: ['Residential', 'Luxury Properties'],
      bio: 'Specializing in luxury residential properties with 10+ years of experience',
    },
    {
      id: 2,
      name: 'Michael Chen',
      designation: 'Property Developer',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
      verified: true,
      rating: 4.8,
      reviewCount: 98,
      propertyCount: 52,
      location: 'Colombo 3, Sri Lanka',
      expertise: ['Commercial', 'Projects'],
      bio: 'Leading commercial property development across major cities',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      designation: 'Real Estate Consultant',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461&auto=format&fit=crop',
      verified: true,
      rating: 5.0,
      reviewCount: 156,
      propertyCount: 38,
      location: 'Galle, Sri Lanka',
      expertise: ['Residential', 'Vacation Homes'],
      bio: 'Expert in beachfront and vacation property investments',
    },
    {
      id: 4,
      name: 'David Kumar',
      designation: 'Senior Property Agent',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop',
      verified: true,
      rating: 4.7,
      reviewCount: 89,
      propertyCount: 41,
      location: 'Kandy, Sri Lanka',
      expertise: ['Residential', 'Land'],
      bio: 'Helping families find their dream homes in central regions',
    },
    {
      id: 5,
      name: 'Jessica Williams',
      designation: 'Luxury Property Specialist',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop',
      verified: true,
      rating: 4.9,
      reviewCount: 143,
      propertyCount: 35,
      location: 'Colombo 7, Sri Lanka',
      expertise: ['Luxury Properties', 'Penthouses'],
      bio: 'Exclusive representation of high-end luxury properties',
    },
    {
      id: 6,
      name: 'Robert Anderson',
      designation: 'Commercial Property Expert',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop',
      verified: false,
      rating: 4.6,
      reviewCount: 67,
      propertyCount: 29,
      location: 'Colombo 2, Sri Lanka',
      expertise: ['Commercial', 'Office Spaces'],
      bio: 'Specializing in commercial real estate and office solutions',
    },
    {
      id: 7,
      name: 'Priya Sharma',
      designation: 'Real Estate Agent',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
      verified: true,
      rating: 4.8,
      reviewCount: 112,
      propertyCount: 44,
      location: 'Mount Lavinia, Sri Lanka',
      expertise: ['Residential', 'Apartments'],
      bio: 'Dedicated to finding perfect homes for first-time buyers',
    },
    {
      id: 8,
      name: 'James Thompson',
      designation: 'Builder & Developer',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop',
      verified: true,
      rating: 4.9,
      reviewCount: 134,
      propertyCount: 28,
      location: 'Negombo, Sri Lanka',
      expertise: ['Projects', 'New Developments'],
      bio: 'Award-winning builder with focus on sustainable construction',
    },
    {
      id: 9,
      name: 'Sophia Martinez',
      designation: 'Property Consultant',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      verified: true,
      rating: 4.7,
      reviewCount: 95,
      propertyCount: 33,
      location: 'Colombo 5, Sri Lanka',
      expertise: ['Residential', 'Investment Properties'],
      bio: 'Investment property specialist with proven track record',
    },
  ]
  const totalResults = agents.length
  const totalPages = Math.ceil(totalResults / 9)
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Agents
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Connect with verified real estate experts and trusted builders
            across the country
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <AgentsSearchBar
              totalResults={totalResults}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
            {/* Agents Grid */}
            <div
              className={`grid gap-6 mt-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}
            >
              {agents.map((agent) => (
                <AgentCard key={agent.id} {...agent} viewMode={viewMode} />
              ))}
            </div>
            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
          {/* Sidebar */}
          <div className="hidden lg:block lg:w-80">
            <FeaturedAgentsSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
export default AgentsList
