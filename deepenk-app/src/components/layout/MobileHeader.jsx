import React from "react";
import logoImg from "../../assets/sidebar/logo.png";

const MobileHeader = ({ onMenuToggle }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-40 px-4 py-3.5 flex items-center">
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

      {/* Center Logo + Brand Name */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
        <img
          src={logoImg}
          alt="Deepenk"
          className="w-5 h-5 object-contain"
        />
        <span className="text-[18px] font-semibold text-[#111111]">
          Deepenk
        </span>
      </div>
    </header>
  );
};

export default MobileHeader;
