import React from 'react'
import MapPreview from './MapPreview'
import { BsX } from 'react-icons/bs'

const SearchMapModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col">
      <div className="absolute inset-0 bg-black opacity-30" onClick={onClose} />

      <div className="relative mt-auto bg-white rounded-t-2xl shadow-xl w-full">
        <div className="flex items-center justify-between p-3">
          <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">☰</div>
          <div className="text-lg font-bold">Deepenk</div>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <BsX />
          </button>
        </div>

        <MapPreview />

        <div className="p-4">
          <div className="mb-3">
            <div className="flex items-center gap-3 bg-white rounded-full border px-4 py-3 shadow-sm">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35"/></svg>
              <input className="flex-1 outline-none" placeholder="Where do you want to go?" />
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">Deepenk find's Best routs and prices from trusted ride partners</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white border rounded-2xl px-4 py-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">📍</div>
              <input className="flex-1 outline-none" placeholder="Pickup......" />
            </div>
            <div className="flex items-center gap-3 bg-white border rounded-2xl px-4 py-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">📍</div>
              <input className="flex-1 outline-none" placeholder="Drop......" />
            </div>
            <button className="w-40 bg-gray-200 text-sm rounded-full px-3 py-2">Select from the map</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchMapModal
