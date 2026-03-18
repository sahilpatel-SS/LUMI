import { useSearchParams } from 'react-router-dom';

export interface QuestParams {
  questId: string | null;
  score: number | null;
  innovation: string | null;
  index: string | null;
  hasQuestScore: boolean;
}

export function useQuestParams(): QuestParams {
  const [searchParams] = useSearchParams();

  const questId = searchParams.get('Quest') || null;

  const rawScore = searchParams.get('score');
  const parsedScore =
    rawScore !== null && rawScore !== '' ? Number(rawScore) : null;
  const score =
    parsedScore !== null && !isNaN(parsedScore) ? parsedScore : null;

  const rawInnovation = searchParams.get('innovation');
  const rawIndex = searchParams.get('index');

  return {
    questId,
    score,
    innovation: rawInnovation && rawInnovation !== '' ? rawInnovation : null,
    index: rawIndex && rawIndex !== '' ? rawIndex : null,
    hasQuestScore: questId !== null && score !== null,
  };
}
