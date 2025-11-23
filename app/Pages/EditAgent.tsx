'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, AlertCircleIcon } from 'lucide-react'

import { Header } from '../components/home/Header'
import { EditAgentForm } from '../components/agent-management/EditAgentForm'
import { AgentPreviewCard } from '../components/agent-management/AgentPreviewCard'
import { DeleteAgentModal } from '../components/agent-management/DeleteAgentModal'

export interface AgentFormData {
  name: string
  email: string
  phone: string
  whatsapp: string
  bio: string
  location: string
  experience: string | number
  specializations: string[]
  rating: number
  verified: boolean
  profilePhoto: string
  featuredProperties: string[]
}

const EditAgentPage = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const [previewData, setPreviewData] = useState<AgentFormData>({
    name: 'John Anderson',
    email: 'john.anderson@estatehub.com',
    phone: '+94 77 123 4567',
    whatsapp: '+94 77 123 4567',
    bio: 'Experienced real estate professional with over 12 years in luxury property sales. Specialized in high-end residential properties and investment opportunities across Colombo.',
    location: 'Colombo 7, Sri Lanka',
    experience: '12',
    specializations: ['Luxury Homes', 'Investment Properties', 'Commercial'],
    rating: 4.9,
    verified: true,
    profilePhoto:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop',
    featuredProperties: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop',
    ],
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Edit Banner */}
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertCircleIcon size={20} className="text-white" />
            </div>

            <div className="flex-1">
              <p className="text-blue-900 font-semibold">
                Editing Agent: {previewData.name}
              </p>
              <p className="text-blue-700 text-sm">
                Make your changes and click "Save Changes" to update the profile
              </p>
            </div>
          </div>

          {/* Header */}
          <div className="mb-8">
            <Link
              href="/agents"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
            >
              <ArrowLeftIcon size={20} />
              <span className="font-medium">Back to Agents</span>
            </Link>

            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Edit Agent Profile
            </h1>
            <p className="text-gray-600 text-lg">
              Update agent information and settings
            </p>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Edit Form */}
            <div className="lg:col-span-2">
              <EditAgentForm
                previewData={previewData}
                onDataChange={setPreviewData}
                onDelete={() => setShowDeleteModal(true)}
              />
            </div>

            {/* Preview */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <AgentPreviewCard data={previewData} />
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Delete Modal */}
      <DeleteAgentModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        agentData={{
          name: previewData.name,
          photo: previewData.profilePhoto,
        }}
      />
    </div>
  )
}

export default EditAgentPage
