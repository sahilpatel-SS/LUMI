import { useState } from 'react';
import { BackButton } from './BackButton';
import { SkillChart } from './SkillChart';
import { FeedbackCard } from './FeedbackCard';
import { EvidenceCarousel } from './EvidenceCarousel';
import type { TestSkill } from '../../types/passport';

interface Props {
  skill: TestSkill;
  onBack: () => void;
}

export function SkillDetailView({ skill, onBack }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div>
      <BackButton onClick={onBack} />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column */}
        <div className="lg:w-80 flex-shrink-0 flex flex-col gap-4">
          {/* Skill name + score */}
          <div className="sp-card p-5 flex items-center justify-between gap-4">
            <span className="text-2xl font-semibold text-dark">
              {skill.name}
            </span>
            <span className="text-[22px] font-medium text-dark flex-shrink-0">
              {skill.score % 1 === 0 ? skill.score : skill.score.toFixed(1)}
            </span>
          </div>

          {/* Description */}
          <div className="sp-card p-5">
            <p className="text-sm font-semibold text-dark mb-2">
              Skill Description
            </p>
            <p className="text-sm font-normal text-muted leading-relaxed">
              {skill.description}
            </p>
          </div>

          {/* Supporting Evidence */}
          {skill.evidence.length > 0 && (
            <EvidenceCarousel
              label="Supporting Evidence:"
              images={skill.evidence}
            />
          )}

          {/* Testing Evidence */}
          {skill.testingEvidence && skill.testingEvidence.length > 0 && (
            <EvidenceCarousel
              label="(Testing) Supporting Evidence:"
              images={skill.testingEvidence}
            />
          )}

          {/* Empty evidence label */}
          {skill.evidence.length === 0 && (
            <p className="text-[15px] font-semibold text-dark">
              Supporting Evidence:
            </p>
          )}
        </div>

        {/* Right column */}
        <div className="flex-1 flex flex-col gap-4">
          <SkillChart skillName={skill.name} sessions={skill.sessions} />

          {skill.sessions.length > 0 ? (
            <FeedbackCard
              sessions={skill.sessions}
              activeIdx={activeIdx}
              onNext={() =>
                setActiveIdx((i) => Math.min(i + 1, skill.sessions.length - 1))
              }
            />
          ) : (
            <div className="sp-card p-5">
              <p className="text-sm text-muted text-center py-4">
                No session feedback available yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
