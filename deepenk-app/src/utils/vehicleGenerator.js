/**
 * Vehicle Generator Utility
 * Generates mock nearby vehicles for ride aggregation UI
 */

const BRANDS = [
    { name: 'Rapido', color: '#FFD700', textColor: '#111' },
    { name: 'Uber', color: '#111', textColor: '#fff' },
    { name: 'OLA', color: '#4CAF50', textColor: '#fff' }
]

const VEHICLE_TYPES = [
    { type: 'bike', icon: '🏍️', emoji: '🏍️' },
    { type: 'auto', icon: '🛺', emoji: '🛺' },
    { type: 'car', icon: '🚗', emoji: '🚗' }
]

/**
 * Generate random coordinate within a radius (in km) from a center point
 * Uses simple circular distribution
 */
export const getRandomCoordinateInRadius = (centerLat, centerLng, radiusKm) => {
    // Convert radius from km to degrees (approximate)
    const radiusInDegrees = radiusKm / 111.32 // 1 degree ≈ 111.32 km

    // Random angle and distance
    const angle = Math.random() * 2 * Math.PI
    const distance = Math.random() * radiusInDegrees

    // Calculate new coordinates
    const deltaLat = distance * Math.cos(angle)
    const deltaLng = distance * Math.sin(angle) / Math.cos(centerLat * Math.PI / 180)

    return {
        lat: centerLat + deltaLat,
        lng: centerLng + deltaLng
    }
}

/**
 * Mock road-snapping function
 * Simulates snapping coordinates to nearby roads by adding slight offsets
 * In a real implementation, this would use a routing API
 */
export const snapToNearestRoad = (lat, lng) => {
    // Create predefined "road" patterns - diagonal, horizontal, vertical biases
    const roadPatterns = [
        { latOffset: 0.0001, lngOffset: 0.0001 }, // diagonal
        { latOffset: 0, lngOffset: 0.0002 }, // horizontal
        { latOffset: 0.0002, lngOffset: 0 }, // vertical
        { latOffset: -0.0001, lngOffset: 0.0001 }, // diagonal reverse
    ]

    // Pick a random road pattern
    const pattern = roadPatterns[Math.floor(Math.random() * roadPatterns.length)]

    // Apply pattern with some randomness
    return {
        lat: lat + pattern.latOffset * (0.5 + Math.random()),
        lng: lng + pattern.lngOffset * (0.5 + Math.random())
    }
}

/**
 * Convert location string to mock coordinates
 * In production, this would use a geocoding API
 */
export const geocodeLocation = (locationString) => {
    // Mock geocoding - return coordinates for common locations
    const mockLocations = {
        'mg road': { lat: 12.9716, lng: 77.5946 },
        'indiranagar': { lat: 12.9784, lng: 77.6408 },
        'koramangala': { lat: 12.9352, lng: 77.6245 },
        'whitefield': { lat: 12.9698, lng: 77.7500 },
        'hsr layout': { lat: 12.9121, lng: 77.6446 },
        'electronic city': { lat: 12.8456, lng: 77.6603 },
        'jayanagar': { lat: 12.9250, lng: 77.5838 },
        'malleshwaram': { lat: 12.9897, lng: 77.5703 }
    }

    const normalized = locationString.toLowerCase().trim()

    // Check for exact or partial matches
    for (const [key, coords] of Object.entries(mockLocations)) {
        if (normalized.includes(key) || key.includes(normalized)) {
            return coords
        }
    }

    // Default fallback (Bangalore center)
    return { lat: 12.9716, lng: 77.5946 }
}

/**
 * Real geocoding using Nominatim API (free, no API key required)
 * @param {string} locationString - Location to geocode
 * @returns {Promise<{lat: number, lng: number}>} Coordinates
 */
export const geocodeLocationReal = async (locationString) => {
    try {
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationString)},India&format=json&limit=1`
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'DeepenkRideApp/1.0' // Required by Nominatim usage policy
            }
        })
        const data = await response.json()

        if (data.length > 0) {
            return {
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon)
            }
        }
    } catch (error) {
        console.warn('Real geocoding failed, using mock:', error)
    }

    // Fallback to mock geocoding
    return geocodeLocation(locationString)
}

/**
 * Real road-snapping using OSRM API (free, no API key required)
 * @param {number} lat - Latitude
 * @param {number} lng - Longitude
 * @returns {Promise<{lat: number, lng: number}>} Snapped coordinates
 */
export const snapToNearestRoadReal = async (lat, lng) => {
    try {
        const url = `https://router.project-osrm.org/nearest/v1/driving/${lng},${lat}?number=1`
        const response = await fetch(url)
        const data = await response.json()

        if (data.code === 'Ok' && data.waypoints && data.waypoints.length > 0) {
            const [snapLng, snapLat] = data.waypoints[0].location
            return { lat: snapLat, lng: snapLng }
        }
    } catch (error) {
        console.warn('Road snapping failed, using mock:', error)
    }

    // Fallback to mock road-snapping
    return snapToNearestRoad(lat, lng)
}

