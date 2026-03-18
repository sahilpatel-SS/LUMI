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
    <div className="flex justify-center sm:justify-start px-4 py-6 sm:px-8 sm:py-8">
      <div className="relative" ref={ref}>
        <div className="flex items-center justify-center gap-2">
          <span className="block sm:hidden text-primary">
            {activeTest.testType}
          </span>
        </div>
        {/* Trigger button */}
        <button
          onClick={() => !disabled && setOpen((v) => !v)}
          disabled={disabled}
          className={`flex items-center gap-2 text-lg sm:text-2xl font-semibold transition-opacity disabled:text-muted disabled:opacity-100 ${
            disabled
              ? 'text-muted opacity-60 cursor-not-allowed'
              : 'text-primary cursor-pointer hover:opacity-80'
          }`}
        >
          <span className="hidden sm:block">
            {activeTest.testType} - {activeTest.name}
          </span>
          <span className="block sm:hidden">{activeTest.name}</span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Dropdown panel */}
        {open && !disabled && (
          <div className="absolute top-full mt-2 z-30 min-w-[260px] sm:min-w-[340px] py-2 bg-white rounded-xl shadow-dropdown border border-gray-100 overflow-hidden">
            {tests.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  onChange(t);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 sm:px-5 py-3 text-left text-base sm:text-xl transition-colors ${
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
                <span className="hidden sm:block">
                  {t.testType} - {t.name}
                </span>
                <span className="block sm:hidden">{t.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
