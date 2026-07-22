window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "bwin-py-01",
    type: "mcq",
    topic: "python",
    examRelevance: 5,
    source: "Übung 6",
    question: "Wie erstellt man in Python eine leere Liste?",
    options: ["list = {}", "list = []", "list = ()", "list = None"],
    answer: 1,
    explanation: "[] erzeugt eine leere Liste. {} ist ein leeres Dictionary."
  },
  {
    id: "bwin-py-02",
    type: "mcq",
    topic: "python",
    examRelevance: 5,
    source: "Übung 6",
    question: "Wie greift man auf den Wert eines Dictionary-Keys zu?",
    options: ["dict.key", "dict[key]", "dict.getkey(key)", "dict->key"],
    answer: 1,
    explanation: "dict[key] oder dict.get(key)."
  },
  {
    id: "bwin-py-03",
    type: "truefalse",
    topic: "python",
    examRelevance: 5,
    source: "Übung 6",
    question: "In Python sind Dictionaries ungeordnete (ab 3.7 insertion-ordered) Sammlungen von Key-Value-Paaren.",
    answer: true,
    explanation: "Keys müssen hashable sein, Werte beliebig."
  },
  {
    id: "bwin-py-04",
    type: "mcq",
    topic: "python",
    examRelevance: 5,
    source: "Übung 6 Zusatz",
    question: "Welche Funktion gibt die Anzahl der Elemente einer Liste zurück?",
    options: ["count()", "size()", "len()", "length()"],
    answer: 2,
    explanation: "len(liste)."
  },
  {
    id: "bwin-py-05",
    type: "mcq",
    topic: "python",
    examRelevance: 5,
    source: "Übung 6",
    question: "Wie sortiert man eine Liste aufsteigend in-place?",
    options: ["list.sort()", "sorted(list)", "list.order()", "sort(list)"],
    answer: 0,
    explanation: "list.sort() ändert die Liste selbst. sorted() gibt eine neue Liste zurück."
  },
  {
    id: "bwin-py-06",
    type: "truefalse",
    topic: "python",
    examRelevance: 4,
    source: "Übung 6 Zusatz",
    question: "Die Funktion wort_zaehlen(text) soll Groß-/Kleinschreibung und Satzzeichen ignorieren.",
    answer: true,
    explanation: "Das war die explizite Anforderung in den Zusatzaufgaben."
  },
  {
    id: "bwin-py-07",
    type: "mcq",
    topic: "python",
    examRelevance: 4,
    source: "Übung 6",
    question: "Wie berechnet man den Durchschnitt einer Liste von Zahlen am einfachsten?",
    options: [
      "sum(liste) / len(liste)",
      "avg(liste)",
      "mean(liste)",
      "liste.average()"
    ],
    answer: 0,
    explanation: "sum(liste) / len(liste) – genau so wurde es in der Übungsklausur erwartet."
  },
  {
    id: "bwin-py-08",
    type: "truefalse",
    topic: "python",
    examRelevance: 4,
    source: "Übung 5/6",
    question: "In Python beginnt die Indexierung von Listen bei 0.",
    answer: true,
    explanation: "Standard in den meisten Programmiersprachen."
  },
  {
    id: "bwin-py-09",
    type: "mcq",
    topic: "python",
    examRelevance: 4,
    source: "Übung 6",
    question: "Wie fügt man ein Element am Ende einer Liste hinzu?",
    options: ["list.add(x)", "list.append(x)", "list.insert(x)", "list.push(x)"],
    answer: 1,
    explanation: "list.append(x)."
  },
  {
    id: "bwin-py-10",
    type: "truefalse",
    topic: "python",
    examRelevance: 4,
    source: "Übung 6 Zusatz",
    question: "Eine Funktion in Python wird mit dem Schlüsselwort def definiert.",
    answer: true,
    explanation: "def funktionsname(parameter): …"
  },
  {
    id: "bwin-py-11",
    type: "mcq",
    topic: "python",
    examRelevance: 4,
    source: "Übungsklausur",
    question: "Welches Modul wird in der Übungsklausur für die Quadratwurzel importiert?",
    options: ["numpy", "math", "cmath", "statistics"],
    answer: 1,
    explanation: "import math → math.sqrt(…)."
  },
  {
    id: "bwin-py-12",
    type: "truefalse",
    topic: "python",
    examRelevance: 3,
    source: "Übung 6",
    question: "range(5) erzeugt die Zahlen 0, 1, 2, 3, 4.",
    answer: true,
    explanation: "range(n) geht von 0 bis n-1."
  },
  {
    id: "bwin-py-13",
    type: "mcq",
    topic: "python",
    examRelevance: 3,
    source: "Übung 6 Zusatz",
    question: "Wie wandelt man einen String in Kleinbuchstaben um?",
    options: ["str.lower()", "str.toLower()", "lower(str)", "str.lowercase()"],
    answer: 0,
    explanation: "text.lower()."
  },
  {
    id: "bwin-py-14",
    type: "truefalse",
    topic: "python",
    examRelevance: 3,
    source: "Übung 6",
    question: "Tupel sind veränderbar (mutable).",
    answer: false,
    explanation: "Tupel sind immutable. Listen und Dictionaries sind mutable."
  },
  {
    id: "bwin-py-15",
    type: "mcq",
    topic: "python",
    examRelevance: 3,
    source: "Übung 6",
    question: "Wie erstellt man ein Dictionary mit den Keys „Anna“ und „Ben“ und den Werten 1 und 2?",
    options: [
      "{\"Anna\": 1, \"Ben\": 2}",
      "[\"Anna\": 1, \"Ben\": 2]",
      "(\"Anna\": 1, \"Ben\": 2)",
      "dict(\"Anna\", 1, \"Ben\", 2)"
    ],
    answer: 0,
    explanation: "Geschweifte Klammern mit Key: Value."
  }
]);
