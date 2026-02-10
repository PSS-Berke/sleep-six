import Link from 'next/link';
import {
  ArrowRight,
  Users,
  Factory,
  Moon,
  Shield,
  Flag,
  Check,
  Award,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: 'About Us | Sleep Six',
  description: 'Learn about Sleep Six - 25+ years of bedding expertise, American-made mattresses with 6 essential components, delivered direct to you at a fraction of the cost.',
};

const stats = [
  { icon: Users, value: '25+', label: 'Years Experience' },
  { icon: Factory, value: '1', label: 'American Factory' },
  { icon: Moon, value: '100', label: 'Nights Risk-Free' },
  { icon: Flag, value: '100%', label: 'USA Materials' },
];

const benefits = [
  'Latest innovative technology',
  'Premium, certified materials',
  'Handcrafted in the USA',
  'Six essential components',
  'Direct-to-consumer pricing',
];

const promises = [
  {
    icon: Moon,
    title: '100-Night Trial',
    description: 'Try it risk-free for 100 nights. If you don\'t love it, we\'ll pick it up and give you a full refund.',
  },
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'We stand behind our craft forever. Your mattress is protected for as long as you own it.',
  },
  {
    icon: Flag,
    title: 'Made in USA',
    description: 'American materials, American workers. Every mattress is handcrafted in our own factory.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] linen-texture relative">
      {/* Warm ambient glow */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(255, 220, 180, 0.4) 0%, rgba(255, 200, 150, 0.2) 30%, transparent 60%)',
        }}
      />
      <div className="relative z-10">
        {/* Section 1: Hero */}
        <section className="relative overflow-hidden pt-8 pb-20 md:py-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/15 blob-shape blur-3xl -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 blob-shape-alt blur-3xl translate-y-1/3 -translate-x-1/4" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2 text-sm text-navy mb-8">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span>Our Story</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-navy mb-6">
                There Is Only One{' '}
                <span className="wavy-underline">Perfect Mattress</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                With over 25 years of experience in the bedding industry, we set out to create
                a premium product at a fraction of the traditional cost — by eliminating the
                middleman and building our factory right here in the USA.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Mission */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <span className="inline-block bg-gold/15 text-gold-dark font-semibold px-4 py-1 rounded-full text-sm mb-6">
                  Our Mission
                </span>

                <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">
                  Premium Quality Without the Premium Markup
                </h2>

                <p className="text-xl text-gray-600 mb-6">
                  We felt it was time that you understand not only what you are purchasing,
                  but that you deserve a luxury mattress without the inflated prices.
                </p>

                <p className="text-gray-600 mb-8">
                  By going direct-to-consumer, we cut out the middleman and pass those savings
                  directly to you. No showroom overhead. No sales commissions. Just a
                  better mattress at a better price.
                </p>

                <blockquote className="border-l-4 border-gold pl-6">
                  <p className="text-lg text-navy italic">
                    &quot;In order to accomplish this, we built our factory right here in the USA
                    and went to work to design a luxury mattress that has all 6 essential
                    components to make the perfect mattress.&quot;
                  </p>
                </blockquote>
              </div>

              {/* Image grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Our Team</span>
                    </div>
                  </div>
                  <div className="aspect-square bg-gold/20 border-2 border-gold/30 rounded-3xl p-6 flex flex-col justify-center">
                    <p className="text-4xl font-bold text-gold-dark mb-2">25+</p>
                    <p className="text-navy">Years of bedding expertise</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Craftsman at Work</span>
                    </div>
                  </div>
                  <div className="aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Our Factory</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Stats */}
        <section className="py-16 bg-navy/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-gold-dark" />
                  </div>
                  <p className="text-3xl font-bold text-navy mb-1">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Philosophy */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold/10 blob-shape blur-3xl translate-x-1/2 -translate-y-1/2" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Visual */}
              <div className="bg-white border-2 border-gold/20 rounded-3xl p-8 shadow-xl shadow-gold/5">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-gold-dark" />
                    </div>
                    <p className="text-navy font-medium">The 6 Essential Components</p>
                    <p className="text-sm text-gray-500">What makes a perfect mattress</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="inline-block bg-gold/15 text-gold-dark font-semibold px-4 py-1 rounded-full text-sm mb-6">
                  The Sleep Six Philosophy
                </span>

                <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">
                  Six Essential Components, One Perfect Mattress
                </h2>

                <p className="text-xl text-gray-600 mb-8">
                  Utilizing the latest innovative technology and premium materials, we have
                  created a product that we are proud to stand behind.
                </p>

                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-navy">
                      <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-gold-dark" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-gold-dark hover:text-gold font-semibold transition-colors"
                >
                  Explore our mattresses
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Our Promise */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-gold/15 text-gold-dark font-semibold px-4 py-1 rounded-full text-sm mb-6">
                Our Promise
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">
                Our Promise to You
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We are confident that you will love your new mattress and get the sleep you deserve.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {promises.map((promise) => (
                <div
                  key={promise.title}
                  className="bg-white border-2 border-gold/20 rounded-3xl p-8 shadow-lg shadow-gold/5 text-center"
                >
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <promise.icon className="w-8 h-8 text-gold-dark" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-4">{promise.title}</h3>
                  <p className="text-gray-600">{promise.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-navy/5" />
          <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-gold/10 blob-shape blur-3xl -translate-x-1/2 -translate-y-1/2" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">
                Ready to Get the Sleep You Deserve?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the luxury of a perfect mattress at a fraction of the traditional cost.
                There is only one perfect mattress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
                >
                  Shop Mattresses
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-navy/20 hover:border-gold text-navy font-semibold px-8 py-4 rounded-full transition-all"
                >
                  Take the Sleep Quiz
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
