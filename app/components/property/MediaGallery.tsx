'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
  PlayIcon,
} from 'lucide-react'
interface MediaGalleryProps {
  images: string[]
}
export const MediaGallery = ({ images }: MediaGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }
  return (
    <>
      <div className="relative bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Main Image */}
          <div className="relative h-[500px] lg:h-[600px]">
            <Image
              src={images[currentIndex]}
              alt="Property"
              fill
              className="object-cover cursor-pointer"
              sizes="(min-width: 1024px) 1024px, 100vw"
              onClick={() => setIsLightboxOpen(true)}
              priority
            />
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeftIcon size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRightIcon size={24} />
            </button>
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </div>
            {/* Video Button */}
            <button className="absolute bottom-4 left-4 bg-white/90 hover:bg-white px-4 py-2 rounded-full shadow-lg transition-all flex items-center gap-2">
              <PlayIcon size={18} />
              <span className="text-sm font-medium">Watch Video Tour</span>
            </button>
          </div>
          {/* Thumbnail Strip */}
          <div className="bg-white py-4 px-4 overflow-x-auto">
            <div className="flex gap-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all ${currentIndex === index ? 'border-blue-600 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <XIcon size={24} className="text-white" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
          >
            <ChevronLeftIcon size={32} className="text-white" />
          </button>
          <div className="relative w-[90%] max-w-5xl h-[80vh]">
            <Image
              src={images[currentIndex]}
              alt="Property"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority
            />
          </div>
          <button
            onClick={nextImage}
            className="absolute right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
          >
            <ChevronRightIcon size={32} className="text-white" />
          </button>
          <div className="absolute bottom-4 text-white text-lg font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
