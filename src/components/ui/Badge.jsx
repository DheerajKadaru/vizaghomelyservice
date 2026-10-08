import React from 'react'
import { cn } from '../../lib/utils'

/**
 * Badge Component
 * Used for service status, certifications, repair stages, warranty tags, and spec labels.
 */
export function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  dotPulse = false,
  icon: Icon,
  className = '',
  ...props
}) {
  const variants = {
    // Brand Dark Navy
    primary: 'bg-[#0F172A] text-white border-slate-700',

    // Electric Blue
    accent: 'bg-blue-50 text-blue-700 border-blue-200/80',

    // Amber / Highlight
    highlight: 'bg-amber-50 text-amber-800 border-amber-200/80',

    // Certified / Ready / Repaired
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',

    // Critical / Emergency / High Voltage Warning
    danger: 'bg-rose-50 text-rose-700 border-rose-200/80',

    // Standard Technical Neutral
    neutral: 'bg-slate-100 text-slate-700 border-slate-200/80',

    // High-tech Electrical Dark Pill
    electrical: 'bg-[#0F172A] text-blue-400 border border-blue-500/40 shadow-sm shadow-blue-500/10 font-mono',

    // Outline
    outline: 'bg-transparent text-slate-700 border-slate-300',
  }

  const dotColors = {
    primary: 'bg-white',
    accent: 'bg-blue-600',
    highlight: 'bg-amber-500',
    success: 'bg-emerald-500',
    danger: 'bg-rose-500',
    neutral: 'bg-slate-500',
    electrical: 'bg-blue-400',
    outline: 'bg-slate-500',
  }

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 gap-1.5 font-medium',
    md: 'text-xs px-2.5 py-1 gap-1.5 font-medium',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-semibold',
  }

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16,
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border tracking-wide transition-colors select-none font-sans',
        variants[variant] || variants.neutral,
        sizes[size] || sizes.md,
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2 shrink-0">
          {dotPulse && (
            <span
              className={cn(
                'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                dotColors[variant] || 'bg-blue-500'
              )}
            />
          )}
          <span
            className={cn(
              'relative inline-flex rounded-full h-2 w-2',
              dotColors[variant] || 'bg-blue-500'
            )}
          />
        </span>
      )}

      {Icon && <Icon size={iconSizes[size] || 14} className="shrink-0" />}

      <span>{children}</span>
    </span>
  )
}
