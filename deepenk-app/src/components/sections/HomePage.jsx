import React from 'react';
import logoImg from '../../assets/sidebar/logo.png';
import { BsMicFill } from 'react-icons/bs';

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between px-4 pt-6 pb-4 min-h-[calc(100vh-4rem)]">
      <div className="w-full flex flex-col items-center">
      {/* Logo */}
      <div className="mb-3 mt-12 flex items-center justify-center">
        <img src={logoImg} alt="Deepenk Logo" className="w-20 h-20 rounded-full object-contain" />
      </div>

      {/* Heading - Two lines (centered) */}
      <h1 className="text-3xl text-center mb-3 pt-6 leading-snug">
        <div>what do you want</div>
        <div>choose today?</div>
      </h1>

      {/* Buttons - 3 in first row, 1 in second row */}
      <div className="w-full mb-8 flex justify-center">
        <div className="w-full max-w-sm">
        {/* First row - 3 buttons */}
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
        {/* Second row - 1 centered button */}
        <div className="flex justify-center mt-2">
          <button className="px-3 py-1 bg-gray-200 rounded-full shadow-sm hover:bg-gray-300 transition-colors text-xs">
            Shopping
          </button>
        </div>
        </div>
      </div>

      {/* Prompt Box Container - Plus button separate (smaller for mobile) */}
      <div className="flex items-center gap-4 w-full justify-center">
        {/* Plus Button - Smaller on mobile */}
        <button className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-2xl text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors"
          style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
        >
          +
        </button>

        {/* Prompt Input Box - reduced padding, thin border, more compact */}
          <div className="flex-1 max-w-md flex items-center gap-3 px-4 py-4 bg-white rounded-3xl border transition-shadow duration-200" style={{boxShadow: '0 4px 12px rgba(0,0,0,0.04)', borderColor: '#E5E5E5', minWidth: 0}}>
            <input
              type="text"
              placeholder="Type briefly what you want"
              className="flex-1 bg-transparent outline-none text-md placeholder:text-gray-500 min-w-0"
              style={{color: '#111111', paddingTop: '6px', paddingBottom: '6px'}}
            />
            <button className="text-gray-600 hover:text-gray-800 transition-colors flex items-center justify-center w-8 h-8" style={{background: 'transparent'}}>
              <BsMicFill className="text-base" />
            </button>
            <button className="bg-black text-white rounded-full p-2.5 hover:opacity-95 transition-all flex items-center justify-center w-9 h-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
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
      <div className="w-full px-4 mt-8">
        <p className="text-[10px] text-gray-500 text-center leading-relaxed">Note: This is a trial version, so results may be limited, optimized and not real data. Your feedback will help us improve the final product with better features.</p>
      </div>
    </div>
  );
};

export default HomePage;
