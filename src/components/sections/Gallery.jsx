import React, { useState, useEffect, useCallback } from 'react'
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  ZoomIn
} from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Badge } from '../ui/Badge'
import { cn } from '../../lib/utils'
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../../constants/gallery'

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeItem, setActiveItem] = useState(null)

  // Filtered gallery items
  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory)

  // Lightbox keyboard navigation (Escape, ArrowLeft, ArrowRight)
  const handleKeyDown = useCallback(
    (e) => {
      if (!activeItem) return

      if (e.key === 'Escape') {
        setActiveItem(null)
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id)
        const nextIndex = (currentIndex + 1) % filteredItems.length
        setActiveItem(filteredItems[nextIndex])
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id)
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
        setActiveItem(filteredItems[prevIndex])
      }
    },
    [activeItem, filteredItems]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [activeItem])

  const handleNextLightbox = (e) => {
    e.stopPropagation()
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setActiveItem(filteredItems[nextIndex])
  }

  const handlePrevLightbox = (e) => {
    e.stopPropagation()
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setActiveItem(filteredItems[prevIndex])
  }

  return (
    <section
      id="gallery"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative"
    >
      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="Shop Portfolio"
          badgeIcon={Layers}
          badgeVariant="accent"
          title="Our"
          highlightText="Work"
          description="Take a look at our repair work, workshop and completed projects."
          align="center"
          className="mb-10 sm:mb-12"
        />

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {GALLERY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none',
                  isSelected
                    ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20 border border-blue-600'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-[#0F172A] border border-slate-200/80'
                )}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Responsive Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              aria-label={`View full preview of ${item.title}`}
              onClick={() => setActiveItem(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveItem(item)
                }
              }}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 cursor-pointer flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 select-none"
            >
              {/* Image Aspect Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[#0F172A]/90 text-blue-300 backdrop-blur-md border border-slate-700 shadow-xs">
                    {item.category}
                  </span>
                </div>

                {/* Hover Zoom Icon Badge */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="h-8 w-8 rounded-lg bg-white/90 text-[#0F172A] flex items-center justify-center shadow-md backdrop-blur-xs">
                    <ZoomIn size={16} />
                  </div>
                </div>

                {/* Bottom Overlay Title & Tag Preview */}
                <div className="absolute bottom-3 left-3 right-3 z-10 text-left">
                  <div className="text-[11px] font-mono text-amber-400 font-semibold mb-0.5">
                    {item.tag}
                  </div>
                  <h3 className="text-white text-sm sm:text-base font-bold leading-snug drop-shadow-xs line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Detail */}
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="truncate pr-2 font-normal text-slate-600">
                  {item.description}
                </span>
                <span className="shrink-0 text-blue-600 font-bold font-mono text-[11px] flex items-center gap-1 group-hover:underline">
                  <span>Preview</span>
                  <Maximize2 size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Filter State (Fallback) */}
        {filteredItems.length === 0 && (
          <div className="p-12 text-center text-slate-400 bg-slate-50 rounded-2xl border border-slate-200">
            No items found in this category.
          </div>
        )}

        {/* Lightbox / Full-Screen Modal Preview */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
            onClick={() => setActiveItem(null)}
          >
            {/* Modal Dialog Box */}
            <div
              role="dialog"
              aria-modal="true"
              aria-label={activeItem.title}
              className="relative w-full max-w-4xl bg-[#0F172A] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Header Bar */}
              <div className="p-4 sm:px-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <Badge variant="electrical" size="sm">
                    {activeItem.category}
                  </Badge>
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                    • {activeItem.tag}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 pr-2">
                    {filteredItems.findIndex((i) => i.id === activeItem.id) + 1} / {filteredItems.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveItem(null)}
                    className="h-8 w-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Close Preview"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Main Image in Lightbox */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-contain"
                />

                {/* Previous Image Button */}
                <button
                  type="button"
                  onClick={handlePrevLightbox}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white flex items-center justify-center transition-all cursor-pointer border border-slate-700"
                  aria-label="Previous item"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Next Image Button */}
                <button
                  type="button"
                  onClick={handleNextLightbox}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white flex items-center justify-center transition-all cursor-pointer border border-slate-700"
                  aria-label="Next item"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Modal Description Footer */}
              <div className="p-5 sm:p-6 bg-slate-900/90 border-t border-slate-800">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {activeItem.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
