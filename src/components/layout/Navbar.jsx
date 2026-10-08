import React, { useState, useEffect } from 'react'
import {
  Zap,
  Phone,
  PhoneCall,
  Menu,
  X,
  Clock,
  MapPin,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react'
import { Container } from '../ui/Container'
import { cn, scrollToSection } from '../../lib/utils'
import { BRAND_CONFIG } from '../../constants/theme'
import { NAV_LINKS } from '../../constants/navigation'

export function Navbar({ activeSection = 'home', onNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentActive, setCurrentActive] = useState(activeSection)

  // Track scroll position for subtle elevation change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy to dynamically track active section in view
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.id)
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 160
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setCurrentActive(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScrollSpy, { passive: true })
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleLinkClick = (e, item) => {
    e.preventDefault()
    setCurrentActive(item.id)
    setMobileMenuOpen(false)

    if (onNavClick) {
      onNavClick(item)
    }

    // Precise scroll calculation with offset so no section is ever cut off
    scrollToSection(item.href)
  }

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Technical Info Bar (Desktop & Tablet) */}
      <div className="bg-[#0F172A] border-b border-slate-800 text-slate-300 py-1.5 px-4 text-xs">
        <Container size="lg" className="flex items-center justify-between">
          {/* Workshop Live Status */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-emerald-400">
                MURALI NAGAR • VIZAG
              </span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-300 hidden sm:inline text-xs font-normal">
              Electrical, Electronics &amp; Home Appliance Doorstep Service
            </span>
          </div>

          {/* Quick Hours & Location */}
          <div className="flex items-center gap-4 text-xs text-slate-300">
            <div className="hidden md:flex items-center gap-1.5 text-slate-400 font-sans">
              <Clock size={13} className="text-[#F59E0B]" />
              <span>{BRAND_CONFIG.hours}</span>
            </div>
            <span className="text-slate-700 hidden md:inline">|</span>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400 font-sans">
              <MapPin size={13} className="text-[#2563EB]" />
              <span>{BRAND_CONFIG.address}</span>
            </div>
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw || BRAND_CONFIG.phone}`}
              className="flex items-center gap-1.5 font-mono text-white hover:text-[#F59E0B] transition-colors font-medium ml-auto sm:ml-0 shrink-0 text-[11px] sm:text-xs"
              title="Direct Technician Hotline"
            >
              <Phone size={12} className="text-[#F59E0B] shrink-0" />
              <span>{BRAND_CONFIG.phone}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={cn(
          'w-full bg-white/95 backdrop-blur-md transition-all duration-200 border-b relative z-30',
          isScrolled
            ? 'border-slate-200 shadow-md shadow-slate-900/5 py-2.5'
            : 'border-slate-200/80 shadow-xs py-3 sm:py-3.5'
        )}
      >
        <Container size="lg" className="flex items-center justify-between">
          {/* 1. Shop Logo (Left) */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, { id: 'home', href: '#home' })}
            className="group flex items-center gap-2.5 sm:gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-0.5 min-w-0"
            aria-label="Vizag Homely Service - Sri Raja Rajeshwari Electrical & Electronics"
          >
            {/* Tech Logo Mark */}
            <div className="relative h-9 w-9 sm:h-11 sm:w-11 rounded-xl bg-[#0F172A] flex items-center justify-center border border-slate-800 shadow-sm transition-transform duration-200 group-hover:scale-105 shrink-0">
              {/* Subtle electrical accent corner */}
              <div className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              <Zap
                className="text-[#F59E0B] transition-transform duration-300 group-hover:rotate-6"
                size={20}
              />
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-[#0F172A] font-heading">
                  VIZAG <span className="text-[#2563EB]">HOMELY SERVICE</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  VIZAG
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-slate-500 font-semibold uppercase mt-0.5 truncate max-w-[140px] xs:max-w-[260px] sm:max-w-none">
                Sri Raja Rajeshwari Electrical &amp; Appliances
              </span>
            </div>
          </a>

          {/* 2. Desktop Navigation Links (Center) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = currentActive === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={cn(
                    'relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150',
                    isActive
                      ? 'text-[#2563EB] bg-blue-50/80 shadow-xs'
                      : 'text-[#1E293B] hover:text-[#2563EB] hover:bg-slate-50'
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#2563EB] rounded-full animate-fadeIn" />
                  )}
                </a>
              )
            })}
          </div>

          {/* 3. Desktop Prominent "Call Now" Button & Hotline (Right) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw || BRAND_CONFIG.phone}`}
              className="group relative inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] active:bg-[#1E40AF] text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 border border-blue-400/40 transition-all duration-200 active:scale-[0.98]"
              id="desktop-call-now-btn"
            >
              <div className="flex items-center justify-center h-7 w-7 rounded-lg bg-white/15 text-white">
                <PhoneCall size={16} className="group-hover:animate-bounce" />
              </div>
              <div className="flex flex-col text-left leading-tight pr-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-100">
                  Emergency &amp; Intake
                </span>
                <span className="text-sm font-extrabold tracking-tight font-sans">
                  Call Now: {BRAND_CONFIG.phone}
                </span>
              </div>
            </a>
          </div>

          {/* 4. Mobile Quick Actions (Call Now Button + Hamburger Menu) */}
          <div className="flex items-center gap-2 sm:hidden shrink-0">
            {/* Mobile Direct Call Button - Always Easily Accessible */}
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw || BRAND_CONFIG.phone}`}
              aria-label="Call VoltCraft Repair Hotline"
              className="flex items-center justify-center h-9.5 px-3 gap-1.5 rounded-lg bg-[#2563EB] text-white font-bold text-xs shadow-sm active:scale-95 transition-all shrink-0"
            >
              <Phone size={14} />
              <span>Call</span>
            </a>

            {/* Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                'flex items-center justify-center h-9.5 w-9.5 rounded-lg border transition-all cursor-pointer shrink-0',
                mobileMenuOpen
                  ? 'bg-slate-100 text-[#0F172A] border-slate-300'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-[#0F172A]'
              )}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </Container>
      </nav>

      {/* 5. Mobile Navigation Drawer / Dropdown */}
      <div
        className={cn(
          'fixed inset-0 bg-slate-900/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 z-30',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={cn(
          'absolute top-full inset-x-0 max-h-[calc(100vh-100%)] overflow-y-auto bg-white border-b border-slate-200 shadow-2xl lg:hidden z-40 transition-all duration-300 ease-in-out',
          mobileMenuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-4 opacity-0 pointer-events-none'
        )}
      >
        <div className="px-5 py-6 space-y-6">
          {/* Diagnostic Status in Mobile Drawer */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-800">Shop Intake Active</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-100 px-2 py-0.5 rounded">
              OPEN TODAY
            </span>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            <div className="text-[11px] font-mono uppercase font-bold text-slate-400 px-3 mb-2">
              Navigation Menu
            </div>
            {NAV_LINKS.map((link) => {
              const isActive = currentActive === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={cn(
                    'flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold transition-colors',
                    isActive
                      ? 'bg-blue-50 text-[#2563EB] font-bold border-l-4 border-l-[#2563EB]'
                      : 'text-[#1E293B] hover:bg-slate-50 hover:text-[#2563EB]'
                  )}
                >
                  <span>{link.label}</span>
                  <ChevronRight
                    size={18}
                    className={cn(isActive ? 'text-[#2563EB]' : 'text-slate-400')}
                  />
                </a>
              )
            })}
          </div>

          {/* Prominent Mobile "Call Now" Action Block */}
          <div className="pt-2 border-t border-slate-100 space-y-3">
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw || BRAND_CONFIG.phone}`}
              className="flex items-center justify-center gap-3 w-full py-3.5 px-5 rounded-xl bg-[#2563EB] active:bg-[#1D4ED8] text-white font-bold text-base shadow-lg shadow-blue-500/25 border border-blue-400"
              id="mobile-call-now-btn"
            >
              <PhoneCall size={20} className="animate-pulse" />
              <span>Call Technician Now: {BRAND_CONFIG.phone}</span>
            </a>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Clock size={14} className="text-[#F59E0B] shrink-0" />
                <span>{BRAND_CONFIG.hours}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <MapPin size={14} className="text-[#2563EB] shrink-0" />
                <span>{BRAND_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium pt-1 border-t border-slate-200/60">
                <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                <span>Reasonable Service &amp; Quality Spare Parts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
