import React from 'react'
import {
  PhoneCall,
  SearchCheck,
  Wrench,
  PackageCheck,
  ArrowRight,
  Sparkles,
  Zap,
  Phone
} from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { BRAND_CONFIG } from '../../constants/theme'
import { cn, scrollToSection } from '../../lib/utils'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Contact Us',
      description: 'Call or WhatsApp us and tell us about the problem.',
      icon: PhoneCall,
      color: 'text-[#2563EB]',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      stepBadgeBg: 'bg-[#2563EB]',
    },
    {
      number: '02',
      title: 'Inspection',
      description: 'Our technician examines the equipment and identifies the issue.',
      icon: SearchCheck,
      color: 'text-[#0F172A]',
      bgColor: 'bg-slate-100',
      borderColor: 'border-slate-300',
      stepBadgeBg: 'bg-[#0F172A]',
    },
    {
      number: '03',
      title: 'Repair',
      description: 'We carry out the required repair using quality components.',
      icon: Wrench,
      color: 'text-[#D97706]',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      stepBadgeBg: 'bg-[#F59E0B]',
    },
    {
      number: '04',
      title: 'Test & Deliver',
      description: 'We test the equipment and return it in working condition.',
      icon: PackageCheck,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      stepBadgeBg: 'bg-emerald-600',
    },
  ]

  const handleContactClick = () => {
    scrollToSection('#contact')
  }

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Subtle Grid Backdrop */}
      <div className="absolute inset-0 subtle-technical-lines opacity-30 pointer-events-none" />

      <Container size="lg" className="relative z-10">
        {/* Section Heading */}
        <SectionHeading
          badge="Streamlined Repair Process"
          badgeIcon={Sparkles}
          badgeVariant="neutral"
          title="Simple. Fast."
          highlightText="Hassle-Free."
          description="Getting your equipment repaired is easy."
          align="center"
          className="mb-14 sm:mb-16"
        />

        {/* 1. Desktop Horizontal Process (Visible on lg and above) */}
        <div className="hidden lg:block relative mb-16">
          {/* Horizontal Connecting Line Through Center of Icons */}
          <div className="absolute top-[38px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-300 via-slate-300 to-emerald-300 border-t border-dashed border-slate-300 z-0" />

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Icon Node with Number Badge */}
                  <div className="relative mb-6">
                    <div
                      className={cn(
                        'h-[76px] w-[76px] rounded-2xl flex items-center justify-center border-2 bg-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg',
                        step.borderColor,
                        step.color
                      )}
                    >
                      <Icon size={32} />
                    </div>

                    {/* Step Number Badge */}
                    <span
                      className={cn(
                        'absolute -top-2.5 -right-2.5 text-white font-mono font-bold text-xs px-2 py-0.5 rounded-full shadow-xs',
                        step.stepBadgeBg
                      )}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-[#475569] leading-relaxed max-w-[240px]">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* 2. Mobile & Tablet Vertical Timeline (Visible below lg) */}
        <div className="lg:hidden relative mb-14 max-w-md mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute top-6 bottom-6 left-[27px] w-[2px] bg-gradient-to-b from-blue-400 via-slate-300 to-emerald-400 border-l border-dashed border-slate-300 z-0" />

          <div className="space-y-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="flex items-start gap-4 text-left"
                >
                  {/* Icon Node */}
                  <div className="relative shrink-0">
                    <div
                      className={cn(
                        'h-14 w-14 rounded-xl flex items-center justify-center border-2 bg-white shadow-sm',
                        step.borderColor,
                        step.color
                      )}
                    >
                      <Icon size={24} />
                    </div>
                    {/* Number Badge */}
                    <span
                      className={cn(
                        'absolute -top-1.5 -right-1.5 text-white font-mono font-bold text-[10px] px-1.5 py-0.2 rounded-full shadow-2xs',
                        step.stepBadgeBg
                      )}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content Box */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs flex-grow">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base font-bold text-[#0F172A]">
                        {step.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400 font-semibold">
                        STEP {step.number}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 3. Bottom Call To Action Block */}
        <div className="bg-[#0F172A] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          {/* Background Electrical Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono font-semibold mb-3">
                <Zap size={13} className="text-[#F59E0B]" />
                <span>RAPID INTAKE &amp; BENCH DIAGNOSTICS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
                Need a Repair?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
                Get your equipment examined by our master technicians. Transparent pricing and 90-day warranty included on every completed repair.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <Button
                variant="accent"
                size="lg"
                onClick={handleContactClick}
                rightIcon={ArrowRight}
                className="w-full sm:w-auto text-base px-7 py-3.5 font-bold shadow-lg shadow-blue-600/30"
              >
                Contact Us
              </Button>

              <a
                href={`tel:${BRAND_CONFIG.phoneRaw || BRAND_CONFIG.phone}`}
                className="w-full sm:w-auto inline-flex"
              >
                <Button
                  variant="darkOutline"
                  size="lg"
                  leftIcon={Phone}
                  className="w-full sm:w-auto text-base px-6 py-3.5 font-bold"
                >
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
