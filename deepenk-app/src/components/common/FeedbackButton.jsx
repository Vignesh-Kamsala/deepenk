import React from 'react'

const FeedbackButton = ({ formUrl = 'https://forms.gle/your-form-id' }) => {
  return (
    <a
      href={formUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Give feedback"
      className="fixed right-4 bottom-6 z-50 flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-2 shadow-lg hover:shadow-xl transition-shadow"
      style={{ minWidth: 44 }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 8v10a2 2 0 0 1-2 2H7l-4 4V6a2 2 0 0 1 2-2h10" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 2v4" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-sm font-medium" style={{color: '#111'}}>Feedback</span>
    </a>
  )
}

export default FeedbackButton
