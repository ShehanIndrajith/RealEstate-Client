"use client";

import Image from "next/image";
import {
  DownloadIcon,
  FileTextIcon,
  ImageIcon,
  VideoIcon,
  LayoutIcon,
} from "lucide-react";
import { Button } from "../ui/Button";

export const ProjectMedia = () => {
  const brochures = [
    {
      title: "Company Profile 2024",
      type: "PDF",
      size: "4.2 MB",
      icon: FileTextIcon,
    },
    {
      title: "Skyline Towers Brochure",
      type: "PDF",
      size: "8.5 MB",
      icon: FileTextIcon,
    },
    {
      title: "Marina Residences Floor Plans",
      type: "PDF",
      size: "6.1 MB",
      icon: LayoutIcon,
    },
  ];

  const media = [
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop",
      title: "3D Exterior Render",
      type: "image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop",
      title: "Interior Design",
      type: "image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400&auto=format&fit=crop",
      title: "Amenities Preview",
      type: "image",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop",
      title: "Project Walkthrough",
      type: "video",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Project Media & Brochures
        </h2>

        {/* ======================== BROCHURES ======================== */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileTextIcon size={20} className="text-blue-600" />
            Downloadable Brochures
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {brochures.map((brochure, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-5 border border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <brochure.icon size={24} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {brochure.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {brochure.type} • {brochure.size}
                    </p>
                  </div>
                </div>

                <Button fullWidth size="sm" variant="outline">
                  <DownloadIcon size={16} className="mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* ======================== MEDIA GALLERY ======================== */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <ImageIcon size={20} className="text-blue-600" />
            Project Gallery
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {media.map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer rounded-xl overflow-hidden aspect-square"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-semibold text-sm mb-2">
                    {item.title}
                  </p>

                  {item.type === "video" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <VideoIcon size={24} className="text-blue-600" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
