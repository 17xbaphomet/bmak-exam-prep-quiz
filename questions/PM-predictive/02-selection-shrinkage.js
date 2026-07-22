window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "pm-sel-01",
    type: "mcq",
    topic: "selection",
    examRelevance: 5,
    source: "Lecture 3 / PS2",
    question: "Why is variable selection often necessary in predictive modelling?",
    options: [
      "Because the OLS estimator is always biased when $p$ is large",
      "To reduce variance of predictions by eliminating uninformative predictors and to improve interpretability",
      "Because computers cannot handle more than 10 predictors",
      "Because the CEF is always linear"
    ],
    answer: 1,
    explanation: "Many predictors may be noise; including them inflates variance. Selection also aids interpretation by highlighting the most relevant variables."
  },
  {
    id: "pm-sel-02",
    type: "mcq",
    topic: "selection",
    examRelevance: 5,
    source: "Lecture 3",
    question: "Best-subset selection evaluates all possible models of each size $k$. Forward stepwise selection:",
    options: [
      "Also evaluates all $2^p$ models",
      "Starts with the null model and greedily adds the predictor that most improves the criterion at each step",
      "Starts with the full model and deletes predictors",
      "Only works for $p \\le 5$"
    ],
    answer: 1,
    explanation: "Forward stepwise is a greedy sequential algorithm that is computationally feasible for larger $p$ but does not guarantee the global best subset."
  },
  {
    id: "pm-sel-03",
    type: "mcq",
    topic: "shrinkage",
    examRelevance: 5,
    source: "Lecture 4 / Mock Exam Q5",
    question: "The closed-form Ridge estimator (no intercept) is:",
    options: [
      "$\\hat{\\beta}^{\\text{Ridge}} = (X^\\top X)^{-1} X^\\top y$",
      "$\\hat{\\beta}^{\\text{Ridge}} = (X^\\top X + \\lambda I_p)^{-1} X^\\top y$",
      "$\\hat{\\beta}^{\\text{Ridge}} = X^\\top (XX^\\top + \\lambda I)^{-1} y$",
      "$\\hat{\\beta}^{\\text{Ridge}} = \\arg\\min_\\beta \\|y - X\\beta\|_1 + \\lambda \\|\\beta\|_2^2$"
    ],
    answer: 1,
    explanation: "Ridge adds the $\\ell_2$ penalty $\\lambda \\|\\beta\|_2^2$, which yields the closed form $(X^\\top X + \\lambda I)^{-1} X^\\top y$."
  },
  {
    id: "pm-sel-04",
    type: "mcq",
    topic: "shrinkage",
    examRelevance: 5,
    source: "Mock Exam Problem 5",
    question: "Ridge regression can be obtained by ordinary least squares on an augmented data set in which we append $\\sqrt{\\lambda} I_p$ rows to $X$ and zeros to $y$. Why does this work?",
    options: [
      "Because the extra rows force all coefficients to zero",
      "Because $\\bar{X}^\\top \\bar{X} = X^\\top X + \\lambda I_p$ and $\\bar{X}^\\top \\bar{y} = X^\\top y$, so the OLS formula recovers the Ridge estimator",
      "Because the extra observations cancel the intercept",
      "Because it is equivalent to Lasso"
    ],
    answer: 1,
    explanation: "Direct matrix multiplication shows the normal equations of the augmented problem are identical to the Ridge normal equations."
  },
  {
    id: "pm-sel-05",
    type: "mcq",
    topic: "shrinkage",
    examRelevance: 4,
    source: "Lecture 4",
    question: "Compared with Ridge, the Lasso penalty:",
    options: [
      "Uses the $\\ell_2$ norm and never sets coefficients exactly to zero",
      "Uses the $\\ell_1$ norm and can set some coefficients exactly to zero (variable selection)",
      "Is computationally slower for every $\\lambda$",
      "Requires the design matrix to be orthogonal"
    ],
    answer: 1,
    explanation: "The $\\ell_1$ geometry of the Lasso produces sparse solutions; Ridge only shrinks."
  },
  {
    id: "pm-sel-06",
    type: "truefalse",
    topic: "shrinkage",
    examRelevance: 4,
    source: "Lecture 4",
    question: "The tuning parameter $\\lambda$ in Ridge or Lasso is typically chosen by cross-validation.",
    answer: true,
    explanation: "CV (e.g. via cv.glmnet) selects the $\\lambda$ that minimises estimated out-of-sample error."
  }
]);
