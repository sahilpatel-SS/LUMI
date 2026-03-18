import { CornerDownLeft } from 'lucide-react'

interface Props { onClick: () => void }

export function BackButton({ onClick }: Props) {
  return (
    <div className="flex justify-end mb-5">
      <button
        onClick={onClick}
        className="flex items-center gap-1.5 text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
      >
        <CornerDownLeft size={14} />
        Back
      </button>
    </div>
  )
}
