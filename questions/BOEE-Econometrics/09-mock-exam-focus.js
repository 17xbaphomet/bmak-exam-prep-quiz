window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "boee-mock-01",
    type: "mcq",
    topic: "r-code",
    examRelevance: 5,
    source: "Mock Exam Q1",
    question: "In R, after `X <- cbind(1, age, education, female)`, the object X is:",
    options: [
      "A data frame with named columns",
      "A numeric matrix whose first column is a column of ones (intercept) and the remaining columns are the regressors",
      "A list of four vectors",
      "The design matrix without an intercept"
    ],
    answer: 1,
    explanation: "`cbind` binds columns into a matrix. Prepending 1 creates the intercept column used in the matrix form of OLS."
  },
  {
    id: "boee-mock-02",
    type: "mcq",
    topic: "r-code",
    examRelevance: 5,
    source: "Mock Exam Q1",
    question: "In R, does `X * y` return the same result as `X %*% y` when X is an n×k matrix and y is length n?",
    options: [
      "Yes, both compute matrix multiplication",
      "No: `*` is element-wise (Hadamard) and requires conforming dimensions; `%*%` is matrix multiplication",
      "Yes, but only if X is square",
      "No: `%*%` is element-wise and `*` is matrix multiplication"
    ],
    answer: 1,
    explanation: "`*` recycles/element-wise multiplies; `%*%` is the linear-algebra product needed for (X'X)^{-1}X'y."
  },
  {
    id: "boee-mock-03",
    type: "mcq",
    topic: "r-code",
    examRelevance: 5,
    source: "Mock Exam Q1",
    question: "After `res_ols <- lm(math_score ~ priv + age, data = dat)`, the call `vcovHC(res_ols, type = \"const\")` returns:",
    options: [
      "Always the heteroskedasticity-robust variance matrix",
      "The classical (homoskedasticity-based) variance-covariance matrix of the coefficients",
      "Only the residual variance",
      "The design matrix X"
    ],
    answer: 1,
    explanation: "`type = \"const\"` forces the classical constant-variance estimator; robust types are HC0–HC3 etc."
  },
  {
    id: "boee-mock-04",
    type: "mcq",
    topic: "r-code",
    examRelevance: 5,
    source: "Mock Exam Q1",
    question: "With `V <- vcovHC(res_ols, type = \"const\")`, the call `waldtest(res_ols, 1:2, test = \"F\", vcov = V)` tests:",
    options: [
      "Only the intercept",
      "The joint null that the specified coefficients are zero (typically H0: β_priv = β_age = 0)",
      "Heteroskedasticity",
      "That R² = 0"
    ],
    answer: 1,
    explanation: "`waldtest` with a vector of coefficients performs a joint Wald/F test under the supplied variance matrix."
  },
  {
    id: "boee-mock-05",
    type: "mcq",
    topic: "r-code",
    examRelevance: 4,
    source: "Mock Exam Q1",
    question: "Which R expression returns the OLS coefficient vector of an `lm` object `res_ols`?",
    options: [
      "`vcovHC(res_ols)`",
      "`coef(res_ols)` (or `coefficients(res_ols)`)",
      "`resid(res_ols)`",
      "`waldtest(res_ols)`"
    ],
    answer: 1,
    explanation: "`coef()` extracts the estimated β vector."
  },
  {
    id: "boee-mock-06",
    type: "mcq",
    topic: "measurement-error",
    examRelevance: 5,
    source: "Mock Exam Q2",
    question: "True earnings depend on true experience x*, but you only observe x1 = x* + v1 with E[v1]=0 and v1 independent of the structural error u. The OLS slope of earnings on x1 is:",
    options: [
      "Consistent for β1",
      "Generally inconsistent; plim depends on Var(x*), Var(v1) and possibly Cov(x*, v1)",
      "Unbiased in every finite sample",
      "Always biased upward"
    ],
    answer: 1,
    explanation: "Measurement error in the regressor breaks consistency of OLS for β1."
  },
  {
    id: "boee-mock-07",
    type: "mcq",
    topic: "iv",
    examRelevance: 5,
    source: "Mock Exam Q2",
    question: "You have a second noisy measure x2 = x* + v2, with x*, v1, v2, u all mutually independent and Var(v2)>0. Is x2 a valid instrument for the mismeasured x1?",
    options: [
      "No, because x2 is also measured with error",
      "Yes: relevance from the common x* component and exogeneity from independence of v2 and u",
      "Only if Var(v2)=0",
      "Only if x2 = x1"
    ],
    answer: 1,
    explanation: "A second independent measurement is a classic instrument for classical measurement error."
  },
  {
    id: "boee-mock-08",
    type: "truefalse",
    topic: "iv",
    examRelevance: 5,
    source: "Mock Exam Q3",
    question: "In the model y = β0 + β1 x + e with Cov(x,e)≠0, a valid instrument z for x must satisfy Cov(z,e)=0 and Cov(z,x)≠0.",
    answer: true,
    explanation: "Exogeneity and relevance conditions."
  },
  {
    id: "boee-mock-09",
    type: "truefalse",
    topic: "time-series",
    examRelevance: 4,
    source: "Mock Exam Q3",
    question: "OLS estimates of the parameters of a stationary AR model are typically biased in finite samples but can still be consistent.",
    answer: true,
    explanation: "AR OLS is finite-sample biased yet consistent under standard stationarity conditions."
  },
  {
    id: "boee-mock-10",
    type: "truefalse",
    topic: "heteroskedasticity",
    examRelevance: 4,
    source: "Mock Exam Q3",
    question: "Heteroskedasticity changes the numerical value of the usual R² formula (1 − SSR/SST).",
    answer: false,
    explanation: "R² depends only on fitted values and residuals; heteroskedasticity affects standard errors, not R²."
  },
  {
    id: "boee-mock-11",
    type: "mcq",
    topic: "dummies",
    examRelevance: 5,
    source: "Mock Exam Q3",
    question: "Model A uses male and male×married; Model B uses female (=1−male) and female×married. Both include married and an intercept. The male coefficient in A and the female coefficient in B are related by:",
    options: [
      "They are always identical",
      "They sum to zero (β̂_male = −α̂_female) under the symmetric re-parameterisation",
      "They are unrelated",
      "Only the intercepts differ"
    ],
    answer: 1,
    explanation: "Switching the reference gender flips the sign of the gender main effect."
  },
  {
    id: "boee-mock-12",
    type: "mcq",
    topic: "time-series",
    examRelevance: 5,
    source: "Mock Exam Q4",
    question: "The Hannan–Quinn criterion is HIC(p) = ln(RSS(p)/T) + 2 ln(ln(T))(p+1)/T. For typical sample sizes, compared with BIC:",
    options: [
      "HIC always equals BIC",
      "BIC penalizes extra lags more heavily than HIC, so BIC(p) > HIC(p) for each p",
      "HIC penalizes more heavily than BIC",
      "Neither depends on T"
    ],
    answer: 1,
    explanation: "ln(T) > 2 ln(ln(T)) for large T, so the BIC penalty is larger."
  },
  {
    id: "boee-mock-13",
    type: "mcq",
    topic: "time-series",
    examRelevance: 4,
    source: "Mock Exam Q4",
    question: "Information criteria (AIC/BIC/HIC) for lag length balance:",
    options: [
      "Only the residual variance",
      "Better in-sample fit (lower RSS) against a penalty for overfitting that hurts prediction",
      "Only the number of observations",
      "The t-statistics of the last lag only"
    ],
    answer: 1,
    explanation: "They trade in-sample fit against complexity."
  },
  {
    id: "boee-mock-14",
    type: "mcq",
    topic: "interpretation",
    examRelevance: 5,
    source: "Mock Exam Q5",
    question: "ln(wage) = 5.585 + 0.083 educ + 0.014 exper − 0.127 minority (robust se 0.117, 0.008, 0.105, 0.031). One extra year of experience is associated with:",
    options: [
      "About +1.4% higher wages on average, holding education and minority status fixed",
      "+0.014 dollars",
      "+14%",
      "An insignificant effect by construction"
    ],
    answer: 0,
    explanation: "In a log-linear model 100×β is the approximate percentage effect."
  },
  {
    id: "boee-mock-15",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Mock Exam Q5",
    question: "Exper coefficient 0.014, se 0.105. Two-sided 5% test of H0: β_exper = 0 yields t ≈ 0.13. Decision:",
    options: [
      "Reject H0",
      "Fail to reject H0 — experience is not statistically significant at 5%",
      "The test is invalid under heteroskedasticity",
      "Accept H0 as true"
    ],
    answer: 1,
    explanation: "|0.13| ≪ 1.96 → fail to reject."
  },
  {
    id: "boee-mock-16",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Mock Exam Q5",
    question: "Minority coefficient = −0.127, se = 0.031. Two-sided 95% CI (z=1.96) is approximately:",
    options: [
      "[−0.19, −0.07]",
      "[−0.13, 0.13]",
      "[0.07, 0.19]",
      "[−0.03, 0.03]"
    ],
    answer: 0,
    explanation: "−0.127 ± 1.96×0.031 ≈ [−0.188, −0.066]."
  },
  {
    id: "boee-mock-17",
    type: "mcq",
    topic: "hypothesis-testing",
    examRelevance: 5,
    source: "Mock Exam Q5",
    question: "Education coefficient = 0.083, se = 0.008. Test H0: β_educ ≥ 0 vs H1: β_educ < 0 at 5% (crit = −1.64). Decision:",
    options: [
      "Reject H0 because t is large and positive",
      "Fail to reject H0 (t ≈ 10.4 ≫ −1.64) — data consistent with a non-negative effect",
      "Cannot use a one-sided test with robust SEs",
      "Must use an F-test"
    ],
    answer: 1,
    explanation: "Reject non-negativity only if t < −1.64. A large positive t does not reject H0."
  },
  {
    id: "boee-mock-18",
    type: "mcq",
    topic: "asymptotics",
    examRelevance: 4,
    source: "Lecture VII",
    question: "Exact finite-sample normality of OLS is typically derived under A4 that:",
    options: [
      "Only n → ∞",
      "ei ~ N(0,σ²) and ei independent of xi (implying homoskedasticity)",
      "Only robust SEs are used",
      "The model has no intercept"
    ],
    answer: 1,
    explanation: "A4 is strong and rarely realistic; in practice we rely on asymptotic normality via the CLT."
  },
  {
    id: "boee-mock-19",
    type: "truefalse",
    topic: "asymptotics",
    examRelevance: 3,
    source: "Lecture VII",
    question: "In large samples the CLT justifies normal critical values for t- and F-tests even when errors are not normal.",
    answer: true,
    explanation: "Asymptotic normality of √n(β̂−β) under mild conditions justifies standard inference."
  },
  {
    id: "boee-mock-20",
    type: "mcq",
    topic: "interpretation",
    examRelevance: 4,
    source: "Mock Exam Q5",
    question: "In ln(wage) = … − 0.127 minority + …, the coefficient −0.127 means:",
    options: [
      "Minorities earn 0.127 dollars less",
      "Holding education and experience fixed, being a minority is associated with about 12.7% lower wages on average",
      "The probability of being minority falls by 12.7%",
      "Wages fall by 127%"
    ],
    answer: 1,
    explanation: "Log-linear: 100×β is the approximate percentage difference."
  }
]);
