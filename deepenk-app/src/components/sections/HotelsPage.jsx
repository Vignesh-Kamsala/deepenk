import React, { useState, useRef, useEffect } from 'react'
import { BsMicFill } from 'react-icons/bs'

const HERO_IMG = '../src/assets/Hotel Image Container.png'
const ALT_IMG = '../src/assets/Card Image (2).png'

const HotelsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const headerRef = useRef(null)
  const [contentPadding, setContentPadding] = useState(0)

  const categories = [
    { id: 1, emoji: '🏨', label: 'Hotels' },
    { id: 2, emoji: '⛵', label: 'Resort' },
    { id: 3, emoji: '🥤', label: 'Restaurants' },
    { id: 4, emoji: '🏙️', label: 'PG' }
  ]

  const featuredHotel = {
    badge: 'Best Choice',
    name: 'Seaview Grand Hotel',
    rating: '4.8',
    price: '₹499',
    image: HERO_IMG,
    amenities: ['📶 Free Wi-Fi', '🍳 Breakfast Included', '✅ Free Cancellation'],
    features: [
      'Excellent guest reviews',
      'Prime beachfront location',
      'Modern amenities & comfort',
      'All discounts & deals applied by Deepenk'
    ]
  }

  const alternatives = [
    { id: 1, name: 'City Comfort Inn', price: '₹899-₹1120', category: 'Budget-friendly', image: ALT_IMG },
    { id: 2, name: 'Grand Palace Hotel', price: '₹999-₹1500', category: 'Premium', image: ALT_IMG },
    { id: 3, name: 'Cozy Stay Suites', price: '₹750-₹1000', category: 'Family-friendly', image: ALT_IMG }
  ]

  useEffect(() => {
    const calc = () => {
      if (headerRef.current) setContentPadding(headerRef.current.offsetHeight + 16)
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  return (
    <div className="bg-gray-50 lg:bg-white pb-8">
      {/* Header - Fixed */}
      <div ref={headerRef} className="fixed top-14 lg:top-0 left-0 lg:left-[220px] right-0 bg-white z-30 px-4 lg:px-6 pt-3 lg:pt-5 pb-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="flex items-center gap-3 mb-4">
            <button className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center border border-gray-200 bg-white shadow-sm">
              <span className="text-xl lg:text-2xl text-gray-500">+</span>
            </button>
            <div className="flex-1 flex items-center gap-3 px-4 lg:px-6 py-3 lg:py-4 rounded-full bg-gray-100 border border-gray-200 shadow-lg">
              <input
                type="text"
                placeholder="Ask Deepenk"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none text-sm lg:text-base bg-transparent"
              />
              <BsMicFill className="text-gray-700" />
              <button className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-black flex items-center justify-center">
                <svg width="16" height="16" fill="none" stroke="#FFF" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-4">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 mb-1">Book Your Stay with Confidence</h2>
            <p className="text-xs lg:text-sm text-gray-500">Deepenk helps you find the best hotel by comparing price, comfort, reviews, and availability.</p>
          </div>

          {/* Categories */}
          <div className="flex gap-4 lg:gap-6 overflow-x-auto pb-2 scrollbar-hide justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className="flex-shrink-0 flex flex-col items-center gap-1.5"
              >
                <div
                  className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-all ${selectedCategory === cat.id
                      ? 'bg-green-50 border-2 border-green-500'
                      : 'bg-white border border-gray-200 shadow-sm'
                    }`}
                >
                  <span className="text-2xl lg:text-3xl">{cat.emoji}</span>
                </div>
                <span className="text-[10px] lg:text-xs text-gray-500">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Filters Row - Mobile */}
          <div className="lg:hidden">
            <div className="flex flex-wrap gap-2 mt-4">
              <input 
                type="text" 
                placeholder="Enter Destination" 
                className="flex-1 min-w-[145px] px-3 py-1.5 rounded-full border border-gray-300 text-[10px] outline-none placeholder:text-gray-700"
              />
              <input 
                type="text" 
                placeholder="Check-in: May 12" 
                className="w-[115px] px-3 py-1.5 rounded-full border border-gray-300 text-[9px] outline-none placeholder:text-gray-500"
              />
            </div>
            <div className="flex gap-2 mt-2">
              <input 
                type="text" 
                placeholder="Check-out: May 15" 
                className="flex-1 px-3 py-1.5 rounded-full border border-gray-300 text-[9px] outline-none placeholder:text-gray-500"
              />
              <button 
                className="px-4 py-1.5 rounded-full text-white font-medium text-[10px] whitespace-nowrap"
                style={{ background: 'linear-gradient(90deg, #FF6F00 0%, #FF9900 100%)' }}
              >
                Find Hotels &gt;
              </button>
            </div>
          </div>

          {/* Filters Row - Desktop: All 4 in one row */}
          <div className="hidden lg:flex lg:gap-3 lg:mt-4 lg:items-center">
            <input 
              type="text" 
              placeholder="Enter Destination" 
              className="flex-1 px-4 py-2.5 rounded-full border border-gray-300 text-sm outline-none placeholder:text-gray-700"
            />
            <input 
              type="text" 
              placeholder="Check-in: May 12" 
              className="w-[160px] px-4 py-2.5 rounded-full border border-gray-300 text-sm outline-none placeholder:text-gray-500"
            />
            <input 
              type="text" 
              placeholder="Check-out: May 15" 
              className="w-[160px] px-4 py-2.5 rounded-full border border-gray-300 text-sm outline-none placeholder:text-gray-500"
            />
            <button 
              className="px-6 py-2.5 rounded-full text-white font-medium text-sm whitespace-nowrap"
              style={{ background: 'linear-gradient(90deg, #FF6F00 0%, #FF9900 100%)' }}
            >
              Find Hotels &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 lg:px-6" style={{ paddingTop: contentPadding }}>
        <div className="max-w-6xl mx-auto">
          {/* Mobile: Stacked Layout */}
          <div className="lg:hidden">
            <div className="max-w-md mx-auto">
              {/* Featured Hotel Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
                {/* Image */}
                <div className="relative">
                  <img src={featuredHotel.image} alt={featuredHotel.name} className="w-full h-48 object-cover" />
                </div>

                {/* Details */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{featuredHotel.name}</h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4].map(s => (
                      <span key={s} className="text-orange-400 text-sm">★</span>
                    ))}
                    <span className="text-gray-300 text-sm">★</span>
                    <span className="font-semibold text-gray-900 text-sm ml-1">{featuredHotel.rating}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-2xl font-bold text-gray-900">{featuredHotel.price}</span>
                    <span className="text-gray-500 text-sm">/ night</span>
                  </div>

                  {/* Amenities */}
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">📶</span>
                      <span className="text-xs text-gray-600">Free Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🍳</span>
                      <span className="text-xs text-gray-600">Breakfast Included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">✅</span>
                      <span className="text-xs text-gray-600">Free Cancellation</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">This hotel offers the best overall value for your stay right now.</p>

                  {/* Book Button */}
                  <button
                    className="w-full py-3 rounded-full text-white font-semibold shadow-lg text-sm"
                    style={{ background: 'linear-gradient(90deg, #FF6F00 0%, #FF9900 100%)' }}
                  >
                    Book This Stay
                  </button>
                </div>
              </div>

              {/* Why This Hotel */}
              <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
                <h4 className="text-sm font-bold text-gray-900 mb-3">Why This Hotel Works for You</h4>
                <div className="space-y-2">
                  {featuredHotel.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-green-500 text-sm mt-0.5">✓</span>
                      <span className="text-xs text-gray-600 leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alternatives */}
              <h3 className="text-sm font-bold text-gray-900 mb-3">Best Alternative Options near you</h3>
              <div className="space-y-3">
                {alternatives.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm flex">
                    {/* Image */}
                    <div className="w-28 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1 p-3 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">{item.name}</h4>
                        <p className="text-xs font-semibold text-gray-900 mb-1">{item.price}</p>
                        <p className="text-[10px] text-gray-500">{item.category}</p>
                      </div>
                      
                      <div className="flex gap-2 mt-2">
                        <button className="flex-1 py-1.5 text-[10px] font-medium border border-blue-500 text-blue-500 rounded-full">View Details</button>
                        <button 
                          className="flex-1 py-1.5 text-[10px] font-medium text-white rounded-full"
                          style={{ background: 'linear-gradient(90deg, #FF6F00 0%, #FF9900 100%)' }}
                        >
                          Book This OYO
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="text-[10px] text-gray-500">Note: This is a trial version. Your feedback will help us improve.</p>
                <button className="mt-2 px-6 py-2 text-xs font-medium border border-gray-300 rounded-full hover:bg-gray-50">Feedback</button>
              </div>
            </div>
          </div>

          {/* Desktop: Stacked Layout */}
          <div className="hidden lg:block max-w-4xl mx-auto">
            {/* Featured Hotel Card - Image and Content Side by Side */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex">
              {/* Image - Left side with badge */}
              <div className="w-[240px] flex-shrink-0 p-4 relative">
                <span className="absolute top-6 left-6 bg-orange-500 text-white text-sm font-medium px-3 py-1.5 rounded z-10">Best Choice</span>
                <img src={featuredHotel.image} alt={featuredHotel.name} className="w-full h-[220px] object-cover rounded-xl" />
              </div>

              {/* Details - Right side */}
              <div className="flex-1 py-5 pr-6 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{featuredHotel.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map(s => (
                    <span key={s} className="text-gray-300 text-lg">★</span>
                  ))}
                  <span className="font-medium text-gray-900 text-lg ml-2">{featuredHotel.rating}</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-gray-900">{featuredHotel.price}</span>
                  <span className="text-gray-500 text-lg">/ night</span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-x-6 mb-4 text-base text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-500">📶</span> Free Wi-Fi
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span>🍳</span> Breakfast Included
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-green-500">✅</span> Free Cancellation
                  </span>
                </div>

                {/* Description */}
                <p className="text-base text-orange-500 mb-5 leading-relaxed">This hotel offers the best overall value for your stay right now.</p>

                {/* Book Button */}
                <button
                  className="w-full py-4 rounded-full text-white font-semibold text-lg"
                  style={{ background: 'linear-gradient(90deg, #FF6F00 0%, #FF9900 100%)' }}
                >
                  Book This Stay
                </button>
              </div>
            </div>

            {/* Why This Hotel - Below featured card */}
            <div className="mt-10">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why This Hotel Works for You</h4>
              <div className="space-y-3">
                {featuredHotel.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-green-500 text-lg mt-0.5">✓</span>
                    <span className="text-base text-gray-600 leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Alternatives - Below why this hotel */}
            <div className="mt-10">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-gray-900">Best Alternative Options near you</h3>
                <span className="text-gray-400 text-xl">•••</span>
              </div>
              <div className="space-y-4">
                {alternatives.map((item) => (
                  <div key={item.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm flex items-center p-4 gap-4">
                    {/* Image */}
                    <div className="w-[160px] flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-[110px] object-cover rounded-lg" />
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-lg mb-1.5">{item.name}</h4>
                      <p className="text-base font-bold text-gray-900 mb-1">{item.price}</p>
                      <p className="text-sm text-gray-400 mb-3">{item.category}</p>
                      <button className="text-sm font-medium border border-blue-500 text-blue-500 rounded px-4 py-1.5">View Details</button>
                    </div>

                    {/* Button */}
                    <div className="flex-shrink-0">
                      <button 
                        className="py-3 px-6 text-base font-semibold text-white rounded-full whitespace-nowrap"
                        style={{ background: 'linear-gradient(90deg, #FF6F00 0%, #FF9900 100%)' }}
                      >
                        Book This OYO
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-400 leading-relaxed">Note: This is a trial version, so results may be limited, optimized and not real data. Your<br />feedback will help us improve the final product with better options.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelsPage
