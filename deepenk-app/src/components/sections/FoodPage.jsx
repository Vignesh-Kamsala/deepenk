import React, { useState, useRef, useEffect } from 'react'
import { BsMicFill } from 'react-icons/bs'

const FoodPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const headerRef = useRef(null)
  const [contentPadding, setContentPadding] = useState(0)

  const categories = [
    { id: 1, emoji: '🥗', label: 'Salad' },
    { id: 2, emoji: '🍔', label: 'Burger' },
    { id: 3, emoji: '🍜', label: 'Noodles' },
    { id: 4, emoji: '🍰', label: 'Dessert' },
    { id: 5, emoji: '🍕', label: 'Pizza' },
    { id: 6, emoji: '🍱', label: 'Bento' },
    { id: 7, emoji: '🥘', label: 'Curry' },
    { id: 8, emoji: '🍗', label: 'Chicken' }
  ]

  const featuredDish = {
    badge: 'BEST MATCH',
    name: "Chicken Kabab's",
    restaurant: 'Lotus Palace',
    price: '₹299',
    rating: '4.3',
    platform: 'Zomato',
    image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png'
  }

  const alternatives = [
    {
      id: 1,
      image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
      name: "Mutton Kabab's",
      restaurant: 'Five Star',
      price: '₹125',
      originalPrice: '₹200',
      rating: '4.1',
      platform: 'Swiggy'
    },
    {
      id: 2,
      image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
      name: 'Chicken Biryani',
      restaurant: '4 Seasons',
      price: '₹149',
      originalPrice: '₹250',
      rating: '4.2',
      platform: 'Zomato'
    }
  ]

  const insights = [
    { title: 'AI Review Summary', content: 'Most users say this dish is rich in flavor, well-spiced, and aromatic. Meat is tender and juicy with authentic taste.' },
    { title: 'Bundle Suggestion', content: 'Thums-up + French Fries 20% off. Coca-Cola 10% off' },
    { title: '🎟️ Applied offers', items: ['New-user coupon DE****6 applied', 'SBI Credit Card applied', 'Delivery fee waived'] },
    { title: 'Payment Suggestion', items: ['Paytm UPI → Get 20% cashback', 'PhonePe UPI → Scratch card rewards', 'Google Pay → Instant ₹25 off'] }
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
      <div ref={headerRef} className="fixed top-14 lg:top-0 left-0 lg:left-[220px] right-0 bg-white z-40 px-4 lg:px-6 pt-3 lg:pt-5 pb-3 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="flex items-center gap-3 mb-4">
            <button className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
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

          {/* Categories */}
          <div className="flex gap-3 lg:gap-4 overflow-x-auto pb-2 scrollbar-hide lg:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className="flex-shrink-0 flex flex-col items-center gap-1.5 transition-all"
              >
                <div
                  className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all ${selectedCategory === cat.id
                      ? 'bg-orange-50 border-2 border-orange-400'
                      : 'bg-gray-100 border border-gray-200'
                    }`}
                >
                  <span className="text-2xl lg:text-3xl">{cat.emoji}</span>
                </div>
                <span className="text-[10px] lg:text-xs text-gray-500">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 lg:px-6" style={{ paddingTop: contentPadding }}>
        <div className="max-w-5xl mx-auto">
          {/* Best Value Label */}
          <h2 className="text-sm lg:text-base font-semibold text-gray-800 mb-3">Best Value Meal Recommendation</h2>

          {/* Featured Dish Card - Desktop: Side by Side */}
          <div className="bg-white rounded-2xl lg:rounded-3xl border-2 border-orange-400 shadow-lg overflow-hidden mb-6">
            <div className="lg:flex">
              {/* Left: Dish Info */}
              <div className="p-4 lg:p-6 lg:flex-1">
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="w-24 h-20 lg:w-32 lg:h-28 rounded-xl border border-gray-200 overflow-hidden flex-shrink-0 bg-orange-50">
                    <img src={featuredDish.image} alt={featuredDish.name} className="w-full h-full object-contain p-2" />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <span className="inline-block bg-green-500 text-white text-[10px] lg:text-xs font-bold px-2 py-0.5 rounded-full mb-2">
                      {featuredDish.badge}
                    </span>
                    <h3 className="text-base lg:text-xl font-bold text-gray-900 mb-1">{featuredDish.name}</h3>
                    <p className="text-xs lg:text-sm text-gray-500 mb-2">{featuredDish.restaurant}</p>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl lg:text-2xl font-bold text-gray-900">{featuredDish.price}</span>
                      <span className="flex items-center gap-1 text-yellow-500 text-sm">⭐ {featuredDish.rating}</span>
                    </div>
                    <button
                      className="w-full lg:w-auto px-6 py-3 rounded-full text-white font-semibold text-sm lg:text-base shadow-lg"
                      style={{ background: 'linear-gradient(90deg, #FF6F00 0%, #FF9900 100%)' }}
                    >
                      Order in {featuredDish.platform} →
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: Deepenk Insights */}
              <div className="border-t lg:border-t-0 lg:border-l border-gray-200 p-4 lg:p-6 lg:w-[400px] bg-gradient-to-b from-orange-50 to-white lg:bg-white">
                <h4 className="text-sm lg:text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-orange-500">💡</span> DEEPENK INSIGHTS
                </h4>
                <div className="space-y-3">
                  {insights.map((insight, idx) => (
                    <div key={idx}>
                      <p className="text-xs lg:text-sm font-semibold text-gray-800 mb-1">{insight.title}</p>
                      {insight.content && (
                        <p className="text-xs lg:text-sm text-gray-600">{insight.content}</p>
                      )}
                      {insight.items && (
                        <ul className="text-xs lg:text-sm text-gray-600 space-y-0.5">
                          {insight.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-green-500">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Best Alternatives */}
          <h3 className="text-sm lg:text-base font-bold text-gray-900 mb-3">Best Alternative Options near you</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {alternatives.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="w-20 h-16 lg:w-24 lg:h-20 rounded-xl border border-gray-200 overflow-hidden flex-shrink-0 bg-orange-50">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
                    <p className="text-xs text-gray-500 mb-2">{item.restaurant}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-gray-900">{item.price}</span>
                      <span className="text-xs text-gray-400 line-through">{item.originalPrice}</span>
                      <span className="text-xs text-yellow-500">⭐ {item.rating}</span>
                    </div>
                    <button className="px-4 py-2 bg-orange-500 text-white text-xs font-semibold rounded-full">
                      Order in {item.platform}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-[10px] lg:text-xs text-gray-500">
              Note: This is a trial version. Your feedback will help us improve.
            </p>
            <button className="mt-2 px-6 py-2 text-xs font-medium border border-gray-300 rounded-full hover:bg-gray-50">
              Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodPage
