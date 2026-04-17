'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  'bot-field': string
}

export default function ContactForm() {
  const { content } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    'bot-field': '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMsg('Name is required')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Valid email is required')
      return false
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Valid phone number is required')
      return false
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMsg('Message must be at least 10 characters')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg('')

    // Honeypot check
    if (formData['bot-field']) {
      console.log('Bot detected')
      return
    }

    if (!validateForm()) {
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        } as any).toString(),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          'bot-field': '',
        })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMsg(content.contact.form.error)
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setErrorMsg(content.contact.form.error)
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gray-50" id="contact">
      <div className="max-w-2xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            {content.contact.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-gray-600">
            {content.contact.description}
          </p>
        </div>

        <form
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          className="bg-white p-8 sm:p-10 rounded-xl shadow-lg"
        >
          {/* Honeypot */}
          <input
            type="hidden"
            name="bot-field"
            value={formData['bot-field']}
            onChange={handleChange}
          />

          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              {content.contact.form.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={content.contact.form.name}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              {content.contact.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={content.contact.form.email}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              {content.contact.form.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={content.contact.form.phone}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              {content.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={content.contact.form.message}
              rows={5}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
              required
            />
          </div>

          {status === 'error' && errorMsg && (
            <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
              {errorMsg || content.contact.form.error}
            </div>
          )}

          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
              {content.contact.form.success}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-primary hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-lg"
          >
            {status === 'sending'
              ? content.contact.form.sending
              : content.contact.form.submit}
          </button>
        </form>
      </div>
    </section>
  )
}
