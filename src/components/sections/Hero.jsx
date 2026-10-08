import React from 'react'
import {
  ShieldCheck,
  PhoneCall,
  ArrowRight,
  Wrench,
  Clock,
  DollarSign,
  Truck,
  MapPin
} from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { scrollToSection } from '../../lib/utils'
import { BRAND_CONFIG } from '../../constants/theme'
import heroImage from '../../assets/SHOP.jpeg'
import myPic from '../../assets/mypic.jpeg'

export function Hero() {
  const trustIndicators = [
    {
      title: 'Experienced Technicians',
      description: 'IPC certified & master solder specialists',
      icon: Wrench,
    },
    {
      title: 'Quality Service',
      description: 'OEM grade components & diagnostics',
      icon: ShieldCheck,
    },
    {
      title: 'Transparent Pricing',
      description: 'Upfront quotes, no hidden bench fees',
      icon: DollarSign,
    },
    {
      title: 'Fast Response',
      description: 'Same-day triage & 24h express intake',
      icon: Clock,
    },
  ]

  const handleBookClick = () => {
    scrollToSection('#contact')
  }

  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Subtle Technical / Electrical Background Elements */}
      <div className="absolute inset-0 pointer-events-none circuit-grid opacity-60" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10">
        
        {/* DOORSTEP SERVICE HIGHLIGHT (Top Center) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-200 shadow-sm animate-fadeIn">
            <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 animate-bounce">
              <Truck size={14} />
            </div>
            <span className="text-sm font-bold text-blue-900 tracking-wide">
              FAST DOORSTEP SERVICE AVAILABLE IN VIZAG
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          
          {/* Left Column: mypic.jpeg */}
          <div className="lg:col-span-3 flex justify-center order-2 lg:order-1 w-full mt-6 lg:mt-0">
            <div className="flex flex-col items-center w-full max-w-xs lg:max-w-none group">
              <div className="relative w-full aspect-[4/5] bg-white rounded-2xl shadow-xl border border-slate-200 p-2 overflow-hidden transform group-hover:-translate-y-1 transition-all duration-300">
                <div className="w-full h-full relative overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center">
                  <img src={myPic} alt="K. Santosh - Expert Electrician" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 text-xs font-bold text-slate-700">
                <ShieldCheck size={16} className="text-[#2563EB]" />
                K. Santosh (Expert Technician)
              </div>
            </div>
          </div>

          {/* Center Column: Headline & Action Content */}
          <div className="lg:col-span-6 flex flex-col items-center text-center order-1 lg:order-2 px-2 sm:px-4">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15] font-heading">
              Reliable Repair.<br />
              <span className="relative inline-block text-[#2563EB] mt-2">
                Professional Service.
                <span className="absolute -bottom-1.5 left-0 w-full h-[3.5px] bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#F59E0B] rounded-full" />
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl mx-auto font-medium">
              Fast, affordable and professional repair services for electrical equipment, electronics and home appliances.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              <Button
                variant="accent"
                size="lg"
                onClick={handleBookClick}
                rightIcon={ArrowRight}
                className="w-full sm:w-auto shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 text-base px-8 py-3.5 font-bold"
              >
                Book a Repair
              </Button>
              <a
                href={`tel:${BRAND_CONFIG.phoneRaw || BRAND_CONFIG.phone}`}
                className="w-full sm:w-auto inline-flex"
              >
                <Button
                  variant="outline"
                  size="lg"
                  leftIcon={PhoneCall}
                  className="w-full sm:w-auto text-[#0F172A] border-slate-300 hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-white text-base px-8 py-3.5 font-bold shadow-xs"
                >
                  Call Now
                </Button>
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Call:</span>
              <a href={`tel:${BRAND_CONFIG.phoneRaw}`} className="font-bold text-[#0F172A] hover:text-[#2563EB]">{BRAND_CONFIG.phone}</a>
              <span className="text-slate-300 mx-1">•</span>
              <span>Alt:</span>
              <a href={`tel:${BRAND_CONFIG.alternatePhoneRaw}`} className="font-bold text-[#0F172A] hover:text-[#2563EB]">{BRAND_CONFIG.alternatePhone}</a>
            </div>

          </div>

          {/* Right Column: SHOP.jpeg */}
          <div className="lg:col-span-3 flex justify-center order-3 lg:order-3 w-full mt-6 lg:mt-0">
            <div className="flex flex-col items-center w-full max-w-xs lg:max-w-none group">
              <div className="relative w-full aspect-[4/5] bg-white rounded-2xl shadow-xl border border-slate-200 p-2 overflow-hidden transform group-hover:-translate-y-1 transition-all duration-300">
                <div className="w-full h-full relative overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center">
                  <img src={heroImage} alt="Shop Storefront" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 text-xs font-bold text-slate-700">
                <MapPin size={16} className="text-amber-500" />
                Murali Nagar Workshop
              </div>
            </div>
          </div>

        </div>

        {/* Trust Indicators Grid */}
        <div className="mt-14 pt-10 border-t border-slate-200/90 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {trustIndicators.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex flex-col items-center text-center group">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-200/60 mb-3 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                    <Icon size={18} />
                  </div>
                  <span className="text-[13px] sm:text-sm font-bold text-[#0F172A] leading-tight mb-1">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-[#64748B] leading-tight">
                    {item.description}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

      </Container>
    </section>
  )
}
