import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

// Product data with luxury positioning
const flagship = {
  id: 4,
  slug: 'cosmos-hybrid',
  name: 'Cosmos Hybrid',
  type: 'Hybrid',
  tagline: 'Ultimate comfort with zero motion transfer',
  heroDescription:
    'Seven layers of precision engineering. Individually wrapped coils meet premium foams for the perfect balance of support and comfort.',
  layers: 7,
  keyBenefit: 'Zero Motion Transfer',
  price: 1348,
  image: '/images/products/luna-1.png',
};

const supportingProducts = [
  {
    id: 3,
    slug: 'fak-cosmos',
    name: 'FAK Cosmos',
    type: 'Luxury Foam',
    tagline: 'Maximum comfort with premium materials',
    keyBenefit: 'Temperature Regulation',
    price: 1348,
    image: '/images/products/fak-cosmos-1.png',
  },
  {
    id: 2,
    slug: 'mystic',
    name: 'Mystic',
    type: 'Foam',
    tagline: 'Balances affordability and comfort',
    keyBenefit: 'Motion Isolation',
    price: 848,
    image: '/images/products/mystic-1.png',
  },
  {
    id: 1,
    slug: 'luna',
    name: 'Luna',
    type: 'Foam',
    tagline: 'The essentials of comfort and support',
    keyBenefit: 'Essential Comfort',
    price: 648,
    image: '/images/products/luna-1.png',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Editorial Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-dark font-medium text-sm mb-4">
            abt Exclusive Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
            Handcrafted for <span className="wavy-underline">Perfect Sleep</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Each mattress born from 25 years of expertise. Made in America, available exclusively through abt.
          </p>
        </div>

        {/* Flagship Hero Card */}
        <div className="mb-12">
          <Link
            href={`/products/${flagship.slug}`}
            className="group block relative bg-white border-2 border-gold/30 rounded-3xl overflow-hidden shadow-xl shadow-gold/5 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500"
          >
            <div className="grid lg:grid-cols-2 min-h-[500px]">
              {/* Image Side */}
              <div className="relative overflow-hidden min-h-[300px] lg:min-h-0">
                <Image
                  src={flagship.image}
                  alt={flagship.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <span className="text-gold-dark font-medium text-sm mb-4">
                  Flagship Collection
                </span>
                <h3 className="text-3xl lg:text-4xl font-serif text-navy mb-2">
                  Cosmos <span className="font-semibold">Hybrid</span>
                </h3>
                <p className="text-xl text-gray-500 mb-4">
                  {flagship.tagline}
                </p>
                <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                  {flagship.heroDescription}
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm">
                    {flagship.layers} Layers
                  </span>
                  <span className="px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm">
                    {flagship.keyBenefit}
                  </span>
                  <span className="px-4 py-2 bg-gold/10 text-gold-dark rounded-full text-sm">
                    Made in USA
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl text-navy">From ${flagship.price.toLocaleString()}</span>
                  <span className="text-gray-400 text-sm">Queen</span>
                </div>

                {/* CTA */}
                <div className="inline-flex items-center gap-3 text-gold-dark group-hover:gap-5 transition-all duration-500">
                  <span className="font-medium">Discover the Cosmos Hybrid</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Supporting Collection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {supportingProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group relative bg-white/80 rounded-3xl overflow-hidden border-2 border-transparent hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />

                {/* Type badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white text-gold-dark text-xs font-medium rounded-full shadow-sm">
                    {product.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-2 group-hover:text-gold-dark transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.tagline}</p>

                {/* Key benefit */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>{product.keyBenefit}</span>
                </div>

                {/* Price and arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-navy">
                    From ${product.price.toLocaleString()}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link href="/products" className="inline-flex items-center gap-3 group">
            <span className="text-navy font-medium group-hover:text-gold-dark transition-colors duration-300">
              Explore the abt Exclusive Collection
            </span>
            <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gold/30 group-hover:border-gold group-hover:bg-gold transition-all duration-300">
              <ArrowRight className="w-4 h-4 text-gold group-hover:text-white transition-colors duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
