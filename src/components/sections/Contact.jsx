import React, { useState } from 'react'
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
  Wrench,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Navigation
} from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Label } from '../ui/FormField'
import { SHOP_CONTACT_INFO } from '../../constants/contact'
import { cn } from '../../lib/utils'

export function Contact() {
  // Form State Architecture (structured for direct Flask API payload)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    category: 'Electronics Repair',
    device: '',
    problem: '',
    preferredDate: '',
    contactMethod: 'Phone Call',
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [ticketId, setTicketId] = useState(null)
  const [serverError, setServerError] = useState('')

  // Field change handler
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error for field once edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  // Client-side Validation Logic
  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name.'
    }

    // Phone validation (accepts Indian +91 format, 10 digits, or international)
    const cleanPhone = formData.phone.replace(/[\s\-()+]/g, '')
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.'
    } else if (!/^[0-9]{10,13}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.'
    }

    if (!formData.device.trim()) {
      newErrors.device = 'Device or equipment name is required (e.g., 55" Samsung TV).'
    }

    if (!formData.problem.trim()) {
      newErrors.problem = 'Please provide a brief description of the issue.'
    } else if (formData.problem.trim().length < 10) {
      newErrors.problem = 'Description should be at least 10 characters long.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /**
   * Submit Handler:
   * Structured for future Flask API endpoint POST /api/repair-requests
   */
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setStatus('loading')
    setServerError('')

    try {
      /**
       * ============================================================
       * FLASK API CONNECTION HOOK (Ready for Backend Integration):
       *
       * const response = await fetch(SHOP_CONTACT_INFO.apiEndpoint, {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify(formData)
       * })
       * if (!response.ok) throw new Error('API submission failed')
       * const data = await response.json()
       * ============================================================
       */

      // API Call to Backend (Proxy in dev, Vercel in prod)
      const response = await fetch('/api/repair-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.fullName,
          phone_number: formData.phone,
          service_category: formData.category,
          device: formData.device,
          problem_description: formData.problem,
          preferred_date: formData.preferredDate || null,
          preferred_contact: formData.contactMethod
        })
      });

      if (!response.ok) {
        throw new Error('API submission failed')
      }
      const data = await response.json()

      const randomTicket = `REQ-${data.id.toString().padStart(4, '0')}`
      setTicketId(randomTicket)
      setStatus('success')
    } catch {
      setServerError('Unable to submit request. Please call or WhatsApp us directly.')
      setStatus('error')
    }
  }

  // Reset form to book another repair
  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      category: 'Electronics Repair',
      device: '',
      problem: '',
      preferredDate: '',
      contactMethod: 'Phone Call',
    })
    setErrors({})
    setStatus('idle')
    setTicketId(null)
    setServerError('')
  }

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80 relative"
    >
      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="Direct Intake & Dispatch"
          badgeIcon={Wrench}
          badgeVariant="accent"
          title="Need a Repair?"
          highlightText="We're Here to Help."
          description="Get in touch with our certified technicians or schedule a repair request directly."
          align="center"
          className="mb-14 sm:mb-16"
        />

        {/* Two-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* ========================================================================= */}
          {/* LEFT SIDE: Contact Information & Google Maps Embed Placeholder            */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#0F172A] font-heading">
                  Workshop Contact Information
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Visit our physical counter or connect via direct hotline.
                </p>
              </div>

              {/* 1. Phone */}
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-200 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Phone Hotlines
                  </div>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <a
                      href={`tel:${SHOP_CONTACT_INFO.phoneRaw}`}
                      className="text-base sm:text-lg font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors"
                    >
                      {SHOP_CONTACT_INFO.phone}{' '}
                      <span className="text-xs font-normal text-slate-500 font-mono">(Primary)</span>
                    </a>
                    <a
                      href={`tel:${SHOP_CONTACT_INFO.alternatePhoneRaw}`}
                      className="text-sm sm:text-base font-semibold text-slate-700 hover:text-[#2563EB] transition-colors"
                    >
                      {SHOP_CONTACT_INFO.alternatePhone}{' '}
                      <span className="text-xs font-normal text-slate-400 font-mono">(Alternate)</span>
                    </a>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Direct technician line for urgent repairs &amp; home visits
                  </div>
                </div>
              </div>

              {/* 2. WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    WhatsApp Chat
                  </div>
                  <a
                    href={SHOP_CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-base font-bold text-emerald-600 hover:text-emerald-700 hover:underline mt-0.5"
                  >
                    <span>{SHOP_CONTACT_INFO.whatsappText} ({SHOP_CONTACT_INFO.phone})</span>
                    <ExternalLink size={14} />
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Send photos/videos of faulty device for instant estimation
                  </div>
                </div>
              </div>

              {/* 3. Location */}
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Workshop &amp; Service Location
                  </div>
                  <div className="text-sm font-bold text-[#0F172A] mt-0.5">
                    {SHOP_CONTACT_INFO.locationTitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    {SHOP_CONTACT_INFO.locationDetails}
                  </p>
                  <div className="inline-block mt-1 px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                    Landmark: {SHOP_CONTACT_INFO.landmark}
                  </div>
                </div>
              </div>

              {/* 4. Opening Hours */}
              <div className="flex items-start gap-4 pt-2 border-t border-slate-100">
                <div className="h-11 w-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Working Hours
                  </div>
                  <div className="text-sm font-bold text-[#0F172A] mt-0.5">
                    {SHOP_CONTACT_INFO.hours.days}
                  </div>
                  <div className="text-xs font-semibold text-[#2563EB] font-mono mt-0.5">
                    {SHOP_CONTACT_INFO.hours.timing}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-medium">
                    {SHOP_CONTACT_INFO.hours.sundayNote}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs">
              <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-semibold text-[#0F172A]">
                  <MapPin size={14} className="text-[#2563EB]" />
                  <span>Workshop Location Map (Murali Nagar, Vizag)</span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">
                  PIN 530007
                </span>
              </div>

              {/* Map Iframe / Responsive Container */}
              <div className="relative aspect-[16/9] w-full bg-slate-100 flex items-center justify-center overflow-hidden">
                <iframe
                  title="Sri Raja Rajeshwari Shop Location Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d237.4954969998553!2d83.26014710908255!3d17.748033638982648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395d4e735175ad%3A0xd0a8a47e6f196385!2sMuralinagar%2C%20Madhavadhara%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530007%2C%20India!5e0!3m2!1sen!2sus!4v1791468623319!5m2!1sen!2sus"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-3 bg-white text-center border-t border-slate-100 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                <a
                  href={SHOP_CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#2563EB] hover:underline inline-flex items-center gap-1.5"
                >
                  <MapPin size={13} className="text-[#2563EB]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink size={11} className="text-slate-400" />
                </a>

                <span className="text-slate-300 hidden sm:inline">•</span>

                <a
                  href={SHOP_CONTACT_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline inline-flex items-center gap-1.5"
                >
                  <Navigation size={12} className="text-emerald-600" />
                  <span>Get Driving Directions</span>
                  <ExternalLink size={11} className="text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE: "Book a Repair" Form (Structured for Flask API)                */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 text-left">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 md:p-9 shadow-md relative overflow-hidden">

              {/* Form Card Top Accent Strip */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#2563EB] via-blue-500 to-[#F59E0B]" />

              {/* 1. SUCCESS STATE */}
              {status === 'success' ? (
                <div className="py-8 text-center space-y-5 animate-fadeIn">
                  <div className="h-16 w-16 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200 shadow-sm">
                    <CheckCircle2 size={36} />
                  </div>

                  <div>
                    <Badge variant="success" size="md" className="font-mono mb-2">
                      TICKET {ticketId}
                    </Badge>
                    <h3 className="text-2xl font-extrabold text-[#0F172A] font-heading">
                      Repair Request Received!
                    </h3>
                    <p className="mt-2 text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.fullName}</strong>. Our senior technician will review your <strong>{formData.device}</strong> details and contact you via <strong>{formData.contactMethod}</strong> shortly.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Equipment:</span>
                      <span className="font-bold text-slate-800">{formData.device}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Category:</span>
                      <span className="font-bold text-slate-800">{formData.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Contact Number:</span>
                      <span className="font-bold text-slate-800">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Preferred Mode:</span>
                      <span className="font-bold text-blue-600">{formData.contactMethod}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button
                      variant="outline"
                      size="md"
                      onClick={handleReset}
                      leftIcon={RefreshCw}
                    >
                      Book Another Repair
                    </Button>

                    <a href={`tel:${SHOP_CONTACT_INFO.phoneRaw}`}>
                      <Button variant="accent" size="md" leftIcon={Phone}>
                        Call For Express Triage
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
                /* 2. REGULAR FORM / IDLE / LOADING / ERROR STATES */
                <div>
                  <div className="mb-6 pb-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#0F172A] font-heading">
                        Book a Repair
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Fill in your equipment details for instant triage assessment.
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <ShieldCheck size={16} className="text-blue-600 shrink-0" />
                      <span className="font-medium">Free Initial Assessment</span>
                    </div>
                  </div>

                  {/* Server / API Error Banner */}
                  {status === 'error' && (
                    <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                      <AlertCircle size={16} className="text-rose-600 shrink-0" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">

                    {/* Row 1: Full Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <Label htmlFor="fullName" required>
                          Full Name
                        </Label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. John Henderson"
                          disabled={status === 'loading'}
                          aria-required="true"
                          aria-invalid={!!errors.fullName}
                          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                          className={cn(
                            'w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#1E293B] placeholder:text-slate-400 transition-all',
                            'focus:outline-none focus:ring-2',
                            errors.fullName
                              ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20 bg-rose-50/20'
                              : 'border-slate-300 focus:border-[#2563EB] focus:ring-[#2563EB]/20 hover:border-slate-400'
                          )}
                        />
                        {errors.fullName && (
                          <p id="fullName-error" role="alert" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                            <AlertCircle size={12} />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <Label htmlFor="phone" required>
                          Phone Number
                        </Label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 9876543210"
                          disabled={status === 'loading'}
                          aria-required="true"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'phone-error' : 'phone-hint'}
                          className={cn(
                            'w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#1E293B] placeholder:text-slate-400 transition-all',
                            'focus:outline-none focus:ring-2',
                            errors.phone
                              ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20 bg-rose-50/20'
                              : 'border-slate-300 focus:border-[#2563EB] focus:ring-[#2563EB]/20 hover:border-slate-400'
                          )}
                        />
                        {errors.phone ? (
                          <p id="phone-error" role="alert" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                            <AlertCircle size={12} />
                            <span>{errors.phone}</span>
                          </p>
                        ) : (
                          <p id="phone-hint" className="mt-1 text-[11px] text-slate-400">
                            We will send SMS / status updates to this number
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Service Category & Device / Equipment */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Service Category */}
                      <div>
                        <Label htmlFor="category" required>
                          Service Category
                        </Label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          aria-required="true"
                          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] cursor-pointer"
                        >
                          <option value="Electronics Repair">Electronics Repair (TV, Audio, PCB)</option>
                          <option value="Electrical Services">Electrical Services (Wiring, MCB, Lighting)</option>
                          <option value="Home Appliance Repair">Home Appliance Repair (AC, Fridge, Washer)</option>
                          <option value="Micro-Soldering Rework">Micro-Soldering / Component Replacement</option>
                          <option value="Other / Custom Repair">Other / Custom Equipment</option>
                        </select>
                      </div>

                      {/* Device / Equipment */}
                      <div>
                        <Label htmlFor="device" required>
                          Device / Equipment
                        </Label>
                        <input
                          id="device"
                          name="device"
                          type="text"
                          value={formData.device}
                          onChange={handleChange}
                          placeholder="e.g. Sony 55-inch OLED TV"
                          disabled={status === 'loading'}
                          aria-required="true"
                          aria-invalid={!!errors.device}
                          aria-describedby={errors.device ? 'device-error' : undefined}
                          className={cn(
                            'w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#1E293B] placeholder:text-slate-400 transition-all',
                            'focus:outline-none focus:ring-2',
                            errors.device
                              ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20 bg-rose-50/20'
                              : 'border-slate-300 focus:border-[#2563EB] focus:ring-[#2563EB]/20 hover:border-slate-400'
                          )}
                        />
                        {errors.device && (
                          <p id="device-error" role="alert" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                            <AlertCircle size={12} />
                            <span>{errors.device}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Problem Description */}
                    <div>
                      <Label htmlFor="problem" required>
                        Problem Description
                      </Label>
                      <textarea
                        id="problem"
                        name="problem"
                        rows={3}
                        value={formData.problem}
                        onChange={handleChange}
                        placeholder="Please describe symptoms (e.g. device won't turn on, strange noise, smoke, red blinking LED, cooling stopped)..."
                        disabled={status === 'loading'}
                        aria-required="true"
                        aria-invalid={!!errors.problem}
                        aria-describedby={errors.problem ? 'problem-error' : undefined}
                        className={cn(
                          'w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#1E293B] placeholder:text-slate-400 transition-all resize-y',
                          'focus:outline-none focus:ring-2',
                          errors.problem
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20 bg-rose-50/20'
                            : 'border-slate-300 focus:border-[#2563EB] focus:ring-[#2563EB]/20 hover:border-slate-400'
                        )}
                      />
                      {errors.problem && (
                        <p id="problem-error" role="alert" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                          <AlertCircle size={12} />
                          <span>{errors.problem}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 3: Preferred Date & Preferred Contact Method */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Preferred Date */}
                      <div>
                        <Label htmlFor="preferredDate">
                          Preferred Drop-off / Visit Date
                        </Label>
                        <input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
                        />
                      </div>

                      {/* Preferred Contact Method */}
                      <div>
                        <Label>Preferred Contact Method</Label>
                        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-1" role="radiogroup" aria-label="Preferred contact method">
                          {['Phone Call', 'WhatsApp', 'SMS'].map((method) => {
                            const isSelected = formData.contactMethod === method
                            return (
                              <button
                                key={method}
                                type="button"
                                role="radio"
                                aria-checked={isSelected}
                                onClick={() =>
                                  setFormData((prev) => ({ ...prev, contactMethod: method }))
                                }
                                disabled={status === 'loading'}
                                className={cn(
                                  'py-2 px-1 text-[11px] sm:text-xs font-semibold rounded-lg border transition-all text-center cursor-pointer select-none truncate',
                                  isSelected
                                    ? 'bg-blue-50 border-[#2563EB] text-[#2563EB] shadow-2xs font-bold'
                                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                                )}
                              >
                                {method}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                        <Sparkles size={14} className="text-[#F59E0B]" />
                        <span>Upfront evaluation • 90-day parts warranty</span>
                      </div>

                      <Button
                        type="submit"
                        variant="accent"
                        size="lg"
                        disabled={status === 'loading'}
                        className="w-full sm:w-auto px-8 py-3.5 text-base font-bold shadow-md shadow-blue-600/25 hover:shadow-lg"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 size={18} className="animate-spin mr-2" />
                            <span>Submitting Request...</span>
                          </>
                        ) : (
                          <>
                            <Send size={18} className="mr-2" />
                            <span>Request Repair</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
