import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import type { Test } from '../../types/passport'

interface Props {
  tests: Test[]
  activeTestId: string
  onChange: (t: Test) => void
  disabled?: boolean
}

export function SessionDropdown({ tests, activeTestId, onChange, disabled = false }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const activeTest = tests.find(t => t.id === activeTestId) ?? tests[0]

  useEffect(() => {
    if (disabled) { setOpen(false); return }
    const fn = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [disabled])

  return (
    <div className="flex justify-center py-6">
      <div className="relative" ref={ref}>
        <button
          onClick={() => !disabled && setOpen(v => !v)}
          disabled={disabled}
          className={`flex items-center gap-1.5 text-[13px] font-medium transition-colors ${
            disabled
              ? 'text-gray-400 cursor-default'
              : 'text-primary hover:text-primary/80 cursor-pointer'
          }`}
        >
          <span>{activeTest.name}</span>
          {!disabled && (
            <ChevronDown
              size={13}
              className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          )}
          {disabled && <ChevronDown size={13} className="text-gray-300" />}
        </button>

        {open && !disabled && (
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-800 rounded-lg shadow-dropdown z-30 min-w-[320px] py-1 overflow-hidden">
            {tests.map(t => (
              <button
                key={t.id}
                onClick={() => { onChange(t); setOpen(false) }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-[13px] text-left transition-colors ${
                  t.id === activeTestId
                    ? 'bg-primary text-white'
                    : 'text-gray-200 hover:bg-gray-700'
                }`}
              >
                <span className="w-4 flex-shrink-0">
                  {t.id === activeTestId && <Check size={13} />}
                </span>
                {t.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
