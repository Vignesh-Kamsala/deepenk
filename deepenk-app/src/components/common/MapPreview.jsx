import React from 'react'

const MapPreview = () => {
  return (
    <div className="w-full h-64 relative bg-gray-100 overflow-hidden rounded-t-lg">
      <svg viewBox="0 0 400 220" className="w-full h-full">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#4DA0FF" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>
        </defs>
        {/* faint street grid */}
        <g stroke="#E6E6E6" strokeWidth="1">
          <path d="M0 40 H400" />
          <path d="M0 80 H400" />
          <path d="M0 120 H400" />
          <path d="M0 160 H400" />
          <path d="M40 0 V220" />
          <path d="M120 0 V220" />
          <path d="M200 0 V220" />
          <path d="M280 0 V220" />
        </g>
        {/* route */}
        <path d="M40 180 C90 150, 160 150, 200 110 C240 70, 320 50, 360 40"
          stroke="url(#g)" strokeWidth="6" fill="none" strokeLinecap="round" />
        {/* start marker */}
        <g>
          <circle cx="40" cy="180" r="10" fill="#2ECC71" />
          <circle cx="40" cy="180" r="5" fill="#fff" />
        </g>
        {/* end marker (checkered) */}
        <g transform="translate(360,40)">
          <rect width="18" height="18" rx="3" fill="#fff" stroke="#000" />
          <path d="M0 0 L9 9 M9 0 L0 9" stroke="#000" strokeWidth="1" />
        </g>
      </svg>

      {/* Provider badges */}
      <div className="absolute left-6 top-10 flex flex-col gap-2">
        <div className="px-3 py-1 rounded-full bg-yellow-300 text-sm font-semibold">Rapido</div>
        <div className="px-3 py-1 rounded-full bg-black text-white text-sm font-semibold">Uber</div>
        <div className="px-3 py-1 rounded-full bg-white text-black text-sm font-semibold border">OLA</div>
      </div>

      {/* transport type buttons */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-3">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow flex-shrink-0">🚲</div>
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow flex-shrink-0">🛺</div>
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow flex-shrink-0">🚗</div>
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow flex-shrink-0">🚕</div>
      </div>
    </div>
  )
}

export default MapPreview
