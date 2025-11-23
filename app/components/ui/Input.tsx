'use client'

import React, { useId } from 'react'
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: React.ReactNode
  error?: string
  fullWidth?: boolean
}
export const Input = ({
  label,
  icon,
  error,
  fullWidth = true,
  className = '',
  ...props
}: InputProps) => {
  const id = useId()
  const widthClass = fullWidth ? 'w-full' : ''
  return (
    <div className={`mb-4 ${widthClass}`}>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            {icon}
          </div>
        )}
        <input
          id={id}
          className={`bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${icon ? 'pl-10' : ''} shadow-sm ${className}`}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}
