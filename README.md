# Quiz App

A **standalone single-file** HTML quiz application. The main file is `template.html` (structure, styles, questions, and logic). Copy it into the `implemented/` folder and rename or edit for each quiz you build. Open any HTML file in a browser—no server or build step required.

## Features

- **Question structure**: Title, short explanation, detailed explanation, illustration, priority
- **Four options** per question (short explanations from different questions; one correct)
- **Full reveal** after answering: correct/wrong badge and full question details
- **Keyboard**: `1`–`4` select option, `Enter` next question, `T` toggle theme
- **Dark/Light theme** with preference saved in `localStorage`
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
- `shortExplanation` – used as the correct option and in the result
- `detailedExplanation` – shown after answering
- `illustration` – text or emoji (e.g. 🗼)
- `priority` – number

Save the file and refresh the browser.
