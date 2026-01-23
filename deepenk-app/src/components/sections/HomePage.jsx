import React from 'react'
import logoImg from '../../assets/sidebar/logo.png'
import submitIcon from '../../assets/sidebar/submit.png'
import { BsMicFill } from 'react-icons/bs'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white relative pb-32">

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">

        {/* Logo */}
        <div className="mb-8">
          <img
            src={logoImg}
            alt="Deepenk Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-[32px] font-bold leading-tight text-center mb-8 text-black max-w-sm">
          what do you want to choose today?
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-xs mb-6">
          <div className="flex gap-3">
            <button className="flex-1 px-4 py-2.5 bg-[#D9D9D9] hover:bg-gray-300 rounded-full transition-colors">
              <span className="font-semibold text-sm text-black">Book a Ride</span>
            </button>
            <button className="flex-1 px-4 py-2.5 bg-[#D9D9D9] hover:bg-gray-300 rounded-full transition-colors">
              <span className="font-semibold text-sm text-black">Book a Ticket</span>
            </button>
          </div>
          <div className="flex gap-3">
            <button className="flex-1 px-4 py-2.5 bg-[#D9D9D9] hover:bg-gray-300 rounded-full transition-colors">
              <span className="font-semibold text-sm text-black">Order a Food</span>
            </button>
            <button className="px-4 py-2.5 bg-[#D9D9D9] hover:bg-gray-300 rounded-full transition-colors">
              <span className="font-semibold text-sm text-black">Shopping</span>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Input Section - Fixed to bottom */}
      <div className="fixed bottom-0 left-0 right-0 px-4 py-6 bg-white">
        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 py-3 shadow-lg max-w-md mx-auto">

          {/* Plus Icon */}
          <button className="text-2xl text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
            +
          </button>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Ask Deepenk"
            className="flex-1 outline-none text-base placeholder-gray-400 bg-transparent font-normal"
          />

          {/* Voice Icon */}
          <button className="text-black hover:text-gray-600 transition-colors flex-shrink-0">
            <BsMicFill className="text-lg" />
          </button>

          {/* Send Button */}
          <button className="bg-black hover:bg-gray-800 rounded-full p-2.5 transition-colors flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </div>
      </div>

    </div>
  )
}

export default HomePage
