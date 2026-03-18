import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import type { SkillSession } from '../../types/passport'

interface Props {
  skillName: string
  sessions: SkillSession[]
}

export function SkillChart({ skillName, sessions }: Props) {
  const data = sessions.map(s => ({ session: s.sessionNumber, score: s.score }))

  return (
    <div className="sp-card p-5">
      <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Skill Progress
      </p>

      {/* Legend */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-3 rounded-full bg-primary inline-block flex-shrink-0" />
        <span className="text-xs text-gray-600">{skillName}</span>
      </div>

      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 4, right: 8, bottom: 18, left: -16 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis
              dataKey="session"
              tick={{ fontSize: 10, fill: '#9ca3af' }}
              label={{ value: 'Session Number', position: 'insideBottom', offset: -10, fontSize: 10, fill: '#9ca3af' }}
            />
            <YAxis
              domain={[0, 5]}
              ticks={[0, 1, 2, 3, 4, 5]}
              tick={{ fontSize: 10, fill: '#9ca3af' }}
              label={{ value: 'Score', angle: -90, position: 'insideLeft', offset: 18, fontSize: 10, fill: '#9ca3af' }}
            />
            <Tooltip
              contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              formatter={(v) => [v, 'Score']}
              labelFormatter={(l) => `Session ${l}`}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#2DD4A0"
              strokeWidth={2}
              dot={{ r: 4, fill: '#2DD4A0', stroke: 'white', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: '#5B6AF0', stroke: 'white', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
