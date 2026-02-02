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
    image: 'src/assets/shopping_image_1.png'
  }

  const alternatives = [
    {
      id: 1,
      image: 'src/assets/shopping_2.png',
      name: 'ASUS Vivobook 15',
      specs: '(16 GB/512 G SSD/Windows 11 Home)',
      rating: '4.5',
      features: [
        'Intel Core i7 Processor (13th Gen)',
        '16 GB DDR4 RAM',
        'Windows 11 Operating System'
      ],
      price: '₹40,190',
      originalPrice: '₹54,990',
      discount: '28% off',
      platform: 'Flipkart'
    },
    {
      id: 2,
      image: 'src/assets/shopping_3.png',
      name: 'Samsung Galaxy Book4',
      specs: '(8 GB/512 GB SSD/Windows 11 Home)',
      rating: '4.3',
      features: [
        'Intel Core i5 Processor (13th Gen)',
        '8 GB DDR4 RAM',
        'Windows 11 Operating System'
      ],
      price: '₹40,190',
      originalPrice: '₹54,990',
      discount: '28% off',
      platform: 'Flipkart'
    },
    {
      id: 3,
      image: 'src/assets/shopping_4.png',
      name: 'ASUS Vivobook S16 OLED',
      specs: '(16 GB/512 GB SSD/Windows 11 Home)',
      rating: '4.6',
      features: [
        'Qualcomm Snapdragon 8',
        '16 GB DDR4 RAM',
        'Windows 11 Operating System'
      ],
      price: '₹40,190',
      originalPrice: '₹54,990',
      discount: '28% off',
      platform: 'Flipkart'
    }
  ]

  const insights = [
    { 
      title: 'AI Review Summary', 
      content: 'Apple M3 Pro is a powerful and efficient chip designed for professionals. It delivers high performance for tasks like video editing, coding, and design, with advanced graphics, fast processing, and excellent battery efficiency, making it ideal for demanding workflows.' 
    },
    { 
      title: 'Bundle Suggestion', 
      content: 'Apple Magic Keyboard with Touch ID & Numeric Keypad Screen + Keyboard Protector Set – Keeps display – discount 20%' 
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
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <button className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xl lg:text-2xl text-gray-500">+</span>
            </button>
            <div className="flex-1 flex items-center gap-3 px-4 lg:px-6 py-3 lg:py-4 rounded-full bg-gray-100 border border-gray-200">
              <input
                type="text"
                placeholder="Type brifely what you want"
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

          {/* Featured Product Card */}
          <div className="bg-white rounded-2xl lg:rounded-3xl border border-gray-200 shadow-lg overflow-hidden mb-6">
            {/* Product Section - Side by Side Layout */}
            <div className="p-6 lg:p-8">
              <div className="flex gap-6">
                {/* Left: Large Product Image */}
                <div className="w-40 h-36 lg:w-56 lg:h-48 flex-shrink-0">
                  <img src={featuredProduct.image} alt={featuredProduct.name} className="w-full h-full object-contain" />
                </div>

                {/* Right: Product Details */}
                <div className="flex-1">
                  {/* Badge */}
                  <span className="inline-block bg-green-500 text-white text-[10px] lg:text-xs font-bold px-3 py-1 rounded-full mb-2">
                    {featuredProduct.badge}
                  </span>

                  {/* Product Name */}
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">{featuredProduct.name}</h3>
                  
                  {/* Seller */}
                  <p className="text-xs lg:text-sm text-gray-400 mb-2">{featuredProduct.seller}</p>
                  
                  {/* Price */}
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{featuredProduct.price}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    <span className="text-yellow-400 text-lg">★</span>
                    <span className="text-gray-700 font-medium">{featuredProduct.rating}</span>
                  </div>
                  
                  {/* Order Button */}
                  <button
                    className="px-6 py-2.5 rounded-full text-white font-semibold text-sm shadow-lg"
                    style={{ background: 'linear-gradient(90deg, #FF9900 0%, #FF6F00 100%)' }}
                  >
                    Order in {featuredProduct.platform}
                  </button>
                </div>
              </div>
            </div>

            {/* Deepenk Insights Section */}
            <div className="border-t border-gray-200 p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base lg:text-lg font-bold text-gray-900 tracking-wide">DEEPENK INSIGHTS</h4>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="5" r="2"/>
                    <circle cx="12" cy="12" r="2"/>
                    <circle cx="12" cy="19" r="2"/>
                  </svg>
                </button>
              </div>
              
              <div className="space-y-5">
                {insights.map((insight, idx) => (
                  <div key={idx}>
                    {/* Title with icon for Applied offers */}
                    <p className="text-sm font-bold text-gray-900 mb-1.5 flex items-center gap-2">
                      {insight.icon && <span>{insight.icon}</span>}
                      {insight.title}
                    </p>
                    
                    {/* Content text */}
                    {insight.content && (
                      <p className="text-xs lg:text-sm text-gray-500 leading-relaxed">{insight.content}</p>
                    )}
                    
                    {/* Bullet items for Applied offers */}
                    {insight.items && (
                      <ul className="text-xs lg:text-sm text-gray-600 space-y-1 mt-1">
                        {insight.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-orange-500 mt-0.5">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {/* Payment items with arrows */}
                    {insight.paymentItems && (
                      <div className="text-xs lg:text-sm text-gray-600 space-y-1 mt-1">
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
          <h3 className="text-sm lg:text-base font-bold text-gray-900 mb-3">Best Alternative Options near you</h3>
          <div className="flex flex-col gap-4">
            {alternatives.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-xl border border-gray-200 overflow-hidden flex-shrink-0 bg-gray-50">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-900 text-sm lg:text-base">{item.name}</h4>
                          <p className="text-[10px] lg:text-xs text-gray-500 mb-1">{item.specs}</p>
                          <span className="inline-block bg-yellow-400 text-black text-[10px] font-bold px-1.5 py-0.5 rounded mb-2">
                            {item.rating} ★
                          </span>
                        </div>

                        {/* Price Section */}
                        <div className="text-right flex-shrink-0">
                          <p className="text-lg lg:text-xl font-bold text-gray-900">{item.price}</p>
                          <p className="text-[10px] lg:text-xs text-gray-400 line-through">{item.originalPrice}</p>
                          <p className="text-[10px] lg:text-xs text-green-600 font-semibold">{item.discount}</p>
                        </div>
                      </div>

                      {/* Features List */}
                      <ul className="text-[10px] lg:text-xs text-gray-600 space-y-0.5">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-gray-400">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Order Button */}
                    <div className="flex justify-end mt-3">
                      <button
                        className="px-4 py-2 text-white text-xs font-semibold rounded-full shadow-md"
                        style={{ background: 'linear-gradient(90deg, #FF9900 0%, #FF6F00 100%)' }}
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
