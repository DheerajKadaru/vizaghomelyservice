import React from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '../../lib/utils'

/**
 * Button Component
 * Industrial-grade, accessible button with micro-interactions and electrical styling tokens.
 */
export const Button = React.forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    fullWidth = false,
    disabled = false,
    type = 'button',
    className = '',
    ...props
  },
  ref
) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-out select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.985] disabled:pointer-events-none disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer'

  const variants = {
    // Dark Navy - Main Brand Action
    primary:
      'bg-[#0F172A] text-white hover:bg-[#1E293B] active:bg-[#090D16] border border-slate-800 shadow-sm focus-visible:ring-[#2563EB]',

    // Electric Blue - Primary Call-to-Action & Energy Accent
    accent:
      'bg-[#2563EB] text-white hover:bg-[#1D4ED8] active:bg-[#1E40AF] shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 border border-blue-500/30 focus-visible:ring-[#2563EB]',

    // Amber / Electric Yellow - Diagnostic, Urgent & Highlight Action
    highlight:
      'bg-[#F59E0B] text-[#0F172A] font-semibold hover:bg-[#D97706] active:bg-[#B45309] shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 border border-amber-400 focus-visible:ring-[#F59E0B]',

    // Secondary Neutral Slate
    secondary:
      'bg-slate-100 text-slate-800 hover:bg-slate-200 active:bg-slate-300 border border-slate-200/80 focus-visible:ring-slate-400',

    // Precision Outline
    outline:
      'bg-white text-slate-700 hover:text-[#2563EB] border border-slate-300 hover:border-[#2563EB] hover:bg-blue-50/50 focus-visible:ring-[#2563EB]',

    // Ghost
    ghost:
      'bg-transparent text-slate-700 hover:bg-slate-100/80 hover:text-[#0F172A] focus-visible:ring-slate-400',

    // Industrial Dark Mode Outline
    darkOutline:
      'bg-[#0F172A] text-slate-200 hover:text-white border border-slate-700 hover:border-[#2563EB] hover:bg-slate-800/80 focus-visible:ring-[#2563EB]',

    // Danger / Emergency Hazard
    danger:
      'bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 shadow-sm border border-rose-500 focus-visible:ring-rose-500',
  }

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 rounded-md font-medium',
    md: 'text-sm px-4 py-2.5 gap-2 rounded-lg font-medium',
    lg: 'text-base px-6 py-3 gap-2.5 rounded-xl font-semibold',
    xl: 'text-lg px-7 py-3.5 gap-3 rounded-xl font-bold',
  }

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  }

  const currentIconSize = iconSizes[size] || 16

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      className={cn(
        baseStyles,
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin shrink-0" size={currentIconSize} />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {LeftIcon && <LeftIcon size={currentIconSize} className="shrink-0" />}
          <span>{children}</span>
          {RightIcon && <RightIcon size={currentIconSize} className="shrink-0" />}
        </>
      )}
    </button>
  )
})
