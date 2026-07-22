window.QUESTIONS = (window.QUESTIONS || []).concat([
  {
    id: "pm-basics-01",
    type: "mcq",
    topic: "basics",
    examRelevance: 5,
    source: "Lecture 1–2",
    question: "What is the key difference between in-sample (IS) and out-of-sample (OOS) prediction error?",
    options: [
      "They are always identical for linear models",
      "IS error is computed on the training data; OOS error is computed on held-out test data and better reflects generalisation",
      "OOS error is always smaller than IS error",
      "IS error only exists for nonparametric methods"
    ],
    answer: 1,
    explanation: "Training error (IS) typically underestimates true prediction risk because the model has already seen the data. We care about OOS performance on new observations."
  },
  {
    id: "pm-basics-02",
    type: "mcq",
    topic: "basics",
    examRelevance: 5,
    source: "Lecture 2",
    question: "When only a training sample is available, which techniques can be used to estimate out-of-sample error?",
    options: [
      "Only the residual sum of squares",
      "Information criteria (AIC, BIC) and cross-validation",
      "Only increasing the number of predictors",
      "Setting all coefficients to zero"
    ],
    answer: 1,
    explanation: "AIC/BIC add a complexity penalty; cross-validation repeatedly holds out folds to mimic OOS performance."
  },
  {
    id: "pm-basics-03",
    type: "mcq",
    topic: "basics",
    examRelevance: 4,
    source: "Lecture 1 / PS1",
    question: "In $k$-nearest-neighbour regression with a single predictor, the prediction for a new point $x_0$ is:",
    options: [
      "The value of the single closest training observation",
      "The average of the $y$-values of the $k$ training observations whose $x$-values are closest to $x_0$",
      "The OLS fitted value",
      "A weighted sum of all training observations with weights proportional to distance"
    ],
    answer: 1,
    explanation: "KNN averages the responses of the $k$ nearest neighbours in the training sample (ties broken randomly if needed)."
  },
  {
    id: "pm-basics-04",
    type: "truefalse",
    topic: "basics",
    examRelevance: 5,
    source: "Lecture 1",
    question: "A model with excellent in-sample fit is guaranteed to have excellent out-of-sample predictive performance.",
    answer: false,
    explanation: "Overfitting produces low IS error but high OOS error. This is why we rely on validation, CV or information criteria."
  },
  {
    id: "pm-basics-05",
    type: "mcq",
    topic: "basics",
    examRelevance: 4,
    source: "Lecture 2",
    question: "The probability that a given observation is left out of a bootstrap sample of size $N$ drawn with replacement is approximately:",
    options: [
      "$1/N$",
      "$e^{-1} \\approx 0.37$",
      "$0.5$",
      "$1 - 1/e \\approx 0.63$"
    ],
    answer: 1,
    explanation: "$(1-1/N)^N \\to e^{-1} \\approx 0.368$. Consequently a bootstrap sample contains on average roughly $2/3$ of the original observations."
  }
]);
