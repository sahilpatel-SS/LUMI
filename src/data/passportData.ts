import type { PassportData, CategoryKey } from '../types/passport'

/* ─── placeholder images ─── */
const ev = (bg: string, label: string) =>
  `https://placehold.co/300x200/${bg}/374151?text=${encodeURIComponent(label)}`

const Y1 = ev('fef9c3', 'Problem Statement')
const Y2 = ev('fef3c7', 'Workshop Notes')
const B1 = ev('dbeafe', 'Solution Research')
const B2 = ev('ede9fe', 'AI Analysis')
const G1 = ev('dcfce7', 'Design Prototype')
const CERT = ev('f0fdf4', 'Certificate')
const MAP  = ev('e0f2fe', 'Innovation Map')

/* ─── score rubric ─── */
export const SCORE_RUBRIC = [
  { score: 1, meaning: 'No evidence / struggles to demonstrate the skill' },
  { score: 2, meaning: 'Emerging skill with limited application' },
  { score: 3, meaning: 'Baseline competency — expected for graduates or early professionals' },
  { score: 4, meaning: 'Strong, consistent skill use across tasks or settings' },
  { score: 5, meaning: 'Demonstrates consistent understanding, competency, and autonomy in applying the skill' },
]

/* ─── category display config ─── */
export const CATEGORY_CONFIG: Record<CategoryKey, { label: string; color: string }> = {
  augmentedIntelligence: { label: 'Augmented Intelligence', color: '#2DD4A0' },
  durableSkills:         { label: 'Durable Skills',         color: '#A5B4FC' },
  domainSkills:          { label: 'Domain Skills',          color: '#0B1232' },
}

