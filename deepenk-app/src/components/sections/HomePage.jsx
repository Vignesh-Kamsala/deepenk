import React from 'react';
import logoImg from '../../assets/sidebar/logo.png';
import { BsMicFill } from 'react-icons/bs';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-start px-4 pt-6 pb-8 min-h-[calc(100vh-4rem)]">
      {/* Logo */}
      <div className="mb-3 mt-12">
        <img src={logoImg} alt="Deepenk Logo" className="w-20 h-20 rounded-full" />
      </div>

      {/* Heading - Two lines */}
      <h1 className="text-3xl text-center mb-3 pt-6">
        <div>what do you want</div>
        <div>to choose today?</div>
      </h1>

      {/* Buttons - 3 in first row, 1 in second row */}
      <div className="w-full max-w-md mb-8">
        {/* First row - 3 buttons */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <button className="px-2 py-1 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300 transition-colors text-xs">
            Book a Ride
          </button>
          <button className="px-2 py-1 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300 transition-colors text-xs">
            Book a Ticket
          </button>
          <button className="px-2 py-1 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300 transition-colors text-xs">
            Order a Food
          </button>
        </div>
        {/* Second row - 1 centered button */}
        <div className="flex justify-center">
          <button className="px-3 py-1 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300 transition-colors text-xs">
            Shopping
          </button>
        </div>
      </div>

      {/* Prompt Box Container - Plus button separate */}
      <div className="flex items-center gap-4 w-full max-w-md">
        {/* Plus Button - Separate */}
        <button className="flex-shrink-0 w-16 h-16 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-2xl text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors">
          +
        </button>

        {/* Prompt Input Box */}
        <div className="flex-1 flex items-center gap-4 px-4 py-4 bg-white rounded-full shadow-lg border border-gray-200">
          <input
            type="text"
            placeholder="Ask Deepenk"
            className="flex-1 bg-transparent outline-none  rounded-md text-sm placeholder:text-gray-500"
          />
          <button className="text-gray-600 hover:text-gray-800 transition-colors">
            <BsMicFill className="text-lg" />
          </button>
          <button className="bg-black text-white rounded-full p-2.5 hover:bg-gray-800 transition-colors">
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
  );
};

export default HomePage;
