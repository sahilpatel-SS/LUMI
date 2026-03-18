/**
 * 270° arc gauge for Lumi Skill Passport.
 * Gap is at the bottom. Fill starts bottom-left, clockwise.
 */
interface Props {
  score: number;
  maxScore?: number;
  size?: number;
  color?: string;
}

export function CircularGauge({
  score,
  maxScore = 5,
  size = 140,
  color = '#2DD4A0',
}: Props) {
  const r = 44;
  const cx = 56;
  const cy = 56;
  const C = 2 * Math.PI * r;
  const arc = C * 0.75;
  const filled = Math.max(0, Math.min(1, score / maxScore)) * arc;

  const fmt = (n: number) => (n % 1 === 0 ? String(n) : n.toFixed(1));

  return (
    <div className='relative' style={{ width: size, height: size }}>
      <svg
        viewBox='0 0 112 112'
        className='w-full h-full'
        style={{ overflow: 'visible' }}
      >
        {/* Background track */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill='none'
          stroke='#E5E7EB'
          strokeWidth='9'
          strokeLinecap='round'
          strokeDasharray={`${arc} ${C - arc}`}
          transform={`rotate(135, ${cx}, ${cy})`}
        />
        {/* Filled arc */}
        {filled > 0 && (
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill='none'
            stroke={color}
            strokeWidth='9'
            strokeLinecap='round'
            strokeDasharray={`${filled} ${C - filled}`}
            transform={`rotate(135, ${cx}, ${cy})`}
            style={{ transition: 'stroke-dasharray 0.6s ease' }}
          />
        )}
        {/* Zero-state dot */}
        {filled === 0 && (
          <circle
            cx={cx + r * Math.cos((135 * Math.PI) / 180)}
            cy={cy + r * Math.sin((135 * Math.PI) / 180)}
            r={5}
            fill={color}
          />
        )}
      </svg>

      {/* Score centred */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <span className='text-3xl font-medium text-dark leading-none select-none'>
          {fmt(score)}/5
        </span>
      </div>
    </div>
  );
}
