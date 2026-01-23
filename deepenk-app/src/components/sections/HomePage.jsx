import React from 'react'
import logoImg from '../../assets/sidebar/logo.png'
import { BsMicFill } from 'react-icons/bs'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">

      {/* Top Right Navigation */}
      <div className="absolute top-6 right-6 flex items-center gap-3 z-10">
        <button
          className="px-6 py-2.5 rounded-full transition-all active:scale-95 text-[15px] font-medium"
          style={{ backgroundColor: '#D9D9D9', color: '#111111' }}
        >
          Login
        </button>
        <button
          className="px-6 py-2.5 rounded-full transition-all active:scale-95 text-[15px] font-medium"
          style={{ backgroundColor: '#D9D9D9', color: '#111111' }}
        >
          Sign in
        </button>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-36">

        {/* Logo */}
        <div className="mb-10">
          <img
            src={logoImg}
            alt="Deepenk Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Main Heading */}
        <h1
          className="text-[34px] font-normal leading-tight text-center mb-10 max-w-sm"
          style={{ color: '#111111', letterSpacing: '-0.02em' }}
        >
          what do you want to choose today?
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 w-full max-w-sm mb-12">
          <button
            className="px-[14px] py-[8px] rounded-full transition-all active:scale-95"
            style={{ backgroundColor: '#D9D9D9', color: '#111111' }}
          >
            <span className="text-[14px] font-medium">Book a Ride</span>
          </button>
          <button
            className="px-[14px] py-[8px] rounded-full transition-all active:scale-95"
            style={{ backgroundColor: '#D9D9D9', color: '#111111' }}
          >
            <span className="text-[14px] font-medium">Book a Ticket</span>
          </button>
          <button
            className="px-[14px] py-[8px] rounded-full transition-all active:scale-95"
            style={{ backgroundColor: '#D9D9D9', color: '#111111' }}
          >
            <span className="text-[14px] font-medium">Order a Food</span>
          </button>
          <button
            className="px-[14px] py-[8px] rounded-full transition-all active:scale-95"
            style={{ backgroundColor: '#D9D9D9', color: '#111111' }}
          >
            <span className="text-[14px] font-medium">Shopping</span>
          </button>
        </div>

        {/* Search Input Section */}
        <div className="flex items-center gap-4 w-full max-w-3xl mx-auto">

          {/* Plus Button */}
          <button
            className="w-[52px] h-[52px] rounded-full flex items-center justify-center flex-shrink-0 transition-all active:scale-95 bg-white shadow-lg border border-gray-100"
          >
            <span className="text-[28px] text-gray-500 font-light">+</span>
          </button>

          {/* Input Container */}
          <div
            className="flex-1 flex items-center gap-3 px-6 py-4 rounded-full bg-white shadow-lg border border-gray-100"
          >
            {/* Input Field */}
            <input
              type="text"
              placeholder="Ask Deepenk"
              className="flex-1 outline-none text-lg bg-transparent ml-2 text-gray-700 placeholder-gray-400"
            />

            {/* Voice Icon */}
            <button className="p-2 transition-all active:scale-95 hover:bg-gray-50 rounded-full">
              <BsMicFill className="text-[18px] text-gray-800" />
            </button>

            {/* Send Button */}
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all active:scale-95 bg-black hover:opacity-90"
            >
              <svg className="w-5 h-5" fill="none" stroke="#FFFFFF" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>

      </div>

    </div>

  )
}

export default HomePage
