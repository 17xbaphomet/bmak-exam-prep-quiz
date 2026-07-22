window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "boee-r-01",
    type: "mcq",
    topic: "r-code",
    examRelevance: 5,
    source: "PS / Mock",
    question: "In R, which command fits the simple linear regression of y on x?",
    options: [
      "lm(y ~ x)",
      "reg(y ~ x)",
      "ols(y, x)",
      "lm(y = x)"
    ],
    answer: 0,
    explanation: "The standard formula interface is lm(y ~ x)."
  },
  {
    id: "boee-r-02",
    type: "mcq",
    topic: "r-code",
    examRelevance: 5,
    source: "PS4",
    question: "To include a quadratic term in an lm() formula you write:",
    options: [
      "lm(y ~ x + x^2)",
      "lm(y ~ x + I(x^2))",
      "lm(y ~ x + x**2)",
      "lm(y ~ poly(x))"
    ],
    answer: 1,
    explanation: "Wrap powers in I() so R treats them as arithmetic."
  },
  {
    id: "boee-r-03",
    type: "mcq",
    topic: "r-code",
    examRelevance: 5,
    source: "PS5",
    question: "lm(y ~ x1 * x2) is equivalent to:",
    options: [
      "lm(y ~ x1 + x2)",
      "lm(y ~ x1 + x2 + x1:x2)",
      "lm(y ~ x1:x2)",
      "lm(y ~ x1 x2)"
    ],
    answer: 1,
    explanation: "The * operator expands to main effects plus the interaction."
  },
  {
    id: "boee-r-04",
    type: "mcq",
    topic: "r-code",
    examRelevance: 5,
    source: "PS5",
    question: "After model <- lm(y ~ x1 + x2), a standard way to get heteroskedasticity-robust SEs is:",
    options: [
      "summary(model)",
      "coeftest(model, vcov = vcovHC(model))",
      "anova(model)",
      "resid(model)"
    ],
    answer: 1,
    explanation: "Use sandwich::vcovHC together with lmtest::coeftest."
  },
  {
    id: "boee-r-05",
    type: "mcq",
    topic: "r-code",
    examRelevance: 4,
    source: "PS",
    question: "Which extracts the residuals from an lm object called model?",
    options: [
      "resid(model) or residuals(model)",
      "fitted(model)",
      "coef(model)",
      "vcov(model)"
    ],
    answer: 0,
    explanation: "resid() / residuals() return the OLS residuals."
  },
  {
    id: "boee-r-06",
    type: "mcq",
    topic: "r-code",
    examRelevance: 4,
    source: "PS",
    question: "Which gives the fitted values from model <- lm(y ~ x)?",
    options: [
      "fitted(model) or predict(model)",
      "resid(model)",
      "coef(model)",
      "summary(model)"
    ],
    answer: 0,
    explanation: "fitted() returns Xβ̂."
  },
  {
    id: "boee-r-07",
    type: "mcq",
    topic: "r-code",
    examRelevance: 5,
    source: "Mock",
    question: "summary(model) shows Estimate = 0.68, Std. Error = 0.055. The t-value is approximately:",
    options: ["0.68", "12.36", "0.055", "1.96"],
    answer: 1,
    explanation: "t = 0.68 / 0.055 ≈ 12.36."
  },
  {
    id: "boee-r-08",
    type: "mcq",
    topic: "r-code",
    examRelevance: 4,
    source: "PS5",
    question: "For joint tests with robust SEs after lm(), a common approach is:",
    options: [
      "summary() only",
      "waldtest() or linearHypothesis() with a vcov argument",
      "resid()",
      "plot()"
    ],
    answer: 1,
    explanation: "waldtest / linearHypothesis accept a robust variance-covariance matrix."
  },
  {
    id: "boee-r-09",
    type: "mcq",
    topic: "r-code",
    examRelevance: 4,
    source: "Lecture",
    question: "By default an lm() formula includes an intercept. To suppress it you write:",
    options: [
      "+1",
      "-1 or +0",
      "intercept=FALSE",
      "nointercept"
    ],
    answer: 1,
    explanation: "Add -1 or +0 to the formula to drop the intercept."
  },
  {
    id: "boee-r-10",
    type: "truefalse",
    topic: "r-code",
    examRelevance: 4,
    source: "PS5",
    question: "Using coeftest(..., vcov = vcovHC) changes the coefficient point estimates.",
    answer: false,
    explanation: "Only the standard errors (and t/p-values) change; the OLS estimates stay the same."
  },
  {
    id: "boee-r-11",
    type: "mcq",
    topic: "r-code",
    examRelevance: 4,
    source: "PS4",
    question: "A correct way to let both the linear and quadratic income terms differ by a high-EL dummy is:",
    options: [
      "avginc * highEL + I(avginc^2) * highEL",
      "avginc + highEL",
      "avginc : highEL",
      "I(avginc * highEL^2)"
    ],
    answer: 0,
    explanation: "Interact both terms with the dummy."
  },
  {
    id: "boee-r-12",
    type: "mcq",
    topic: "r-code",
    examRelevance: 3,
    source: "PS",
    question: "Which extracts the estimated coefficients from an lm object m?",
    options: [
      "coef(m) or coefficients(m)",
      "resid(m)",
      "fitted(m)",
      "vcov(m)"
    ],
    answer: 0,
    explanation: "coef() returns the vector of β̂."
  }
]);
