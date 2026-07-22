# Exam Prep Quiz (multi-subject)

Feature-rich **in-browser learning quiz** for university exam preparation across multiple subjects.  
Zero runtime dependencies (except KaTeX CDN). Designed for **modular scalability**: new subjects are pure data modules under `questions/` — no changes to core HTML, loader, or quiz engine required.

**Live demo:** https://17xbaphomet.github.io/bmak-exam-prep-quiz/

## Architecture & Design Decisions

- **Convention-over-configuration modularization**: Subject folders + numbered question files + auto-generated `manifest.js`. Adding a subject = filesystem change only.
- **Clear separation**:
  - **Data layer**: `questions/<SUBJECT-id>/*.js` – pure appends to `window.QUESTIONS`. Independent, side-effect free beyond the bank.
  - **Discovery / Loader**: `manifest.js` (generated) + `loader.js` – `listSubjects()` / `loadSubject(id)`. Isolates content loading.
  - **UI / State**: `index.html` + `quiz.js` – filtering, scoring, modes, localStorage progress, KaTeX + glossary enrichment. Simple global state (suitable for this scale; no formal MVI/MVVM or DI container needed).
  - **Cross-cutting**: `glossary.js` (multi-subject terms), `styles.css`, `scripts/` (tooling).
- **Scalability**: New modules never touch core. CI validates schema/IDs/uniqueness on every change. Static site → trivial GitHub Pages hosting.
- **Quality**: Naming conventions enforced by scanner + validator. Unique IDs across all subjects. Schema checks for required fields and question types.

## Current subjects

| ID | Label | Files | Focus areas |
|----|-------|-------|-------------|
| `BMAK-macro` | BMAK · macro | 11 | Goods, money, IS-LM, labor, Phillips curve, medium run, growth, open economy, accounts |
| `BMGT-management` | BMGT · management | 6 | Spieltheorie, Oligopol, Kartelle, Entscheidungsrechte, Teams, Principal-Agent |
| `BOEE-Econometrics` | BOEE · Econometrics | 8 | CEF, OLS, nonlinearities, hypothesis testing, multivariate, R, IV/endogeneity, time series |
| `BWIN-wirtschaftsinformatik` | BWIN · wirtschaftsinformatik | 6 | Grundlagen, EPK, ERM, SQL, Python, Struktogramme |
| `PM-predictive` | PM · predictive | 6 | Basics, selection/shrinkage, trees/ensembles, evaluation, binary, quantiles/density |

> After adding or changing folders always run `npm run manifest` and **commit the updated `questions/manifest.js`** so the subject selector includes them.

## Quick start

```bash
git clone https://github.com/17xbaphomet/bmak-exam-prep-quiz.git
cd bmak-exam-prep-quiz
npm run serve          # or: python -m http.server 8000
```

Open http://localhost:3000 (or :8000). Use the **Subject** selector.

## Project structure

```
bmak-exam-prep-quiz/
├── index.html                 # UI shell + controls
├── styles.css
├── quiz.js                    # State, filtering, scoring, modes, KaTeX/glossary
├── glossary.js                # Multi-subject term definitions
├── loader.js                  # Dynamic subject loading from manifest
├── questions/
│   ├── manifest.js            # Auto-generated – do not edit by hand
│   ├── BMAK-macro/
│   ├── BMGT-management/
│   ├── BOEE-Econometrics/
│   ├── BWIN-wirtschaftsinformatik/
│   └── PM-predictive/
├── scripts/
│   ├── generate-manifest.js   # Scans → manifest.js
│   └── validate-questions.js  # Schema + unique IDs
├── package.json
└── .github/workflows/         # validate on questions/** + Pages deploy
```

### Naming conventions (enforced by the scanner)

| Kind | Pattern | Example |
|------|---------|---------|
| **Subject folder** | `^[A-Z]{2,4}-[a-zA-Z_]+$` | `BMAK-macro`, `BOEE-Econometrics` |
| **Question file** | `^[0-9]+[a-zA-Z-]*\.js$` | `01-goods.js`, `08-time-series.js` |

Subject `id` becomes the selector value; the label is derived by replacing the hyphen with a middle-dot (` · `).

---

## Adding a new subject / module

You only add files under `questions/`. No changes to `index.html`, `loader.js`, or `quiz.js` are required.

