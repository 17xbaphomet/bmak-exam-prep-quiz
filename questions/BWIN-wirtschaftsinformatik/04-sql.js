window.QUESTIONS = (window.QUESTIONS || []).concat([
  // ─── Basics ───────────────────────────────────────────────
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

  // ─── Filtering & Sorting ──────────────────────────────────
  {
    id: "bwin-sql-06",
    type: "truefalse",
    topic: "sql",
    examRelevance: 5,
    source: "Übung 4",
    question: "GROUP BY wird benötigt, wenn man Aggregatfunktionen nach Gruppen (z. B. nach Region) berechnen will.",
    answer: true,
    explanation: "Ohne GROUP BY würde die Aggregatfunktion über die gesamte Tabelle laufen."
  },
  {
    id: "bwin-sql-07",
    type: "mcq",
    topic: "sql",
    examRelevance: 5,
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
    examRelevance: 5,
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
    examRelevance: 5,
    source: "Übung 4",
    question: "Welche Aussage ist korrekt?",
    options: [
      "WHERE kommt nach GROUP BY",
      "HAVING kommt vor WHERE",
      "WHERE filtert Zeilen, HAVING filtert Gruppen",
      "ORDER BY muss vor GROUP BY stehen"
    ],
    answer: 2,
    explanation: "Logische Reihenfolge: WHERE → GROUP BY → HAVING → ORDER BY."
  },

  // ─── Expanded questions ───────────────────────────────────
  {
    id: "bwin-sql-11",
    type: "mcq",
    topic: "sql",
    examRelevance: 5,
    source: "Übung 4",
    question: "Welche Abfrage listet alle Verkaufsregionen ohne Duplikate auf?",
    options: [
      "SELECT SalesRegion FROM fallstudie1;",
      "SELECT DISTINCT SalesRegion FROM fallstudie1;",
      "SELECT UNIQUE SalesRegion FROM fallstudie1;",
      "SELECT SalesRegion ONLY FROM fallstudie1;"
    ],
    answer: 1,
    explanation: "DISTINCT entfernt doppelte Werte."
  },
  {
    id: "bwin-sql-12",
    type: "mcq",
    topic: "sql",
    examRelevance: 5,
    source: "Übung 4",
    question: "Wie berechnet man die Summe der verkauften Einheiten pro Verkaufsregion?",
    options: [
      "SELECT SalesRegion, SUM(UnitsSold) FROM fallstudie1;",
      "SELECT SalesRegion, SUM(UnitsSold) FROM fallstudie1 GROUP BY SalesRegion;",
      "SELECT SUM(UnitsSold) GROUP BY SalesRegion FROM fallstudie1;",
      "SELECT SalesRegion SUM UnitsSold FROM fallstudie1;"
    ],
    answer: 1,
    explanation: "Bei Aggregatfunktionen + Gruppenspalte ist GROUP BY erforderlich."
  },
  {
    id: "bwin-sql-13",
    type: "mcq",
    topic: "sql",
    examRelevance: 5,
    source: "Übung 4",
    question: "Wie sortiert man zuerst nach SalesRegion aufsteigend und innerhalb der Region nach UnitsSold absteigend?",
    options: [
      "ORDER BY SalesRegion, UnitsSold DESC",
      "ORDER BY SalesRegion ASC, UnitsSold DESC",
      "ORDER BY UnitsSold DESC, SalesRegion",
      "SORT BY SalesRegion ASC THEN UnitsSold DESC"
    ],
    answer: 1,
    explanation: "Mehrere Spalten in ORDER BY sind erlaubt; ASC ist optional, aber explizit klarer."
  },
  {
    id: "bwin-sql-14",
    type: "mcq",
    topic: "sql",
    examRelevance: 5,
    source: "Übung 4",
    question: "Welche Klausel filtert Gruppen nach der Aggregation (z. B. nur Regionen mit Summe > 1000)?",
    options: ["WHERE", "HAVING", "GROUP BY", "FILTER"],
    answer: 1,
    explanation: "HAVING filtert nach GROUP BY. WHERE kann keine Aggregatfunktionen enthalten."
  },
  {
    id: "bwin-sql-15",
    type: "truefalse",
    topic: "sql",
    examRelevance: 5,
    source: "Übung 4",
    question: "WHERE kann Aggregatfunktionen wie SUM() oder COUNT() enthalten.",
    answer: false,
    explanation: "Aggregatfunktionen gehören in HAVING (oder in die SELECT-Liste). WHERE arbeitet auf Zeilenebene."
  },
  {
    id: "bwin-sql-16",
    type: "mcq",
    topic: "sql",
    examRelevance: 4,
    source: "Übung 4",
    question: "Was macht die folgende Abfrage?\nSELECT SalesRegion, SUM(UnitsSold) AS Total\nFROM fallstudie1\nGROUP BY SalesRegion\nORDER BY Total DESC;",
    options: [
      "Listet alle Zeilen sortiert nach UnitsSold",
      "Summiert UnitsSold pro Region und sortiert die Regionen nach der Summe absteigend",
      "Filtert Regionen mit Total > 0",
      "Löscht Duplikate und sortiert aufsteigend"
    ],
    answer: 1,
    explanation: "Klassische Aggregation + Alias + absteigende Sortierung nach dem berechneten Wert."
  },
  {
    id: "bwin-sql-17",
    type: "mcq",
    topic: "sql",
    examRelevance: 4,
    source: "Übung 4",
    question: "Welche Aggregatfunktion zählt die Anzahl der Zeilen?",
    options: ["SUM", "AVG", "COUNT", "TOTAL"],
    answer: 2,
    explanation: "COUNT(*) oder COUNT(Spalte)."
  },
  {
    id: "bwin-sql-18",
    type: "mcq",
    topic: "sql",
    examRelevance: 4,
    source: "Übung 4",
    question: "Welche Aggregatfunktion berechnet den Durchschnitt?",
    options: ["SUM", "AVG", "MEAN", "MEDIAN"],
    answer: 1,
    explanation: "AVG(Spalte)."
  },
  {
    id: "bwin-sql-19",
    type: "truefalse",
    topic: "sql",
    examRelevance: 4,
    source: "Übung 4",
    question: "Bei SELECT SalesRegion, SUM(UnitsSold) FROM … muss SalesRegion in der GROUP-BY-Klausel stehen (sofern keine andere Aggregatfunktion darauf angewendet wird).",
    answer: true,
    explanation: "Jede nicht-aggregierte Spalte in der SELECT-Liste muss in GROUP BY erscheinen."
  },
  {
    id: "bwin-sql-20",
    type: "mcq",
    topic: "sql",
    examRelevance: 4,
    source: "Übung 4",
    question: "Welches Kommando zeigt u. a. den Primärschlüssel einer Tabelle an (MySQL-Stil)?",
    options: ["SHOW KEYS", "SHOW COLUMNS FROM …", "PRIMARY KEY FROM", "DESCRIBE KEY"],
    answer: 1,
    explanation: "SHOW COLUMNS FROM … zeigt auch Key-Informationen (PRI)."
  },
  {
    id: "bwin-sql-21",
    type: "mcq",
    topic: "sql",
    examRelevance: 4,
    source: "Übungsklausur-Stil",
    question: "Was ist der Unterschied zwischen WHERE und HAVING?",
    options: [
      "Es gibt keinen Unterschied",
      "WHERE filtert Zeilen vor der Gruppierung, HAVING filtert Gruppen danach",
      "HAVING filtert Zeilen, WHERE filtert Gruppen",
      "WHERE ist nur für JOIN, HAVING nur für SELECT"
    ],
    answer: 1,
    explanation: "Das ist einer der klassischen Prüfungsfragen."
  },
  {
    id: "bwin-sql-22",
    type: "mcq",
    topic: "sql",
    examRelevance: 4,
    source: "Übung 4",
    question: "Welche Abfrage gibt die drei Regionen mit den höchsten Verkaufszahlen zurück?",
    options: [
      "SELECT SalesRegion, SUM(UnitsSold) FROM fallstudie1 GROUP BY SalesRegion ORDER BY SUM(UnitsSold) DESC LIMIT 3;",
      "SELECT TOP 3 SalesRegion FROM fallstudie1;",
      "SELECT SalesRegion FROM fallstudie1 WHERE RANK <= 3;",
      "SELECT SalesRegion LIMIT 3 ORDER BY UnitsSold;"
    ],
    answer: 0,
    explanation: "GROUP BY + ORDER BY Aggregat + LIMIT ist der übliche Weg (MySQL/SQLite-Stil)."
  },
  {
    id: "bwin-sql-23",
    type: "truefalse",
    topic: "sql",
    examRelevance: 3,
    source: "Übung 4",
    question: "SELECT DISTINCT * FROM tabelle; kann sinnvoll sein, um komplett identische Zeilen nur einmal anzuzeigen.",
    answer: true,
    explanation: "DISTINCT wirkt auf die gesamte ausgewählte Zeile."
  },
  {
    id: "bwin-sql-24",
    type: "mcq",
    topic: "sql",
    examRelevance: 3,
    source: "Übung 4",
    question: "In welcher Reihenfolge werden die Klauseln logisch ausgeführt?",
    options: [
      "SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY",
      "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY",
      "FROM → SELECT → WHERE → GROUP BY → ORDER BY",
      "WHERE → FROM → SELECT → GROUP BY → HAVING → ORDER BY"
    ],
    answer: 1,
    explanation: "Die logische Verarbeitungsreihenfolge beginnt mit FROM, nicht mit SELECT."
  },
  {
    id: "bwin-sql-25",
    type: "truefalse",
    topic: "sql",
    examRelevance: 3,
    source: "Übungsklausur",
    question: "In der Übungsklausur kamen auch Verständnisfragen zur Interpretation von SQL-Ausgaben vor.",
    answer: true,
    explanation: "Neben dem Schreiben von Abfragen wurde auch das Lesen/Interpretieren von Ergebnissen geprüft."
  }
]);
