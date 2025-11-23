'use client'

import React from 'react'
import {
  BedIcon,
  BathIcon,
  MaximizeIcon,
  CarIcon,
  HomeIcon,
  CalendarIcon,
} from 'lucide-react'
interface QuickFactsProps {
  bedrooms: number
  bathrooms: number
  area: string
  parking?: string
  type?: string
  yearBuilt?: string
}
export const QuickFacts = ({
  bedrooms,
  bathrooms,
  area,
  parking = '2 Cars',
  type = 'Villa',
  yearBuilt = '2022',
}: QuickFactsProps) => {
  const facts = [
    {
      icon: BedIcon,
      label: 'Bedrooms',
      value: String(bedrooms),
    },
    {
      icon: BathIcon,
      label: 'Bathrooms',
      value: String(bathrooms),
    },
    {
      icon: MaximizeIcon,
      label: 'Area',
      value: area,
    },
    {
      icon: CarIcon,
      label: 'Parking',
      value: parking,
    },
    {
      icon: HomeIcon,
      label: 'Type',
      value: type,
    },
    {
      icon: CalendarIcon,
      label: 'Year Built',
      value: yearBuilt,
    },
  ]
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Facts</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {facts.map((fact, index) => (
          <div key={index} className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-xl mb-3">
              <fact.icon size={24} className="text-blue-600" />
            </div>
            <div className="text-sm text-gray-600 mb-1">{fact.label}</div>
            <div className="text-lg font-semibold text-gray-900">
              {fact.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
