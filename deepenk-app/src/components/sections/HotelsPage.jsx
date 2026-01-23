import React, { useState } from 'react'
import { BsMicFill } from 'react-icons/bs'

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
      'Excellent guest ratings',
      'Prime beachfront location',
      'Modern amenities & comfort',
      'AI-discounts & deals applied by Deepenk'
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
        {/* Plus Button + Search Input */}
        <div className="flex items-center gap-3 mb-4">
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all active:scale-95"
            style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #E5E5E5' }}
          >
            <span className="text-[24px]" style={{ color: '#757575' }}>+</span>
          </button>

          <div
            className="flex-1 flex items-center gap-3 px-4 py-3 rounded-full"
            style={{
              backgroundColor: '#F5F5F5',
              border: '1px solid #E5E5E5'
            }}
          >
            <input
              type="text"
              placeholder="Ask Deepenk"
              className="flex-1 outline-none text-[15px] bg-transparent"
              style={{ color: '#111111' }}
            />
            <button className="flex-shrink-0">
              <BsMicFill className="text-[18px]" style={{ color: '#111111' }} />
            </button>
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#000000' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="#FFFFFF" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Header Text */}
        <div className="mb-3">
          <h2 className="text-base font-bold mb-1" style={{ color: '#111111' }}>
            Book Your Stay with Confidence
          </h2>
          <p className="text-xs leading-relaxed" style={{ color: '#757575' }}>
            Deepenk helps you find the best hotel by comparing price, comfort, reviews, and availability.
          </p>
        </div>

        {/* Category Icons */}
        <div className="flex gap-3 mb-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="flex-shrink-0 flex flex-col items-center gap-1 transition-all active:scale-95"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: selectedCategory === category.id ? '#FFF9E6' : '#F5F5F5',
                  border: selectedCategory === category.id ? '2px solid #FFD700' : '1px solid #E5E5E5'
                }}
              >
                <span className="text-2xl">{category.emoji}</span>
              </div>
              <span className="text-[10px]" style={{ color: '#757575' }}>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-3">
          <button
            className="px-4 py-2 rounded-full transition-all active:scale-95"
            style={{ backgroundColor: '#E5E5E5', color: '#111111' }}
          >
            <span className="text-xs font-medium">Enter Destination</span>
          </button>
          <button
            className="px-4 py-2 rounded-full transition-all active:scale-95"
            style={{ backgroundColor: '#E5E5E5', color: '#111111' }}
          >
            <span className="text-xs font-medium">Check-in: May 12</span>
          </button>
        </div>

        <div className="flex gap-2 mb-3">
          <button
            className="px-4 py-2 rounded-full transition-all active:scale-95"
            style={{ backgroundColor: '#E5E5E5', color: '#111111' }}
          >
            <span className="text-xs font-medium">Check-out: May 15</span>
          </button>
          <button
            className="px-4 py-2 rounded-full transition-all active:scale-95"
            style={{ backgroundColor: '#FF6F00', color: '#FFFFFF' }}
          >
            <span className="text-xs font-semibold">Find Hotels →</span>
          </button>
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
            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-orange-500 text-sm">⭐</span>
              ))}
              <span className="text-sm font-semibold ml-1" style={{ color: '#111111' }}>4.8</span>
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
            <button
              className="w-full py-3 rounded-full transition-all active:scale-98 mb-4"
              style={{ backgroundColor: '#FF6F00' }}
            >
              <span className="text-sm font-semibold text-white">Book This Stay</span>
            </button>

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
                    <button
                      className="px-3 py-1.5 rounded-full transition-all active:scale-95"
                      style={{
                        backgroundColor: 'transparent',
                        border: '1px solid #2196F3',
                        color: '#2196F3'
                      }}
                    >
                      <span className="text-xs font-medium">View Details</span>
                    </button>
                    <button
                      className="flex-1 px-3 py-1.5 rounded-full transition-all active:scale-95"
                      style={{ backgroundColor: '#FF6F00' }}
                    >
                      <span className="text-xs font-semibold text-white">Book This OYO</span>
                    </button>
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
