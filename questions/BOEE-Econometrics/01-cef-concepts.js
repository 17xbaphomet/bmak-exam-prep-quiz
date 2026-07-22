window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "boee-cef-01",
    type: "mcq",
    topic: "cef",
    examRelevance: 5,
    source: "Lecture – Conditional Expectations",
    question: "Why are economists particularly interested in the Conditional Expectation Function $E[y_i \\mid x_i]?$",
    options: [
      "Because it always gives causal effects without further assumptions",
      "Because many policy and treatment questions concern average differences across groups or characteristics",
      "Because the median is harder to compute",
      "Because variance is more important than the mean"
    ],
    answer: 1,
    explanation: "Most interesting questions (gender pay gap, average treatment effects, policy evaluation) are about differences in average outcomes conditional on covariates."
  },
  {
    id: "boee-cef-02",
    type: "mcq",
    topic: "cef",
    examRelevance: 5,
    source: "Lecture",
    question: "What is the key assumption that makes the linear CEF the best linear predictor of $y$?",
    options: [
      "The errors are normally distributed",
      "$E[e_i \\mid x_i] = 0$ (exogeneity / mean independence)",
      "There is no multicollinearity",
      "The sample size is large"
    ],
    answer: 1,
    explanation: "$E[e \\mid x] = 0$ implies that the linear function of $x$ minimises expected squared prediction error among all linear predictors."
  },
  {
    id: "boee-cef-03",
    type: "mcq",
    topic: "cef",
    examRelevance: 5,
    source: "Lecture – LIE",
    question: "The Law of Iterated Expectations states that:",
    options: [
      "$E[Y] = E[E[Y \\mid X]]$",
      "$E[Y \\mid X] = E[Y]$",
      "$\\mathrm{Var}(Y) = E[\\mathrm{Var}(Y \\mid X)]$",
      "$\\mathrm{Cov}(X,Y) = E[X]E[Y]$"
    ],
    answer: 0,
    explanation: "The overall average is the average of the conditional averages. This is used constantly to prove properties of the error term."
  },
  {
    id: "boee-cef-04",
    type: "mcq",
    topic: "cef",
    examRelevance: 5,
    source: "Lecture",
    question: "If $E[e \\mid x] = 0$, which of the following must also be true?",
    options: [
      "Only $E[e] = 0$",
      "Only $\\mathrm{Cov}(x,e) = 0$",
      "Both $E[e] = 0$ and $\\mathrm{Cov}(x,e) = 0$",
      "The errors must be homoskedastic"
    ],
    answer: 2,
    explanation: "By LIE: $E[e] = E[E[e \\mid x]] = 0$ and $E[xe] = E[x E[e \\mid x]] = 0$, so the covariance is zero."
  },
  {
    id: "boee-cef-05",
    type: "mcq",
    topic: "sampling",
    examRelevance: 5,
    source: "Lecture – Sampling Distribution",
    question: "Why do we treat the OLS estimator $\\hat{\\beta}$ as a random variable even though in any application we obtain a single number?",
    options: [
      "Because the true $\\beta$ is random",
      "Because different random samples from the population produce different estimates (sampling uncertainty)",
      "Because computers introduce randomness",
      "Because the residuals are random by definition"
    ],
    answer: 1,
    explanation: "A realised sample of size $n$ is only one possible draw. Different draws yield different $\\hat{\\beta}$. This is why we need standard errors, tests and confidence intervals."
  },
  {
    id: "boee-cef-06",
    type: "mcq",
    topic: "properties",
    examRelevance: 5,
    source: "Lecture",
    question: "Unbiasedness of an estimator means:",
    options: [
      "In every sample the estimate equals the true parameter",
      "If we could repeat the sampling process many times, the average of the estimates would equal the true parameter",
      "As $n \\to \\infty$ the estimator converges in probability to the true parameter",
      "The variance of the estimator is zero"
    ],
    answer: 1,
    explanation: "Unbiasedness is the finite-sample property $E[\\hat{\\beta}] = \\beta$. It does not require that any particular sample recovers the true value exactly."
  },
  {
    id: "boee-cef-07",
    type: "mcq",
    topic: "properties",
    examRelevance: 5,
    source: "Lecture / Mock Exam",
    question: "Consistency is different from unbiasedness because:",
    options: [
      "They are exactly the same property",
      "Consistency is about behaviour as $n \\to \\infty$ (plim), while unbiasedness is about the expectation for fixed $n$",
      "Consistency only holds under normality",
      "Unbiasedness requires large $n$"
    ],
    answer: 1,
    explanation: "An estimator can be biased for finite $n$ yet still consistent (the bias vanishes as the sample grows)."
  },
  {
    id: "boee-cef-08",
    type: "mcq",
    topic: "properties",
    examRelevance: 5,
    source: "Mock Exam / Lecture",
    question: "Classical measurement error in the regressor $x$ (you observe a noisy version of the true $x$) typically causes the OLS coefficient to be:",
    options: [
      "Biased away from zero",
      "Biased toward zero (attenuation bias)",
      "Unbiased but with larger standard errors only",
      "Inconsistent in an unknown direction"
    ],
    answer: 1,
    explanation: "Classical measurement error in the explanatory variable attenuates the estimated coefficient toward zero."
  },
  {
    id: "boee-cef-09",
    type: "mcq",
    topic: "cef",
    examRelevance: 4,
    source: "Lecture",
    question: "A researcher finds that the residuals from a wage regression are strongly correlated with years of education. This most directly suggests:",
    options: [
      "The model is correctly specified",
      "$E[e \\mid \\text{education}] \\neq 0$ (exogeneity is violated)",
      "The sample size is too small",
      "Perfect multicollinearity"
    ],
    answer: 1,
    explanation: "Correlation between residuals and a regressor is evidence that the conditional mean of the error is not zero."
  },
  {
    id: "boee-cef-10",
    type: "truefalse",
    topic: "properties",
    examRelevance: 4,
    source: "Lecture",
    question: "If the linear CEF is the true CEF and $E[e \\mid x] = 0$, then OLS is the best linear predictor of $y$ given $x$.",
    answer: true,
    explanation: "Under mean independence the linear CEF minimises expected squared error among all linear functions of $x$."
  },
  {
    id: "boee-cef-11",
    type: "mcq",
    topic: "sampling",
    examRelevance: 4,
    source: "Lecture",
    question: "The finite sampling distribution of the OLS estimator is important because it:",
    options: [
      "Tells us the true value of $\\beta$",
      "Allows us to quantify uncertainty and construct tests and confidence intervals",
      "Guarantees that $R^2$ is high",
      "Makes the residuals normally distributed"
    ],
    answer: 1,
    explanation: "Knowing (or approximating) the sampling distribution is the foundation of statistical inference."
  },
  {
    id: "boee-cef-12",
    type: "mcq",
    topic: "properties",
    examRelevance: 4,
    source: "Lecture",
    question: "Which statement is correct?",
    options: [
      "OLS and linear regression are exactly the same thing",
      "OLS is the most common method used to estimate the coefficients of a linear regression model",
      "A linear regression can only be estimated by OLS",
      "OLS requires normally distributed errors for consistency"
    ],
    answer: 1,
    explanation: "Linear regression is the model; OLS is the estimation method that minimises the sum of squared residuals."
  }
]);
