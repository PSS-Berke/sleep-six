export interface Size {
  name: string;
  dimensions: string;
  price: number;
  inStock: boolean;
}

export interface FirmnessOption {
  level: string;
  description: string;
  recommended: string[];
}

export interface ComponentDetail {
  name: string;
  description: string;
  materials: string;
}

export interface Material {
  name: string;
  source: string;
  certification: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  title: string;
  content: string;
  sleepPosition: string;
  verified: boolean;
  date: string;
  helpful: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: 'abt' | 'sleep6-home';
  type: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  images: string[];
  sizes: Size[];
  firmness: FirmnessOption[];
  selectedFirmness: string;
  features: string[];
  bestFor: string[];
  components: ComponentDetail[];
  materials: Material[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'luna',
    name: 'Luna',
    brand: 'abt',
    type: 'Foam',
    tagline: 'The essentials of comfort and support',
    description: 'The Luna delivers essential comfort at an accessible price point. With 3 carefully designed layers and a foam support core, this mattress provides the foundation for quality sleep without unnecessary complexity.',
    price: 648,
    originalPrice: 1296,
    rating: 4.8,
    reviewCount: 1200,
    images: [
      '/images/products/luna-1.png',
    ],
    sizes: [
      { name: 'Twin', dimensions: '38" x 75"', price: 448, inStock: true },
      { name: 'Twin XL', dimensions: '38" x 80"', price: 498, inStock: true },
      { name: 'Full', dimensions: '54" x 75"', price: 548, inStock: true },
      { name: 'Queen', dimensions: '60" x 80"', price: 648, inStock: true },
      { name: 'King', dimensions: '76" x 80"', price: 848, inStock: true },
      { name: 'Cal King', dimensions: '72" x 84"', price: 848, inStock: true },
    ],
    firmness: [
      { level: 'Soft', description: 'Plush, pressure-relieving comfort', recommended: ['Side sleepers', 'Lighter body types'] },
      { level: 'Medium', description: 'Balanced support and comfort', recommended: ['All sleep positions', 'Couples'] },
      { level: 'Firm', description: 'Maximum support, minimal sink', recommended: ['Back sleepers', 'Stomach sleepers'] },
    ],
    selectedFirmness: 'Medium',
    features: [
      '3-layer construction',
      'Foam support core',
      '100% Fiber Glass Free',
      'CertiPUR-US certified foams',
      'Breathable cover',
      'Made in the USA',
    ],
    bestFor: ['Value seekers', 'Guest rooms', 'First mattress buyers'],
    components: [
      { name: 'Stretch Knit Breathable Zippered Cover', description: 'Soft, breathable stretch knit cover allows airflow and easy removal for washing', materials: 'Stretch knit fabric' },
      { name: 'ResponseGel Technology', description: 'Gel-infused layer provides pressure relief and temperature regulation', materials: 'ResponseGel foam' },
      { name: 'CoolFlow Visco', description: 'Open-cell memory foam promotes airflow for cooler sleep', materials: 'CoolFlow memory foam' },
      { name: '7-inch High Density Body Support Core', description: 'Durable high-density foam core provides lasting support and stability', materials: 'HD polyurethane foam' },
    ],
    materials: [
      { name: 'Breathable Cover', source: 'North Carolina, USA', certification: 'OEKO-TEX', description: 'Soft, breathable fabric for comfort' },
      { name: 'Comfort Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Responsive foam for pressure relief' },
      { name: 'Support Foam', source: 'North Carolina, USA', certification: 'CertiPUR-US', description: 'High-density base for durability' },
    ],
  },
  {
    id: '2',
    slug: 'mystic',
    name: 'Mystic',
    brand: 'abt',
    type: 'Foam',
    tagline: 'Balances affordability and comfort',
    description: 'The Mystic strikes the perfect balance between value and performance. Its 3-layer design with a motion-isolating core ensures undisturbed sleep for you and your partner.',
    price: 848,
    originalPrice: 1696,
    rating: 4.8,
    reviewCount: 1500,
    images: [
      '/images/products/mystic-1.png',
    ],
    sizes: [
      { name: 'Twin', dimensions: '38" x 75"', price: 598, inStock: true },
      { name: 'Twin XL', dimensions: '38" x 80"', price: 648, inStock: true },
      { name: 'Full', dimensions: '54" x 75"', price: 748, inStock: true },
      { name: 'Queen', dimensions: '60" x 80"', price: 848, inStock: true },
      { name: 'King', dimensions: '76" x 80"', price: 1048, inStock: true },
      { name: 'Cal King', dimensions: '72" x 84"', price: 1048, inStock: true },
    ],
    firmness: [
      { level: 'Soft', description: 'Plush comfort with motion isolation', recommended: ['Side sleepers', 'Lighter body types'] },
      { level: 'Medium', description: 'Balanced support and comfort', recommended: ['All sleep positions', 'Couples'] },
      { level: 'Firm', description: 'Supportive feel with motion isolation', recommended: ['Back sleepers', 'Stomach sleepers'] },
    ],
    selectedFirmness: 'Medium',
    features: [
      '3-layer construction',
      'Motion-isolating core',
      '100% Fiber Glass Free',
      'Zero motion transfer',
      'CertiPUR-US certified foams',
      'Made in the USA',
    ],
    bestFor: ['Couples', 'Light sleepers', 'Budget-conscious'],
    components: [
      { name: 'Support Core', description: 'Motion-isolating core absorbs movement so partners sleep undisturbed', materials: 'Viscoelastic foam' },
      { name: 'Comfort Layer', description: 'Responsive comfort layer provides pressure relief and contouring', materials: 'Memory foam' },
      { name: 'Surface & Cover', description: 'Soft, breathable cover for temperature regulation', materials: 'Breathable fabric blend' },
    ],
    materials: [
      { name: 'Breathable Cover', source: 'North Carolina, USA', certification: 'OEKO-TEX', description: 'Soft, breathable fabric for comfort' },
      { name: 'Memory Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Motion-isolating comfort layer' },
      { name: 'Viscoelastic Foam', source: 'North Carolina, USA', certification: 'CertiPUR-US', description: 'Motion-absorbing support core' },
    ],
  },
  {
    id: '3',
    slug: 'fak-cosmos',
    name: 'FAK Cosmos',
    brand: 'abt',
    type: 'Luxury Foam',
    tagline: 'Maximum comfort with premium materials',
    description: 'The FAK Cosmos represents the pinnacle of foam mattress technology. Four layers of gel, latex, and memory foam work in harmony to deliver maximum comfort and temperature regulation.',
    price: 1348,
    originalPrice: 2696,
    rating: 4.9,
    reviewCount: 1800,
    images: [
      '/images/products/fak-cosmos-1.png',
    ],
    sizes: [
      { name: 'Twin', dimensions: '38" x 75"', price: 998, inStock: true },
      { name: 'Twin XL', dimensions: '38" x 80"', price: 1048, inStock: true },
      { name: 'Full', dimensions: '54" x 75"', price: 1198, inStock: true },
      { name: 'Queen', dimensions: '60" x 80"', price: 1348, inStock: true },
      { name: 'King', dimensions: '76" x 80"', price: 1598, inStock: true },
      { name: 'Cal King', dimensions: '72" x 84"', price: 1598, inStock: true },
    ],
    firmness: [
      { level: 'Soft', description: 'Plush luxury comfort', recommended: ['Side sleepers', 'Lighter body types'] },
      { level: 'Medium', description: 'Balanced luxury comfort', recommended: ['All sleep positions', 'Couples'] },
      { level: 'Firm', description: 'Supportive luxury feel', recommended: ['Back sleepers', 'Stomach sleepers'] },
    ],
    selectedFirmness: 'Medium',
    features: [
      '4-layer construction',
      'Gel-infused foam for cooling',
      'Natural latex comfort layer',
      'Memory foam for pressure relief',
      '100% Fiber Glass Free',
      'Made in the USA',
    ],
    bestFor: ['Hot sleepers', 'Luxury seekers', 'All sleep positions'],
    components: [
      { name: 'Support Core', description: 'High-density foam base provides lasting support and durability', materials: 'HD polyurethane foam' },
      { name: 'Gel Layer', description: 'Gel-infused foam layer regulates temperature for cool sleep', materials: 'Gel memory foam' },
      { name: 'Latex Layer', description: 'Natural latex provides responsive, bouncy comfort', materials: 'Natural latex foam' },
      { name: 'Surface & Cover', description: 'Premium soft-touch cover for luxurious feel', materials: 'Premium knit fabric' },
    ],
    materials: [
      { name: 'Premium Cover', source: 'South Carolina, USA', certification: 'OEKO-TEX', description: 'Soft, luxurious knit fabric' },
      { name: 'Natural Latex', source: 'Arizona, USA', certification: 'GOLS Certified', description: 'Responsive natural comfort layer' },
      { name: 'Gel Memory Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Cooling gel-infused foam' },
      { name: 'HD Support Foam', source: 'North Carolina, USA', certification: 'CertiPUR-US', description: 'Durable high-density base' },
    ],
  },
  {
    id: '4',
    slug: 'cosmos-hybrid',
    name: 'Cosmos Hybrid',
    brand: 'abt',
    type: 'Hybrid',
    tagline: 'Ultimate comfort with zero motion transfer',
    description: 'The Cosmos Hybrid is our flagship mattress with 7 precision-engineered layers. Combining premium foams with pocketed coils, it delivers ultimate comfort with zero motion transfer and complete pressure relief.',
    price: 1348,
    originalPrice: 2696,
    rating: 4.9,
    reviewCount: 2200,
    images: ['/images/products/cosmos-hybrid-1.png'],
    sizes: [
      { name: 'Twin', dimensions: '38" x 75"', price: 998, inStock: true },
      { name: 'Twin XL', dimensions: '38" x 80"', price: 1048, inStock: true },
      { name: 'Full', dimensions: '54" x 75"', price: 1198, inStock: true },
      { name: 'Queen', dimensions: '60" x 80"', price: 1348, inStock: true },
      { name: 'King', dimensions: '76" x 80"', price: 1598, inStock: true },
      { name: 'Cal King', dimensions: '72" x 84"', price: 1598, inStock: true },
    ],
    firmness: [
      { level: 'Soft', description: 'Plush comfort with coil support', recommended: ['Side sleepers', 'Lighter body types'] },
      { level: 'Medium', description: 'Balanced hybrid comfort', recommended: ['All sleep positions', 'Couples'] },
      { level: 'Firm', description: 'Supportive hybrid feel', recommended: ['Back sleepers', 'Stomach sleepers'] },
    ],
    selectedFirmness: 'Medium',
    features: [
      '7-layer construction',
      'Zero motion transfer',
      'Pressure point relief',
      'Pocketed coil support system',
      '100% Fiber Glass Free',
      'Made in the USA',
    ],
    bestFor: ['Couples', 'Side sleepers', 'Back pain sufferers', 'Hot sleepers'],
    components: [
      { name: 'Base Layer', description: 'Foundation foam provides durability and stability', materials: 'High-density base foam' },
      { name: 'Support Core', description: 'Individually wrapped coils provide targeted support and motion isolation', materials: 'Pocketed coil system' },
      { name: 'Coil Encasement', description: 'Reinforced edge support for full-surface use', materials: 'HD foam perimeter' },
      { name: 'Transition Layer', description: 'Buffers coils from comfort layers for smooth feel', materials: 'Transition foam' },
      { name: 'Memory Foam Layer', description: 'Pressure-relieving memory foam contours to your body', materials: 'Viscoelastic memory foam' },
      { name: 'Comfort Layer', description: 'Responsive top comfort layer for cushioning', materials: 'Gel-infused foam' },
      { name: 'Surface & Cover', description: 'Premium quilted cover for luxurious feel', materials: 'Premium quilted fabric' },
    ],
    materials: [
      { name: 'Quilted Cover', source: 'South Carolina, USA', certification: 'OEKO-TEX', description: 'Premium quilted fabric for comfort' },
      { name: 'Gel Comfort Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Cooling gel-infused comfort layer' },
      { name: 'Memory Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Pressure-relieving viscoelastic foam' },
      { name: 'Pocketed Coils', source: 'Ohio, USA', certification: 'ISO 9001', description: 'Individually wrapped coils for support' },
      { name: 'HD Base Foam', source: 'North Carolina, USA', certification: 'CertiPUR-US', description: 'Durable foundation layer' },
    ],
  },
];

