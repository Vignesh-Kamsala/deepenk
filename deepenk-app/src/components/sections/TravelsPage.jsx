import React, { useState } from 'react'

const TravelsPage = () => {
  const [selectedTransport, setSelectedTransport] = useState(null)

  const transportTypes = [
    { id: 1, emoji: '🚌', label: 'Bus' },
    { id: 2, emoji: '🚄', label: 'Train' },
    { id: 3, emoji: '✈️', label: 'Flight' }
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between items-center px-4 pt-20 pb-4">
      {/* Transport Type Buttons */}
      <div className="flex items-center justify-center gap-4 mb-8 mt-8">
        {transportTypes.map((transport) => (
          <button
            key={transport.id}
            onClick={() => setSelectedTransport(transport.id)}
            className="px-8 py-3 rounded-full flex items-center justify-center transition-all active:scale-95"
            style={{
              border: '2px solid #BDBDBD',
              backgroundColor: selectedTransport === transport.id ? '#E5E5E5' : '#FFFFFF'
            }}
          >
            <span className="text-3xl">{transport.emoji}</span>
          </button>
        ))}
      </div>

      {/* Input Fields Container */}
      <div className="w-full max-w-md space-y-4 mb-6">
        {/* Current Location */}
        <div
          className="w-full flex items-center gap-4 px-5 py-4 rounded-full"
          style={{
            border: '1.5px solid #E5E5E5',
            backgroundColor: '#FFFFFF'
          }}
        >
          <svg
            className="w-6 h-6 flex-shrink-0"
            fill="none"
            stroke="#757575"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Current Location"
            className="flex-1 outline-none text-base bg-transparent"
            style={{ color: '#757575' }}
          />
        </div>

        {/* Enter Destination */}
        <div
          className="w-full flex items-center gap-4 px-5 py-4 rounded-full"
          style={{
            border: '1.5px solid #E5E5E5',
            backgroundColor: '#FFFFFF'
          }}
        >
          <svg
            className="w-6 h-6 flex-shrink-0"
            fill="none"
            stroke="#757575"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          <input
            type="text"
            placeholder="Enter Destination"
            className="flex-1 outline-none text-base bg-transparent"
            style={{ color: '#757575' }}
          />
        </div>

        {/* Select Date */}
        <div
          className="w-full flex items-center gap-4 px-5 py-4 rounded-full"
          style={{
            border: '1.5px solid #E5E5E5',
            backgroundColor: '#FFFFFF'
          }}
        >
          <svg
            className="w-6 h-6 flex-shrink-0"
            fill="none"
            stroke="#757575"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <input
            type="text"
            placeholder="Select Date"
            className="flex-1 outline-none text-base bg-transparent"
            style={{ color: '#757575' }}
          />
        </div>
      </div>

      {/* Search Button */}
      <button
        className="w-full max-w-md py-4 rounded-full transition-all active:scale-98 mb-6"
        style={{ backgroundColor: '#FF6F00' }}
      >
        <span className="text-lg font-semibold text-white">Search</span>
      </button>

      {/* Description Text (Note at bottom) */}
      <div className="text-center max-w-sm">
        <p
          className="text-sm leading-relaxed"
          style={{ color: '#757575' }}
        >
          Travel made smarter with Deepenk —<br />
          compare buses,<br />
          trains, and flights instantly to get the best<br />
          price and timing.
        </p>
      </div>
    </div>
  )
}

export default TravelsPage
