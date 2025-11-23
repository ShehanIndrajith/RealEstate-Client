"use client"

import React from "react"
import {
  AwardIcon,
  MapIcon,
  UsersIcon,
  TrophyIcon,
  CheckCircleIcon,
} from "lucide-react"

export const AboutBuilder = () => {
  const certifications = [
    {
      icon: TrophyIcon,
      label: "ISO 9001:2015 Certified",
    },
    {
      icon: AwardIcon,
      label: "Green Building Council Member",
    },
    {
      icon: CheckCircleIcon,
      label: "National Housing Authority Approved",
    },
    {
      icon: TrophyIcon,
      label: "Best Developer Award 2023",
    },
  ]

  const regions = [
    "Colombo",
    "Galle",
    "Kandy",
    "Negombo",
    "Mount Lavinia",
    "Dehiwala",
  ]

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          About Skyline Developers
        </h2>

        {/* Company Description */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Skyline Developers is a premier real estate development company with
            over 15 years of excellence in creating landmark residential and
            commercial properties across Sri Lanka. Our commitment to quality,
            innovation, and customer satisfaction has made us one of the most
            trusted names in the industry.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We specialize in luxury residential complexes, commercial spaces,
            and mixed-use developments that combine modern architecture with
            sustainable building practices. Every project is crafted with
            meticulous attention to detail, ensuring the highest standards of
            construction and design.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With a portfolio of 24 completed and ongoing projects, we have
            successfully delivered over 2,000 residential units and 500,000 sq.
            ft. of commercial space, creating vibrant communities and thriving
            business environments.
          </p>
        </div>

        {/* Leadership */}
        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <UsersIcon size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Leadership & Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Led by industry veterans with over 40 years of combined
                experience, our leadership team brings unparalleled expertise in
                real estate development, architecture, and project management.
                Our vision is to create sustainable, world-class properties that
                enhance the quality of life for our customers.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AwardIcon size={24} className="text-amber-600" />
            Certifications & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gradient-to-r from-amber-50 to-blue-50 rounded-xl p-4 border border-amber-200"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <cert.icon size={24} className="text-amber-600" />
                </div>
                <span className="font-semibold text-gray-900">
                  {cert.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Regions */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapIcon size={24} className="text-blue-600" />
            Operating Regions
          </h3>
          <div className="flex flex-wrap gap-3">
            {regions.map((region, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200"
              >
                {region}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
