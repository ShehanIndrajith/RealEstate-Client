'use client'

import React, { useState, useEffect } from 'react'
import { Header } from '../components/home/Header'
import { AgentsSearchBar } from '../components/agents/AgentsSearchBar'
import { AgentCard } from '../components/agents/AgentCard'
import { FeaturedAgentsSidebar } from '../components/agents/FeaturedAgentsSidebar'
import { Pagination } from '../components/listing/Pagination'

interface Agent {
  userID: number
  fullName: string
  email: string
  role: string
  phoneNumber: string
  profilePictureURL: string | null
  isVerified: boolean
  createdAt: string
  updatedAt: string
  properties: []
}

const AgentsList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [agents, setAgents] = useState<{
    id: number
    name: string
    designation: string
    image: string
    verified: boolean
    rating: number
    reviewCount: number
    propertyCount: number
    location: string
    expertise: string[]
    bio: string
    email: string
    phoneNumber: string
  }[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchAgents()
  }, [])

  const fetchAgents = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('http://localhost:5000/api/User/agents')
      if (!response.ok) {
        throw new Error('Failed to fetch agents')
      }
      const data: Agent[] = await response.json()

      // Transform API data to component format
      const transformedAgents = data.map((agent, index) => ({
        id: agent.userID,
        name: agent.fullName,
        designation: 'Real Estate Agent',
        image: agent.profilePictureURL || `https://images.unsplash.com/photo-${1574095867891 + index}?q=80&w=400&auto=format&fit=crop`,
        verified: agent.isVerified,
        rating: Number((4.5 + Math.random() * 0.5).toFixed(1)),
        reviewCount: Math.floor(Math.random() * 100) + 50,
        propertyCount: agent.properties?.length || 0,
        location: 'Sri Lanka',
        expertise: ['Residential', 'Commercial'],
        bio: `Experienced real estate agent specializing in properties across Sri Lanka`,
        email: agent.email,
        phoneNumber: agent.phoneNumber,
      }))

      setAgents(transformedAgents)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setAgents([])
    } finally {
      setLoading(false)
    }
  }
  
  const totalResults = agents.length
  const totalPages = Math.ceil(totalResults / 9)
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 pt-32 pb-16">
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
        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        )}
        
        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading agents...</p>
            </div>
          </div>
        )}
        
        {/* Content */}
        {!loading && (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <AgentsSearchBar
                totalResults={totalResults}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
              />
              {/* Agents Grid */}
              {agents.length > 0 ? (
                <>
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
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No agents found</p>
                </div>
              )}
            </div>
            {/* Sidebar */}
            <div className="hidden lg:block lg:w-80">
              <FeaturedAgentsSidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default AgentsList
