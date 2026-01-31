import React, { useState, useRef, useEffect } from 'react'
import { BsMicFill } from 'react-icons/bs'

const HERO_IMG = 'https://images.unsplash.com/photo-1501117716987-c8e1ecb210af?auto=format&fit=crop&w=1200&q=80'
const ALT_IMG = 'https://images.unsplash.com/photo-1509057199576-632a47484ece?auto=format&fit=crop&w=800&q=80'

const HotelsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const headerRef = useRef(null)
  const [contentPadding, setContentPadding] = useState(0)

  const categories = [
    { id: 1, emoji: '🏨', label: 'Hotels' },
    { id: 2, emoji: '🏖️', label: 'Resort' },
    { id: 3, emoji: '🍽️', label: 'Restaurants' },
    { id: 4, emoji: '🅿️', label: 'PG' }
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
    <div className="min-h-screen bg-gray-50 lg:bg-white pb-8">
      {/* Header - Fixed */}
      <div ref={headerRef} className="fixed top-14 lg:top-0 left-0 lg:left-[220px] right-0 bg-white z-40 px-4 lg:px-6 pt-3 lg:pt-5 pb-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="flex items-center gap-3 mb-4">
            <button className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center border border-gray-200 bg-white shadow-sm">
              <span className="text-xl lg:text-2xl text-gray-500">+</span>
            </button>
            <div className="flex-1 flex items-center gap-3 px-4 lg:px-6 py-3 lg:py-4 rounded-full bg-gray-100 border border-gray-200">
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

          {/* Filters Row - Desktop */}
          <div className="hidden lg:flex items-center gap-3 mt-4">
            <input type="text" placeholder="Enter Destination" className="flex-1 px-4 py-3 rounded-full bg-gray-100 border border-gray-200 text-sm outline-none" />
            <input type="text" placeholder="Check-in: May 12" className="w-40 px-4 py-3 rounded-full bg-gray-100 border border-gray-200 text-sm outline-none" />
            <input type="text" placeholder="Check-out: May 15" className="w-40 px-4 py-3 rounded-full bg-gray-100 border border-gray-200 text-sm outline-none" />
            <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full text-sm">Find Hotels →</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 lg:px-6" style={{ paddingTop: contentPadding }}>
        <div className="max-w-5xl mx-auto">
          {/* Featured Hotel Card */}
          <div className="bg-white rounded-2xl lg:rounded-3xl border-2 border-blue-400 shadow-lg overflow-hidden mb-6">
            <div className="lg:flex">
              {/* Image */}
              <div className="relative lg:w-2/5 lg:flex-shrink-0">
                <img src={featuredHotel.image} alt={featuredHotel.name} className="w-full h-56 lg:h-full object-cover" />
                <span className="absolute top-3 left-3 bg-green-500 text-white text-[10px] lg:text-xs font-bold px-3 py-1 rounded-full">
                  {featuredHotel.badge}
                </span>
              </div>

              {/* Details */}
              <div className="p-4 lg:p-6 lg:flex-1">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{featuredHotel.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-orange-400">★</span>)}
                  </div>
                  <span className="font-semibold text-gray-900">{featuredHotel.rating}</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl lg:text-3xl font-bold text-gray-900">{featuredHotel.price}</span>
                  <span className="text-gray-500">/night</span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {featuredHotel.amenities.map((a, i) => (
                    <span key={i} className="text-xs lg:text-sm text-gray-600">{a}</span>
                  ))}
                </div>

                {/* Book Button */}
                <button
                  className="w-full py-3 rounded-full text-white font-semibold shadow-lg"
                  style={{ background: 'linear-gradient(90deg, #FF6F00 0%, #FF9900 100%)' }}
                >
                  Book This Stay
                </button>
              </div>
            </div>
          </div>

          {/* Why This Hotel */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6 mb-6 shadow-sm">
            <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-3">Why This Hotel Works for You</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {featuredHotel.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alternatives */}
          <h3 className="text-sm lg:text-base font-bold text-gray-900 mb-3">Best Alternative Options near you</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {alternatives.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={item.image} alt={item.name} className="w-full h-32 lg:h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
                  <p className="text-xs text-gray-500 mb-2">{item.category}</p>
                  <p className="font-bold text-gray-900 mb-3">{item.price}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 text-xs font-medium border border-blue-500 text-blue-500 rounded-full">View Details</button>
                    <button className="flex-1 py-2 text-xs font-medium bg-orange-500 text-white rounded-full">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-[10px] lg:text-xs text-gray-500">Note: This is a trial version. Your feedback will help us improve.</p>
            <button className="mt-2 px-6 py-2 text-xs font-medium border border-gray-300 rounded-full hover:bg-gray-50">Feedback</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelsPage
