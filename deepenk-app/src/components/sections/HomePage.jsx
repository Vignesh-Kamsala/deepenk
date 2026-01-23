import React from 'react'
import logoImg from '../../assets/sidebar/logo.png'
import submitIcon from '../../assets/sidebar/submit.png'
import { BsMicFill } from 'react-icons/bs'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-40">

        {/* Logo */}
        <div className="mb-12">
          <img
            src={logoImg}
            alt="Deepenk Logo"
            className="w-28 h-28 object-contain"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-[64px] font-extrabold leading-tight text-center mb-16 text-black max-w-5xl">
          What do you want choose today?
        </h1>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">

          <button className="flex items-center gap-2 px-6 py-3 bg-[#D9D9D9] hover:bg-gray-300 rounded-[25px] transition-colors">
            <span className="text-xl">📍</span>
            <span className="font-semibold text-[18px] text-[#1F2937]">Book a ride</span>
          </button>

          <button className="flex items-center gap-2 px-6 py-3 bg-[#D9D9D9] hover:bg-gray-300 rounded-[25px] transition-colors">
            <span className="text-xl">🍕</span>
            <span className="font-semibold text-[18px] text-[#1F2937]">Order food</span>
          </button>

          <button className="flex items-center gap-2 px-6 py-3 bg-[#D9D9D9] hover:bg-gray-300 rounded-[25px] transition-colors">
            <span className="text-xl">🎫</span>
            <span className="font-semibold text-[18px] text-[#1F2937]">Book a ticket</span>
          </button>

        </div>
      </div>

      {/* Bottom Input Section - Fixed to bottom */}
      <div className="fixed bottom-0 left-64 right-0 px-16 py-8 bg-white">
        <div className="max-w-3xl mx-auto">

          <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-full px-6 py-4 shadow-sm">

            {/* Plus Icon */}
            <button className="text-2xl text-black hover:text-gray-600 transition-colors flex-shrink-0">
              +
            </button>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Ask Deepenk"
              className="flex-1 outline-none text-lg placeholder-gray-400 bg-transparent font-normal"
            />

            {/* Voice Icon */}
            <button className="text-black hover:text-gray-600 transition-colors flex-shrink-0">
              <BsMicFill className="text-xl" />
            </button>

            {/* Send Button */}
            <button className="bg-[#D9D9D9] hover:bg-gray-300 rounded-full p-3 transition-colors flex-shrink-0">
              <img src={submitIcon} alt="Send" className="w-5 h-5 object-contain" />
            </button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage
