import React, { useEffect, useRef, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Custom vehicle marker icon creator
const createVehicleIcon = (brand, brandColor, brandTextColor, vehicleIcon) => {
    return L.divIcon({
        className: 'custom-vehicle-marker',
        html: `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <div style="font-size: 20px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));">
          ${vehicleIcon}
        </div>
        <div style="
          background-color: ${brandColor};
          color: ${brandTextColor};
          padding: 2px 8px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 2px 6px rgba(0,0,0,0.12);
          min-width: 40px;
          text-align: center;
        ">
          ${brand}
        </div>
      </div>
    `,
        iconSize: [50, 60],
        iconAnchor: [25, 60],
    })
}

// Custom pickup marker (green)
const pickupIcon = L.divIcon({
    className: 'custom-pickup-marker',
    html: `
    <div style="
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #4CAF50;
      border: 3px solid white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    "></div>
  `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
})

// Custom drop marker (green with flag)
const dropIcon = L.divIcon({
    className: 'custom-drop-marker',
    html: `
    <div style="display: flex; align-items: center; gap: 8px;">
      <div style="font-size: 20px;">🏁</div>
      <div style="
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: #4CAF50;
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      "></div>
    </div>
  `,
    iconSize: [64, 36],
    iconAnchor: [32, 18],
})

// Component to auto-fit map bounds with stability
const MapBoundsController = ({ pickupCoords, dropCoords, vehicles }) => {
    const map = useMap()
    const hasInitializedRef = useRef(false)
    const lastPickupRef = useRef(null)
    const lastDropRef = useRef(null)

    useEffect(() => {
        // Only fit bounds once when both pickup and drop are provided
        if (pickupCoords && dropCoords) {
            const boundsChanged = 
                !lastPickupRef.current || !lastDropRef.current ||
                lastPickupRef.current.lat !== pickupCoords.lat ||
                lastPickupRef.current.lng !== pickupCoords.lng ||
                lastDropRef.current.lat !== dropCoords.lat ||
                lastDropRef.current.lng !== dropCoords.lng

            if (boundsChanged && !hasInitializedRef.current) {
                try {
                    const bounds = [
                        [pickupCoords.lat, pickupCoords.lng],
                        [dropCoords.lat, dropCoords.lng]
                    ]
                    
                    // Fit bounds only once with smooth animation
                    setTimeout(() => {
                        map.fitBounds(bounds, { 
                            padding: [80, 80], 
                            maxZoom: 15,
                            animate: true,
                            duration: 0.8
                        })
                    }, 100)
                    
                    hasInitializedRef.current = true
                    lastPickupRef.current = pickupCoords
                    lastDropRef.current = dropCoords
                } catch (error) {
                    console.log('Map bounds error:', error.message)
                }
            }
        } else {
            // Reset if locations are cleared
            hasInitializedRef.current = false
            lastPickupRef.current = null
            lastDropRef.current = null
        }
    }, [pickupCoords, dropCoords, map])

    return null
}

const MapView = ({ pickupCoords, dropCoords, vehicles = [], isLoading = false }) => {
    const defaultCenter = [12.9716, 77.5946] // Bangalore center
    const defaultZoom = 13
    const mapRef = useRef(null)

    // Memoize initial center - stable reference
    const mapCenter = useMemo(() => {
        if (pickupCoords) {
            return [pickupCoords.lat, pickupCoords.lng]
        }
        return defaultCenter
    }, [pickupCoords?.lat, pickupCoords?.lng])

    // Calculate route path only when coordinates change
    const routePath = useMemo(() => {
        if (pickupCoords && dropCoords) {
            return [[pickupCoords.lat, pickupCoords.lng], [dropCoords.lat, dropCoords.lng]]
        }
        return []
    }, [pickupCoords?.lat, pickupCoords?.lng, dropCoords?.lat, dropCoords?.lng])

    return (
        <div className="w-full rounded-3xl overflow-hidden" style={{ height: 420, position: 'relative', zIndex: 1 }}>
            <MapContainer
                ref={mapRef}
                center={mapCenter}
                zoom={defaultZoom}
                scrollWheelZoom={true}
                zoomControl={true}
                style={{ height: '100%', width: '100%' }}
                whenCreated={(mapInstance) => {
                    mapRef.current = mapInstance
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Auto-fit bounds - only fits once when both locations set */}
                <MapBoundsController
                    pickupCoords={pickupCoords}
                    dropCoords={dropCoords}
                    vehicles={vehicles}
                />

                {/* Pickup marker */}
                {pickupCoords && (
                    <Marker
                        position={[pickupCoords.lat, pickupCoords.lng]}
                        icon={pickupIcon}
                        key="pickup"
                    />
                )}

                {/* Drop marker */}
                {dropCoords && (
                    <Marker
                        position={[dropCoords.lat, dropCoords.lng]}
                        icon={dropIcon}
                        key="drop"
                    />
                )}

                {/* Route path */}
                {routePath.length > 0 && (
                    <Polyline
                        positions={routePath}
                        color="#1976D2"
                        weight={6}
                        opacity={0.8}
                        key="route"
                    />
                )}

                {/* Vehicle markers - lightweight rendering, stable */}
                {vehicles && vehicles.length > 0 && vehicles.map((vehicle) => (
                    <Marker
                        key={`vehicle-${vehicle.id}-${vehicle.lat}-${vehicle.lng}`}
                        position={[vehicle.lat, vehicle.lng]}
                        icon={createVehicleIcon(
                            vehicle.brand,
                            vehicle.brandColor,
                            vehicle.brandTextColor,
                            vehicle.vehicleIcon
                        )}
                        title={`${vehicle.brand} - ${vehicle.driverName || 'Driver'}`}
                    />
                ))}
            </MapContainer>

            {/* Brand badges overlay (bottom left) */}
            <div style={{
                position: 'absolute',
                left: 20,
                bottom: 20,
                zIndex: 1000,
                display: 'flex',
                gap: 8
            }}>
                <div style={{ background: '#FFD700', color: '#111', padding: '6px 10px', borderRadius: 999, fontWeight: 700, fontSize: 12 }}>
                    Rapido
                </div>
                <div style={{ background: '#111', color: '#fff', padding: '6px 10px', borderRadius: 999, fontWeight: 700, fontSize: 12 }}>
                    Uber
                </div>
                <div style={{
                    background: '#fff',
                    color: '#111',
                    padding: '6px 10px',
                    borderRadius: 999,
                    fontWeight: 700,
                    fontSize: 12,
                    border: '1.5px solid #E5E5E5',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6
                }}>
                    <div style={{ width: 18, height: 18, background: '#FFD700', borderRadius: 999 }} />
                    <div>OLA</div>
                </div>
            </div>

            {/* Loading overlay */}
            {isLoading && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 999
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '16px 24px',
                        borderRadius: 12,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            width: 32,
                            height: 32,
                            border: '3px solid #1976D2',
                            borderTop: '3px solid transparent',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                            margin: '0 auto 8px'
                        }} />
                        <p style={{ fontSize: 14, color: '#111', fontWeight: 500 }}>
                            Finding nearby drivers...
                        </p>
                    </div>
                    <style>{`
                        @keyframes spin {
                            from { transform: rotate(0deg); }
                            to { transform: rotate(360deg); }
                        }
                    `}</style>
                </div>
            )}
        </div>
    )
}

export default MapView
