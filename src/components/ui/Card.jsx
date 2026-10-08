import React from 'react'
import { cn } from '../../lib/utils'

/**
 * Card Component
 * Modular card container with clean borders, elevation, and optional industrial top accent strips.
 */
export function Card({
  children,
  variant = 'default', // 'default' | 'elevated' | 'interactive' | 'dark' | 'outline'
  accentBar = 'none', // 'none' | 'accent' | 'highlight' | 'primary'
  padding = 'md', // 'none' | 'sm' | 'md' | 'lg'
  className = '',
  ...props
}) {
  const variants = {
    default:
      'bg-white border border-slate-200/90 shadow-sm text-slate-800',
    elevated:
      'bg-white border border-slate-200 shadow-md shadow-slate-900/5 text-slate-800',
    interactive:
      'bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-slate-800',
    dark:
      'bg-[#0F172A] border border-slate-800 text-white shadow-xl shadow-slate-950/20',
    outline:
      'bg-transparent border-2 border-slate-200 text-slate-800',
  }

  const paddings = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8',
  }

  const accentBars = {
    none: null,
    accent: 'border-t-4 border-t-[#2563EB]',
    highlight: 'border-t-4 border-t-[#F59E0B]',
    primary: 'border-t-4 border-t-[#0F172A]',
  }

  return (
    <div
      className={cn(
        'relative rounded-xl overflow-hidden transition-all',
        variants[variant] || variants.default,
        paddings[padding] || paddings.md,
        accentBars[accentBar],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={cn('flex flex-col space-y-1.5 mb-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({
  children,
  as: Component = 'h3',
  className = '',
  ...props
}) {
  return (
    <Component
      className={cn('text-lg sm:text-xl font-bold tracking-tight text-inherit', className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export function CardDescription({ children, className = '', isDark = false, ...props }) {
  return (
    <p
      className={cn(
        'text-sm leading-relaxed',
        isDark ? 'text-slate-400' : 'text-[#64748B]',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={cn('text-sm leading-relaxed', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '', ...props }) {
  return (
    <div
      className={cn('flex items-center pt-4 mt-4 border-t border-slate-100/80', className)}
      {...props}
    >
      {children}
    </div>
  )
}
