window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "bwin-epk-01",
    type: "truefalse",
    topic: "epk",
    examRelevance: 5,
    source: "Übung 2 / Vorlesung",
    question: "In einer EPK müssen sich Ereignisse und Funktionen streng abwechseln.",
    answer: true,
    explanation: "Grundregel: Ereignis → Funktion → Ereignis → Funktion. Zwei gleiche Elemente hintereinander sind verboten."
  },
  {
    id: "bwin-epk-02",
    type: "truefalse",
    topic: "epk",
    examRelevance: 5,
    source: "Übung 2 / Vorlesung",
    question: "Nach einem Ereignis darf ein XOR- oder OR-Split folgen.",
    answer: false,
    explanation: "Ereignisse sind passiv und haben keine Entscheidungskompetenz. XOR/OR-Splits dürfen nur nach einer Funktion stehen."
  },
  {
    id: "bwin-epk-03",
    type: "mcq",
    topic: "epk",
    examRelevance: 5,
    source: "Übung 2",
    question: "Welcher Konnektor bedeutet „genau einer der Wege wird genommen“?",
    options: ["AND", "OR", "XOR", "NOR"],
    answer: 2,
    explanation: "XOR = exklusives Oder = genau einer der ausgehenden Pfade."
  },
  {
    id: "bwin-epk-04",
    type: "mcq",
    topic: "epk",
    examRelevance: 5,
    source: "Übung 2",
    question: "Welcher Konnektor bedeutet „mindestens einer der Wege wird genommen“?",
    options: ["AND", "OR", "XOR", "NAND"],
    answer: 1,
    explanation: "OR = inklusives Oder = einer oder mehrere Pfade können aktiviert werden."
  },
  {
    id: "bwin-epk-05",
    type: "mcq",
    topic: "epk",
    examRelevance: 5,
    source: "Übung 2",
    question: "Welcher Konnektor wird für parallele Ausführung (alle Pfade) verwendet?",
    options: ["XOR", "OR", "AND", "Keiner"],
    answer: 2,
    explanation: "AND steht für parallele Ausführung bzw. dass alle Zweige eintreten müssen."
  },
  {
    id: "bwin-epk-06",
    type: "truefalse",
    topic: "epk",
    examRelevance: 5,
    source: "Übung 2",
    question: "Eine EPK muss immer mit einem Ereignis beginnen und mit einem Ereignis enden.",
    answer: true,
    explanation: "Start- und Endereignis sind verpflichtend."
  },
  {
    id: "bwin-epk-07",
    type: "mcq",
    topic: "epk",
    examRelevance: 5,
    source: "Übung 2",
    question: "Wie wird eine Funktion in der EPK typischerweise benannt?",
    options: [
      "Als Zustand im Partizip Perfekt (z. B. „Rechnung ist geprüft“)",
      "Als Tätigkeit im Infinitiv (z. B. „Rechnung prüfen“)",
      "Nur mit Substantiv",
      "Als Frage"
    ],
    answer: 1,
    explanation: "Funktionen beschreiben aktive Tätigkeiten und werden im Infinitiv formuliert."
  },
  {
    id: "bwin-epk-08",
    type: "mcq",
    topic: "epk",
    examRelevance: 5,
    source: "Übung 2",
    question: "Wie wird ein Ereignis in der EPK typischerweise benannt?",
    options: [
      "Als Tätigkeit im Infinitiv",
      "Als Zustand (meist Partizip Perfekt)",
      "Als Imperativ",
      "Beliebig"
    ],
    answer: 1,
    explanation: "Ereignisse beschreiben Zustände: „Bestellung ist eingegangen“, „Rechnung ist geprüft“."
  },
  {
    id: "bwin-epk-09",
    type: "truefalse",
    topic: "epk",
    examRelevance: 5,
    source: "Übung 2",
    question: "Ein XOR-Split muss mit einem XOR-Join wieder zusammengeführt werden.",
    answer: true,
    explanation: "Split und Join müssen denselben Konnektortyp haben."
  },
  {
    id: "bwin-epk-10",
    type: "mcq",
    topic: "epk",
    examRelevance: 5,
    source: "Übung 2",
    question: "Was ist der häufigste schwere Fehler bei EPKs in Klausuren?",
    options: [
      "Fehlende Organisationseinheit",
      "XOR- oder OR-Split direkt nach einem Ereignis",
      "Zu viele Attribute",
      "Falsche Farbe der Symbole"
    ],
    answer: 1,
    explanation: "Das ist der klassische und klausurrelevante Fehler – Ereignisse haben keine Entscheidungskompetenz."
  },
  {
    id: "bwin-epk-11",
    type: "truefalse",
    topic: "epk",
    examRelevance: 4,
    source: "Übung 2",
    question: "Nach einem Ereignis ist ein AND-Split erlaubt.",
    answer: true,
    explanation: "AND-Splits sind nach Ereignissen erlaubt, weil keine Entscheidung getroffen wird – alle Pfade starten parallel."
  },
  {
    id: "bwin-epk-12",
    type: "mcq",
    topic: "epk",
    examRelevance: 5,
    source: "Übung 2 – Kundenbestellung",
    question: "Ein Kunde bestellt entweder per Webshop, telefonisch oder schriftlich. Welcher Konnektor ist hier korrekt?",
    options: ["AND", "OR", "XOR", "Keiner"],
    answer: 2,
    explanation: "Die Bestellwege schließen sich gegenseitig aus → XOR."
  },
  {
    id: "bwin-epk-13",
    type: "truefalse",
    topic: "epk",
    examRelevance: 4,
    source: "Übung 2",
    question: "Ereignisse besitzen Entscheidungskompetenz.",
    answer: false,
    explanation: "Nur Funktionen haben Entscheidungskompetenz. Ereignisse sind passiv."
  },
  {
    id: "bwin-epk-14",
    type: "truefalse",
    topic: "epk",
    examRelevance: 4,
    source: "Übung 2",
    question: "Mehrere eingehende Kontrollflüsse ohne Konnektor sind in einer EPK erlaubt.",
    answer: false,
    explanation: "Bei mehreren Ein- oder Ausgängen muss immer ein Konnektor verwendet werden."
  },
  {
    id: "bwin-epk-15",
    type: "mcq",
    topic: "epk",
    examRelevance: 4,
    source: "Übung 2",
    question: "Im bargeldlosen Kauf (Zahlungsmittel prüfen → ggf. Kredit prüfen) handelt es sich um alternative Pfade. Welcher Konnektor ist typisch?",
    options: ["AND", "OR", "XOR", "Keiner"],
    answer: 2,
    explanation: "Die Pfade schließen sich gegenseitig aus → XOR."
  },
  {
    id: "bwin-epk-16",
    type: "truefalse",
    topic: "epk",
    examRelevance: 3,
    source: "eEPK",
    question: "In der erweiterten EPK (eEPK) können Organisationseinheiten und Informationsobjekte an Funktionen gehängt werden.",
    answer: true,
    explanation: "Das ist der wesentliche Unterschied zur einfachen EPK."
  }
]);
