'use client'

import React from 'react'
import { ArrowRightIcon } from 'lucide-react'
import { Button } from '../ui/Button'
export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to List Your Property?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of agents and builders who trust EstateHub to showcase
          their properties to qualified buyers
        </p>
        <Button
          size="lg"
          className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
        >
          List Your Property – Start Now
          <ArrowRightIcon size={20} className="ml-2" />
        </Button>
      </div>
    </section>
  )
}
