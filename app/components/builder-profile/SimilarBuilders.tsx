"use client";

import Image from "next/image";
import {
  MapPinIcon,
  StarIcon,
  CheckCircleIcon,
  BuildingIcon,
  ChevronRightIcon,
} from "lucide-react";
import { Button } from "../ui/Button";

export const SimilarBuilders = () => {
  const builders = [
    {
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=300&auto=format&fit=crop",
      name: "Urban Estates Ltd",
      verified: true,
      location: "Galle, Sri Lanka",
      rating: 4.6,
      reviewCount: 98,
      projectCount: 18,
      description: "Pioneering sustainable urban development",
    },
    {
      logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=300&auto=format&fit=crop",
      name: "Prime Properties Group",
      verified: true,
      location: "Kandy, Sri Lanka",
      rating: 4.9,
      reviewCount: 203,
      projectCount: 31,
      description: "Award-winning premium residential communities",
    },
    {
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=300&auto=format&fit=crop",
      name: "Metro Construction Co.",
      verified: true,
      location: "Mount Lavinia",
      rating: 4.7,
      reviewCount: 142,
      projectCount: 22,
      description: "Innovative commercial and residential developments",
    },
    {
      logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=300&auto=format&fit=crop",
      name: "Coastal Developments",
      verified: true,
      location: "Galle, Sri Lanka",
      rating: 4.8,
      reviewCount: 89,
      projectCount: 15,
      description: "Beachfront luxury properties and resort living",
    },
  ];

  return (
    <div className="mt-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Similar Trusted Builders
        </h2>
        <p className="text-gray-600">
          Explore other verified builders with excellent track records
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {builders.map((builder, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Builder Header */}
            <div className="p-5 border-b border-gray-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="relative w-14 h-14 flex-shrink-0">
                  <Image
                    src={builder.logo}
                    alt={builder.name}
                    fill
                    className="rounded-lg border-2 border-gray-200 object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 mb-1">
                    <h3 className="font-bold text-gray-900 text-sm truncate">
                      {builder.name}
                    </h3>
                    {builder.verified && (
                      <CheckCircleIcon
                        size={14}
                        className="text-blue-600 flex-shrink-0"
                      />
                    )}
                  </div>

                  <div className="flex items-center text-gray-600 text-xs mb-2">
                    <MapPinIcon size={12} className="mr-1" />
                    <span className="truncate">{builder.location}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <StarIcon size={14} className="text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold text-gray-900">
                      {builder.rating}
                    </span>
                    <span className="text-xs text-gray-600">
                      ({builder.reviewCount})
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                {builder.description}
              </p>
            </div>

            {/* Stats */}
            <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center justify-center gap-2">
                <BuildingIcon size={16} className="text-blue-600" />
                <span className="text-sm font-semibold text-gray-900">
                  {builder.projectCount} Projects
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="p-4">
              <Button fullWidth size="sm" variant="outline">
                View Profile
                <ChevronRightIcon size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
