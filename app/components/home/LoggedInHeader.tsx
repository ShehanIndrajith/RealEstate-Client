'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  BuildingIcon,
  MenuIcon,
  XIcon,
  BellIcon,
  UserIcon,
  SettingsIcon,
  LogOutIcon,
  LayoutDashboardIcon,
  HeartIcon,
  ChevronDownIcon,
} from 'lucide-react'
import { Button } from '../ui/Button'

export const LoggedInHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [notificationCount, setNotificationCount] = useState(3)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  const handleLogout = () => {
    try {
      sessionStorage.clear()
      localStorage.clear()
      setUser(null)
      setIsUserMenuOpen(false)
      setIsMobileMenuOpen(false)
      router.push('/views/login')
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fetch current user from /me API
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = sessionStorage.getItem('token')
        if (!token) return

        const res = await fetch('https://localhost:5001/api/users/me', {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        })
        if (!res.ok) return

        const data = await res.json()
        setUser(data)
      } catch (err) {
        console.error('Failed to fetch user:', err)
      }
    }

    fetchCurrentUser()
  }, [])

  const navLinks = ['Home', 'Buy', 'Rent', 'Projects', 'Agents', 'Contact']

  const userMenuItems = [
    { icon: <LayoutDashboardIcon size={18} />, label: 'Dashboard', href: '/dashboard' },
    { icon: <UserIcon size={18} />, label: 'My Profile', href: '/views/me/editprofile' },
    { icon: <HeartIcon size={18} />, label: 'Saved Properties', href: '/saved' },
    { icon: <SettingsIcon size={18} />, label: 'Settings', href: '/settings' },
  ]

  const profileImage = user?.profilePictureURL || 'https://via.placeholder.com/150'
  const fullName = user?.fullName || 'Loading...'
  const email = user?.email || ''

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2.5 rounded-xl shadow-lg">
              <BuildingIcon size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              EstateHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button size="sm">List Your Property</Button>
            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors">
              <BellIcon size={20} />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 p-2 pr-3 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <img
                  src={profileImage}
                  alt={fullName}
                  className="w-9 h-9 rounded-full object-cover border-2 border-blue-100"
                />
                <span className="text-sm font-semibold text-gray-900">{fullName}</span>
                <ChevronDownIcon
                  size={16}
                  className={`text-gray-600 transition-transform duration-200 ${
                    isUserMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isUserMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsUserMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* User Info */}
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-gray-200">
                      <div className="flex items-center gap-3 mb-2">
                        <img
                          src={profileImage}
                          alt={fullName}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                        />
                        <div>
                          <p className="font-bold text-gray-900">{fullName}</p>
                          <p className="text-sm text-gray-600">{email}</p>
                        </div>
                      </div>
                    </div>
                    {/* Menu Items */}
                    <div className="py-2">
                      {userMenuItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <div className="text-gray-600">{item.icon}</div>
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                    {/* Logout */}
                    <div className="border-t border-gray-200">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOutIcon size={18} />
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <XIcon size={24} className="text-gray-700" />
            ) : (
              <MenuIcon size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {/* User Info - Mobile */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl mb-4">
              <img
                src={profileImage}
                alt={fullName}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
              />
              <div>
                <p className="font-bold text-gray-900">{fullName}</p>
                <p className="text-sm text-gray-600">{email}</p>
              </div>
            </div>
            {/* Navigation Links */}
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-gray-700 font-medium hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            {/* User Menu Items - Mobile */}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              {userMenuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-700 font-medium hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
              {/* Notifications - Mobile */}
              <button className="flex items-center gap-3 text-gray-700 font-medium hover:text-blue-600 w-full">
                <BellIcon size={18} />
                <span>Notifications</span>
                {notificationCount > 0 && (
                  <span className="ml-auto w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </button>
              <Button fullWidth size="sm">
                List Your Property
              </Button>
              {/* Logout - Mobile */}
              <button onClick={handleLogout} className="flex items-center gap-3 text-red-600 font-medium hover:text-red-700 w-full pt-3 border-t border-gray-200">
                <LogOutIcon size={18} />
                <span>Logout</span>
              </button>
              
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
