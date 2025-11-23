'use client'

import React from 'react'
import { MapPinIcon, ShareIcon, HeartIcon, CheckCircleIcon } from 'lucide-react'
interface PropertyHeaderProps {
  title: string
  price: string
  location: string
  type?: string
  propertyId?: string
}
export const PropertyHeader = ({
  title,
  price,
  location,
  type = 'For Sale',
  propertyId,
}: PropertyHeaderProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {type}
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <CheckCircleIcon size={14} />
              Verified
            </span>
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
              Hot Property
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
              New
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">{title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPinIcon size={18} className="mr-2 text-blue-600" />
            <span className="text-lg">{location}</span>
          </div>
          {propertyId && (
            <p className="text-sm text-gray-500">Property ID: {propertyId}</p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
            <ShareIcon size={20} className="text-gray-700" />
          </button>
          <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
            <HeartIcon size={20} className="text-gray-700" />
          </button>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <div className="text-4xl font-bold text-blue-600">{price}</div>
        <p className="text-gray-600 mt-1">$2,656 per sq ft</p>
      </div>
    </div>
  )
}
