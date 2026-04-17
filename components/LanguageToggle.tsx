'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('tr')}
        className={`px-3 py-2 rounded font-semibold transition-all ${
          language === 'tr'
            ? 'bg-primary text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        aria-label="Switch to Turkish"
      >
        TR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-2 rounded font-semibold transition-all ${
          language === 'en'
            ? 'bg-primary text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
}
