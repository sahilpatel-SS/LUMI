import { CircularGauge } from '../ui/CircularGauge';
import { BackButton } from './BackButton';
import { CATEGORY_CONFIG } from '../../data/passportData';
import type {
  CategoryKey,
  CategoryData,
  TestSkill,
} from '../../types/passport';

interface Props {
  categoryKey: CategoryKey;
  categoryData: CategoryData;
  onBack: () => void;
  onSelectSkill: (skill: TestSkill) => void;
}

export function CategoryView({
  categoryKey,
  categoryData,
  onBack,
  onSelectSkill,
}: Props) {
  const cfg = CATEGORY_CONFIG[categoryKey];

  return (
    <div>
      <BackButton onClick={onBack} />

      <div className="flex flex-col lg:flex-row gap-24 justify-center">
        {/* Left — category gauge card */}
        <div className="flex flex-col gap-4">
          <div className="sp-card p-8 flex flex-col items-center gap-4">
            <p className="text-xl font-medium text-dark text-center">
              {cfg.label}
            </p>
            <CircularGauge
              score={categoryData.overallScore}
              color={cfg.color}
            />
          </div>
        </div>

        {/* Right — skill rows */}
        <div className="flex flex-col gap-4">
          {categoryData.skills.map((skill) => (
            <button
              key={skill.id}
              onClick={() => onSelectSkill(skill)}
              className="skill-row"
            >
              <span className="text-xl font-medium text-dark">
                {skill.name}
              </span>
              <span className="flex-shrink-0 flex items-baseline">
                <span className="text-xl font-medium text-dark">
                  {skill.score % 1 === 0 ? skill.score : skill.score.toFixed(1)}
                </span>
                <span className="text-xl font-medium text-silver">/5</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
