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
import settingsIcon from '../../assets/sidebar/Settings.png'
import userIcon from '../../assets/sidebar/user.png'

const Sidebar = () => {
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
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-50 border-r border-gray-200 flex flex-col">

      {/* Logo Section */}
      <div className="p-6 flex items-center gap-3">
        <img
          src={logoImg}
          alt="Deepenk Logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-2xl font-bold text-black">Deepenk</h1>
      </div>

      {/* New Chat Button */}
      <div className="px-6 mb-6">
        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-full hover:bg-white transition-colors">
          <span className="text-2xl font-semibold">⊕</span>
          <span className="font-semibold text-button text-black">New Chat</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map(({ path, icon, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-25 transition-colors ${isActive ? 'bg-[#D9D9D9]' : 'hover:bg-gray-100'}
              }`
            }
          >
            <img src={icon} alt={label} className="w-6 h-6 object-contain" />
            <span className="font-semibold text-button text-black">{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200 space-y-1">

        <button className="flex items-center gap-4 px-4 py-3 rounded-25 hover:bg-gray-100 transition-colors w-full">
          <img src={settingsIcon} alt="Settings" className="w-6 h-6 object-contain" />
          <span className="font-semibold text-button text-black">Settings</span>
        </button>

        <button className="flex items-center gap-4 px-4 py-3 rounded-full bg-[#D9D9D9] hover:bg-gray-300 transition-colors w-full">
          <img src={userIcon} alt="Profile" className="w-6 h-6 object-contain" />
          <span className="font-semibold text-button text-black">Profile</span>
        </button>

      </div>

    </aside>
  )
}

export default Sidebar
