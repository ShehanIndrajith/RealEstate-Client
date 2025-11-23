'use client'

import React from 'react'
import { Header } from '../components/home/Header'
import { ProfileHero } from '../components/agent-profile/ProfileHero'
import { AboutSection } from '../components/agent-profile/AboutSection'
import { AgentProperties } from '../components/agent-profile/AgentProperties'
import { ReviewsSection } from '../components/agent-profile/ReviewsSection'
import { ContactForm } from '../components/agent-profile/ContactForm'
import { AgentSidebar } from '../components/agent-profile/AgentSidebar'

interface AgentProfileProps {
  agentId?: string
}

const AgentProfile = ({ agentId }: AgentProfileProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <ProfileHero agentId={agentId} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1 space-y-8">
              <AboutSection />
              <AgentProperties />
              <ReviewsSection />
            </div>
            {/* Sidebar */}
            <div className="lg:w-96">
              <div className="space-y-6 sticky top-24">
                <ContactForm />
                <AgentSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AgentProfile
