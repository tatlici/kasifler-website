'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export default function Gallery() {
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    // Dynamically load available images from gallery folder
    const imageList = [
      'IMG_5476.JPG',
      'IMG_5480.JPG',
      'IMG_5484 (1).JPG',
      'IMG_5487.JPG',
      'IMG_5489.JPG',
    ]
    setImages(imageList)
    setLoading(false)
  }, [])

  if (loading) {
    return null
  }

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white" id="gallery" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            Galeri / Gallery
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        {inView && images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer bg-gray-200"
              >
                <Image
                  src={`/assets/gallery/${image}`}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
