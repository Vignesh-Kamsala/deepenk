import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const FoodPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Fast Food', 'Restaurants', 'Desserts', 'Beverages']

  const restaurants = [
    { id: 1, name: 'Burger House', cuisine: 'Fast Food', rating: '4.5', time: '25-30 min', emoji: '🍔' },
    { id: 2, name: 'Pizza Palace', cuisine: 'Italian', rating: '4.7', time: '30-35 min', emoji: '🍕' },
    { id: 3, name: 'Sushi Bar', cuisine: 'Japanese', rating: '4.8', time: '35-40 min', emoji: '🍣' },
    { id: 4, name: 'Taco Stand', cuisine: 'Mexican', rating: '4.3', time: '20-25 min', emoji: '🌮' }
  ]

  return (
    <div className="min-h-screen bg-white px-4 pt-20 pb-8">
      {/* Page Title */}
      <h1
        className="text-[32px] font-bold mb-6"
        style={{ color: '#111111' }}
      >
        Food Delivery
      </h1>

      {/* Search Bar */}
      <div
        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-5"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <BsSearch className="text-base" style={{ color: '#BDBDBD' }} />
        <input
          type="text"
          placeholder="Search for restaurants or dishes..."
          className="flex-1 outline-none text-sm bg-transparent"
          style={{ color: '#111111' }}
        />
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className="px-4 py-2 rounded-full whitespace-nowrap transition-all active:scale-95"
            style={{
              backgroundColor: activeCategory === category ? '#FF6B35' : 'transparent',
              color: activeCategory === category ? '#FFFFFF' : '#757575',
              fontWeight: activeCategory === category ? '600' : '400',
              fontSize: '14px'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Restaurant List */}
      <div className="space-y-4">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="flex items-center gap-4 p-4 rounded-2xl transition-all active:scale-98"
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
              border: '1px solid #F5F5F5'
            }}
          >
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#FFF9E6' }}
            >
              <span className="text-3xl">{restaurant.emoji}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3
                className="text-base font-semibold mb-1"
                style={{ color: '#111111' }}
              >
                {restaurant.name}
              </h3>
              <p
                className="text-xs mb-1"
                style={{ color: '#757575' }}
              >
                {restaurant.cuisine}
              </p>
              <div className="flex items-center gap-3 text-xs" style={{ color: '#757575' }}>
                <span>⭐ {restaurant.rating}</span>
                <span>•</span>
                <span>{restaurant.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodPage
