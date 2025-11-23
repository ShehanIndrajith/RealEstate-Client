'use client'

import React from 'react'
import { CheckIcon } from 'lucide-react'
export const PropertyDescription = () => {
  const features = [
    'Spacious open-plan living and dining area',
    'Modern gourmet kitchen with premium appliances',
    'Master bedroom with ensuite and walk-in closet',
    'Private balconies with panoramic ocean views',
    'High-end finishes throughout',
    'Smart home automation system',
    'Energy-efficient design with solar panels',
    'Landscaped garden with outdoor entertainment area',
  ]
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Property Description
      </h2>
      <div className="prose max-w-none text-gray-700 mb-6 leading-relaxed">
        <p className="mb-4">
          Discover luxurious coastal living in this stunning modern villa,
          perfectly positioned to capture breathtaking ocean views. This
          architectural masterpiece seamlessly blends contemporary design with
          comfort, featuring expansive living spaces flooded with natural light.
        </p>
        <p className="mb-4">
          The property boasts premium finishes throughout, including imported
          Italian marble flooring, custom cabinetry, and state-of-the-art
          appliances. The open-concept layout creates an ideal environment for
          both entertaining and everyday living.
        </p>
        <p>
          Located in one of Colombo&rsquo;s most prestigious neighborhoods, this home
          offers privacy, security, and easy access to international schools,
          shopping centers, and fine dining establishments.
        </p>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
              <CheckIcon size={14} className="text-blue-600" />
            </div>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
