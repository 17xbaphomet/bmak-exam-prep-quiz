window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "boee-nl-01",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 5,
    source: "Lecture V",
    question: "In the linear model $E[y\\mid x] = \\beta_0 + \\beta_1 x$, the marginal effect of $x$ is:",
    options: [
      "$\\beta_1 + 2\\beta_2 x$",
      "$\\beta_1$ (constant for all values of $x$)",
      "$\\beta_1 / x$",
      "Depends on the values of other covariates"
    ],
    answer: 1,
    explanation: "By definition the derivative of a linear function is the constant slope $\\beta_1$."
  },
  {
    id: "boee-nl-02",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 5,
    source: "Lecture V",
    question: "Given $\\hat{y} = 10 + 4x - 0.1 x^2$, the marginal effect of $x$ when $x = 15$ is:",
    options: ["4", "1", "2.5", "−0.1"],
    answer: 1,
    explanation: "ME $= 4 + 2\\times(-0.1)\\times15 = 4 - 3 = 1$."
  },
  {
    id: "boee-nl-03",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 5,
    source: "Lecture V",
    question: "Given $\\hat{y} = 10 + 4x - 0.1 x^2$, predicted $y$ is maximised at:",
    options: ["$x = 10$", "$x = 20$", "$x = 40$", "$x = 0$"],
    answer: 1,
    explanation: "Set ME $= 0$: $4 - 0.2x = 0$ → $x = 20$. Second derivative $= -0.2 < 0$ confirms a maximum."
  },
  {
    id: "boee-nl-04",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 5,
    source: "Lecture V",
    question: "For the estimated equation $\\widehat{\\mathrm{testscr}} = 607.302 + 3.851\\,\\mathrm{avginc} - 0.042\\,\\mathrm{avginc}^2$, the marginal effect at $\\mathrm{avginc}=20$ is approximately:",
    options: ["3.851", "2.171", "1.691", "−0.042"],
    answer: 1,
    explanation: "ME $= 3.851 + 2\\times(-0.042)\\times20 = 3.851 - 1.68 = 2.171$."
  },
  {
    id: "boee-nl-05",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 5,
    source: "Lecture V",
    question: "For $\\widehat{\\mathrm{testscr}} = 607.302 + 3.851\\,\\mathrm{avginc} - 0.042\\,\\mathrm{avginc}^2$, the difference in predicted scores between $\\mathrm{avginc}=10$ and $\\mathrm{avginc}=12$ is approximately:",
    options: ["+5.85", "−5.85", "−4.17", "+3.85"],
    answer: 1,
    explanation: "Direct calculation from the estimated equation yields approximately $-5.854$."
  },
  {
    id: "boee-nl-06",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 5,
    source: "Lecture V",
    question: "In a log-log model $\\ln(\\mathrm{price}) = \\beta_0 + \\beta_1 \\ln(\\mathrm{size}) + \\dots$ the coefficient $\\beta_1 = 0.68$ means:",
    options: [
      "A 1 unit increase in size raises price by 0.68",
      "A 1% increase in size is associated with an approximately 0.68% increase in price",
      "A 1% increase in size raises price by 0.68 dollars",
      "Size has no effect after taking logs"
    ],
    answer: 1,
    explanation: "This is the definition of an elasticity."
  },
  {
    id: "boee-nl-07",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 5,
    source: "Lecture V",
    question: "In the model $y = \\beta_0 + \\beta_1 x + \\beta_2 D + \\beta_3 (x\\cdot D) + e$ ($D$ is a 0/1 dummy), the marginal effect of $x$ when $D=1$ is:",
    options: ["$\\beta_1$", "$\\beta_1 + \\beta_2$", "$\\beta_1 + \\beta_3$", "$\\beta_3$"],
    answer: 2,
    explanation: "When $D=1$ the interaction term is active, so the total slope on $x$ becomes $\\beta_1 + \\beta_3$."
  },
  {
    id: "boee-nl-08",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 5,
    source: "Lecture V",
    question: "You want the entire quadratic relationship between income and test scores to be different for high-English-learner districts. Which specification does this?",
    options: [
      "Only interact the linear income term with the high-EL dummy",
      "Interact both the linear and the squared income terms with the high-EL dummy",
      "Only add the high-EL dummy as an intercept shift",
      "Replace income by $\\log(\\mathrm{income})$"
    ],
    answer: 1,
    explanation: "Interacting both the linear and the quadratic terms allows a completely different parabola for the high-EL group."
  },
  {
    id: "boee-nl-09",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 5,
    source: "Lecture V",
    question: "In a house-price model the coefficients are: $\\mathrm{pool}=0.071$, $\\mathrm{view}=0.026$, $\\mathrm{pool}\\times\\mathrm{view}=0.0022$. The approximate percentage effect of having both a pool and a view (relative to neither) is:",
    options: ["7.1%", "9.92%", "0.099%", "2.6%"],
    answer: 1,
    explanation: "Add the three coefficients: $0.071 + 0.026 + 0.0022 = 0.0992 \\approx 9.92\\%$."
  },
  {
    id: "boee-nl-10",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 5,
    source: "Lecture V",
    question: "After finding a critical point of a quadratic by setting the first derivative to zero, you obtain a second derivative of $+0.05$. The critical point is a:",
    options: ["Maximum", "Minimum", "Point of inflection", "Maximum only if $n$ is large"],
    answer: 1,
    explanation: "Second derivative $>0$ indicates a local minimum."
  },
  {
    id: "boee-nl-11",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 4,
    source: "Lecture V",
    question: "In a log-linear model $\\ln(y) = \\beta_0 + \\beta_1 x$ the interpretation of $\\beta_1 = 0.05$ is approximately:",
    options: [
      "One more unit of $x$ is associated with a 5% higher $y$",
      "One more unit of $x$ raises $y$ by 0.05 units",
      "A 1% increase in $x$ raises $y$ by 0.05%",
      "$y$ increases by 5 units when $x$ increases by 1"
    ],
    answer: 0,
    explanation: "In a log-linear model $100\\times\\beta$ gives the approximate percentage change in $y$ for a one-unit change in $x$."
  },
  {
    id: "boee-nl-12",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 5,
    source: "Lecture V",
    question: "A quadratic test-score model has a negative coefficient on $\\mathrm{avginc}^2$. This implies that the relationship is:",
    options: [
      "Convex (increasing marginal returns)",
      "Concave (diminishing marginal returns)",
      "Linear",
      "Impossible to determine without the linear term"
    ],
    answer: 1,
    explanation: "A negative coefficient on the squared term produces a downward-opening parabola."
  },
  {
    id: "boee-nl-13",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 5,
    source: "Lecture V",
    question: "You estimate $\\mathrm{wage} = \\beta_0 + \\beta_1\\,\\mathrm{educ} + \\beta_2 (\\mathrm{educ}\\times\\mathrm{female}) + \\dots$ and obtain $\\beta_1=0.08$, $\\beta_2=0.02$. The return to education for women is:",
    options: ["0.08", "0.02", "0.10", "0.06"],
    answer: 2,
    explanation: "For women ($\\mathrm{female}=1$) the total effect of education is $\\beta_1 + \\beta_2 = 0.10$."
  },
  {
    id: "boee-nl-14",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 5,
    source: "Lecture V",
    question: "Suppose for the high-English-learner group the estimated CEF is $\\widehat{testscr} = a + 4.2\\,avginc - 0.040\\,avginc^2$. At what avginc is predicted score maximised?",
    options: ["45.8", "52.5", "30", "60"],
    answer: 1,
    explanation: "Set $4.2 - 2\\times0.040\\,x = 0$ → $x = 4.2/0.08 = 52.5$."
  },
  {
    id: "boee-nl-15",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 4,
    source: "Lecture V",
    question: "You want the marginal effect of house size to be different for houses that have a swimming pool. Which term should you add to the regression?",
    options: [
      "$\\mathrm{pool}\\times\\mathrm{view}$",
      "$\\mathrm{size}\\times\\mathrm{pool}$",
      "$\\mathrm{size}^2$",
      "Only the pool dummy"
    ],
    answer: 1,
    explanation: "The interaction $\\mathrm{size}\\times\\mathrm{pool}$ allows the slope on size to differ between houses with and without a pool."
  },
  {
    id: "boee-nl-16",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 5,
    source: "Lecture V",
    question: "For the model $\\widehat{\\mathrm{testscr}} = 607.302 + 3.851\\,\\mathrm{avginc} - 0.042\\,\\mathrm{avginc}^2$, at what average income (in $1{,}000$) are predicted test scores maximised?",
    options: ["≈ 20", "≈ 45.8", "≈ 52.2", "≈ 10"],
    answer: 1,
    explanation: "Set $3.851 - 2\\times0.042\\,x = 0$ → $x \\approx 45.845$."
  },
  {
    id: "boee-nl-17",
    type: "truefalse",
    topic: "nonlinear",
    examRelevance: 4,
    source: "Lecture V",
    question: "In a quadratic model the marginal effect of $x$ is the same at every value of $x$.",
    answer: false,
    explanation: "False – the marginal effect $\\beta_1 + 2\\beta_2 x$ depends on the level of $x$."
  },
  {
    id: "boee-nl-18",
    type: "mcq",
    topic: "nonlinear",
    examRelevance: 4,
    source: "Lecture V",
    question: "In a log-price model the coefficient on bedrooms is $0.0036$. The best approximate interpretation is:",
    options: [
      "One extra bedroom is associated with a 0.36% higher price",
      "One extra bedroom is associated with a 0.0036% higher price",
      "One extra bedroom raises price by 3.6 dollars",
      "One extra bedroom raises $\\ln(\\mathrm{price})$ by 0.36"
    ],
    answer: 0,
    explanation: "In a log-linear specification $100\\times\\beta$ gives the approximate percentage change."
  }
]);
