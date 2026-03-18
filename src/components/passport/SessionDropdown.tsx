import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import type { Test } from '../../types/passport';

interface Props {
  tests: Test[];
  activeTestId: string;
  onChange: (t: Test) => void;
  disabled?: boolean;
}

export function SessionDropdown({
  tests,
  activeTestId,
  onChange,
  disabled = false,
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const activeTest = tests.find((t) => t.id === activeTestId) ?? tests[0];

  useEffect(() => {
    if (disabled) return;
    const fn = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [disabled]);

  return (
    <div className="flex py-4">
      <div className="relative" ref={ref}>
        {/* Trigger button */}
        <button
          onClick={() => !disabled && setOpen((v) => !v)}
          disabled={disabled}
          className={`flex items-center gap-2 text-2xl font-bold transition-opacity ${
            disabled
              ? 'text-muted opacity-60 cursor-not-allowed'
              : 'text-primary cursor-pointer hover:opacity-80'
          }`}
        >
          <span>{activeTest.name}</span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Dropdown panel */}
        {open && !disabled && (
          <div className="absolute top-full mt-2 z-30 min-w-[340px] py-2 bg-white rounded-xl shadow-dropdown border border-gray-100 overflow-hidden">
            {tests.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  onChange(t);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-5 py-3 text-left text-xl transition-colors ${
                  t.id === activeTestId
                    ? 'bg-primary/5 text-primary font-bold'
                    : 'text-dark font-bold hover:bg-gray-50'
                }`}
              >
                <span className="w-4 flex-shrink-0">
                  {t.id === activeTestId && (
                    <Check size={13} className="text-primary" />
                  )}
                </span>
                {t.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
