import { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageModal } from '../ui/ImageModal';

interface Props {
  label: string;
  images: string[];
}

// Matches w-48 (192px) + gap-3 (12px) — used to step one card per click
const SCROLL_STEP = 204;

export function EvidenceCarousel({ label, images }: Props) {
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const updateState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 1);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    const max = scrollWidth - clientWidth;
    setScrollProgress(max > 0 ? scrollLeft / max : 0);
  }, []);

  // Initialise after render so we know if content overflows
  useEffect(() => {
    updateState();
  }, [updateState, images]);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === 'right' ? SCROLL_STEP : -SCROLL_STEP,
      behavior: 'smooth',
    });
  };

  // Empty evidence label
  if (!images.length)
    return (
      <>
        <p className="text-base sm:text-lg font-medium text-dark">
          Supporting Evidence:
        </p>

        <div className="sp-card p-5">
          <p className="text-sm text-muted text-center py-4">
            No supporting evidence available yet.
          </p>
        </div>
      </>
    );

  const hasOverflow = canScrollLeft || canScrollRight;

  return (
    <div className="mb-4 sm:mb-6">
      {/* Label + arrow controls */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-base sm:text-xl font-medium text-dark">{label}</p>

        {hasOverflow && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous evidence"
              className="p-1.5 rounded-full text-dark hover:bg-gray-100 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next evidence"
              className="p-1.5 rounded-full text-dark hover:bg-gray-100 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Scroll container */}
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={updateState}
          className="flex gap-3 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setModalIdx(i)}
              aria-label={`Open evidence image ${i + 1} of ${images.length}`}
              className="flex-shrink-0 w-36 h-28 sm:w-48 sm:h-36 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm hover:shadow-card hover:scale-[1.02] transition-all cursor-pointer"
            >
              <img
                src={src}
                alt={`Evidence ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Left fade edge */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent pointer-events-none rounded-l-xl" />
        )}
        {/* Right fade edge */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none rounded-r-xl" />
        )}
      </div>

      {/* Scroll progress bar — only when content overflows */}
      {hasOverflow && (
        <div className="mt-3 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary/40 rounded-full transition-all duration-150"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>
      )}

      <ImageModal
        imageUrl={modalIdx !== null ? (images[modalIdx] ?? '') : ''}
        isOpen={modalIdx !== null}
        onClose={() => setModalIdx(null)}
        title={`Evidence ${modalIdx !== null ? modalIdx + 1 : ''} of ${images.length}`}
      />
    </div>
  );
}
