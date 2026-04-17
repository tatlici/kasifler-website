'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function About() {
  const { content } = useLanguage()

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4 sm:mb-6">
            {content.about.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {content.about.description}
          </p>
        </div>
      </div>
    </section>
  )
}
