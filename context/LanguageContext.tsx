'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import tr from '@/content/tr.json'
import en from '@/content/en.json'

type Language = 'tr' | 'en'
type Content = typeof tr

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  content: Content
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr')

  // Hydration: load saved language preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null
    if (saved && (saved === 'tr' || saved === 'en')) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const content = language === 'tr' ? tr : en

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
