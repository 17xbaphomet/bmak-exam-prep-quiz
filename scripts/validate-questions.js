#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'questions');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort();

if (files.length === 0) {
  console.error('No question modules found in questions/');
  process.exit(1);
}

global.window = { QUESTIONS: [] };

for (const f of files) {
  const full = path.join(dir, f);
  console.log('Loading', path.relative(process.cwd(), full));
  require(full);
}

const qs = global.window.QUESTIONS || [];
console.log(`\nTotal questions loaded: ${qs.length}`);

if (qs.length === 0) {
  console.error('No questions were loaded!');
  process.exit(1);
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
console.log('\nValidation successful.');
