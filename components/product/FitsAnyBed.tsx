const bedTypes = [
  {
    name: 'Slats',
    icon: (
      <svg viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
        {/* Curved headboard */}
        <path d="M10 45 L10 12 Q60 5 110 12 L110 45" />
        {/* Headboard fill area outline */}
        <line x1="10" y1="45" x2="110" y2="45" />
        {/* Base frame */}
        <rect x="10" y="48" width="100" height="12" />
        {/* Slat lines inside base */}
        <line x1="10" y1="52" x2="110" y2="52" />
        <line x1="10" y1="56" x2="110" y2="56" />
        {/* Legs */}
        <line x1="18" y1="60" x2="18" y2="72" />
        <line x1="102" y1="60" x2="102" y2="72" />
      </svg>
    ),
  },
  {
    name: 'Foundations',
    icon: (
      <svg viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
        {/* Tall headboard (left) */}
        <rect x="8" y="8" width="10" height="52" />
        {/* Shorter footboard (right) */}
        <rect x="102" y="30" width="10" height="30" />
        {/* Box spring base */}
        <rect x="18" y="40" width="84" height="20" />
        {/* Legs */}
        <line x1="25" y1="60" x2="25" y2="72" />
        <line x1="95" y1="60" x2="95" y2="72" />
      </svg>
    ),
  },
  {
    name: 'Platform',
    icon: (
      <svg viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
        {/* Platform base */}
        <rect x="5" y="38" width="110" height="16" />
        {/* Horizontal detail lines */}
        <line x1="5" y1="44" x2="115" y2="44" />
        <line x1="5" y1="50" x2="115" y2="50" />
        {/* Short legs */}
        <line x1="15" y1="54" x2="15" y2="64" />
        <line x1="105" y1="54" x2="105" y2="64" />
      </svg>
    ),
  },
];

export default function FitsAnyBed() {
  return (
    <section className="py-12 md:py-16 bg-[#f5f7f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-navy whitespace-nowrap">
            Fits any bed
          </h2>

          {/* Bed types */}
          <div className="flex items-end justify-start gap-16 md:gap-24 flex-1">
            {bedTypes.map((bed) => (
              <div key={bed.name} className="flex flex-col items-center">
                <div className="w-28 h-20 md:w-40 md:h-24 text-[#4a5568]">
                  {bed.icon}
                </div>
                <span className="mt-4 text-sm md:text-base text-[#4a5568]">
                  {bed.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
