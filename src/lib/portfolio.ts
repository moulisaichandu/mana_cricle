export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  details: string;
  features: string[];
  tags: string[];
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  displayUrl: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "abacus-experts",
    name: "Abacus Experts",
    category: "Education & learning",
    summary: "A clear path from exploring abacus classes to lessons, practice and progress.",
    description: "An abacus education website and learner portal that brings programme information, demo enquiries, lessons and practice into one platform.",
    details: "Parents can compare Junior and Senior programmes, explore online and classroom options, and request a demo. The signed-in learning area organises lessons, practice, tests and progress around the learner's programme.",
    features: ["Programme and curriculum pages", "Demo enquiries and admissions workflows", "Student lessons, practice and tests", "Learning progress and achievements"],
    tags: ["Website", "Learner portal", "Admissions"],
    image: "/images/projects/abacus-experts.webp",
    imageAlt: "Abacus Experts website showing abacus class information and a demo enquiry form",
    liveUrl: "https://abacusexperts.com/",
    displayUrl: "abacusexperts.com",
  },
  {
    slug: "public-speaking",
    name: "Public Speaking",
    category: "Learning platform",
    summary: "A welcoming space for children to practise speaking and build confidence.",
    description: "A public-speaking website and learning platform that connects a playful first speaking exercise with guided activities, small-group classes and teacher feedback.",
    details: "The experience gives children a gentle way to begin, while parents help set up their learning journey. Dedicated student, teacher and admin workspaces support assignments, class planning and progress reviews.",
    features: ["A one-minute speaking warm-up", "Parent-supported learner onboarding", "Practice activities and teacher assignments", "Student, teacher and admin workspaces"],
    tags: ["Website", "Learning experience", "Dashboards"],
    image: "/images/projects/public-speaking.webp",
    imageAlt: "Public Speaking homepage with a yellow speaking-practice introduction, illustrated children and a one-minute warm-up",
    liveUrl: "https://publicspeakingclasses.in/",
    displayUrl: "publicspeakingclasses.in",
  },
  {
    slug: "chess-learning",
    name: "Chess Learning Platform",
    category: "Interactive learning",
    summary: "A personal chess club for lessons, puzzles and a little practice every day.",
    description: "A chess-learning website that brings interactive lessons, computer practice and puzzles into one consistent experience.",
    details: "Learners can move from an explanation to a board exercise, then practise against the computer. Account-based progress connects their lessons and saved games, with a companion app sharing the same account system.",
    features: ["Interactive lessons and board exercises", "Computer practice with five difficulty levels", "Chess puzzles and mini-games", "Saved games and learning progress"],
    tags: ["Website", "Interactive games", "Progress tracking"],
    image: "/images/projects/chess-learning.webp",
    imageAlt: "Chess learning interface with a chessboard and links to play and learn",
    liveUrl: "https://chessmastersapp.com/",
    displayUrl: "chessmastersapp.com",
  },
  {
    slug: "exam-preparation",
    name: "Exam Preparation Platform",
    category: "Exam preparation",
    summary: "Exam discovery, study resources and practice brought into one clear study journey.",
    description: "An exam-preparation website that helps learners explore competitive exams, find subject resources and move into timed practice.",
    details: "Exam and subject navigation gives a large content library a clear structure. Practice tests, answer explanations and study resources help learners decide what to study and review next.",
    features: ["Exam and subject discovery", "Structured study resources", "Timed practice tests and attempt review", "Answer explanations and preparation guides"],
    tags: ["Website", "Content platform", "Practice tests"],
    image: "/images/projects/exam-preparation.webp",
    imageAlt: "Exam preparation interface showing competitive exam categories and mock test options",
    displayUrl: "Exam preparation",
  },
  {
    slug: "voice-agent",
    name: "Voice Agent",
    category: "AI voice automation",
    summary: "A campaign console that connects voice conversations, lead workflows and transcripts.",
    description: "A voice-automation project for managing campaigns and connecting English, Telugu and Tinglish conversations with business information.",
    details: "The project combines a campaign console, Google Sheets lead workflows, document-based answers and transcript records. Voice and telephony integrations connect the conversation with the team's campaign workflow.",
    features: ["Campaign and lead management", "One-way messages and two-way conversations", "Answers grounded in supplied course documents", "Call transcripts and Google Sheets workflows"],
    tags: ["AI integration", "Campaign console", "Automation"],
    displayUrl: "Voice workflow",
  },
];

export const PORTFOLIO_PAGE_SIZE = 4;
export const portfolioPageCount = Math.max(1, Math.ceil(portfolioProjects.length / PORTFOLIO_PAGE_SIZE));

export function portfolioPageHref(page: number) {
  return page === 1 ? "/work" : `/work?page=${page}`;
}

export function resolvePortfolioPage(value: string | string[] | undefined) {
  if (typeof value !== "string" || !/^[1-9]\d*$/.test(value)) return 1;
  return Math.min(Number(value), portfolioPageCount);
}
