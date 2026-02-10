'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages = images && images.length > 0;

  const nextImage = () => {
    if (hasImages) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (hasImages) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const totalImages = hasImages ? images.length : 0;

  return (
    <div className="space-y-6">
      {/* Main image - Portrait aspect ratio */}
      <div className="relative aspect-[3/4] bg-[#f8f6f3] rounded-3xl overflow-hidden group border-2 border-gold/10">
        {hasImages ? (
          <Image
            src={images[currentIndex]}
            alt={`${productName} - Image ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-gray-400 text-sm">Image Coming Soon</span>
          </div>
        )}

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-transparent pointer-events-none" />

        {/* Navigation - visible on hover */}
        {totalImages > 1 && (
          <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex justify-between items-center">
              <button
                onClick={prevImage}
                className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:shadow-gold/10 hover:shadow-lg transition-all duration-300 shadow-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-gold-dark" />
              </button>

              {/* Animated dots */}
              <div className="flex gap-2">
                {Array.from({ length: totalImages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      currentIndex === i
                        ? 'bg-gold w-6'
                        : 'bg-white/60 hover:bg-gold/50 w-2'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextImage}
                className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:shadow-gold/10 hover:shadow-lg transition-all duration-300 shadow-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-gold-dark" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Thumbnails - refined styling */}
      {hasImages && totalImages > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                relative aspect-square rounded-2xl overflow-hidden border-2
                transition-all duration-500
                ${currentIndex === index
                  ? 'border-gold shadow-sm shadow-gold/10'
                  : 'border-gold/10 opacity-70 hover:opacity-100 hover:border-gold/30'
                }
              `}
            >
              <Image
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
