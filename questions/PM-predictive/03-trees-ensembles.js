window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "pm-tree-01",
    type: "mcq",
    topic: "trees",
    examRelevance: 5,
    source: "Lecture 4–5 / PS3",
    question: "The cost-complexity criterion for a tree $T$ is $C_\\alpha(T) =$",
    options: [
      "only the number of terminal nodes",
      "$\\displaystyle\\sum_m \\sum_{x_i \\in R_m} (y_i - \\hat{y}_{R_m})^2 + \\alpha |T|$",
      "$\\alpha$ times the residual sum of squares",
      "the out-of-bag error"
    ],
    answer: 1,
    explanation: "It balances in-sample RSS against a penalty $\\alpha$ times the number of leaves. Larger $\\alpha$ yields smaller trees."
  },
  {
    id: "pm-tree-02",
    type: "mcq",
    topic: "trees",
    examRelevance: 5,
    source: "PS3 / Lecture 5",
    question: "When the true DGP is pure noise ($y_i = \\mu + \\varepsilon_i$, independent of $X$), the optimal regression tree that minimises true OOS MSE has:",
    options: [
      "as many leaves as observations",
      "a single terminal node (the global sample mean)",
      "exactly $\\sqrt{N}$ leaves",
      "a leaf for every distinct $x$-value"
    ],
    answer: 1,
    explanation: "Any split only fits noise. The optimal prediction is the overall mean; estimation variance is $\\sigma^2/N$."
  },
  {
    id: "pm-tree-03",
    type: "mcq",
    topic: "ensembles",
    examRelevance: 5,
    source: "Lecture 5 / Mock Exam Q2",
    question: "Setting the Random Forest parameter mtry equal to the total number of predictors $p$ makes the algorithm equivalent to:",
    options: [
      "a single regression tree",
      "standard Bagging",
      "Lasso",
      "k-nearest neighbours"
    ],
    answer: 1,
    explanation: "When every split considers all predictors, the only randomness left is the bootstrap sampling of observations → Bagging."
  },
  {
    id: "pm-tree-04",
    type: "mcq",
    topic: "ensembles",
    examRelevance: 5,
    source: "Lecture 5 / Mock Exam",
    question: "Why does the default mtry $\\approx \\sqrt{p}$ (or $p/3$ for regression) usually give lower OOS MSE than mtry $= p$?",
    options: [
      "It makes the trees deeper",
      "It decorrelates the trees by preventing a few strong predictors from dominating every split, which strengthens the variance-reduction benefit of averaging",
      "It reduces bias to zero",
      "It eliminates the need for bootstrapping"
    ],
    answer: 1,
    explanation: "Lower correlation among trees improves the variance formula of the ensemble average."
  },
  {
    id: "pm-tree-05",
    type: "mcq",
    topic: "ensembles",
    examRelevance: 5,
    source: "PS3",
    question: "For $B$ identically distributed random variables with $\\mathrm{Var}(Z_i)=\\sigma^2$ and pairwise correlation $\\rho$, the variance of their average is:",
    options: [
      "$\\sigma^2 / B$",
      "$\\rho \\sigma^2 + (1-\\rho)\\sigma^2 / B$",
      "$\\sigma^2$",
      "$B \\sigma^2$"
    ],
    answer: 1,
    explanation: "The formula shows that even with infinite $B$ a residual variance $\\rho \\sigma^2$ remains; reducing $\\rho$ (via mtry) is therefore crucial."
  },
  {
    id: "pm-tree-06",
    type: "truefalse",
    topic: "ensembles",
    examRelevance: 5,
    source: "Mock Exam Q1c",
    question: "Bagging is very helpful for unstable high-variance learners such as unpruned trees, but provides almost no benefit when applied to the sample mean.",
    answer: true,
    explanation: "The sample mean is already a low-variance, stable estimator; averaging many bootstrap means does not reduce variance further in a meaningful way."
  },
  {
    id: "pm-tree-07",
    type: "mcq",
    topic: "trees",
    examRelevance: 4,
    source: "Mock Exam Q2",
    question: "In the R code that grows tree_A and then produces tree_B via prune.tree after cv.tree, tree_B differs from tree_A because:",
    options: [
      "tree_B uses a different loss function",
      "tree_B is a pruned subtree whose size was chosen by cross-validation to minimise estimated OOS deviance",
      "tree_B is a random forest",
      "tree_B only uses the first half of the predictors"
    ],
    answer: 1,
    explanation: "cv.tree evaluates different sizes; the size with lowest CV deviance is selected and the original tree is pruned back to that size."
  }
]);
