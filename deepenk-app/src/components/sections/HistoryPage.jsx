import React, { useState, useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { history as historyApi } from '../../api/client'

const filters = ['All', 'Food', 'E-commerce', 'Rides', 'Hotels', 'Travels']

const HistoryPage = () => {
  const { isAuthenticated, openLoginModal } = useAuthStore()
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isAuthenticated) {
      setBookings([])
      setLoading(false)
      return
    }
    setLoading(true)
    setError(null)
    const cat = activeFilter === 'All' ? undefined : activeFilter
    historyApi.list(cat).then((res) => {
      setBookings((res.items || []).map((item) => ({
        id: item.id,
        searchId: item.searchId,
        image: item.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        title: item.title || item.query,
        date: item.date || item.timestamp,
        status: item.status || 'Completed',
        statusColor: '#E5E5E5',
        textColor: '#757575'
      })))
    }).catch((err) => {
      setError(err.body?.message || err.message)
      setBookings([])
    }).finally(() => setLoading(false))
  }, [isAuthenticated, activeFilter])

  const filteredBookings = bookings.filter(booking =>
    booking.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white px-4 lg:px-8 pt-16 lg:pt-8 pb-4 flex flex-col">
      <div className="flex-1 max-w-3xl mx-auto w-full">
        {/* Page Title */}
        <h1 className="text-2xl lg:text-3xl font-extrabold text-center mb-4 lg:mb-6" style={{ color: '#111827' }}>
          Your Booking History
        </h1>

        {!isAuthenticated && (
          <p className="text-center text-gray-500 mb-4">
            <button type="button" onClick={openLoginModal} className="text-orange-500 font-medium hover:underline">Log in</button>
            {' '}to see your booking history.
          </p>
        )}

        {/* Filter Tabs */}
        <div className="flex gap-3 lg:gap-4 mb-4 lg:mb-6 overflow-x-auto pb-2 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 whitespace-nowrap transition-all active:scale-95 text-sm lg:text-base ${activeFilter === filter ? 'rounded-full' : 'rounded-md'}`}
              style={{
                backgroundColor: activeFilter === filter ? '#FF6B35' : 'transparent',
                color: activeFilter === filter ? '#FFFFFF' : '#6B7280',
                fontWeight: activeFilter === filter ? 700 : 500
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="w-full mb-6 lg:mb-8">
          <div className="w-full flex items-center gap-3 px-4 lg:px-6 py-3 lg:py-4 rounded-full bg-[#F5F5F5] border border-gray-200">
            <BsSearch className="text-base lg:text-lg" style={{ color: '#9CA3AF' }} />
            <input
              type="text"
              placeholder="Search past order or booking......"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-sm lg:text-base bg-transparent min-w-0"
              style={{ color: '#111827' }}
            />
          </div>
        </div>

        {/* Booking List */}
        <div className="space-y-4 lg:space-y-5">
          {loading && (
            <div className="text-center py-8">
              <p className="text-gray-500">Loading history…</p>
            </div>
          )}
          {error && (
            <div className="text-center py-4">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
          {!loading && !error && filteredBookings.map((booking) => (
            <button
              type="button"
              key={booking.id}
              onClick={() => booking.searchId && navigate(`/?searchId=${booking.searchId}`)}
              className="w-full flex items-center gap-4 lg:gap-6 p-3 lg:p-4 rounded-2xl lg:rounded-3xl bg-white hover:shadow-lg transition-shadow text-left"
              style={{ boxShadow: '0 6px 18px rgba(15, 23, 42, 0.06)', border: '1px solid #F3F4F6' }}
            >
              <div className="w-20 h-16 lg:w-28 lg:h-20 rounded-xl lg:rounded-2xl overflow-hidden flex-shrink-0">
                <img src={booking.image} alt={booking.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base lg:text-lg font-semibold mb-0.5 text-gray-900 truncate">{booking.title}</h3>
                <p className="text-xs lg:text-sm text-gray-500">{booking.date}</p>
              </div>
              <div className="flex-shrink-0">
                <div
                  className="px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-medium"
                  style={{ backgroundColor: booking.statusColor, color: booking.textColor }}
                >
                  {booking.status}
                </div>
              </div>
            </button>
          ))}

          {!loading && !error && filteredBookings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-base text-gray-400">{isAuthenticated ? 'No bookings found' : 'Log in to see your history.'}</p>
            </div>
          )}
        </div>
      </div>

      {/* Trial note at bottom */}
      <div className="w-full px-4 mt-8 max-w-3xl mx-auto">
        <p className="text-[10px] lg:text-xs text-gray-500 text-center leading-relaxed">
          Note: This is a trial version, so results may be limited, optimized and not real data. Your feedback will help us improve the final product with better features.
        </p>
        <div className="flex justify-center mt-3">
          <button className="px-6 py-2 text-xs lg:text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-50">
            Feedback
          </button>
        </div>
      </div>
    </div>
  )
}

export default HistoryPage
