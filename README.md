# Quiz App

A simple, self-contained HTML quiz application built with TypeScript. Each question has a title, short explanation, detailed explanation, illustration, and priority. The quiz shows four options (short explanations from different questions); after you pick one, the full question details are shown.

## Features

- **Question structure**: Title, short explanation, detailed explanation, illustration, priority
- **Four options** per question, chosen from short explanations of other questions
- **Full reveal** after answering: correct/wrong badge and full question info
- **Keyboard**: `1`–`4` select option, `Enter` next question, `T` toggle theme
- **Dark/Light theme** with preference saved in `localStorage`
- **Simple, robust layout** with CSS custom properties

## Setup

```bash
npm install
npm run build
```

## Run

Open with a local server (required for ES modules):

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

Or run `npx serve .` from the project root and open the URL it prints.

## Edit questions

Edit `src/questions.ts`: add or change items in the `QUESTIONS` array. Each question needs:

- `id` – unique string
- `title` – question title
- `shortExplanation` – used as the correct option and in the result
- `detailedExplanation` – shown after answering
- `illustration` – text or emoji (e.g. 🗼)
- `priority` – number (used for ordering if you want)

Rebuild after changes: `npm run build`.

## Tech

- TypeScript (compiled to `dist/`)
- Vanilla JS, no framework
- Single HTML entry: `index.html`; styles in `styles.css`; logic in `src/app.ts` and `src/questions.ts`
