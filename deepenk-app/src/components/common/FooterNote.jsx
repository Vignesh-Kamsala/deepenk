import React from 'react'

const FooterNote = () => {
  return (
    <div className="w-full flex justify-center items-center pb-4 px-4 md:pb-6" style={{ zIndex: 30 }}>
      <div className="max-w-xl text-center">
        <p className="text-[10px] text-gray-500">Note: This is a trial version, so results may be limited, optimized and not real data. Your feedback will help us improve the final product with better features.</p>
      </div>
    </div>
  )
}

export default FooterNote
