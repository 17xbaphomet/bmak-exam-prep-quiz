# BMAK Macroeconomics 1 – Exam Prep Quiz

Feature-rich **in-browser learning quiz** for the BMAK Macroeconomics 1 course (Blanchard textbook + Goethe University lectures, homeworks and sample exam).

## Quick Start

### Multi-file version (recommended)

```bash
git clone https://github.com/17xbaphomet/bmak-exam-prep-quiz.git
cd bmak-exam-prep-quiz
python -m http.server 8000
```
Then open http://localhost:8000 (or http://localhost:8000/index.html)

You can also open `index.html` directly in most browsers (some browsers restrict local `file://` loading of external JS/CSS — use the local server if needed).

### Single-file fallback
A self-contained version is still available as `bmak-quiz.html` if you prefer one file.

## Project Structure

```
bmak-exam-prep-quiz/
├── index.html      # Main page structure
├── styles.css      # Dark theme + layout
├── questions.js    # Question bank (easy to expand)
├── quiz.js         # Filtering, scoring, UI logic
├── bmak-quiz.html  # Single-file version (legacy)
└── README.md
```

## Features

- **Exam-relevance prioritization** (1–5 slider) – focus on the highest-probability topics first
- Topic filter: Goods market, Money market, IS-LM, Labor (WS-PS), Phillips Curve, Medium-run IS-LM-PC, Growth/Solow, Open economy, National accounts
- Exam Mode vs Learn Mode
- Multiple question types: numerical (with tolerance), multiple-choice, true/false
- Instant feedback with detailed explanations
- Progress tracking via `localStorage`
- Pure client-side, works offline after first load (KaTeX CDN)
- Dark theme optimized for long study sessions
- Modular design — easy to add new questions in `questions.js`

## Content Coverage (highest exam weight first)

| Topic | Relevance |
|-------|-----------|
| Goods market equilibrium & multipliers | 5 |
| IS-LM model, shifts, fiscal/monetary policy, crowding-out | 5 |
| Labor market (WS-PS), natural unemployment | 5 |
| Phillips curve (adaptive expectations, accelerationist) | 5 |
| Medium-run IS-LM-PC dynamics | 5 |
| Money market & banking | 4 |
| Growth / Solow model | 3 |
| Open economy (UIP) | 3 |
| National accounts (GDP/GNP) | 2 |

Questions are derived from the official lectures, Homework sets 1–6 (with solutions), and the WS2425 sample examination.

## Adding new questions

Edit `questions.js` and append objects to the `QUESTIONS` array. Each question needs:

```js
{
  id: "unique-id",
  type: "numerical" | "mcq" | "truefalse",
  topic: "goods" | "money" | "islm" | "labor" | "pc" | "medium" | "growth" | "open" | "accounts",
  examRelevance: 1-5,
  source: "HW2 / Lecture 05 / Sample",
  question: "...",
  answer: ...,          // number, index, or boolean
  options: [...],       // only for mcq
  tolerance: 0,         // only for numerical
  explanation: "..."
}
```

## Math skills practiced

- Solving linear goods-market equilibrium (multipliers)
- Comparative statics of IS and LM curves
- WS-PS real-wage equations and natural rate
- Accelerationist Phillips curve algebra
- Basic Solow steady-state relations
- Uncovered interest parity

## License

Educational use for BMAK students. Content based on Blanchard *Macroeconomics* and university materials.
