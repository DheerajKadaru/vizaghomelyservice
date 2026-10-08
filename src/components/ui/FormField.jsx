import React, { useId } from 'react'
import { AlertCircle, ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

/**
 * Label Component
 */
export function Label({
  children,
  htmlFor,
  required = false,
  className = '',
  ...props
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'block text-sm font-semibold text-[#1E293B] mb-1.5 select-none',
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span className="text-rose-500 ml-1 font-bold" title="Required field">
          *
        </span>
      )}
    </label>
  )
}

/**
 * Input Component
 */
export const Input = React.forwardRef(function Input(
  {
    id,
    type = 'text',
    error = false,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    disabled = false,
    className = '',
    ...props
  },
  ref
) {
  return (
    <div className="relative flex items-center w-full">
      {LeftIcon && (
        <div className="absolute left-3.5 flex items-center pointer-events-none text-slate-400">
          <LeftIcon size={18} />
        </div>
      )}
      <input
        ref={ref}
        id={id}
        type={type}
        disabled={disabled}
        className={cn(
          'w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#1E293B] placeholder:text-slate-400 transition-all duration-150',
          'focus:outline-none focus:ring-2 focus:border-transparent',
          error
            ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20 text-rose-900 bg-rose-50/20'
            : 'border-slate-300 focus:border-[#2563EB] focus:ring-[#2563EB]/20 hover:border-slate-400',
          disabled && 'bg-slate-50 text-slate-400 cursor-not-allowed border-slate-200',
          LeftIcon && 'pl-10',
          RightIcon && 'pr-10',
          className
        )}
        {...props}
      />
      {RightIcon && (
        <div className="absolute right-3.5 flex items-center pointer-events-none text-slate-400">
          <RightIcon size={18} />
        </div>
      )}
    </div>
  )
})

/**
 * Textarea Component
 */
export const Textarea = React.forwardRef(function Textarea(
  {
    id,
    error = false,
    disabled = false,
    rows = 4,
    className = '',
    ...props
  },
  ref
) {
  return (
    <textarea
      ref={ref}
      id={id}
      rows={rows}
      disabled={disabled}
      className={cn(
        'w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#1E293B] placeholder:text-slate-400 transition-all duration-150 resize-y',
        'focus:outline-none focus:ring-2 focus:border-transparent',
        error
          ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20 text-rose-900 bg-rose-50/20'
          : 'border-slate-300 focus:border-[#2563EB] focus:ring-[#2563EB]/20 hover:border-slate-400',
        disabled && 'bg-slate-50 text-slate-400 cursor-not-allowed border-slate-200',
        className
      )}
      {...props}
    />
  )
})

/**
 * Select Component
 */
export const Select = React.forwardRef(function Select(
  {
    id,
    error = false,
    disabled = false,
    leftIcon: LeftIcon,
    options = [],
    children,
    className = '',
    ...props
  },
  ref
) {
  return (
    <div className="relative flex items-center w-full">
      {LeftIcon && (
        <div className="absolute left-3.5 flex items-center pointer-events-none text-slate-400">
          <LeftIcon size={18} />
        </div>
      )}
      <select
        ref={ref}
        id={id}
        disabled={disabled}
        className={cn(
          'w-full appearance-none rounded-lg border bg-white px-3.5 py-2.5 pr-10 text-sm text-[#1E293B] transition-all duration-150',
          'focus:outline-none focus:ring-2 focus:border-transparent cursor-pointer',
          error
            ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20 text-rose-900 bg-rose-50/20'
            : 'border-slate-300 focus:border-[#2563EB] focus:ring-[#2563EB]/20 hover:border-slate-400',
          disabled && 'bg-slate-50 text-slate-400 cursor-not-allowed border-slate-200',
          LeftIcon && 'pl-10',
          className
        )}
        {...props}
      >
        {children
          ? children
          : options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
      </select>
      <div className="absolute right-3.5 flex items-center pointer-events-none text-slate-400">
        <ChevronDown size={18} />
      </div>
    </div>
  )
})

/**
 * Composite FormField Component
 * Bundles Label, Input/Textarea/Select/children, Helper text, and Error messaging
 */
export function FormField({
  id: customId,
  label,
  required = false,
  helperText,
  error,
  children,
  className = '',
}) {
  const generatedId = useId()
  const fieldId = customId || generatedId

  return (
    <div className={cn('flex flex-col w-full text-left', className)}>
      {label && (
        <Label htmlFor={fieldId} required={required}>
          {label}
        </Label>
      )}

      {/* Render children or forward props */}
      <div className="relative w-full">
        {React.isValidElement(children)
          ? React.cloneElement(children, {
              id: fieldId,
              error: Boolean(error) || children.props.error,
            })
          : children}
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-1.5 mt-1.5 text-xs font-medium text-rose-600 animate-fadeIn">
          <AlertCircle size={14} className="shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Helper Text (when no error) */}
      {!error && helperText && (
        <p className="mt-1.5 text-xs text-slate-500">{helperText}</p>
      )}
    </div>
  )
}
