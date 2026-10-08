import React from 'react'
import {
  UserCheck,
  Boxes,
  FileText,
  Zap,
  Activity,
  Headphones,
  Award
} from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { SHOP_METRICS } from '../../constants/metrics'

export function WhyChooseUs() {
  const features = [
    {
      id: 'experienced-technicians',
      title: 'Experienced Technicians',
      description: '10+ years of hands-on technical diagnostic and repair experience in Vizag.',
      icon: UserCheck,
      badge: '10+ Years',
    },
    {
      id: 'quality-components',
      title: 'Quality Components',
      description: 'We use reliable, tested replacement components for durable performance.',
      icon: Boxes,
      badge: 'Genuine Parts',
    },
    {
      id: 'transparent-pricing',
      title: 'Reasonable Pricing',
      description: 'Honest, affordable pricing without hidden charges or unnecessary extras.',
      icon: FileText,
      badge: 'Fair Estimates',
    },
    {
      id: 'fast-service',
      title: 'Prompt Doorstep Visits',
      description: 'Quick home visits and same-day diagnosis across Murali Nagar and nearby areas.',
      icon: Zap,
      badge: 'Vizag Service',
    },
    {
      id: 'thorough-testing',
      title: 'Thorough Testing',
      description: 'Every repaired appliance is fully checked and load-tested before handover.',
      icon: Activity,
      badge: 'Tested Quality',
    },
    {
      id: 'customer-support',
      title: 'Homely Customer Care',
      description: 'Polite, dependable support and post-repair guidance whenever you need help.',
      icon: Headphones,
      badge: 'Homely Care',
    },
  ]

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-[#0F172A] text-white border-y border-slate-800 relative overflow-hidden circuit-grid-dark"
    >
      {/* Background Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10">
        {/* Section Heading with Dark Mode Theme */}
        <SectionHeading
          badge="Why Choose Us"
          badgeIcon={Award}
          badgeVariant="electrical"
          title="Why Customers"
          highlightText="Choose Us"
          description="Reliable service, honest pricing and professional repair work."
          align="center"
          isDark
          className="mb-14 sm:mb-16"
        />

        {/* 1. Statistics / Milestone Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {SHOP_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 text-center relative group hover:border-blue-500/40 transition-all duration-300 shadow-lg shadow-black/20"
            >
              {/* Subtle top amber highlight glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F59E0B] font-mono tracking-tight">
                {metric.value}
              </div>
              <div className="text-base sm:text-lg font-bold text-white mt-1.5 font-heading">
                {metric.label}
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-[220px] mx-auto leading-relaxed">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Six Feature Cards Grid (3 Columns Desktop, 2 Columns Tablet, 1 Column Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.id}
                className="group flex flex-col justify-between bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-7 hover:border-blue-500/50 hover:bg-slate-850 transition-all duration-200 shadow-sm"
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-xl bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-blue-400 transition-all duration-200 shrink-0">
                      <Icon size={24} />
                    </div>

                    <Badge
                      variant="electrical"
                      size="sm"
                      className="bg-slate-950/80 text-blue-300 border-slate-800 text-[10px] font-mono"
                    >
                      {feature.badge}
                    </Badge>
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle Electrical Corner Node */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>STANDARD #0{feature.id.length % 9 + 1}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 opacity-60 group-hover:opacity-100" />
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
