import React, { useState, useRef, useEffect } from 'react'
import { BsMicFill } from 'react-icons/bs'

const COLORS = {
  primary: '#FF6F00',
  accent: '#10B981',
  text: '#111111',
  muted: '#757575',
  inputBg: '#F5F5F5',
  border: '#E5E5E5'
}

function StyledButton({ children, variant = 'default', style, ...rest }) {
  const base = {
    borderRadius: 999,
    padding: '10px 14px',
    fontSize: 14,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  }

  const variants = {
    default: { background: '#E5E5E5', color: COLORS.text, border: `1px solid ${COLORS.border}` },
    primary: { background: COLORS.primary, color: '#fff', fontWeight: 600 },
    ghost: { background: 'transparent', color: COLORS.primary, border: `1px solid ${COLORS.primary}` },
    circle: { background: '#fff', border: `1.5px solid ${COLORS.border}`, width: 48, height: 48, padding: 0 }
  }

  const applied = Object.assign({}, base, variants[variant] || variants.default, style)
  return (
    <button style={applied} {...rest}>{children}</button>
  )
}

function SearchBar({ onSend }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
      <StyledButton variant="circle" aria-label="plus" style={{ boxShadow: '0 6px 14px rgba(0,0,0,0.08)' }}>+</StyledButton>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, background: '#F7F7F7', padding: '12px 16px', borderRadius: 999, border: `1px solid #D9D9D9`, boxShadow: '0 6px 18px rgba(0,0,0,0.08)' }}>
        <input placeholder="Ask Deepenk" style={{ flex: 1, border: 'none', outline: 'none', fontSize: 15, color: COLORS.text, background: 'transparent', paddingTop: 2 }} />
        <button aria-label="mic" style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><BsMicFill style={{ color: COLORS.text, fontSize: 18 }} /></button>
        <button aria-label="send" onClick={onSend} style={{ width: 38, height: 38, borderRadius: 999, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
          <svg className="w-4 h-4" fill="none" stroke="#FFFFFF" viewBox="0 0 24 24" strokeWidth={2.5} width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}

const HERO_IMG = 'https://images.unsplash.com/photo-1501117716987-c8e1ecb210af?auto=format&fit=crop&w=1200&q=80'
const ALT_IMG = 'https://images.unsplash.com/photo-1509057199576-632a47484ece?auto=format&fit=crop&w=800&q=80'

const HotelsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const headerRef = useRef(null)
  const [contentPadding, setContentPadding] = useState(320)

  const categories = [
    { id: 1, emoji: '🏨', label: 'Hotels' },
    { id: 2, emoji: '🏖️', label: 'Resort' },
    { id: 3, emoji: '🍽️', label: 'restaurants' },
    { id: 4, emoji: '🅿️', label: 'PG' }
  ]

  const featuredHotel = {
    badge: 'Best Choice',
    name: 'Seaview Grand Hotel',
    rating: '4.8',
    reviews: '1,234',
    price: '₹499',
    image: HERO_IMG,
    amenities: [
      { icon: '📶', text: 'Free Wi-Fi' },
      { icon: '🍳', text: 'Breakfast Included' },
      { icon: '✅', text: 'Free Cancellation' }
    ],
    description: 'This hotel offers the best overall value for your stay right now.',
    features: [
      'Excellent guest reviews',
      'Prime beachfront location',
      'Modern amenities & comfort',
      'All discounts & deals applied by Deepenk'
    ]
  }

  const alternatives = [
    {
      id: 1,
      name: 'City Comfort Inn',
      priceRange: '₹899-₹1120',
      category: 'Budget-friendly',
      image: ALT_IMG
    },
    {
      id: 2,
      name: 'City Comfort Inn',
      priceRange: '₹999-₹1120',
      category: 'Budget-friendly',
      image: ALT_IMG
    },
    {
      id: 3,
      name: 'City Comfort Inn',
      priceRange: '₹1120-₹1210',
      category: 'Budget-friendly',
      image: ALT_IMG
    }
  ]

  useEffect(() => {
    const calc = () => {
      if (headerRef.current) {
        setContentPadding(headerRef.current.offsetHeight + 12)
      }
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#f7f7fb' }}>
      {/* Search Bar - Fixed at top */}
      <div ref={headerRef} className="fixed top-14 left-0 right-0 z-30">
        <div className="max-w-[440px] mx-auto bg-white px-4 pt-4 pb-3 shadow-sm" style={{ borderBottom: '1px solid #ececec' }}>
          <div className="mb-4">
            <SearchBar onSend={() => {}} />
          </div>

          {/* Header Text */}
          <div className="mb-3 text-center">
            <h2 className="text-base font-bold mb-1" style={{ color: COLORS.text }}>
              Book Your Stay with Confidence
            </h2>
            <p className="text-xs leading-relaxed" style={{ color: COLORS.muted }}>
              Deepenk helps you find the best hotel by comparing price, comfort, reviews, and availability.
            </p>
          </div>

          {/* Category Icons */}
          <div className="flex gap-4 mb-3 overflow-x-auto pb-2 justify-center" style={{ WebkitOverflowScrolling: 'touch' }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="flex-shrink-0 flex flex-col items-center gap-2 transition-all active:scale-95"
                style={{ width: 85 }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: selectedCategory === category.id ? '2px solid #10B981' : `1px solid ${COLORS.border}`,
                    boxShadow: '0 1px 6px rgba(0,0,0,0.06)'
                  }}
                >
                  <span className="text-2xl">{category.emoji}</span>
                </div>
                <span className="text-[11px] text-center" style={{ color: COLORS.muted }}>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Filter Inputs - arranged to match screenshot */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <input 
                type="text" 
                placeholder="Enter Destination" 
                className="px-4 py-2 rounded-full text-sm bg-gray-100 border border-gray-300 outline-none"
                style={{ fontSize: 18, width: '190px' }}
              />
              <input 
                type="text" 
                placeholder="Check-in: May 12" 
                className="px-4 py-2 rounded-full text-sm bg-gray-100 border border-gray-300 outline-none"
                style={{ fontSize: 18, width: '190px' }}
              />
            </div>

            <div className="flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Check-out: May 15" 
                className="px-4 py-2 rounded-full text-sm bg-gray-100 border border-gray-300 outline-none"
                style={{ fontSize: 18, width: '190px' }}
              />
              <StyledButton variant="primary" style={{ padding: '10px 20px', fontSize: 18, width: '190px' }}>Find Hotels →</StyledButton>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - with top padding for fixed header */}
      <div className="px-4 max-w-[440px] mx-auto" style={{ paddingTop: contentPadding }}>
        {/* Featured Hotel Card */}
        <div
          className="rounded-3xl overflow-hidden mb-6"
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
            border: '1px solid #E5E5E5'
          }}
        >
          {/* Image Section */}
          <div className="relative">
            <img src={featuredHotel.image} alt={featuredHotel.name} className="w-full h-56 object-cover" />
            <div
              className="absolute top-3 left-3 px-2.5 py-1 rounded-full"
              style={{ backgroundColor: '#10B981' }}
            >
              <span className="text-[10px] font-bold text-white">Best Choice</span>
            </div>
          </div>

          {/* Hotel Info */}
          <div className="p-4">
            <h3 className="text-xl font-bold mb-1" style={{ color: '#111111' }}>
              {featuredHotel.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-2">
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#FF6F00" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.79 1.402 8.175L12 18.896l-7.336 3.88 1.402-8.175L.132 9.211l8.2-1.193z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold" style={{ color: '#111111' }}>{featuredHotel.rating}</span>
            </div>

            {/* Price */}
            <div className="mb-3">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold" style={{ color: '#111111' }}>{featuredHotel.price}</span>
                <span className="text-sm" style={{ color: '#757575' }}>/ night</span>
              </div>
            </div>

            {/* Amenities */}
            <div className="space-y-2 mb-4">
              {featuredHotel.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2 text-sm" style={{ color: '#111111' }}>
                  <span>{amenity.icon}</span>
                  <span className="text-xs" style={{ color: '#757575' }}>{amenity.text}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-xs mb-4" style={{ color: '#757575' }}>
              {featuredHotel.description}
            </p>

            {/* Book Button */}
            <div className="mb-4">
              <StyledButton variant="primary" style={{ width: '100%', padding: '12px 0', fontSize: 15 }}>Book This Stay</StyledButton>
            </div>

            {/* Why This Hotel */}
            <div>
              <h4 className="text-sm font-bold mb-2" style={{ color: '#111111' }}>
                Why This Hotel Works for You
              </h4>
              <div className="space-y-1.5">
                {featuredHotel.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-green-500 text-xs mt-0.5">✓</span>
                    <span className="text-xs" style={{ color: '#757575' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Best Alternative Options */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold" style={{ color: '#111111' }}>
              Best Alternative Options near you
            </h3>
            <button className="text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="6" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="12" cy="18" r="1.5" />
              </svg>
            </button>
          </div>

          {/* Alternative Items */}
          <div className="space-y-3">
            {alternatives.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 p-3 rounded-2xl"
                style={{
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                  border: '1px solid #F5F5F5'
                }}
              >
                {/* Image */}
                <div className="w-28 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col">
                  <h4 className="text-sm font-bold mb-0.5" style={{ color: '#111111' }}>
                    {item.name}
                  </h4>
                  <p className="text-xs mb-2" style={{ color: '#757575' }}>
                    {item.category}
                  </p>
                  <div className="flex items-center gap-2 mb-auto">
                    <span className="text-sm font-bold" style={{ color: '#111111' }}>
                      {item.priceRange}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <StyledButton variant="ghost" style={{ padding: '8px 12px', fontSize: 13, border: '1px solid #2196F3', color: '#2196F3' }}>View Details</StyledButton>
                    <StyledButton variant="primary" style={{ flex: 1, padding: '8px 12px', fontSize: 13 }}>Book This OYO</StyledButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelsPage
