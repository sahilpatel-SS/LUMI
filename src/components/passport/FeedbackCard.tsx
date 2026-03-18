import { ArrowRight } from 'lucide-react'
import type { SkillSession } from '../../types/passport'

interface Props {
  sessions: SkillSession[]
  activeIdx: number
  onNext: () => void
}

export function FeedbackCard({ sessions, activeIdx, onNext }: Props) {
  const session = sessions[activeIdx]
  if (!session) return null

  const hasNext = activeIdx < sessions.length - 1

  return (
    <div className="sp-card p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <span className="text-[13px] font-semibold text-primary">Session: {session.sessionNumber}</span>
        <span className="text-[13px] font-semibold text-primary">Score: {session.score}</span>
      </div>

      {/* What went well */}
      <div className="mb-4">
        <p className="text-[13px] font-bold text-dark mb-1.5">What went well:</p>
        <p className="text-sm font-normal text-muted leading-relaxed">{session.whatWentWell}</p>
      </div>

      {/* Areas for improvement */}
      <div className="mb-4">
        <p className="text-[13px] font-bold text-dark mb-1.5">Areas for Improvement:</p>
        <p className="text-sm font-normal text-muted leading-relaxed">{session.improvements}</p>
      </div>

      {hasNext && (
        <div className="flex justify-end">
          <button
            onClick={onNext}
            className="flex items-center gap-1 text-[13px] font-medium text-primary hover:gap-2 transition-all"
          >
            Next <ArrowRight size={13} />
          </button>
        </div>
      )}
    </div>
  )
}
