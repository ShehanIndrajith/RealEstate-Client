'use client'

import React from 'react'
import { PropertyCard } from '../home/PropertyCard'
import { properties } from '../../data/properties'
interface RelatedPropertiesProps {
  excludeId?: string
}
export const RelatedProperties = ({ excludeId }: RelatedPropertiesProps) => {
  const related = properties.filter((property) => property.id !== excludeId).slice(0, 4)
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Similar Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {related.map((property) => (
          <PropertyCard
            key={property.id}
            image={property.image}
            price={property.price}
            title={property.title}
            location={property.location}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            area={property.area}
            type={property.type}
            href={`/property/${property.id}`}
          />
        ))}
      </div>
    </div>
  )
}
