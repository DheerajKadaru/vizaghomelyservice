import React from 'react'
import { cn } from '../../lib/utils'
import { Badge } from './Badge'

/**
 * SectionHeading Component
 * Implements strict visual hierarchy with modern typography, optional badge, and technical accents.
 */
export function SectionHeading({
  badge,
  badgeIcon,
  badgeVariant = 'accent',
  title,
  highlightText,
  highlightColor = 'accent', // 'accent' | 'highlight'
  description,
  align = 'center', // 'left' | 'center' | 'right'
  titleAs: TitleComponent = 'h2',
  isDark = false,
  className = '',
  action,
}) {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }

  const highlightStyles = {
    accent: 'text-[#2563EB]',
    highlight: 'text-[#F59E0B]',
  }

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12', alignments[align], className)}>
      {badge && (
        <div className="mb-3">
          <Badge
            variant={isDark ? 'electrical' : badgeVariant}
            icon={badgeIcon}
            size="md"
            className="uppercase tracking-wider font-semibold text-[11px]"
          >
            {badge}
          </Badge>
        </div>
      )}

      <TitleComponent
        className={cn(
          'text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight',
          isDark ? 'text-white' : 'text-[#0F172A]'
        )}
      >
        {title}{' '}
        {highlightText && (
          <span className={cn('inline-block', highlightStyles[highlightColor] || highlightStyles.accent)}>
            {highlightText}
          </span>
        )}
      </TitleComponent>

      {description && (
        <p
          className={cn(
            'mt-3 text-base sm:text-lg leading-relaxed max-w-2xl font-normal',
            isDark ? 'text-slate-300' : 'text-[#475569]'
          )}
        >
          {description}
        </p>
      )}

      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}
