import { useEffect } from 'react';
import { X, Download } from 'lucide-react';

interface Props {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  download?: boolean;
}

export function ImageModal({
  imageUrl,
  isOpen,
  onClose,
  title,
  download = false,
}: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', fn);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filename = title
    ? `${title.toLowerCase().replace(/\s+/g, '-')}.jpg`
    : 'image.jpg';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div
        className="flex flex-col items-center gap-2 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls above the image, aligned to its right edge */}
        <div className="w-full flex items-center justify-between gap-3">
          {title ? (
            <span className="text-sm font-medium text-white/70 truncate">
              {title}
            </span>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-2 flex-shrink-0">
            {download && (
              <a
                href={imageUrl}
                download={filename}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="Download image"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
              >
                <Download size={14} />
                Download
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Image */}
        <img
          src={imageUrl}
          alt={title ?? 'Image'}
          className="max-w-[90vw] max-h-[82vh] rounded-xl object-contain shadow-2xl"
        />
      </div>
    </div>
  );
}
