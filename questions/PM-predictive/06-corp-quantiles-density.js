window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "pm-corp-01",
    type: "mcq",
    topic: "corp",
    examRelevance: 5,
    source: "PS5 Problem 1",
    question: "An auto-calibrated probability forecast $Z \\sim U[0,1]$ satisfies $P(Y=1 \\mid Z=z)=z$. The conditional CDF of $Z$ given $Y=1$ is",
    options: [
      "$F_1(z) = z$",
      "$F_1(z) = z^2$",
      "$F_1(z) = 2z(1-z/2)$",
      "$F_1(z) = 1-z$"
    ],
    answer: 1,
    explanation: "By Bayes and the law of total probability: $P(Y=1)=1/2$ and $P(Y=1 \\mid Z \\le z)=z/2$, so $F_1(z)=P(Z \\le z \\mid Y=1)=z^2$. The density is $f_1(z)=2z$."
  },
  {
    id: "pm-corp-02",
    type: "mcq",
    topic: "corp",
    examRelevance: 5,
    source: "PS5 Problem 1",
    question: "Under the same auto-calibrated uniform forecast, the conditional density of $Z$ given $Y=0$ is",
    options: [
      "$f_0(z)=2z$",
      "$f_0(z)=1$",
      "$f_0(z)=2(1-z)$",
      "$f_0(z)=z(1-z)$"
    ],
    answer: 2,
    explanation: "$F_0(z)=2z(1-z/2)$ and differentiating yields $f_0(z)=2(1-z)$ on $[0,1]$."
  },
  {
    id: "pm-corp-03",
    type: "mcq",
    topic: "corp",
    examRelevance: 5,
    source: "PS5 Problem 2",
    question: "In the CORP decomposition of the average Brier score $\\bar{S}=\\mathrm{MCB}-\\mathrm{DSC}+\\mathrm{UNC}$, the Uncertainty component",
    options: [
      "Depends on how well the forecasts are calibrated",
      "Depends only on the variance of the binary outcomes $Y$ and is independent of the forecasts",
      "Measures the ability to separate events from non-events",
      "Is always zero for balanced data"
    ],
    answer: 1,
    explanation: "UNC is the irreducible difficulty of the problem (essentially $\\mathrm{Var}(Y)$). MCB and DSC depend on the forecasts; UNC does not."
  },
  {
    id: "pm-corp-04",
    type: "mcq",
    topic: "corp",
    examRelevance: 5,
    source: "PS5 Problem 2",
    question: "Two models achieve the same average Brier score, but Model A has a strictly lower MCB than Model B. Then",
    options: [
      "Model A necessarily has higher discrimination (DSC)",
      "Model A necessarily has lower discrimination (DSC)",
      "DSC must be identical",
      "UNC must differ"
    ],
    answer: 1,
    explanation: "From $\\bar{S}=\\mathrm{MCB}-\\mathrm{DSC}+\\mathrm{UNC}$ with identical $\\bar{S}$ and UNC, a lower MCB forces a lower DSC to keep the equality. Better calibration is offset by worse discrimination."
  },
  {
    id: "pm-corp-05",
    type: "mcq",
    topic: "scoring",
    examRelevance: 5,
    source: "PS5 Problem 3",
    question: "Any consistent binary scoring function can be written as an integral of elementary scores $S_\\theta(p,y)$ against a measure $H$. With the uniform weight $dH(\\theta)=2\\,d\\theta$ the integrated score equals",
    options: [
      "The log score",
      "The Brier score $(y-p)^2$",
      "The absolute-error score",
      "The pinball loss at $\\tau=1/2$"
    ],
    answer: 1,
    explanation: "Direct integration: for $y=1$ one obtains $(1-p)^2$; for $y=0$ one obtains $p^2$; together $S(p,y)=(y-p)^2$."
  },
  {
    id: "pm-corp-06",
    type: "truefalse",
    topic: "binary",
    examRelevance: 5,
    source: "PS5 Problem 7 / Lecture 9",
    question: "A strictly monotonic transformation of probability forecasts (e.g. $p \\mapsto p/2$) leaves the ROC curve and AUC unchanged but alters calibration (raises MCB while leaving DSC unchanged under CORP).",
    answer: true,
    explanation: "ROC/AUC depend only on ranking. Isotonic recalibration maps any strictly monotone transform back to the same conditional expectations, so DSC is invariant and the whole score difference appears in MCB."
  },
  {
    id: "pm-corp-07",
    type: "mcq",
    topic: "scoring",
    examRelevance: 4,
    source: "PS5 Problem 6",
    question: "In a Murphy diagram, forecast A is strictly superior to forecast B across all consistent scoring rules if",
    options: [
      "Its Brier score is lower",
      "Its curve lies entirely below the curve of B",
      "Its AUC is higher",
      "Its MCB is lower"
    ],
    answer: 1,
    explanation: "The Murphy diagram plots expected elementary scores against $\\theta$. Dominance for every elementary score implies dominance for every consistent scoring rule."
  },
  {
    id: "pm-corp-08",
    type: "mcq",
    topic: "corp",
    examRelevance: 4,
    source: "PS5 Solution 2",
    question: "In the CORP framework, Discrimination (DSC) quantifies",
    options: [
      "How far the reliability diagram lies from the diagonal",
      "How much a perfectly calibrated version of the forecast improves upon a na\"ive constant forecast",
      "The variance of $Y$ alone",
      "The average log-score"
    ],
    answer: 1,
    explanation: "DSC measures the ability of the forecasts to separate events from non-events relative to the climatological (constant) forecast, after perfect recalibration."
  },
  {
    id: "pm-qtl-01",
    type: "mcq",
    topic: "quantiles",
    examRelevance: 5,
    source: "PS6 Problem 1",
    question: "For the Thomson family $L(\\hat{y},y)=\\{1(y<\\hat{y})-\\tau\\}\{g(\\hat{y})-g(y)\\}$ to be strictly consistent for the $\\tau$-quantile, a sufficient condition on $g$ is",
    options: [
      "$g$ is any continuous function",
      "$g$ is strictly increasing with $g'>0$ everywhere",
      "$g$ is strictly decreasing",
      "$g$ is quadratic"
    ],
    answer: 1,
    explanation: "The FOC of expected loss is $g'(\\hat{y})(F(\\hat{y})-\\tau)=0$. Strict positivity of $g'$ forces the unique root $\\hat{y}=F^{-1}(\\tau)$ and the SOC is satisfied."
  },
  {
    id: "pm-qtl-02",
    type: "mcq",
    topic: "quantiles",
    examRelevance: 5,
    source: "PS6 Problem 1 / Lecture 10",
    question: "Setting $g(\\hat{y})=\\hat{y}$ in the Thomson family recovers",
    options: [
      "Squared-error loss",
      "The standard pinball / tick loss for the $\\tau$-quantile",
      "Absolute-error loss for the mean",
      "The Brier score"
    ],
    answer: 1,
    explanation: "$L(\\hat{y},y)=\\{1(y<\\hat{y})-\\tau\\}(\\hat{y}-y)$ is exactly the classic tick (pinball) loss."
  },
  {
    id: "pm-qtl-03",
    type: "mcq",
    topic: "quantiles",
    examRelevance: 4,
    source: "PS6 Problem 2",
    question: "Unconditional coverage of a $\\tau$-quantile forecast $\\hat{q}$ is the empirical frequency",
    options: [
      "$\\frac{1}{n}\\sum 1(y_i \\le \\hat{q}_i)$ and should be close to $\\tau$",
      "$\\frac{1}{n}\\sum (y_i - \\hat{q}_i)^2$",
      "The average pinball loss",
      "The intercept of the Mincer-Zarnowitz regression"
    ],
    answer: 0,
    explanation: "For a correctly specified $\\tau$-quantile, $P(Y \\le \\hat{q})=\\tau$, so the empirical coverage should be approximately $\\tau$."
  },
  {
    id: "pm-qtl-04",
    type: "mcq",
    topic: "quantiles",
    examRelevance: 4,
    source: "PS6 Problem 2",
    question: "A quantile-specific Mincer-Zarnowitz test regresses the realisation on the quantile forecast at level $\\tau$ and checks",
    options: [
      "Whether the OLS slope equals 1",
      "Whether the quantile-regression intercept is 0 and slope is 1 (joint Wald test)",
      "Whether the residual variance is constant",
      "Whether the mean of the residuals is zero only"
    ],
    answer: 1,
    explanation: "One fits $Y$ on $\\hat{q}$ by quantile regression at the same $\\tau$ and tests the joint hypothesis $(a,b)=(0,1)$."
  },
  {
    id: "pm-dens-01",
    type: "mcq",
    topic: "density",
    examRelevance: 5,
    source: "PS6 / Lecture 12",
    question: "The Probability Integral Transform (PIT) of a continuous outcome $Y$ under a predictive CDF $F$ is $Z=F(Y)$. Under a correctly specified continuous predictive distribution the PIT is",
    options: [
      "Standard normal",
      "Uniform on $[0,1]$",
      "Concentrated at 0.5",
      "Beta(2,2)"
    ],
    answer: 1,
    explanation: "If $F$ is the true continuous CDF of $Y$, then $F(Y)\\sim U[0,1]$. Histograms of the PIT diagnose probabilistic calibration."
  },
  {
    id: "pm-dens-02",
    type: "mcq",
    topic: "density",
    examRelevance: 4,
    source: "PS6 Problem 4",
    question: "A predictive distribution is under-dispersed relative to the true distribution when the variance of its PIT values is",
    options: [
      "Equal to $1/12$ (the uniform variance)",
      "Larger than $1/12$",
      "Smaller than $1/12$",
      "Exactly zero"
    ],
    answer: 1,
    explanation: "Under-dispersion produces a U-shaped PIT histogram (too many extreme PITs) and therefore $\\mathrm{Var}(\\mathrm{PIT})>1/12$. Over-dispersion produces a hump-shaped PIT and smaller variance."
  },
  {
    id: "pm-dens-03",
    type: "mcq",
    topic: "density",
    examRelevance: 4,
    source: "PS6 Problem 4 / Lecture 12",
    question: "The sharpness principle states that, among probabilistically calibrated forecasts, one should prefer the forecast that is",
    options: [
      "Most dispersed",
      "Sharpest (most concentrated / narrowest prediction intervals)",
      "Closest to the unconditional distribution",
      "Always the Gaussian one"
    ],
    answer: 1,
    explanation: "Sharpness is only a meaningful ranking criterion once probabilistic calibration has been established. Among calibrated forecasts the sharpest is preferred."
  },
  {
    id: "pm-dens-04",
    type: "mcq",
    topic: "scoring",
    examRelevance: 5,
    source: "PS6 Problem 4",
    question: "The Continuous Ranked Probability Score (CRPS) is",
    options: [
      "Only defined for binary outcomes",
      "A strictly proper scoring rule for the full predictive distribution; it reduces to absolute error when the forecast is a point mass",
      "Identical to the Brier score for continuous outcomes",
      "Inconsistent for the mean"
    ],
    answer: 1,
    explanation: "CRPS is the integral of the Brier score of the induced threshold probabilities. It is strictly proper for the predictive CDF."
  },
  {
    id: "pm-dens-05",
    type: "truefalse",
    topic: "density",
    examRelevance: 4,
    source: "PS6 Problem 3",
    question: "Conditional density forecasts can be obtained either by parametric maximum-likelihood (e.g. Gaussian linear regression) or by nonparametric kernel conditional-density estimation.",
    answer: true,
    explanation: "PS6 uses both a Gaussian ML approach (lm + residual sd) and the hdrcde::cde kernel estimator; the resulting densities are plotted against the realised outcome."
  }
]);
