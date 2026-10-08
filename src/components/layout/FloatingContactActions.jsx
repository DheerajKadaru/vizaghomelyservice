import React, { useState, useEffect } from 'react'
import { Phone, ArrowUp } from 'lucide-react'
import { SHOP_CONTACT_INFO } from '../../constants/contact'

export function FloatingContactActions() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* 1. Mobile-Only Quick Call Button (Bottom-Left) */}
      <div className="fixed bottom-4 left-3.5 xs:left-4 z-40 sm:hidden">
        <a
          href={`tel:${SHOP_CONTACT_INFO.phoneRaw}`}
          aria-label="Direct Phone Call to Technician"
          className="flex items-center gap-2 h-11 px-3.5 rounded-full bg-[#2563EB] active:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 active:scale-95 transition-all duration-200 border border-blue-400 font-bold text-xs"
        >
          <Phone size={15} />
          <span>Call Now</span>
        </a>
      </div>

      {/* 2. Floating Action Group (Bottom-Right) */}
      <div className="fixed bottom-4 right-3.5 xs:right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Scroll To Top Button (Appears when scrolled past 400px) */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="h-10 w-10 rounded-full bg-white text-slate-700 hover:text-[#0F172A] hover:bg-slate-50 border border-slate-200 shadow-lg flex items-center justify-center transition-all duration-200 active:scale-90 pointer-events-auto cursor-pointer"
          >
            <ArrowUp size={18} />
          </button>
        )}

        {/* Floating WhatsApp Action Button */}
        <a
          href={SHOP_CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with technician on WhatsApp"
          className="group relative flex items-center gap-2.5 h-12 sm:h-13 pl-3 pr-4 sm:pr-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/35 active:scale-95 transition-all duration-200 pointer-events-auto cursor-pointer border border-emerald-400/40"
        >

          {/* Official WhatsApp SVG Icon */}
          <div className="relative flex items-center justify-center h-8 w-8 rounded-full bg-white text-[#25D366] shrink-0 shadow-xs">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.33C16.32 14.2 15.1 13.6 14.88 13.52C14.65 13.43 14.49 13.39 14.32 13.64C14.16 13.89 13.69 14.44 13.54 14.61C13.4 14.77 13.25 14.8 13 14.67C12.75 14.55 11.95 14.29 11 13.44C10.26 12.78 9.76 11.97 9.62 11.72C9.47 11.47 9.6 11.34 9.73 11.21C9.84 11.1 9.98 10.92 10.1 10.78C10.23 10.64 10.27 10.53 10.35 10.37C10.43 10.2 10.39 10.06 10.33 9.93C10.27 9.81 9.77 8.58 9.57 8.08C9.37 7.6 9.16 7.66 9.01 7.66C8.87 7.65 8.71 7.65 8.54 7.65C8.38 7.65 8.11 7.71 7.89 7.96C7.66 8.21 7.03 8.8 7.03 10C7.03 11.2 7.91 12.36 8.03 12.52C8.16 12.69 9.75 15.14 12.18 16.19C12.76 16.44 13.21 16.59 13.56 16.7C14.14 16.89 14.68 16.86 15.1 16.8C15.57 16.73 16.54 16.21 16.75 15.63C16.95 15.05 16.95 14.55 16.89 14.45C16.83 14.35 16.68 14.28 16.57 14.33Z" />
            </svg>
          </div>

          {/* Text Label */}
          <div className="flex flex-col text-left leading-tight pr-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-100 font-semibold hidden sm:inline">
              Online Now
            </span>
            <span className="text-xs sm:text-sm font-extrabold tracking-tight font-sans">
              WhatsApp Us
            </span>
          </div>
        </a>

      </div>
    </>
  )
}
