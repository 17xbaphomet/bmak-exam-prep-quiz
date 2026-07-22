window.QUESTIONS = (window.QUESTIONS || []).concat([
  // Information criteria
  {
    id: "boee-ts-01",
    type: "mcq",
    topic: "time-series",
    examRelevance: 5,
    source: "PS7 Q1",
    question: "The Bayesian Information Criterion (BIC) for an AR($p$) model is given by:",
    options: [
      "$\\ln(\\mathrm{RSS}(p)/T) + 2(p+1)/T$",
      "$\\ln(\\mathrm{RSS}(p)/T) + \\ln(T)(p+1)/T$",
      "$\\mathrm{RSS}(p)/T + \\ln(T)(p+1)$",
      "$\\ln(\\mathrm{RSS}(p)) + (p+1)/T$"
    ],
    answer: 1,
    explanation: "BIC$(p) = \\ln(\\mathrm{RSS}(p)/T) + \\ln(T)(p+1)/T$. The penalty term grows with $\\ln(T)$."
  },
  {
    id: "boee-ts-02",
    type: "mcq",
    topic: "time-series",
    examRelevance: 5,
    source: "PS7 Q1",
    question: "Compared with the AIC, the BIC:",
    options: [
      "Penalizes additional lags less heavily",
      "Penalizes additional lags more heavily",
      "Always selects the same lag length",
      "Does not depend on sample size"
    ],
    answer: 1,
    explanation: "The BIC multiplies the number of parameters by $\\ln(T)$ while the AIC multiplies by 2. For $T> e^2$ the BIC penalty is larger."
  },
  {
    id: "boee-ts-03",
    type: "mcq",
    topic: "time-series",
    examRelevance: 5,
    source: "PS7 Q1",
    question: "Given $T=172$ and the RSS values for $p=1\\dots6$, the BIC selects which lag order?",
    options: ["$p=3$", "$p=4$", "$p=5$", "$p=6$"],
    answer: 2,
    explanation: "From the calculated BIC values the minimum is at $p=5$ (BIC $\\approx 0.6554$)."
  },
  {
    id: "boee-ts-04",
    type: "mcq",
    topic: "time-series",
    examRelevance: 4,
    source: "PS7 Q1",
    question: "In the same example the AIC also selects:",
    options: ["$p=3$", "$p=4$", "$p=5$", "$p=6$"],
    answer: 2,
    explanation: "AIC is also minimized at $p=5$. The answer does not change, although AIC generally tends to select larger models than BIC."
  },

  // Forecasting
  {
    id: "boee-ts-05",
    type: "mcq",
    topic: "time-series",
    examRelevance: 5,
    source: "PS7 Q2",
    question: "For the estimated AR(2) $\\hat{y}_t = -0.005 + 1.055 y_{t-1} - 0.025 y_{t-2}$ and the interest-rate values $r_{T-3}=4.24$, $r_{T-2}=4.76$, $r_{T-1}=5.22$, $r_T=5.30$, the fitted value $\\hat{y}_T$ is approximately:",
    options: ["0.467", "0.080", "0.068", "-0.387"],
    answer: 0,
    explanation: "$y_{T-1}=5.22-4.76=0.46$, $y_{T-2}=4.76-4.24=0.52$. $\\hat{y}_T = -0.005 + 1.055\\times0.46 - 0.025\\times0.52 \\approx 0.467$."
  },
  {
    id: "boee-ts-06",
    type: "mcq",
    topic: "time-series",
    examRelevance: 5,
    source: "PS7 Q2",
    question: "Using the same AR(2) and data, the one-step-ahead mean forecast $\\hat{y}_{T+1}$ is approximately:",
    options: ["0.467", "0.068", "0.065", "0.032"],
    answer: 1,
    explanation: "$y_T = 5.30-5.22=0.08$, $y_{T-1}=0.46$. $\\hat{y}_{T+1} = -0.005 + 1.055\\times0.08 - 0.025\\times0.46 \\approx 0.068$."
  },
  {
    id: "boee-ts-07",
    type: "mcq",
    topic: "time-series",
    examRelevance: 5,
    source: "PS7 Q2",
    question: "Given $r_{T+1}=5.40$, the forecast error $\\hat{e}_{T+1}$ is approximately:",
    options: ["0.068", "0.032", "-0.387", "0.100"],
    answer: 1,
    explanation: "$y_{T+1}=5.40-5.30=0.10$. Forecast error $= 0.10 - 0.068 \\approx 0.032$."
  },
  {
    id: "boee-ts-08",
    type: "mcq",
    topic: "time-series",
    examRelevance: 4,
    source: "PS7 Q2b",
    question: "In a stationary AR(1) $y_t = \\beta_0 + \\beta_1 y_{t-1} + e_t$ with $e_t$ IID, the two-step-ahead mean forecast $\\hat{y}_{T+2}$ equals:",
    options: [
      "$\\beta_0 + \\beta_1 y_T$",
      "$\\beta_0 + \\beta_1 \\hat{y}_{T+1} = \\beta_0(1+\\beta_1) + \\beta_1^2 y_T$",
      "$\\beta_0 + \\beta_1^2 y_T$",
      "$y_T$"
    ],
    answer: 1,
    explanation: "Iterate the conditional expectation: $\\hat{y}_{T+2} = \\beta_0 + \\beta_1 \\hat{y}_{T+1}$."
  },
  {
    id: "boee-ts-09",
    type: "mcq",
    topic: "time-series",
    examRelevance: 4,
    source: "PS7 Q2b",
    question: "In the same AR(1), the conditional forecast-error variance for the two-step-ahead forecast is:",
    options: [
      "$\\sigma^2$",
      "$(\\beta_1^2 + 1)\\sigma^2$",
      "$\\beta_1^2 \\sigma^2$",
      "$2\\sigma^2$"
    ],
    answer: 1,
    explanation: "The two-step error is $\\beta_1 e_{T+1} + e_{T+2}$, whose variance is $(\\beta_1^2+1)\\sigma^2$."
  },
  {
    id: "boee-ts-10",
    type: "mcq",
    topic: "time-series",
    examRelevance: 4,
    source: "PS7",
    question: "The general $h$-step-ahead mean forecast for a stationary AR(1) can be written as:",
    options: [
      "$\\beta_0 + \\beta_1^h y_T$",
      "$\\beta_0 \\sum_{j=0}^{h-1} \\beta_1^j + \\beta_1^h y_T$",
      "$\\beta_1^h y_T$",
      "$y_T$"
    ],
    answer: 1,
    explanation: "Iterating the conditional expectation yields the geometric sum for the intercept plus the decaying influence of the last observation."
  },
  {
    id: "boee-ts-11",
    type: "truefalse",
    topic: "time-series",
    examRelevance: 3,
    source: "PS7",
    question: "The BIC generally selects a more parsimonious (smaller) lag order than the AIC.",
    answer: true,
    explanation: "Because the BIC penalty grows with $\\ln(T)$, it tends to prefer simpler models."
  },
  {
    id: "boee-ts-12",
    type: "mcq",
    topic: "time-series",
    examRelevance: 3,
    source: "PS7",
    question: "In an AR($p$) model the number of parameters that appears in the AIC/BIC penalty is:",
    options: ["$p$", "$p+1$ (intercept + $p$ slopes)", "$2p$", "$T$"],
    answer: 1,
    explanation: "There are $p$ autoregressive coefficients plus the intercept, hence $p+1$ parameters."
  }
]);
