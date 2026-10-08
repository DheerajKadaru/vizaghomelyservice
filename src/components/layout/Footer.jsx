import React from 'react'
import {
  Zap,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react'
import { Container } from '../ui/Container'
import { scrollToSection } from '../../lib/utils'
import { BRAND_CONFIG } from '../../constants/theme'
import { SHOP_CONTACT_INFO } from '../../constants/contact'
import { NAV_LINKS } from '../../constants/navigation'

export function Footer() {
  const serviceLinks = [
    { label: 'Electrical Repair', href: '#services' },
    { label: 'Electronics Repair', href: '#services' },
    { label: 'TV Repair', href: '#what-we-repair' },
    { label: 'Appliance Repair', href: '#services' },
    { label: 'PCB Repair', href: '#what-we-repair' },
  ]

  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    scrollToSection(href)
  }

  return (
    <footer className="bg-[#0B1120] text-slate-300 border-t border-slate-800 relative z-20">
      {/* Upper Footer Content */}
      <div className="py-14 sm:py-16 lg:py-20 border-b border-slate-800/80">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 text-left">
            
            {/* COLUMN 1: Logo & Business Description */}
            <div className="lg:col-span-4 space-y-5">
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, '#home')}
                className="inline-flex items-center gap-3 select-none"
              >
                <div className="h-10 w-10 rounded-xl bg-[#0F172A] flex items-center justify-center border border-slate-700 text-white shadow-sm">
                  <Zap className="text-[#F59E0B]" size={22} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 leading-none">
                    <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white font-heading">
                      VIZAG <span className="text-[#2563EB]">HOMELY SERVICE</span>
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-900/60 text-emerald-400 border border-emerald-700/60">
                      VIZAG
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-400 font-semibold uppercase mt-0.5">
                    Sri Raja Rajeshwari Electrical &amp; Appliances
                  </span>
                </div>
              </a>

              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Your trusted local service center in Murali Nagar for reliable electrical rewiring, electronics board triage, and home appliance repairs with prompt home visits across Vizag.
              </p>

              {/* Social Media & Business Profile Links */}
              <div>
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold mb-3">
                  Connect &amp; Reviews
                </div>
                <div className="flex items-center gap-2.5">
                  {/* Google Business Profile */}
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Business Profile"
                    className="h-9 w-9 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.24 10.285V13.4h6.887C18.2 16.03 15.65 18 12.24 18c-3.315 0-6-2.685-6-6s2.685-6 6-6c1.47 0 2.815.535 3.865 1.415L18.42 5.1C16.78 3.565 14.62 2.67 12.24 2.67 7.085 2.67 2.91 6.845 2.91 12s4.175 9.33 9.33 9.33c5.385 0 9.07-3.79 9.07-9.23 0-.62-.055-1.22-.16-1.815H12.24z"/>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Page"
                    className="h-9 w-9 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="h-9 w-9 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube Channel"
                    className="h-9 w-9 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Quick Links */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: Services */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
                Services
              </h4>
              <ul className="space-y-2.5 text-sm">
                {serviceLinks.map((service) => (
                  <li key={service.label}>
                    <a
                      href={service.href}
                      onClick={(e) => handleSmoothScroll(e, service.href)}
                      className="text-slate-400 hover:text-[#2563EB] transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight size={13} className="text-slate-600" />
                      <span>{service.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4: Contact */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
                Contact
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
                {/* Phone */}
                <li className="flex items-start gap-2.5">
                  <Phone size={16} className="text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] font-mono text-slate-500">Phone Hotlines</span>
                    <a
                      href={`tel:${SHOP_CONTACT_INFO.phoneRaw}`}
                      className="font-bold text-white hover:text-[#2563EB] transition-colors block"
                    >
                      {SHOP_CONTACT_INFO.phone} (Primary)
                    </a>
                    <a
                      href={`tel:${SHOP_CONTACT_INFO.alternatePhoneRaw}`}
                      className="text-xs text-slate-400 hover:text-white transition-colors block mt-0.5"
                    >
                      {SHOP_CONTACT_INFO.alternatePhone} (Alternate)
                    </a>
                  </div>
                </li>

                {/* WhatsApp */}
                <li className="flex items-start gap-2.5">
                  <MessageCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] font-mono text-slate-500">WhatsApp</span>
                    <a
                      href={SHOP_CONTACT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-400 hover:underline"
                    >
                      {SHOP_CONTACT_INFO.whatsappText} ({SHOP_CONTACT_INFO.phone})
                    </a>
                  </div>
                </li>

                {/* Address */}
                <li className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] font-mono text-slate-500">Workshop Address</span>
                    <span className="text-slate-300 leading-snug block">
                      {SHOP_CONTACT_INFO.locationDetails}
                    </span>
                    <div className="flex items-center gap-2.5 mt-1.5">
                      <a
                        href={SHOP_CONTACT_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-blue-400 hover:underline inline-flex items-center gap-1"
                      >
                        <span>View on Map</span>
                        <span>&rarr;</span>
                      </a>
                      <span className="text-slate-600 text-[11px]">•</span>
                      <a
                        href={SHOP_CONTACT_INFO.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-emerald-400 hover:underline inline-flex items-center gap-1"
                      >
                        <span>Get Directions</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </div>
                </li>

                {/* Opening Hours */}
                <li className="flex items-start gap-2.5">
                  <Clock size={16} className="text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] font-mono text-slate-500">Opening Hours</span>
                    <span className="text-white block font-medium">
                      {SHOP_CONTACT_INFO.hours.days}
                    </span>
                    <span className="text-xs text-slate-400 block font-mono">
                      {SHOP_CONTACT_INFO.hours.timing}
                    </span>
                    <span className="text-[11px] text-amber-400/90 block mt-0.5">
                      {SHOP_CONTACT_INFO.hours.sundayNote}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </Container>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="pt-6 pb-24 sm:py-6 bg-[#080D1A] text-xs text-slate-400">
        <Container size="lg" className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>
              &copy; 2026 {BRAND_CONFIG.name}. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-500">
            <span>10+ Years Experience</span>
            <span>•</span>
            <span>1500+ Repairs</span>
            <span>•</span>
            <span className="text-slate-400">Murali Nagar, Vizag</span>
          </div>
        </Container>
      </div>
    </footer>
  )
}
