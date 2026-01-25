import React, { useState } from 'react'
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
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <StyledButton variant="circle" aria-label="plus">+</StyledButton>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, background: COLORS.inputBg, padding: '12px 16px', borderRadius: 999, border: `1px solid ${COLORS.border}` }}>
        <input placeholder="Ask Deepenk" style={{ flex: 1, border: 'none', outline: 'none', fontSize: 15, color: COLORS.text, background: 'transparent' }} />
        <button aria-label="mic" style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><BsMicFill style={{ color: COLORS.text, fontSize: 18 }} /></button>
        <button aria-label="send" onClick={onSend} style={{ width: 36, height: 36, borderRadius: 999, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
          <svg className="w-4 h-4" fill="none" stroke="#FFFFFF" viewBox="0 0 24 24" strokeWidth={2.5} width="16" height="16">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}

const HotelsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

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
    amenities: [
      { icon: '📶', text: 'Free Wi-Fi' },
      { icon: '🍳', text: 'Breakfast Included' },
      { icon: '❌', text: 'Free Cancellation' }
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
      category: 'Budget-friendly'
    },
    {
      id: 2,
      name: 'City Comfort Inn',
      priceRange: '₹999-₹1120',
      category: 'Budget-friendly'
    },
    {
      id: 3,
      name: 'City Comfort Inn',
      priceRange: '₹1120-₹1210',
      category: 'Budget-friendly'
    }
  ]

  return (
    <div className="min-h-screen bg-white pb-8">
      {/* Search Bar - Fixed at top */}
      <div className="fixed top-16 left-0 right-0 bg-white z-30 px-4 pt-4 pb-3">
        <div className="mb-4">
          <SearchBar onSend={() => {}} />
        </div>

        {/* Header Text */}
        <div className="mb-3">
          <h2 className="text-base font-bold mb-1" style={{ color: COLORS.text }}>
            Book Your Stay with Confidence
          </h2>
          <p className="text-xs leading-relaxed" style={{ color: COLORS.muted }}>
            Deepenk helps you find the best hotel by comparing price, comfort, reviews, and availability.
          </p>
        </div>

        {/* Category Icons */}
        <div className="flex gap-3 mb-3 overflow-x-auto pb-2" style={{ WebkitOverflowScrolling: 'touch' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="flex-shrink-0 flex flex-col items-center gap-1 transition-all active:scale-95"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: selectedCategory === category.id ? '#FFF9E6' : COLORS.inputBg,
                  border: selectedCategory === category.id ? '2px solid #FFD700' : `1px solid ${COLORS.border}`
                }}
              >
                <span className="text-2xl">{category.emoji}</span>
              </div>
              <span className="text-[10px]" style={{ color: COLORS.muted }}>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-3">
          <StyledButton style={{ padding: '8px 14px', fontSize: 13 }}>Enter Destination</StyledButton>
          <StyledButton style={{ padding: '8px 14px', fontSize: 13 }}>Check-in: May 12</StyledButton>
        </div>

        <div className="flex gap-2 mb-3">
          <StyledButton style={{ padding: '8px 14px', fontSize: 13 }}>Check-out: May 15</StyledButton>
          <StyledButton variant="primary" style={{ padding: '8px 16px', fontSize: 13 }}>Find Hotels →</StyledButton>
        </div>
      </div>

      {/* Main Content - with top padding for fixed header */}
      <div className="px-4" style={{ paddingTop: '340px' }}>
        {/* Featured Hotel Card */}
        <div
          className="rounded-3xl overflow-hidden mb-6"
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            border: '1px solid #F0F0F0'
          }}
        >
          {/* Image Section */}
          <div className="relative">
            <div
              className="w-full h-56 flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4C1 100%)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Luxury hotel lobby placeholder */}
              <div className="text-7xl">🏨</div>
            </div>

            {/* Best Choice Badge */}
            <div
              className="absolute top-3 left-3 px-2.5 py-1 rounded-full"
              style={{ backgroundColor: '#10B981' }}
            >
              <span className="text-[10px] font-bold text-white">Best Choice</span>
            </div>
          </div>

          {/* Hotel Info */}
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#111111' }}>
              Seaview Grand Hotel
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill="#FF6F00" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.79 1.402 8.175L12 18.896l-7.336 3.88 1.402-8.175L.132 9.211l8.2-1.193z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold" style={{ color: '#111111' }}>{featuredHotel.rating}</span>
              <span className="text-xs" style={{ color: '#757575' }}>({featuredHotel.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-3">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold" style={{ color: '#111111' }}>₹499</span>
                <span className="text-sm" style={{ color: '#757575' }}>/night</span>
              </div>
            </div>

            {/* Amenities */}
            <div className="space-y-2 mb-4">
              {featuredHotel.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-base">{amenity.icon}</span>
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
                <div
                  className="w-24 h-24 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #4A4A4A 0%, #2C2C2C 100%)'
                  }}
                >
                  <span className="text-4xl">🛏️</span>
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
