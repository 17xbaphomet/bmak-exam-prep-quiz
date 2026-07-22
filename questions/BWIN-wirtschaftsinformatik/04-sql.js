window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "bwin-sql-01",
    type: "mcq",
    topic: "sql",
    examRelevance: 5,
    source: "Übung 4",
    question: "Welches SQL-Kommando listet alle Spaltennamen und Datentypen einer Tabelle auf?",
    options: ["DESCRIBE TABLE", "SHOW COLUMNS FROM", "SELECT * FROM", "LIST COLUMNS"],
    answer: 1,
    explanation: "SHOW COLUMNS FROM tablename; (oder DESCRIBE tablename)."
  },
  {
    id: "bwin-sql-02",
    type: "mcq",
    topic: "sql",
    examRelevance: 5,
    source: "Übung 4",
    question: "Welches Schlüsselwort benennt eine Spalte in der Ausgabe um?",
    options: ["RENAME", "AS", "ALIAS", "TO"],
    answer: 1,
    explanation: "SELECT SalesRegion AS Verkaufsregion …"
  },
  {
    id: "bwin-sql-03",
    type: "truefalse",
    topic: "sql",
    examRelevance: 5,
    source: "Übung 4",
    question: "ORDER BY sortiert standardmäßig aufsteigend (ASC).",
    answer: true,
    explanation: "Ohne Angabe von DESC wird aufsteigend sortiert."
  },
  {
    id: "bwin-sql-04",
    type: "mcq",
    topic: "sql",
    examRelevance: 5,
    source: "Übung 4",
    question: "Welches Schlüsselwort sorgt dafür, dass doppelte Werte nur einmal erscheinen?",
    options: ["UNIQUE", "DISTINCT", "SINGLE", "ONLY"],
    answer: 1,
    explanation: "SELECT DISTINCT SalesRegion FROM …"
  },
  {
    id: "bwin-sql-05",
    type: "mcq",
    topic: "sql",
    examRelevance: 5,
    source: "Übung 4",
    question: "Welche Aggregatfunktion summiert Werte?",
    options: ["COUNT", "AVG", "SUM", "TOTAL"],
    answer: 2,
    explanation: "SUM(UnitsSold)."
  },
  {
    id: "bwin-sql-06",
    type: "truefalse",
    topic: "sql",
    examRelevance: 4,
    source: "Übung 4",
    question: "GROUP BY wird benötigt, wenn man Aggregatfunktionen nach Gruppen (z. B. nach Region) berechnen will.",
    answer: true,
    explanation: "Ohne GROUP BY würde die Aggregatfunktion über die gesamte Tabelle laufen."
  },
  {
    id: "bwin-sql-07",
    type: "mcq",
    topic: "sql",
    examRelevance: 4,
    source: "Übung 4",
    question: "Welche Klausel filtert Zeilen vor der Aggregation?",
    options: ["HAVING", "WHERE", "GROUP BY", "ORDER BY"],
    answer: 1,
    explanation: "WHERE filtert Zeilen, HAVING filtert Gruppen nach der Aggregation."
  },
  {
    id: "bwin-sql-08",
    type: "mcq",
    topic: "sql",
    examRelevance: 4,
    source: "Übung 4",
    question: "Wie sortiert man absteigend nach UnitsSold?",
    options: [
      "ORDER BY UnitsSold ASC",
      "ORDER BY UnitsSold DESC",
      "SORT BY UnitsSold DESC",
      "ORDER UnitsSold DESC"
    ],
    answer: 1,
    explanation: "ORDER BY Spalte DESC."
  },
  {
    id: "bwin-sql-09",
    type: "truefalse",
    topic: "sql",
    examRelevance: 4,
    source: "Übung 4",
    question: "SELECT * FROM fallstudie1; listet alle Datensätze und alle Spalten der Tabelle auf.",
    answer: true,
    explanation: "* steht für alle Spalten."
  },
  {
    id: "bwin-sql-10",
    type: "mcq",
    topic: "sql",
    examRelevance: 4,
    source: "Übung 4",
    question: "Welche Aussage ist korrekt?",
    options: [
      "WHERE kommt nach GROUP BY",
      "HAVING kommt vor WHERE",
      "WHERE filtert Zeilen, HAVING filtert Gruppen",
      "ORDER BY muss vor GROUP BY stehen"
    ],
    answer: 2,
    explanation: "WHERE → GROUP BY → HAVING → ORDER BY ist die logische Reihenfolge."
  },
  {
    id: "bwin-sql-11",
    type: "truefalse",
    topic: "sql",
    examRelevance: 3,
    source: "Übung 4",
    question: "In der Übungsklausur kamen auch Fragen zu Joins und zur Interpretation von SQL-Ausgaben vor.",
    answer: true,
    explanation: "Der SQL-Teil der Übungsklausur enthielt SELECT/WHERE/ORDER BY und Verständnisfragen."
  },
  {
    id: "bwin-sql-12",
    type: "mcq",
    topic: "sql",
    examRelevance: 3,
    source: "Übung 4",
    question: "Welches Kommando zeigt den Primärschlüssel einer Tabelle an (MySQL-Stil)?",
    options: ["SHOW KEYS", "SHOW COLUMNS FROM …", "PRIMARY KEY FROM", "DESCRIBE KEY"],
    answer: 1,
    explanation: "SHOW COLUMNS FROM … zeigt auch Key-Informationen (PRI)."
  }
]);
