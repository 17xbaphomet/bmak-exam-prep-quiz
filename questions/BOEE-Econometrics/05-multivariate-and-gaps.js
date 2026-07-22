window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "boee-mv-01",
    type: "mcq",
    topic: "multivariate",
    examRelevance: 5,
    source: "Lecture IV",
    question: "You regress wages on education and obtain a large positive coefficient. After adding a measure of ability, the education coefficient falls substantially. This is most consistent with:",
    options: [
      "Perfect multicollinearity",
      "Omitted variable bias (ability was positively correlated with both education and wages)",
      "Heteroskedasticity",
      "Classical measurement error in wages"
    ],
    answer: 1,
    explanation: "Ability is a classic omitted variable that biases the simple regression coefficient of education upward."
  },
  {
    id: "boee-mv-02",
    type: "mcq",
    topic: "multivariate",
    examRelevance: 5,
    source: "Lecture IV",
    question: "Multicollinearity in a multiple regression primarily causes:",
    options: [
      "Biased coefficient estimates",
      "Large standard errors (imprecise estimates) for the collinear variables",
      "Inconsistency of OLS",
      "The residuals to sum to a non-zero value"
    ],
    answer: 1,
    explanation: "Multicollinearity inflates variances of the affected coefficients but does not by itself cause bias or inconsistency."
  },
  {
    id: "boee-mv-03",
    type: "mcq",
    topic: "multivariate",
    examRelevance: 4,
    source: "Lecture IV",
    question: "If two regressors are perfectly collinear, OLS cannot be computed because:",
    options: [
      "The residual sum of squares becomes infinite",
      "The matrix X'X is singular (not invertible)",
      "The errors are no longer mean-zero",
      "n becomes too small"
    ],
    answer: 1,
    explanation: "Perfect multicollinearity makes X'X singular, so the inverse does not exist."
  },
  {
    id: "boee-mv-04",
    type: "mcq",
    topic: "dummies",
    examRelevance: 5,
    source: "Lecture",
    question: "A saturated model with a full set of group dummies (and no intercept) estimates:",
    options: [
      "The overall mean of y",
      "The group-specific means of y",
      "Only the differences between groups",
      "Nothing useful"
    ],
    answer: 1,
    explanation: "With a full set of mutually exclusive dummies and no intercept, each coefficient is exactly the sample mean of y in that group."
  },
  {
    id: "boee-mv-05",
    type: "mcq",
    topic: "dummies",
    examRelevance: 5,
    source: "Lecture",
    question: "You have three regions (North, South, West). To avoid the dummy-variable trap while still allowing different intercepts, you should:",
    options: [
      "Include dummies for all three regions and the intercept",
      "Include dummies for two regions plus the intercept",
      "Include no dummies at all",
      "Include the three dummies but omit the intercept and one continuous variable"
    ],
    answer: 1,
    explanation: "Include k−1 dummies plus the intercept (or all k dummies and drop the intercept)."
  },
  {
    id: "boee-mv-06",
    type: "mcq",
    topic: "heteroskedasticity",
    examRelevance: 5,
    source: "Lecture",
    question: "Heteroskedasticity means:",
    options: [
      "The variance of the error term is constant",
      "The variance of the error term depends on x (or is not constant)",
      "The errors are correlated across observations",
      "The regressors are collinear"
    ],
    answer: 1,
    explanation: "By definition, Var(e|x) is not constant under heteroskedasticity."
  },
  {
    id: "boee-mv-07",
    type: "mcq",
    topic: "heteroskedasticity",
    examRelevance: 5,
    source: "Lecture",
    question: "When errors are heteroskedastic, the usual (non-robust) OLS standard errors are typically:",
    options: [
      "Still valid and unbiased",
      "Incorrect; robust (heteroskedasticity-consistent) standard errors should be used",
      "Too large, so tests become conservative",
      "Exactly zero"
    ],
    answer: 1,
    explanation: "Classical SEs assume homoskedasticity. Under heteroskedasticity they are inconsistent; use robust SEs."
  },
  {
    id: "boee-mv-08",
    type: "mcq",
    topic: "heteroskedasticity",
    examRelevance: 4,
    source: "Lecture",
    question: "In R, a common way to obtain heteroskedasticity-robust standard errors for an lm object is to use:",
    options: [
      "summary(model)",
      "vcovHC(model) or coeftest(model, vcov = vcovHC)",
      "anova(model)",
      "resid(model)"
    ],
    answer: 1,
    explanation: "The sandwich / lmtest packages provide vcovHC and coeftest for robust inference."
  },
  {
    id: "boee-mv-09",
    type: "mcq",
    topic: "asymptotics",
    examRelevance: 5,
    source: "Lecture",
    question: "The Central Limit Theorem is useful for OLS because in large samples:",
    options: [
      "The residuals become exactly normal",
      "The sampling distribution of √n(β̂ − β) is approximately normal, justifying normal critical values",
      "β̂ becomes exactly equal to β",
      "Heteroskedasticity disappears"
    ],
    answer: 1,
    explanation: "CLT + consistency give asymptotic normality of the OLS estimator."
  },
  {
    id: "boee-mv-10",
    type: "mcq",
    topic: "asymptotics",
    examRelevance: 4,
    source: "Lecture",
    question: "Consistency of OLS means:",
    options: [
      "E[β̂] = β for every n",
      "plim β̂ = β (the estimator converges in probability to the true value as n → ∞)",
      "Var(β̂) = 0",
      "The residuals are always normal"
    ],
    answer: 1,
    explanation: "Consistency is a large-sample property."
  },
  {
    id: "boee-mv-11",
    type: "mcq",
    topic: "numerical",
    examRelevance: 5,
    source: "Lecture",
    question: "For the sample (x,y) = (2,1), (1,2), (2,2), (3,4), the OLS intercept β̂₀ equals:",
    options: ["0.25", "1", "2.25", "0"],
    answer: 0,
    explanation: "β̂₁ = 1, x̄ = 2, ȳ = 2.25 → β̂₀ = 2.25 − 2 = 0.25."
  },
  {
    id: "boee-mv-12",
    type: "mcq",
    topic: "numerical",
    examRelevance: 4,
    source: "Lecture",
    question: "Using the sample (x,y) = (2,1), (1,2), (2,2), (3,4) and OLS estimates β̂₀=0.25, β̂₁=1, the fitted value for the observation (x=3, y=4) is:",
    options: ["3.25", "4", "2.25", "1"],
    answer: 0,
    explanation: "ŷ = 0.25 + 1×3 = 3.25. Residual = 4 − 3.25 = 0.75."
  },
  {
    id: "boee-mv-13",
    type: "mcq",
    topic: "numerical",
    examRelevance: 4,
    source: "Lecture",
    question: "ŷ = 50 + 2x − 0.05 x². The marginal effect at x = 30 is:",
    options: ["2", "−1", "1", "0.5"],
    answer: 1,
    explanation: "ME = 2 + 2×(−0.05)×30 = 2 − 3 = −1."
  },
  {
    id: "boee-mv-14",
    type: "mcq",
    topic: "interpretation",
    examRelevance: 4,
    source: "Lecture",
    question: "A regression output shows a coefficient of 0.45 with robust standard error 0.12. The t-statistic for H₀: β = 0 is approximately:",
    options: ["0.45", "3.75", "0.12", "3.0"],
    answer: 1,
    explanation: "t = estimate / se = 0.45 / 0.12 = 3.75."
  },
  {
    id: "boee-mv-15",
    type: "truefalse",
    topic: "heteroskedasticity",
    examRelevance: 4,
    source: "Lecture",
    question: "OLS coefficient estimates remain consistent under heteroskedasticity (provided the other usual assumptions hold), but the usual standard errors do not.",
    answer: true,
    explanation: "Consistency of β̂ does not require homoskedasticity; valid inference does."
  }
]);