/**
 * Generate mock vehicles near pickup location (sync version)
 * @param {number} pickupLat - Pickup latitude
 * @param {number} pickupLng - Pickup longitude
 * @param {number} count - Number of vehicles to generate (default: 4-5)
 * @returns {Array} Array of vehicle objects
 */
export const generateVehiclesNearPickup = (pickupLat, pickupLng, count = null) => {
    // Generate 4-5 vehicles randomly if count not specified
    const vehicleCount = count || (4 + Math.floor(Math.random() * 2))
    const vehicles = []

    for (let i = 0; i < vehicleCount; i++) {
        // Generate random coordinate within 1km radius
        const randomCoord = getRandomCoordinateInRadius(pickupLat, pickupLng, 1.0)

        // Snap to nearest road
        const snappedCoord = snapToNearestRoad(randomCoord.lat, randomCoord.lng)

        // Randomly assign brand and vehicle type
        const brand = BRANDS[Math.floor(Math.random() * BRANDS.length)]
        const vehicleType = VEHICLE_TYPES[Math.floor(Math.random() * VEHICLE_TYPES.length)]

        vehicles.push({
            id: `vehicle-${Date.now()}-${i}`,
            brand: brand.name,
            brandColor: brand.color,
            brandTextColor: brand.textColor,
            vehicleType: vehicleType.type,
            vehicleIcon: vehicleType.emoji,
            lat: snappedCoord.lat,
            lng: snappedCoord.lng
        })
    }

    return vehicles
}

/**
 * Generate mock vehicles near pickup location with real road-snapping (async version)
 * @param {number} pickupLat - Pickup latitude
 * @param {number} pickupLng - Pickup longitude
 * @param {number} count - Number of vehicles to generate (default: 4-5)
 * @returns {Promise<Array>} Array of vehicle objects
 */
export const generateVehiclesNearPickupReal = async (pickupLat, pickupLng, count = null) => {
    // Generate 4-5 vehicles randomly if count not specified
    const vehicleCount = count || (4 + Math.floor(Math.random() * 2))
    const vehicles = []

    // Generate all random coordinates first
    const randomCoords = []
    for (let i = 0; i < vehicleCount; i++) {
        const randomCoord = getRandomCoordinateInRadius(pickupLat, pickupLng, 1.0)
        randomCoords.push(randomCoord)
    }

    // Snap to roads (with delay to respect rate limits)
    for (let i = 0; i < vehicleCount; i++) {
        const randomCoord = randomCoords[i]

        // Add small delay between requests to respect API rate limits
        if (i > 0) {
            await new Promise(resolve => setTimeout(resolve, 100))
        }

        // Snap to nearest road
        const snappedCoord = await snapToNearestRoadReal(randomCoord.lat, randomCoord.lng)

        // Randomly assign brand and vehicle type
        const brand = BRANDS[Math.floor(Math.random() * BRANDS.length)]
        const vehicleType = VEHICLE_TYPES[Math.floor(Math.random() * VEHICLE_TYPES.length)]

        vehicles.push({
            id: `vehicle-${Date.now()}-${i}`,
            brand: brand.name,
            brandColor: brand.color,
            brandTextColor: brand.textColor,
            vehicleType: vehicleType.type,
            vehicleIcon: vehicleType.emoji,
            lat: snappedCoord.lat,
            lng: snappedCoord.lng
        })
    }

    return vehicles
}

/**
 * Convert lat/lng to pixel position on SVG map
 * This is a simplified projection for the mock map
 * @param {number} lat - Latitude
 * @param {number} lng - Longitude
 * @param {Object} mapBounds - Map bounds { minLat, maxLat, minLng, maxLng }
 * @param {Object} mapSize - Map size { width, height }
 * @returns {Object} { x, y } pixel coordinates
 */
export const latLngToPixel = (lat, lng, mapBounds, mapSize) => {
    const { minLat, maxLat, minLng, maxLng } = mapBounds
    const { width, height } = mapSize

    // Normalize coordinates to 0-1 range
    const normalizedX = (lng - minLng) / (maxLng - minLng)
    const normalizedY = 1 - (lat - minLat) / (maxLat - minLat) // Invert Y for screen coordinates

    // Convert to pixel coordinates
    return {
        x: normalizedX * width,
        y: normalizedY * height
    }
}
