import { CornerDownLeft } from 'lucide-react';

interface Props {
  onClick: () => void;
}

export function BackButton({ onClick }: Props) {
  return (
    <div className="flex justify-end mb-6">
      <button
        onClick={onClick}
        className="flex items-center gap-1.5 text-sm font-medium text-dark hover:opacity-60 transition-opacity"
      >
        <CornerDownLeft size={15} />
        Back
      </button>
    </div>
  );
}
