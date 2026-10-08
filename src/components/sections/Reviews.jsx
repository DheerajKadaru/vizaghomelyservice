import React, { useState } from 'react'
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  ArrowRight,
  MessageSquare
} from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { cn, scrollToSection } from '../../lib/utils'

export function Reviews() {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0)

  const reviews = [
    {
      id: 1,
      rating: 5,
      name: 'K. Venkata Rao',
      role: 'Resident, Murali Nagar',
      service: 'Smart TV & Backlight Repair',
      timeframe: 'Recent Service',
      text: 'My 43-inch LED TV had a dark display and sound-only issue. Took it to their shop opposite Airtel office in Murali Nagar. They repaired the board and backlight on the same day at a very reasonable price. Honest, quick and dependable service in Vizag!',
    },
    {
      id: 2,
      rating: 5,
      name: 'S. Lakshmi Prasanna',
      role: 'Homeowner, Madhavadhara',
      service: 'Washing Machine & Refrigerator',
      timeframe: 'Recent Service',
      text: 'Our washing machine had a water drainage problem and was vibrating heavily. Technician came on time for home service, diagnosed the pump issue, and fixed it neatly with genuine spares. Very polite, homely care and reasonable charges.',
    },
    {
      id: 3,
      rating: 5,
      name: 'P. Suresh Varma',
      role: 'Resident, Akkayyapalem',
      service: 'Ceiling Fan & Electrical MCB Wiring',
      timeframe: 'Recent Service',
      text: 'Had frequent MCB tripping and fan regulator faults at our house. They inspected the distribution panel thoroughly, fixed the short circuit, and rewound two ceiling fans. Highly satisfied with their honest pricing and prompt service.',
    },
  ]

  const handleNext = () => {
    setActiveMobileIndex((prev) => (prev + 1) % reviews.length)
  }

  const handlePrev = () => {
    setActiveMobileIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section
      id="reviews"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />

      <Container size="lg" className="relative z-10">
        {/* Section Heading */}
        <SectionHeading
          badge="Customer Feedback"
          badgeIcon={MessageSquare}
          badgeVariant="accent"
          title="What Our"
          highlightText="Customers Say"
          description="Real experiences from customers across Vizag who trust us with their repairs."
          align="center"
          className="mb-12 sm:mb-14"
        />

        {/* Verified Customer Notice */}
        <div className="max-w-xl mx-auto mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
            <span>Verified Customer Reviews • Visakhapatnam &amp; Murali Nagar</span>
          </div>
        </div>

        {/* Desktop & Tablet 3-Column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 relative group"
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={17}
                        className="fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>
                  <Quote size={22} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
                </div>

                {/* Review Body Text */}
                <p className="text-sm text-[#334155] leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Metadata & Service Type */}
              <div className="mt-6 pt-5 border-t border-slate-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-[#0F172A] leading-tight">
                      — {review.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {review.role}
                    </div>
                  </div>

                  <Badge
                    variant="accent"
                    size="sm"
                    className="bg-blue-50 text-[#2563EB] border-blue-200 font-medium text-[11px]"
                  >
                    {review.service}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Layout */}
        <div className="md:hidden">
          <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 shadow-xs relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 text-[#F59E0B]">
                {[...Array(reviews[activeMobileIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#F59E0B] text-[#F59E0B]"
                  />
                ))}
              </div>
              <Quote size={20} className="text-slate-300" />
            </div>

            <p className="text-sm text-[#334155] leading-relaxed italic min-h-[110px]">
              "{reviews[activeMobileIndex].text}"
            </p>

            <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-[#0F172A]">
                  — {reviews[activeMobileIndex].name}
                </div>
                <div className="text-xs text-slate-500">
                  {reviews[activeMobileIndex].role}
                </div>
              </div>

              <Badge
                variant="accent"
                size="sm"
                className="bg-blue-50 text-[#2563EB] border-blue-200 text-[11px]"
              >
                {reviews[activeMobileIndex].service}
              </Badge>
            </div>
          </div>

          {/* Mobile Carousel Controls */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex items-center gap-1.5">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMobileIndex(idx)}
                  className={cn(
                    'h-2 rounded-full transition-all cursor-pointer',
                    activeMobileIndex === idx
                      ? 'w-6 bg-[#2563EB]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  )}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="h-8 w-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="h-8 w-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* "View More Reviews" Action Button */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="md"
            rightIcon={ArrowRight}
            onClick={() => scrollToSection('#contact')}
            className="border-slate-300 hover:border-[#2563EB] hover:text-[#2563EB] text-[#0F172A] font-semibold px-6 shadow-xs"
          >
            View More Reviews / Leave Feedback
          </Button>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-600 text-center">
          <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
          <span>
            Every repair includes a written <strong>90-Day Parts &amp; Labor Warranty</strong> and free post-repair testing.
          </span>
        </div>
      </Container>
    </section>
  )
}
