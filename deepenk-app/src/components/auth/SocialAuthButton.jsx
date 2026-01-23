import React from 'react'

const SocialAuthButton = ({ provider, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
    >
      {icon && <span>{icon}</span>}
      <span>Continue with {provider}</span>
    </button>
  )
}

export default SocialAuthButton
