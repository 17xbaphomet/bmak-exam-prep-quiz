window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "pm-bin-01",
    type: "mcq",
    topic: "binary",
    examRelevance: 5,
    source: "Lecture 7–8",
    question: "In logistic regression the linear predictor $X'\\beta$ models",
    options: [
      "The probability $P(Y=1 \\mid X)$ directly",
      "The log-odds $\\log\\bigl(P(Y=1 \\mid X)/(1-P(Y=1 \\mid X))\\bigr)$",
      "The density of $Y$",
      "The quantile function of $Y$"
    ],
    answer: 1,
    explanation: "The logistic (sigmoid) transformation converts the unbounded linear predictor into a probability; the linear predictor itself equals the log-odds."
  },
  {
    id: "pm-bin-02",
    type: "mcq",
    topic: "binary",
    examRelevance: 5,
    source: "Lecture 9 / Mock Q1a",
    question: "A classifier with a 5 % misclassification rate",
    options: [
      "Is always excellent",
      "Must be compared with the base rate; if 95 % of observations belong to one class a naïve majority classifier also achieves 5 % error",
      "Dominates any probability forecast",
      "Implies that the ROC curve lies on the diagonal"
    ],
    answer: 1,
    explanation: "Absolute error rates are meaningless without a benchmark. A trivial classifier that always predicts the majority class can look deceptively good when the classes are unbalanced."
  },
  {
    id: "pm-bin-03",
    type: "mcq",
    topic: "binary",
    examRelevance: 4,
    source: "Lecture 9",
    question: "An ROC curve plots",
    options: [
      "Predicted probability against realised outcome",
      "Hit rate (true-positive rate) against false-alarm rate for varying thresholds",
      "MSE against model complexity",
      "Calibration intercept against slope"
    ],
    answer: 1,
    explanation: "For each possible threshold $z$ one computes $\\mathrm{HR}(z) = P(\\hat{Y} > z \\mid Y=1)$ and $\\mathrm{FAR}(z) = P(\\hat{Y} > z \\mid Y=0)$. The ROC is the plot of HR versus FAR."
  },
  {
    id: "pm-bin-04",
    type: "mcq",
    topic: "binary",
    examRelevance: 4,
    source: "Lecture 8",
    question: "Variable selection and shrinkage (Lasso, Ridge, Elastic Net) can be applied to logistic regression via",
    options: [
      "Only best-subset search",
      "The glmnet package (and similar penalised-likelihood methods)",
      "Ordinary lm with a binary dependent variable",
      "They cannot be used for binary outcomes"
    ],
    answer: 1,
    explanation: "glmnet implements L1/L2-penalised generalised linear models, including logistic regression, and selects $\\lambda$ by cross-validation."
  },
  {
    id: "pm-bin-05",
    type: "truefalse",
    topic: "binary",
    examRelevance: 5,
    source: "Lecture 7 / Mock Q1e",
    question: "Because a binary outcome satisfies $\\mathbb{E}[Y \\mid X] = P(Y=1 \\mid X)$, any method developed for conditional-mean prediction can be used to produce probability forecasts.",
    answer: true,
    explanation: "This equivalence is the reason the same loss functions (Brier = MSE), the same auto-calibration concept, and many of the same algorithms apply directly to binary probability prediction."
  },
  {
    id: "pm-bin-06",
    type: "mcq",
    topic: "evaluation",
    examRelevance: 4,
    source: "Lecture 6",
    question: "Absolute evaluation of a forecast asks",
    options: [
      "Whether forecast A is better than forecast B",
      "Whether a given forecast satisfies desirable properties (e.g. auto-calibration)",
      "Only the value of the MSE",
      "Whether the model was estimated by maximum likelihood"
    ],
    answer: 1,
    explanation: "Absolute evaluation checks intrinsic properties of one forecast (calibration, sharpness, \\ldots). Relative evaluation compares two or more forecasts via a loss function."
  },
  {
    id: "pm-bin-07",
    type: "mcq",
    topic: "evaluation",
    examRelevance: 4,
    source: "Lecture 6 / PS4",
    question: "Diebold-Mariano tests are used to",
    options: [
      "Test auto-calibration of a single forecast",
      "Compare the predictive accuracy of two competing forecasts under a chosen loss function",
      "Select the penalty parameter $\\lambda$",
      "Decide the optimal tree size"
    ],
    answer: 1,
    explanation: "The DM test assesses whether the average loss differential between two forecasts is significantly different from zero."
  },
  {
    id: "pm-bin-08",
    type: "mcq",
    topic: "scoring",
    examRelevance: 4,
    source: "PS4",
    question: "Murphy diagrams visualise",
    options: [
      "The ROC curve for every possible threshold",
      "The expected score of competing forecasts as a function of a parameter that indexes a family of elementary scoring functions (useful for comparing forecasts across a whole class of consistent losses)",
      "Only the MSE of each forecast",
      "The distribution of residuals"
    ],
    answer: 1,
    explanation: "A Murphy diagram plots expected scores against a continuum of elementary scoring functions, allowing a comprehensive comparison that is not tied to a single loss."
  },
  {
    id: "pm-bin-09",
    type: "mcq",
    topic: "mock",
    examRelevance: 5,
    source: "Mock Exam Q1c",
    question: "“Bagging helps to improve the predictive performance of regression trees, but is less helpful when applied to the sample mean.” Do you agree?",
    options: [
      "Disagree – bagging always helps",
      "Agree – bagging reduces variance of unstable high-variance methods; the sample mean is already stable so bagging it yields almost no gain",
      "Agree only for classification trees",
      "Disagree because the sample mean has high variance"
    ],
    answer: 1,
    explanation: "Bagging is most useful for high-variance base learners. The sample mean is a low-variance estimator; averaging bootstrap means changes almost nothing."
  },
  {
    id: "pm-bin-10",
    type: "mcq",
    topic: "mock",
    examRelevance: 5,
    source: "Mock Exam Q1b",
    question: "“Nonparametric prediction methods can be expected to always outperform parametric ones since the latter impose restrictive assumptions.” Do you agree?",
    options: [
      "Agree – flexibility always wins",
      "Disagree – nonparametric methods suffer from the curse of dimensionality and can perform poorly in small samples or high dimensions; a correctly specified parametric model is often better",
      "Agree only when $n$ is very large",
      "Disagree because parametric methods never overfit"
    ],
    answer: 1,
    explanation: "Nonparametric estimators are highly flexible but pay a heavy price in variance when the sample is modest or the number of covariates is large."
  }
]);
