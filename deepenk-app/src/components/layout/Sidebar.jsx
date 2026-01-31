import React from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../../assets/sidebar/logo.png'
import homeIcon from '../../assets/sidebar/Home.png'
import historyIcon from '../../assets/sidebar/history.png'
import shoppingIcon from '../../assets/sidebar/Shopping Bag.png'
import foodIcon from '../../assets/sidebar/food.png'
import ridesIcon from '../../assets/sidebar/rides.png'
import travelsIcon from '../../assets/sidebar/travels.png'
import hotelsIcon from '../../assets/sidebar/hotels.png'
import userIcon from '../../assets/sidebar/user.png'
import { BsSun } from 'react-icons/bs'

const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    { path: '/', icon: homeIcon, label: 'Home' },
    { path: '/history', icon: historyIcon, label: 'History' },
    { path: '/shopping', icon: shoppingIcon, label: 'Shopping' },
    { path: '/food', icon: foodIcon, label: 'Food' },
    { path: '/rides', icon: ridesIcon, label: 'Rides' },
    { path: '/travels', icon: travelsIcon, label: 'Travels' },
    { path: '/hotels', icon: hotelsIcon, label: 'Hotels' },
  ]

  return (
    <>
      {/* Overlay - only show on mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 transition-opacity lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer - permanent on desktop (lg:), drawer on mobile */}
      <aside
        className={`fixed left-0 top-0 h-screen w-[220px] bg-white flex flex-col z-50 shadow-xl 
          rounded-r-3xl lg:rounded-none transform transition-transform duration-300 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
        style={{ borderRight: '1px solid #E5E5E5' }}
      >
        {/* Logo Section */}
        <div className="p-5 flex items-center gap-2.5">
          <img
            src={logoImg}
            alt="Deepenk Logo"
            className="w-7 h-7 object-contain"
          />
          <h1 className="text-lg font-semibold" style={{ color: '#111111' }}>Deepenk</h1>
        </div>

        {/* New Chat Button */}
        <div className="px-4 mb-4">
          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full transition-all active:scale-95"
            style={{ border: '1.5px solid #E5E5E5' }}
          >
            <span className="text-lg">⊕</span>
            <span className="font-medium text-sm" style={{ color: '#111111' }}>New Chat</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map(({ path, icon, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-full transition-colors ${isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`
              }
            >
              <img src={icon} alt={label} className="w-5 h-5 object-contain" />
              <span className="font-medium text-sm" style={{ color: '#111111' }}>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 space-y-2" style={{ borderTop: '1px solid #E5E5E5' }}>
          <NavLink
            to="/profile"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-gray-50 transition-colors w-full"
          >
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <img src={userIcon} alt="Profile" className="w-4 h-4 object-contain" />
            </div>
            <span className="font-medium text-sm" style={{ color: '#111111' }}>Profile</span>
            <BsSun className="ml-auto text-lg" style={{ color: '#111111' }} />
          </NavLink>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
