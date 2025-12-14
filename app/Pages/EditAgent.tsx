"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeftIcon, AlertCircleIcon } from "lucide-react"

import { LoggedInHeader } from "../components/home/LoggedInHeader"
import { EditAgentForm } from "../components/agent-management/EditAgentForm"
import { AgentPreviewCard } from "../components/agent-management/AgentPreviewCard"
import { DeleteAgentModal } from "../components/agent-management/DeleteAgentModal"

export interface AgentFormData {
  agentId?: string
  name: string
  email: string
  phone: string
  whatsapp: string
  bio: string
  location: string
  experience: string | number
  specializations: string[]
  rating: number
  isVerified: boolean
  profilePhoto: string
  featuredProperties: string[]
}

const EditAgentPage = () => {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const [previewData, setPreviewData] = useState<AgentFormData>({
    agentId: "",
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    bio: "",
    location: "",
    experience: "",
    specializations: [],
    rating: 0,
    isVerified: false,
    profilePhoto: "",
    featuredProperties: [],
  })

  useEffect(() => {
    const token = sessionStorage.getItem("token")

    if (!token) {
      router.replace("/login")
      return
    }

    const fetchAgent = async () => {
      try {
        const res = await fetch(
          "https://localhost:5001/api/users/me/details",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        if (res.status === 401) {
          sessionStorage.clear()
          router.replace("/login")
          return
        }

        if (!res.ok) {
          throw new Error("Failed to fetch agent details")
        }

        const data = await res.json()

        setPreviewData({
          agentId: data.userID.toString(),
          name: data.fullName,
          email: data.email,
          phone: data.phoneNumber,
          whatsapp: data.whatsAppNumber ?? "",
          bio: data.agent?.bio ?? "",
          location: data.agent?.location ?? "",
          experience: data.agent?.experienceYears ?? "",
          specializations:
            data.agent?.expertise?.map((e: any) => e.name) ?? [],
          rating: data.agent?.stats?.avgRating ?? 0,
          isVerified: true,
          profilePhoto: data.profilePictureURL,
          featuredProperties: [],
        })
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchAgent()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading agent details...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <LoggedInHeader />

      <div className="pt-20 max-w-7xl mx-auto px-4 py-12">

        {/* Edit Banner */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <AlertCircleIcon size={20} className="text-white" />
          </div>
          <div>
            <p className="font-semibold text-blue-900">
              Editing Agent: {previewData.name}
            </p>
            <p className="text-sm text-blue-700">
              Make changes and save to update profile
            </p>
          </div>
        </div>

        <Link
          href="/agents"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeftIcon size={20} />
          Back to Agents
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <EditAgentForm
              previewData={previewData}
              onDataChange={setPreviewData}
              onDelete={() => setShowDeleteModal(true)}
            />
          </div>

          <div className="lg:col-span-1 sticky top-24">
            <AgentPreviewCard data={previewData} />
          </div>
        </div>
      </div>

      <DeleteAgentModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        agentData={{
          name: previewData.name,
          photo: previewData.profilePhoto,
        }}
      />
    </div>
  )
}

export default EditAgentPage
