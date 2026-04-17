'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { content } = useLanguage()

  return (
    <footer className="w-full bg-dark text-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              {content.footer.company}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {content.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{content.navigation.home}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors">
                  {content.navigation.about}
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-primary transition-colors">
                  {content.navigation.features}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-primary transition-colors">
                  {content.navigation.gallery}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">{content.footer.contact}</h4>
            <a
              href={`mailto:${content.footer.email}`}
              className="text-gray-300 hover:text-primary transition-colors text-sm"
            >
              {content.footer.email}
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{content.footer.followUs}</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kasifler.diyari/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-6 h-6"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.shopier.com/kasiflerdiyari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Shopier"
                title="Shopier"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-6 h-6"
                >
                  <path d="M6 8h12l-1.2 11H7.2L6 8Z" />
                  <path d="M9 8a3 3 0 0 1 6 0" />
                </svg>
                <span className="sr-only">Shopier</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 {content.footer.company}. {content.footer.allRights}</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                {content.footer.privacy}
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                {content.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
