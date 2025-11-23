"use client";

import Image from "next/image";
import {
  StarIcon,
  MapPinIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  PhoneIcon,
  MailIcon,
} from "lucide-react";
import React from "react";

interface AgentPreviewCardProps {
  data: {
    name?: string;
    email?: string;
    phone?: string;
    bio?: string;
    location?: string;
    experience?: string;
    specializations?: string[];
    rating?: number;
    verified?: boolean;
    profilePhoto?: string;
    featuredProperties?: string[];
  };
}

export const AgentPreviewCard = ({ data }: AgentPreviewCardProps) => {
  const {
    name,
    email,
    phone,
    bio,
    location,
    experience,
    specializations = [],
    rating = 0,
    verified = false,
    profilePhoto,
    featuredProperties = [],
  } = data;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
        <p className="text-white/90 text-sm font-medium">Live Preview</p>
      </div>

      {/* Profile Section */}
      <div className="p-6 text-center border-b border-gray-200">
        <div className="relative inline-block mb-4">
          {profilePhoto ? (
            <Image
              src={profilePhoto}
              alt={name || "Agent"}
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-50"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-4 border-blue-50" />
          )}

          {verified && (
            <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1.5 shadow-lg">
              <CheckCircleIcon size={16} className="text-white" />
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {name || "Agent Name"}
        </h3>

        <p className="text-blue-600 font-medium text-sm mb-4">
          Real Estate Agent
        </p>

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
              <StarIcon size={16} className="text-amber-400 fill-amber-400" />
              <span className="font-semibold text-gray-900">
                {rating.toFixed(1)}
              </span>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="space-y-2 mb-4">
          {location && (
            <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
              <MapPinIcon size={14} className="text-blue-600" />
              <span>{location}</span>
            </div>
          )}

          {experience && (
            <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
              <BriefcaseIcon size={14} className="text-blue-600" />
              <span>{experience} years experience</span>
            </div>
          )}
        </div>

        {/* Specializations */}
        {specializations.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {specializations.map((spec, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {spec}
              </span>
            ))}
          </div>
        )}

        {/* Bio */}
        {bio && (
          <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
        )}
      </div>

      {/* Contact Info */}
      {(email || phone) && (
        <div className="p-6 bg-gray-50 space-y-3">
          {email && (
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <MailIcon size={16} className="text-blue-600" />
              </div>
              <span className="text-gray-700">{email}</span>
            </div>
          )}

          {phone && (
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <PhoneIcon size={16} className="text-green-600" />
              </div>
              <span className="text-gray-700">{phone}</span>
            </div>
          )}
        </div>
      )}

      {/* Featured Properties */}
      {featuredProperties.length > 0 &&
        featuredProperties.some((p) => p) && (
          <div className="p-6 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Featured Properties
            </h4>

            <div className="grid grid-cols-2 gap-3">
              {featuredProperties
                .filter(Boolean)
                .slice(0, 4)
                .map((property, index) => (
                  <Image
                    key={index}
                    src={property}
                    alt={`Property ${index + 1}`}
                    width={200}
                    height={100}
                    className="w-full h-24 rounded-lg object-cover border border-gray-200"
                  />
                ))}
            </div>
          </div>
        )}
    </div>
  );
};
