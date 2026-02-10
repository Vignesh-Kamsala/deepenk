import React, { useState, useEffect, useRef } from 'react'
import { BsSearch, BsGeoAlt } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import MapView from '../map/MapView'
import { generateVehiclesNearPickupReal, geocodeLocationReal } from '../../utils/vehicleGenerator'

const RidesPage = () => {
  // Location input states (user typing)
  const [pickupInput, setPickupInput] = useState('')
  const [dropInput, setDropInput] = useState('')
  
  // Confirmed location states (after clicking confirm)
  const [confirmedPickupLocation, setConfirmedPickupLocation] = useState(null)
  const [confirmedDropLocation, setConfirmedDropLocation] = useState(null)
  
  // Coordinate states (geocoded, stable for map)
  const [pickupCoords, setPickupCoords] = useState(null)
  const [dropCoords, setDropCoords] = useState(null)
  
  // Vehicle & UI states
  const [vehicles, setVehicles] = useState([])
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isLoadingVehicles, setIsLoadingVehicles] = useState(false)
  const [selectedTransport, setSelectedTransport] = useState(null)
  
  // Debounce refs to prevent excessive API calls during typing
  const pickupDebounceRef = useRef(null)
  const dropDebounceRef = useRef(null)
  const vehiclesLoadedRef = useRef(false)

  // Debounced geocoding for pickup location input (as user types)
  useEffect(() => {
    if (pickupDebounceRef.current) {
      clearTimeout(pickupDebounceRef.current)
    }

    if (pickupInput.trim()) {
      pickupDebounceRef.current = setTimeout(async () => {
        try {
          const coords = await geocodeLocationReal(pickupInput)
          setPickupCoords(coords)
        } catch (error) {
          console.error('Error geocoding pickup:', error)
          setPickupCoords(null)
        }
      }, 500) // Wait 500ms after user stops typing
    } else {
      setPickupCoords(null)
    }

    return () => {
      if (pickupDebounceRef.current) {
        clearTimeout(pickupDebounceRef.current)
      }
    }
  }, [pickupInput])

  // Debounced geocoding for drop location input (as user types)
  useEffect(() => {
    if (dropDebounceRef.current) {
      clearTimeout(dropDebounceRef.current)
    }

    if (dropInput.trim()) {
      dropDebounceRef.current = setTimeout(async () => {
        try {
          const coords = await geocodeLocationReal(dropInput)
          setDropCoords(coords)
        } catch (error) {
          console.error('Error geocoding drop:', error)
          setDropCoords(null)
        }
      }, 500) // Wait 500ms after user stops typing
    } else {
      setDropCoords(null)
    }

    return () => {
      if (dropDebounceRef.current) {
        clearTimeout(dropDebounceRef.current)
      }
    }
  }, [dropInput])

  // Load vehicles ONLY when both locations are confirmed (not on every input change)
  useEffect(() => {
    const loadVehicles = async () => {
      // Only load vehicles once when both locations are confirmed and have valid coordinates
      if (!confirmedPickupLocation || !confirmedDropLocation || !pickupCoords) {
        setVehicles([])
        vehiclesLoadedRef.current = false
        return
      }

      // Don't reload vehicles if they're already loaded for these locations
      if (vehiclesLoadedRef.current) {
        return
      }

      setIsLoadingVehicles(true)
      try {
        // Generate vehicles near the confirmed pickup location
        const newVehicles = await generateVehiclesNearPickupReal(
          pickupCoords.lat,
          pickupCoords.lng
        )
        setVehicles(newVehicles)
        vehiclesLoadedRef.current = true
      } catch (error) {
        console.error('Error loading vehicles:', error)
        setVehicles([])
      } finally {
        setIsLoadingVehicles(false)
      }
    }

    loadVehicles()
  }, [confirmedPickupLocation, confirmedDropLocation, pickupCoords])

  // Handle confirming locations (user clicks confirm button)
  const handleConfirmLocations = () => {
    if (pickupInput.trim() && dropInput.trim()) {
      setConfirmedPickupLocation(pickupInput)
      setConfirmedDropLocation(dropInput)
      // Reset vehicles flag to load new set for confirmed locations
      vehiclesLoadedRef.current = false
      setIsSearchFocused(false)
    }
  }

  // Reset everything
  const handleReset = () => {
    setPickupInput('')
    setDropInput('')
    setConfirmedPickupLocation(null)
    setConfirmedDropLocation(null)
    setPickupCoords(null)
    setDropCoords(null)
    setVehicles([])
    setIsSearchFocused(false)
    vehiclesLoadedRef.current = false
  }

  const transportTypes = [
    { id: 1, emoji: '🏍️', label: 'Bike', color: '#FF7043' },
    { id: 2, emoji: '🛺', label: 'Auto', color: '#66BB6A' },
    { id: 3, emoji: '🚗', label: 'Car', color: '#FFD54F' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 lg:px-8 pt-16 lg:pt-8 pb-6 max-w-5xl mx-auto">
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

        {/* Map Section - Shows CONFIRMED locations and vehicles */}
        <MapView
          pickupCoords={pickupCoords}
          dropCoords={dropCoords}
          vehicles={vehicles}
          isLoading={isLoadingVehicles}
        />

        {/* Loading indicator */}
        {isLoadingVehicles && (
          <div className="mt-2 text-center text-sm" style={{ color: '#9E9E9E' }}>
            Loading nearby drivers...
          </div>
        )}

        {/* Display confirmed locations */}
        {confirmedPickupLocation && confirmedDropLocation && (
          <div className="mt-4 px-4 py-3 bg-blue-50 rounded-lg text-center">
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Pickup:</span> {confirmedPickupLocation} → <span className="font-semibold">Drop:</span> {confirmedDropLocation}
            </p>
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
            <div className="mt-4 lg:mt-6 px-2">
              <p className="text-center font-semibold text-sm lg:text-base mb-1" style={{ color: '#111' }}>
                🚗 Rides, Made Easy for with Deepenk
              </p>
              <p className="text-center text-xs lg:text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
                Deepenk helps you choose the best ride across platforms in seconds.<br className="hidden lg:block" />
                Instead of checking multiple apps, Deepenk compares prices, arrival time,<br className="hidden lg:block" />
                availability, and automatically applies all available offers and coupons to<br className="hidden lg:block" />
                recommend the option that truly works best for you.
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
                    value={pickupInput}
                    onChange={(e) => setPickupInput(e.target.value)}
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
                    value={dropInput}
                    onChange={(e) => setDropInput(e.target.value)}
                    className="flex-1 outline-none text-[15px] bg-transparent"
                    style={{ color: '#111111' }}
                  />
                </div>

                {/* Confirm Locations Button */}
                <button
                  onClick={handleConfirmLocations}
                  disabled={!pickupInput.trim() || !dropInput.trim() || !pickupCoords || !dropCoords}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-medium w-full disabled:opacity-50 transition-all"
                  style={{ 
                    backgroundColor: (pickupInput.trim() && dropInput.trim() && pickupCoords && dropCoords) ? '#1976D2' : '#BDBDBD', 
                    color: '#FFFFFF' 
                  }}
                >
                  <BsGeoAlt className="text-sm" />
                  <span>Confirm Locations & Find Drivers</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Note at bottom - always visible */}
        <div className="mt-6 px-2 flex flex-col items-center gap-3">
          <p className="text-center text-[10px] leading-relaxed" style={{ color: '#9E9E9E' }}>
            Note: This is a trial version, so results may be limited, optimized and not real data. Your feedback will help us improve the final product with better features.
          </p>
          
          {/* Reset button - shown when locations are confirmed */}
          {confirmedPickupLocation && confirmedDropLocation && (
            <button
              onClick={handleReset}
              className="px-6 py-2 rounded-full text-sm font-medium transition-all"
              style={{ backgroundColor: '#F5F5F5', color: '#111', border: '1px solid #E5E5E5' }}
            >
              Clear & Search New Route
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default RidesPage

