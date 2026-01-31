import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MobileHeader from './MobileHeader'
import { LoginModal } from '../auth'
import FeedbackButton from '../common/FeedbackButton'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <MobileHeader onMenuToggle={toggleSidebar} showAuthButtons={isHome} />
      {/* Main content: pt-16 for mobile header, lg:pt-0 and lg:ml-[220px] for desktop sidebar */}
      <main className="flex-1 pt-16 lg:pt-0 lg:ml-[220px] overflow-x-hidden">
        {children}
      </main>
      <FeedbackButton />
      <LoginModal />
    </div>
  )
}

export default Layout
