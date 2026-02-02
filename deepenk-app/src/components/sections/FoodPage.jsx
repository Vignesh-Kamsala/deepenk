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
    badge: 'BEST VALUE',
    name: 'Dum Biryani',
    description: 'Dum style, rich spices, royal taste',
    price: '₹269',
    originalPrice: '₹299',
    rating: '4.8',
    platform: 'Swiggy',
    image: 'src/assets/food_1.png'
  }

  const alternatives = [
    {
      id: 1,
      image: 'src/assets/food_2.png',
      name: 'Lucknowi Biryani',
      restaurant: 'Paradise Resto',
      price: '₹200',
      originalPrice: '₹300',
      discount: '30% off',
      rating: '4.0',
      reviews: '5',
      platform: 'Swiggy'
    },
    {
      id: 2,
      image: 'src/assets/food_3.png',
      name: 'Lucknowi Biryani',
      restaurant: 'Paradise Resto',
      price: '₹200',
      originalPrice: '₹400',
      discount: '50% off',
      rating: '4.0',
      reviews: '5',
      platform: 'Swiggy'
    },
    {
      id: 3,
      image: 'src/assets/food_4.png',
      name: 'Lucknowi Biryani',
      restaurant: 'Paradise Resto',
      price: '₹280',
      originalPrice: '₹400',
      discount: '30% off',
      rating: '4.0',
      reviews: '5',
      platform: 'Swiggy'
    }
  ]

  const insights = [
    { 
      title: 'AI Review Summary', 
      content: 'Most users say biryani is rich in flavor, well-spiced, and aromatic. Rice is long-grain and fluffy, meat is tender and juicy.' 
    },
    { 
      title: 'Bundle Suggestion', 
      bundleItems: [
        '1) Biryani + Cool Drink + Dessert → Save ₹50',
        '2) Biryani + 1 Starter Combo → Best for 2 people'
      ]
    },
    { 
      title: 'Applied offers and Coupons', 
      icon: '🎟️',
      items: ['New-user coupon DE****6 applied', 'SBI Credit Card applied', 'Delivery fee waived'] 
    },
    { 
      title: 'Payment Suggestion', 
      paymentItems: [
        { name: 'Paytm UPI', offer: 'Get 20% cashback (₹40)' },
        { name: 'PhonePe UPI', offer: 'Scratch card rewards' },
        { name: 'Google Pay', offer: 'Instant ₹25 off' }
      ] 
    }
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
            <div className="flex-1 flex items-center gap-3 px-4 lg:px-6 py-3 lg:py-4 rounded-full bg-gray-100 border border-gray-200 shadow-lg">
              <input
                type="text"
                  placeholder="Type briefly what you want to eat"
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

          {/* Featured Dish Card */}
          <div className="bg-white rounded-2xl lg:rounded-3xl border border-gray-200 shadow-lg overflow-hidden mb-6">
            {/* Zomato Header */}
            <div className="flex items-center gap-2 px-4 pt-4">
              <span className="text-red-500 text-lg">🔖</span>
              <span className="text-red-500 font-bold text-sm">Zomato</span>
            </div>
            
            {/* Product Section - Side by Side Layout */}
            <div className="p-4 lg:p-6">
              <div className="flex gap-4">
                {/* Left: Large Product Image */}
                <div className="w-32 h-28 lg:w-44 lg:h-40 flex-shrink-0 rounded-xl overflow-hidden">
                  <img src={featuredDish.image} alt={featuredDish.name} className="w-full h-full object-cover" />
                </div>

                {/* Right: Product Details */}
                <div className="flex-1 ">
                  {/* Badge */}
                  <span className="inline-block bg-green-500 text-white text-[10px] lg:text-xs font-bold px-2 py-0.5 rounded-full mb-1">
                    {featuredDish.badge}
                  </span>

                  {/* Product Name */}
                  <h3 className="text-base lg:text-lg font-bold text-gray-900">{featuredDish.name}</h3>
                  
                  {/* Description */}
                  <p className="text-[10px] lg:text-xs text-gray-400 mb-2">{featuredDish.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <span className="bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-0.5">
                      {featuredDish.rating} ★
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl lg:text-2xl font-bold text-gray-900">{featuredDish.price}</span>
                    <span className="text-sm text-gray-400 line-through">{featuredDish.originalPrice}</span>
                  </div>
                  
                  {/* Order Button */}
                  <button
                    className="px-4 py-2 rounded-full text-white font-semibold text-xs shadow-md"
                    style={{ background: 'linear-gradient(90deg, #FF6F00 0%, #FF9900 100%)' }}
                  >
                    Order in {featuredDish.platform}
                  </button>
                </div>
              </div>
            </div>

            {/* Deepenk Insights Section */}
            <div className="border-t border-gray-200 p-4 lg:p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm lg:text-base font-bold text-gray-900 tracking-wide">DEEPENK INSIGHTS</h4>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="5" r="2"/>
                    <circle cx="12" cy="12" r="2"/>
                    <circle cx="12" cy="19" r="2"/>
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                {insights.map((insight, idx) => (
                  <div key={idx}>
                    {/* Title with icon for Applied offers */}
                    <p className="text-xs lg:text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">
                      {insight.icon && <span>{insight.icon}</span>}
                      {insight.title}
                    </p>
                    
                    {/* Content text */}
                    {insight.content && (
                      <p className="text-[10px] lg:text-xs text-gray-500 leading-relaxed">{insight.content}</p>
                    )}
                    
                    {/* Bundle items */}
                    {insight.bundleItems && (
                      <div className="text-[10px] lg:text-xs text-gray-500 space-y-0.5">
                        {insight.bundleItems.map((item, i) => (
                          <p key={i}>{item}</p>
                        ))}
                      </div>
                    )}
                    
                    {/* Bullet items for Applied offers */}
                    {insight.items && (
                      <ul className="text-[10px] lg:text-xs text-gray-600 space-y-1 mt-1">
                        {insight.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-gray-800 mt-0.5">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {/* Payment items with arrows */}
                    {insight.paymentItems && (
                      <div className="text-[10px] lg:text-xs text-gray-600 space-y-0.5">
                        {insight.paymentItems.map((item, i) => (
                          <p key={i}>
                            <span className="text-gray-800">{item.name}</span>
                            <span className="text-gray-400"> → </span>
                            <span className="text-gray-600">{item.offer}</span>
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Best Alternatives */}
          <h3 className="text-xs lg:text-sm font-bold text-gray-900 mb-3">Best Alternative Options near you</h3>
          <div className="flex flex-col gap-3">
            {alternatives.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-3">
                  <div className="w-20 h-16 lg:w-24 lg:h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                        <p className="text-[10px] text-gray-400">{item.restaurant}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900 text-sm">{item.price}</p>
                        <p className="text-[10px] text-gray-400 line-through">{item.originalPrice}</p>
                        <p className="text-[10px] text-green-600 font-medium">{item.discount}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1">
                        <span className="bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          {item.rating} ★
                        </span>
                        <span className="text-[10px] text-gray-400">/ {item.reviews}</span>
                      </div>
                      <button 
                        className="px-3 py-1.5 text-white text-[10px] font-semibold rounded-full"
                        style={{ background: 'linear-gradient(90deg, #FF6F00 0%, #FF9900 100%)' }}
                      >
                        Order in {item.platform}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-[9px] lg:text-[10px] text-gray-400 leading-relaxed">
              Note: This is a trial version, so results may be limited, optimized and not real data and<br/>
              Your feedback will help us improve the final product with better features.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodPage
