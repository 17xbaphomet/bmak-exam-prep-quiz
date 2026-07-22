window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "boee-r-01",
    type: "mcq",
    topic: "r-code",
    examRelevance: 5,
    source: "PS / Mock",
    question: "Which R command estimates the linear model $y = \\beta_0 + \\beta_1 x + e$?",
    options: [
      "lm(y ~ x)",
      "reg y x",
      "ols(y, x)",
      "fit(y ~ x)"
    ],
    answer: 0,
    explanation: "The standard function is lm() with a formula interface: dependent variable on the left of ~, regressors on the right."
  },
  {
    id: "boee-r-02",
    type: "mcq",
    topic: "r-code",
    examRelevance: 5,
    source: "PS4 / Lecture",
    question: "In an lm() formula, how do you include a quadratic term $x^2$?",
    options: [
      "lm(y ~ x + x^2)",
      "lm(y ~ x + I(x^2))",
      "lm(y ~ x + square(x))",
      "lm(y ~ x*x)"
    ],
    answer: 1,
    explanation: "The I() function protects the arithmetic expression so that x^2 is treated as the square of x rather than as an interaction."
  },
  {
    id: "boee-r-03",
    type: "mcq",
    topic: "r-code",
    examRelevance: 5,
    source: "PS4",
    question: "To include both main effects and the interaction of x and D in an lm formula you write:",
    options: [
      "lm(y ~ x + D)",
      "lm(y ~ x * D)   or   lm(y ~ x + D + x:D)",
      "lm(y ~ x:D)",
      "lm(y ~ x & D)"
    ],
    answer: 1,
    explanation: "The * operator expands to main effects plus the interaction; the : operator gives only the interaction."
  },
  {
    id: "boee-r-04",
    type: "mcq",
    topic: "r-code",
    examRelevance: 4,
    source: "PS / Notes",
    question: "After fitting model <- lm(y ~ x1 + x2, data = dat), the residuals are obtained by:",
    options: [
      "resid(model)   or   residuals(model)",
      "model$e",
      "error(model)",
      "summary(model)$resid only"
    ],
    answer: 0,
    explanation: "resid() / residuals() extracts the OLS residuals. fitted() or predict() gives the fitted values."
  },
  {
    id: "boee-r-05",
    type: "mcq",
    topic: "r-code",
    examRelevance: 5,
    source: "PS5",
    question: "A common way to obtain heteroskedasticity-robust standard errors and the corresponding t-tests in R is:",
    options: [
      "summary(model)",
      "coeftest(model, vcov = vcovHC(model))   (or equivalent with sandwich/lmtest)",
      "anova(model)",
      "confint(model)"
    ],
    answer: 1,
    explanation: "vcovHC from the sandwich package (or similar) supplies a robust variance-covariance matrix; coeftest then reports the robust t-statistics."
  },
  {
    id: "boee-r-06",
    type: "mcq",
    topic: "r-code",
    examRelevance: 4,
    source: "PS5 / Mock",
    question: "To test a joint linear restriction (e.g. several coefficients equal zero) after an lm fit, a typical approach in the course materials is to use:",
    options: [
      "only individual t-tests",
      "waldtest() or linearHypothesis() with a robust variance-covariance matrix",
      "summary(model)$r.squared",
      "plot(model)"
    ],
    answer: 1,
    explanation: "waldtest (lmtest) or linearHypothesis (car) can test Rβ = c and accept a robust vcov."
  },
  {
    id: "boee-r-07",
    type: "mcq",
    topic: "r-code",
    examRelevance: 4,
    source: "Mock style",
    question: "An R summary output shows: Estimate = 0.68, Std. Error = 0.055. The t-statistic reported for H0: β = 0 is approximately:",
    options: ["0.68", "12.36", "0.055", "1.96"],
    answer: 1,
    explanation: "t = Estimate / Std.Error = 0.68 / 0.055 ≈ 12.36."
  },
  {
    id: "boee-r-08",
    type: "mcq",
    topic: "r-code",
    examRelevance: 4,
    source: "PS notes",
    question: "The formula lm(y ~ x1 + x2 + x1:x2) is equivalent to:",
    options: [
      "lm(y ~ x1 * x2)",
      "lm(y ~ x1 + x2)",
      "lm(y ~ x1:x2)",
      "lm(y ~ x1 * x2 - 1)"
    ],
    answer: 0,
    explanation: "x1 * x2 expands to the two main effects plus the interaction x1:x2."
  },
  {
    id: "boee-r-09",
    type: "truefalse",
    topic: "r-code",
    examRelevance: 4,
    source: "Lecture / PS",
    question: "In R, summary(lm(y ~ x)) reports the usual (non-robust) standard errors by default.",
    answer: true,
    explanation: "Yes. To get heteroskedasticity-robust SEs you must request them explicitly (e.g. via vcovHC / coeftest or equivalent)."
  },
  {
    id: "boee-r-10",
    type: "mcq",
    topic: "r-code",
    examRelevance: 4,
    source: "PS3 style",
    question: "After model <- lm(y ~ x, data = d), the OLS fitted values can be extracted by:",
    options: [
      "fitted(model)   or   predict(model)",
      "resid(model)",
      "coef(model)",
      "model$x"
    ],
    answer: 0,
    explanation: "fitted() or predict() returns the vector of ŷᵢ."
  }
]);
