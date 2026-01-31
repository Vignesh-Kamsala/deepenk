import React from 'react'

/**
 * VehicleMarker Component
 * Displays a minimal vehicle marker with brand label and vehicle-type icon
 */
const VehicleMarker = ({ brand, brandColor, brandTextColor, vehicleIcon, position }) => {
    return (
        <div
            className="absolute z-10 flex flex-col items-center gap-1"
            style={{
                left: position.left,
                top: position.top,
                transform: 'translate(-50%, -50%)', // Center the marker on the coordinate
            }}
        >
            {/* Vehicle Icon */}
            <div
                className="flex items-center justify-center"
                style={{
                    fontSize: 20,
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
                }}
            >
                {vehicleIcon}
            </div>

            {/* Brand Label Badge */}
            <div
                className="flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap"
                style={{
                    backgroundColor: brandColor,
                    color: brandTextColor,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
                    minWidth: 40,
                }}
            >
                {brand}
            </div>
        </div>
    )
}

export default VehicleMarker
