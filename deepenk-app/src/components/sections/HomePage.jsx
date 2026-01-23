import React from 'react'
import logoImg from '../../assets/sidebar/logo.png'
import { BsMicFill } from 'react-icons/bs'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-36">

        {/* Logo */}
        <div className="mb-10">
          <img
            src={logoImg}
            alt="Deepenk Logo"
            className="w-16 h-16 object-contain"
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
        <div className="flex flex-wrap justify-center gap-2.5 w-full max-w-sm mb-8">
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

      </div>

      {/* Bottom Input Section - Fixed to bottom */}
      <div className="fixed bottom-0 left-0 right-0 px-5 py-6 bg-white">
        <div className="flex items-center gap-3 max-w-md mx-auto">

          {/* Plus Button - Separate Circle */}
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all active:scale-95"
            style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #E5E5E5' }}
          >
            <span className="text-[24px]" style={{ color: '#757575' }}>+</span>
          </button>

          {/* Input Container */}
          <div
            className="flex-1 flex items-center gap-3 px-4 py-3 rounded-full"
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)',
              border: '1px solid #F0F0F0'
            }}
          >
            {/* Input Field */}
            <input
              type="text"
              placeholder="Ask Deepenk"
              className="flex-1 outline-none text-[15px] bg-transparent"
              style={{ color: '#111111' }}
            />

            {/* Voice Icon */}
            <button className="flex-shrink-0 transition-all active:scale-95">
              <BsMicFill className="text-[18px]" style={{ color: '#111111' }} />
            </button>

            {/* Send Button */}
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all active:scale-95"
              style={{ backgroundColor: '#000000' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="#FFFFFF" viewBox="0 0 24 24" strokeWidth={2.5}>
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
