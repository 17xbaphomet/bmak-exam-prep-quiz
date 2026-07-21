let filtered = [], currentIdx = 0, score = 0, answered = 0;
let answeredIds = new Set(JSON.parse(localStorage.getItem("bmak_answered") || "[]"));

const $ = id => document.getElementById(id);

function filterQuestions() {
  const minRel = +$("relevance").value;
  const topic = $("topicFilter").value;
  filtered = QUESTIONS.filter(q => {
    if (q.examRelevance < minRel) return false;
    if (topic !== "all" && q.topic !== topic) return false;
    return true;
  });
  if ($("mode").value === "exam") {
    filtered.sort((a,b) => b.examRelevance - a.examRelevance || (answeredIds.has(a.id)?1:-1));
  } else {
    filtered.sort((a,b) => (answeredIds.has(a.id)?1:-1) || b.examRelevance - a.examRelevance);
  }
  currentIdx = 0;
  updateStats();
}

function updateStats() {
  $("score").textContent = score;
  $("totalAnswered").textContent = answered;
  $("remaining").textContent = Math.max(0, filtered.length - currentIdx);
  $("progress").style.width = (filtered.length ? (currentIdx/filtered.length)*100 : 0) + "%";
}

function showQuestion() {
  if (currentIdx >= filtered.length) {
    $("quizArea").innerHTML = `<h2>Finished!</h2><p>Score: <strong>${score}</strong> / ${answered}</p>
      <button onclick="location.reload()" style="margin-top:1rem">Restart</button>`;
    return;
  }
  const q = filtered[currentIdx];
  $("startScreen").classList.add("hidden");
  $("quizArea").classList.remove("hidden");
  $("nextBtn").classList.add("hidden");
  $("feedback").classList.remove("show");
  $("feedback").className = "feedback";

  $("tags").innerHTML = `
    <span class="tag high">Relevance ${q.examRelevance}/5</span>
    <span class="tag">${q.topic}</span>
    <span class="tag">${q.source||""}</span>`;

  $("qText").textContent = q.question;

  $("optionsArea").classList.add("hidden");
  $("numericalArea").classList.add("hidden");
  $("tfArea").classList.add("hidden");
  $("optionsArea").innerHTML = "";

  if (q.type === "mcq") {
    $("optionsArea").classList.remove("hidden");
    q.options.forEach((opt,i) => {
      const div = document.createElement("div");
      div.className = "option";
      div.textContent = opt;
      div.onclick = () => answerMCQ(i,q);
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
    `<div class="explanation">${explanation}</div>`;
  $("nextBtn").classList.remove("hidden");
}

function answerMCQ(idx, q) {
  [...$("optionsArea").children].forEach((el,i) => {
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
  const correct = Math.abs(val - q.answer) <= (q.tolerance||0);
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
    if ((el.dataset.val==="true") === q.answer) el.classList.add("correct");
    if ((el.dataset.val==="true") === val && !correct) el.classList.add("wrong");
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
$("startBtn").onclick = () => { filterQuestions(); showQuestion(); };
$("nextBtn").onclick = () => { currentIdx++; showQuestion(); };

filterQuestions();
