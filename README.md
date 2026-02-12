# Quiz App

A **standalone single-file** HTML quiz application. The main file is `template.html` (structure, styles, questions, and logic). Copy it into the `implemented/` folder and rename or edit for each quiz you build. Open any HTML file in a browser—no server or build step required.

## Features

- **Quiz | Learn tabs**: Quiz flow (dashboard → questions → summary) and a Learn page (reference topics, search, collapse/expand)
- **Question structure**: Title, short explanation, detailed explanation, illustration (code/ASCII), priority
- **Four options** per question (short explanations from different questions; one correct); labels 1–4 for keyboard
- **Full reveal** after answering: correct/wrong badge and full question details; session summary with score %
- **Failed questions** saved in `localStorage` and suggested first on the next run
- **Keyboard**: `1`–`4` select option, `Enter` next/finish, `T` toggle theme
- **Dark/Light theme** with preference saved; round theme toggle (☀ / ☾)
- **Single file**: no external CSS or JS; works from `file://` or any static host

## Run

Open `template.html` or any quiz file in `implemented/` in a browser (double-click or drag into the window). No `npm install` or server needed.

## Structure

- **template.html** — base quiz template; copy into `implemented/` and customize for each quiz.
- **implemented/** — folder for finished quiz files (e.g. `implemented/my-quiz.html`).

## Edit questions

Edit the `QUESTIONS` array inside the `<script>` block in the HTML file. Each question has:

- `id` – unique string
- `title` – question title
- `shortExplanation` – used as the correct option (and in the result) when no `options` are set
- `detailedExplanation` – shown after answering
- `illustration` – text or code snippet (shown after answering)
- `priority` – number
- `options` – *(optional)* array of 4 items `{ text: string, correct: boolean }`. If present, these four options are used for the question (order is shuffled). Use for tricky questions where all four answers should be hand-picked; otherwise wrong options are chosen from other questions’ `shortExplanation`.

Save the file and refresh the browser.

## Publish on GitHub

1. Create a new repository on [GitHub](https://github.com/new) (optional: add a description, leave “Add a README” unchecked if you already have one).
2. If this project is not yet a git repo:  
   `git init && git add . && git commit -m "Initial commit"`
3. If the remote is not set:  
   `git remote add origin https://github.com/YOUR_USERNAME/quiz.git`
4. Push:  
   `git push -u origin main`  
   (Use your GitHub username and a personal access token or SSH when prompted.)
