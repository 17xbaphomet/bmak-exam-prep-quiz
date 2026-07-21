# BMAK Macroeconomics 1 – Exam Prep Quiz

Feature-rich **in-browser learning quiz** for the BMAK Macroeconomics 1 course (Blanchard textbook + Goethe University lectures, homeworks and sample exam).

## Quick Start

1. Open [`bmak-quiz.html`](bmak-quiz.html) directly in any modern browser (Chrome, Firefox, Edge, Safari).
2. Or clone the repo and serve it:
   ```bash
   git clone https://github.com/17xbaphomet/bmak-exam-prep-quiz.git
   cd bmak-exam-prep-quiz
   python -m http.server 8000
   ```
   Then visit http://localhost:8000/bmak-quiz.html

## Features

- **Exam-relevance prioritization** (1–5 slider) – focus on the highest-probability topics first
- Topic filter: Goods market, Money market, IS-LM, Labor (WS-PS), Phillips Curve, Medium-run IS-LM-PC, Growth/Solow, Open economy, National accounts
- Exam Mode vs Learn Mode
- Multiple question types: numerical (with tolerance), multiple-choice, true/false
- Instant feedback with detailed explanations
- Progress tracking via `localStorage`
- Pure client-side, works offline after first load (KaTeX CDN)
- Dark theme optimized for long study sessions

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

## Math skills practiced

- Solving linear goods-market equilibrium (multipliers)
- Comparative statics of IS and LM curves
- WS-PS real-wage equations and natural rate
- Accelerationist Phillips curve algebra
- Basic Solow steady-state relations
- Uncovered interest parity

## License

Educational use for BMAK students. Content based on Blanchard *Macroeconomics* and university materials.
