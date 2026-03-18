import { useState } from 'react'
import { BackButton } from './BackButton'
import { SkillChart } from './SkillChart'
import { FeedbackCard } from './FeedbackCard'
import { EvidenceCarousel } from './EvidenceCarousel'
import type { TestSkill } from '../../types/passport'

interface Props {
  skill: TestSkill
  onBack: () => void
}

export function SkillDetailView({ skill, onBack }: Props) {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div>
      <BackButton onClick={onBack} />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column */}
        <div className="lg:w-80 flex-shrink-0 flex flex-col gap-4">
          {/* Skill name + score card */}
          <div className="sp-card p-5 flex items-center justify-between">
            <span className="text-[17px] font-semibold text-gray-900">{skill.name}</span>
            <span className="text-[22px] font-light text-gray-900 ml-4 flex-shrink-0">
              {skill.score % 1 === 0 ? skill.score : skill.score.toFixed(1)}
            </span>
          </div>

          {/* Description */}
          <div className="sp-card p-5">
            <p className="text-[13px] font-bold text-gray-900 mb-2">Skill Description</p>
            <p className="text-[13px] text-gray-600 leading-relaxed">{skill.description}</p>
          </div>

          {/* Supporting Evidence */}
          {skill.evidence.length > 0 && (
            <div>
              <EvidenceCarousel label="Supporting Evidence:" images={skill.evidence} />
            </div>
          )}

          {/* Testing Evidence */}
          {skill.testingEvidence && skill.testingEvidence.length > 0 && (
            <div>
              <EvidenceCarousel label="(Testing)Supporting Evidence:" images={skill.testingEvidence} />
            </div>
          )}

          {/* Empty evidence state */}
          {skill.evidence.length === 0 && (
            <div>
              <p className="text-[15px] font-semibold text-gray-900 mb-3">Supporting Evidence:</p>
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="flex-1 flex flex-col gap-4">
          <SkillChart skillName={skill.name} sessions={skill.sessions} />

          {skill.sessions.length > 0 && (
            <FeedbackCard
              sessions={skill.sessions}
              activeIdx={activeIdx}
              onNext={() => setActiveIdx(i => Math.min(i + 1, skill.sessions.length - 1))}
            />
          )}

          {skill.sessions.length === 0 && (
            <div className="sp-card p-5">
              <p className="text-[13px] text-gray-400 text-center py-4">No session feedback available yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
