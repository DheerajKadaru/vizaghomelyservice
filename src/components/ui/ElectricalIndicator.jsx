import React from 'react'
import { Activity, CheckCircle2, ShieldCheck, Clock } from 'lucide-react'
import { cn } from '../../lib/utils'

/**
 * ElectricalIndicator Component
 * Real-time diagnostic and certification ticker for industrial workshop credibility.
 */
export function ElectricalIndicator({
  type = 'live', // 'live' | 'certified' | 'warranty' | 'turnaround'
  label,
  value,
  className = '',
}) {
  const configs = {
    live: {
      icon: Activity,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200/80',
      dotColor: 'bg-emerald-500',
      pulse: true,
      defaultLabel: 'BENCH DIAGNOSTICS',
      defaultValue: 'Queue Active • Same-Day Intake',
    },
    certified: {
      icon: ShieldCheck,
      color: 'text-blue-700 bg-blue-50 border-blue-200/80',
      dotColor: 'bg-blue-600',
      pulse: false,
      defaultLabel: 'IPC-A-610 CERTIFIED',
      defaultValue: 'Master Soldering Technician',
    },
    warranty: {
      icon: CheckCircle2,
      color: 'text-amber-800 bg-amber-50 border-amber-200/80',
      dotColor: 'bg-amber-500',
      pulse: false,
      defaultLabel: 'GUARANTEE',
      defaultValue: '90-Day Parts & Labor Warranty',
    },
    turnaround: {
      icon: Clock,
      color: 'text-slate-800 bg-slate-100 border-slate-200/80',
      dotColor: 'bg-slate-600',
      pulse: false,
      defaultLabel: 'EXPRESS SERVICE',
      defaultValue: '24-Hour Emergency Triage Available',
    },
  }

  const current = configs[type] || configs.live
  const Icon = current.icon

  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 px-3.5 py-2 rounded-lg border text-xs transition-all shadow-xs',
        current.color,
        className
      )}
    >
      <div className="relative flex items-center justify-center">
        {current.pulse && (
          <span className={cn('animate-ping absolute h-2.5 w-2.5 rounded-full opacity-75', current.dotColor)} />
        )}
        <span className={cn('relative h-2 w-2 rounded-full', current.dotColor)} />
      </div>
      <Icon size={16} className="shrink-0" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 leading-tight">
        <span className="font-mono uppercase tracking-wider font-bold text-[10px] opacity-80">
          {label || current.defaultLabel}
        </span>
        <span className="hidden sm:inline opacity-40">•</span>
        <span className="font-semibold text-slate-900">{value || current.defaultValue}</span>
      </div>
    </div>
  )
}
