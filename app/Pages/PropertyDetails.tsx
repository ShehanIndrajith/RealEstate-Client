'use client'

import React from 'react'
import { Header } from '../components/home/Header'
import { MediaGallery } from '../components/property/MediaGallery'
import { PropertyHeader } from '../components/property/PropertyHeader'
import { QuickFacts } from '../components/property/QuickFacts'
import { PropertyDescription } from '../components/property/PropertyDescription'
import { AmenitiesSection } from '../components/property/AmenitiesSection'
import { LocationMap } from '../components/property/LocationMap'
import { AgentCard } from '../components/property/AgentCard'
import { RentalCalculator } from '../components/property/RentalCalculator'
import { RelatedProperties } from '../components/property/RelatedProperties'
import { properties, getPropertyById } from '../data/properties'

interface PropertyDetailsProps {
  propertyId?: string
}
const PropertyDetails = ({ propertyId }: PropertyDetailsProps) => {
  const property =
    (propertyId ? getPropertyById(propertyId) : undefined) ?? properties[0]
  const propertyImages = property.images
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <MediaGallery images={propertyImages} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <PropertyHeader
                title={property.title}
                price={property.price}
                location={property.location}
                type={property.type}
                propertyId={property.id}
              />
              <QuickFacts
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                type={property.type}
              />
              <PropertyDescription />
              <AmenitiesSection />
              <LocationMap />
            </div>
            {/* Sidebar */}
            <div className="lg:w-96 space-y-6">
              <AgentCard />
              <RentalCalculator />
            </div>
            
          </div>
          <RelatedProperties excludeId={property.id} />
        </div>
      </div>
    </div>
  )
}
export default PropertyDetails
