import { useEffect } from 'react';
import { X } from 'lucide-react';

interface Props {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageModal({ imageUrl, isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
      onClick={onClose}
    >
      <div className="relative mx-4" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-9 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          <X size={22} />
        </button>
        <img
          src={imageUrl}
          alt="Evidence"
          className="max-w-[90vw] max-h-[85vh] rounded-xl object-contain shadow-2xl"
        />
      </div>
    </div>
  );
}
