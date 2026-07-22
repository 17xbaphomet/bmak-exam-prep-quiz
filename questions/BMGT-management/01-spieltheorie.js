window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "bmgt-st-01",
    type: "mcq",
    topic: "spieltheorie",
    examRelevance: 5,
    source: "Übung 1 / Mentorium 1",
    question: "Was ist ein Nash-Gleichgewicht in reinen Strategien?",
    options: [
      "Eine Strategie, die unabhängig vom Verhalten des anderen Spielers immer den höchsten Payoff liefert",
      "Eine Strategiekombination, bei der kein Spieler einen Anreiz hat, einseitig abzuweichen",
      "Das Ergebnis nach iteriertem Eliminieren dominierter Strategien",
      "Die Strategie mit dem höchsten gemeinsamen Payoff"
    ],
    answer: 1,
    explanation: "Nash-Gleichgewicht = gegenseitige beste Antworten. Keiner hat Anreiz, bei gegebener Strategie des anderen abzuweichen."
  },
  {
    id: "bmgt-st-02",
    type: "mcq",
    topic: "spieltheorie",
    examRelevance: 5,
    source: "Übung 1",
    question: "Wann ist eine Strategie strikt dominiert?",
    options: [
      "Wenn sie in mindestens einer Situation besser ist",
      "Wenn es eine andere Strategie gibt, die unabhängig vom Verhalten des Gegners immer einen strikt höheren Payoff liefert",
      "Wenn sie den höchsten Payoff im Nash-Gleichgewicht hat",
      "Wenn sie schwach besser ist als alle anderen"
    ],
    answer: 1,
    explanation: "Strikte Dominanz: es existiert eine alternative Strategie, die in jeder möglichen Kontingenz strikt besser ist."
  },
  {
    id: "bmgt-st-03",
    type: "truefalse",
    topic: "spieltheorie",
    examRelevance: 4,
    source: "Mentorium 1",
    question: "Das iterierte Eliminieren strikt dominierter Strategien (IESDS) führt immer zu einem eindeutigen Nash-Gleichgewicht.",
    answer: false,
    explanation: "IESDS kann Strategien eliminieren, muss aber nicht zu einem eindeutigen Ergebnis führen. Es kann mehrere Nash-Gleichgewichte geben."
  },
  {
    id: "bmgt-st-04",
    type: "mcq",
    topic: "spieltheorie",
    examRelevance: 5,
    source: "Übung 1 / Klausur",
    question: "In einem sequentiellen Spiel mit perfekter Information wird das teilspielperfekte Nash-Gleichgewicht (TSP-NG) bestimmt durch:",
    options: [
      "Simultane beste Antworten",
      "Rückwärtsinduktion",
      "Iteriertes Eliminieren dominierter Strategien",
      "Maximierung des gemeinsamen Payoffs"
    ],
    answer: 1,
    explanation: "Rückwärtsinduktion (Backward Induction) stellt sicher, dass die Strategien in jedem Teilspiel optimal sind."
  },
  {
    id: "bmgt-st-05",
    type: "truefalse",
    topic: "spieltheorie",
    examRelevance: 4,
    source: "Mentorium 1",
    question: "Eine dominante Strategie ist immer auch Teil eines Nash-Gleichgewichts.",
    answer: true,
    explanation: "Wenn ein Spieler eine (strikt) dominante Strategie hat, spielt er sie im Nash-Gleichgewicht. Die beste Antwort des anderen muss darauf abgestimmt sein."
  },
  {
    id: "bmgt-st-06",
    type: "mcq",
    topic: "spieltheorie",
    examRelevance: 5,
    source: "Altklausur",
    question: "Spieler B zieht zuerst und legt sich öffentlich fest. Was ändert sich gegenüber dem simultanen Spiel?",
    options: [
      "Nichts, die Gleichgewichte bleiben identisch",
      "Es kann ein anderes (teilspielperfektes) Gleichgewicht entstehen, weil B die Reaktion von A antizipiert",
      "Nur A hat Vorteile",
      "Es gibt keine Nash-Gleichgewichte mehr"
    ],
    answer: 1,
    explanation: "Im sequentiellen Spiel mit öffentlicher Festlegung kann der First-Mover die zweite Stufe antizipieren und so ein anderes Outcome erreichen."
  },
  {
    id: "bmgt-st-07",
    type: "truefalse",
    topic: "spieltheorie",
    examRelevance: 3,
    source: "Übung 1",
    question: "Bei schwach dominierten Strategien kann das Ergebnis von IESDS von der Reihenfolge der Elimination abhängen.",
    answer: true,
    explanation: "Bei schwachen Dominanzen ist die Reihenfolge relevant; bei strikten Dominanzen nicht."
  },
  {
    id: "bmgt-st-08",
    type: "mcq",
    topic: "spieltheorie",
    examRelevance: 4,
    source: "Vorlesung",
    question: "Was beschreibt eine beste Antwort (Best Response)?",
    options: [
      "Die Strategie, die den eigenen Payoff maximiert, gegeben die Strategie des anderen Spielers",
      "Die Strategie, die den gemeinsamen Payoff maximiert",
      "Jede dominante Strategie",
      "Die Strategie mit dem höchsten Minimal-Payoff (Maximin)"
    ],
    answer: 0,
    explanation: "Beste Antwort = argmax des eigenen Payoffs bei gegebener Strategie des Gegners. Nash = gegenseitige beste Antworten."
  }
]);
