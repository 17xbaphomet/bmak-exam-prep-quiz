#!/usr/bin/env node
/**
 * Load all question modules from subject subfolders and run integrity checks.
 *
 * Subject dirs:  /^[A-Z]{2,4}-[a-zA-Z_]+$/
 * Question files: /^[0-9]+[a-zA-Z-]*\.js$/
 *
 * Usage: node scripts/validate-questions.js [--count-only]
 */
const fs = require('fs');
const path = require('path');

const QDIR = path.join(__dirname, '..', 'questions');
const SUBJECT_RE = /^[A-Z]{2,4}-[a-zA-Z_]+$/;
const FILE_RE = /^[0-9]+[a-zA-Z-]*\.js$/;
const countOnly = process.argv.includes('--count-only');

function collectModules() {
  if (!fs.existsSync(QDIR)) {
    console.error('questions/ directory not found');
    process.exit(1);
  }

  const modules = [];
  const entries = fs.readdirSync(QDIR, { withFileTypes: true });

  for (const ent of entries) {
    if (!ent.isDirectory()) continue;
    if (!SUBJECT_RE.test(ent.name)) {
      console.warn(`Skipping non-subject dir: ${ent.name}`);
      continue;
    }
    const subdir = path.join(QDIR, ent.name);
    const files = fs.readdirSync(subdir)
      .filter(f => FILE_RE.test(f))
      .sort((a, b) => {
        const na = parseInt(a, 10) || 0;
        const nb = parseInt(b, 10) || 0;
        return na - nb || a.localeCompare(b);
      });
    for (const f of files) {
      modules.push(path.join(subdir, f));
    }
  }

  return modules;
}

const modules = collectModules();

if (modules.length === 0) {
  console.error('No question modules found in questions/<SUBJECT>/');
  process.exit(1);
}

global.window = { QUESTIONS: [] };

for (const full of modules) {
  console.log('Loading', path.relative(process.cwd(), full));
  require(full);
}

const qs = global.window.QUESTIONS || [];
console.log(`\nTotal questions loaded: ${qs.length}`);

if (qs.length === 0) {
  console.error('No questions were loaded!');
  process.exit(1);
}

if (countOnly) {
  console.log('Count-only mode – skipping integrity checks.');
  process.exit(0);
}

const ids = new Set();
const required = ['id', 'type', 'topic', 'examRelevance', 'question', 'answer', 'explanation'];
let errors = 0;

for (const q of qs) {
  for (const field of required) {
    if (q[field] === undefined || q[field] === null || q[field] === '') {
      console.error(`Missing field "${field}" in question:`, q.id || '(no id)');
      errors++;
    }
  }
  if (q.id) {
    if (ids.has(q.id)) {
      console.error(`Duplicate id: ${q.id}`);
      errors++;
    }
    ids.add(q.id);
  }
  if (!['numerical', 'mcq', 'truefalse'].includes(q.type)) {
    console.error(`Invalid type "${q.type}" in ${q.id}`);
    errors++;
  }
  if (q.type === 'mcq' && (!Array.isArray(q.options) || q.options.length < 2)) {
    console.error(`MCQ ${q.id} missing valid options array`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`\n${errors} integrity error(s) found.`);
  process.exit(1);
}

console.log('Integrity checks passed.');
console.log(`Unique IDs: ${ids.size}`);
console.log(`Modules loaded: ${modules.length}`);
console.log('\nValidation successful.');
