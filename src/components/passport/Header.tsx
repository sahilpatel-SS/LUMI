import { useState } from 'react';
import { ChevronDown, ChevronUp, InfoIcon, Menu, X } from 'lucide-react';
import { LUMI_LOGO, socialLinks } from '../../data/passportData';

interface Props {
  personName: string;
  onInfoClick: () => void;
}

export function Header({ personName, onInfoClick }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="bg-navy w-full text-white relative z-10">
      {/* ── Mobile bar (< lg) ── */}
      <div className="flex lg:hidden items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex-shrink-0 w-20">
          <img
            src={LUMI_LOGO}
            alt="Lumi"
            className="h-7 w-auto object-contain"
          />
        </div>

        {/* Centered title + info icon */}
        <div className="flex-1 flex items-center justify-center gap-1.5 px-3">
          <h1 className="text-sm font-semibold text-white leading-tight text-center">
            {personName}&apos;s Skill Passport
          </h1>
          <button
            onClick={onInfoClick}
            className="text-white hover:text-white/80 transition-colors flex-shrink-0"
            title="What the scores mean"
          >
            <InfoIcon size={14} />
          </button>
        </div>

        {/* Hamburger */}
        <div className="flex-shrink-0 w-20 flex justify-end">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-white hover:text-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            {expanded ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Desktop bar (lg+) ── */}
      <div className="hidden lg:block mx-auto px-8 pt-14">
        <div className="flex items-start gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={LUMI_LOGO}
              alt="Lumi"
              className="h-11 w-auto object-contain"
            />
          </div>

          {/* Title + subtitle */}
          <div className="flex-1 min-w-0 border-b-2 border-white pb-3">
            <div className="flex items-center justify-between gap-4">
              {/* Left */}
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-[28px] font-semibold text-white leading-tight">
                    {personName}&apos;s Skill Passport
                  </h1>
                  <button
                    onClick={onInfoClick}
                    className="text-white hover:text-white/80 transition-colors flex-shrink-0"
                    title="What the scores mean"
                  >
                    <InfoIcon size={16} />
                  </button>
                </div>
                <p className="mt-1 text-sm font-semibold text-muted leading-relaxed max-w-5xl">
                  Welcome to the skill overview. Here you can see how the
                  participant has performed in developing their AI, Durable and
                  Domain Skills compared to participants across the global Lumi
                  Network:
                </p>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {socialLinks.map((link) => (
                  <button
                    key={link.url}
                    onClick={() => window.open(link.url, '_blank')}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <link.icon size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chevron toggle */}
        <div className="flex justify-end">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="px-8 py-1.5 text-white transition-colors"
            aria-label="Toggle description"
          >
            {expanded ? (
              <ChevronUp size={16} strokeWidth={4} />
            ) : (
              <ChevronDown size={16} strokeWidth={4} />
            )}
          </button>
        </div>
      </div>

      {/* ── Expanded panel — shared for both mobile and desktop ── */}
      {expanded && (
        <div className="absolute top-full left-0 right-0 bg-navy z-20 shadow-2xl border-t border-white/10">
          <div className="px-4 lg:px-8 py-6 space-y-4 text-sm text-white leading-relaxed">
            <p>
              At Lumi, we ignite potential by helping people build the skills
              that matter most—creative problem-solving, AI fluency, and
              entrepreneurial thinking.
            </p>
            <p>
              This Skill Passport is a personalised snapshot of one
              participant&apos;s journey through a real-world innovation
              challenge. It highlights how they performed, what they excelled
              at, and where they can grow—based on feedback, reflection, and
              facilitator insight.
            </p>
            <p>
              It&apos;s more than a certificate—it&apos;s a window into how
              someone thinks, learns, and solves problems.{' '}
              <a
                href="https://www.lumi.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent transition-colors"
              >
                www.lumi.network
              </a>
            </p>

            {/* Social links — mobile only (desktop has them in main bar) */}
            <div className="flex lg:hidden items-center gap-4 pt-2">
              {socialLinks.map((link) => (
                <button
                  key={link.url}
                  onClick={() => window.open(link.url, '_blank')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <link.icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
