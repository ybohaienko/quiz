import type { Question } from "./types.js";

/** All questions – edit this array to add or change questions. */
export const QUESTIONS: Question[] = [
  {
    id: "q1",
    title: "What is the capital of France?",
    shortExplanation: "The capital and largest city of France.",
    detailedExplanation:
      "Paris is the capital and most populous city of France. It is known for the Eiffel Tower, the Louvre, and its role as a global center for art, fashion, and culture.",
    illustration: "🗼",
    priority: 1,
  },
  {
    id: "q2",
    title: "Which planet is known as the Red Planet?",
    shortExplanation: "The fourth planet from the Sun, named for its reddish appearance.",
    detailedExplanation:
      "Mars is the fourth planet from the Sun and is often called the Red Planet due to iron oxide (rust) on its surface. It has been a major target for space exploration.",
    illustration: "🔴",
    priority: 2,
  },
  {
    id: "q3",
    title: "What is photosynthesis?",
    shortExplanation: "The process by which plants convert light into chemical energy.",
    detailedExplanation:
      "Photosynthesis is the process used by plants, algae, and some bacteria to convert sunlight, water, and carbon dioxide into glucose and oxygen. It is the foundation of most food chains.",
    illustration: "🌿",
    priority: 3,
  },
  {
    id: "q4",
    title: "Who wrote 'Romeo and Juliet'?",
    shortExplanation: "The English playwright and poet from the late 16th century.",
    detailedExplanation:
      "William Shakespeare wrote 'Romeo and Juliet,' one of his most famous tragedies, early in his career. The play has been adapted countless times for stage, film, and other media.",
    illustration: "📜",
    priority: 4,
  },
  {
    id: "q5",
    title: "What is the largest ocean on Earth?",
    shortExplanation: "The largest and deepest of Earth's five oceanic divisions.",
    detailedExplanation:
      "The Pacific Ocean is the largest and deepest ocean, covering about 63 million square miles. It extends from the Arctic in the north to the Antarctic in the south.",
    illustration: "🌊",
    priority: 5,
  },
  {
    id: "q6",
    title: "What does CPU stand for?",
    shortExplanation: "The main component that executes instructions in a computer.",
    detailedExplanation:
      "CPU stands for Central Processing Unit. It is the primary component of a computer that performs most of the processing inside the computer by executing program instructions.",
    illustration: "💻",
    priority: 6,
  },
];
