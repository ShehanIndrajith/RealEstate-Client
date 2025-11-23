'use client'

import React from 'react'
import {
  XIcon,
  AlertTriangleIcon,
  Trash2Icon
} from 'lucide-react'
import { Button } from '../ui/Button'

interface DeleteAgentModalProps {
  isOpen: boolean
  onClose: () => void
  agentData: {
    name: string
    photo: string
  }
}

export const DeleteAgentModal: React.FC<DeleteAgentModalProps> = ({
  isOpen,
  onClose,
  agentData
}) => {
  if (!isOpen) return null

  const handleDelete = () => {
    console.log('Deleting agent:', agentData.name)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <AlertTriangleIcon size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Delete Agent</h3>
          </div>

          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <XIcon size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Agent Photo */}
          {agentData.photo && (
            <div className="mb-6">
              <img
                src={agentData.photo}
                alt={agentData.name}
                className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-red-100 shadow-lg"
              />
            </div>
          )}

          {/* Warning Message */}
          <h4 className="text-2xl font-bold text-gray-900 mb-3">
            {agentData.name}
          </h4>

          <p className="text-gray-600 leading-relaxed mb-6">
            Are you sure you want to delete this agent profile? This action{' '}
            <span className="font-semibold text-red-600">cannot be undone</span>.
            All associated data, including properties and reviews, will be permanently removed.
          </p>

          {/* Warning Box */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangleIcon
                size={20}
                className="text-red-600 flex-shrink-0 mt-0.5"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-red-900 mb-1">
                  This will permanently delete:
                </p>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Agent profile and contact information</li>
                  <li>• All associated property listings</li>
                  <li>• Reviews and ratings</li>
                  <li>• Transaction history</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              fullWidth
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white shadow-lg"
              onClick={handleDelete}
            >
              <Trash2Icon size={20} className="mr-2" />
              Delete Permanently
            </Button>

            <Button
              fullWidth
              size="lg"
              variant="outline"
              onClick={onClose}
              className="border-gray-300"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
