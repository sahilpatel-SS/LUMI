import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { SkillSession } from '../../types/passport';

// Design tokens — keep in sync with tailwind.config.js
const COLOR_ACCENT = '#2DD4A0'; // accent
const COLOR_PRIMARY = '#5B6AF0'; // primary
const COLOR_MUTED = '#9f9f9f'; // muted
const COLOR_GRID = '#f3f4f6';

interface Props {
  skillName: string;
  sessions: SkillSession[];
}

export function SkillChart({ skillName, sessions }: Props) {
  const data = sessions.map((s) => ({
    session: s.sessionNumber,
    score: s.score,
  }));

  return (
    <div className="sp-card p-5 sm:p-6 border border-gray-300 w-full">
      <p className="text-xs sm:text-base font-semibold text-black uppercase tracking-widest mb-3">
        Skill Progress
      </p>

      {sessions.length > 0 ? (
        <>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-primary inline-block shrink-0" />
            <span className="text-xs font-normal text-dark">{skillName}</span>
          </div>

          <ResponsiveContainer width="100%" height={176}>
            <LineChart
              data={data}
              margin={{ top: 4, right: 8, bottom: 18, left: -16 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={COLOR_GRID} />
              <XAxis
                dataKey="session"
                tick={{ fontSize: 10, fill: COLOR_MUTED }}
                label={{
                  value: 'Session Number',
                  position: 'insideBottom',
                  offset: -10,
                  fontSize: 10,
                  fill: COLOR_MUTED,
                }}
              />
              <YAxis
                domain={[0, 5]}
                ticks={[0, 1, 2, 3, 4, 5]}
                tick={{ fontSize: 10, fill: COLOR_MUTED }}
                label={{
                  value: 'Score',
                  angle: -90,
                  position: 'insideLeft',
                  offset: 18,
                  fontSize: 10,
                  fill: COLOR_MUTED,
                  textAnchor: 'middle',
                  dx: 12,
                }}
              />
              <Tooltip
                contentStyle={{
                  fontSize: 12,
                  borderRadius: 8,
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  fontFamily: 'Poppins, sans-serif',
                }}
                formatter={(v) => [v, 'Score']}
                labelFormatter={(l) => `Session ${String(l)}`}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke={COLOR_ACCENT}
                strokeWidth={2}
                dot={{
                  r: 4,
                  fill: COLOR_ACCENT,
                  stroke: 'white',
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 6,
                  fill: COLOR_PRIMARY,
                  stroke: 'white',
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </>
      ) : (
        <p className="text-sm text-muted text-center py-4">
          No progress data available yet.
        </p>
      )}
    </div>
  );
}
