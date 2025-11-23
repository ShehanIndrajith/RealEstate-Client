'use client'

import React from 'react'
import { Header } from '../components/home/Header'
import { Hero } from '../components/home/Hero'
import { FeaturedProperties } from '../components/home/FeaturedProperties'
import { PlatformHighlights } from '../components/home/PlatformHighlights'
import { TopAgents } from '../components/home/TopAgents'
import { ExploreLocations } from '../components/home/ExploreLocations'
import { CTASection } from '../components/home/CTASection'
import { Footer } from '../components/home/Footer'
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedProperties />
      <PlatformHighlights />
      <TopAgents />
      <ExploreLocations />
      <CTASection />
      <Footer />
    </div>
  )
}
export default Home
