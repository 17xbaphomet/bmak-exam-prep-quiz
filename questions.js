const QUESTIONS = [
  // ===== GOODS MARKET (examRelevance 5) =====
  {id:"g01",type:"numerical",topic:"goods",examRelevance:5,source:"HW2",question:"Goods market: C = 480 + 0.5 Y_D, I = 110, T = 70, G = 250. Calculate equilibrium output Y.",answer:1610,tolerance:0,explanation:"Y = C + I + G = 480 + 0.5(Y−70) + 110 + 250 = 0.5Y + 805 → Y = 1610."},
  {id:"g02",type:"numerical",topic:"goods",examRelevance:5,source:"HW2",question:"Same economy. Equilibrium disposable income Y_D?",answer:1540,tolerance:0,explanation:"Y_D = 1610 − 70 = 1540."},
  {id:"g03",type:"numerical",topic:"goods",examRelevance:5,source:"HW2",question:"Same economy. Equilibrium consumption C?",answer:1250,tolerance:0,explanation:"C = 480 + 0.5×1540 = 1250."},
  {id:"g04",type:"numerical",topic:"goods",examRelevance:5,source:"HW2",question:"Same economy. Private saving S = Y_D − C?",answer:290,tolerance:0,explanation:"S = 1540 − 1250 = 290."},
  {id:"g05",type:"numerical",topic:"goods",examRelevance:5,source:"HW2",question:"Multiplier when MPC = 0.5?",answer:2,tolerance:0,explanation:"1/(1−0.5) = 2."},
  {id:"g06",type:"numerical",topic:"goods",examRelevance:5,source:"HW2",question:"If G rises from 250 to 300, new equilibrium Y?",answer:1710,tolerance:0,explanation:"ΔG=50 × multiplier 2 = +100 → Y=1710."},
  {id:"g07",type:"mcq",topic:"goods",examRelevance:4,source:"HW2",question:"Which is exogenous in the simple goods-market model?",options:["Consumption","Saving","Disposable income","Government spending","None of these"],answer:3,explanation:"G is exogenous."},
  {id:"g08",type:"truefalse",topic:"goods",examRelevance:4,source:"HW2",question:"If I = b₀ + b₁Y, the multiplier becomes 1/(1−c₁−b₁) provided c₁+b₁ < 1.",answer:true,explanation:"Accelerator channel amplifies the multiplier."},

  // ===== MONEY MARKET (4) =====
  {id:"m01",type:"numerical",topic:"money",examRelevance:4,source:"HW2",question:"M^D = Y(0.2−0.8i), Y=5000. Money demand at i=0.01?",answer:960,tolerance:0,explanation:"5000×0.192 = 960."},
  {id:"m02",type:"numerical",topic:"money",examRelevance:4,source:"HW2",question:"Same, money demand at i=0.05?",answer:800,tolerance:0,explanation:"5000×0.16 = 800."},
  {id:"m03",type:"mcq",topic:"money",examRelevance:4,source:"HW2",question:"What increases desired money holdings?",options:["Rise in interest rate","Fall in interest rate","Fall in income","None"],answer:1,explanation:"Money demand decreases in i, increases in Y."},
  {id:"m04",type:"numerical",topic:"money",examRelevance:4,source:"HW2",question:"θ=0.1, no currency, M^D=$Y(0.8−4i), H=100, $Y=5000. Equilibrium i in %?",answer:15,tolerance:0,explanation:"0.1×5000×(0.8−4i)=100 → i=0.15 → 15%."},
  {id:"m05",type:"truefalse",topic:"money",examRelevance:4,source:"HW2",question:"To raise equilibrium money demand the CB should lower the interest rate.",answer:true,explanation:"Money demand is decreasing in i."},

  // ===== IS-LM (5) =====
  {id:"i01",type:"truefalse",topic:"islm",examRelevance:5,source:"Core",question:"An increase in G shifts IS right and raises both Y and i.",answer:true,explanation:"Higher demand at any i → IS right → higher Y and higher i (partial crowding-out)."},
  {id:"i02",type:"truefalse",topic:"islm",examRelevance:5,source:"Core",question:"An increase in money supply shifts LM down/right, lowering i and raising Y.",answer:true,explanation:"More real balances require lower i."},
  {id:"i03",type:"mcq",topic:"islm",examRelevance:5,source:"Core",question:"Which most likely shifts IS right?",options:["Rise in money supply","Cut in taxes T","Rise in reserve requirement","Fall in consumer confidence"],answer:1,explanation:"Lower T raises disposable income and C."},
  {id:"i04",type:"mcq",topic:"islm",examRelevance:5,source:"Core",question:"Crowding-out refers to:",options:["G reducing private investment via higher i","Taxes reducing C","Money supply reducing i","Imports reducing NX"],answer:0,explanation:"Higher i reduces interest-sensitive investment."},
  {id:"i05",type:"mcq",topic:"islm",examRelevance:5,source:"Core",question:"With horizontal LM (liquidity trap), fiscal policy is:",options:["Ineffective","Fully effective (no crowding-out)","Weaker than usual","Only effective with monetary expansion"],answer:1,explanation:"i does not rise → no crowding-out."},
  {id:"i06",type:"truefalse",topic:"islm",examRelevance:5,source:"Lecture 05",question:"IS is downward-sloping because higher i reduces investment and therefore equilibrium Y.",answer:true,explanation:"Higher i → lower I → lower demand → lower Y."},
  {id:"i07",type:"mcq",topic:"islm",examRelevance:5,source:"Lecture 05",question:"What makes the IS multiplier larger than 1/(1−c₁)?",options:["Money market","Investment depending positively on Y (accelerator)","Taxes","CB setting i"],answer:1,explanation:"Multiplier becomes 1/(1−c₁−b₁)."},
  {id:"i08",type:"truefalse",topic:"islm",examRelevance:5,source:"Modern treatment",question:"In the modern treatment the LM curve is often drawn as horizontal because the central bank sets the interest rate.",answer:true,explanation:"CB chooses i; the money supply adjusts endogenously to clear the money market."},
  {id:"i09",type:"mcq",topic:"islm",examRelevance:5,source:"Core",question:"A simultaneous rise in G and rise in money supply typically leads to:",options:["Higher Y, ambiguous i","Lower Y, higher i","Ambiguous Y, higher i","Lower Y, lower i"],answer:0,explanation:"Both policies raise Y; the effect on i is ambiguous (IS right, LM down/right)."},

  // ===== LABOR / WS-PS (5) =====
  {id:"l01",type:"truefalse",topic:"labor",examRelevance:5,source:"Lecture 07",question:"Natural unemployment is the rate at which real wage from WS equals real wage from PS.",answer:true,explanation:"WS: W/P = F(u,z). PS: W/P = 1/(1+μ). Intersection = u_n."},
  {id:"l02",type:"truefalse",topic:"labor",examRelevance:5,source:"Lecture 07",question:"Higher markup μ or higher z (e.g. more generous benefits) raises the natural rate u_n.",answer:true,explanation:"Higher μ shifts PS down; higher z shifts WS up → higher u_n."},
  {id:"l03",type:"mcq",topic:"labor",examRelevance:5,source:"Lecture 07",question:"An increase in unemployment benefits (higher z) leads to:",options:["Higher natural unemployment","Lower natural unemployment","No change in u_n","Lower medium-run real wage"],answer:0,explanation:"WS shifts up → intersection with PS at higher u_n."},
  {id:"l04",type:"truefalse",topic:"labor",examRelevance:5,source:"Lecture 07",question:"In the medium run the real wage is determined solely by the markup (W/P = 1/(1+μ)).",answer:true,explanation:"PS is horizontal; WS adjusts via unemployment until the real wage equals 1/(1+μ)."},

  // ===== PHILLIPS CURVE (5) =====
  {id:"p01",type:"truefalse",topic:"pc",examRelevance:5,source:"Lecture 08",question:"When u < u_n, inflation tends to rise (accelerate) under adaptive expectations.",answer:true,explanation:"π_t − πᵉ_t = −β(u_t − u_n). If u < u_n, π > πᵉ."},
  {id:"p02",type:"mcq",topic:"pc",examRelevance:5,source:"Core",question:"If CB keeps u permanently below u_n (adaptive expectations), inflation:",options:["Stabilizes higher","Keeps accelerating","Falls to zero","Unaffected"],answer:1,explanation:"Accelerationist PC → continuous rise in inflation."},
  {id:"p03",type:"truefalse",topic:"pc",examRelevance:5,source:"Lecture 08",question:"The original Phillips curve was a level relation; modern versions with adaptive expectations are accelerationist.",answer:true,explanation:"Original: π = −α(u−u_n). Adaptive θ=1: Δπ = −α(u−u_n)."},
  {id:"p04",type:"mcq",topic:"pc",examRelevance:5,source:"Core",question:"When expectations are fully anchored (πᵉ = π-bar), the Phillips curve is:",options:["Vertical","A stable negative level relation","Accelerationist","Horizontal"],answer:1,explanation:"π − π-bar = −α(u−u_n) → classic tradeoff between inflation level and unemployment."},
  {id:"p05",type:"truefalse",topic:"pc",examRelevance:5,source:"Lecture 08",question:"Higher wage indexation increases the sensitivity of inflation changes to the unemployment gap.",answer:true,explanation:"Indexation raises the coefficient on the unemployment gap in the accelerationist PC."},

  // ===== MEDIUM RUN / IS-LM-PC (5) =====
  {id:"med01",type:"truefalse",topic:"medium",examRelevance:5,source:"Lecture 09",question:"After a positive demand shock the economy returns to natural output in the medium run, but inflation is higher if policy does not tighten.",answer:true,explanation:"Higher expected inflation shifts PC; restoring u_n requires higher real rates."},
  {id:"med02",type:"mcq",topic:"medium",examRelevance:5,source:"Core",question:"In the medium run, monetary policy is:",options:["Neutral for output but affects inflation","Affects both output and inflation permanently","Neutral for both","Affects only the real interest rate"],answer:0,explanation:"Output returns to natural level; inflation (or price level) is determined by monetary policy."},
  {id:"med03",type:"truefalse",topic:"medium",examRelevance:5,source:"Core",question:"In the IS-LM-PC model a permanent increase in G raises natural output.",answer:false,explanation:"Natural output is determined on the supply side (labor market / WS-PS). Demand shocks only affect the price level/inflation in the medium run."},

  // ===== GROWTH / SOLOW (3) =====
  {id:"gr01",type:"truefalse",topic:"growth",examRelevance:3,source:"Core Solow",question:"In the Solow model, a higher saving rate permanently raises the growth rate of output per worker.",answer:false,explanation:"Higher s raises the level of capital and output per worker, but long-run growth is determined by technical progress."},
  {id:"gr02",type:"mcq",topic:"growth",examRelevance:3,source:"Core Solow",question:"In the Solow steady state, output per effective worker is constant when:",options:["s increases","n or δ rises","sf(k) = (δ+n+g)k","The capital stock grows at rate n"],answer:2,explanation:"Investment equals break-even investment at the steady-state capital intensity."},
  {id:"gr03",type:"truefalse",topic:"growth",examRelevance:3,source:"Core",question:"Countries with higher investment rates tend to have higher levels of output per worker, consistent with the Solow model.",answer:true,explanation:"Higher s leads to higher steady-state k and y."},

  // ===== OPEN ECONOMY (3) =====
  {id:"o01",type:"truefalse",topic:"open",examRelevance:3,source:"Sample / Core",question:"Under interest parity, if the domestic interest rate is higher than the foreign rate, the domestic currency is expected to depreciate.",answer:false,explanation:"Higher domestic i requires expected appreciation of the domestic currency (or the UIP does not hold)."},
  {id:"o02",type:"mcq",topic:"open",examRelevance:3,source:"Sample",question:"Under UIP, if r > r*, the domestic currency between t and t+1 must:",options:["Appreciate","Depreciate","Remain unchanged","The statement is false"],answer:0,explanation:"1+r = (1/ε_t)·(1+r*)·ε_{t+1} implies expected appreciation when r > r*."},

  // ===== NATIONAL ACCOUNTS (2) =====
  {id:"a01",type:"mcq",topic:"accounts",examRelevance:2,source:"Sample Exam",question:"Income approach to GDP includes:",options:["Only wages of residents","Wages + profits + taxes on production (residency-adjusted)","Only final sales","Imports of intermediates"],answer:1,explanation:"Sum of factor incomes generated by domestic production."},
  {id:"a02",type:"truefalse",topic:"accounts",examRelevance:2,source:"Sample",question:"GNP = GDP + net factor payments from abroad.",answer:true,explanation:"GNP adjusts GDP for income earned by residents abroad minus income earned by foreigners domestically."}
];
