'use client'

import React from 'react'
import { BuilderCard } from './BuilderCard'
import BuilderProfile from '../../Pages/BuilderProfile';

interface FeaturedProject {
  image: string
  title: string
  price: string
}

interface Builder {
  builderId: string;
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

export const BuildersGrid: React.FC = () => {
  const builders: Builder[] = [
    {
      builderId: '1',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=300&auto=format&fit=crop',
      name: 'Skyline Developers',
      verified: true,
      location: 'Colombo, Sri Lanka',
      description:
        'Leading luxury residential and commercial property developer with 15 years of excellence',
      projectCount: 24,
      completedProjects: 18,
      ongoingProjects: 6,
      rating: 4.8,
      reviewCount: 156,
      expertise: ['Residential', 'Commercial', 'Luxury'],
      featuredProjects: [
        {
          image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop',
          title: 'Skyline Towers',
          price: 'From $350,000',
        },
        {
          image:
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop',
          title: 'Marina Residences',
          price: 'From $280,000',
        },
        {
          image:
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400&auto=format&fit=crop',
          title: 'Ocean View Villas',
          price: 'From $520,000',
        },
      ],
    },
    {
      builderId: '2',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=300&auto=format&fit=crop',
      name: 'Urban Estates Ltd',
      verified: true,
      location: 'Galle, Sri Lanka',
      description:
        'Pioneering sustainable urban development with innovative design solutions',
      projectCount: 18,
      completedProjects: 14,
      ongoingProjects: 4,
      rating: 4.6,
      reviewCount: 98,
      expertise: ['Residential', 'Mixed-use'],
      featuredProjects: [
        {
          image:
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop',
          title: 'Urban Heights',
          price: 'From $220,000',
        },
        {
          image:
            'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=400&auto=format&fit=crop',
          title: 'Green Valley',
          price: 'From $190,000',
        },
      ],
    },
    // Add the remaining builders similarly...
  ]

  return (
    <div>
      <div className="mb-6">
        <p className="text-gray-700 font-medium">
          <span className="text-blue-600 font-semibold">{builders.length}</span>{' '}
          Builders Found
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {builders.map((builder, index) => (
          <BuilderCard key={index} {...builder} />
        ))}
      </div>
    </div>
  )
}
