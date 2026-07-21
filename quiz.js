/* BMAK Exam Prep Quiz – modular questions + clickable glossary terms */
let filtered = [], currentIdx = 0, score = 0, answered = 0;
let answeredIds = new Set(JSON.parse(localStorage.getItem("bmak_answered") || "[]"));
let activeBubble = null;

const $ = id => document.getElementById(id);

function getQuestions() {
  return window.QUESTIONS || [];
}

/* ---- Glossary term linking ---- */
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function linkTerms(text) {
  const glossary = window.GLOSSARY || {};
  // Longest keys first so "IS-LM-PC" matches before "IS"
  const keys = Object.keys(glossary).sort((a, b) => b.length - a.length);
  if (!keys.length) return text;

  // Short uppercase acronyms (IS, LM, PC, NX, UIP, MPC…) must match exact case
  // to avoid false positives on English words like "is", "in", "or".
  const shortAcronyms = keys.filter(k => k.length <= 4 && k === k.toUpperCase() && /^[A-Z][A-Z0-9\-]*$/.test(k));
  const longKeys = keys.filter(k => !shortAcronyms.includes(k));

  let result = text;

  // 1) Short acronyms – case-SENSITIVE whole-word match
  if (shortAcronyms.length) {
    const patShort = new RegExp(
      "\\b(" + shortAcronyms.map(escapeRegExp).join("|") + ")\\b",
      "g"  // no "i" flag
    );
    result = result.replace(patShort, (match) => {
      return `<span class="term" data-term="${match}">${match}</span>`;
    });
  }

  // 2) Longer / mixed-case terms – case-insensitive
  if (longKeys.length) {
    const patLong = new RegExp(
      "\\b(" + longKeys.map(escapeRegExp).join("|") + ")\\b",
      "gi"
    );
    result = result.replace(patLong, (match) => {
      // Skip if already inside a term span
      // (simple guard: if we just wrapped short acronyms, avoid double-wrap)
      const key = longKeys.find(k => k.toLowerCase() === match.toLowerCase()) || match;
      return `<span class="term" data-term="${key}">${match}</span>`;
    });
  }

  return result;
}

function hideBubble() {
  if (activeBubble) {
    activeBubble.remove();
    activeBubble = null;
  }
}

function showBubble(termEl) {
  hideBubble();
  const key = termEl.dataset.term;
  const glossary = window.GLOSSARY || {};
  const def = glossary[key] || glossary[Object.keys(glossary).find(k => k.toLowerCase() === key.toLowerCase())];
  if (!def) return;

  const bubble = document.createElement("div");
  bubble.className = "term-bubble";
  bubble.innerHTML = `<div class="bubble-title">${key}</div>${def}`;
  document.body.appendChild(bubble);
  activeBubble = bubble;

  const rect = termEl.getBoundingClientRect();
  const bubbleRect = bubble.getBoundingClientRect();
  let top = window.scrollY + rect.top - bubbleRect.height - 12;
  let left = window.scrollX + rect.left;

  if (top < window.scrollY + 8) {
    top = window.scrollY + rect.bottom + 12;
  }
  if (left + bubbleRect.width > window.scrollX + window.innerWidth - 8) {
    left = window.scrollX + window.innerWidth - bubbleRect.width - 8;
  }
  if (left < 8) left = 8;

  bubble.style.top = top + "px";
  bubble.style.left = left + "px";
}

document.addEventListener("click", (e) => {
  const term = e.target.closest(".term");
  if (term) {
    e.stopPropagation();
    if (activeBubble && activeBubble.dataset.for === term.dataset.term) {
      hideBubble();
    } else {
      showBubble(term);
      if (activeBubble) activeBubble.dataset.for = term.dataset.term;
    }
  } else {
    hideBubble();
  }
});

/* ---- Core quiz logic ---- */
function filterQuestions() {
  const bank = getQuestions();
  const minRel = +$("relevance").value;
  const topic = $("topicFilter").value;
  filtered = bank.filter(q => {
    if (q.examRelevance < minRel) return false;
    if (topic !== "all" && q.topic !== topic) return false;
    return true;
  });
  if ($("mode").value === "exam") {
    filtered.sort((a, b) => b.examRelevance - a.examRelevance || (answeredIds.has(a.id) ? 1 : -1));
  } else {
    filtered.sort((a, b) => (answeredIds.has(a.id) ? 1 : -1) || b.examRelevance - a.examRelevance);
  }
  currentIdx = 0;
  updateStats();
}

function updateStats() {
  $("score").textContent = score;
  $("totalAnswered").textContent = answered;
  $("remaining").textContent = Math.max(0, filtered.length - currentIdx);
  $("progress").style.width = (filtered.length ? (currentIdx / filtered.length) * 100 : 0) + "%";
}

