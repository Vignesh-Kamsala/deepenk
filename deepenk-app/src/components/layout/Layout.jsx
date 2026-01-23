import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MobileHeader from './MobileHeader'
import { LoginModal } from '../auth'

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <MobileHeader onMenuToggle={toggleSidebar} />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <LoginModal />
    </div>
  )
}

export default Layout