/* ─── main passport data ─── */
export const passportData: PassportData = {
  personName: 'Emily (TL A)',

  tests: [
    /* ── Test 1: Multi Emails (Oct 2025) ── */
    {
      id: 't1',
      name: 'Lumi-Test - Multi Emails Test (Oct 2025)',
      date: 'Oct 2025',
      categories: {
        augmentedIntelligence: {
          overallScore: 3.1,
          skills: [
            {
              id: 't1-haic', name: 'Human-AI Collaboration', score: 3.2,
              description: 'Getting the best of both human judgement and machine capability.',
              sessions: [
                { sessionNumber: 1, score: 3, whatWentWell: 'Applied AI tools effectively during ideation.', improvements: 'Deepen review of AI outputs before acceptance.' },
                { sessionNumber: 2, score: 3, whatWentWell: 'Balanced AI assistance with independent thinking.', improvements: 'Explore a broader range of AI workflow integrations.' },
                { sessionNumber: 3, score: 4, whatWentWell: 'Demonstrated strong coordination between AI and own judgement.', improvements: 'Document AI-assisted decisions for reflection.' },
              ],
              evidence: [Y1, B1],
              testingEvidence: [Y2],
            },
            {
              id: 't1-prompting', name: 'Effective Prompting', score: 3.0,
              description: 'Crafting clear and purposeful instructions to get the best output from AI models.',
              sessions: [
                { sessionNumber: 1, score: 3, whatWentWell: 'Used structured prompts effectively.', improvements: 'Iterate on prompts to refine results.' },
                { sessionNumber: 2, score: 3, whatWentWell: 'Showed awareness of prompt context.', improvements: 'Explore chain-of-thought prompting techniques.' },
              ],
              evidence: [B1],
            },
          ],
        },
        durableSkills: {
          overallScore: 3.3,
          skills: [
            {
              id: 't1-critical', name: 'Critical Thinking', score: 3.5,
              description: 'The discipline of thinking clearly when it matters most.',
              sessions: [
                { sessionNumber: 1, score: 4, whatWentWell: 'Identified core assumptions in problem framing.', improvements: 'Incorporate quantitative evidence more consistently.' },
                { sessionNumber: 2, score: 3, whatWentWell: 'Maintained logical structure in argument.', improvements: 'Consider second-order consequences of decisions.' },
              ],
              evidence: [Y1],
            },
            {
              id: 't1-design', name: 'Design Thinking', score: 4.7,
              description: 'A human-centred approach to innovation and problem-solving.',
              sessions: [
                { sessionNumber: 1, score: 5, whatWentWell: 'Exceptional empathy mapping and ideation.', improvements: 'Continue pushing prototype fidelity.' },
                { sessionNumber: 2, score: 4, whatWentWell: 'Led the design sprint with clear user focus.', improvements: 'Explore more divergent ideas before converging.' },
              ],
              evidence: [G1],
            },
            {
              id: 't1-empathy', name: 'Empathy', score: 2.5,
              description: 'Understanding and sharing the feelings and perspectives of others.',
              sessions: [
                { sessionNumber: 1, score: 3, whatWentWell: 'Demonstrated active listening.', improvements: 'Broaden perspective to include diverse cultural contexts.' },
                { sessionNumber: 2, score: 2, whatWentWell: 'Acknowledged team member concerns.', improvements: 'Translate empathy more directly into design decisions.' },
              ],
              evidence: [],
            },
          ],
        },
      },
    },

    /* ── Test 2: Investments (Oct 2025) ── */
    {
      id: 't2',
      name: 'Lumi-Test - Investments (Oct 2025)',
      date: 'Oct 2025',
      categories: {
        augmentedIntelligence: {
          overallScore: 2,
          skills: [
            {
              id: 't2-haic', name: 'Human-AI Collaboration', score: 2.9,
              description: 'Getting the best of both human judgement and machine capability.',
              sessions: [
                { sessionNumber: 1, score: 1, whatWentWell: 'Limited contribution during the session, resulting in insufficient evidence to assess this skill.', improvements: 'You could begin integrating basic AI tools into your workflow to build collaboration skills. You could document each AI interaction and reflect on hand-offs to strengthen coordination.' },
                { sessionNumber: 2, score: 2, whatWentWell: 'Showed some awareness of AI limitations.', improvements: 'Engage more actively with AI tools during tasks.' },
                { sessionNumber: 3, score: 3, whatWentWell: 'Effectively combined AI suggestions with personal insight.', improvements: 'Explore more AI applications in your domain.' },
                { sessionNumber: 4, score: 1, whatWentWell: 'Recognised when AI outputs needed human review.', improvements: 'Practise prompting more precisely.' },
                { sessionNumber: 5, score: 1, whatWentWell: 'Attempted to apply AI concepts to domain tasks.', improvements: 'Deepen understanding of AI workflow integration.' },
              ],
              evidence: [Y1, Y2, B1],
              testingEvidence: [Y1, Y2],
            },
            {
              id: 't2-prompting', name: 'Effective Prompting', score: 2.5,
              description: 'Crafting clear and purposeful instructions to get the best output from AI models.',
              sessions: [
                { sessionNumber: 1, score: 3, whatWentWell: 'Used structured prompts to guide AI outputs effectively.', improvements: 'Iterate on prompts to refine results. Explore chain-of-thought prompting.' },
                { sessionNumber: 2, score: 2, whatWentWell: 'Showed awareness of prompt structure.', improvements: 'Prompts could be more specific and context-rich.' },
              ],
              evidence: [B1],
            },
            {
              id: 't2-xai', name: 'Explainable-AI', score: 1.9,
              description: 'Understanding and communicating how AI systems make decisions.',
              sessions: [
                { sessionNumber: 1, score: 2, whatWentWell: 'Attempted to explain the AI recommendation rationale.', improvements: 'Use visual tools to support AI explanations. Seek feedback on clarity.' },
              ],
              evidence: [],
            },
            {
              id: 't2-ethical', name: 'Ethical Use of AI', score: 2.2,
              description: 'Applying AI responsibly, fairly, and with consideration for societal impact.',
              sessions: [
                { sessionNumber: 1, score: 2, whatWentWell: 'Raised valid ethical concerns during discussion.', improvements: 'Explore AI bias literature more deeply. Document ethical reasoning in outputs.' },
              ],
              evidence: [],
            },
          ],
        },
        durableSkills: {
          overallScore: 3,
          skills: [
            {
              id: 't2-critical', name: 'Critical Thinking', score: 2.8,
              description: 'The discipline of thinking clearly when it matters most.',
              sessions: [
                { sessionNumber: 1, score: 3, whatWentWell: 'Applied logical reasoning to link user behaviour to security outcomes.', improvements: 'Incorporate data to strengthen your reasoning.' },
                { sessionNumber: 2, score: 3, whatWentWell: 'Structured arguments effectively.', improvements: 'Challenge your own assumptions more rigorously.' },
                { sessionNumber: 3, score: 3, whatWentWell: 'Identified logical gaps in proposed solutions.', improvements: 'Bring in more quantitative evidence.' },
                { sessionNumber: 4, score: 3, whatWentWell: 'Maintained a systematic approach throughout.', improvements: 'Consider second-order consequences.' },
                { sessionNumber: 5, score: 2, whatWentWell: 'Asked probing questions during analysis.', improvements: 'Build stronger evidence chains for conclusions.' },
              ],
              evidence: [Y1, B1],
            },
            {
              id: 't2-design', name: 'Design Thinking', score: 4.7,
              description: 'A human-centred approach to innovation and problem-solving.',
              sessions: [
                { sessionNumber: 1, score: 5, whatWentWell: 'Exceptional empathy mapping and ideation.', improvements: 'Continue pushing prototype fidelity.' },
                { sessionNumber: 2, score: 4, whatWentWell: 'Led the design sprint with clear user focus.', improvements: 'Explore more divergent ideas before converging.' },
              ],
              evidence: [G1],
            },
            {
              id: 't2-resilience', name: 'Resilience & Agility', score: 2.1,
              description: 'Adapting effectively to change, setbacks, and uncertainty.',
              sessions: [
                { sessionNumber: 1, score: 2, whatWentWell: 'Maintained composure when pivoting strategy.', improvements: 'Build more structured recovery plans.' },
              ],
              evidence: [],
            },
            {
              id: 't2-empathy', name: 'Empathy', score: 3.5,
              description: 'Understanding and sharing the feelings and perspectives of others.',
              sessions: [
                { sessionNumber: 1, score: 4, whatWentWell: 'Demonstrated strong active listening skills.', improvements: 'Broaden perspective to include diverse cultural contexts.' },
                { sessionNumber: 2, score: 3, whatWentWell: 'Acknowledged team concerns proactively.', improvements: 'Translate empathy more directly into design decisions.' },
              ],
              evidence: [],
            },
            {
              id: 't2-entrepreneurial', name: 'Entrepreneurial Mindset', score: 2.4,
              description: 'Identifying opportunities and taking initiative to create value.',
              sessions: [
                { sessionNumber: 1, score: 2, whatWentWell: 'Proposed a viable business model concept.', improvements: 'Validate assumptions with user research. Develop a clearer value proposition.' },
              ],
              evidence: [],
            },
            {
              id: 't2-collab', name: 'Collaborative Problem Solving', score: 3.0,
              description: 'Working with others to tackle complex challenges effectively.',
              sessions: [
                { sessionNumber: 1, score: 3, whatWentWell: 'Facilitated productive team discussions.', improvements: 'Ensure all voices are included. Practice structured facilitation techniques.' },
              ],
              evidence: [],
            },
          ],
        },
      },
    },

    /* ── Test 3: Playground (Jul 2025) — all zeros ── */
    {
      id: 't3',
      name: 'Lumi-Test - Playground (Jul 2025)',
      date: 'Jul 2025',
      categories: {
        augmentedIntelligence: {
          overallScore: 0,
          skills: [
            { id: 't3-ethical-ai', name: 'Ethical AI Use', score: 0, description: 'Ensuring the fair, transparent, and responsible application of AI in decision-making and workflows.', sessions: [], evidence: [B2], testingEvidence: [B2] },
            { id: 't3-data-lit',   name: 'AI Data Literacy', score: 0, description: 'Understanding how to read, interpret, and apply data in AI-powered environments.', sessions: [], evidence: [B2] },
            { id: 't3-ai-dm',     name: 'AI Assisted Decision Making', score: 0, description: 'Turning tacit know-how into instructions that make machines genuinely useful.', sessions: [], evidence: [] },
            { id: 't3-xai',       name: 'Explainable AI', score: 0, description: 'Understanding and being able to explain the rationale behind AI decisions in an accessible way.', sessions: [], evidence: [] },
          ],
        },
        durableSkills: {
          overallScore: 0,
          skills: [
            { id: 't3-resilience', name: 'Resilience, Adaptability & Agility', score: 0, description: 'Adapting effectively to change, setbacks, and uncertainty.', sessions: [], evidence: [] },
            { id: 't3-empathy',    name: 'Empathy', score: 0, description: 'Understanding and sharing the feelings and perspectives of others.', sessions: [], evidence: [] },
            { id: 't3-entrepreneurial', name: 'Entrepreneurial Thinking', score: 0, description: 'Identifying opportunities and taking initiative to create value.', sessions: [], evidence: [] },
            { id: 't3-comm',       name: 'Effective Communication', score: 0, description: 'Conveying ideas clearly and persuasively across audiences.', sessions: [], evidence: [] },
          ],
        },
        domainSkills: {
          overallScore: 0,
          skills: [
            { id: 't3-critical',      name: 'Critical Thinking', score: 0, description: 'The discipline of thinking clearly when it matters most.', sessions: [], evidence: [] },
            { id: 't3-interpersonal', name: 'Interpersonal Skills', score: 0, description: 'Building and maintaining productive relationships.', sessions: [], evidence: [] },
            { id: 't3-leadership',    name: 'Leadership', score: 0, description: 'Inspiring and guiding individuals and teams toward shared goals.', sessions: [], evidence: [] },
            { id: 't3-collab',        name: 'Collaborative Problem Solving', score: 0, description: 'Working with others to tackle complex challenges effectively.', sessions: [], evidence: [] },
          ],
        },
      },
    },

    /* ── Test 4: Financial Engineering (Apr 2025) ── */
    {
      id: 't4',
      name: 'Lumi-Test - Financial Engineering (Apr 2025)',
      date: 'Apr 2025',
      categories: {
        augmentedIntelligence: {
          overallScore: 2,
          skills: [
            { id: 't4-haic',       name: 'Human-AI Collaboration', score: 2, description: 'Getting the best of both human judgement and machine capability.', sessions: [{ sessionNumber: 1, score: 2, whatWentWell: 'Showed awareness of AI limitations.', improvements: 'Engage more actively with AI tools.' }], evidence: [] },
            { id: 't4-prompting',  name: 'Effective Prompting',    score: 2, description: 'Crafting clear and purposeful instructions to get the best output from AI models.', sessions: [{ sessionNumber: 1, score: 2, whatWentWell: 'Used basic prompt structures.', improvements: 'Experiment with more specific prompt templates.' }], evidence: [] },
            { id: 't4-xai',        name: 'Explainable-AI',         score: 2, description: 'Understanding and communicating how AI systems make decisions.', sessions: [], evidence: [] },
            { id: 't4-ethical',    name: 'Ethical Use of AI',      score: 2, description: 'Applying AI responsibly, fairly, and with consideration for societal impact.', sessions: [], evidence: [] },
          ],
        },
        durableSkills: {
          overallScore: 2,
          skills: [
            { id: 't4-critical', name: 'Critical Thinking',        score: 2, description: 'The discipline of thinking clearly when it matters most.', sessions: [{ sessionNumber: 1, score: 2, whatWentWell: 'Asked relevant questions.', improvements: 'Develop stronger evidence for conclusions.' }], evidence: [] },
            { id: 't4-design',   name: 'Design Thinking',          score: 2, description: 'A human-centred approach to innovation and problem-solving.', sessions: [], evidence: [] },
            { id: 't4-empathy',  name: 'Empathy',                  score: 2, description: 'Understanding and sharing the feelings and perspectives of others.', sessions: [], evidence: [] },
          ],
        },
        domainSkills: {
          overallScore: 2,
          skills: [
            { id: 't4-financial',  name: 'Financial Analysis',   score: 2, description: 'Interpreting financial data to guide investment and business decisions.', sessions: [{ sessionNumber: 1, score: 2, whatWentWell: 'Applied basic financial models.', improvements: 'Strengthen quantitative reasoning.' }], evidence: [] },
            { id: 't4-risk',       name: 'Risk Assessment',      score: 2, description: 'Identifying, evaluating, and mitigating potential risks in financial contexts.', sessions: [], evidence: [] },
            { id: 't4-valuation',  name: 'Valuation Techniques', score: 2, description: 'Applying methods to determine the current worth of an asset or a company.', sessions: [], evidence: [] },
          ],
        },
      },
    },

    /* ── Test 5: Cybertronic CIA (Apr 2025) ── */
    {
      id: 't5',
      name: 'Lumi-Test - Cybertronic CIA (Apr 2025)',
      date: 'Apr 2025',
      categories: {
        augmentedIntelligence: {
          overallScore: 1,
          skills: [
            { id: 't5-haic',      name: 'Human-AI Collaboration', score: 1, description: 'Getting the best of both human judgement and machine capability.', sessions: [{ sessionNumber: 1, score: 1, whatWentWell: 'Attempted to use AI in task context.', improvements: 'Build confidence in directing AI tools for specific objectives.' }], evidence: [] },
            { id: 't5-prompting', name: 'Effective Prompting',    score: 1, description: 'Crafting clear and purposeful instructions to get the best output from AI models.', sessions: [], evidence: [] },
            { id: 't5-xai',       name: 'Explainable-AI',         score: 1, description: 'Understanding and communicating how AI systems make decisions.', sessions: [], evidence: [] },
          ],
        },
        durableSkills: {
          overallScore: 1,
          skills: [
            { id: 't5-critical',  name: 'Critical Thinking',      score: 1, description: 'The discipline of thinking clearly when it matters most.', sessions: [{ sessionNumber: 1, score: 1, whatWentWell: 'Identified the core problem statement.', improvements: 'Develop a more structured analytical approach.' }], evidence: [] },
            { id: 't5-resilience', name: 'Resilience & Agility',  score: 1, description: 'Adapting effectively to change, setbacks, and uncertainty.', sessions: [], evidence: [] },
            { id: 't5-collab',     name: 'Collaborative Problem Solving', score: 1, description: 'Working with others to tackle complex challenges effectively.', sessions: [], evidence: [] },
          ],
        },
      },
    },
  ],

  certificates: [
    { id: 'cert1', title: 'Certificate of Distinction', imageUrl: CERT },
  ],

  innovations: [
    { id: 'innov1', title: 'Model Choices', completedOn: 'July 2025', subtitle: 'LLM vs SLM', tag: 'Financial Engineering', imageUrl: MAP },
  ],
}
