import React, { useState } from 'react'
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
      </div>

      {/* Main Content - with top padding for fixed header */}
      <div className="px-4 pt-44">
        {/* Featured Dish Card */}
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
              className="w-full h-48 flex items-center justify-center"
              style={{ backgroundColor: '#F5F5F5' }}
            >
              <span className="text-6xl">🍖</span>
            </div>

            {/* Platform Badge */}
            <div
              className="absolute top-3 left-3 px-2 py-1 rounded flex items-center gap-1"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
            >
              <span className="text-xs font-bold" style={{ color: '#E23744' }}>Zomato</span>
            </div>

            {/* Best Match Badge */}
            <div
              className="absolute top-3 right-3 px-2.5 py-1 rounded-full"
              style={{ backgroundColor: '#10B981' }}
            >
              <span className="text-[10px] font-bold text-white">BEST MATCH</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-0.5" style={{ color: '#111111' }}>
                  Chicken kabab's
                </h3>
                <p className="text-sm mb-2" style={{ color: '#757575' }}>
                  Lotus Palace
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold" style={{ color: '#111111' }}>₹299</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-medium" style={{ color: '#111111' }}>4.3</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Button */}
            <button
              className="w-full py-3 rounded-full flex items-center justify-center gap-2 transition-all active:scale-98"
              style={{ backgroundColor: '#E23744' }}
            >
              <span className="text-sm font-semibold text-white">Order in Zomato</span>
              <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Deepenk Insights Section */}
          <div
            className="px-4 pb-4"
            style={{ borderTop: '1px solid #F0F0F0' }}
          >
            <div className="flex items-center justify-between pt-4 mb-3">
              <h4 className="text-sm font-bold" style={{ color: '#111111' }}>
                DEEPENK INSIGHTS
              </h4>
              <button className="text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="6" r="1.5" />
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="12" cy="18" r="1.5" />
                </svg>
              </button>
            </div>

            {/* AI Review Summary */}
            <div className="mb-3">
              <h5 className="text-xs font-bold mb-1" style={{ color: '#111111' }}>
                AI Review Summary
              </h5>
              <p className="text-[11px] leading-relaxed" style={{ color: '#757575' }}>
                Most users say biryani is rich in flavor, well-spiced, and aromatic.
                Rice is long-grain and fluffy, meat is tender and juicy.
              </p>
            </div>

            {/* Bundle Suggestion */}
            <div className="mb-3">
              <h5 className="text-xs font-bold mb-1" style={{ color: '#111111' }}>
                Bundle Suggestion
              </h5>
              <p className="text-[11px]" style={{ color: '#757575' }}>
                Tumps-up + Franch Frice 20% off<br />
                CoCola 10% off
              </p>
            </div>

            {/* Applied Offers */}
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm">💳</span>
                <h5 className="text-xs font-bold" style={{ color: '#111111' }}>
                  Applied offers and Coupons
                </h5>
              </div>
              <ul className="space-y-0.5 ml-6">
                <li className="text-[11px]" style={{ color: '#757575' }}>
                  • New-user coupon DE****6 applied
                </li>
                <li className="text-[11px]" style={{ color: '#757575' }}>
                  • SBI Credit Card applied
                </li>
                <li className="text-[11px]" style={{ color: '#757575' }}>
                  • Delivery fee waived
                </li>
              </ul>
            </div>

            {/* Payment Suggestion */}
            <div>
              <h5 className="text-xs font-bold mb-1" style={{ color: '#111111' }}>
                Payment Suggestion
              </h5>
              <ul className="space-y-0.5">
                <li className="text-[11px]" style={{ color: '#757575' }}>
                  Paytm UPI → Get 20% cashback (₹40)
                </li>
                <li className="text-[11px]" style={{ color: '#757575' }}>
                  PhonePe UPI → Scratch card rewards
                </li>
                <li className="text-[11px]" style={{ color: '#757575' }}>
                  Google Pay → Instant ₹25 off
                </li>
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
