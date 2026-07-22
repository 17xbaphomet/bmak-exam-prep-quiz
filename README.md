# BMAK Exam Prep Quiz (multi-subject)

Feature-rich **in-browser learning quiz** for university courses.  
Currently ships **BMAK · macro** (Blanchard + Goethe lectures / homeworks / sample exam).  
The layout is designed so you can add further subjects **without changing `index.html` or loader code**.

## Quick start

```bash
git clone https://github.com/17xbaphomet/bmak-exam-prep-quiz.git
cd bmak-exam-prep-quiz
npm run serve          # or: python -m http.server 8000
```

Open http://localhost:3000 (or :8000). Use the **subject selector** if more than one module is present.

## Project structure

```
bmak-exam-prep-quiz/
├── index.html                 # Shell + subject selector
├── styles.css
├── quiz.js                    # Filtering, scoring, glossary, KaTeX
├── glossary.js
├── loader.js                  # Loads subject files from the manifest
├── questions/
│   ├── manifest.js            # Auto-generated – do not edit by hand
│   ├── BMAK-macro/            # One folder per subject
│   │   ├── 01-goods.js
│   │   ├── 02-money.js
│   │   ├── …
│   │   └── 11-final-polish.js
│   └── (optional flat fallbacks during migration)
├── scripts/
│   ├── generate-manifest.js   # Scans questions/ → manifest.js
│   └── validate-questions.js  # ID uniqueness, schema checks
├── package.json
└── .github/workflows/         # CI validate + Pages deploy
```

### Naming conventions (enforced by the scanner)

| Kind | Pattern | Example |
|------|---------|---------|
| **Subject folder** | `^[A-Z]{2,4}-[a-zA-Z_]+$` | `BMAK-macro`, `MIKRO-costs`, `STAT-intro` |
| **Question file** | `^[0-9]+[a-zA-Z-]*\.js$` | `01-goods.js`, `08-open-mf.js`, `12-extra.js` |

Subject id becomes the selector value; the label is derived as `BMAK · macro` (hyphen → middle-dot).

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
    id: "mc01",                    // unique across the whole quiz
    type: "mcq",                   // numerical | mcq | truefalse
    topic: "costs",                // used by topic filters
    examRelevance: 5,              // 1–5 (slider priority)
    source: "Lecture 01",
    question: "What is Selbstkosten?",
    options: ["…", "…", "…", "…"],
    answer: 0,                     // index for mcq; number; or boolean
    tolerance: 0,                  // numerical only
    explanation: "…"
  }
  // …more questions
]);
```

Number files so order is stable (`01-…`, `02-…`, …). Any extra files that match the pattern are picked up automatically.

### 3. Regenerate the manifest

```bash
npm run manifest
# → rewrites questions/manifest.js from the directory scan
```

Or the full check:

```bash
npm run validate   # manifest + unique IDs + schema
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
- [ ] Every question uses `window.QUESTIONS = (window.QUESTIONS \|\| []).concat([…])`
- [ ] Every `id` is unique **across all subjects**
- [ ] `npm run validate` passes
- [ ] `questions/manifest.js` committed after `npm run manifest`

---

## Adding questions to an existing subject

1. Create e.g. `questions/BMAK-macro/12-new-topic.js` with the same `concat` pattern.
2. Run `npm run manifest && npm run validate`.
3. Commit the new file **and** the updated `manifest.js`.

No HTML/JS loader edits needed.

---

## Features

- **Exam-relevance prioritization** (1–5 slider)
- Topic filters, Exam / Learn modes
- Numerical (tolerance), MCQ, true/false
- Instant feedback + explanations
- Clickable short-handles / Greek letters (glossary bubbles)
- KaTeX math rendering
- Progress via `localStorage`
- Multi-subject selector driven by `manifest.js`

## BMAK · macro coverage (highest weight first)

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

## npm scripts

| Script | Purpose |
|--------|---------|
| `npm run manifest` | Scan `questions/*/` → write `questions/manifest.js` |
| `npm run validate` | Manifest + question integrity (unique ids, required fields) |
| `npm run count` | Count questions only |
| `npm run serve` | Local static server on port 3000 |

## License

Educational use. BMAK content based on Blanchard *Macroeconomics* and university materials.