// Sleep6 Home Line — online exclusives
export const homeLineProducts: Product[] = [
  {
    id: 'hl-1',
    slug: 'essential',
    name: 'Essential',
    brand: 'sleep6-home',
    type: 'Foam',
    tagline: 'Dependable comfort, night after night',
    description: 'The Essential is where quality begins. Built on a foundation of carefully selected foams, it delivers reliable support and consistent comfort without compromise — the dependable choice for everyday great sleep.',
    price: 549,
    originalPrice: 1098,
    rating: 4.7,
    reviewCount: 0,
    images: [],
    sizes: [
      { name: 'Twin', dimensions: '38" x 75"', price: 399, inStock: true },
      { name: 'Twin XL', dimensions: '38" x 80"', price: 449, inStock: true },
      { name: 'Full', dimensions: '54" x 75"', price: 499, inStock: true },
      { name: 'Queen', dimensions: '60" x 80"', price: 549, inStock: true },
      { name: 'King', dimensions: '76" x 80"', price: 749, inStock: true },
      { name: 'Cal King', dimensions: '72" x 84"', price: 749, inStock: true },
    ],
    firmness: [
      { level: 'Soft', description: 'Gentle, pressure-relieving comfort', recommended: ['Side sleepers', 'Lighter body types'] },
      { level: 'Medium', description: 'Balanced support and comfort', recommended: ['All sleep positions', 'Couples'] },
      { level: 'Firm', description: 'Maximum support, minimal sink', recommended: ['Back sleepers', 'Stomach sleepers'] },
    ],
    selectedFirmness: 'Medium',
    features: [
      'Quality foam construction',
      '100% Fiber Glass Free',
      'CertiPUR-US certified foams',
      'Breathable cover',
      'Online Exclusive',
    ],
    bestFor: ['First mattress buyers', 'Guest rooms', 'Value seekers'],
    components: [
      { name: 'Breathable Cover', description: 'Soft, breathable cover for comfortable sleep surface', materials: 'Stretch knit fabric' },
      { name: 'Comfort Layer', description: 'Responsive foam layer provides pressure relief and cushioning', materials: 'Comfort foam' },
      { name: 'Support Core', description: 'High-density foam base provides lasting support and durability', materials: 'HD polyurethane foam' },
    ],
    materials: [
      { name: 'Breathable Cover', source: 'North Carolina, USA', certification: 'OEKO-TEX', description: 'Soft, breathable fabric for comfort' },
      { name: 'Comfort Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Responsive foam for pressure relief' },
      { name: 'Support Foam', source: 'North Carolina, USA', certification: 'CertiPUR-US', description: 'High-density base for durability' },
    ],
  },
  {
    id: 'hl-2',
    slug: 'elevated',
    name: 'Elevated',
    brand: 'sleep6-home',
    type: 'Foam',
    tagline: 'A noticeable upgrade in every way',
    description: 'The Elevated is the step up you can actually feel. Enhanced comfort layers and improved pressure relief make it a meaningful upgrade — for sleepers who want more than the basics without going all the way.',
    price: 749,
    originalPrice: 1498,
    rating: 4.8,
    reviewCount: 0,
    images: [],
    sizes: [
      { name: 'Twin', dimensions: '38" x 75"', price: 549, inStock: true },
      { name: 'Twin XL', dimensions: '38" x 80"', price: 599, inStock: true },
      { name: 'Full', dimensions: '54" x 75"', price: 699, inStock: true },
      { name: 'Queen', dimensions: '60" x 80"', price: 749, inStock: true },
      { name: 'King', dimensions: '76" x 80"', price: 999, inStock: true },
      { name: 'Cal King', dimensions: '72" x 84"', price: 999, inStock: true },
    ],
    firmness: [
      { level: 'Soft', description: 'Enhanced plush comfort', recommended: ['Side sleepers', 'Lighter body types'] },
      { level: 'Medium', description: 'Balanced support and comfort', recommended: ['All sleep positions', 'Couples'] },
      { level: 'Firm', description: 'Supportive with upgraded cushion', recommended: ['Back sleepers', 'Stomach sleepers'] },
    ],
    selectedFirmness: 'Medium',
    features: [
      'Enhanced comfort layer',
      'Improved pressure relief',
      '100% Fiber Glass Free',
      'CertiPUR-US certified foams',
      'Online Exclusive',
    ],
    bestFor: ['Couples', 'Side sleepers', 'Everyday comfort seekers'],
    components: [
      { name: 'Premium Cover', description: 'Upgraded soft-touch cover for an enhanced sleep surface', materials: 'Soft-touch knit fabric' },
      { name: 'Enhanced Comfort Layer', description: 'Improved foam layer provides superior pressure relief', materials: 'Enhanced comfort foam' },
      { name: 'Transition Layer', description: 'Smooth transition between comfort and support zones', materials: 'Transition foam' },
      { name: 'Support Core', description: 'Durable high-density foam core for lasting support', materials: 'HD polyurethane foam' },
    ],
    materials: [
      { name: 'Premium Cover', source: 'North Carolina, USA', certification: 'OEKO-TEX', description: 'Upgraded soft-touch fabric' },
      { name: 'Enhanced Comfort Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Improved pressure-relieving foam' },
      { name: 'Support Foam', source: 'North Carolina, USA', certification: 'CertiPUR-US', description: 'High-density base for durability' },
    ],
  },
  {
    id: 'hl-3',
    slug: 'indulgent',
    name: 'Indulgent',
    brand: 'sleep6-home',
    type: 'Memory Foam',
    tagline: 'Rich, plush comfort that envelops you',
    description: 'The Indulgent wraps you in a deep, contouring embrace. Multi-layer memory foam construction provides rich, plush comfort from the moment you lie down — for sleepers who want sleep to feel like a true escape.',
    price: 999,
    originalPrice: 1998,
    rating: 4.8,
    reviewCount: 0,
    images: [],
    sizes: [
      { name: 'Twin', dimensions: '38" x 75"', price: 749, inStock: true },
      { name: 'Twin XL', dimensions: '38" x 80"', price: 799, inStock: true },
      { name: 'Full', dimensions: '54" x 75"', price: 899, inStock: true },
      { name: 'Queen', dimensions: '60" x 80"', price: 999, inStock: true },
      { name: 'King', dimensions: '76" x 80"', price: 1249, inStock: true },
      { name: 'Cal King', dimensions: '72" x 84"', price: 1249, inStock: true },
    ],
    firmness: [
      { level: 'Soft', description: 'Deep plush, sink-in comfort', recommended: ['Side sleepers', 'Lighter body types'] },
      { level: 'Medium', description: 'Rich comfort with balanced support', recommended: ['All sleep positions', 'Couples'] },
      { level: 'Firm', description: 'Plush feel with firmer support core', recommended: ['Back sleepers', 'Heavier body types'] },
    ],
    selectedFirmness: 'Soft',
    features: [
      'Multi-layer memory foam',
      'Deep pressure relief',
      'Motion isolation',
      '100% Fiber Glass Free',
      'CertiPUR-US certified foams',
      'Online Exclusive',
    ],
    bestFor: ['Side sleepers', 'Pressure relief seekers', 'Couples', 'Comfort-first sleepers'],
    components: [
      { name: 'Plush Cover', description: 'Ultra-soft quilted cover for an immediately luxurious feel', materials: 'Quilted knit fabric' },
      { name: 'Memory Foam Comfort Layer', description: 'Deep-contouring memory foam envelops pressure points', materials: 'Viscoelastic memory foam' },
      { name: 'Responsive Foam Layer', description: 'Balances the memory foam for support without bottoming out', materials: 'Responsive comfort foam' },
      { name: 'Support Core', description: 'Stable high-density base anchors all comfort layers', materials: 'HD polyurethane foam' },
    ],
    materials: [
      { name: 'Quilted Cover', source: 'South Carolina, USA', certification: 'OEKO-TEX', description: 'Soft, quilted fabric for comfort' },
      { name: 'Memory Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Deep-contouring viscoelastic foam' },
      { name: 'Comfort Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Responsive support foam' },
      { name: 'Support Foam', source: 'North Carolina, USA', certification: 'CertiPUR-US', description: 'High-density foundation' },
    ],
  },
  {
    id: 'hl-4',
    slug: 'decadent',
    name: 'Decadent',
    brand: 'sleep6-home',
    type: 'Hybrid',
    tagline: 'Near-luxury performance within reach',
    description: 'The Decadent bridges the gap between premium comfort and accessible pricing. A hybrid construction of individually wrapped coils and advanced foam layers delivers the kind of performance you expect from a luxury mattress — at a price that doesn\'t require compromise.',
    price: 1299,
    originalPrice: 2598,
    rating: 4.9,
    reviewCount: 0,
    images: [],
    sizes: [
      { name: 'Twin', dimensions: '38" x 75"', price: 999, inStock: true },
      { name: 'Twin XL', dimensions: '38" x 80"', price: 1049, inStock: true },
      { name: 'Full', dimensions: '54" x 75"', price: 1199, inStock: true },
      { name: 'Queen', dimensions: '60" x 80"', price: 1299, inStock: true },
      { name: 'King', dimensions: '76" x 80"', price: 1599, inStock: true },
      { name: 'Cal King', dimensions: '72" x 84"', price: 1599, inStock: true },
    ],
    firmness: [
      { level: 'Soft', description: 'Plush hybrid comfort with coil support', recommended: ['Side sleepers', 'Lighter body types'] },
      { level: 'Medium', description: 'Balanced hybrid performance', recommended: ['All sleep positions', 'Couples'] },
      { level: 'Firm', description: 'Supportive hybrid with premium cushion', recommended: ['Back sleepers', 'Stomach sleepers'] },
    ],
    selectedFirmness: 'Medium',
    features: [
      'Pocketed coil support system',
      'Advanced foam comfort layers',
      'Zero motion transfer',
      '100% Fiber Glass Free',
      'CertiPUR-US certified foams',
      'Online Exclusive',
    ],
    bestFor: ['Couples', 'Back pain sufferers', 'Hot sleepers', 'Performance seekers'],
    components: [
      { name: 'Premium Cover', description: 'Luxurious soft-touch quilted cover', materials: 'Premium quilted fabric' },
      { name: 'Comfort Foam Layer', description: 'Advanced foam for pressure relief and contouring', materials: 'Gel-infused comfort foam' },
      { name: 'Memory Foam Layer', description: 'Pressure-relieving layer that conforms to your body', materials: 'Viscoelastic memory foam' },
      { name: 'Pocketed Coil System', description: 'Individually wrapped coils provide targeted support and motion isolation', materials: 'Pocketed coil system' },
      { name: 'Base Layer', description: 'Durable foundation for the coil system', materials: 'HD base foam' },
    ],
    materials: [
      { name: 'Premium Cover', source: 'South Carolina, USA', certification: 'OEKO-TEX', description: 'Luxurious quilted fabric' },
      { name: 'Gel Comfort Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Cooling gel-infused comfort layer' },
      { name: 'Memory Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Pressure-relieving viscoelastic foam' },
      { name: 'Pocketed Coils', source: 'Ohio, USA', certification: 'ISO 9001', description: 'Individually wrapped coils' },
      { name: 'HD Base Foam', source: 'North Carolina, USA', certification: 'CertiPUR-US', description: 'Durable foundation layer' },
    ],
  },
  {
    id: 'hl-crib-1',
    slug: 'nest',
    name: 'Nest',
    brand: 'sleep6-home',
    type: 'Crib Mattress',
    tagline: 'Safe, supportive sleep from day one',
    description: 'The Nest is designed from the ground up for your baby\'s safety and comfort. A firm, flat sleep surface meets infant safety standards while breathable materials keep little ones cool and comfortable through every nap and night.',
    price: 179,
    originalPrice: 358,
    rating: 4.9,
    reviewCount: 0,
    images: [],
    sizes: [
      { name: 'Standard Crib', dimensions: '28" x 52"', price: 179, inStock: true },
      { name: 'Mini Crib', dimensions: '24" x 38"', price: 149, inStock: true },
    ],
    firmness: [
      { level: 'Infant Firm', description: 'AAP-recommended firm surface for safe infant sleep', recommended: ['Newborns', 'Infants'] },
      { level: 'Toddler', description: 'Slightly softer feel for toddlers transitioning from crib to bed', recommended: ['Toddlers 18 months+'] },
    ],
    selectedFirmness: 'Infant Firm',
    features: [
      'AAP safe sleep compliant',
      'Dual-sided: Infant firm / Toddler comfort',
      '100% Fiber Glass Free',
      'Breathable, waterproof cover',
      'CertiPUR-US certified foams',
      'Online Exclusive',
    ],
    bestFor: ['Newborns', 'Infants', 'Toddlers', 'Safe sleep'],
    components: [
      { name: 'Waterproof Cover', description: 'Removable, machine-washable cover with waterproof barrier for easy cleaning', materials: 'Quilted waterproof fabric' },
      { name: 'Infant Comfort Layer', description: 'Breathable foam layer promotes airflow to keep baby cool and comfortable', materials: 'Breathable comfort foam' },
      { name: 'Firm Support Core', description: 'Dense, flat support core provides the firm surface recommended for safe infant sleep', materials: 'HD support foam' },
    ],
    materials: [
      { name: 'Waterproof Cover', source: 'North Carolina, USA', certification: 'OEKO-TEX', description: 'Washable waterproof quilted fabric' },
      { name: 'Breathable Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Airflow-promoting comfort layer' },
      { name: 'HD Support Foam', source: 'North Carolina, USA', certification: 'CertiPUR-US', description: 'Firm, flat safe-sleep core' },
    ],
  },
  {
    id: 'hl-5',
    slug: 'insatiable',
    name: 'Insatiable',
    brand: 'sleep6-home',
    type: 'Luxury Hybrid',
    tagline: 'The absolute premium sleep experience',
    description: 'The Insatiable is for those who refuse to compromise. Our most advanced construction — combining premium natural materials, a cooling gel system, and a precision pocketed coil core — delivers a sleep experience so complete, nothing else will do.',
    price: 1799,
    originalPrice: 3598,
    rating: 4.9,
    reviewCount: 0,
    images: [],
    sizes: [
      { name: 'Twin', dimensions: '38" x 75"', price: 1349, inStock: true },
      { name: 'Twin XL', dimensions: '38" x 80"', price: 1449, inStock: true },
      { name: 'Full', dimensions: '54" x 75"', price: 1649, inStock: true },
      { name: 'Queen', dimensions: '60" x 80"', price: 1799, inStock: true },
      { name: 'King', dimensions: '76" x 80"', price: 2199, inStock: true },
      { name: 'Cal King', dimensions: '72" x 84"', price: 2199, inStock: true },
    ],
    firmness: [
      { level: 'Soft', description: 'Ultimate plush luxury with full coil support', recommended: ['Side sleepers', 'Lighter body types'] },
      { level: 'Medium', description: 'The perfect balance of luxury and support', recommended: ['All sleep positions', 'Couples'] },
      { level: 'Firm', description: 'Maximum support with premium comfort', recommended: ['Back sleepers', 'Heavier body types'] },
    ],
    selectedFirmness: 'Medium',
    features: [
      'Natural latex comfort layer',
      'Gel-infused cooling system',
      'Pocketed coil support core',
      'Zero motion transfer',
      '100% Fiber Glass Free',
      'CertiPUR-US certified foams',
      'Online Exclusive',
    ],
    bestFor: ['Luxury seekers', 'Hot sleepers', 'Couples', 'All sleep positions', 'Performance sleepers'],
    components: [
      { name: 'Luxury Cover', description: 'Hand-finished premium cover with ultra-soft quilting', materials: 'Premium quilted knit fabric' },
      { name: 'Natural Latex Layer', description: 'Responsive natural latex provides buoyant, pressure-relieving comfort', materials: 'Natural latex foam' },
      { name: 'Gel Cooling Layer', description: 'Advanced gel-infused foam actively dissipates heat for cool sleep', materials: 'Gel memory foam' },
      { name: 'Memory Foam Layer', description: 'Deep-contouring viscoelastic foam for complete pressure relief', materials: 'Viscoelastic memory foam' },
      { name: 'Pocketed Coil Core', description: 'Precision-engineered individually wrapped coils for targeted support', materials: 'Pocketed coil system' },
      { name: 'Base Layer', description: 'Ultra-durable foundation for lasting performance', materials: 'HD base foam' },
    ],
    materials: [
      { name: 'Luxury Cover', source: 'South Carolina, USA', certification: 'OEKO-TEX', description: 'Hand-finished premium knit fabric' },
      { name: 'Natural Latex', source: 'Arizona, USA', certification: 'GOLS Certified', description: 'Responsive natural comfort layer' },
      { name: 'Gel Memory Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Cooling gel-infused foam' },
      { name: 'Memory Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Deep-contouring viscoelastic foam' },
      { name: 'Pocketed Coils', source: 'Ohio, USA', certification: 'ISO 9001', description: 'Precision-engineered coil system' },
      { name: 'HD Base Foam', source: 'North Carolina, USA', certification: 'CertiPUR-US', description: 'Ultra-durable foundation' },
    ],
  },
];

export const allProducts: Product[] = [...products, ...homeLineProducts];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return allProducts.map((p) => p.slug);
}
