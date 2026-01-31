import React, { useState, useRef, useEffect } from 'react'
import { BsMicFill } from 'react-icons/bs'

const ShoppingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [cardQuery, setCardQuery] = useState('')
  const headerRef = useRef(null)
  const [contentPadding, setContentPadding] = useState(0)

  const categories = [
    { id: 1, emoji: '📱', label: 'Mobiles' },
    { id: 2, emoji: '💻', label: 'Laptops' },
    { id: 3, emoji: '💄', label: 'Beauty' },
    { id: 4, emoji: '👗', label: 'Fashion' },
    { id: 5, emoji: '📺', label: 'Appliances' },
    { id: 6, emoji: '🧸', label: 'Toys' },
    { id: 7, emoji: '🏠', label: 'Home' },
    { id: 8, emoji: '🏏', label: 'Sports' }
  ]

  const featuredProduct = {
    badge: 'BEST VALUE',
    name: 'Apple mac M3 Pro',
    seller: 'Lotus Palace',
    price: '₹129999',
    rating: '4.5',
    platform: 'Amazon',
    image: 'https://cdn-icons-png.flaticon.com/512/2721/2721269.png'
  }

  const alternatives = [
    {
      id: 1,
      image: 'https://cdn-icons-png.flaticon.com/512/2721/2721269.png',
      name: 'HP victus 3',
      seller: 'Reliance',
      price: '₹60000',
      originalPrice: '₹85000',
      rating: '4.1',
      platform: 'Flipkart'
    },
    {
      id: 2,
      image: 'https://cdn-icons-png.flaticon.com/512/2721/2721269.png',
      name: 'Dell Inspiron 15',
      seller: 'Croma',
      price: '₹55000',
      originalPrice: '₹75000',
      rating: '4.2',
      platform: 'Amazon'
    }
  ]

  const insights = [
    { title: 'AI Review Summary', content: 'Apple M3 Pro is a powerful and efficient chip designed for professionals. It delivers high performance for tasks like video editing, coding, and design.' },
    { title: 'Bundle Suggestion', content: 'Apple Magic Keyboard with Touch ID & Numeric Keypad. Screen + Keyboard Protector Set – 20% discount' },
    { title: '🎟️ Applied offers', items: ['New-user coupon DE****6 applied', 'SBI Credit Card applied', 'Delivery fee waived'] },
    { title: 'Payment Suggestion', items: ['Paytm UPI → Get 20% cashback (₹40)', 'PhonePe UPI → Scratch card rewards', 'Google Pay → Instant ₹25 off'] }
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
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto">
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
                  className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all ${selectedCategory === cat.id
                      ? 'bg-yellow-50 border-2 border-yellow-400'
                      : 'bg-gray-100 border border-gray-200'
                    }`}
                >
                  <span className="text-xl lg:text-2xl">{cat.emoji}</span>
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
          <h2 className="text-sm lg:text-base font-semibold text-gray-800 mb-3">Best Value Recommendation</h2>

          {/* Featured Product Card - Desktop: Side by Side */}
          <div className="bg-white rounded-2xl lg:rounded-3xl border-2 border-yellow-400 shadow-lg overflow-hidden mb-6">
            <div className="lg:flex">
              {/* Left: Product Info */}
              <div className="p-4 lg:p-6 lg:flex-1">
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="w-24 h-20 lg:w-32 lg:h-28 rounded-xl border border-gray-200 overflow-hidden flex-shrink-0">
                    <img src={featuredProduct.image} alt={featuredProduct.name} className="w-full h-full object-contain p-2" />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <span className="inline-block bg-green-500 text-white text-[10px] lg:text-xs font-bold px-2 py-0.5 rounded-full mb-2">
                      {featuredProduct.badge}
                    </span>
                    <h3 className="text-base lg:text-xl font-bold text-gray-900 mb-1">{featuredProduct.name}</h3>
                    <p className="text-xs lg:text-sm text-gray-500 mb-2">{featuredProduct.seller}</p>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl lg:text-2xl font-bold text-gray-900">{featuredProduct.price}</span>
                      <span className="flex items-center gap-1 text-yellow-500 text-sm">⭐ {featuredProduct.rating}</span>
                    </div>
                    <button
                      className="w-full lg:w-auto px-6 py-3 rounded-full text-white font-semibold text-sm lg:text-base shadow-lg"
                      style={{ background: 'linear-gradient(90deg, #FF9900 0%, #FF6F00 100%)' }}
                    >
                      Order in {featuredProduct.platform} →
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: Deepenk Insights */}
              <div className="border-t lg:border-t-0 lg:border-l border-gray-200 p-4 lg:p-6 lg:w-[400px] bg-gradient-to-b from-green-50 to-white lg:bg-white">
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
          <h3 className="text-sm lg:text-base font-bold text-gray-900 mb-3">Best Alternative Options</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {alternatives.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="w-20 h-16 lg:w-24 lg:h-20 rounded-xl border border-gray-200 overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
                    <p className="text-xs text-gray-500 mb-2">{item.seller}</p>
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

export default ShoppingPage
