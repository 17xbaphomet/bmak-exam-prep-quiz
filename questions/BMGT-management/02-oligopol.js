window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "bmgt-ol-01",
    type: "mcq",
    topic: "oligopol",
    examRelevance: 5,
    source: "Übung 2 / Mentorium 2",
    question: "Im Cournot-Mengenwettbewerb sind die gewählten Mengen strategische …",
    options: ["Komplemente", "Substitute", "Unabhängige Größen", "Externe Effekte"],
    answer: 1,
    explanation: "Mengen sind strategische Substitute: die Beste-Antwort-Funktion ist fallend (höhere Menge des Rivalen → niedrigere eigene optimale Menge)."
  },
  {
    id: "bmgt-ol-02",
    type: "mcq",
    topic: "oligopol",
    examRelevance: 5,
    source: "Übung 2",
    question: "Im Bertrand-Preiswettbewerb mit homogenen Gütern und identischen Grenzkosten gilt im Nash-Gleichgewicht:",
    options: [
      "Preis > Grenzkosten und positiver Gewinn",
      "Preis = Grenzkosten und Nullgewinn (Bertrand-Paradox)",
      "Preis < Grenzkosten",
      "Mengen wie im Cournot-Gleichgewicht"
    ],
    answer: 1,
    explanation: "Bei homogenen Gütern unterbietet jeder marginal den Konkurrenten → Preis sinkt bis auf Grenzkosten. Ergebnis wie bei vollkommener Konkurrenz."
  },
  {
    id: "bmgt-ol-03",
    type: "mcq",
    topic: "oligopol",
    examRelevance: 5,
    source: "Mentorium 2 / Stackelberg",
    question: "Im Stackelberg-Modell (sequentieller Mengenwettbewerb) hat der Führer gegenüber dem simultanen Cournot-Gleichgewicht:",
    options: [
      "einen First-Mover-Advantage (höhere Menge und höherer Gewinn)",
      "einen Second-Mover-Advantage",
      "denselben Gewinn wie im Cournot",
      "einen niedrigeren Gewinn"
    ],
    answer: 0,
    explanation: "Der Führer antizipiert die Reaktion des Folgers und wählt eine höhere Menge → First-Mover-Advantage."
  },
  {
    id: "bmgt-ol-04",
    type: "truefalse",
    topic: "oligopol",
    examRelevance: 4,
    source: "Übung 2",
    question: "Bei heterogenen Gütern im Bertrand-Wettbewerb führt Preis = Grenzkosten immer noch zum Gleichgewicht.",
    answer: false,
    explanation: "Bei differenzierten Produkten gibt es positive Markups; die Reaktionsfunktionen sind steigend (strategische Komplemente)."
  },
  {
    id: "bmgt-ol-05",
    type: "mcq",
    topic: "oligopol",
    examRelevance: 4,
    source: "Mentorium 2",
    question: "Strategische Komplemente bedeuten, dass die Beste-Antwort-Funktionen …",
    options: ["fallend sind", "steigend sind", "horizontal sind", "nicht existieren"],
    answer: 1,
    explanation: "Bei strategischen Komplementen (z.B. Preise bei differenzierten Gütern) reagieren Firmen gleichgerichtet: höhere Preiswahl des Rivalen → höhere eigene optimale Preiswahl."
  },
  {
    id: "bmgt-ol-06",
    type: "numerical",
    topic: "oligopol",
    examRelevance: 5,
    source: "Mentorium 2 (Adidas/Nike Beispiel)",
    question: "Cournot-Duopol: p = 200 − 2(xA + xN), c = 20. Wie hoch ist die Gleichgewichtsmenge jedes Unternehmens?",
    answer: 30,
    tolerance: 0,
    explanation: "BA: x_i = (180 − 2 x_j)/4 → x* = 30. Gesamtmenge 60, p* = 80, π* = 1800 je Firma."
  },
  {
    id: "bmgt-ol-07",
    type: "truefalse",
    topic: "oligopol",
    examRelevance: 4,
    source: "Vorlesung / Übung",
    question: "Im Cournot-Gleichgewicht produzieren die Firmen mehr als die aus Sicht der Firmen effiziente (kollusive) Menge.",
    answer: true,
    explanation: "Im Nash-Gleichgewicht wird die negative Externalität auf den Rivalen nicht internalisiert → Überproduktion relativ zur gemeinsamen Gewinnmaximierung."
  },
  {
    id: "bmgt-ol-08",
    type: "mcq",
    topic: "oligopol",
    examRelevance: 4,
    source: "Altklausur",
    question: "Was passiert im Cournot-Gleichgewicht, wenn ein drittes identisches Unternehmen in den Markt eintritt?",
    options: [
      "Einzelmengen steigen, Preis steigt",
      "Einzelmengen fallen, Gesamtmenge steigt, Preis fällt",
      "Nichts ändert sich",
      "Preis steigt, Gewinne steigen"
    ],
    answer: 1,
    explanation: "Mehr Wettbewerb → niedrigere individuelle Mengen, höhere Gesamtmenge, niedrigerer Preis und niedrigere Gewinne pro Firma."
  },
  {
    id: "bmgt-ol-09",
    type: "numerical",
    topic: "oligopol",
    examRelevance: 5,
    source: "Mentorium 2",
    question: "Gleiche Cournot-Situation (p=200−2(xA+xN), c=20). Marktpreis im Gleichgewicht?",
    answer: 80,
    tolerance: 0,
    explanation: "Gesamtmenge 60 → p = 200 − 2×60 = 80."
  }
]);
