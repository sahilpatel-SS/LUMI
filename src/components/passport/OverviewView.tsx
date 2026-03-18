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
        className={`grid gap-6 mx-auto ${
          categoryKeys.length === 3
            ? 'grid-cols-3 max-w-4xl'
            : 'grid-cols-2 max-w-2xl'
        }`}
      >
        {categoryKeys.map((key) => {
          const cfg = CATEGORY_CONFIG[key];
          const cat = test.categories[key]!;
          return (
            <button
              key={key}
              onClick={() => onSelectCategory(key)}
              className='sp-card p-10 flex flex-col items-center gap-5 hover:shadow-card-md transition-shadow cursor-pointer'
            >
              <p className='text-xl font-normal text-dark'>{cfg.label}</p>
              <CircularGauge
                score={cat.overallScore}
                size={160}
                color={cfg.color}
              />
            </button>
          );
        })}
      </div>

      {/* ── Certifications & Awards ── */}
      {certificates.length > 0 && (
        <div className='mt-16'>
          <h2 className='text-[19px] font-semibold text-black mb-5'>
            Certifications &amp; Awards
          </h2>
          <div className='flex flex-wrap gap-5'>
            {certificates.map((cert) => (
              <div key={cert.id} className='sp-card overflow-hidden w-56'>
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className='w-full h-40 object-cover'
                />
                <div className='px-4 py-3'>
                  <p className='text-[13px] font-medium text-dark'>
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
        <div className='mt-12'>
          <h2 className='text-[19px] font-semibold text-black mb-5'>
            Innovations
          </h2>
          <div className='space-y-4 max-w-xl'>
            {innovations.map((inv) => (
              <div key={inv.id} className='sp-card p-5 flex items-center gap-5'>
                <div className='flex-1 min-w-0'>
                  <p className='text-[15px] font-semibold text-dark'>
                    {inv.title}
                  </p>
                  <p className='text-sm font-normal text-muted mt-0.5'>
                    Completed On {inv.completedOn}
                  </p>
                  <p className='text-sm text-dark mt-1'>{inv.subtitle}</p>
                  <span className='text-[13px] font-medium text-primary mt-2 block hover:underline cursor-pointer'>
                    {inv.tag}
                  </span>
                </div>
                <div className='flex-shrink-0 w-28 h-20 rounded-xl overflow-hidden bg-gray-100'>
                  <img
                    src={inv.imageUrl}
                    alt={inv.title}
                    className='w-full h-full object-cover'
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
