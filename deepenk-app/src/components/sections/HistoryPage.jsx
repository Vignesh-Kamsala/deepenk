import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const HistoryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filters = ['All', 'Food', 'E-commerce', 'Rides', 'Hotels', 'Travels']

  const bookings = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      title: 'Radisson Blue - Thirupathi',
      date: 'Completed on 10 Nov 2025',
      status: 'Completed',
      statusColor: '#E5E5E5',
      textColor: '#757575'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
      title: 'CheeseBurger',
      date: 'Completed on 10 Nov 2025',
      status: 'Reorder',
      statusColor: '#FF6F00',
      textColor: '#FFFFFF'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      title: 'Rapido Bike',
      date: '₹25',
      status: 'On going',
      statusColor: '#FFE0B2',
      textColor: '#FF6F00'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop',
      title: 'Amaravathi Travels',
      date: 'Completed on 10 Feb 2026',
      status: 'On going',
      statusColor: '#FFE0B2',
      textColor: '#FF6F00'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
      title: 'CheeseBurger',
      date: 'Completed on 18 Mar 2026',
      status: 'cancel',
      statusColor: '#FFCDD2',
      textColor: '#EF5350'
    }
  ]

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white px-4 lg:px-8 pt-16 lg:pt-8 pb-4 flex flex-col">
      <div className="flex-1 max-w-3xl mx-auto w-full">
        {/* Page Title */}
        <h1 className="text-2xl lg:text-3xl font-extrabold text-center mb-4 lg:mb-6" style={{ color: '#111827' }}>
          Your Booking History
        </h1>

        {/* Filter Tabs */}
        <div className="flex gap-3 lg:gap-4 mb-4 lg:mb-6 overflow-x-auto pb-2 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 whitespace-nowrap transition-all active:scale-95 text-sm lg:text-base ${activeFilter === filter ? 'rounded-full' : 'rounded-md'
                }`}
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
          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="flex items-center gap-4 lg:gap-6 p-3 lg:p-4 rounded-2xl lg:rounded-3xl bg-white hover:shadow-lg transition-shadow"
              style={{ boxShadow: '0 6px 18px rgba(15, 23, 42, 0.06)', border: '1px solid #F3F4F6' }}
            >
              {/* Image */}
              <div className="w-20 h-16 lg:w-28 lg:h-20 rounded-xl lg:rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src={booking.image}
                  alt={booking.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base lg:text-lg font-semibold mb-0.5 text-gray-900 truncate">
                  {booking.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-500">{booking.date}</p>
              </div>

              {/* Status Badge */}
              <div className="flex-shrink-0">
                <div
                  className="px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-medium"
                  style={{ backgroundColor: booking.statusColor, color: booking.textColor }}
                >
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
