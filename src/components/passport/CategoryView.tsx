import { CircularGauge } from '../ui/CircularGauge'
import { BackButton } from './BackButton'
import { CATEGORY_CONFIG } from '../../data/passportData'
import type { CategoryKey, CategoryData, TestSkill } from '../../types/passport'

interface Props {
  categoryKey: CategoryKey
  categoryData: CategoryData
  onBack: () => void
  onSelectSkill: (skill: TestSkill) => void
}

export function CategoryView({ categoryKey, categoryData, onBack, onSelectSkill }: Props) {
  const cfg = CATEGORY_CONFIG[categoryKey]

  return (
    <div>
      <BackButton onClick={onBack} />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left — category gauge card */}
        <div className="lg:w-56 flex-shrink-0">
          <div className="sp-card p-8 flex flex-col items-center gap-4">
            <p className="text-[13px] font-medium text-gray-600 text-center">{cfg.label}</p>
            <CircularGauge score={categoryData.overallScore} size={148} color={cfg.color} />
          </div>
        </div>

        {/* Right — skill rows */}
        <div className="flex-1 flex flex-col gap-3">
          {categoryData.skills.map(skill => (
            <button
              key={skill.id}
              onClick={() => onSelectSkill(skill)}
              className="skill-row"
            >
              <span className="text-[15px] font-semibold text-gray-900">{skill.name}</span>
              <span className="text-[22px] font-light text-gray-900 ml-4 flex-shrink-0">
                {skill.score % 1 === 0 ? skill.score : skill.score.toFixed(1)}
                <span className="text-xs text-gray-400 font-medium ml-0.5">/5</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
