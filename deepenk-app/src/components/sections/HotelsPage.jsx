import React from 'react'
import { BsSearch } from 'react-icons/bs'

const HotelsPage = () => {
  const hotels = [
    { id: 1, name: 'Grand Plaza Hotel', location: 'Downtown', rating: '4.8', price: '₹5,999', emoji: '🏨' },
    { id: 2, name: 'Seaside Resort', location: 'Beach Area', rating: '4.9', price: '₹8,499', emoji: '🏖️' },
    { id: 3, name: 'Mountain View Lodge', location: 'Hill Station', rating: '4.6', price: '₹4,299', emoji: '⛰️' },
    { id: 4, name: 'City Center Inn', location: 'Central District', rating: '4.5', price: '₹3,799', emoji: '🏙️' }
  ]

  return (
    <div className="min-h-screen bg-white px-4 pt-20 pb-8">
      {/* Page Title */}
      <h1
        className="text-[32px] font-bold mb-6"
        style={{ color: '#111111' }}
      >
        Hotels & Stays
      </h1>

      {/* Search Bar */}
      <div
        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-6"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <BsSearch className="text-base" style={{ color: '#BDBDBD' }} />
        <input
          type="text"
          placeholder="Search hotels..."
          className="flex-1 outline-none text-sm bg-transparent"
          style={{ color: '#111111' }}
        />
      </div>

      {/* Hotels List */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4" style={{ color: '#111111' }}>
          Available Hotels
        </h2>
        <div className="space-y-4">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="p-4 rounded-2xl transition-all active:scale-98"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                border: '1px solid #F5F5F5'
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#FFF9E6' }}
                >
                  <span className="text-3xl">{hotel.emoji}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ color: '#111111' }}
                  >
                    {hotel.name}
                  </h3>
                  <p
                    className="text-xs mb-2"
                    style={{ color: '#757575' }}
                  >
                    📍 {hotel.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: '#757575' }}>
                      ⭐ {hotel.rating}
                    </span>
                    <span className="text-base font-semibold" style={{ color: '#111111' }}>
                      {hotel.price}/night
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HotelsPage
