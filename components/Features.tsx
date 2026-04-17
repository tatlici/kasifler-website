'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

interface Feature {
  title: string
  description: string
}

const FeatureIcon = ({ icon }: { icon: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    '🎓': <span className="text-4xl">🎓</span>,
    '👥': <span className="text-4xl">👥</span>,
    '🧩': <span className="text-4xl">🧩</span>,
    '🎨': <span className="text-4xl">🎨</span>,
    '⚙️': <span className="text-4xl">⚙️</span>,
    '💰': <span className="text-4xl">💰</span>,
  }
  return icons[icon] || <span className="text-4xl">✨</span>
}

export default function Features() {
  const { content } = useLanguage()
  const iconsMap = ['🎓', '👥', '🧩', '🎨', '⚙️', '💰']

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gray-50" id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            {content.features.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {content.features.items.map((feature: Feature, index: number) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="mb-4 flex justify-center">
                <FeatureIcon icon={iconsMap[index]} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
