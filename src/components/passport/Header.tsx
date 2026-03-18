import { useState } from 'react'
import { Globe, Instagram, Linkedin, Youtube, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

interface Props {
  personName: string
  onInfoClick: () => void
}

export function Header({ personName, onInfoClick }: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <header className="bg-navy text-white w-full">
      {/* ── Main bar ── */}
      <div className="max-w-[1140px] mx-auto px-6 py-4 flex items-start gap-5">
        {/* Logo */}
        <div className="flex items-center gap-1.5 pt-0.5 flex-shrink-0">
          <span className="text-2xl font-bold tracking-tight leading-none">Lumi</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent mb-3" />
        </div>

        {/* Title + subtitle */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-lg font-semibold leading-tight">
              {personName}'s Skill Passport
            </h1>
            <button
              onClick={onInfoClick}
              className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
              title="What the scores mean"
            >
              <HelpCircle size={15} />
            </button>
          </div>
          <p className="text-gray-400 text-[13px] mt-0.5 leading-snug max-w-2xl">
            Welcome to the skill overview. Here you can see how the participant has performed in
            developing their AI, Durable and Domain Skills compared to participants across the
            global Lumi Network:
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3 flex-shrink-0 pt-0.5">
          {[Globe, Instagram, Linkedin, Youtube].map((Icon, i) => (
            <button key={i} className="text-gray-400 hover:text-white transition-colors">
              <Icon size={17} />
            </button>
          ))}
        </div>
      </div>

      {/* ── Expandable description ── */}
      {expanded && (
        <div className="border-t border-white/10">
          <div className="max-w-[1140px] mx-auto px-6 py-5 space-y-3 text-[13px] text-gray-300 leading-relaxed">
            <p>
              At Lumi, we ignite potential by helping people build the skills that matter
              most—creative problem-solving, AI fluency, and entrepreneurial thinking.
            </p>
            <p>
              This Skill Passport is a personalised snapshot of one participant's journey through
              a real-world innovation challenge. It highlights how they performed, what they excelled
              at, and where they can grow—based on feedback, reflection, and facilitator insight.
            </p>
            <p>
              It's more than a certificate—it's a window into how someone thinks, learns, and
              solves problems.{' '}
              <a
                href="https://www.lumi.network"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                🔗 www.lumi.network
              </a>
            </p>
          </div>
        </div>
      )}

      {/* ── Toggle chevron ── */}
      <div className="border-t border-white/10 flex justify-end max-w-[1140px] mx-auto">
        <button
          onClick={() => setExpanded(v => !v)}
          className="px-6 py-1 text-gray-500 hover:text-gray-200 transition-colors"
          aria-label="Toggle description"
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>
    </header>
  )
}
