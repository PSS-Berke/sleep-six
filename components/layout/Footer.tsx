import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Flag, Shield, Truck, Clock } from 'lucide-react';

const footerLinks = {
  shop: {
    title: 'Shop',
    links: [
      { name: 'All Mattresses', href: '/products' },
      { name: 'Compare Mattresses', href: '/compare' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Factory', href: '/factory-tour' },
      { name: 'Meet the Team', href: '/team' },
      { name: 'The 6 Components', href: '/six-components' },
      { name: 'Careers', href: '/careers' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQs', href: '/faq' },
      { name: 'Shipping & Delivery', href: '/shipping' },
      { name: 'Returns & Exchanges', href: '/returns' },
      { name: 'Warranty', href: '/warranty' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Sleep Quiz', href: '/quiz' },
      { name: 'Mattress Guide', href: '/guide' },
      { name: 'Sleep Blog', href: '/blog' },
      { name: 'Financing Options', href: '/financing' },
      { name: 'Refer a Friend', href: '/referral' },
    ],
  },
};

const trustBadges = [
  { icon: Flag, label: 'Made in USA' },
  { icon: Truck, label: 'Free Delivery' },
  { icon: Clock, label: '100-Night Trial' },
  { icon: Shield, label: 'Lifetime Warranty' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Trust badges */}
      <div className="border-b border-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-navy-light rounded-full flex items-center justify-center">
                  <badge.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo and contact */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4 bg-white rounded-lg px-3 py-2">
              <Image
                src="/images/logo.png"
                alt="Sleep6 - Crafted in Chicago"
                width={150}
                height={42}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm mb-6">
              Six essential components. One perfect mattress. Handcrafted in America with 25+ years of expertise.
            </p>
            <div className="space-y-3">
              <a
                href="tel:1-800-SLEEP-6"
                className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>1-800-SLEEP-6</span>
              </a>
              <a
                href="mailto:hello@sleepsix.com"
                className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@sleepsix.com</span>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-gold text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-lg">Get Sleep Tips & Exclusive Offers</h3>
              <p className="text-gray-300 text-sm">Join our newsletter for better sleep and special savings.</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-full bg-navy-light border border-navy-light text-white placeholder-gray-400 focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-2.5 rounded-full transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Sleep Six. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="hover:text-gold transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
