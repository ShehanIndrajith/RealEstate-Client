'use client'

import React, { useState } from 'react'
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  MessageCircleIcon,
  MapPinIcon,
  BriefcaseIcon,
  StarIcon,
  XIcon,
  PlusIcon,
  CheckCircleIcon,
  SaveIcon,
  RotateCcwIcon,
  Trash2Icon,
} from 'lucide-react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

/* ---------- Types ---------- */

export interface AgentData {
  profilePhoto: string
  name: string
  email: string
  phone: string
  whatsapp: string
  bio: string
  location: string
  experience: number
  rating: number
  specializations: string[]
  isVerified: boolean
}

interface EditAgentFormProps {
  previewData: AgentData
  onDataChange: (data: AgentData) => void
  onDelete: () => void
}

/* ---------- Component ---------- */

export const EditAgentForm: React.FC<EditAgentFormProps> = ({
  onDataChange,
  previewData,
  onDelete,
}) => {
  const [newSpecialization, setNewSpecialization] = useState<string>('')
  const [modifiedFields, setModifiedFields] = useState<Set<string>>(new Set())

  const handleInputChange = (field: keyof AgentData, value: any) => {
    onDataChange({
      ...previewData,
      [field]: value,
    })
    setModifiedFields((prev) => new Set(prev).add(field))
  }

  const addSpecialization = () => {
    if (!newSpecialization.trim()) return

    handleInputChange('specializations', [
      ...previewData.specializations,
      newSpecialization.trim(),
    ])
    setNewSpecialization('')
  }

  const removeSpecialization = (index: number) => {
    const updated = previewData.specializations.filter((_, i) => i !== index)
    handleInputChange('specializations', updated)
  }

  const isFieldModified = (field: keyof AgentData) =>
    modifiedFields.has(field)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Agent Information</h2>

        {modifiedFields.size > 0 && (
          <span className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-semibold">
            {modifiedFields.size} field
            {modifiedFields.size > 1 ? 's' : ''} modified
          </span>
        )}
      </div>

      {/* Profile Photo */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Profile Photo
        </label>
        <div className="flex items-center gap-6">
          <div className="relative">
            {previewData.profilePhoto ? (
              <img
                src={previewData.profilePhoto}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center border-4 border-gray-100">
                <UserIcon size={32} className="text-gray-400" />
              </div>
            )}

            {isFieldModified('profilePhoto') && (
              <div className="absolute -top-2 -right-2 bg-amber-500 rounded-full p-1.5">
                <CheckCircleIcon size={14} className="text-white" />
              </div>
            )}
          </div>

          <div className="flex-1">
            <input
              type="text"
              placeholder="Enter image URL"
              value={previewData.profilePhoto}
              onChange={(e) =>
                handleInputChange('profilePhoto', e.target.value)
              }
              className={`w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:ring-2 ${
                isFieldModified('profilePhoto')
                  ? 'border-amber-400 bg-amber-50'
                  : 'border-gray-300'
              }`}
            />
            <p className="text-sm text-gray-500">
              Recommended: 400x400px professional headshot
            </p>
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <div className="space-y-5 mb-8">
        <div>
          <Input
            label="Agent Name *"
            placeholder="Enter full name"
            value={previewData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            icon={<UserIcon size={18} />}
            className={isFieldModified('name') ? 'bg-amber-50 border-amber-400' : ''}
          />
          {isFieldModified('name') && (
            <p className="text-xs text-amber-600 mt-1 flex items-center gap-1">
              <CheckCircleIcon size={12} /> Modified
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Input
              label="Email Address *"
              type="email"
              placeholder="agent@example.com"
              value={previewData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              icon={<MailIcon size={18} />}
              className={isFieldModified('email') ? 'bg-amber-50 border-amber-400' : ''}
            />
            {isFieldModified('email') && (
              <p className="text-xs text-amber-600 mt-1 flex items-center gap-1">
                <CheckCircleIcon size={12} /> Modified
              </p>
            )}
          </div>

          <div>
            <Input
              label="Phone Number *"
              type="tel"
              placeholder="+94 77 123 4567"
              value={previewData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              icon={<PhoneIcon size={18} />}
              className={isFieldModified('phone') ? 'bg-amber-50 border-amber-400' : ''}
            />
            {isFieldModified('phone') && (
              <p className="text-xs text-amber-600 mt-1 flex items-center gap-1">
                <CheckCircleIcon size={12} /> Modified
              </p>
            )}
          </div>
        </div>

        <div>
          <Input
            label="WhatsApp Number"
            type="tel"
            placeholder="+94 77 123 4567"
            value={previewData.whatsapp}
            onChange={(e) => handleInputChange('whatsapp', e.target.value)}
            icon={<MessageCircleIcon size={18} />}
            className={
              isFieldModified('whatsapp') ? 'bg-amber-50 border-amber-400' : ''
            }
          />
        </div>
      </div>

      {/* Biography */}
      <div className="space-y-5 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Biography
          </label>
          <textarea
            rows={4}
            value={previewData.bio}
            placeholder="Write a brief professional bio..."
            onChange={(e) => handleInputChange('bio', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg resize-none focus:ring-blue-500 focus:ring-2 ${
              isFieldModified('bio')
                ? 'bg-amber-50 border-amber-400'
                : 'border-gray-300'
            }`}
          />
        </div>

        {/* Location + Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Input
              label="Location *"
              placeholder="City, Country"
              value={previewData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              icon={<MapPinIcon size={18} />}
              className={
                isFieldModified('location') ? 'bg-amber-50 border-amber-400' : ''
              }
            />
          </div>

          <div>
            <Input
              label="Years of Experience *"
              type="number"
              value={previewData.experience}
              onChange={(e) =>
                handleInputChange('experience', Number(e.target.value))
              }
              icon={<BriefcaseIcon size={18} />}
              className={
                isFieldModified('experience') ? 'bg-amber-50 border-amber-400' : ''
              }
            />
          </div>
        </div>

        {/* Rating */}
        {/* Rating (Read-only) */}
<div>
  <label className="block text-sm font-semibold text-gray-700 mb-2">
    Rating (out of 5)
  </label>

  <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200">
    <StarIcon size={20} className="text-amber-400" />
    <span className="text-xl font-bold text-gray-900">
      {previewData.rating.toFixed(1)}
    </span>
    <span className="text-sm text-gray-500">/ 5.0</span>
  </div>

  <p className="mt-1 text-xs text-gray-500">
    Rating is calculated automatically from client reviews
  </p>
</div>

      </div>

      {/* Specializations */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Specializations
        </label>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Add specialization (e.g., Luxury Homes)"
            value={newSpecialization}
            onChange={(e) => setNewSpecialization(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addSpecialization()}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Button onClick={addSpecialization} type="button">
            <PlusIcon size={18} />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {previewData.specializations.map((spec: string, index: number) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200"
            >
              {spec}
              <button
                onClick={() => removeSpecialization(index)}
                className="hover:bg-blue-100 rounded-full p-0.5 transition-colors"
              >
                <XIcon size={14} />
              </button>
            </span>
          ))}
        </div>
        {isFieldModified('specializations') && (
          <p className="text-xs text-amber-600 mt-2 flex items-center gap-1">
            <CheckCircleIcon size={12} />
            Modified
          </p>
        )}
      </div>
      {/* Featured Properties
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Featured Properties
        </label>
        <div className="space-y-3">
          {previewData.featuredProperties.map((url: string, index: number) => (
            <div key={index} className="flex items-center gap-3">
              <img
                src={url}
                alt={`Property ${index + 1}`}
                className="w-20 h-20 rounded-lg object-cover border border-gray-200"
              />
              <input
                type="text"
                value={url}
                onChange={(e) => {
                  const newProperties = [...previewData.featuredProperties]
                  newProperties[index] = e.target.value
                  handleInputChange('featuredProperties', newProperties)
                }}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={() => {
                  handleInputChange(
                    'featuredProperties',
                    previewData.featuredProperties.filter(
                      (_: any, i: number) => i !== index,
                    ),
                  )
                }}
                className="p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <XIcon size={20} />
              </button>
            </div>
          ))}
          <Button
            variant="outline"
            onClick={() =>
              handleInputChange('featuredProperties', [
                ...previewData.featuredProperties,
                '',
              ])
            }
            type="button"
          >
            <PlusIcon size={18} className="mr-2" />
            Add Property Image
          </Button>
        </div>
        {isFieldModified('featuredProperties') && (
          <p className="text-xs text-amber-600 mt-2 flex items-center gap-1">
            <CheckCircleIcon size={12} />
            Modified
          </p>
        )}
      </div> */}
      {/* Verification Status */}
      {/* Verification Status (Read-only) */}
<div className="mb-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
  <div className="flex items-center gap-3">
    <CheckCircleIcon
      size={24}
      className={
        previewData.isVerified ? "text-green-600" : "text-gray-400"
      }
    />
    <div>
      <h3 className="font-semibold text-gray-900">
        Verification Status
      </h3>

      <p className="text-sm text-gray-600">
        {previewData.isVerified
          ? "This agent is verified"
          : "This agent is not verified"}
      </p>
    </div>
  </div>
</div>


      {/* Action Buttons */}
      <div className="space-y-3 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button fullWidth size="lg">
            <SaveIcon size={20} className="mr-2" />
            Save Changes
          </Button>

          <Button
            fullWidth
            size="lg"
            variant="outline"
            onClick={() => setModifiedFields(new Set())}
          >
            <RotateCcwIcon size={20} className="mr-2" />
            Reset Changes
          </Button>
        </div>

        <Button
          fullWidth
          size="lg"
          variant="outline"
          className="border-red-300 text-red-600 hover:bg-red-50"
          onClick={onDelete}
        >
          <Trash2Icon size={20} className="mr-2" />
          Delete Agent
        </Button>
      </div>
    </div>
  )
}
