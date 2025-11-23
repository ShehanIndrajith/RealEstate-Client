'use client'

import React from 'react'
import Image from 'next/image'
import {
  PhoneIcon,
  MailIcon,
  MessageCircleIcon,
  CheckCircleIcon,
  StarIcon,
} from 'lucide-react'
import { Button } from '../ui/Button'
export const AgentCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 top-24">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Agent</h3>
      <div className="flex items-center gap-4 mb-6">
        <Image
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop"
          alt="Agent"
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-gray-900">John Anderson</h4>
            <CheckCircleIcon size={16} className="text-blue-600" />
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <StarIcon size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="font-medium">4.9</span>
            <span>(127 reviews)</span>
          </div>
        </div>
      </div>
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-gray-700">
          <PhoneIcon size={18} className="text-blue-600" />
          <span>+94 77 123 4567</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <MailIcon size={18} className="text-blue-600" />
          <span>john@estatehub.com</span>
        </div>
      </div>
      <div className="space-y-3">
        <Button fullWidth>
          <PhoneIcon size={18} className="mr-2" />
          Call Now
        </Button>
        <Button fullWidth variant="outline">
          <MessageCircleIcon size={18} className="mr-2" />
          WhatsApp
        </Button>
        <Button fullWidth variant="outline">
          <MailIcon size={18} className="mr-2" />
          Send Email
        </Button>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          Available Mon-Sat, 9:00 AM - 6:00 PM
        </p>
      </div>
    </div>
  )
}
