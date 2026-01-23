import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const RidesPage = () => {
  const [showPickupDrop, setShowPickupDrop] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Icon Buttons */}
      <div className="px-4 pt-20 pb-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          {/* Bike Icon Button */}
          <button
            className="w-16 h-10 rounded-full flex items-center justify-center transition-all active:scale-95"
            style={{ border: '2px solid #111111' }}
          >
            <span className="text-xl">🏍️</span>
          </button>

          {/* Building/Hotel Icon Button */}
          <button
            className="w-16 h-10 rounded-full flex items-center justify-center transition-all active:scale-95"
            style={{ border: '2px solid #111111', backgroundColor: '#FFF9E6' }}
          >
            <span className="text-xl">🏢</span>
          </button>

          {/* Car Icon Button */}
          <button
            className="w-16 h-10 rounded-full flex items-center justify-center transition-all active:scale-95"
            style={{ border: '2px solid #111111' }}
          >
            <span className="text-xl">🚗</span>
          </button>
        </div>

        {/* Map Section */}
        <div
          className="w-full rounded-3xl overflow-hidden mb-4 relative"
          style={{
            height: '380px',
            backgroundColor: '#F5F5F5',
            backgroundImage: 'linear-gradient(45deg, #E5E5E5 25%, transparent 25%), linear-gradient(-45deg, #E5E5E5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #E5E5E5 75%), linear-gradient(-45deg, transparent 75%, #E5E5E5 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}
        >
          {/* Map Placeholder Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="text-sm" style={{ color: '#757575' }}>Map View</p>
              <p className="text-xs mt-1" style={{ color: '#BDBDBD' }}>Route visualization</p>
            </div>
          </div>

          {/* Start Point Marker */}
          <div
            className="absolute w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              bottom: '40px',
              left: '30px',
              backgroundColor: '#10B981',
              border: '3px solid white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            <span className="text-white text-xs font-bold">S</span>
          </div>

          {/* End Point Marker */}
          <div
            className="absolute w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              top: '30px',
              right: '30px',
              backgroundColor: '#10B981',
              border: '3px solid white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            <span className="text-white text-xs font-bold">E</span>
          </div>

          {/* Service Provider Badges */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            <div
              className="px-3 py-1.5 rounded-full font-semibold text-xs"
              style={{ backgroundColor: '#FFD700', color: '#111111' }}
            >
              Rapido
            </div>
            <div
              className="px-3 py-1.5 rounded-full font-semibold text-xs"
              style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
            >
              Uber
            </div>
            <div
              className="px-3 py-1.5 rounded-full font-semibold text-xs"
              style={{ backgroundColor: '#FFFFFF', color: '#111111', border: '1.5px solid #E5E5E5' }}
            >
              OLA
            </div>
          </div>

          {/* Location Labels */}
          <div
            className="absolute px-2 py-1 rounded text-xs font-medium"
            style={{ bottom: '90px', left: '20px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
          >
            MG Road
          </div>
          <div
            className="absolute px-2 py-1 rounded text-xs font-medium"
            style={{ top: '80px', right: '20px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
          >
            Indiranagar
          </div>
        </div>

        {/* Search Input */}
        <div
          className="w-full flex items-center gap-3 px-4 py-3.5 rounded-full mb-3"
          style={{
            border: '1.5px solid #E5E5E5',
            backgroundColor: '#FFFFFF'
          }}
          onClick={() => setShowPickupDrop(!showPickupDrop)}
        >
          <BsSearch className="text-lg" style={{ color: '#757575' }} />
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="flex-1 outline-none text-[15px] bg-transparent"
            style={{ color: '#111111' }}
          />
        </div>

        {/* Description Text */}
        <p className="text-center text-xs mb-4" style={{ color: '#757575' }}>
          Deepenk find's Best routs and prices from<br />trusted ride partners
        </p>

        {/* Pickup/Drop Fields (Conditional) */}
        {showPickupDrop && (
          <div className="space-y-3 mb-3">
            <div
              className="w-full flex items-center gap-3 px-4 py-3.5 rounded-full"
              style={{
                border: '1.5px solid #E5E5E5',
                backgroundColor: '#FFFFFF'
              }}
            >
              <span className="text-lg">📍</span>
              <input
                type="text"
                placeholder="Pickup......"
                className="flex-1 outline-none text-[15px] bg-transparent"
                style={{ color: '#111111' }}
              />
            </div>

            <div
              className="w-full flex items-center gap-3 px-4 py-3.5 rounded-full"
              style={{
                border: '1.5px solid #E5E5E5',
                backgroundColor: '#FFFFFF'
              }}
            >
              <span className="text-lg">📍</span>
              <input
                type="text"
                placeholder="Drop......"
                className="flex-1 outline-none text-[15px] bg-transparent"
                style={{ color: '#111111' }}
              />
            </div>

            {/* Select from Map Button */}
            <button
              className="px-4 py-2.5 rounded-full flex items-center gap-2 transition-all active:scale-95"
              style={{ backgroundColor: '#D9D9D9', color: '#111111' }}
            >
              <span className="text-sm">📍</span>
              <span className="text-sm font-medium">Select from the map</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default RidesPage
