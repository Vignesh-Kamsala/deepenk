import React, { useState, useRef, useEffect } from 'react'
import { BsMicFill } from 'react-icons/bs'

const FoodPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

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
    platform: 'Zomato',
    image: '🍖', // Placeholder - will be replaced with actual image
    badge: 'BEST MATCH',
    name: "Chicken kabab's",
    restaurant: 'Lotus Palace',
    price: '₹299',
    rating: '4.3',
    orderButton: 'Order in Zomato'
  }

  const alternatives = [
    {
      id: 1,
      image: '🍗',
      name: "Mutton kabab's",
      restaurant: 'Five star',
      price: '₹125',
      originalPrice: '₹200',
      rating: '4.1',
      platform: 'Swiggy'
    },
    {
      id: 2,
      image: '🍖',
      name: 'Chicken kabab',
      restaurant: '4 seasons',
      price: '₹149',
      originalPrice: '₹250',
      rating: '4.1',
      platform: 'Zomato'
    }
  ]

  const [cardQuery, setCardQuery] = useState('')
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
      {/* Search Bar - Fixed at top (header) */}
      <div ref={headerRef} className="fixed top-14 left-0 right-0 bg-white z-40 px-4 pt-3 pb-3 border-b border-gray-100">
        {/* Plus Button + Search Input */}
        <div className="flex items-center gap-3 mb-4">
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all active:scale-95"
            style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #E5E5E5', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
          >
            <span className="text-[24px]" style={{ color: '#757575' }}>+</span>
          </button>

          <div
            className="flex-1 flex items-center gap-3 px-4 py-3 rounded-full"
            style={{
              backgroundColor: '#F5F5F5',
              border: '1px solid #E5E5E5',
              boxShadow: '0 12px 30px rgba(0,0,0,0.06)'
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

        {/* Category Icons */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
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

        {/* Small query card inside fixed header */}
        <div className="w-full mt-2 px-2">
          <div className="w-full bg-white rounded-xl border border-black px-3 py-2 flex items-center" style={{borderRadius: 16}}>
            <input
              aria-label="Quick query"
              value={cardQuery}
              onChange={(e) => setCardQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-gray-500 min-w-0"
              placeholder="what type of biryani you need"
              style={{color: '#111', paddingLeft: 6}}
            />
            <button
              onClick={() => console.log('Food query:', cardQuery)}
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
      <div className="px-4" style={{ paddingTop: contentPadding }}>
        {/* Featured Dish Card - side-by-side like ShoppingPage */}
        <div className="rounded-2xl border border-gray-200 bg-white mb-6 shadow-md overflow-hidden flex flex-col w-full">
          <div className="flex flex-row gap-3 p-4 pb-0">
            <div className="flex-shrink-0 flex items-start justify-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="dish" className="w-24 h-20 object-contain rounded-xl border border-gray-200" />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-green-500 text-white text-[10px] font-bold rounded-full px-2 py-0.5">BEST MATCH</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 leading-tight">{featuredDish.name}</h3>
              <p className="text-xs text-gray-500">{featuredDish.restaurant}</p>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-bold text-gray-900">{featuredDish.price}</span>
                <span className="flex items-center gap-1 text-yellow-500 text-sm font-medium">⭐ {featuredDish.rating}</span>
              </div>
              <button className="w-full py-2.5 rounded-full flex items-center justify-center gap-2 transition-all active:scale-98 shadow-lg mt-1 mb-2" style={{ background: 'linear-gradient(90deg, #FF6F00 0%, #FF9900 100%)', boxShadow: '0 4px 16px 0 rgba(255,111,0,0.15)' }}>
                <span className="text-base font-bold text-white">{featuredDish.orderButton}</span>
                <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 p-3 bg-white w-full">
            <h4 className="text-xs font-bold mb-1 text-gray-900">DEEPENK INSIGHTS</h4>
            <div className="mb-1">
              <span className="block text-[11px] font-bold text-gray-900 mb-0.5">AI Review Summary</span>
              <span className="block text-[11px] text-gray-600">Most users say biryani is rich in flavor, well-spiced, and aromatic. Rice is long-grain and fluffy, meat is tender and juicy.</span>
            </div>
            <div className="mb-1">
              <span className="block text-[11px] font-bold text-gray-900 mb-0.5">Bundle Suggestion</span>
              <span className="block text-[11px] text-gray-600">Tumps-up + Franch Frice 20% off<br />CoCola 10% off</span>
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
                  style={{ backgroundColor: '#F5F5F5' }}
                >
                  <span className="text-4xl">{item.image}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold mb-0.5" style={{ color: '#111111' }}>
                    {item.name}
                  </h4>
                  <p className="text-xs mb-2" style={{ color: '#757575' }}>
                    {item.restaurant}
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
                      backgroundColor: item.platform === 'Swiggy' ? '#FC8019' : '#E23744'
                    }}
                  >
                    <span className="text-xs font-semibold text-white">
                      Order in {item.platform}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodPage
