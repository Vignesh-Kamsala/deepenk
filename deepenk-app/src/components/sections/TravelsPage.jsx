import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { MdFlightTakeoff, MdTrain, MdDirectionsBus, MdSwapVert } from 'react-icons/md'

const TravelsPage = () => {
  const [selectedTransport, setSelectedTransport] = useState('buses')
  const [leavingFrom, setLeavingFrom] = useState('')
  const [goingTo, setGoingTo] = useState('')
  const [departureDate, setDepartureDate] = useState('Thu, 22 Jan')
  const [selectedDate, setSelectedDate] = useState(22)
  const [showResults, setShowResults] = useState(false)

  const transportTypes = [
    { id: 'flights', icon: <MdFlightTakeoff size={20} />, label: 'Flights', color: '#757575' },
    { id: 'trains', icon: <MdTrain size={20} />, label: 'Trains', color: '#4CAF50' },
    { id: 'buses', icon: <MdDirectionsBus size={20} />, label: 'Buses', color: '#FF6F00' }
  ]

  const dates = [
    { day: 22, month: 'Mar', selected: true },
    { day: 23, month: 'Mar', selected: false },
    { day: 24, month: 'Mar', selected: false },
    { day: 25, month: 'Mar', selected: false },
    { day: 26, month: 'Mar', selected: false },
    { day: 27, month: 'Mar', selected: false },
    { day: 28, month: 'Mar', selected: false },
    { day: 29, month: 'Mar', selected: false }
  ]

  const busResults = [
    {
      id: 1,
      name: 'Zingbus plus',
      class: '2A | 2hrs',
      departure: '4:30 PM',
      arrival: '5:55 AM',
      price: '₹2,890',
      originalPrice: 'MRP',
      rating: 4.6,
      seats: 'Get 15% off with Snapdeal + 10% off with Pay app',
      bestValue: true
    },
    {
      id: 2,
      name: 'Zingbus Elite',
      class: '2A | 2hrs',
      departure: '7:30 PM',
      arrival: '5:05 AM',
      price: '₹2,250',
      originalPrice: 'MRP',
      rating: 3.9,
      seats: 'Get 10% off with Snapdeal + 10% off with Pay app',
      bestValue: false
    },
    {
      id: 3,
      name: 'Zingbus Comfort+',
      class: '3hrs 10min',
      departure: '1:10 PM',
      arrival: '9:05 AM',
      price: '₹2,500',
      originalPrice: 'MRP',
      rating: 3.3,
      seats: '',
      bestValue: false
    }
  ]

  const deepenkInsights = [
    'Has mostly quality amenities like AC bio-washroom',
    'Best balance of price for this quality & deals',
    'Has fastest schedule for 1 hr normal journey',
    'Highest popularity (95% no delay) at this time slots',
    'Has availability with a short seat at Deepenk',
    'Optimal refund opportunity (refund tickets are easy)'
  ]

  const handleSearch = () => {
    setShowResults(true)
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-white pb-8 pt-16 lg:pt-8">
        <div className="px-4 lg:px-8 max-w-4xl mx-auto">
          {/* Transport Tabs */}
          <div className="flex items-center justify-center gap-8 lg:gap-12 mb-6">
            {transportTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedTransport(type.id)}
                className={`flex items-center gap-2 pb-2 border-b-2 transition-all ${selectedTransport === type.id
                    ? 'border-current'
                    : 'border-transparent'
                  }`}
                style={{ color: selectedTransport === type.id ? type.color : '#757575' }}
              >
                {type.icon}
                <span className="font-medium">{type.label}</span>
              </button>
            ))}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {[
              { id: 'ac', icon: '❄️', label: 'AC', active: true },
              { id: 'nonac', icon: '🚌', label: 'Non-AC', active: false },
              { id: 'seater', icon: '💺', label: 'Seater', active: false },
              { id: 'filters', icon: '⚙️', label: 'Filters', active: false }
            ].map((filter) => (
              <button
                key={filter.id}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-xs font-medium transition-all ${filter.active ? 'bg-gray-100 border border-gray-300' : 'bg-white border border-gray-200'
                  }`}
              >
                <span className="text-lg">{filter.icon}</span>
                <span className="text-gray-600">{filter.label}</span>
              </button>
            ))}
          </div>

          {/* Route Header */}
          <div className="flex items-center gap-4 mb-6">
            <button onClick={() => setShowResults(false)} className="p-2 hover:bg-gray-100 rounded-full">
              <FiArrowLeft size={20} />
            </button>
            <h2 className="text-lg lg:text-xl font-bold text-gray-900">Bengaluru to Hyderabad</h2>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {busResults.map((bus, idx) => (
              <div
                key={bus.id}
                className={`bg-white rounded-2xl border overflow-hidden ${bus.bestValue ? 'border-green-400' : 'border-gray-200'
                  }`}
              >
                {/* Bus Info Row */}
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* Bus Name and Rating */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-900">{bus.name}</span>
                      </div>

                      {/* Class and Duration */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500">{bus.class}</span>
                        <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">{bus.rating}</span>
                      </div>

                      {/* Time */}
                      <div className="mb-1">
                        <span className="text-sm font-semibold text-gray-900">{bus.departure} - {bus.arrival}</span>
                      </div>

                      {/* Offers */}
                      {bus.seats && (
                        <p className="text-xs text-green-600">{bus.seats}</p>
                      )}
                    </div>

                    {/* Price Section */}
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs text-gray-400 mb-1">{bus.originalPrice}</div>
                      <div className="text-xl lg:text-2xl font-bold text-gray-900">{bus.price}</div>
                    </div>
                  </div>
                </div>

                {/* Deepenk Insights - only for first result */}
                {bus.bestValue && (
                  <div className="border-t border-gray-100 p-4 bg-gray-50">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-orange-500">💡</span> Deepenk Insights
                    </h4>
                    <ul className="space-y-1.5">
                      {deepenkInsights.map((insight, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="text-green-500 flex-shrink-0">✓</span>
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Book Button */}
          <button
            className="w-full mt-6 py-4 rounded-full text-lg font-semibold text-white shadow-lg"
            style={{ background: 'linear-gradient(90deg, #FF6F00 0%, #FF9900 100%)' }}
          >
            Book On Red bus
          </button>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm font-semibold text-gray-800 mb-1">Travel, Made Smarter with Deepenk</p>
            <p className="text-[10px] lg:text-xs text-gray-500 leading-relaxed max-w-md mx-auto">
              Deepenk helps you find the best buses across multiple sources. Buses will be listed by deepenk on basis of matching speed, timing, price, availability, comfort, reviews and availability.
            </p>
            <button className="mt-3 px-6 py-2 text-xs font-medium border border-gray-300 rounded-full hover:bg-gray-50">
              Feedback
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-8 pb-8">
      <div className="px-4 lg:px-8 max-w-3xl mx-auto">
        {/* Transport Tabs */}
        <div className="flex items-center justify-center gap-8 lg:gap-16 mb-8 lg:mb-12">
          {transportTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedTransport(type.id)}
              className={`flex items-center gap-2 pb-2 border-b-2 transition-all ${selectedTransport === type.id
                  ? 'border-current'
                  : 'border-transparent'
                }`}
              style={{ color: selectedTransport === type.id ? type.color : '#757575' }}
            >
              {type.icon}
              <span className="font-medium lg:text-lg">{type.label}</span>
            </button>
          ))}
        </div>

        {/* Search Form Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 lg:p-8 mb-8">
          {/* Leaving From */}
          <div className="mb-4">
            <label className="text-xs text-gray-500 mb-1 block">Leaving From</label>
            <input
              type="text"
              value={leavingFrom}
              onChange={(e) => setLeavingFrom(e.target.value)}
              placeholder="Enter city or station"
              className="w-full px-4 py-3 border-b border-gray-200 focus:outline-none focus:border-orange-400 text-lg"
            />
          </div>

          {/* Swap Button */}
          <div className="flex justify-end -my-2 relative z-10">
            <button className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-md">
              <MdSwapVert size={24} />
            </button>
          </div>

          {/* Going To */}
          <div className="mb-6">
            <label className="text-xs text-gray-500 mb-1 block">Going to</label>
            <input
              type="text"
              value={goingTo}
              onChange={(e) => setGoingTo(e.target.value)}
              placeholder="Enter city or station"
              className="w-full px-4 py-3 border-b border-gray-200 focus:outline-none focus:border-orange-400 text-lg"
            />
          </div>

          {/* Departure Date */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <label className="text-xs text-gray-500 block">Departure</label>
                <span className="text-lg font-semibold text-gray-900">{departureDate}</span>
              </div>
              <button className="text-sm text-orange-500 font-medium flex items-center gap-1">
                📅 Select date
              </button>
            </div>

            {/* Date Picker */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {dates.map((date) => (
                <button
                  key={date.day}
                  onClick={() => setSelectedDate(date.day)}
                  className={`flex-shrink-0 w-12 h-16 lg:w-14 lg:h-18 rounded-xl flex flex-col items-center justify-center transition-all ${selectedDate === date.day
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700'
                    }`}
                >
                  <span className="text-lg lg:text-xl font-bold">{date.day}</span>
                  <span className="text-[10px] lg:text-xs">{date.month}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="w-full py-4 lg:py-5 rounded-full text-lg lg:text-xl font-bold text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(90deg, #FF6F00 0%, #FF9900 100%)' }}
          >
            Search {selectedTransport.charAt(0).toUpperCase() + selectedTransport.slice(1)}
          </button>
        </div>

        {/* Footer Description */}
        <div className="text-center">
          <p className="text-sm lg:text-base font-semibold text-gray-800 mb-2">Travel, Made Smarter with Deepenk</p>
          <p className="text-xs lg:text-sm text-gray-500 leading-relaxed max-w-lg mx-auto">
            Deepenk helps you find the best Buses, Trains, Cars and Flights across platforms in seconds by comparing pricing, arrival time, availability and automatically apply all available offers and coupons.
          </p>
          <button className="mt-4 px-6 py-2 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-50">
            Feedback
          </button>
        </div>
      </div>
    </div>
  )
}

export default TravelsPage