### 1. Create the subject folder

```bash
mkdir -p questions/MIKRO-costs
```

Folder name **must** match `XX-name` (2–4 uppercase letters, hyphen, then letters/underscores).

### 2. Add question files

Each file is a plain script that **appends** to the global bank:

```js
// questions/MIKRO-costs/01-basics.js
window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "mikro-c-01",                 // unique across the whole quiz
    type: "mcq",                      // numerical | mcq | truefalse
    topic: "costs",                   // used by topic filters
    examRelevance: 5,                 // 1–5 (slider priority)
    source: "Lecture 01",
    question: "What is Selbstkosten?",
    options: ["…", "…", "…", "…"],
    answer: 0,                        // index for mcq; number; or boolean
    tolerance: 0,                     // numerical only (optional)
    explanation: "…"
  }
  // …more questions
]);
```

Number files so order is stable (`01-…`, `02-…`, …). Any extra files that match the pattern are picked up automatically.

### 3. Regenerate the manifest & validate

```bash
npm run manifest   # rewrites questions/manifest.js from the directory scan
npm run validate   # manifest + unique IDs + required fields + type checks
```

### 4. Commit both content and manifest

```bash
git add questions/MIKRO-costs questions/manifest.js
git commit -m "Add MIKRO-costs subject module"
git push
```

After deploy (GitHub Pages) or a local refresh, the new subject appears in the selector.

### Minimal checklist for a new subject

- [ ] Folder name matches `^[A-Z]{2,4}-[a-zA-Z_]+$`
- [ ] Files match `^[0-9]+[a-zA-Z-]*\.js$`
- [ ] Every question uses `window.QUESTIONS = (window.QUESTIONS || []).concat([…])`
- [ ] Every `id` is unique **across all subjects**
- [ ] `npm run validate` passes
- [ ] `questions/manifest.js` is committed after `npm run manifest`

---

## Adding questions to an existing subject

1. Create e.g. `questions/BMAK-macro/12-new-topic.js` with the same `concat` pattern.
2. Run `npm run manifest && npm run validate`.
3. Commit the new file **and** the updated `manifest.js`.

No HTML / loader edits needed.

---

## Features

- Multi-subject selector driven by auto-generated `manifest.js`
- Exam-relevance prioritization (1–5 slider) + Exam / Learn modes
- Topic filters
- Question types: numerical (with tolerance), MCQ, true/false
- Instant feedback + explanations
- Clickable short-handles / Greek letters (glossary bubbles)
- KaTeX math rendering (CDN v0.16.11)
- Progress via `localStorage`
- Zero core-code changes when adding modules

## BMAK · macro coverage (example – highest weight first)

| Topic | Relevance |
|-------|-----------|
| Goods market & multipliers | 5 |
| IS-LM, policy, crowding-out | 5 |
| Labor (WS-PS), natural unemployment | 5 |
| Phillips curve (adaptive / accelerationist) | 5 |
| Medium-run IS-LM-PC | 5 |
| Money market & banking | 4 |
| Growth / Solow | 3 |
| Open economy (Mundell-Fleming, UIP) | 3–5 |
| National accounts | 2 |

Other subjects cover management (game theory, oligopoly, principal-agent), econometrics (OLS, IV, time-series, R), Wirtschaftsinformatik (EPK, ERM, SQL, Python), and predictive modeling (shrinkage, trees, evaluation, quantiles).

## npm scripts

| Script | Purpose |
|--------|---------|
| `npm run manifest` | Scan `questions/*/` → write `questions/manifest.js` |
| `npm run validate` | Manifest + integrity (unique ids, required fields, types) |
| `npm run count` | Question count only |
| `npm run serve` | Local static server on port 3000 |

## CI

- **validate-questions.yml**: on changes to `questions/**` / scripts / core → regenerate manifest, syntax-check every module, then integrity checks.
- **deploy-pages.yml**: on push to `main` → deploy static root to GitHub Pages.

## License

MIT. Educational use. Content based on university materials and standard textbooks (e.g. Blanchard *Macroeconomics* for BMAK).

---
*Note: Root files `bmak-quiz.html`, `questions.js`, and `tmp-lock-test.txt` appear to be legacy leftovers and can safely be removed in a future cleanup.*
