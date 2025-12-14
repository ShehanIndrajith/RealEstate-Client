'use client'

import React, { useEffect, useState } from 'react'
import { Header } from '../components/home/Header'
import { LoggedInHeader } from '../components/home/LoggedInHeader'
import { Hero } from '../components/home/Hero'
import { FeaturedProperties } from '../components/home/FeaturedProperties'
import { PlatformHighlights } from '../components/home/PlatformHighlights'
import { TopAgents } from '../components/home/TopAgents'
import { ExploreLocations } from '../components/home/ExploreLocations'
import { CTASection } from '../components/home/CTASection'
import { Footer } from '../components/home/Footer'

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check if token exists in sessionStorage
    const token = sessionStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {isLoggedIn ? <LoggedInHeader /> : <Header />}
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
