"use client"

import React from "react"
import {
  CheckCircleIcon,
  MapPinIcon,
  CalendarIcon,
  BuildingIcon,
  TrendingUpIcon,
  StarIcon,
  DownloadIcon,
  ExternalLinkIcon,
  PhoneIcon,
} from "lucide-react"
import { Button } from "../ui/Button"

export const BuilderHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Builder Logo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl bg-white p-4 shadow-2xl border-4 border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=300&auto=format&fit=crop"
                  alt="Skyline Developers"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-blue-600 rounded-full p-3 shadow-xl border-4 border-slate-900">
                <CheckCircleIcon size={24} className="text-white" />
              </div>
            </div>
          </div>

          {/* Builder Info */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl lg:text-5xl font-bold text-white">
                    Skyline Developers
                  </h1>
                  <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    Verified Builder
                  </span>
                </div>

                <p className="text-xl text-blue-200 mb-4">
                  Leading Residential & Commercial Developer
                </p>

                <div className="flex flex-wrap gap-4 text-white/90">
                  <div className="flex items-center gap-2">
                    <MapPinIcon size={18} className="text-blue-400" />
                    <span>Colombo, Sri Lanka</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon size={18} className="text-blue-400" />
                    <span>Established 2008</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <BuildingIcon size={20} className="text-blue-400" />
                  <p className="text-3xl font-bold text-white">24</p>
                </div>
                <p className="text-sm text-blue-200">Total Projects</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUpIcon size={20} className="text-green-400" />
                  <p className="text-3xl font-bold text-white">6</p>
                </div>
                <p className="text-sm text-blue-200">Ongoing</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircleIcon size={20} className="text-blue-400" />
                  <p className="text-3xl font-bold text-white">18</p>
                </div>
                <p className="text-sm text-blue-200">Completed</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <StarIcon
                    size={20}
                    className="text-amber-400 fill-amber-400"
                  />
                  <p className="text-3xl font-bold text-white">4.8</p>
                </div>
                <p className="text-sm text-blue-200">Avg. Rating</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl">
                <PhoneIcon size={18} className="mr-2" />
                Contact Builder
              </Button>

              <Button className="bg-white text-slate-900 hover:bg-gray-100 shadow-xl">
                <DownloadIcon size={18} className="mr-2" />
                Download Brochure
              </Button>

              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
              >
                <ExternalLinkIcon size={18} className="mr-2" />
                Visit Website
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
