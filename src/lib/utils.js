import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind class names safely with clsx
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Smoothly scrolls to a target section accounting for the sticky navbar height
 * Prevents any cutting off or hiding of section headings beneath the header.
 */
export function scrollToSection(selector) {
  if (selector === '#home' || selector === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const element = document.querySelector(selector)
  if (element) {
    const header = document.querySelector('header')
    const headerOffset = header ? header.offsetHeight : 100
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 14
    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth',
    })
  }
}
