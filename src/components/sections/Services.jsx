import React from 'react'
import {
  Zap,
  Cpu,
  Wrench,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { BRAND_CONFIG } from '../../constants/theme'
import { cn, scrollToSection } from '../../lib/utils'

export function Services() {
  const serviceCategories = [
    {
      id: 'electrical-services',
      title: 'Electrical Services',
      icon: Zap,
      accentColor: 'accent', // Electric Blue
      badge: 'Residential & Commercial',
      description:
        'Comprehensive electrical troubleshooting, certified installations, safety diagnostics, and precision rewiring for homes and business premises.',
      services: [
        'Fan Installation, Repair & Rewinding',
        'Electrical Wiring Complaints',
        'Submersable motor repair',
        'Switch & Socket Repair',
        'Lighting Installation',
        'MCB / Fuse Problems',
        'Electrical Fault Diagnosis',
      ],
    },
    {
      id: 'electronics-repair',
      title: 'Electronics Repair',
      icon: Cpu,
      accentColor: 'primary', // Dark Navy with Blue/Amber accent
      badge: 'Micro-Soldering & PCB',
      description:
        'Advanced board-level diagnostics, component replacement, micro-soldering, and audio-video equipment restoration in our clean ESD lab.',
      services: [
        'LED TV Repair & TV Wall Mounting Service',
        'Stabilizer Repair',
        'Inverters & Batteries Repair',
        'Power Supply Repair',
        'Component Replacement',
      ],
    },
    {
      id: 'appliance-repair',
      title: 'Home Appliance Repair',
      icon: Wrench,
      accentColor: 'highlight', // Amber
      badge: 'Major & Small Appliances',
      description:
        'Fast on-site and bench triage for cooling, washing, heating, and kitchen appliances using manufacturer-compliant replacement parts.',
      services: [
        'Induction Stove Repair',
        'Cooker and Gas Cut Repair',
        'Gas Stove and Pipeline Service',
        'Mixers,Grinders & Jars Repair',
        'Washing Machine Repair',
        'Refrigerator Repair',
      ],
    },
  ]

  const handleLearnMore = () => {
    scrollToSection('#contact')
  }

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 subtle-technical-lines opacity-40 pointer-events-none" />

      <Container size="lg" className="relative z-10">
        {/* Section Heading */}
        <SectionHeading
          badge="Our Core Capabilities"
          badgeIcon={Sparkles}
          badgeVariant="accent"
          title="Professional"
          highlightText="Repair Services"
          description="From electrical faults to electronic equipment and home appliances, we provide reliable repair solutions."
          align="center"
          className="mb-14 sm:mb-16"
        />

        {/* 3-Column Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {serviceCategories.map((category) => {
            const Icon = category.icon

            // Subtle top bar accent styling
            const topBarColors = {
              accent: 'bg-[#2563EB]',
              primary: 'bg-[#0F172A]',
              highlight: 'bg-[#F59E0B]',
            }

            const iconBgColors = {
              accent: 'bg-blue-50 text-[#2563EB] border-blue-200/80 group-hover:bg-[#2563EB] group-hover:text-white',
              primary: 'bg-slate-100 text-[#0F172A] border-slate-200 group-hover:bg-[#0F172A] group-hover:text-white',
              highlight: 'bg-amber-50 text-amber-700 border-amber-200/80 group-hover:bg-[#F59E0B] group-hover:text-[#0F172A]',
            }

            return (
              <div
                key={category.id}
                className="group relative flex flex-col h-full bg-[#F8FAFC] rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Top Colored Accent Strip */}
                <div className={cn('h-1.5 w-full transition-all duration-300', topBarColors[category.accentColor])} />

                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  {/* Card Header: Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={cn(
                        'h-12 w-12 rounded-xl flex items-center justify-center border transition-all duration-300 shadow-xs shrink-0',
                        iconBgColors[category.accentColor]
                      )}
                    >
                      <Icon size={24} />
                    </div>

                    <Badge
                      variant="neutral"
                      size="sm"
                      className="bg-white/90 text-slate-600 font-mono text-[11px] font-semibold border-slate-200"
                    >
                      {category.badge}
                    </Badge>
                  </div>

                  {/* Category Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors duration-200">
                    {category.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2.5 text-sm text-[#475569] leading-relaxed">
                    {category.description}
                  </p>

                  {/* Service List with Clean Check Icons */}
                  <div className="mt-6 pt-5 border-t border-slate-200/80 flex-grow">
                    <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-400 mb-3">
                      Included Services &amp; Repairs
                    </div>
                    <ul className="space-y-2.5">
                      {category.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-center gap-2.5 text-sm text-[#1E293B] font-medium"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[#2563EB] shrink-0"
                          />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer: "Learn More" / Book Action */}
                  <div className="mt-7 pt-5 border-t border-slate-200/80">
                    <Button
                      variant="outline"
                      size="md"
                      fullWidth
                      rightIcon={ArrowRight}
                      onClick={() => handleLearnMore(category.title)}
                      className="bg-white hover:bg-blue-50/60 hover:text-[#2563EB] hover:border-[#2563EB] text-[#0F172A] font-semibold shadow-xs justify-between group-hover:border-slate-300"
                    >
                      <span>Inquire Service</span>
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Trust Ticker */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
            <span className="font-semibold text-slate-800">
              Need a custom electrical or electronic repair not listed above?
            </span>
          </div>
          <a
            href={`tel:${BRAND_CONFIG.phoneRaw || BRAND_CONFIG.phone}`}
            className="font-bold text-[#2563EB] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Call Our Master Technicians for Free Evaluation</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </Container>
    </section>
  )
}
