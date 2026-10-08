import React from 'react'
import { Navbar, Footer, FloatingContactActions } from './components/layout'
import {
  Hero,
  Services,
  WhatWeRepair,
  HowItWorks,
  WhyChooseUs,
  Gallery,
  Reviews,
  Contact,
} from './components/sections'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] selection:bg-blue-600 selection:text-white">
      {/* Accessible Skip To Content Link for Screen Readers & Keyboard Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#2563EB] focus:text-white focus:rounded-lg focus:shadow-xl focus:font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
      >
        Skip to main content
      </a>

      {/* Sticky Industrial Header with Quick Diagnostics & Emergency Hotline */}
      <Navbar />

      {/* Main Website Semantic Landmark */}
      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* 1. Hero Section: Value Proposition, Certified Badge, Primary Intake CTAs */}
        <Hero />

        {/* 2. Core Services: Electrical, Electronics, Appliance Repair Categories */}
        <Services />

        {/* 3. What We Repair: Equipment Coverage Grid */}
        <WhatWeRepair />

        {/* 4. How It Works: 4-Step Intake, Diagnostics, Rework & Testing Flow */}
        <HowItWorks />

        {/* 5. Why Choose Us: Technical Differentiators, IPC Standards, Bench Metrics */}
        <WhyChooseUs />

        {/* 6. Portfolio Gallery: Workshop Bench, Micro-Soldering, Before & After */}
        <Gallery />

        {/* 7. Customer Reviews: Feedback & 90-Day Written Warranty */}
        <Reviews />

        {/* 8. Contact & Book a Repair: 2-Column Info, Maps & Validated Form */}
        <Contact />
      </main>

      {/* Comprehensive Business Footer */}
      <Footer />

      {/* Floating Action Buttons: Mobile Direct Call, WhatsApp & Back To Top */}
      <FloatingContactActions />
    </div>
  )
}
