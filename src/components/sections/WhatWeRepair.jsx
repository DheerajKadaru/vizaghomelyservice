import React from 'react'
import {
  Tv,
  Wind,
  Refrigerator,
  WashingMachine,
  Fan,
  Speaker,
  AudioWaveform,
  CircuitBoard,
  Microwave,
  Gauge,
  HelpCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { scrollToSection } from '../../lib/utils'

export function WhatWeRepair() {
  const repairItems = [
    {
      id: 'television',
      name: 'Television',
      icon: Tv,
      description: 'LED, OLED, Smart TV display panels, power boards & backlight repair.',
      category: 'Display',
    },
    {
      id: 'refrigerator',
      name: 'Refrigerator',
      icon: Refrigerator,
      description: 'Single & double door fridge cooling issues, thermostat & sensor fixes.',
      category: 'Appliance',
    },
    {
      id: 'washing-machine',
      name: 'Washing Machine',
      icon: WashingMachine,
      description: 'Front & top load drum motor, drainage, spinning & control board rework.',
      category: 'Appliance',
    },
    {
      id: 'ceiling-fan',
      name: 'Ceiling Fan',
      icon: Fan,
      description: 'BLDC & regular fan winding, bearing replacement & speed regulator fixes.',
      category: 'Electrical',
    },
    {
      id: 'electrical-panels',
      name: 'Electrical Panels',
      icon: Gauge,
      description: 'MCB tripping, distribution board rewiring, overload & surge protection.',
      category: 'Electrical',
    },
  ]

  const handleInquiry = () => {
    scrollToSection('#contact')
  }

  return (
    <section
      id="what-we-repair"
      className="py-14 sm:py-18 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80 relative"
    >
      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="Equipment Coverage"
          badgeIcon={Sparkles}
          badgeVariant="neutral"
          title="What Can We"
          highlightText="Repair?"
          description="From everyday appliances to electronic equipment, our technicians handle a wide range of repair needs."
          align="center"
          className="mb-10 sm:mb-12"
        />

        {/* 5-Column (Desktop) / 3-Column (Tablet) / 2-Column (Mobile) Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4.5">
          {repairItems.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`Inquire about ${item.name} repair`}
                className="group relative flex flex-col justify-between bg-white rounded-xl border border-slate-200/90 p-3.5 sm:p-5 shadow-2xs hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 select-none"
                onClick={handleInquiry}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleInquiry()
                  }
                }}
              >
                <div>
                  {/* Top Bar: Icon & Category Indicator */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-slate-50 text-[#0F172A] border border-slate-200/80 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#2563EB] group-hover:border-blue-200 transition-colors duration-200">
                      <Icon size={20} className="transition-transform duration-200 group-hover:scale-110" />
                    </div>
                    <span className="text-[10px] font-mono font-medium text-slate-400 uppercase">
                      {item.category}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-sm sm:text-base font-bold text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors duration-150">
                    {item.name}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-1.5 text-xs text-[#64748B] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Status Dot */}
                <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Repairable
                  </span>
                  <ArrowRight
                    size={13}
                    className="text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all"
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Not Listed Prompt Card */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200 shrink-0">
              <HelpCircle size={22} />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0F172A]">
                Don't see your specific device or model listed?
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                We handle custom micro-soldering, vintage electronics, inverters, and specialized equipment.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleInquiry}
              rightIcon={ArrowRight}
              className="text-xs font-semibold"
            >
              Ask Our Technicians
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
