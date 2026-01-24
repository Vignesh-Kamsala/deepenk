import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MobileHeader from './MobileHeader'
import { LoginModal } from '../auth'
import FeedbackButton from '../common/FeedbackButton'
import FooterNote from '../common/FooterNote'
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
      <main className="flex-1 pt-16 overflow-x-hidden pb-24">
        {children}
        <FooterNote />
      </main>
      <FeedbackButton />
      <LoginModal />
    </div>
  )
}

export default Layout
