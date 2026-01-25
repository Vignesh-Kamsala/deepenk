import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { FcGoogle } from 'react-icons/fc'
import { FaApple, FaMicrosoft } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'

const LoginModal = () => {
  const { isLoginModalOpen, closeLoginModal } = useAuthStore()
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  if (!isLoginModalOpen) return null

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`)
    // TODO: Implement actual authentication
    closeLoginModal()
    navigate('/profile')
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log('Email login:', email)
    // TODO: Implement email authentication
    closeLoginModal()
    navigate('/profile')
  }

  return (
    <div
      className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4"
      onClick={closeLoginModal}
    >
      <div
        className="bg-white rounded-3xl p-6 max-w-sm w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeLoginModal}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900 transition-colors leading-none"
        >
          ×
        </button>

        {/* Header */}
        <div className="mb-5">
          <h2 className="text-2xl font-bold mb-2">Log in or sign up</h2>
          <p className="text-gray-500 text-xs">
            You'll get smarter responses and can upload files, images, and more.
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-2.5 mb-5">
          {/* Google */}
          <button
            onClick={() => handleSocialLogin('Google')}
            className="w-full flex items-center justify-center gap-2.5 px-5 py-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium text-sm"
          >
            <FcGoogle className="text-lg" />
            <span>Continue with Google</span>
          </button>

          {/* Apple */}
          <button
            onClick={() => handleSocialLogin('Apple')}
            className="w-full flex items-center justify-center gap-2.5 px-5 py-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium text-sm"
          >
            <FaApple className="text-lg" />
            <span>Continue with Apple</span>
          </button>

          {/* Microsoft */}
          <button
            onClick={() => handleSocialLogin('Microsoft')}
            className="w-full flex items-center justify-center gap-2.5 px-5 py-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium text-sm"
          >
            <FaMicrosoft className="text-lg text-blue-600" />
            <span>Continue with Microsoft</span>
          </button>

          {/* Phone */}
          <button
            onClick={() => handleSocialLogin('Phone')}
            className="w-full flex items-center justify-center gap-2.5 px-5 py-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium text-sm"
          >
            <BsTelephone className="text-lg" />
            <span>Continue with phone</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-xs text-gray-500">OR</span>
          </div>
        </div>

        {/* Email Input */}
        <form onSubmit={handleEmailSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 border-2 border-gray-300 rounded-full outline-none focus:border-gray-400 transition-colors text-sm"
          />

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full px-5 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium text-sm"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginModal
