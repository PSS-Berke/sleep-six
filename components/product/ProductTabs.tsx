'use client';

import { useState } from 'react';
import { Check, MapPin, Package, Truck, Home } from 'lucide-react';
import type { Product } from '@/data/products';
import MattressLayers from './MattressLayers';

interface ProductTabsProps {
  product: Product;
}

type TabKey = 'overview' | 'components' | 'materials' | 'delivery';

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'components', label: 'Components' },
    { key: 'materials', label: 'Materials' },
    { key: 'delivery', label: 'Delivery' },
  ];

  return (
    <div className="mt-20">
      {/* Pill-style tab navigation */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-white/60 rounded-full p-1.5 gap-1 border border-gold/10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                px-6 py-3 rounded-full font-medium text-sm transition-all duration-500
                ${activeTab === tab.key
                  ? 'bg-white text-navy shadow-sm border border-gold/20'
                  : 'text-gray-500 hover:text-navy'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-2xl font-serif text-navy mb-4">
                About the <span className="font-semibold">{product.name}</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                {product.description}
              </p>
            </div>

            <div>
              <h4 className="text-sm text-gold-dark font-medium text-center mb-6">
                Features
              </h4>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm text-gold-dark font-medium text-center mb-6">
                Best For
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {product.bestFor.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gold/10 text-gold-dark px-4 py-2 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'components' && (
          <MattressLayers components={product.components} productName={product.name} />
        )}

        {activeTab === 'materials' && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-serif text-navy mb-2">
                American-Sourced <span className="font-semibold">Materials</span>
              </h3>
              <p className="text-gray-500">
                Every material certified and sourced from American suppliers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {product.materials.map((material, index) => (
                <div
                  key={index}
                  className="bg-white/80 rounded-3xl p-8 border-2 border-gold/10 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-semibold text-navy text-lg">{material.name}</h4>
                    <span className="px-3 py-1 bg-gold/20 text-gold-dark text-xs font-medium rounded-full">
                      {material.certification}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>{material.source}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gold/10 rounded-3xl p-8 text-center border-2 border-gold/20">
              <h4 className="font-semibold text-navy mb-4">Our Certifications</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['CertiPUR-US', 'GREENGUARD Gold', 'OEKO-TEX', 'GOTS Organic'].map((cert) => (
                  <span
                    key={cert}
                    className="bg-white border-2 border-gold/10 px-4 py-2 rounded-full text-sm text-gray-600"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'delivery' && (
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-2xl font-serif text-navy mb-4">
                Free <span className="font-semibold">White Glove</span> Delivery
              </h3>
              <p className="text-gray-600 text-lg max-w-xl mx-auto">
                Your {product.name} delivered to your room of choice, set up, and your old mattress
                removed — all complimentary.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Package,
                  title: 'Handcrafted',
                  desc: 'Your mattress begins production upon order',
                },
                {
                  icon: Truck,
                  title: 'Ships in 5-7 Days',
                  desc: 'Carefully packaged and shipped to your area',
                },
                {
                  icon: Home,
                  title: 'White Glove Setup',
                  desc: 'Delivered and set up in your room of choice',
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="text-center p-8 bg-white/80 rounded-3xl border-2 border-gold/10"
                >
                  <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-gold-dark" />
                  </div>
                  <h4 className="font-semibold text-navy text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gold/10 rounded-3xl p-8 border-2 border-gold/20">
              <h4 className="font-semibold text-navy text-center mb-6">
                100-Night Comfort Guarantee
              </h4>
              <p className="text-gray-600 text-center mb-6 max-w-xl mx-auto">
                Sleep on your new mattress for up to 100 nights. If you&apos;re not completely
                satisfied, we&apos;ll help you find the right solution.
              </p>
              <ul className="max-w-md mx-auto space-y-3">
                {[
                  'Free returns within 100 nights',
                  'Free firmness exchange available',
                  'Full refund, no questions asked',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
