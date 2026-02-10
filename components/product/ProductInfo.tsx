'use client';

import { useState } from 'react';
import { Star, Info, ArrowRight } from 'lucide-react';
import type { Product, Size } from '@/data/products';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<Size>(
    product.sizes.find((s) => s.name === 'Queen') || product.sizes[0]
  );

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 font-light">
        <a href="/" className="hover:text-navy transition-colors">Home</a>
        <span className="mx-2">/</span>
        <a href="/products" className="hover:text-navy transition-colors">Mattresses</a>
        <span className="mx-2">/</span>
        <span className="text-navy">{product.name}</span>
      </nav>

      {/* Title Section - Editorial */}
      <div>
        <span className="inline-block text-gold-dark font-medium text-sm mb-3">
          {product.type} Collection
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-3">
          The <span className="font-semibold">{product.name}</span>
        </h1>
        <p className="text-lg text-gray-500">{product.tagline}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i <= Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-gray-200'}`}
            />
          ))}
        </div>
        <span className="font-medium text-navy">{product.rating}</span>
        <a href="#reviews" className="text-gray-400 hover:text-gold transition-colors font-light">
          {product.reviewCount.toLocaleString()} reviews
        </a>
      </div>

      {/* Price - Simplified */}
      <div className="py-6 border-t border-b border-gold/10">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl text-navy">
            ${selectedSize.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-400">
            {selectedSize.name}
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Flexible payment options available at checkout
        </p>
      </div>

      {/* Size Selector - Horizontal Pills */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm text-gold-dark font-medium">
            Select Size
          </label>
          <button className="text-sm text-gray-400 hover:text-gold-dark transition-colors duration-300 flex items-center gap-2">
            <Info className="w-4 h-4" />
            <span>Size guide</span>
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {product.sizes.map((size) => (
            <button
              key={size.name}
              onClick={() => setSelectedSize(size)}
              disabled={!size.inStock}
              className={`
                relative px-5 py-4 rounded-2xl border-2 transition-all duration-500
                ${selectedSize.name === size.name
                  ? 'border-gold bg-white shadow-lg shadow-gold/10'
                  : size.inStock
                    ? 'border-gold/10 hover:border-gold/30 bg-white/60'
                    : 'border-gray-100 bg-gray-50/50 opacity-40 cursor-not-allowed'
                }
              `}
            >
              <p className="font-semibold text-navy">{size.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{size.dimensions}</p>
              {selectedSize.name === size.name && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart - Premium Navy */}
      <button className="w-full bg-navy hover:bg-navy-dark text-white font-medium py-5 px-8 rounded-full text-lg tracking-wide transition-all duration-500 hover:shadow-2xl hover:shadow-navy/20 group">
        <span className="flex items-center justify-center gap-3">
          Add to Cart
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
        </span>
      </button>

      {/* Trust Badges - Single Elegant Line */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-6 px-4 bg-gold/5 rounded-2xl text-sm text-gray-600">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
          100-Night Trial
        </span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
          Free White Glove Delivery
        </span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
          Lifetime Warranty
        </span>
      </div>
    </div>
  );
}
