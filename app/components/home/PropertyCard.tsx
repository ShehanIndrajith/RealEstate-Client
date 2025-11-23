'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  MapPinIcon,
  BedIcon,
  BathIcon,
  MaximizeIcon,
  HeartIcon,
} from 'lucide-react'
import { Button } from '../ui/Button'
interface PropertyCardProps {
  image: string
  price: string
  title: string
  location: string
  bedrooms: number
  bathrooms: number
  area: string
  type: string
  href?: string
}
export const PropertyCard = ({
  image,
  price,
  title,
  location,
  bedrooms,
  bathrooms,
  area,
  type,
  href,
}: PropertyCardProps) => {
  const router = useRouter()
  const handleViewDetails = () => {
    if (href) {
      router.push(href)
    }
  }
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-56 overflow-hidden group">
        <Image
          src={image}
          alt={title}
          width={400}
          height={224}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {type}
          </span>
        </div>
        <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
          <HeartIcon size={18} className="text-gray-700" />
        </button>
      </div>
      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-2xl font-bold text-blue-600 mb-1">{price}</h3>
          <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPinIcon size={14} className="mr-1" />
            <span>{location}</span>
          </div>
        </div>
        {/* Features */}
        <div className="flex items-center justify-between py-3 border-t border-gray-200 mb-4">
          <div className="flex items-center text-gray-600">
            <BedIcon size={18} className="mr-1" />
            <span className="text-sm">{bedrooms} Beds</span>
          </div>
          <div className="flex items-center text-gray-600">
            <BathIcon size={18} className="mr-1" />
            <span className="text-sm">{bathrooms} Baths</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MaximizeIcon size={18} className="mr-1" />
            <span className="text-sm">{area}</span>
          </div>
        </div>
        <Button fullWidth variant="outline" onClick={handleViewDetails} disabled={!href}>
          View Details
        </Button>
      </div>
    </div>
  )
}
