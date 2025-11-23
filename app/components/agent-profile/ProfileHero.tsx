'use client'

import React from 'react'
import Image from 'next/image'
import {
  CheckCircleIcon,
  StarIcon,
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  MessageCircleIcon,
  AwardIcon,
} from 'lucide-react'
import { Button } from '../ui/Button'

interface ProfileHeroProps {
  agentId?: string
}

export const ProfileHero = ({ agentId }: ProfileHeroProps) => {
  // agentId will be used to fetch agent data in the future
  void agentId
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop"
              alt="Agent"
              width={160}
              height={160}
              className="w-40 h-40 rounded-full object-cover border-8 border-white/20 shadow-2xl"
            />
            <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-3 shadow-xl border-4 border-white">
              <CheckCircleIcon size={24} className="text-white" />
            </div>
          </div>
          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold text-white">John Anderson</h1>
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-sm font-medium">
                <AwardIcon size={16} />
                Verified Agent
              </span>
            </div>
            <p className="text-xl text-white/90 mb-6">
              Senior Real Estate Agent & Property Consultant
            </p>
            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6">
              <div className="flex items-center gap-2 text-white">
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <StarIcon
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                  <span className="font-bold text-lg">4.9</span>
                  <span className="text-white/80 text-sm">(127 reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                <HomeIcon size={18} />
                <span className="font-semibold">47 Properties</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                <MapPinIcon size={18} />
                <span className="font-semibold">Colombo 7, Sri Lanka</span>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
                <PhoneIcon size={18} className="mr-2" />
                Call Now
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white shadow-lg">
                <MessageCircleIcon size={18} className="mr-2" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              >
                <MailIcon size={18} className="mr-2" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
