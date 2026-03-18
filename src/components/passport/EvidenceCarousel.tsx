import { useState } from 'react'
import { ImageModal } from '../ui/ImageModal'

interface Props {
  label: string
  images: string[]
}

export function EvidenceCarousel({ label, images }: Props) {
  const [modalUrl, setModalUrl] = useState<string | null>(null)

  if (!images.length) return null

  return (
    <div className="mb-6">
      <p className="text-[15px] font-semibold text-gray-900 mb-3">{label}</p>
      <div
        className="flex gap-3 overflow-x-auto pb-2"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#d1d5db #f3f4f6' }}
      >
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setModalUrl(src)}
            className="flex-shrink-0 w-48 h-36 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm hover:shadow-card transition-shadow cursor-pointer"
          >
            <img src={src} alt={`Evidence ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      {images.length > 2 && (
        <div className="mt-2 w-12 h-1 rounded-full bg-gray-300" />
      )}

      <ImageModal
        imageUrl={modalUrl ?? ''}
        isOpen={modalUrl !== null}
        onClose={() => setModalUrl(null)}
      />
    </div>
  )
}
