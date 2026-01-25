import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const RidesPage = () => {
  const [selectedTransport, setSelectedTransport] = useState(1)

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
          {/* subtle map-like background (placeholder) */}
          <div className="absolute inset-0 opacity-90" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.01))' }} />

          {/* route path */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <path d="M 50 320 Q 110 260, 170 240 T 260 200 T 320 170 T 360 120" fill="none" stroke="#1976D2" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* start marker */}
          <div style={{ position: 'absolute', left: 36, bottom: 58, zIndex: 3 }}>
            <div style={{ width: 36, height: 36, borderRadius: 18, background: '#4CAF50', border: '3px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />
            <div style={{ marginTop: 8, fontSize: 13, background: 'white', padding: '6px 8px', borderRadius: 8, boxShadow: '0 4px 10px rgba(0,0,0,0.08)', fontWeight: 600 }}>MG Road</div>
          </div>

          {/* end marker */}
          <div style={{ position: 'absolute', right: 36, top: 38, zIndex: 3, display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: 20 }}>🏁</div>
            <div style={{ width: 36, height: 36, borderRadius: 18, background: '#4CAF50', border: '3px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />
          </div>

          {/* small vehicle icons along route */}
          <div style={{ position: 'absolute', left: 120, bottom: 160, zIndex: 3 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ fontSize: 26 }}>🛺</div>
              <div style={{ fontSize: 26 }}>🚚</div>
            </div>
          </div>

          {/* provider badges */}
          <div style={{ position: 'absolute', left: 20, bottom: 20, zIndex: 4, display: 'flex', gap: 8 }}>
            <div style={{ background: '#FFD700', color: '#111', padding: '6px 10px', borderRadius: 999, fontWeight: 700, fontSize: 12 }}>Rapido</div>
            <div style={{ background: '#111', color: '#fff', padding: '6px 10px', borderRadius: 999, fontWeight: 700, fontSize: 12 }}>Uber</div>
            <div style={{ background: '#fff', color: '#111', padding: '6px 10px', borderRadius: 999, fontWeight: 700, fontSize: 12, border: '1.5px solid #E5E5E5', display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 18, height: 18, background: '#FFD700', borderRadius: 999 }} />
              <div>OLA</div>
            </div>
          </div>

          {/* Search removed from map (placed below map to match Figma) */}
        </div>

        {/* Search area (below map) - Figma positioning */}
        <div className="mt-4 px-4">
          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 12, padding: '12px 18px', borderRadius: 999, background: '#fff', boxShadow: '0 8px 28px rgba(0,0,0,0.12)', border: '1.5px solid #E5E5E5' }}>
            <BsSearch style={{ color: '#757575', fontSize: 18 }} />
            <input type="text" placeholder="Where do you want to go?" style={{ flex: 1, border: 'none', outline: 'none', fontSize: 15, color: '#111' }} />
          </div>
        </div>

        {/* Description Text (below map and search) */}
        <div className="mt-6 px-2">
          <p className="text-center text-sm leading-relaxed" style={{ color: '#9E9E9E' }}>
            Deepenk finds the best routes and prices from trusted ride partners
          </p>
        </div>
      </div>
    </div>
  )
}

export default RidesPage

