window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "pm-eval-01",
    type: "mcq",
    topic: "calibration",
    examRelevance: 5,
    source: "Lecture 6 / Mock Q3",
    question: "A forecast $\\hat{Y}$ is auto-calibrated if",
    options: [
      "$\\mathbb{E}[Y] = \\mathbb{E}[\\hat{Y}]$",
      "$\\mathbb{E}[Y \\mid \\hat{Y}] = \\hat{Y}$",
      "$\\mathrm{Corr}(Y, \\hat{Y}) = 1$",
      "$\\mathrm{Var}(Y - \\hat{Y}) = 0$"
    ],
    answer: 1,
    explanation: "Auto-calibration means that, conditional on the value of the forecast, the average realisation equals that forecast value. The forecast can be used as-is."
  },
  {
    id: "pm-eval-02",
    type: "mcq",
    topic: "calibration",
    examRelevance: 5,
    source: "Mock Exam Problem 3",
    question: "In the toy model $Y = \\alpha + X + \\varepsilon_Y$, $\\hat{Y} = \\delta X + \\eta \\varepsilon_{\\hat{Y}}$ (all independent standard normals), auto-calibration holds when",
    options: [
      "$\\alpha = 0$ and $\\eta^2 = \\delta - \\delta^2$ (with $\\delta \\in [0,1]$)",
      "$\\alpha = 1$ and $\\eta = 0$",
      "$\\delta = 1$ and $\\eta$ arbitrary",
      "$\\alpha = 0$ and $\\delta = 1$"
    ],
    answer: 0,
    explanation: "From the population MZ regression one obtains $\\mathbb{E}[Y \\mid \\hat{Y}] = \\alpha + (\\delta/(\\delta^2+\\eta^2)) \\hat{Y}$. Setting the intercept to 0 and the slope to 1 yields the stated conditions."
  },
  {
    id: "pm-eval-03",
    type: "mcq",
    topic: "calibration",
    examRelevance: 5,
    source: "Mock Exam Problem 3c",
    question: "Why can an auto-calibrated forecast have a higher MSE than an uncalibrated one?",
    options: [
      "Auto-calibration always minimises MSE",
      "Enforcing the calibration constraint can force a larger variance component ($\\eta^2 > 0$) that outweighs any bias reduction",
      "Only when the sample is small",
      "Because MSE ignores bias"
    ],
    answer: 1,
    explanation: "In the numerical example $\\alpha=0$, $\\delta=0.5$ the calibrated $\\eta^2=0.25$ yields MSE=1.5 while the uncalibrated $\\eta=0$ yields MSE=1.25. Calibration is not the same as MSE-optimality."
  },
  {
    id: "pm-eval-04",
    type: "mcq",
    topic: "scoring",
    examRelevance: 5,
    source: "Mock Exam Problem 4a",
    question: "For a continuous outcome evaluated with squared-error loss $S(\\hat{y},y)=(y-\\hat{y})^2$ the optimal point forecast is",
    options: [
      "The median of $Y$",
      "The mean of $Y$",
      "The mode of $Y$",
      "Any quantile of $Y$"
    ],
    answer: 1,
    explanation: "Squared error is strictly consistent for the mean. For $Y \\sim U(0,5)$ the optimum is 2.5."
  },
  {
    id: "pm-eval-05",
    type: "mcq",
    topic: "scoring",
    examRelevance: 5,
    source: "Mock Exam Problem 4b",
    question: "The pinball loss with $\\tau = 0.4$ is minimised by",
    options: [
      "The mean of $Y$",
      "The 0.4-quantile of $Y$",
      "The median of $Y$",
      "The mode of $Y$"
    ],
    answer: 1,
    explanation: "Pinball loss is strictly consistent for the $\\tau$-quantile. For Uniform(0,5) the 40 % quantile equals 2.0."
  },
  {
    id: "pm-eval-06",
    type: "mcq",
    topic: "scoring",
    examRelevance: 5,
    source: "Mock Exam Problem 4c",
    question: "When the scoring function is $|\\exp(y) - \\exp(\\hat{y})|$ the optimal $\\hat{y}$ is",
    options: [
      "$\\mathbb{E}[Y]$",
      "the median of $Y$ (because the exponential is strictly monotone and preserves quantiles)",
      "$\\mathbb{E}[\\exp(Y)]$",
      "the mode of $\\exp(Y)$"
    ],
    answer: 1,
    explanation: "Absolute error is minimised by the median. Because $\\exp$ is strictly increasing, the median of $\\exp(Y)$ is $\\exp$ of the median of $Y$, so the optimal report on the original scale is the median of $Y$."
  },
  {
    id: "pm-eval-07",
    type: "mcq",
    topic: "scoring",
    examRelevance: 5,
    source: "Mock Exam Problem 4d",
    question: "Under the logarithmic scoring rule $\\mathrm{LogS}(\\hat{f}, y) = \\log \\hat{f}(y)$ the optimal density forecast is",
    options: [
      "Any density with the correct mean",
      "The true density of $Y$",
      "A normal density with the same mean and variance",
      "A uniform density on the observed range"
    ],
    answer: 1,
    explanation: "The log score is strictly proper; its expected value is uniquely maximised by the true probability density."
  },
  {
    id: "pm-eval-08",
    type: "mcq",
    topic: "scoring",
    examRelevance: 5,
    source: "PS4 / Lecture 6",
    question: "Members of the Bregman class of loss functions are",
    options: [
      "Consistent for quantiles",
      "Strictly consistent for the mean",
      "Proper only for binary outcomes",
      "Inconsistent for any functional"
    ],
    answer: 1,
    explanation: "Every Bregman loss is strictly consistent for the mean; squared error is the best-known member of the class."
  },
  {
    id: "pm-eval-09",
    type: "mcq",
    topic: "scoring",
    examRelevance: 4,
    source: "Mock Exam Problem 4e",
    question: "For a binary event $D = 1\\{Y > 0\\}$ evaluated with the Brier score, the optimal probability forecast when $Y \\sim U(0,5)$ is",
    options: [
      "0.5",
      "1",
      "0",
      "2.5"
    ],
    answer: 1,
    explanation: "$P(Y > 0) = 1$ for a continuous uniform on (0,5). The Brier score is strictly proper for the true probability."
  },
  {
    id: "pm-eval-10",
    type: "truefalse",
    topic: "scoring",
    examRelevance: 4,
    source: "Lecture 6",
    question: "A scoring rule is called strictly proper if the expected score is uniquely optimised by reporting the true distribution (or the true functional).",
    answer: true,
    explanation: "Properness guarantees that a forecaster has no incentive to report anything other than her true beliefs; strict properness makes the truth the unique optimum."
  }
]);
