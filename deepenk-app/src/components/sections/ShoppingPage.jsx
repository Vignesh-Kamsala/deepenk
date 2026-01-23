import React from 'react'
import { BsSearch } from 'react-icons/bs'

const ShoppingPage = () => {
  return (
    <div className="min-h-screen bg-white px-4 pt-20 pb-8">
      {/* Page Title */}
      <h1
        className="text-[32px] font-bold mb-6"
        style={{ color: '#111111' }}
      >
        Shopping
      </h1>

      {/* Search Bar */}
      <div
        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-6"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <BsSearch className="text-base" style={{ color: '#BDBDBD' }} />
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-1 outline-none text-sm bg-transparent"
          style={{ color: '#111111' }}
        />
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3" style={{ color: '#111111' }}>
          Categories
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {['Electronics', 'Fashion', 'Home & Living', 'Beauty'].map((category) => (
            <button
              key={category}
              className="p-4 rounded-2xl text-left transition-all active:scale-95"
              style={{
                backgroundColor: '#F5F5F5',
                border: '1px solid #E5E5E5'
              }}
            >
              <span className="text-2xl mb-2 block">🛍️</span>
              <span className="text-sm font-medium" style={{ color: '#111111' }}>
                {category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Coming Soon Message */}
      <div className="text-center py-12">
        <div className="text-5xl mb-4">🛒</div>
        <p className="text-lg font-medium mb-2" style={{ color: '#111111' }}>
          Shopping Experience
        </p>
        <p className="text-sm" style={{ color: '#757575' }}>
          Browse and shop from your favorite stores
        </p>
      </div>
    </div>
  )
}

export default ShoppingPage
