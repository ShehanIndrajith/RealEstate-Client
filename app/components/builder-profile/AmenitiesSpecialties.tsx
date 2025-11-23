"use client"

import React from "react"
import {
  HomeIcon,
  TrendingUpIcon,
  LeafIcon,
  ClockIcon,
  HeadphonesIcon,
  ShieldCheckIcon,
} from "lucide-react"

export const AmenitiesSpecialties = () => {
  const specialties = [
    {
      icon: HomeIcon,
      title: "High-Quality Construction",
      description: "Premium materials and expert craftsmanship",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUpIcon,
      title: "Modern Architecture",
      description: "Contemporary designs by renowned architects",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: LeafIcon,
      title: "Green Building",
      description: "Eco-friendly and sustainable practices",
      color: "from-green-500 to-green-600",
    },
    {
      icon: ClockIcon,
      title: "Timely Delivery",
      description: "100% on-time project completion record",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support",
      description: "Dedicated post-sale assistance",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: ShieldCheckIcon,
      title: "Quality Assurance",
      description: "Comprehensive warranty and guarantees",
      color: "from-indigo-500 to-indigo-600",
    },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Our Specialties
        </h2>
        <p className="text-gray-600 mb-8">
          What makes Skyline Developers stand out in the industry
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${specialty.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <specialty.icon size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {specialty.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
