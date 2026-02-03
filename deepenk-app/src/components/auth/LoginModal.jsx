import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { auth } from '../../api/client'
import { FcGoogle } from 'react-icons/fc'
import { FaApple, FaMicrosoft } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'

const LoginModal = () => {
  const { isLoginModalOpen, closeLoginModal, setAuth } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  if (!isLoginModalOpen) return null

  const handleSocialLogin = (provider) => {
    setError('Use email to sign in for this demo.')
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!email.trim()) {
      setError('Enter your email.')
      return
    }
    if (isRegister && !password) {
      setError('Choose a password (min 8 characters).')
      return
    }
    setLoading(true)
    try {
      if (isRegister) {
        const { user, token } = await auth.register(email.trim(), password, null)
        setAuth(user, token)
      } else {
        if (!password) {
          setError('Enter your password.')
          setLoading(false)
          return
        }
        const { user, token } = await auth.login(email.trim(), password)
        setAuth(user, token)
      }
      closeLoginModal()
      navigate('/profile')
    } catch (err) {
      setError(err.body?.message || err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
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

        {/* Email + Password */}
        {error && (
          <p className="text-sm text-red-600 mb-2">{error}</p>
        )}
        <form onSubmit={handleEmailSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 border-2 border-gray-300 rounded-full outline-none focus:border-gray-400 transition-colors text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-3 border-2 border-gray-300 rounded-full outline-none focus:border-gray-400 transition-colors text-sm"
          />
          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            className="text-xs text-gray-500 hover:underline"
          >
            {isRegister ? 'Already have an account? Log in' : 'No account? Sign up'}
          </button>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-5 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium text-sm disabled:opacity-50"
          >
            {loading ? 'Please wait…' : isRegister ? 'Sign up' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginModal
