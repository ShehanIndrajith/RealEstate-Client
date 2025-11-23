'use client'

import React from 'react'
import {
  BriefcaseIcon,
  MapPinIcon,
  AwardIcon,
  TrendingUpIcon,
  CheckCircleIcon,
} from 'lucide-react'
export const AboutSection = () => {
  const specialties = [
    'Luxury Residential Properties',
    'Commercial Real Estate',
    'Property Investment Consulting',
    'New Development Projects',
  ]
  const certifications = [
    'Licensed Real Estate Agent',
    'Certified Property Consultant',
    'Real Estate Investment Advisor',
  ]
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">About John</h2>
      {/* Bio */}
      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed mb-4">
          With over 12 years of experience in the real estate industry, I
          specialize in helping clients find their dream properties and make
          smart investment decisions. My commitment to excellence and
          personalized service has earned me a reputation as one of the most
          trusted agents in Colombo.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Whether you are buying your first home, looking for a luxury property,
          or seeking investment opportunities, I am here to guide you through
          every step of the process with professionalism and integrity.
        </p>
      </div>
      {/* Experience & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
            <BriefcaseIcon size={24} className="text-white" />
          </div>
          <p className="text-3xl font-bold text-blue-600 mb-1">12+</p>
          <p className="text-gray-600 text-sm">Years Experience</p>
        </div>
        <div className="bg-green-50 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
            <TrendingUpIcon size={24} className="text-white" />
          </div>
          <p className="text-3xl font-bold text-green-600 mb-1">200+</p>
          <p className="text-gray-600 text-sm">Properties Sold</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
            <AwardIcon size={24} className="text-white" />
          </div>
          <p className="text-3xl font-bold text-purple-600 mb-1">Top 5%</p>
          <p className="text-gray-600 text-sm">National Ranking</p>
        </div>
      </div>
      {/* Specialties */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MapPinIcon size={20} className="text-blue-600" />
          Areas of Expertise
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-50 rounded-lg p-4"
            >
              <CheckCircleIcon
                size={20}
                className="text-blue-600 flex-shrink-0"
              />
              <span className="text-gray-700 font-medium">{specialty}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Certifications */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <AwardIcon size={20} className="text-blue-600" />
          Certifications & Licenses
        </h3>
        <div className="space-y-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-700 font-medium"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              {cert}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
