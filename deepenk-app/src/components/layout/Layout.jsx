import React from 'react'
import Sidebar from './Sidebar'
import { LoginModal } from '../auth'

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 ml-64">
        {children}
      </main>
      <LoginModal />
    </div>
  )
}

export default Layout
