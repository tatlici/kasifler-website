'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '@/context/LanguageContext'

export default function Navigation() {
  const { content } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: content.navigation.home, href: '#hero' },
    { label: content.navigation.about, href: '#about' },
    { label: content.navigation.features, href: '#features' },
    { label: content.navigation.gallery, href: '#gallery' },
    { label: content.navigation.contact, href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-dark/80 backdrop-blur'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="Kaşifler Diyarı"
              width={40}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors ${
                  isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <LanguageToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded transition-colors ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-dark/90 rounded-lg p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white hover:text-primary font-semibold transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
