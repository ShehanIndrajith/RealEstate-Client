'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  StarIcon,
  HomeIcon,
  MapPinIcon,
  CheckCircleIcon,
  PhoneIcon,
  MailIcon,
  MessageCircleIcon,
} from 'lucide-react'
import { Button } from '../ui/Button'
interface AgentCardProps {
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
  viewMode?: 'grid' | 'list'
}
export const AgentCard = ({
  id,
  name,
  designation,
  image,
  verified,
  rating,
  reviewCount,
  propertyCount,
  location,
  expertise,
  bio,
  viewMode = 'grid',
}: AgentCardProps) => {
  const router = useRouter()
  const handleViewProfile = () => {
    router.push(`/agent/${id}`)
  }
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                src={image}
                alt={name}
                width={128}
                height={128}
                className="w-32 h-32 rounded-2xl object-cover"
              />
              {verified && (
                <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2 shadow-lg">
                  <CheckCircleIcon size={20} className="text-white" />
                </div>
              )}
            </div>
          </div>
          {/* Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{designation}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <StarIcon
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                    <span className="font-semibold text-gray-900">
                      {rating}
                    </span>
                    <span>({reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HomeIcon size={16} className="text-gray-400" />
                    <span>{propertyCount} Properties</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPinIcon size={16} className="text-blue-600" />
                  <span className="text-sm">{location}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {expertise.map((exp, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{bio}</p>
              </div>
              <div className="flex sm:flex-col gap-2">
                <Button size="sm" className="whitespace-nowrap">
                  <PhoneIcon size={16} className="mr-1" />
                  Call
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="whitespace-nowrap"
                >
                  <MessageCircleIcon size={16} className="mr-1" />
                  Message
                </Button>
              </div>
            </div>
            <Button variant="outline" fullWidth onClick={handleViewProfile}>
              View Profile
            </Button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Profile Section */}
      <div className="p-6 text-center">
        <div className="relative inline-block mb-4">
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-50"
          />
          {verified && (
            <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1.5 shadow-lg">
              <CheckCircleIcon size={16} className="text-white" />
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 font-medium text-sm mb-3">{designation}</p>
        {/* Rating & Stats */}
        <div className="flex items-center justify-center gap-4 mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-1">
            <StarIcon size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="font-semibold text-gray-900">{rating}</span>
            <span className="text-sm text-gray-600">({reviewCount})</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <HomeIcon size={16} />
            <span className="text-sm font-medium">{propertyCount}</span>
          </div>
        </div>
        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
          <MapPinIcon size={16} className="text-blue-600" />
          <span className="text-sm">{location}</span>
        </div>
        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {expertise.map((exp, index) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {exp}
            </span>
          ))}
        </div>
        {/* Bio */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">{bio}</p>
        {/* Action Buttons */}
        <div className="space-y-2">
          <Button fullWidth onClick={handleViewProfile}>View Profile</Button>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm">
              <PhoneIcon size={16} className="mr-1" />
              Call
            </Button>
            <Button variant="outline" size="sm">
              <MailIcon size={16} className="mr-1" />
              Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
