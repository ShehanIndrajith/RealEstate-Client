'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  MapPinIcon,
  BedIcon,
  BathIcon,
  MaximizeIcon,
  ChevronRightIcon,
  FilterIcon,
} from 'lucide-react'
import { Button } from '../ui/Button'

export const BuilderProjects = () => {
  const [statusFilter, setStatusFilter] = useState('all')
  const [locationFilter, setLocationFilter] = useState('all')

  const projects = [
    {
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      name: 'Skyline Towers',
      status: 'Ongoing',
      location: 'Colombo 7',
      startingPrice: 'From $350,000',
      bedrooms: '2-4',
      bathrooms: '2-3',
      area: '1,200 - 2,500 sq ft',
      highlights: ['Swimming Pool', 'Gym', 'Parking'],
      completion: '2025 Q2',
    },
    {
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      name: 'Marina Residences',
      status: 'Completed',
      location: 'Mount Lavinia',
      startingPrice: 'From $280,000',
      bedrooms: '1-3',
      bathrooms: '1-2',
      area: '850 - 1,800 sq ft',
      highlights: ['Beach View', 'Security', 'Garden'],
      completion: 'Completed 2023',
    },
    {
      image:
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
      name: 'Ocean View Villas',
      status: 'Ongoing',
      location: 'Galle',
      startingPrice: 'From $520,000',
      bedrooms: '3-5',
      bathrooms: '3-4',
      area: '2,800 - 4,200 sq ft',
      highlights: ['Private Pool', 'Ocean View', 'Smart Home'],
      completion: '2026 Q1',
    },
    {
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
      name: 'Urban Heights',
      status: 'Upcoming',
      location: 'Colombo 5',
      startingPrice: 'From $295,000',
      bedrooms: '2-3',
      bathrooms: '2',
      area: '1,100 - 1,650 sq ft',
      highlights: ['Rooftop Lounge', 'Gym', 'Co-working'],
      completion: '2027 Q3',
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ongoing':
        return 'bg-blue-100 text-blue-700 border-blue-300'
      case 'Completed':
        return 'bg-green-100 text-green-700 border-green-300'
      case 'Upcoming':
        return 'bg-amber-100 text-amber-700 border-amber-300'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300'
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Projects by Skyline Developers
          </h2>

          <div className="flex items-center gap-3">
            <FilterIcon size={20} className="text-gray-500" />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white text-sm"
            >
              <option value="all">All Status</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="upcoming">Upcoming</option>
            </select>

            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white text-sm"
            >
              <option value="all">All Locations</option>
              <option value="colombo">Colombo</option>
              <option value="galle">Galle</option>
              <option value="mount-lavinia">Mount Lavinia</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute top-4 left-4">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.name}
                </h3>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPinIcon size={16} className="mr-1" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <p className="text-2xl font-bold text-blue-600 mb-4">
                  {project.startingPrice}
                </p>

                {/* Features */}
                <div className="flex items-center justify-between py-3 mb-4 border-t border-b border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <BedIcon size={18} />
                    <span className="text-sm">{project.bedrooms} Beds</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <BathIcon size={18} />
                    <span className="text-sm">{project.bathrooms} Baths</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <MaximizeIcon size={18} />
                    <span className="text-sm">{project.area}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Completion:</span>{' '}
                  {project.completion}
                </p>

                <Button fullWidth variant="outline">
                  View Project Details
                  <ChevronRightIcon size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
