window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "boee-ols-01",
    type: "mcq",
    topic: "ols",
    examRelevance: 5,
    source: "PS3",
    question: "Using the sample $(x,y) = \\{(2,1),\\ (1,2),\\ (2,2),\\ (3,4)\\}$, the OLS slope $\\hat{\\beta}_1$ equals:",
    options: ["0.5", "1", "1.5", "2"],
    answer: 1,
    explanation: "$\\bar{x}=2$, $\\bar{y}=2.25$, $\\widehat{\\mathrm{Cov}}=0.5$, $\\widehat{\\mathrm{Var}}=0.5$ → $\\hat{\\beta}_1 = 0.5/0.5 = 1$. $\\hat{\\beta}_0 = 2.25-2 = 0.25$."
  },
  {
    id: "boee-ols-02",
    type: "mcq",
    topic: "ols",
    examRelevance: 5,
    source: "PS3 / Lecture",
    question: "After computing OLS on any data set, the residuals always satisfy:",
    options: [
      "$\\sum \\hat{e}_i = 0$ and $\\sum x_i \\hat{e}_i = 0$",
      "Every residual is exactly zero",
      "The residuals are uncorrelated with the fitted values only if the model is correctly specified",
      "The sum of squared residuals is maximised"
    ],
    answer: 0,
    explanation: "These two equalities are mechanical consequences of the OLS first-order conditions. They hold for every data set."
  },
  {
    id: "boee-ols-03",
    type: "mcq",
    topic: "ols",
    examRelevance: 5,
    source: "PS3",
    question: "You estimate $y = \\beta_0 + \\beta_1 x + e$ and obtain $\\hat{\\beta}_0=2$, $\\hat{\\beta}_1=3$. For an observation with $x=4$ and $y=15$ the residual is:",
    options: ["1", "–1", "0", "3"],
    answer: 0,
    explanation: "Fitted value = $2 + 3\\times4 = 14$. Residual = $15-14 = 1$."
  },
  {
    id: "boee-ols-04",
    type: "mcq",
    topic: "ols",
    examRelevance: 5,
    source: "Lecture / PS3",
    question: "In the matrix formula $\\hat{\\boldsymbol{\\beta}} = (X'X)^{-1}X'y$ for a model with intercept and one regressor, the matrix $X$ has how many columns?",
    options: ["1", "2", "n", "It depends on the sample"],
    answer: 1,
    explanation: "First column is a column of ones (intercept), second column is the values of $x$. $X$ is $n\\times 2$."
  },
  {
    id: "boee-ols-05",
    type: "mcq",
    topic: "ols",
    examRelevance: 4,
    source: "PS3",
    question: "For a $2\\times 2$ matrix $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the inverse is $\\frac{1}{ad-bc}$ times:",
    options: [
      "$\\begin{pmatrix} a & -b \\\\ -c & d \\end{pmatrix}$",
      "$\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$",
      "$\\begin{pmatrix} d & b \\\\ c & a \\end{pmatrix}$",
      "$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$"
    ],
    answer: 1,
    explanation: "Swap the main-diagonal elements and change the sign of the off-diagonal elements, then divide by the determinant."
  },
  {
    id: "boee-ols-06",
    type: "mcq",
    topic: "ols",
    examRelevance: 4,
    source: "PS2",
    question: "If you redefine the regressor as $\\tilde{x} = x/10$, the new OLS slope coefficient will be:",
    options: [
      "The same as the original slope",
      "Ten times larger than the original slope",
      "Ten times smaller than the original slope",
      "Zero"
    ],
    answer: 1,
    explanation: "To keep the product $\\beta x$ the same, if $x$ is divided by 10 the coefficient must be multiplied by 10."
  },
  {
    id: "boee-ols-07",
    type: "mcq",
    topic: "ols",
    examRelevance: 5,
    source: "Lecture / PS2",
    question: "In the bivariate model the OLS slope can be written as:",
    options: [
      "$\\hat{\\beta}_1 = \\widehat{\\mathrm{Cov}}(x,y) / \\widehat{\\mathrm{Var}}(x)$",
      "$\\hat{\\beta}_1 = \\widehat{\\mathrm{Var}}(x) / \\widehat{\\mathrm{Cov}}(x,y)$",
      "$\\hat{\\beta}_1 = \\bar{y}/\\bar{x}$",
      "$\\hat{\\beta}_1 = E[xy]/E[x^2]$"
    ],
    answer: 0,
    explanation: "This is the classic covariance formula for the OLS slope using sample moments."
  },
  {
    id: "boee-ols-08",
    type: "truefalse",
    topic: "ols",
    examRelevance: 4,
    source: "Lecture",
    question: "The fact that the sum of OLS residuals is exactly zero is a mechanical property that always holds, regardless of whether the model is correctly specified.",
    answer: true,
    explanation: "It follows directly from the first-order condition for the intercept. It is an algebraic identity of OLS."
  },
  {
    id: "boee-ols-09",
    type: "mcq",
    topic: "ols",
    examRelevance: 4,
    source: "PS3",
    question: "Data: $(x,y) = (0,2),\\ (1,3),\\ (2,5),\\ (3,8)$. Using the $1/n$ formulas, $\\widehat{\\mathrm{Var}}(x)$ equals:",
    options: ["1.25", "1.666", "2.0", "1.0"],
    answer: 0,
    explanation: "$\\bar{x}=1.5$. Squared deviations: $(-1.5)^2 + (-0.5)^2 + (0.5)^2 + (1.5)^2 = 5$. $5/4 = 1.25$."
  },
  {
    id: "boee-ols-10",
    type: "mcq",
    topic: "ols",
    examRelevance: 4,
    source: "Lecture",
    question: "The OLS estimator is called the ‘best linear predictor’ because it:",
    options: [
      "Always recovers causal effects",
      "Minimises the expected squared prediction error among all linear functions of $x$ (under $E[e\\mid x]=0$)",
      "Has the smallest variance among all unbiased estimators under any circumstances",
      "Requires the errors to be normally distributed"
    ],
    answer: 1,
    explanation: "Under the assumption $E[e\\mid x]=0$ the linear CEF is the best linear predictor."
  },
  {
    id: "boee-ols-11",
    type: "mcq",
    topic: "ols",
    examRelevance: 4,
    source: "PS3",
    question: "In the $n=4$ sample of PS3, after computing OLS the residuals are approximately $-1.25$, $0.75$, $-0.25$, $0.75$. Their sum is:",
    options: ["0", "1", "–1", "0.5"],
    answer: 0,
    explanation: "By construction the residuals sum to zero (mechanical property of OLS with intercept)."
  },
  {
    id: "boee-ols-12",
    type: "truefalse",
    topic: "ols",
    examRelevance: 3,
    source: "Lecture",
    question: "If you rescale the dependent variable by defining $y^* = y/10$, both the slope and the intercept of the OLS regression of $y^*$ on $x$ are simply the original coefficients divided by 10.",
    answer: true,
    explanation: "Because OLS is a linear operator, scaling $y$ by a constant scales all coefficients by the same constant."
  }
]);
