// app/data/personality.ts

export type TraitKey = "analytical" | "creative" | "people" | "practical";

export type QuizOption = {
  label: string;
  weights: Partial<Record<TraitKey, number>>;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
};

export const QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    prompt: "Which activity sounds the most exciting to you?",
    options: [
      { label: "Solving complex puzzles or coding challenges", weights: { analytical: 2 } },
      { label: "Designing logos, UI screens, or posters", weights: { creative: 2 } },
      { label: "Organizing a club event with volunteers", weights: { people: 2 } },
      { label: "Building/repairing a gadget or machine", weights: { practical: 2 } },
    ],
  },
  {
    id: "q2",
    prompt: "Pick a project you'd love to do this month:",
    options: [
      { label: "Analyze data to find patterns and insights", weights: { analytical: 2 } },
      { label: "Create a short film or a photo series", weights: { creative: 2 } },
      { label: "Run a mentorship drive in your community", weights: { people: 2 } },
      { label: "Prototype an IoT device that solves a daily problem", weights: { practical: 2 } },
    ],
  },
  {
    id: "q3",
    prompt: "Your friends usually ask you for help with…",
    options: [
      { label: "Math/homework logic problems", weights: { analytical: 2 } },
      { label: "Making presentations look awesome", weights: { creative: 2 } },
      { label: "Group conflicts / planning trips", weights: { people: 2 } },
      { label: "Setting up networks / fixing hardware", weights: { practical: 2 } },
    ],
  },
  {
    id: "q4",
    prompt: "Which compliment would make you happiest?",
    options: [
      { label: "“You always figure things out precisely.”", weights: { analytical: 2 } },
      { label: "“Your ideas are so original and expressive.”", weights: { creative: 2 } },
      { label: "“You bring people together effortlessly.”", weights: { people: 2 } },
      { label: "“You get things working, no excuses.”", weights: { practical: 2 } },
    ],
  },
  {
    id: "q5",
    prompt: "Pick a challenge to tackle:",
    options: [
      { label: "Optimize an app to run faster", weights: { analytical: 2 } },
      { label: "Rebrand a local café from scratch", weights: { creative: 2 } },
      { label: "Increase participation in a college fest", weights: { people: 2 } },
      { label: "Assemble a low-cost 3D printer kit", weights: { practical: 2 } },
    ],
  },
];

export type StreamKey = "engineering" | "design" | "management" | "paramedical";

// Top-trait → Streams
export const TRAIT_TO_STREAMS: Record<TraitKey, StreamKey[]> = {
  analytical: ["engineering", "management"],
  creative: ["design", "management"],
  people: ["management", "paramedical"],
  practical: ["engineering", "paramedical"],
};

// Streams → Colleges (mock curated list, replace with your DB/API later)
export const STREAM_COLLEGES: Record<
  StreamKey,
  { name: string; city: string; tag: string; url?: string }[]
> = {
  engineering: [
    { name: "IIT Delhi", city: "New Delhi", tag: "Govt." },
    { name: "NIT Trichy", city: "Tiruchirappalli", tag: "Govt." },
    { name: "COEP Tech University", city: "Pune", tag: "Govt." },
  ],
  design: [
    { name: "NID Ahmedabad", city: "Ahmedabad", tag: "Govt." },
    { name: "MIT Institute of Design", city: "Pune", tag: "Private" },
    { name: "Srishti Manipal", city: "Bengaluru", tag: "Private" },
  ],
  management: [
    { name: "IIM Indore (IPM)", city: "Indore", tag: "Govt." },
    { name: "Shaheed Sukhdev College of Business Studies", city: "Delhi", tag: "Govt." },
    { name: "NMIMS Anil Surendra Modi School", city: "Mumbai", tag: "Private" },
  ],
  paramedical: [
    { name: "AIIMS (All India Institute of Medical Sciences)", city: "New Delhi", tag: "Govt." },
    { name: "JIPMER", city: "Puducherry", tag: "Govt." },
    { name: "Kasturba Medical College", city: "Manipal", tag: "Private" },
  ],
};

export const TRAIT_LABELS: Record<TraitKey, string> = {
  analytical: "Analytical",
  creative: "Creative",
  people: "People-Oriented",
  practical: "Practical",
};
