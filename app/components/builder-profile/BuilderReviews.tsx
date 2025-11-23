"use client"

import Image from "next/image"
import { StarIcon, ThumbsUpIcon, CheckCircleIcon } from "lucide-react"
import { Button } from "../ui/Button"

export const BuilderReviews = () => {
  const reviews = [
    {
      name: "Rajesh Kumar",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop",
      rating: 5,
      date: "2 weeks ago",
      project: "Marina Residences",
      comment:
        "Outstanding quality and attention to detail. The construction quality exceeded our expectations. Skyline Developers delivered exactly what they promised, and the after-sales service has been exceptional.",
      verified: true,
      helpful: 24,
    },
    {
      name: "Priya Fernando",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop",
      rating: 5,
      date: "1 month ago",
      project: "Skyline Towers",
      comment:
        "We purchased our dream apartment from Skyline Developers and the entire experience was smooth and professional. The team was responsive, transparent, and delivered on time. Highly recommend!",
      verified: true,
      helpful: 18,
    },
    {
      name: "Michael Perera",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop",
      rating: 4,
      date: "2 months ago",
      project: "Ocean View Villas",
      comment:
        "Great builder with excellent project management. The villa construction quality is top-notch. Minor delays during monsoon season but overall very satisfied with our investment.",
      verified: true,
      helpful: 12,
    },
  ]

  const ratingBreakdown = [
    { stars: 5, count: 142, percentage: 78 },
    { stars: 4, count: 28, percentage: 15 },
    { stars: 3, count: 8, percentage: 4 },
    { stars: 2, count: 4, percentage: 2 },
    { stars: 1, count: 2, percentage: 1 },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Ratings & Reviews
        </h2>

        {/* Overall Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-gray-200">
          {/* Left: Average Rating */}
          <div className="text-center md:text-left">
            <div className="inline-flex flex-col items-center md:items-start gap-4">
              <div className="flex items-end gap-3">
                <span className="text-7xl font-bold text-gray-900">4.8</span>
                <span className="text-gray-500 text-xl mb-2">/ 5</span>
              </div>

              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      size={24}
                      className={
                        star <= 4
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-gray-600">Based on 184 reviews</p>
              </div>
            </div>
          </div>

          {/* Right: Rating Breakdown */}
          <div className="space-y-3">
            {ratingBreakdown.map((rating) => (
              <div key={rating.stars} className="flex items-center gap-4">
                <div className="flex items-center gap-2 w-20">
                  <span className="text-sm font-semibold text-gray-700">
                    {rating.stars}
                  </span>
                  <StarIcon
                    size={16}
                    className="text-amber-400 fill-amber-400"
                  />
                </div>

                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-amber-400 to-amber-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${rating.percentage}%` }}
                  />
                </div>

                <span className="text-sm text-gray-600 w-16 text-right">
                  {rating.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6 mb-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={56}
                  height={56}
                  unoptimized
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                />

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-gray-900">
                          {review.name}
                        </h4>
                        {review.verified && (
                          <CheckCircleIcon size={16} className="text-green-600" />
                        )}
                      </div>

                      <p className="text-sm text-gray-600">
                        Purchased: {review.project}
                      </p>
                    </div>

                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        size={18}
                        className={
                          i < review.rating
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
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

        {/* Write Review CTA */}
        <div className="text-center pt-6 border-t border-gray-200">
          <Button variant="outline" size="lg">
            Write a Review
          </Button>
        </div>
      </div>
    </div>
  )
}
