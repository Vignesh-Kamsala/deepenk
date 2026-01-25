import React, { useState } from 'react'
import { BsSearch, BsGeoAlt } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'

const RidesPage = () => {
  const [selectedTransport, setSelectedTransport] = useState(null)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropLocation, setDropLocation] = useState('')

  const transportTypes = [
    { id: 1, emoji: '🏍️', label: 'Bike' },
    { id: 2, emoji: '🏢', label: 'Auto' },
    { id: 3, emoji: '🚗', label: 'Car' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 pt-20 pb-4">
        {/* Transport Type Buttons */}
        <div className="flex items-center justify-center gap-3 mb-4">
          {transportTypes.map((transport) => (
            <button
              key={transport.id}
              onClick={() => setSelectedTransport(transport.id)}
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all active:scale-95 bg-white"
              style={{
                border: '2.5px solid #111111',
                backgroundColor: selectedTransport === transport.id ? '#FFF9E6' : '#FFFFFF',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
              }}
            >
              <span className="text-2xl">{transport.emoji}</span>
            </button>
          ))}
        </div>

        {/* Map Section */}
        <div className="w-full rounded-3xl overflow-hidden mb-4 relative" style={{ height: '420px', backgroundColor: '#F8F8F8' }}>
          {/* Map Background */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" style={{ opacity: 0.15 }}>
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#CCCCCC" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="absolute rounded-lg" style={{ width: '60px', height: '50px', backgroundColor: '#E8F5E9', top: '20%', left: '5%', opacity: 0.6 }} />
            <div className="absolute rounded-lg" style={{ width: '45px', height: '45px', backgroundColor: '#E8F5E9', bottom: '25%', right: '8%', opacity: 0.6 }} />
          </div>

          {/* Route and Markers */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <path d="M 50 380 Q 80 320, 100 280 T 140 220 T 180 180 T 240 140 T 300 100 T 360 70" fill="none" stroke="#2196F3" strokeWidth="6" strokeLinecap="round" />
          </svg>

          <div className="absolute flex items-center gap-2" style={{ bottom: '50px', left: '30px', zIndex: 2 }}>
            <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4CAF50', border: '3px solid white', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <div className="px-2.5 py-1 rounded" style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.15)', fontSize: '13px', fontWeight: '500', color: '#111111' }}>
              MG Road
            </div>
          </div>

          <div className="absolute flex items-center gap-2" style={{ top: '40px', right: '30px', zIndex: 2 }}>
            <div className="px-2.5 py-1 rounded" style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.15)', fontSize: '13px', fontWeight: '500', color: '#111111' }}>
              Indiranagar
            </div>
            <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4CAF50', border: '3px solid white', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <div className="text-2xl" style={{ marginLeft: '-8px' }}>🏁</div>
          </div>

          <div className="absolute" style={{ bottom: '180px', left: '80px', zIndex: 2 }}>
            <div className="flex gap-2">
              <div className="text-3xl">🛺</div>
              <div className="text-3xl">🚚</div>
            </div>
          </div>

          <div className="absolute flex gap-2" style={{ bottom: '20px', left: '20px', zIndex: 3 }}>
            <div className="px-3 py-1.5 rounded-full font-bold text-xs" style={{ backgroundColor: '#FFD700', color: '#111111' }}>Rapido</div>
            <div className="px-3 py-1.5 rounded-full font-bold text-xs" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>Uber</div>
            <div className="px-3 py-1.5 rounded-full font-bold text-xs flex items-center gap-1" style={{ backgroundColor: '#FFFFFF', color: '#111111', border: '1.5px solid #E5E5E5' }}>
              <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFD700' }}><span style={{ fontSize: '8px' }}>⭕</span></div>
              <span>OLA</span>
            </div>
          </div>
        </div>

        {/* Search Section - Outside of map */}
        <div className="mt-6 px-4">
          <div className="mx-auto" style={{ maxWidth: 720 }}>
            {/* Main Search Bar */}
            <div
              className="flex items-center gap-3 px-5 py-3.5 rounded-full cursor-pointer"
              style={{ border: '1.5px solid #E5E5E5', backgroundColor: '#FFFFFF', boxShadow: '0 8px 28px rgba(0,0,0,0.12)' }}
              onClick={() => setIsSearchFocused(true)}
            >
              <BsSearch className="text-lg flex-shrink-0" style={{ color: '#757575' }} />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="flex-1 outline-none text-[15px] bg-transparent cursor-pointer"
                style={{ color: '#111111' }}
                readOnly
              />
            </div>

            {/* Description Text */}
            <div className="mt-4 px-2">
              <p className="text-center text-xs leading-relaxed" style={{ color: '#9E9E9E' }}>
                Deepenk find's Best routs and prices from<br />
                trusted ride partners
              </p>
            </div>

            {/* Pickup and Drop Location Fields - Show when search is focused */}
            {isSearchFocused && (
              <div className="mt-4 space-y-3">
                {/* Pickup Location */}
                <div className="flex items-center gap-3 px-5 py-3.5 rounded-full" style={{ border: '1.5px solid #E5E5E5', backgroundColor: '#FFFFFF', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                  <MdLocationOn className="text-xl flex-shrink-0" style={{ color: '#111111' }} />
                  <input
                    type="text"
                    placeholder="Pickup......"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="flex-1 outline-none text-[15px] bg-transparent"
                    style={{ color: '#111111' }}
                  />
                </div>

                {/* Drop Location */}
                <div className="flex items-center gap-3 px-5 py-3.5 rounded-full" style={{ border: '1.5px solid #E5E5E5', backgroundColor: '#FFFFFF', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                  <MdLocationOn className="text-xl flex-shrink-0" style={{ color: '#111111' }} />
                  <input
                    type="text"
                    placeholder="Drop......"
                    value={dropLocation}
                    onChange={(e) => setDropLocation(e.target.value)}
                    className="flex-1 outline-none text-[15px] bg-transparent"
                    style={{ color: '#111111' }}
                  />
                </div>

                {/* Select from the map button */}
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                  style={{ backgroundColor: '#BDBDBD', color: '#FFFFFF' }}
                >
                  <BsGeoAlt className="text-sm" />
                  <span>Select from the map</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Note at bottom - only show when search is not focused */}
        {!isSearchFocused && (
          <div className="mt-6 px-2">
            <p className="text-center text-[10px] leading-relaxed" style={{ color: '#9E9E9E' }}>
              Note: This is a trial version, so results may be limited, optimized and not real data and Your feedback will help us improve the final product with better features.
            </p>
            <div className="text-center mt-2">
              <button className="text-xs underline" style={{ color: '#9E9E9E' }}>feedback</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RidesPage
