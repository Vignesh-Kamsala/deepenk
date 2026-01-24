import React, { useState, useRef, useEffect } from 'react'
import { BsMicFill } from 'react-icons/bs'
import logoImg from '../../assets/sidebar/logo.png';
import SearchMapModal from '../common/SearchMapModal'

const ShoppingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const categories = [
    { id: 1, emoji: '📱', label: 'Mobiles' },
    { id: 2, emoji: '💻', label: 'Laptops' },
    { id: 3, emoji: '💄', label: 'Beauty' },
    { id: 4, emoji: '👗', label: 'Fashion' },
    { id: 5, emoji: '📺', label: 'Appliances' },
    { id: 6, emoji: '🧸', label: 'Toys' },
    { id: 7, emoji: '🏠', label: 'Home' },
    { id: 8, emoji: '🏏', label: 'sports' }
  ]

  const featuredProduct = {
    badge: 'BEST VALUE',
    name: 'Apple mac M3 Pro',
    seller: 'Lotus Palace',
    price: '₹129999',
    rating: '4.5',
    platform: 'Amazon'
  }

  const alternatives = [
    {
      id: 1,
      image: '💻',
      name: 'HP victus 3',
      seller: 'Reliance',
      price: '₹60000',
      originalPrice: '₹85000',
      rating: '4.1',
      platform: 'Flipkart'
    },
    {
      id: 2,
      image: '🖥️',
      name: 'HP victus 3',
      seller: 'Reliance',
      price: '₹60000',
      originalPrice: '₹85000',
      rating: '4.1',
      platform: 'Amazon'
    }
  ]

  const [cardQuery, setCardQuery] = useState('')
  const [showSearchModal, setShowSearchModal] = useState(false)
  const headerRef = useRef(null)
  const [contentPadding, setContentPadding] = useState(0)

  useEffect(() => {
    const calc = () => {
      if (headerRef.current) setContentPadding(headerRef.current.offsetHeight + 12)
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  return (
    <div className="min-h-screen bg-white pb-8">
      {/* Search Bar - Fixed at top below MobileHeader (fixed so it never scrolls) */}
      <div ref={headerRef} className="fixed top-14 left-0 right-0 bg-white z-40 px-4 pt-2 pb-3 border-b border-gray-200">
        {/* Plus Button + Search Input */}
        <div className="flex items-center gap-3 mb-3">
          <button
            className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200 bg-white"
            style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
          >
            <span className="text-2xl" style={{ color: '#757575' }}>+</span>
          </button>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setShowSearchModal(true)}
            className="flex-1 flex items-center gap-4 px-6 py-4 rounded-full border border-gray-200 bg-white"
            style={{ boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}
          >
            <input
              type="text"
              readOnly
              placeholder="Type brifely what you want"
              className="flex-1 outline-none text-[15px] bg-transparent cursor-pointer"
              style={{ color: '#111111' }}
            />
            <button className="flex-shrink-0">
              <BsMicFill className="text-[18px]" style={{ color: '#111111' }} />
            </button>
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-black"
            >
              <svg className="w-5 h-5" fill="none" stroke="#FFFFFF" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
        {/* Category Icons */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="flex-shrink-0 flex flex-col items-center gap-1 transition-all active:scale-95"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: selectedCategory === category.id ? '#FFF9E6' : '#F5F5F5',
                  border: selectedCategory === category.id ? '2px solid #FFD700' : '1px solid #E5E5E5'
                }}
              >
                <span className="text-lg">{category.emoji}</span>
              </div>
              <span className="text-[9px]" style={{ color: '#757575' }}>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Small query card inside fixed header so it's non-moving */}
        <div className="w-full mt-2 px-2">
          <div className="w-full bg-white rounded-xl border-2 border-black px-3 py-2 flex items-center" style={{borderRadius: 18}}>
            <input
              aria-label="Quick query"
              value={cardQuery}
              onChange={(e) => setCardQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-gray-500 min-w-0"
              placeholder="which type of loptop you need ?"
              style={{color: '#111', paddingLeft: 6}}
            />
            <button
              onClick={() => console.log('Query submitted:', cardQuery)}
              className="ml-3 flex items-center gap-2 bg-white border border-black px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-50"
            >
              <span>Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 8.25L18 12m0 0l-4.5 3.75M18 12H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Main Content - with top padding for fixed header (calculated) */}
      <div className="px-2" style={{ paddingTop: contentPadding }}>
        {/* Featured Product Card - Figma Style */}
        <div
          className="rounded-2xl border border-gray-300 bg-white mb-6 shadow-md overflow-hidden flex flex-col w-full"
          style={{ minHeight: '260px', position: 'relative' }}
        >
          {/* Top Section: Image and Info Side by Side */}
          <div className="flex flex-row gap-3 p-4 pb-0">
            {/* Image */}
            <div className="flex-shrink-0 flex items-start justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2721/2721269.png"
                alt="Laptop"
                className="w-20 h-16 object-contain rounded-xl border border-gray-200"
              />
            </div>
            {/* Info */}
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-green-500 text-white text-[10px] font-bold rounded-full px-2 py-0.5">BEST VALUE</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 leading-tight">Apple mac M3 Pro</h3>
              <p className="text-xs text-gray-500">Lotus Palace</p>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-bold text-gray-900">₹129999</span>
                <span className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  4.5
                </span>
              </div>
              <button
                className="w-full py-2.5 rounded-full flex items-center justify-center gap-2 transition-all active:scale-98 shadow-lg mt-1 mb-2"
                style={{ background: 'linear-gradient(90deg, #FF9900 0%, #FF6F00 100%)', boxShadow: '0 4px 16px 0 rgba(255, 111, 0, 0.15)' }}
              >
                <span className="text-base font-bold text-white">Order in Amazon</span>
                <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          {/* Insights Box - Full width */}
          <div className="border-t border-gray-200 p-3 bg-white w-full">
            <h4 className="text-xs font-bold mb-1 text-gray-900">DEEPENK INSIGHTS</h4>
            <div className="mb-1">
              <span className="block text-[11px] font-bold text-gray-900 mb-0.5">AI Review Summary</span>
              <span className="block text-[11px] text-gray-600">Apple M3 Pro is a powerful and efficient chip designed for professionals. It delivers high performance for tasks like video editing, coding, and design, with advanced graphics, fast processing, and excellent battery efficiency, making it ideal for demanding workflows.</span>
            </div>
            <div className="mb-1">
              <span className="block text-[11px] font-bold text-gray-900 mb-0.5">Bundle Suggestion</span>
              <span className="block text-[11px] text-gray-600">Apple Magic Keyboard with Touch ID & Numeric Keypad<br />Screen + Keyboard Protector Set – Keeps display discount ~20%</span>
            </div>
            <div className="mb-1">
              <span className="block text-[11px] font-bold text-gray-900 mb-0.5">Applied offers and Coupons</span>
              <ul className="list-disc ml-4 text-[11px] text-gray-600">
                <li>New-user coupon DE****6 applied</li>
                <li>SBI Credit Card applied</li>
                <li>Delivery fee waived</li>
              </ul>
            </div>
            <div>
              <span className="block text-[11px] font-bold text-gray-900 mb-0.5">Payment Suggestion</span>
              <ul className="list-disc ml-4 text-[11px] text-gray-600">
                <li>Paytm UPI → Get 20% cashback (₹40)</li>
                <li>PhonePe UPI → Scratch card rewards</li>
                <li>Google Pay → Instant ₹25 off</li>
              </ul>
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
                  style={{ backgroundColor: item.id === 1 ? '#8B4513' : '#F5F5F5' }}
                >
                  <span className="text-4xl">{item.image}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold mb-0.5" style={{ color: '#111111' }}>
                    {item.name}
                  </h4>
                  <p className="text-xs mb-2" style={{ color: '#757575' }}>
                    {item.seller}
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base font-bold" style={{ color: '#111111' }}>
                      {item.price}
                    </span>
                    <span className="text-xs line-through" style={{ color: '#BDBDBD' }}>
                      {item.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-yellow-500 text-sm">⭐</span>
                    <span className="text-xs font-medium" style={{ color: '#111111' }}>
                      {item.rating}
                    </span>
                  </div>

                  {/* Order Button */}
                  <button
                    className="px-4 py-2 rounded-full transition-all active:scale-95"
                    style={{
                      backgroundColor: item.platform === 'Flipkart' ? '#FFD700' : '#10B981',
                      color: item.platform === 'Flipkart' ? '#111111' : '#FFFFFF'
                    }}
                  >
                    <span className="text-xs font-semibold">
                      Order in {item.platform}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showSearchModal && (
        <SearchMapModal onClose={() => setShowSearchModal(false)} />
      )}
      {/* FooterNote now provided globally in Layout */}
    </div>
  )
}

export default ShoppingPage
