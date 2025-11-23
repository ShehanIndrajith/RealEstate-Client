'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { BuildingIcon, MenuIcon, XIcon } from 'lucide-react'
import { Button } from '../ui/Button'
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navLinks = [
    { label: 'Home', href: '#home', type: 'anchor' },
    { label: 'Buy', href: '#buy', type: 'anchor' },
    { label: 'Rent', href: '#rent', type: 'anchor' },
    { label: 'Builders',href:'/builders', type: 'anchor' },
    { label: 'Agents', href: '/agents', type: 'route' },
    { label: 'Contact', href: '#contact', type: 'anchor' },
  ]
  return (
    <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md shadow-sm'}`}
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
            {navLinks.map((link) =>
              link.type === 'route' ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="outline" size="sm">
                Register
              </Button>
            </Link>
            <Button size="sm">List Your Property</Button>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <XIcon
                size={24}
                className={isScrolled ? 'text-gray-700' : 'text-white'}
              />
            ) : (
              <MenuIcon
                size={24}
                className={isScrolled ? 'text-gray-700' : 'text-white'}
              />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) =>
              link.type === 'route' ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-gray-700 font-medium hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-700 font-medium hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ),
            )}
            <div className="pt-4 space-y-3 border-t">
              <Link href="/login" className="block">
                <Button variant="outline" fullWidth size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/register" className="block">
                <Button variant="outline" fullWidth size="sm">
                  Register
                </Button>
              </Link>
              <Button fullWidth size="sm">
                List Your Property
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
