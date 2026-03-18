import { CircularGauge } from '../ui/CircularGauge'
import { CATEGORY_CONFIG } from '../../data/passportData'
import type { Test, CategoryKey, Certificate, Innovation } from '../../types/passport'

interface Props {
  test: Test
  certificates: Certificate[]
  innovations: Innovation[]
  onSelectCategory: (key: CategoryKey) => void
}

export function OverviewView({ test, certificates, innovations, onSelectCategory }: Props) {
  const categoryKeys = (Object.keys(CATEGORY_CONFIG) as CategoryKey[]).filter(
    k => test.categories[k] !== undefined
  )

  return (
    <div>
      {/* ── Category gauge cards ── */}
      <div
        className={`grid gap-6 mx-auto ${
          categoryKeys.length === 3 ? 'grid-cols-3 max-w-3xl' : 'grid-cols-2 max-w-xl'
        }`}
      >
        {categoryKeys.map(key => {
          const cfg = CATEGORY_CONFIG[key]
          const cat = test.categories[key]!
          return (
            <button
              key={key}
              onClick={() => onSelectCategory(key)}
              className="sp-card p-8 flex flex-col items-center gap-4 hover:shadow-card-md transition-shadow cursor-pointer"
            >
              <p className="text-[15px] text-gray-700">{cfg.label}</p>
              <CircularGauge score={cat.overallScore} size={160} color={cfg.color} />
            </button>
          )
        })}
      </div>

      {/* ── Certifications & Awards ── */}
      {certificates.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Certifications &amp; Awards</h2>
          <div className="flex flex-wrap gap-4">
            {certificates.map(cert => (
              <div key={cert.id} className="sp-card overflow-hidden w-56">
                <img src={cert.imageUrl} alt={cert.title} className="w-full h-40 object-cover" />
                <div className="p-3">
                  <p className="text-xs font-semibold text-gray-800">{cert.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Innovations ── */}
      {innovations.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Innovations</h2>
          <div className="space-y-3 max-w-lg">
            {innovations.map(inv => (
              <div key={inv.id} className="sp-card p-4 flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-[15px]">{inv.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Completed On {inv.completedOn}</p>
                  <p className="text-sm text-gray-600 mt-1">{inv.subtitle}</p>
                  <span className="text-xs font-medium text-primary mt-1.5 block hover:underline cursor-pointer">{inv.tag}</span>
                </div>
                <div className="flex-shrink-0 w-28 h-20 rounded-xl overflow-hidden bg-gray-100">
                  <img src={inv.imageUrl} alt={inv.title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
