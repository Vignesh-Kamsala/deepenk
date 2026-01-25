import React, { useState } from 'react'
import { BsSearch, BsGeoAlt } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import MapPreview from '../common/MapPreview'

const RidesPage = () => {
  const [selectedTransport, setSelectedTransport] = useState(null)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropLocation, setDropLocation] = useState('')

  const transportTypes = [
    { id: 1, emoji: '🏍️', label: 'Bike', color: '#FF7043' },
    { id: 2, emoji: '🛺', label: 'Auto', color: '#66BB6A' },
    { id: 3, emoji: '🚗', label: 'Car', color: '#FFD54F' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 pt-16 pb-6">
        {/* Transport Type Buttons - Figma-style pills */}
        <div className="flex items-center justify-center gap-4 mb-4" style={{ padding: '8px 12px' }}>
          {transportTypes.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTransport(t.id)}
              aria-pressed={selectedTransport === t.id}
              aria-label={t.label}
              className="flex items-center justify-center"
              style={{
                width: 68,
                height: 44,
                borderRadius: 999,
                background: '#FFFFFF',
                border: '2.5px solid #111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: selectedTransport === t.id ? '0 10px 24px rgba(0,0,0,0.14)' : '0 6px 18px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{ width: 44, height: 36, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
                <div style={{ width: 32, height: 32, borderRadius: 999, background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: selectedTransport === t.id ? '2px solid #1976D2' : 'none' }}>
                  <div style={{ width: 24, height: 24, borderRadius: 999, background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 16 }}>{t.emoji}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Map Section */}
        <div className="w-full rounded-3xl overflow-hidden mb-6 relative" style={{ height: 420, backgroundColor: '#F6F7F8' }}>
          <MapPreview />
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

        {/* Note at bottom - always visible */}
        <div className="mt-6 px-2">
          <p className="text-center text-[10px] leading-relaxed" style={{ color: '#9E9E9E' }}>
            Note: This is a trial version, so results may be limited, optimized and not real data and Your feedback will help us improve the final product with better features.
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default RidesPage

