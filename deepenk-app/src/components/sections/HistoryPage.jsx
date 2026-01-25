import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const HistoryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filters = ['All', 'Food', 'Ride', 'Hotel', 'Travel']

  const bookings = [
    {
      id: 1,
      icon: '🍔',
      title: 'Burger House',
      date: 'Apr 22, 2023',
      status: 'Completed',
      statusColor: '#E5E5E5',
      textColor: '#757575'
    },
    {
      id: 2,
      icon: '🏍️',
      title: 'Airport Ride',
      date: 'Apr 15, 2023',
      status: 'Reorder',
      statusColor: '#10B981',
      textColor: '#FFFFFF'
    },
    {
      id: 3,
      icon: '🏖️',
      title: 'Seaside Resort',
      date: 'Apr 10 – Apr 12, 2023',
      status: 'Ongoing',
      statusColor: '#FF9500',
      textColor: '#FFFFFF'
    },
    {
      id: 4,
      icon: '✈️',
      title: 'Paris Flight',
      date: 'Mar 28, 2023',
      status: 'Cancelled',
      statusColor: '#EF4444',
      textColor: '#FFFFFF'
    }
  ]

  const filteredBookings = bookings.filter(booking => {
    const matchesFilter = activeFilter === 'All' || booking.status.toLowerCase().includes(activeFilter.toLowerCase())
    const matchesSearch = booking.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white px-4 pt-16 pb-4 flex flex-col">
      <div className="flex-1">
      {/* Page Title (centered like Figma) */}
      <h1 className="text-[28px] font-extrabold text-center mb-4" style={{ color: '#111827' }}>
        Your Booking History
      </h1>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-4 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 whitespace-nowrap transition-all active:scale-95 ${activeFilter === filter ? 'rounded-full' : 'rounded-md'}`}
            style={{
              backgroundColor: activeFilter === filter ? '#FF6B35' : 'transparent',
              color: activeFilter === filter ? '#FFFFFF' : '#6B7280',
              fontWeight: activeFilter === filter ? 700 : 500,
              fontSize: '14px'
            }}
          >
            {filter}
          </button>
        ))}
      </div>
      {/* Search Bar */}
      <div className="w-full mb-6">
        <div className="w-full flex items-center gap-3 px-4 py-3 rounded-full bg-[#F5F5F5]">
          <BsSearch className="text-base" style={{ color: '#9CA3AF' }} />
          <input
            type="text"
            placeholder="Search by place or booking..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 outline-none text-sm bg-transparent min-w-0"
            style={{ color: '#111827' }}
          />
        </div>
      </div>

      {/* Booking List */}
      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <div
            key={booking.id}
            className="flex items-center gap-4 p-4 rounded-2xl bg-white"
            style={{ boxShadow: '0 6px 18px rgba(15, 23, 42, 0.06)', border: '1px solid #F3F4F6' }}
          >
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: booking.icon === '🍔' ? '#FFF3E0' : booking.icon === '🏍️' ? '#E6FFFA' : booking.icon === '🏖️' ? '#FFF7ED' : '#F0F9FF' }}
            >
              <span className="text-2xl">{booking.icon}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold mb-0.5 text-gray-900 truncate">{booking.title}</h3>
              <p className="text-xs text-gray-500">{booking.date}</p>
            </div>

            {/* Status Badge */}
            <div className="flex-shrink-0">
              <div className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ backgroundColor: booking.statusColor, color: booking.textColor }}>
                {booking.status}
              </div>
            </div>
          </div>
        ))}

        {filteredBookings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-base text-gray-400">No bookings found</p>
          </div>
        )}
      </div>
      </div>

      {/* Trial note at bottom */}
      <div className="w-full px-4 mt-8">
        <p className="text-[10px] text-gray-500 text-center leading-relaxed">Note: This is a trial version, so results may be limited, optimized and not real data. Your feedback will help us improve the final product with better features.</p>
      </div>
    </div>
  )
}

export default HistoryPage
