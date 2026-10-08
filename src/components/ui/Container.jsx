import React from 'react'
import { cn } from '../../lib/utils'

/**
 * Container Component
 * Enforces consistent max-width boundaries and responsive gutter padding.
 * 
 * @param {'sm' | 'md' | 'lg' | 'xl' | 'full'} size - Max width boundary
 * @param {boolean} clean - Removes default horizontal padding if true
 * @param {keyof JSX.IntrinsicElements} as - Underlying HTML tag (div, section, main, etc.)
 */
export function Container({
  children,
  size = 'lg',
  clean = false,
  as: Component = 'div',
  className = '',
  ...props
}) {
  const sizeClasses = {
    sm: 'max-w-3xl',        // 768px - articles, single forms
    md: 'max-w-5xl',        // 1024px - standard content
    lg: 'max-w-7xl',        // 1280px - default business container
    xl: 'max-w-screen-2xl', // 1536px - wide dashboards/galleries
    full: 'max-w-full',     // 100% width
  }

  return (
    <Component
      className={cn(
        'w-full mx-auto',
        sizeClasses[size] || sizeClasses.lg,
        !clean && 'px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
