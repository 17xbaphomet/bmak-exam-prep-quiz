window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "boee-ht-01",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Lecture",
    question: "Given $\\hat{\\beta}=0.68$, $se=0.055$. Test $H_0:\\beta=0$ vs two-sided alternative at 1%. Critical value = 2.58. t ≈ 12.36. Decision?",
    options: ["Reject $H_0$", "Fail to reject $H_0$", "The test is invalid", "Need a larger sample"],
    answer: 0,
    explanation: "t ≈ 12.36 > 2.58 → reject. Highly significant."
  },
  {
    id: "boee-ht-02",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Lecture",
    question: "Given $\\hat{\\beta}=0.68$, $se=0.055$. Test $H_0:\\beta=0.5$ vs two-sided at 1% (crit = 2.58). t ≈ 3.27. Decision?",
    options: ["Reject $H_0$", "Fail to reject $H_0$", "Inconclusive", "Accept $H_0$"],
    answer: 0,
    explanation: "3.27 > 2.58 → reject. The coefficient is statistically different from 0.5."
  },
  {
    id: "boee-ht-03",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Lecture",
    question: "$\\hat{\\beta}_{view}=0.026$, $se=0.029$, t ≈ 0.90. Two-sided 5% critical value = 1.96. Is the coefficient statistically significant?",
    options: ["Yes", "No", "Only at 10%", "Cannot tell without p-value"],
    answer: 1,
    explanation: "0.90 < 1.96 → fail to reject $H_0:\\beta=0$."
  },
  {
    id: "boee-ht-04",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Lecture",
    question: "Given $\\hat{\\beta}_{view}=0.026$, $se=0.029$, t ≈ 0.90. Test $H_0:\\beta\\le 0$ vs $H_1:\\beta>0$ at 5%. Critical value = 1.64. Decision?",
    options: ["Reject $H_0$ (evidence of positive effect)", "Fail to reject $H_0$"],
    answer: 1,
    explanation: "t = 0.90 < 1.64 → fail to reject."
  },
  {
    id: "boee-ht-05",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Lecture",
    question: "99% CI for $\\beta=0.68$ with $se=0.055$ (z=2.58) is approximately:",
    options: ["[0.54, 0.82]", "[0.62, 0.74]", "[0.57, 0.79]", "[0.48, 0.88]"],
    answer: 0,
    explanation: "0.68 ± 2.58×0.055 ≈ [0.538, 0.822]."
  },
  {
    id: "boee-ht-06",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Lecture",
    question: "F = 3.65 for 3 restrictions. Critical value $F_{3,\\infty}$ (5%) = 2.60. Conclusion?",
    options: ["Reject the joint null – jointly significant", "Fail to reject the joint null", "Inconclusive", "Use t-tests instead"],
    answer: 0,
    explanation: "3.65 > 2.60 → reject."
  },
  {
    id: "boee-ht-07",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Lecture",
    question: "To test that three coefficients are jointly zero, the matrix $R$ in $R\\beta=c$ must have how many rows?",
    options: ["1", "2", "3", "6"],
    answer: 2,
    explanation: "One row per restriction."
  },
  {
    id: "boee-ht-08",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 4,
    source: "Lecture",
    question: "A 95% CI is [–0.04, 0.12]. At the 5% level:",
    options: ["Reject $H_0:\\beta=0$", "Fail to reject $H_0:\\beta=0$", "The coefficient is positive", "The coefficient is zero"],
    answer: 1,
    explanation: "Interval contains zero → fail to reject."
  },
  {
    id: "boee-ht-09",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Lecture",
    question: "To test $H_0:\\beta_3=\\beta_4$, the correct single-row $R$ is:",
    options: ["(0 0 0 1 –1 0)", "(0 0 0 1 1 0)", "(0 0 0 1 0 1)", "(1 1 1 0 0 0)"],
    answer: 0,
    explanation: "Rβ = β3 – β4 = 0."
  },
  {
    id: "boee-ht-10",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 4,
    source: "Lecture",
    question: "t = 1.80, two-sided 5% critical value = 1.96. Conclusion at 5%?",
    options: ["Significant", "Not significant", "Significant at 1%", "Need p-value"],
    answer: 1,
    explanation: "1.80 < 1.96 → fail to reject."
  },
  {
    id: "boee-ht-11",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Lecture",
    question: "F = 2.10 for 3 restrictions. Critical value = 2.60. Decision?",
    options: ["Reject the joint null", "Fail to reject the joint null", "Individually significant", "Need more data"],
    answer: 1,
    explanation: "2.10 < 2.60 → fail to reject."
  },
  {
    id: "boee-ht-12",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Lecture",
    question: "t = 2.40. Critical values: 5% = 1.96, 1% = 2.58. The coefficient is:",
    options: ["Significant at both 1% and 5%", "Significant at 5% but not at 1%", "Significant at 1% but not at 5%", "Significant at neither"],
    answer: 1,
    explanation: "2.40 > 1.96 but < 2.58."
  },
  {
    id: "boee-ht-13",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 4,
    source: "Lecture",
    question: "Testing for a positive effect: t = 1.50, one-sided 5% crit = 1.64. Decision?",
    options: ["Reject $H_0$", "Fail to reject $H_0$"],
    answer: 1,
    explanation: "1.50 < 1.64 → fail to reject."
  },
  {
    id: "boee-ht-14",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Lecture",
    question: "A 99% CI is [0.538, 0.822]. Correct interpretation?",
    options: [
      "We are 99% sure this interval contains the true β",
      "In repeated samples 99% of such intervals contain the true β; we do not know about this particular one",
      "The true β is definitely in [0.538, 0.822]",
      "The coefficient is insignificant"
    ],
    answer: 1,
    explanation: "Frequentist CI interpretation."
  },
  {
    id: "boee-ht-15",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Lecture",
    question: "To test $\\beta_3 + \\beta_4 + \\beta_5 = 0$, the correct R row is:",
    options: ["(0 0 0 1 1 1)", "(0 0 0 1 0 0)", "(0 0 0 1 –1 0)", "(1 1 1 0 0 0)"],
    answer: 0,
    explanation: "Sums the three coefficients."
  },
  {
    id: "boee-ht-16",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 4,
    source: "Lecture",
    question: "F = 4.10 for 2 restrictions. Crit $F_{2,\\infty}$(5%) = 3.00. Conclusion?",
    options: ["Jointly significant", "Not jointly significant", "Individually significant", "Need t-tests"],
    answer: 0,
    explanation: "4.10 > 3.00 → reject."
  },
  {
    id: "boee-ht-17",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Lecture",
    question: "The t-statistic is calculated as:",
    options: [
      "estimate × se",
      "(estimate – hypothesized value) / se",
      "estimate / hypothesized value",
      "se / estimate"
    ],
    answer: 1,
    explanation: "Standard definition."
  },
  {
    id: "boee-ht-18",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 4,
    source: "Lecture",
    question: "Failing to reject $H_0:\\beta=0$ means:",
    options: [
      "We have proved β = 0",
      "The data are consistent with β = 0 (no strong evidence against it)",
      "The coefficient is exactly zero",
      "The model is misspecified"
    ],
    answer: 1,
    explanation: "We never accept the null; we only fail to reject it."
  },
  {
    id: "boee-ht-19",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Lecture",
    question: "The correct null for “three coefficients are jointly insignificant” is:",
    options: [
      "$H_0: \\beta_1=0$",
      "$H_0: \\beta_1=\\beta_2=\\beta_3=0$",
      "$H_0: \\beta_1+\\beta_2+\\beta_3=0$",
      "$H_0: \\beta_3=0$"
    ],
    answer: 1,
    explanation: "All three coefficients zero."
  },
  {
    id: "boee-ht-20",
    type: "truefalse",
    topic: "hypothesis-testing",
    examRelevance: 4,
    source: "Lecture",
    question: "If a 95% CI for a coefficient contains zero, the coefficient is statistically insignificant at the 5% level (two-sided).",
    answer: true,
    explanation: "The two-sided 5% t-test and the 95% CI are equivalent."
  }
]);
