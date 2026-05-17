import { Image } from 'lucide-react'

export default function PlaceholderImage({ label, className = '' }) {
  return (
    <div className={`border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center py-16 px-8 text-gray-500 bg-white/[0.01] ${className}`}>
      <Image className="w-12 h-12 mb-3 opacity-30" />
      <p className="text-sm">[{label}]</p>
      <p className="text-xs text-gray-600 mt-1">图片占位区域</p>
    </div>
  )
}
