import React from 'react'
import { BsSearch } from 'react-icons/bs'

const TravelsPage = () => {
  const destinations = [
    { id: 1, name: 'Paris, France', type: 'City Break', emoji: '🗼' },
    { id: 2, name: 'Bali, Indonesia', type: 'Beach Resort', emoji: '🏖️' },
    { id: 3, name: 'Tokyo, Japan', type: 'Cultural Tour', emoji: '🏯' },
    { id: 4, name: 'New York, USA', type: 'City Break', emoji: '🗽' }
  ]

  return (
    <div className="min-h-screen bg-white px-4 pt-20 pb-8">
      {/* Page Title */}
      <h1
        className="text-[32px] font-bold mb-6"
        style={{ color: '#111111' }}
      >
        Travel Packages
      </h1>

      {/* Search Bar */}
      <div
        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-6"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <BsSearch className="text-base" style={{ color: '#BDBDBD' }} />
        <input
          type="text"
          placeholder="Search destinations..."
          className="flex-1 outline-none text-sm bg-transparent"
          style={{ color: '#111111' }}
        />
      </div>

      {/* Popular Destinations */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4" style={{ color: '#111111' }}>
          Popular Destinations
        </h2>
        <div className="space-y-4">
          {destinations.map((destination) => (
            <div
              key={destination.id}
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
                <span className="text-3xl">{destination.emoji}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-base font-semibold mb-1"
                  style={{ color: '#111111' }}
                >
                  {destination.name}
                </h3>
                <p
                  className="text-xs"
                  style={{ color: '#757575' }}
                >
                  {destination.type}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="#757575"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TravelsPage
