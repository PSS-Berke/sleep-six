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

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
