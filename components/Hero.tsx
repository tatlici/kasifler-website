'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { content } = useLanguage()

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-dark" id="hero">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/hero/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6 animate-slideUp">
          {content.hero.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 opacity-95 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          {content.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <a
            href="#about"
            className="inline-block bg-primary hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {content.hero.cta}
          </a>
          <a
            href="https://www.shopier.com/kasiflerdiyari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white/15 hover:bg-white/25 border border-white/70 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {content.hero.buyNow}
          </a>
        </div>
      </div>
    </section>
  )
}
