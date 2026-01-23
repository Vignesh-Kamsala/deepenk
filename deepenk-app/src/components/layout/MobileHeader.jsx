import React from 'react'
import { useAuthStore } from '../../store/authStore'

const MobileHeader = ({ onMenuToggle }) => {
    const { openLoginModal } = useAuthStore()

    return (
        <header className="fixed top-0 left-0 right-0 bg-white z-40 px-4 py-4 flex items-center justify-between">
            {/* Hamburger Menu */}
            <button
                onClick={onMenuToggle}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            {/* Auth Buttons */}
            <div className="flex items-center gap-2">
                <button
                    onClick={openLoginModal}
                    className="px-4 py-2 bg-[#D9D9D9] hover:bg-gray-300 rounded-full transition-colors font-semibold text-sm"
                >
                    Login
                </button>
                <button
                    onClick={openLoginModal}
                    className="px-4 py-2 bg-[#D9D9D9] hover:bg-gray-300 rounded-full transition-colors font-semibold text-sm"
                >
                    Sign in
                </button>
            </div>
        </header>
    )
}

export default MobileHeader
