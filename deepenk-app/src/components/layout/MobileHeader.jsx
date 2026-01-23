import React from 'react'
import { useAuthStore } from '../../store/authStore'

const MobileHeader = ({ onMenuToggle }) => {
    const { openLoginModal } = useAuthStore()

    return (
        <header className="fixed top-0 left-0 right-0 bg-white z-40 px-4 py-3.5 flex items-center justify-between">
            {/* Hamburger Menu */}
            <button
                onClick={onMenuToggle}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all active:scale-95"
                style={{ border: '1.5px solid #E5E5E5' }}
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

            {/* Auth Buttons */}
            <div className="flex items-center gap-2">
                <button
                    onClick={openLoginModal}
                    className="px-[14px] py-[8px] rounded-full transition-all active:scale-95"
                    style={{ backgroundColor: '#D9D9D9', color: '#111111' }}
                >
                    <span className="text-[14px] font-medium">Login</span>
                </button>
                <button
                    onClick={openLoginModal}
                    className="px-[14px] py-[8px] rounded-full transition-all active:scale-95"
                    style={{ backgroundColor: '#D9D9D9', color: '#111111' }}
                >
                    <span className="text-[14px] font-medium">Sign in</span>
                </button>
            </div>
        </header>
    )
}

export default MobileHeader
