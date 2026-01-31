import React, { useState, useEffect } from 'react'
import { BsSearch, BsGeoAlt } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import MapView from '../map/MapView'
import { generateVehiclesNearPickupReal, geocodeLocationReal } from '../../utils/vehicleGenerator'

const RidesPage = () => {
  const [selectedTransport, setSelectedTransport] = useState(null)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropLocation, setDropLocation] = useState('')
  const [vehicles, setVehicles] = useState([])
  const [pickupCoords, setPickupCoords] = useState(null)
  const [dropCoords, setDropCoords] = useState(null)
  const [isLoadingVehicles, setIsLoadingVehicles] = useState(false)

  // Generate vehicles when pickup or drop location changes
  useEffect(() => {
    const loadVehicles = async () => {
      if (pickupLocation.trim()) {
        setIsLoadingVehicles(true)
        try {
          // Geocode pickup location
          const coords = await geocodeLocationReal(pickupLocation)
          setPickupCoords(coords)

          // Geocode drop location if provided
          if (dropLocation.trim()) {
            const dropCoords = await geocodeLocationReal(dropLocation)
            setDropCoords(dropCoords)
          } else {
            setDropCoords(null)
          }

          // Generate vehicles near pickup with real road-snapping
          const newVehicles = await generateVehiclesNearPickupReal(coords.lat, coords.lng)
          setVehicles(newVehicles)
        } catch (error) {
          console.error('Error loading vehicles:', error)
        } finally {
          setIsLoadingVehicles(false)
        }
      } else {
        // Clear vehicles if no pickup location
        setVehicles([])
        setPickupCoords(null)
        setDropCoords(null)
      }
    }

    loadVehicles()
  }, [pickupLocation, dropLocation]) // Regenerate on either location change

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
        <MapView
          pickupCoords={pickupCoords}
          dropCoords={dropCoords}
          vehicles={vehicles}
        />

        {/* Loading indicator */}
        {isLoadingVehicles && (
          <div className="mt-2 text-center text-sm" style={{ color: '#9E9E9E' }}>
            Loading vehicles...
          </div>
        )}

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

        {/* Ride Recommendations - Show when locations are entered */}
        {isSearchFocused && pickupLocation && dropLocation && (
          <div className="mt-6 px-4">
            <div className="mx-auto" style={{ maxWidth: 720 }}>
              {/* Best Choice Section */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-3" style={{ color: '#111111' }}>Best Choice</h3>
                <div
                  className="rounded-2xl p-4"
                  style={{
                    border: '2px solid #FF6B6B',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 4px 12px rgba(255, 107, 107, 0.15)'
                  }}
                >
                  {/* Header with logo and price */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{ backgroundColor: '#FFD600', color: '#111111' }}
                      >
                        rapido
                      </div>
                      <span className="font-semibold" style={{ color: '#111111' }}>Rapido</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold" style={{ color: '#111111' }}>₹35</div>
                    </div>
                  </div>

                  {/* Ride details */}
                  <div className="mb-3">
                    <p className="text-sm font-medium" style={{ color: '#111111' }}>2 min • 10 min ride</p>
                    <p className="text-xs" style={{ color: '#757575' }}>Fastest arrival at lowest price</p>
                  </div>

                  {/* Book button */}
                  <button
                    className="w-full py-3 rounded-full font-semibold text-sm"
                    style={{ backgroundColor: '#111111', color: '#FFFFFF' }}
                  >
                    Book Rapido
                  </button>

                  {/* Features list */}
                  <div className="mt-4 space-y-2">
                    {[
                      'Automatically applied all available offers and coupons',
                      'Best balance of price, comfort, and travel time',
                      'High availability with reliable on-time performance',
                      'High availability with reliable on-time performance',
                      'Verified choice based on real-time data and pricing'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg
                          className="flex-shrink-0 mt-0.5"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.3333 4L6 11.3333L2.66667 8"
                            stroke="#4CAF50"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-xs leading-relaxed" style={{ color: '#111111' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Best Alternative Options */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-3" style={{ color: '#111111' }}>Best Alternative Options</h3>
                <div className="space-y-3">
                  {/* Alternative Option 1 - Uber */}
                  <div
                    className="rounded-2xl p-4"
                    style={{
                      border: '1.5px solid #E5E5E5',
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{ backgroundColor: '#111111', color: '#FFFFFF' }}
                        >
                          uber
                        </div>
                        <span className="font-semibold text-sm" style={{ color: '#111111' }}>Uber</span>
                      </div>
                      <div className="text-xl font-bold" style={{ color: '#111111' }}>₹42</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium" style={{ color: '#111111' }}>3 min • 12 min ride</p>
                        <p className="text-xs" style={{ color: '#757575' }}>Premium comfort and safety</p>
                      </div>
                      <button
                        className="px-6 py-2 rounded-full font-semibold text-sm"
                        style={{ backgroundColor: '#111111', color: '#FFFFFF' }}
                      >
                        Book Uber
                      </button>
                    </div>
                  </div>

                  {/* Alternative Option 2 - OLA */}
                  <div
                    className="rounded-2xl p-4"
                    style={{
                      border: '1.5px solid #E5E5E5',
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{ backgroundColor: '#4CAF50', color: '#FFFFFF' }}
                        >
                          ola
                        </div>
                        <span className="font-semibold text-sm" style={{ color: '#111111' }}>OLA</span>
                      </div>
                      <div className="text-xl font-bold" style={{ color: '#111111' }}>₹38</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium" style={{ color: '#111111' }}>4 min • 11 min ride</p>
                        <p className="text-xs" style={{ color: '#757575' }}>Reliable service with good availability</p>
                      </div>
                      <button
                        className="px-6 py-2 rounded-full font-semibold text-sm"
                        style={{ backgroundColor: '#111111', color: '#FFFFFF' }}
                      >
                        Book OLA
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirm Ride Button */}
              <button
                className="w-full py-4 rounded-full font-bold text-base mb-6"
                style={{ backgroundColor: '#FF5722', color: '#FFFFFF', boxShadow: '0 4px 12px rgba(255, 87, 34, 0.3)' }}
              >
                Confirm Ride
              </button>
            </div>
          </div>
        )}

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

