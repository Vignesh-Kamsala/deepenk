import React from "react";
import logoImg from "../../assets/sidebar/logo.png";
import { useAuthStore } from "../../store/authStore";
import { useLocation } from 'react-router-dom'

const MobileHeader = ({ onMenuToggle, showAuthButtons = false }) => {
  const location = useLocation()
  const isHistory = location.pathname === '/history' || location.pathname.includes('history')

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-40 ${isHistory ? 'px-3 py-2' : 'px-4 py-3.5'} flex items-center`}>
      {/* Hamburger Menu (Left) */}
      <button
        onClick={onMenuToggle}
        className="w-11 h-11 rounded-full flex items-center justify-center transition-all active:scale-95"
        style={{ border: "1.5px solid #E5E5E5" }}
        aria-label="Toggle menu"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="#111111"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* Logo and optional Heading */}
      {!isHistory && (
        <>
          <img
            src={logoImg}
            alt="Deepenk Logo"
            className="w-7 h-7 ml-2 object-contain"
          />
          <span className="font-bold text-lg ml-1">Deepenk</span>
        </>
      )}
      {/* Login and Sign In buttons on the right (only on Home) */}
      {showAuthButtons && (
        <div className="ml-auto flex gap-3">
          <button
            onClick={() => useAuthStore.getState().openLoginModal()}
            className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => useAuthStore.getState().openLoginModal()}
            className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors"
          >
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default MobileHeader;
