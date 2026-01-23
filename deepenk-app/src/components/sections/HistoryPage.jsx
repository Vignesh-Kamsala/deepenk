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
    <div className="min-h-screen bg-white px-4 pt-20 pb-8">
      {/* Page Title */}
      <h1
        className="text-[32px] font-bold mb-6"
        style={{ color: '#111111' }}
      >
        Your Booking History
      </h1>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className="px-4 py-2 rounded-full whitespace-nowrap transition-all active:scale-95"
            style={{
              backgroundColor: activeFilter === filter ? '#FF6B35' : 'transparent',
              color: activeFilter === filter ? '#FFFFFF' : '#757575',
              fontWeight: activeFilter === filter ? '600' : '400',
              fontSize: '14px'
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div
        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-6"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <BsSearch className="text-base" style={{ color: '#BDBDBD' }} />
        <input
          type="text"
          placeholder="Search by place or booking..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 outline-none text-sm bg-transparent"
          style={{ color: '#111111' }}
        />
      </div>

      {/* Booking List */}
      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <div
            key={booking.id}
            className="flex items-center gap-4 p-4 rounded-2xl"
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
              border: '1px solid #F5F5F5'
            }}
          >
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#FFF9E6' }}
            >
              <span className="text-2xl">{booking.icon}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3
                className="text-base font-semibold mb-0.5"
                style={{ color: '#111111' }}
              >
                {booking.title}
              </h3>
              <p
                className="text-xs"
                style={{ color: '#757575' }}
              >
                {booking.date}
              </p>
            </div>

            {/* Status Badge */}
            <div
              className="px-3 py-1.5 rounded-full flex-shrink-0"
              style={{
                backgroundColor: booking.statusColor,
                color: booking.textColor
              }}
            >
              <span className="text-xs font-medium">{booking.status}</span>
            </div>
          </div>
        ))}

        {filteredBookings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-base" style={{ color: '#BDBDBD' }}>
              No bookings found
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default HistoryPage
