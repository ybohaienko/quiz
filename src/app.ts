import type { Question } from "./types.js";
import { QUESTIONS } from "./questions.js";

const STORAGE_THEME_KEY = "quiz-theme";

function shuffle<T>(array: T[]): T[] {
  const out = [...array];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function pickWrongOptions(
  questions: Question[],
  correctQuestion: Question,
  count: number
): string[] {
  const others = questions.filter((q) => q.id !== correctQuestion.id);
  const shuffled = shuffle(others);
  return shuffled.slice(0, count).map((q) => q.shortExplanation);
}

function buildOptions(correct: Question, all: Question[]): { text: string; correct: boolean }[] {
  const wrong = pickWrongOptions(all, correct, 3);
  const options: { text: string; correct: boolean }[] = [
    { text: correct.shortExplanation, correct: true },
    ...wrong.map((text) => ({ text, correct: false })),
  ];
  return shuffle(options);
}

class QuizApp {
  private questions: Question[] = [];
  private order: number[] = [];
  private index = 0;
  private currentOptions: { text: string; correct: boolean }[] = [];
  private answered = false;

  private el = {
    progress: document.getElementById("progress") as HTMLParagraphElement,
    quizSection: document.getElementById("quiz-section") as HTMLElement,
    resultSection: document.getElementById("result-section") as HTMLElement,
    questionTitle: document.getElementById("question-title") as HTMLHeadingElement,
    questionIllustration: document.getElementById("question-illustration") as HTMLDivElement,
    optionsList: document.getElementById("options-list") as HTMLUListElement,
    resultBadge: document.getElementById("result-badge") as HTMLDivElement,
    resultTitle: document.getElementById("result-title") as HTMLHeadingElement,
    resultIllustration: document.getElementById("result-illustration") as HTMLDivElement,
    resultShort: document.getElementById("result-short") as HTMLParagraphElement,
    resultDetailed: document.getElementById("result-detailed") as HTMLParagraphElement,
    nextBtn: document.getElementById("next-btn") as HTMLButtonElement,
    themeToggle: document.getElementById("theme-toggle") as HTMLButtonElement,
  };

  constructor() {
    if (QUESTIONS.length < 4) {
      throw new Error("At least 4 questions are required for the quiz.");
    }
    this.questions = [...QUESTIONS];
    this.order = shuffle(this.questions.map((_, i) => i));
    this.bindTheme();
    this.bindKeys();
    this.el.nextBtn.addEventListener("click", () => this.next());
    this.el.themeToggle.addEventListener("click", () => this.toggleTheme());
    this.showQuestion();
  }

  private get currentQuestion(): Question {
    return this.questions[this.order[this.index]];
  }

  private bindTheme(): void {
    const stored = localStorage.getItem(STORAGE_THEME_KEY) as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored ?? (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  }

  private toggleTheme(): void {
    const current = document.documentElement.getAttribute("data-theme") ?? "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_THEME_KEY, next);
  }

  private bindKeys(): void {
    document.addEventListener("keydown", (e) => {
      if (e.key === "t" || e.key === "T") {
        if (document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
          this.toggleTheme();
          e.preventDefault();
        }
        return;
      }
      if (this.answered) {
        if (e.key === "Enter") {
          this.next();
          e.preventDefault();
        }
        return;
      }
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= 4) {
        const option = this.el.optionsList.querySelector(`[data-index="${n - 1}"]`) as HTMLElement | null;
        if (option && !option.classList.contains("option--disabled")) {
          option.click();
          e.preventDefault();
        }
      }
    });
  }

  private showQuestion(): void {
    this.answered = false;
    const q = this.currentQuestion;
    this.currentOptions = buildOptions(q, this.questions);

    this.el.progress.textContent = `Question ${this.index + 1} of ${this.order.length}`;
    this.el.questionTitle.textContent = q.title;
    this.el.questionIllustration.textContent = q.illustration;
    this.el.questionIllustration.style.display = q.illustration ? "" : "none";

    this.el.optionsList.innerHTML = "";
    this.currentOptions.forEach((opt, i) => {
      const li = document.createElement("li");
      li.setAttribute("role", "option");
      li.setAttribute("data-index", String(i));
      li.className = "option";
      li.textContent = opt.text;
      li.addEventListener("click", () => this.selectOption(i));
      this.el.optionsList.appendChild(li);
    });

    this.el.quizSection.classList.remove("hidden");
    this.el.resultSection.classList.add("hidden");
  }

  private selectOption(optionIndex: number): void {
    if (this.answered) return;
    this.answered = true;

    const opt = this.currentOptions[optionIndex];
    const optionElements = this.el.optionsList.querySelectorAll(".option");

    optionElements.forEach((el, i) => {
      const item = el as HTMLElement;
      item.classList.add("option--disabled");
      if (this.currentOptions[i].correct) item.classList.add("option--correct");
      else if (i === optionIndex) item.classList.add("option--wrong");
    });

    const q = this.currentQuestion;
    this.el.resultBadge.textContent = opt.correct ? "Correct" : "Wrong";
    this.el.resultBadge.className = "result-badge " + (opt.correct ? "result-badge--correct" : "result-badge--wrong");
    this.el.resultTitle.textContent = q.title;
    this.el.resultIllustration.textContent = q.illustration;
    this.el.resultIllustration.style.display = q.illustration ? "" : "none";
    this.el.resultShort.textContent = q.shortExplanation;
    this.el.resultDetailed.textContent = q.detailedExplanation;

    this.el.quizSection.classList.add("hidden");
    this.el.resultSection.classList.remove("hidden");
    this.el.nextBtn.focus();
  }

  private next(): void {
    this.index++;
    if (this.index >= this.order.length) {
      this.index = 0;
      this.order = shuffle(this.questions.map((_, i) => i));
    }
    this.showQuestion();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new QuizApp();
});
