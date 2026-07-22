window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "bwin-erm-01",
    type: "mcq",
    topic: "erm",
    examRelevance: 5,
    source: "Kapitel 4 / Übung 3",
    question: "Welches Symbol wird im ERM für einen Entity-Typ verwendet?",
    options: ["Raute", "Oval", "Rechteck", "Kreis"],
    answer: 2,
    explanation: "Entity-Typen werden als Rechtecke dargestellt."
  },
  {
    id: "bwin-erm-02",
    type: "mcq",
    topic: "erm",
    examRelevance: 5,
    source: "Kapitel 4 / Übung 3",
    question: "Welches Symbol wird im ERM für einen Relationship-Typ verwendet?",
    options: ["Rechteck", "Raute", "Oval", "Sechseck"],
    answer: 1,
    explanation: "Relationships (Beziehungen) werden als Rauten dargestellt."
  },
  {
    id: "bwin-erm-03",
    type: "mcq",
    topic: "erm",
    examRelevance: 5,
    source: "Kapitel 4",
    question: "Attribute werden im ERM dargestellt als:",
    options: ["Rechtecke", "Rauten", "Ovale", "Linien"],
    answer: 2,
    explanation: "Attribute sind Ovale. Schlüsselattribute werden unterstrichen."
  },
  {
    id: "bwin-erm-04",
    type: "truefalse",
    topic: "erm",
    examRelevance: 5,
    source: "Kapitel 4",
    question: "Die Min-Max-Notation gibt an, wie oft eine Entität mindestens und höchstens an einer Beziehung teilnehmen muss/kann.",
    answer: true,
    explanation: "Genau das ist die Definition der Min-Max-Kardinalität."
  },
  {
    id: "bwin-erm-05",
    type: "mcq",
    topic: "erm",
    examRelevance: 5,
    source: "Kapitel 4",
    question: "Was bedeutet die Kardinalität (1,1) an einem Entity-Typ?",
    options: [
      "0 bis beliebig viele",
      "Genau einmal",
      "Höchstens einmal",
      "Mindestens einmal, beliebig viele"
    ],
    answer: 1,
    explanation: "(1,1) = muss genau einmal teilnehmen."
  },
  {
    id: "bwin-erm-06",
    type: "mcq",
    topic: "erm",
    examRelevance: 5,
    source: "Kapitel 4",
    question: "Was bedeutet die Kardinalität (0,n)?",
    options: [
      "Genau einmal",
      "Höchstens einmal",
      "0 bis beliebig viele",
      "Mindestens einmal"
    ],
    answer: 2,
    explanation: "min=0 (optional), max=n (beliebig viele)."
  },
  {
    id: "bwin-erm-07",
    type: "truefalse",
    topic: "erm",
    examRelevance: 5,
    source: "Übung 3",
    question: "Wenn im Aufgabentext nichts anderes steht, gilt standardmäßig die Kardinalität (0,n).",
    answer: true,
    explanation: "Das ist die explizite Vorgabe in den Übungsblättern."
  },
  {
    id: "bwin-erm-08",
    type: "mcq",
    topic: "erm",
    examRelevance: 5,
    source: "Übung 3 – Warengruppen",
    question: "Jeder Artikel ist immer genau einer Warengruppe zugeordnet. Welche Kardinalität hat der Artikel?",
    options: ["(0,n)", "(1,1)", "(0,1)", "(1,n)"],
    answer: 1,
    explanation: "„immer genau einer“ → (1,1)."
  },
  {
    id: "bwin-erm-09",
    type: "mcq",
    topic: "erm",
    examRelevance: 5,
    source: "Übung 3 – Zoo",
    question: "Jedes Tier wird von genau einem Wärter betreut. Es gibt aber Wärter, die keine Tiere betreuen. Welche Kardinalität hat der Wärter?",
    options: ["(1,1)", "(0,1)", "(0,n)", "(1,n)"],
    answer: 2,
    explanation: "Wärter kann 0 bis n Tiere betreuen → (0,n)."
  },
  {
    id: "bwin-erm-10",
    type: "truefalse",
    topic: "erm",
    examRelevance: 5,
    source: "Kapitel 4",
    question: "Die Kardinalitätsangabe steht neben dem Entity-Typ, den sie beschreibt (Leserichtung vom Entity zur Beziehung).",
    answer: true,
    explanation: "Das ist die Scheer-Variante, die im Kurs verwendet wird."
  },
  {
    id: "bwin-erm-11",
    type: "mcq",
    topic: "erm",
    examRelevance: 4,
    source: "Kapitel 4",
    question: "Eine rekursive Beziehung (z. B. Warengruppen-Hierarchie) wird modelliert durch:",
    options: [
      "Zwei getrennte Entity-Typen",
      "Eine Beziehung, die denselben Entity-Typ mit sich selbst verbindet",
      "Nur Attribute",
      "Einen speziellen Hierarchie-Konnektor"
    ],
    answer: 1,
    explanation: "Rekursive Relationship: derselbe Entity-Typ steht auf beiden Seiten der Beziehung."
  },
  {
    id: "bwin-erm-12",
    type: "truefalse",
    topic: "erm",
    examRelevance: 4,
    source: "Kapitel 4",
    question: "Schlüsselattribute werden im ERM unterstrichen dargestellt.",
    answer: true,
    explanation: "Standardnotation."
  },
  {
    id: "bwin-erm-13",
    type: "mcq",
    topic: "erm",
    examRelevance: 4,
    source: "Kapitel 4",
    question: "Wer hat das Entity-Relationship-Modell 1976 entwickelt?",
    options: ["August-Wilhelm Scheer", "Peter Chen", "Edgar Codd", "Bill Gates"],
    answer: 1,
    explanation: "Peter Pin-Shan Chen (MIT)."
  },
  {
    id: "bwin-erm-14",
    type: "truefalse",
    topic: "erm",
    examRelevance: 4,
    source: "Kapitel 4",
    question: "Im Kurs wird die Min-Max-Notation nach Scheer verwendet.",
    answer: true,
    explanation: "Die Vorlesung orientiert sich explizit an der Scheer-Variante."
  },
  {
    id: "bwin-erm-15",
    type: "mcq",
    topic: "erm",
    examRelevance: 4,
    source: "Kapitel 4",
    question: "Bei einer klassischen 1:n-Beziehung ((1,1) : (0,n)) wird der Relationship-Typ bei der Überführung ins relationale Modell typischerweise …",
    options: [
      "als eigene Tabelle angelegt",
      "nicht als eigene Tabelle angelegt; der Fremdschlüssel wandert zur n-Seite",
      "ignoriert",
      "als View umgesetzt"
    ],
    answer: 1,
    explanation: "Bei 1:n wird der Schlüssel der 1-Seite als Fremdschlüssel zur n-Seite genommen."
  },
  {
    id: "bwin-erm-16",
    type: "mcq",
    topic: "erm",
    examRelevance: 4,
    source: "Übung 3",
    question: "Einer Warengruppe können beliebig viele Artikel zugeordnet werden (auch null). Welche Kardinalität hat die Warengruppe-Seite?",
    options: ["(1,1)", "(0,1)", "(0,m)", "(1,m)"],
    answer: 2,
    explanation: "„beliebig viele“ inkl. null → (0,m)."
  }
]);
