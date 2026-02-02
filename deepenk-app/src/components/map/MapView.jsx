import React, { useEffect, useRef } from 'react'
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

// Component to auto-fit map bounds
const MapBoundsController = ({ pickupCoords, dropCoords, vehicles }) => {
    const map = useMap()

    useEffect(() => {
        const bounds = []

        if (pickupCoords) {
            bounds.push([pickupCoords.lat, pickupCoords.lng])
        }

        if (dropCoords) {
            bounds.push([dropCoords.lat, dropCoords.lng])
        }

        vehicles.forEach(vehicle => {
            bounds.push([vehicle.lat, vehicle.lng])
        })

        if (bounds.length > 0) {
            map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 })
        }
    }, [map, pickupCoords, dropCoords, vehicles])

    return null
}

const MapView = ({ pickupCoords, dropCoords, vehicles = [] }) => {
    const defaultCenter = [12.9716, 77.5946] // Bangalore center
    const defaultZoom = 13

    // Calculate route path
    const routePath = pickupCoords && dropCoords
        ? [[pickupCoords.lat, pickupCoords.lng], [dropCoords.lat, dropCoords.lng]]
        : []

    return (
        <div className="w-full rounded-3xl overflow-hidden" style={{ height: 420, position: 'relative', zIndex: 1 }}>
            <MapContainer
                center={pickupCoords ? [pickupCoords.lat, pickupCoords.lng] : defaultCenter}
                zoom={defaultZoom}
                scrollWheelZoom={false}
                zoomControl={false}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Auto-fit bounds */}
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
                    />
                )}

                {/* Drop marker */}
                {dropCoords && (
                    <Marker
                        position={[dropCoords.lat, dropCoords.lng]}
                        icon={dropIcon}
                    />
                )}

                {/* Route path */}
                {routePath.length > 0 && (
                    <Polyline
                        positions={routePath}
                        color="#1976D2"
                        weight={6}
                        opacity={0.8}
                    />
                )}

                {/* Vehicle markers */}
                {vehicles.map((vehicle) => (
                    <Marker
                        key={vehicle.id}
                        position={[vehicle.lat, vehicle.lng]}
                        icon={createVehicleIcon(
                            vehicle.brand,
                            vehicle.brandColor,
                            vehicle.brandTextColor,
                            vehicle.vehicleIcon
                        )}
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
        </div>
    )
}

export default MapView
