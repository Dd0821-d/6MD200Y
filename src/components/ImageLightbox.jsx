import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

export default function ImageLightbox({ src, alt, caption }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative w-full rounded-xl overflow-hidden border border-white/10 bg-[#040810] hover:border-emerald-400/30 transition-all duration-300 cursor-pointer"
      >
        <img src={src} alt={alt} className="w-full h-auto object-contain" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 text-white text-sm">
            <ZoomIn className="w-4 h-4" /> 点击放大
          </span>
        </div>
        {caption && (
          <p className="text-center text-xs text-gray-500 py-2.5 px-3 bg-white/[0.02]">{caption}</p>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          {caption && (
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-400 bg-black/60 px-4 py-1.5 rounded-full">
              {caption}
            </p>
          )}
        </div>
      )}
    </>
  )
}
