'use client'

import React from 'react'
interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  selected?: boolean
  selectable?: boolean
}
export const Card = ({
  children,
  className = '',
  onClick,
  selected = false,
  selectable = false,
  ...props
}: CardProps) => {
  const selectableClass = selectable
    ? 'cursor-pointer transition-all duration-200 hover:shadow-md hover:border-blue-300'
    : ''
  const selectedClass = selected
    ? 'border-blue-500 ring-2 ring-blue-500 bg-blue-50'
    : 'border-gray-200'
  return (
    <div
      className={`bg-white rounded-xl border p-5 shadow-sm ${selectable ? selectableClass : ''} ${selected ? selectedClass : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}
