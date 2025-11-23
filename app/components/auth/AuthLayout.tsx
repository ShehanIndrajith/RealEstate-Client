'use client'

import React from 'react'
import { BuildingIcon } from 'lucide-react'
interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
  illustration?: boolean
}
export const AuthLayout = ({
  children,
  title,
  subtitle,
  illustration = true,
}: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col md:flex-row">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 lg:p-16">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-xl shadow-lg">
              <BuildingIcon size={28} className="text-white" />
            </div>
            <h1 className="ml-3 text-2xl font-bold text-gray-800">EstateHub</h1>
          </div>
          {/* Title and Subtitle */}
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
          </div>
          {/* Content */}
          {children}
        </div>
      </div>
      {/* Right side - Illustration */}
      {illustration && (
        <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 L100,0 L100,100 L0,100 Z"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              ></path>
              <path
                d="M0,0 L100,100 M100,0 L0,100"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              ></path>
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              ></circle>
            </svg>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
            <div className="mb-8">
              <svg
                className="w-32 h-32"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56 29.3333H52V13.3333C52 12.6 51.4 12 50.6667 12H34.6667C34 12 33.3333 12.6 33.3333 13.3333V29.3333H30.6667V21.3333C30.6667 20.6 30.0667 20 29.3333 20H13.3333C12.6 20 12 20.6 12 21.3333V29.3333H8C7.26667 29.3333 6.66667 29.9333 6.66667 30.6667V52C6.66667 52.7333 7.26667 53.3333 8 53.3333H56C56.7333 53.3333 57.3333 52.7333 57.3333 52V30.6667C57.3333 29.9333 56.7333 29.3333 56 29.3333ZM36 14.6667H48V29.3333H36V14.6667ZM14.6667 22.6667H28V29.3333H14.6667V22.6667ZM54.6667 50.6667H9.33333V32H54.6667V50.6667Z"
                  fill="white"
                />
                <path
                  d="M22.6667 36H17.3333C16.6 36 16 36.6 16 37.3333V42.6667C16 43.4 16.6 44 17.3333 44H22.6667C23.4 44 24 43.4 24 42.6667V37.3333C24 36.6 23.4 36 22.6667 36Z"
                  fill="white"
                />
                <path
                  d="M34.6667 36H29.3333C28.6 36 28 36.6 28 37.3333V42.6667C28 43.4 28.6 44 29.3333 44H34.6667C35.4 44 36 43.4 36 42.6667V37.3333C36 36.6 35.4 36 34.6667 36Z"
                  fill="white"
                />
                <path
                  d="M46.6667 36H41.3333C40.6 36 40 36.6 40 37.3333V42.6667C40 43.4 40.6 44 41.3333 44H46.6667C47.4 44 48 43.4 48 42.6667V37.3333C48 36.6 47.4 36 46.6667 36Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-center">
              Premium Real Estate Platform
            </h2>
            <p className="text-lg text-center max-w-md opacity-90">
              Connect with top agents and builders to find your perfect property
              or showcase your listings.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
