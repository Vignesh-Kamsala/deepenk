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
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Logo Section */}
        <div className="p-6 flex items-center gap-3">
          <img
            src={logoImg}
            alt="Deepenk Logo"
            className="w-8 h-8 object-contain"
          />
          <h1 className="text-xl font-bold text-black">Deepenk</h1>
        </div>

        {/* New Chat Button */}
        <div className="px-4 mb-4">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
            <span className="text-xl font-semibold">⊕</span>
            <span className="font-semibold text-sm text-black">New Chat</span>
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
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`
              }
            >
              <img src={icon} alt={label} className="w-5 h-5 object-contain" />
              <span className="font-semibold text-sm text-black">{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200 space-y-2">
          <button className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-gray-50 transition-colors w-full">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <img src={userIcon} alt="Profile" className="w-4 h-4 object-contain" />
            </div>
            <span className="font-semibold text-sm text-black">Profile</span>
            <BsSun className="ml-auto text-lg" />
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
