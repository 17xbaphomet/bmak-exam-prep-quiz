window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "bwin-str-01",
    type: "mcq",
    topic: "struktogramm",
    examRelevance: 5,
    source: "Kapitel 5",
    question: "Wer hat das Struktogramm (Nassi-Shneiderman-Diagramm) 1973 entwickelt?",
    options: ["Peter Chen", "Ike Nassi und Ben Shneiderman", "August-Wilhelm Scheer", "Edgar Codd"],
    answer: 1,
    explanation: "Ike Nassi und Ben Shneiderman (State University of New York)."
  },
  {
    id: "bwin-str-02",
    type: "truefalse",
    topic: "struktogramm",
    examRelevance: 5,
    source: "Kapitel 5",
    question: "Struktogramme sind nach DIN 66261 genormt.",
    answer: true,
    explanation: "Ja, die Notation ist genormt."
  },
  {
    id: "bwin-str-03",
    type: "mcq",
    topic: "struktogramm",
    examRelevance: 5,
    source: "Kapitel 5",
    question: "Welche drei elementaren Grundstrukturen werden in Struktogrammen verwendet?",
    options: [
      "Sequenz, Verzweigung, Iteration",
      "Start, Prozess, Ende",
      "XOR, AND, OR",
      "Entity, Relationship, Attribute"
    ],
    answer: 0,
    explanation: "Sequenz (Folge), Verzweigung (Alternative) und Iteration (Schleife)."
  },
  {
    id: "bwin-str-04",
    type: "mcq",
    topic: "struktogramm",
    examRelevance: 5,
    source: "Kapitel 5",
    question: "Wie wird eine Sequenz (Folge) im Struktogramm dargestellt?",
    options: [
      "Rechtecke untereinander",
      "Raute mit Ja/Nein",
      "Kreis mit AND",
      "Oval"
    ],
    answer: 0,
    explanation: "Hintereinander angeordnete Rechtecke."
  },
  {
    id: "bwin-str-05",
    type: "mcq",
    topic: "struktogramm",
    examRelevance: 5,
    source: "Kapitel 5",
    question: "Wie wird eine einfache Alternative (if-then-else) im Struktogramm dargestellt?",
    options: [
      "Ein Rechteck",
      "Ein Rechteck, das durch eine diagonale Linie in Ja/Nein geteilt wird",
      "Ein Sechseck",
      "Zwei parallele Rechtecke"
    ],
    answer: 1,
    explanation: "Das klassische Nassi-Shneiderman-Symbol mit diagonaler Trennlinie und Ja/Nein."
  },
  {
    id: "bwin-str-06",
    type: "truefalse",
    topic: "struktogramm",
    examRelevance: 4,
    source: "Kapitel 5",
    question: "Bei der bedingten Verarbeitung (if ohne else) bleibt der Nein-Zweig im Struktogramm leer.",
    answer: true,
    explanation: "Nur der Ja-Zweig enthält Anweisungen."
  },
  {
    id: "bwin-str-07",
    type: "mcq",
    topic: "struktogramm",
    examRelevance: 4,
    source: "Kapitel 5",
    question: "Welche Schleifenform prüft die Bedingung vor dem ersten Durchlauf?",
    options: ["do-while", "while / Solange",
      "for-Schleife ohne Bedingung",
      "Endlosschleife"],
    answer: 1,
    explanation: "while-Schleife / „Solange Bedingung erfüllt ist“."
  },
  {
    id: "bwin-str-08",
    type: "mcq",
    topic: "struktogramm",
    examRelevance: 4,
    source: "Kapitel 5",
    question: "Wie wird eine zählergesteuerte Schleife (for) im Struktogramm typischerweise beschrieben?",
    options: [
      "Solange Bedingung",
      "Für Zähler von Anfang bis Ende",
      "Wiederhole bis",
      "Immer"
    ],
    answer: 1,
    explanation: "„Für Zähler von Anfang bis Ende“ mit dem Rumpf darunter."
  },
  {
    id: "bwin-str-09",
    type: "truefalse",
    topic: "struktogramm",
    examRelevance: 4,
    source: "Kapitel 5",
    question: "Struktogramme sind eine Entwurfsmethode für die strukturierte Programmierung.",
    answer: true,
    explanation: "Genau das war die Motivation von Nassi & Shneiderman."
  },
  {
    id: "bwin-str-10",
    type: "mcq",
    topic: "struktogramm",
    examRelevance: 4,
    source: "Kapitel 5",
    question: "Bei einer mehrfachen Alternative (case/switch) enthält das Struktogramm …",
    options: [
      "nur Ja/Nein",
      "mehrere Wert-Spalten + einen Sonst-Zweig",
      "nur einen Ablauf",
      "keine Verzweigung"
    ],
    answer: 1,
    explanation: "Wert1 | Wert2 | … | Sonst mit den jeweiligen Sequenzen darunter."
  },
  {
    id: "bwin-str-11",
    type: "truefalse",
    topic: "struktogramm",
    examRelevance: 3,
    source: "Kapitel 5",
    question: "Im Kursbeispiel „Rechnungsproblem“ wird eine Iteration über die Posten mit einer inneren Verzweigung nach MwSt-Klasse verwendet.",
    answer: true,
    explanation: "Wiederhole für jeden Posten + if MwStKlasse == „V“."
  },
  {
    id: "bwin-str-12",
    type: "mcq",
    topic: "struktogramm",
    examRelevance: 3,
    source: "Kapitel 5",
    question: "Was ist der Hauptvorteil von Struktogrammen gegenüber klassischen Flussdiagrammen?",
    options: [
      "Sie erlauben unstrukturierte Sprünge (GOTO)",
      "Sie erzwingen strukturierte Programmierung (keine beliebigen Sprünge)",
      "Sie sind bunter",
      "Sie benötigen keine Rechtecke"
    ],
    answer: 1,
    explanation: "Struktogramme unterstützen nur die drei Grundstrukturen und verhindern Spaghetti-Code."
  }
]);
