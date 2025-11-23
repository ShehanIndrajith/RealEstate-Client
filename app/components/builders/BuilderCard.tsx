'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import {
  MapPinIcon,
  StarIcon,
  CheckCircleIcon,
  TrendingUpIcon,
  BuildingIcon,
  ChevronRightIcon,
} from 'lucide-react'
import { Button } from '../ui/Button'

export interface FeaturedProject {
  image: string
  title: string
  price: string
}

export interface BuilderCardProps {
  builderId: string
  logo: string
  name: string
  verified: boolean
  location: string
  description: string
  projectCount: number
  completedProjects: number
  ongoingProjects: number
  rating: number
  reviewCount: number
  expertise: string[]
  featuredProjects: FeaturedProject[]
}

export const BuilderCard: React.FC<BuilderCardProps> = (props) => {
  const router = useRouter()

  const handleViewBuilderProfile = () => {
    router.push(`/views/builder/${props.builderId}`)
  }

  const {
    logo,
    name,
    verified,
    location,
    description,
    projectCount,
    completedProjects,
    ongoingProjects,
    rating,
    reviewCount,
    expertise,
    featuredProjects,
  } = props
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-start gap-4 mb-4">
          {/* Logo */}
          <img
            src={logo}
            alt={name}
            className="w-16 h-16 rounded-xl object-cover border-2 border-gray-200"
          />
          {/* Name & Location */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-gray-900">{name}</h3>
              {verified && (
                <CheckCircleIcon size={20} className="text-blue-600 flex-shrink-0" />
              )}
            </div>
            <div className="flex items-center text-gray-600 text-sm mb-2">
              <MapPinIcon size={14} className="mr-1" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="font-semibold text-gray-900">{rating}</span>
              <span className="text-sm text-gray-600">({reviewCount} reviews)</span>
            </div>
          </div>
        </div>
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2">
          {expertise.map((exp, index) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {exp}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <BuildingIcon size={16} className="text-blue-600" />
              <p className="text-xl font-bold text-gray-900">{projectCount}</p>
            </div>
            <p className="text-xs text-gray-600">Total Projects</p>
          </div>
          <div className="text-center border-x border-gray-200">
            <div className="flex items-center justify-center gap-1 mb-1">
              <TrendingUpIcon size={16} className="text-green-600" />
              <p className="text-xl font-bold text-gray-900">{completedProjects}</p>
            </div>
            <p className="text-xs text-gray-600">Completed</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-blue-600 mb-1">{ongoingProjects}</p>
            <p className="text-xs text-gray-600">Ongoing</p>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="p-6 border-b border-gray-200">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Featured Projects</h4>
        <div className="grid grid-cols-3 gap-2">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-lg overflow-hidden relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-2">
                <p className="text-white text-xs font-semibold truncate">{project.title}</p>
                <p className="text-white/90 text-xs">{project.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 space-y-3">
        <Button onClick={handleViewBuilderProfile} fullWidth>
          View Builder Profile
          <ChevronRightIcon size={18} className="ml-2" />
        </Button>
        <Button  fullWidth variant="outline">
          View All Projects
        </Button>
      </div>
    </div>
  )
}
