import React from 'react'
import clsx from 'clsx'

const Button = ({ children, variant = 'primary', className, ...props }) => {
  return (
    <button
      className={clsx(
        variant === 'primary' ? 'btn-primary' : 'btn-secondary',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
