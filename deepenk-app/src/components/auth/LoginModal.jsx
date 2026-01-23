import React, { useState } from 'react'
import { useAuthStore } from '../../store/authStore'
import { FcGoogle } from 'react-icons/fc'
import { FaApple, FaMicrosoft } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'

const LoginModal = () => {
  const { isLoginModalOpen, closeLoginModal } = useAuthStore()
  const [email, setEmail] = useState('')

  if (!isLoginModalOpen) return null

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`)
    // TODO: Implement actual authentication
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log('Email login:', email)
    // TODO: Implement email authentication
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={closeLoginModal}
    >
      <div 
        className="bg-white rounded-3xl p-8 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeLoginModal}
          className="absolute top-6 right-6 text-3xl text-gray-600 hover:text-gray-900 transition-colors leading-none"
        >
          ×
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">Log in or sign up</h2>
          <p className="text-gray-500 text-sm">
            You'll get smarter responses and can upload files, images, and more.
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3 mb-6">
          {/* Google */}
          <button
            onClick={() => handleSocialLogin('Google')}
            className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium"
          >
            <FcGoogle className="text-xl" />
            <span>Continue with Google</span>
          </button>

          {/* Apple */}
          <button
            onClick={() => handleSocialLogin('Apple')}
            className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium"
          >
            <FaApple className="text-xl" />
            <span>Continue with Apple</span>
          </button>

          {/* Microsoft */}
          <button
            onClick={() => handleSocialLogin('Microsoft')}
            className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium"
          >
            <FaMicrosoft className="text-xl text-blue-600" />
            <span>Continue with Microsoft</span>
          </button>

          {/* Phone */}
          <button
            onClick={() => handleSocialLogin('Phone')}
            className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium"
          >
            <BsTelephone className="text-xl" />
            <span>Continue with phone</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">OR</span>
          </div>
        </div>

        {/* Email Input */}
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-3.5 border-2 border-gray-300 rounded-full outline-none focus:border-gray-400 transition-colors"
          />
          
          {/* Continue Button */}
          <button
            type="submit"
            className="w-full px-6 py-3.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginModal
