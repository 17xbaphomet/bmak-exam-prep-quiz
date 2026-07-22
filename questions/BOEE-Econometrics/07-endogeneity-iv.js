window.QUESTIONS = (window.QUESTIONS || []).concat([
  // Measurement Error
  {
    id: "boee-iv-01",
    type: "mcq",
    topic: "measurement-error",
    examRelevance: 5,
    source: "PS6 Q1a",
    question: "When the regressor is measured with classical error ($x = x^* + v$, $v$ independent of $x^*$ and $u$, $E[v]=0$), the OLS estimator of the slope is:",
    options: [
      "Consistent for $\\beta_1$",
      "Inconsistent and attenuated toward zero",
      "Inconsistent and biased away from zero",
      "Unbiased in finite samples"
    ],
    answer: 1,
    explanation: "plim $\\hat{\\beta}_1 = \\beta_1 \\frac{\\mathrm{Var}(x^*)}{\\mathrm{Var}(x^*)+\\mathrm{Var}(v)} < \\beta_1$ (in absolute value). This is classical attenuation bias."
  },
  {
    id: "boee-iv-02",
    type: "mcq",
    topic: "measurement-error",
    examRelevance: 5,
    source: "PS6 Q1a",
    question: "Under classical measurement error in the regressor, the asymptotic bias of the OLS slope equals:",
    options: [
      "$\\beta_1 \\left( \\frac{\\mathrm{Var}(x^*)}{\\mathrm{Var}(x^*)+\\mathrm{Var}(v)} - 1 \\right)$",
      "$\\beta_1 \\frac{\\mathrm{Var}(v)}{\\mathrm{Var}(x^*)}$",
      "0",
      "$\\mathrm{Var}(v)$"
    ],
    answer: 0,
    explanation: "Directly from the plim formula: plim $\\hat{\\beta}_1 - \\beta_1 = \\beta_1 \\left( \\frac{\\mathrm{Var}(x^*)}{\\mathrm{Var}(x^*)+\\mathrm{Var}(v)} - 1 \\right)$."
  },
  {
    id: "boee-iv-03",
    type: "mcq",
    topic: "measurement-error",
    examRelevance: 5,
    source: "PS6 Q1b",
    question: "When the dependent variable is measured with classical error ($y = y^* + v$, $v$ independent of $x$ and $u$), the OLS estimator of the slope is:",
    options: [
      "Inconsistent and attenuated",
      "Still consistent for $\\beta_1$",
      "Biased away from zero",
      "Inconsistent in an unknown direction"
    ],
    answer: 1,
    explanation: "Measurement error in $y$ is absorbed into the regression error. Under the usual assumptions OLS remains consistent (though less precise)."
  },
  {
    id: "boee-iv-04",
    type: "truefalse",
    topic: "measurement-error",
    examRelevance: 4,
    source: "PS6 / Lecture",
    question: "Classical measurement error in the dependent variable causes attenuation bias in the OLS slope coefficient.",
    answer: false,
    explanation: "False. Attenuation bias arises from classical measurement error in the *regressor*, not in the dependent variable."
  },

  // Endogeneity & IV
  {
    id: "boee-iv-05",
    type: "mcq",
    topic: "endogeneity",
    examRelevance: 5,
    source: "Lecture VIII / PS6",
    question: "A regressor $x$ is called endogenous when:",
    options: [
      "$E[e \\mid x] = 0$",
      "$\\mathrm{Cov}(x,e) \\neq 0$ (or $E[xe] \\neq 0$)",
      "It is measured without error",
      "It is a dummy variable"
    ],
    answer: 1,
    explanation: "Endogeneity means the regressor is correlated with the error term, violating the key OLS assumption."
  },
  {
    id: "boee-iv-06",
    type: "mcq",
    topic: "iv",
    examRelevance: 5,
    source: "PS6 Q2 / Lecture",
    question: "For a variable $z$ to be a valid instrument for an endogenous regressor $x$ it must satisfy:",
    options: [
      "Only relevance: $\\mathrm{Cov}(z,x) \\neq 0$",
      "Only exogeneity: $\\mathrm{Cov}(z,e) = 0$",
      "Both relevance ($\\mathrm{Cov}(z,x) \\neq 0$) and exogeneity ($\\mathrm{Cov}(z,e) = 0$)",
      "It must be uncorrelated with $x$"
    ],
    answer: 2,
    explanation: "Both conditions are required: the instrument must be correlated with the endogenous regressor and uncorrelated with the structural error."
  },
  {
    id: "boee-iv-07",
    type: "mcq",
    topic: "iv",
    examRelevance: 5,
    source: "Lecture VIII",
    question: "In the just-identified case the IV estimator is numerically equivalent to:",
    options: [
      "OLS",
      "Two-stage least squares (2SLS)",
      "The sample mean",
      "A ridge estimator"
    ],
    answer: 1,
    explanation: "In the just-identified case IV and 2SLS coincide. 2SLS proceeds by (1) regressing $x$ on $z$, (2) regressing $y$ on the fitted $\\hat{x}$."
  },
  {
    id: "boee-iv-08",
    type: "mcq",
    topic: "iv",
    examRelevance: 5,
    source: "PS6 Q2e",
    question: "A common rule-of-thumb check for a weak instrument in the bivariate (just-identified) case is that the first-stage $t$-statistic for the instrument should exceed roughly:",
    options: ["1.96", "3.2 (or a larger value suggested by recent research)", "1.64", "0"],
    answer: 1,
    explanation: "A common rule of thumb is that the first-stage $t$-statistic should exceed roughly 3.2; recent research often recommends even larger thresholds."
  },
  {
    id: "boee-iv-09",
    type: "mcq",
    topic: "iv",
    examRelevance: 4,
    source: "PS6 Q2",
    question: "Suppose OLS of a test score on a private-school dummy yields a coefficient of approximately 1.0, while 2SLS using a valid instrument yields a coefficient of approximately 2.0. This pattern is most consistent with:",
    options: [
      "Classical measurement error in the private-school dummy",
      "Endogeneity bias in the OLS estimate (OLS and IV differ)",
      "A weak instrument that makes IV identical to OLS",
      "Heteroskedasticity only"
    ],
    answer: 1,
    explanation: "A material difference between OLS and IV indicates that OLS was biased because of endogeneity; the direction of the difference reveals the direction of that bias."
  },
  {
    id: "boee-iv-10",
    type: "mcq",
    topic: "iv",
    examRelevance: 4,
    source: "Lecture VIII",
    question: "The Vietnam draft lottery is a classic example of an instrument because:",
    options: [
      "Lottery numbers are highly correlated with ability",
      "Eligibility was randomly assigned (exogeneity) and raised the probability of military service (relevance)",
      "Everyone with a low lottery number served",
      "It eliminates all measurement error"
    ],
    answer: 1,
    explanation: "Random assignment provides the exogeneity condition; the higher probability of service provides relevance."
  },
  {
    id: "boee-iv-11",
    type: "truefalse",
    topic: "iv",
    examRelevance: 4,
    source: "Lecture",
    question: "If an instrument is weak, the IV estimator can be severely biased in finite samples and inference can be unreliable.",
    answer: true,
    explanation: "Weak instruments are a major practical problem; the usual asymptotic approximations break down."
  },
  {
    id: "boee-iv-12",
    type: "mcq",
    topic: "endogeneity",
    examRelevance: 4,
    source: "Lecture VIII",
    question: "Which of the following is a common source of endogeneity?",
    options: [
      "Homoskedasticity",
      "Omitted variables, measurement error in the regressor, and simultaneity",
      "Large sample size",
      "Using robust standard errors"
    ],
    answer: 1,
    explanation: "The three classic sources of endogeneity are omitted variables, measurement error in $x$, and simultaneous causality."
  }
]);