function showQuestion() {
  hideBubble();
  if (currentIdx >= filtered.length) {
    $("quizArea").innerHTML = `<h2>Finished!</h2><p>Score: <strong>${score}</strong> / ${answered}</p>
      <p class="muted">Bank size: ${getQuestions().length} questions</p>
      <button onclick="location.reload()" style="margin-top:1rem">Restart</button>`;
    $("nextBtn").classList.add("hidden");
    return;
  }

  if (!$("qText")) {
    $("quizArea").innerHTML = `
      <div id="tags"></div>
      <div class="question-text" id="qText"></div>
      <div id="optionsArea" class="options"></div>
      <div id="numericalArea" class="hidden">
        <input type="number" id="numInput" placeholder="Enter number…" step="any">
        <button id="submitNum">Submit</button>
      </div>
      <div id="tfArea" class="options hidden">
        <div class="option" data-val="true">True</div>
        <div class="option" data-val="false">False</div>
      </div>
      <div id="feedback" class="feedback"></div>`;
  }

  const q = filtered[currentIdx];
  $("startScreen").classList.add("hidden");
  $("quizArea").classList.remove("hidden");
  $("nextBtn").classList.add("hidden");

  const fb = $("feedback");
  if (fb) {
    fb.classList.remove("show");
    fb.className = "feedback";
    fb.innerHTML = "";
  }

  $("tags").innerHTML = `
    <span class="tag high">Relevance ${q.examRelevance}/5</span>
    <span class="tag">${q.topic}</span>
    <span class="tag">${q.source || ""}</span>`;

  $("qText").innerHTML = linkTerms(q.question);

  $("optionsArea").classList.add("hidden");
  $("numericalArea").classList.add("hidden");
  $("tfArea").classList.add("hidden");
  $("optionsArea").innerHTML = "";

  if (q.type === "mcq") {
    $("optionsArea").classList.remove("hidden");
    q.options.forEach((opt, i) => {
      const div = document.createElement("div");
      div.className = "option";
      div.innerHTML = linkTerms(opt);
      div.onclick = (e) => {
        if (e.target.closest(".term")) return;
        answerMCQ(i, q);
      };
      $("optionsArea").appendChild(div);
    });
  } else if (q.type === "numerical") {
    $("numericalArea").classList.remove("hidden");
    $("numInput").value = "";
    $("numInput").focus();
    $("submitNum").onclick = () => answerNumerical(q);
  } else if (q.type === "truefalse") {
    $("tfArea").classList.remove("hidden");
    [...$("tfArea").children].forEach(el => {
      el.className = "option";
      el.onclick = () => answerTF(el.dataset.val === "true", q);
    });
  }
  updateStats();
}

function showFeedback(correct, explanation) {
  const fb = $("feedback");
  fb.classList.add("show", correct ? "correct" : "wrong");
  fb.innerHTML = (correct ? "✓ Correct" : "✗ Incorrect") +
    `<div class="explanation">${linkTerms(explanation)}</div>`;
  $("nextBtn").classList.remove("hidden");
}

function answerMCQ(idx, q) {
  [...$("optionsArea").children].forEach((el, i) => {
    el.onclick = null;
    if (i === q.answer) el.classList.add("correct");
    if (i === idx && i !== q.answer) el.classList.add("wrong");
  });
  const correct = idx === q.answer;
  if (correct) score++;
  answered++;
  answeredIds.add(q.id);
  localStorage.setItem("bmak_answered", JSON.stringify([...answeredIds]));
  showFeedback(correct, q.explanation);
  updateStats();
}

function answerNumerical(q) {
  const val = parseFloat($("numInput").value);
  const correct = !isNaN(val) && Math.abs(val - q.answer) <= (q.tolerance || 0);
  if (correct) score++;
  answered++;
  answeredIds.add(q.id);
  localStorage.setItem("bmak_answered", JSON.stringify([...answeredIds]));
  showFeedback(correct, q.explanation + ` (Correct: ${q.answer})`);
  updateStats();
}

function answerTF(val, q) {
  const correct = val === q.answer;
  [...$("tfArea").children].forEach(el => {
    el.onclick = null;
    if ((el.dataset.val === "true") === q.answer) el.classList.add("correct");
    if ((el.dataset.val === "true") === val && !correct) el.classList.add("wrong");
  });
  if (correct) score++;
  answered++;
  answeredIds.add(q.id);
  localStorage.setItem("bmak_answered", JSON.stringify([...answeredIds]));
  showFeedback(correct, q.explanation);
  updateStats();
}

$("relevance").oninput = () => {
  $("relValue").textContent = $("relevance").value + "+";
  filterQuestions();
};
$("topicFilter").onchange = filterQuestions;
$("mode").onchange = filterQuestions;
$("startBtn").onclick = () => {
  score = 0;
  answered = 0;
  filterQuestions();
  showQuestion();
};
$("nextBtn").onclick = () => {
  currentIdx++;
  showQuestion();
};

filterQuestions();
console.log("BMAK quiz ready –", getQuestions().length, "questions loaded;", Object.keys(window.GLOSSARY || {}).length, "glossary terms");
