'use client'

import React from 'react'
import Image from 'next/image'
import { StarIcon, ThumbsUpIcon } from 'lucide-react'
import { Button } from '../ui/Button'
export const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Sarah Mitchell',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop',
      rating: 5,
      date: '2 weeks ago',
      comment:
        'John was absolutely fantastic! He helped us find our dream home and made the entire process smooth and stress-free. His knowledge of the market and attention to detail is outstanding.',
      helpful: 12,
    },
    {
      name: 'Michael Roberts',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop',
      rating: 5,
      date: '1 month ago',
      comment:
        'Highly professional and responsive. John went above and beyond to ensure we got the best deal on our investment property. Would definitely recommend!',
      helpful: 8,
    },
    {
      name: 'Emily Chen',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
      rating: 4,
      date: '1 month ago',
      comment:
        'Great experience working with John. He was patient with all our questions and showed us multiple properties until we found the perfect one.',
      helpful: 5,
    },
    {
      name: 'David Kumar',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop',
      rating: 5,
      date: '2 months ago',
      comment:
        'John is the best agent I have worked with. His expertise in luxury properties and negotiation skills helped us secure an amazing deal.',
      helpful: 15,
    },
  ]
  const ratingBreakdown = [
    {
      stars: 5,
      count: 98,
      percentage: 77,
    },
    {
      stars: 4,
      count: 22,
      percentage: 17,
    },
    {
      stars: 3,
      count: 5,
      percentage: 4,
    },
    {
      stars: 2,
      count: 2,
      percentage: 2,
    },
    {
      stars: 1,
      count: 0,
      percentage: 0,
    },
  ]
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Ratings & Reviews
      </h2>
      {/* Overall Rating */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-gray-200">
        {/* Left: Average Rating */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-6xl font-bold text-gray-900">4.9</span>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">127 reviews</p>
            </div>
          </div>
        </div>
        {/* Right: Rating Breakdown */}
        <div className="space-y-2">
          {ratingBreakdown.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-3">
              <div className="flex items-center gap-1 w-16">
                <span className="text-sm font-medium text-gray-700">
                  {rating.stars}
                </span>
                <StarIcon
                  size={14}
                  className="text-yellow-400 fill-yellow-400"
                />
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full"
                  style={{
                    width: `${rating.percentage}%`,
                  }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-12">{rating.count}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Reviews List */}
      <div className="space-y-6 mb-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start gap-4 mb-4">
              <Image
                src={review.image}
                alt={review.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      size={16}
                      className={
                        i < review.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  {review.comment}
                </p>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <ThumbsUpIcon size={16} />
                  <span>Helpful ({review.helpful})</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Add Review Button */}
      <div className="text-center">
        <Button variant="outline">Write a Review</Button>
      </div>
    </div>
  )
}
