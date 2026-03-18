import { CircularGauge } from '../ui/CircularGauge';
import { CATEGORY_CONFIG } from '../../data/passportData';
import type {
  Test,
  CategoryKey,
  Certificate,
  Innovation,
} from '../../types/passport';

interface Props {
  test: Test;
  certificates: Certificate[];
  innovations: Innovation[];
  onSelectCategory: (key: CategoryKey) => void;
}

export function OverviewView({
  test,
  certificates,
  innovations,
  onSelectCategory,
}: Props) {
  const categoryKeys = (Object.keys(CATEGORY_CONFIG) as CategoryKey[]).filter(
    (k) => test.categories[k] !== undefined
  );

  return (
    <div>
      {/* ── Category gauge cards ── */}
      <div
        className={`grid gap-4 sm:gap-6 mx-auto ${
          categoryKeys.length === 3
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-4xl'
            : 'grid-cols-1 sm:grid-cols-2 sm:max-w-2xl'
        }`}
      >
        {categoryKeys.map((key) => {
          const cfg = CATEGORY_CONFIG[key];
          const cat = test.categories[key]!;
          return (
            <button
              key={key}
              onClick={() => onSelectCategory(key)}
              className="sp-card p-6 sm:p-10 flex flex-col items-center gap-4 sm:gap-5 hover:shadow-card-md transition-shadow cursor-pointer"
            >
              <p className="text-base sm:text-xl font-medium text-dark text-center">
                {cfg.label}
              </p>
              <CircularGauge
                score={cat.overallScore}
                size={140}
                color={cfg.color}
              />
            </button>
          );
        })}
      </div>

      {/* ── Certifications & Awards ── */}
      {certificates.length > 0 && (
        <div className="mt-10 sm:mt-16">
          <h2 className="text-base sm:text-[19px] font-semibold text-black mb-4 sm:mb-5">
            Certifications &amp; Awards
          </h2>
          <div className="flex flex-wrap gap-4 sm:gap-5">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="sp-card overflow-hidden w-full sm:w-56"
              >
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-40 object-cover"
                />
                <div className="px-4 py-3">
                  <p className="text-[13px] font-medium text-dark">
                    {cert.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Innovations ── */}
      {innovations.length > 0 && (
        <div className="mt-8 sm:mt-12">
          <h2 className="text-base sm:text-[19px] font-semibold text-black mb-4 sm:mb-5">
            Innovations
          </h2>
          <div className="space-y-4 w-full sm:max-w-xl">
            {innovations.map((inv) => (
              <div
                key={inv.id}
                className="sp-card p-4 sm:p-5 flex items-center gap-4 sm:gap-5"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-[15px] font-semibold text-dark">
                    {inv.title}
                  </p>
                  <p className="text-xs sm:text-sm font-normal text-muted mt-0.5">
                    Completed On {inv.completedOn}
                  </p>
                  <p className="text-xs sm:text-sm text-dark mt-1">
                    {inv.subtitle}
                  </p>
                  <span className="text-[13px] font-medium text-primary mt-2 block hover:underline cursor-pointer">
                    {inv.tag}
                  </span>
                </div>
                <div className="flex-shrink-0 w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={inv.imageUrl}
                    alt={inv.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
