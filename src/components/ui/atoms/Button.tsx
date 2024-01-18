import React from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
  variant?: string
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const baseStyle = 'px-4 py-2 rounded focus:outline-none focus:shadow-outline'
  const variantStyle = variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle}`}>
      {label}
    </button>
  )
}

export default Button
