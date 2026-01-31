import React from 'react';
import logoImg from '../../assets/sidebar/logo.png';
import { BsMicFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { IoRestaurant } from 'react-icons/io5';
import { IoTicket } from 'react-icons/io5';

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between px-4 lg:px-8 pt-6 lg:pt-12 pb-4 min-h-[calc(100vh-4rem)] lg:min-h-screen">
      <div className="w-full flex flex-col items-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-3 mt-12 lg:mt-8 flex items-center justify-center">
          <img src={logoImg} alt="Deepenk Logo" className="w-20 h-20 lg:w-28 lg:h-28 rounded-full object-contain" />
        </div>

        {/* Heading - Two lines (centered) */}
        <h1 className="text-3xl lg:text-5xl text-center mb-3 pt-6 leading-snug font-semibold">
          <div>What do you want</div>
          <div>choose today?</div>
        </h1>

        {/* Quick Action Buttons - Desktop: horizontal with icons */}
        <div className="w-full mb-8 flex justify-center">
          <div className="w-full max-w-sm lg:max-w-xl">
            {/* Mobile: grid layout */}
            <div className="lg:hidden">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <button className="px-3 py-1 bg-gray-200 rounded-full shadow-sm hover:bg-gray-300 transition-colors text-xs">
                  Book a Ride
                </button>
                <button className="px-3 py-1 bg-gray-200 rounded-full shadow-sm hover:bg-gray-300 transition-colors text-xs">
                  Book a Ticket
                </button>
                <button className="px-3 py-1 bg-gray-200 rounded-full shadow-sm hover:bg-gray-300 transition-colors text-xs">
                  Order a Food
                </button>
              </div>
              <div className="flex justify-center mt-2">
                <button className="px-3 py-1 bg-gray-200 rounded-full shadow-sm hover:bg-gray-300 transition-colors text-xs">
                  Shopping
                </button>
              </div>
            </div>

            {/* Desktop: horizontal buttons with icons */}
            <div className="hidden lg:flex items-center justify-center gap-4">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-colors text-sm font-medium">
                <MdLocationOn className="text-lg" />
                <span>Book a ride</span>
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-colors text-sm font-medium">
                <IoRestaurant className="text-lg" />
                <span>Order food</span>
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-colors text-sm font-medium">
                <IoTicket className="text-lg" />
                <span>Book a ticket</span>
              </button>
            </div>
          </div>
        </div>

        {/* Prompt Box Container */}
        <div className="flex items-center gap-4 w-full justify-center">
          {/* Plus Button */}
          <button className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-2xl text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors"
            style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
          >
            +
          </button>

          {/* Prompt Input Box */}
          <div className="flex-1 max-w-md lg:max-w-2xl flex items-center gap-3 px-4 lg:px-6 py-4 lg:py-5 bg-white rounded-3xl border transition-shadow duration-200" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)', borderColor: '#E5E5E5', minWidth: 0 }}>
            <input
              type="text"
              placeholder="Ask Deepenk"
              className="flex-1 bg-transparent outline-none text-md lg:text-lg placeholder:text-gray-500 min-w-0"
              style={{ color: '#111111', paddingTop: '6px', paddingBottom: '6px' }}
            />
            <button className="text-gray-600 hover:text-gray-800 transition-colors flex items-center justify-center w-8 h-8" style={{ background: 'transparent' }}>
              <BsMicFill className="text-base lg:text-lg" />
            </button>
            <button className="bg-black text-white rounded-full p-2.5 lg:p-3 hover:opacity-95 transition-all flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 lg:w-5 lg:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 6.75L21.75 12m0 0l-7.5 5.25M21.75 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Trial note at bottom */}
      <div className="w-full px-4 mt-8 max-w-4xl">
        <p className="text-[10px] lg:text-xs text-gray-500 text-center leading-relaxed">Note: This is a trial version, so results may be limited, optimized and not real data and. Your feedback will help us improve the final product with better features.</p>
      </div>
    </div>
  );
};

export default HomePage;

