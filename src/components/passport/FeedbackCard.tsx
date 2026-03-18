import { ArrowRight } from 'lucide-react';
import type { SkillSession } from '../../types/passport';

interface Props {
  sessions: SkillSession[];
  activeIdx: number;
  onNext: () => void;
}

export function FeedbackCard({ sessions, activeIdx, onNext }: Props) {
  const session = sessions[activeIdx];
  if (!session) return null;

  const hasNext = activeIdx < sessions.length - 1;

  return (
    <div className="sp-card p-5 sm:p-6 border border-gray-300 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm sm:text-md font-medium text-primary">
          Session: {session.sessionNumber}
        </span>
        <span className="text-sm sm:text-md font-medium text-primary">
          Score: {session.score}
        </span>
      </div>

      {/* What went well */}
      <div className="mb-4">
        <p className="text-sm sm:text-base font-bold text-dark mb-1.5">
          What went well:
        </p>
        <p className="text-sm sm:text-base font-normal italic text-black leading-relaxed">
          {session.whatWentWell}
        </p>
      </div>

      {/* Areas for improvement */}
      <div className="mb-4">
        <p className="text-sm sm:text-base font-bold text-dark mb-1.5">
          Areas for Improvement:
        </p>
        <p className="text-sm sm:text-base font-normal text-black leading-relaxed">
          {session.improvements}
        </p>
      </div>

      {hasNext && (
        <div className="flex justify-end">
          <button
            onClick={onNext}
            className="flex items-center gap-1 text-base sm:text-lg font-medium text-primary hover:gap-2 transition-all"
          >
            Next <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
