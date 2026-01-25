import React from 'react'
import mapImage from '../../assets/map-preview.png'

const MapPreview = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <img 
        src={mapImage} 
        alt="Route Map"
        className="w-full h-full object-cover"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  )
}

export default MapPreview
