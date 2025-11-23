import React from 'react'
import Link from 'next/link'
import { PropertyCard } from './PropertyCard'
import { Button } from '../ui/Button'
import { properties } from '../../data/properties'
export const FeaturedProperties = () => {
  const featured = properties.slice(0, 4)
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties available for
            sale and rent
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((property) => (
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
        <div className="text-center mt-12">
          <Link href="/property-listing">
            <Button size="lg">View All Properties</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
