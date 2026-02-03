import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import MobileHeader from './MobileHeader'
import { LoginModal } from '../auth'
import FeedbackButton from '../common/FeedbackButton'
import { useLocation } from 'react-router-dom'
import { analytics } from '../api/client'

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    analytics.visit(location.pathname || '/').catch(() => {})
  }, [location.pathname])

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setIsSidebarOpen(false)

  // Swipe/drag detection from left to right
  useEffect(() => {
    let startX = 0
    let startY = 0

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    const handleTouchMove = (e) => {
      if (!startX || !startY) return

      const currentX = e.touches[0].clientX
      const currentY = e.touches[0].clientY
      const diffX = currentX - startX
      const diffY = Math.abs(currentY - startY)

      // Check if swipe started from left half and upper half and dragged right
      if (startX < window.innerWidth / 2 && startY < window.innerHeight / 2 && diffX > 80 && diffY < 100) {
        setIsSidebarOpen(true)
      }
    }

    const handleTouchEnd = () => {
      startX = 0
      startY = 0
    }

    // Mouse drag detection for desktop
    let mouseStartX = 0
    let mouseStartY = 0
    let isDragging = false

    const handleMouseDown = (e) => {
      // Start drag from left half and upper half of screen
      if (e.clientX < window.innerWidth / 2 && e.clientY < window.innerHeight / 2) {
        mouseStartX = e.clientX
        mouseStartY = e.clientY
        isDragging = true
      }
    }

    const handleMouseMove = (e) => {
      if (!isDragging) return
      const diffX = e.clientX - mouseStartX

      // Drag from left to right (at least 100px)
      if (diffX > 100) {
        setIsSidebarOpen(true)
        isDragging = false
      }
    }

    const handleMouseUp = () => {
      isDragging = false
      mouseStartX = 0
      mouseStartY = 0
    }

    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isSidebarOpen])

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
