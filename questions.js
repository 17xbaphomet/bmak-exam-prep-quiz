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

  // NEW GOODS DERIVATIVES + MISSING
  {id:"g09",type:"numerical",topic:"goods",examRelevance:5,source:"Derivative of g01",question:"Goods market: C = 480 + 0.6 Y_D, I = 110, T = 70, G = 250. Calculate equilibrium output Y.",answer:1995,tolerance:0,explanation:"Autonomous = 480 − 0.6×70 + 110 + 250 = 798. Multiplier = 1/(1−0.6)=2.5. Y=2.5×798=1995."},
  {id:"g10",type:"numerical",topic:"goods",examRelevance:5,source:"Derivative",question:"Same economy as g01 (MPC=0.5). T rises by 40 (to 110). New equilibrium Y?",answer:1570,tolerance:0,explanation:"Tax multiplier = −c₁/(1−c₁)=−1. ΔY=−40 → Y=1610−40=1570."},
  {id:"g11",type:"numerical",topic:"goods",examRelevance:5,source:"Derivative",question:"Goods market with accelerator: C=200+0.75 Y_D, I=100+0.1Y, T=80, G=150. What is the multiplier?",answer:6.6667,tolerance:0.01,explanation:"1/(1−0.75−0.1)=1/0.15≈6.6667."},
  {id:"g12",type:"numerical",topic:"goods",examRelevance:5,source:"Core",question:"Balanced-budget multiplier: G and T both rise by 100, MPC=0.8. Change in equilibrium Y?",answer:100,tolerance:0,explanation:"Balanced-budget multiplier equals 1. ΔY=ΔG."},
  {id:"g13",type:"truefalse",topic:"goods",examRelevance:4,source:"Core",question:"In the simple goods-market model an equal increase in G and T raises Y by the full amount of the increase.",answer:true,explanation:"Balanced-budget multiplier = 1."},
  {id:"g14",type:"mcq",topic:"goods",examRelevance:4,source:"Core",question:"Private saving equals:",options:["Y−T−C","Y−C","I","G−T"],answer:0,explanation:"S = Y_D − C = (Y−T)−C."},

  // ===== MONEY MARKET =====
  {id:"m01",type:"numerical",topic:"money",examRelevance:4,source:"HW2",question:"M^D = Y(0.2−0.8i), Y=5000. Money demand at i=0.01?",answer:960,tolerance:0,explanation:"5000×0.192 = 960."},
  {id:"m02",type:"numerical",topic:"money",examRelevance:4,source:"HW2",question:"Same, money demand at i=0.05?",answer:800,tolerance:0,explanation:"5000×0.16 = 800."},
  {id:"m03",type:"mcq",topic:"money",examRelevance:4,source:"HW2",question:"What increases desired money holdings?",options:["Rise in interest rate","Fall in interest rate","Fall in income","None"],answer:1,explanation:"Money demand decreases in i, increases in Y."},
  {id:"m04",type:"numerical",topic:"money",examRelevance:4,source:"HW2",question:"θ=0.1, no currency, M^D=$Y(0.8−4i), H=100, $Y=5000. Equilibrium i in %?",answer:15,tolerance:0,explanation:"0.1×5000×(0.8−4i)=100 → i=0.15 → 15%."},
  {id:"m05",type:"truefalse",topic:"money",examRelevance:4,source:"HW2",question:"To raise equilibrium money demand the CB should lower the interest rate.",answer:true,explanation:"Money demand is decreasing in i."},

  // NEW MONEY
  {id:"m06",type:"numerical",topic:"money",examRelevance:4,source:"Derivative of m04",question:"Same money market as m04 but θ=0.2. New equilibrium i in %?",answer:17.5,tolerance:0.1,explanation:"0.2×5000×(0.8−4i)=100 → 0.8−4i=0.1 → i=0.175 → 17.5%."},
  {id:"m07",type:"numerical",topic:"money",examRelevance:4,source:"Core",question:"Money multiplier when currency-deposit ratio c=0.2 and reserve ratio θ=0.1?",answer:4,tolerance:0,explanation:"(1+c)/(c+θ)=1.2/0.3=4."},
  {id:"m08",type:"truefalse",topic:"money",examRelevance:4,source:"Core",question:"An increase in the reserve ratio θ reduces the money multiplier.",answer:true,explanation:"Money multiplier = (1+c)/(c+θ) falls when θ rises."},
  {id:"m09",type:"mcq",topic:"money",examRelevance:4,source:"Core",question:"When the central bank sets the interest rate, the money supply is:",options:["Exogenous","Endogenous","Always equal to H","Fixed by the government"],answer:1,explanation:"H (or M) adjusts endogenously so the money market clears at the chosen i."},
  {id:"m10",type:"numerical",topic:"money",examRelevance:4,source:"Derivative",question:"M^D = Y(0.25 − i), Y=4000, M^s=800. Equilibrium i?",answer:0.05,tolerance:0.001,explanation:"4000(0.25−i)=800 → 0.25−i=0.2 → i=0.05."},

  // ===== IS-LM =====
  {id:"i01",type:"truefalse",topic:"islm",examRelevance:5,source:"Core",question:"An increase in G shifts IS right and raises both Y and i.",answer:true,explanation:"Higher demand at any i → IS right → higher Y and higher i (partial crowding-out)."},
  {id:"i02",type:"truefalse",topic:"islm",examRelevance:5,source:"Core",question:"An increase in money supply shifts LM down/right, lowering i and raising Y.",answer:true,explanation:"More real balances require lower i."},
  {id:"i03",type:"mcq",topic:"islm",examRelevance:5,source:"Core",question:"Which most likely shifts IS right?",options:["Rise in money supply","Cut in taxes T","Rise in reserve requirement","Fall in consumer confidence"],answer:1,explanation:"Lower T raises disposable income and C."},
  {id:"i04",type:"mcq",topic:"islm",examRelevance:5,source:"Core",question:"Crowding-out refers to:",options:["G reducing private investment via higher i","Taxes reducing C","Money supply reducing i","Imports reducing NX"],answer:0,explanation:"Higher i reduces interest-sensitive investment."},
  {id:"i05",type:"mcq",topic:"islm",examRelevance:5,source:"Core",question:"With horizontal LM (liquidity trap), fiscal policy is:",options:["Ineffective","Fully effective (no crowding-out)","Weaker than usual","Only effective with monetary expansion"],answer:1,explanation:"i does not rise → no crowding-out."},
  {id:"i06",type:"truefalse",topic:"islm",examRelevance:5,source:"Lecture 05",question:"IS is downward-sloping because higher i reduces investment and therefore equilibrium Y.",answer:true,explanation:"Higher i → lower I → lower demand → lower Y."},
  {id:"i07",type:"mcq",topic:"islm",examRelevance:5,source:"Lecture 05",question:"What makes the IS multiplier larger than 1/(1−c₁)?",options:["Money market","Investment depending positively on Y (accelerator)","Taxes","CB setting i"],answer:1,explanation:"Multiplier becomes 1/(1−c₁−b₁)."},
  {id:"i08",type:"truefalse",topic:"islm",examRelevance:5,source:"Modern treatment",question:"In the modern treatment the LM curve is often drawn as horizontal because the central bank sets the interest rate.",answer:true,explanation:"CB chooses i; the money supply adjusts endogenously to clear the money market."},
  {id:"i09",type:"mcq",topic:"islm",examRelevance:5,source:"Core",question:"A simultaneous rise in G and rise in money supply typically leads to:",options:["Higher Y, ambiguous i","Lower Y, higher i","Ambiguous Y, higher i","Lower Y, lower i"],answer:0,explanation:"Both policies raise Y; the effect on i is ambiguous (IS right, LM down/right)."},

  // NEW IS-LM
  {id:"i10",type:"numerical",topic:"islm",examRelevance:5,source:"HW3-style",question:"IS: Y = 1200 − 30i (i in %). LM: Y = 800 + 20i. Equilibrium Y?",answer:960,tolerance:0,explanation:"1200−30i = 800+20i → 400=50i → i=8; Y=1200−240=960."},
  {id:"i11",type:"numerical",topic:"islm",examRelevance:5,source:"HW3-style",question:"Same IS-LM. Equilibrium interest rate i (percent)?",answer:8,tolerance:0,explanation:"i=8."},
  {id:"i12",type:"numerical",topic:"islm",examRelevance:5,source:"Derivative of i10",question:"IS becomes Y=1350−30i (fiscal expansion). New equilibrium Y (same LM)?",answer:1020,tolerance:0,explanation:"1350−30i=800+20i → 550=50i → i=11; Y=800+220=1020."},
  {id:"i13",type:"truefalse",topic:"islm",examRelevance:5,source:"Core",question:"An increase in the risk premium shifts the IS curve left for a given policy rate.",answer:true,explanation:"Higher risk premium raises borrowing costs → lower I → IS left."},
  {id:"i14",type:"mcq",topic:"islm",examRelevance:5,source:"Core",question:"If the risk premium rises one-for-one with a cut in the policy rate, the effect of the monetary expansion on Y is:",options:["Fully effective","Partially effective","Zero","Amplified"],answer:2,explanation:"Borrowing rate unchanged → investment unchanged → no effect on Y."},
  {id:"i15",type:"truefalse",topic:"islm",examRelevance:5,source:"Core",question:"When LM is horizontal, fiscal expansion raises Y by the full goods-market multiplier.",answer:true,explanation:"No rise in i → no crowding-out."},
  {id:"i16",type:"mcq",topic:"islm",examRelevance:5,source:"Core",question:"A decrease in consumer confidence shifts:",options:["LM left","IS left","Both","Neither"],answer:1,explanation:"Lower autonomous consumption → IS left."},

  // ===== LABOR =====
  {id:"l01",type:"truefalse",topic:"labor",examRelevance:5,source:"Lecture 07",question:"Natural unemployment is the rate at which real wage from WS equals real wage from PS.",answer:true,explanation:"WS: W/P = F(u,z). PS: W/P = 1/(1+μ). Intersection = u_n."},
  {id:"l02",type:"truefalse",topic:"labor",examRelevance:5,source:"Lecture 07",question:"Higher markup μ or higher z (e.g. more generous benefits) raises the natural rate u_n.",answer:true,explanation:"Higher μ shifts PS down; higher z shifts WS up → higher u_n."},
  {id:"l03",type:"mcq",topic:"labor",examRelevance:5,source:"Lecture 07",question:"An increase in unemployment benefits (higher z) leads to:",options:["Higher natural unemployment","Lower natural unemployment","No change in u_n","Lower medium-run real wage"],answer:0,explanation:"WS shifts up → intersection with PS at higher u_n."},
  {id:"l04",type:"truefalse",topic:"labor",examRelevance:5,source:"Lecture 07",question:"In the medium run the real wage is determined solely by the markup (W/P = 1/(1+μ)).",answer:true,explanation:"PS is horizontal; WS adjusts via unemployment until the real wage equals 1/(1+μ)."},

  // NEW LABOR
  {id:"l05",type:"mcq",topic:"labor",examRelevance:5,source:"Core",question:"A decrease in the markup μ (more competition) leads to:",options:["Higher natural unemployment","Lower natural unemployment and higher real wage","No change in u_n","Lower real wage"],answer:1,explanation:"PS shifts up → lower u_n and higher real wage."},
  {id:"l06",type:"truefalse",topic:"labor",examRelevance:5,source:"Core",question:"Stronger employment protection (higher z) raises the natural rate of unemployment.",answer:true,explanation:"Higher z shifts WS up."},
  {id:"l07",type:"mcq",topic:"labor",examRelevance:4,source:"Core",question:"Natural employment is determined by:",options:["Aggregate demand","Intersection of WS and PS","Monetary policy","The position of the IS curve"],answer:1,explanation:"Supply-side labor-market equilibrium."},
  {id:"l08",type:"truefalse",topic:"labor",examRelevance:5,source:"Core",question:"In the medium run, a rise in unemployment benefits lowers the real wage.",answer:false,explanation:"Real wage is still 1/(1+μ); higher z only raises u_n."},

  // ===== PHILLIPS CURVE =====
  {id:"p01",type:"truefalse",topic:"pc",examRelevance:5,source:"Lecture 08",question:"When u < u_n, inflation tends to rise (accelerate) under adaptive expectations.",answer:true,explanation:"π_t − πᵉ_t = −β(u_t − u_n). If u < u_n, π > πᵉ."},
  {id:"p02",type:"mcq",topic:"pc",examRelevance:5,source:"Core",question:"If CB keeps u permanently below u_n (adaptive expectations), inflation:",options:["Stabilizes higher","Keeps accelerating","Falls to zero","Unaffected"],answer:1,explanation:"Accelerationist PC → continuous rise in inflation."},
  {id:"p03",type:"truefalse",topic:"pc",examRelevance:5,source:"Lecture 08",question:"The original Phillips curve was a level relation; modern versions with adaptive expectations are accelerationist.",answer:true,explanation:"Original: π = −α(u−u_n). Adaptive θ=1: Δπ = −α(u−u_n)."},
  {id:"p04",type:"mcq",topic:"pc",examRelevance:5,source:"Core",question:"When expectations are fully anchored (πᵉ = π-bar), the Phillips curve is:",options:["Vertical","A stable negative level relation","Accelerationist","Horizontal"],answer:1,explanation:"π − π-bar = −α(u−u_n) → classic tradeoff."},
  {id:"p05",type:"truefalse",topic:"pc",examRelevance:5,source:"Lecture 08",question:"Higher wage indexation increases the sensitivity of inflation changes to the unemployment gap.",answer:true,explanation:"Indexation raises the coefficient on the unemployment gap."},

  // NEW PC
  {id:"p06",type:"numerical",topic:"pc",examRelevance:5,source:"Derivative",question:"Accelerationist PC: Δπ = −0.5 (u − 0.06). If u=0.04, by how many percentage points does inflation change this period?",answer:1,tolerance:0,explanation:"Δπ = −0.5(0.04−0.06)= +0.01 → +1 pp."},
  {id:"p07",type:"numerical",topic:"pc",examRelevance:5,source:"Derivative",question:"Same PC. What unemployment rate keeps inflation constant?",answer:0.06,tolerance:0,explanation:"u = u_n = 0.06."},
  {id:"p08",type:"truefalse",topic:"pc",examRelevance:5,source:"Core",question:"Under fully adaptive expectations there is no long-run trade-off between inflation and unemployment.",answer:true,explanation:"Long-run PC is vertical at u_n."},
  {id:"p09",type:"mcq",topic:"pc",examRelevance:5,source:"Core",question:"An oil-price shock that raises the markup shifts the Phillips curve:",options:["Down","Up","Not at all","Only IS"],answer:1,explanation:"Higher inflation for any given unemployment rate."},
  {id:"p10",type:"truefalse",topic:"pc",examRelevance:5,source:"Core",question:"If expectations are perfectly anchored, a temporary rise in unemployment permanently lowers the inflation rate.",answer:false,explanation:"With anchored expectations the PC is a level relation; once u returns to u_n, inflation returns to the anchored level."},

  // ===== MEDIUM RUN =====
  {id:"med01",type:"truefalse",topic:"medium",examRelevance:5,source:"Lecture 09",question:"After a positive demand shock the economy returns to natural output in the medium run, but inflation is higher if policy does not tighten.",answer:true,explanation:"Higher expected inflation shifts PC; restoring u_n requires higher real rates."},
  {id:"med02",type:"mcq",topic:"medium",examRelevance:5,source:"Core",question:"In the medium run, monetary policy is:",options:["Neutral for output but affects inflation","Affects both output and inflation permanently","Neutral for both","Affects only the real interest rate"],answer:0,explanation:"Output returns to natural level; inflation is determined by monetary policy."},
  {id:"med03",type:"truefalse",topic:"medium",examRelevance:5,source:"Core",question:"In the IS-LM-PC model a permanent increase in G raises natural output.",answer:false,explanation:"Natural output is supply-side (WS-PS). Demand shocks affect only prices/inflation in the medium run."},

  // NEW MEDIUM
  {id:"med04",type:"mcq",topic:"medium",examRelevance:5,source:"Core",question:"After a permanent rise in G, in the medium run the real interest rate is:",options:["Higher","Lower","Unchanged","Determined only by money supply"],answer:0,explanation:"Higher G requires higher r to keep Y at natural level (crowding-out of I)."},
  {id:"med05",type:"truefalse",topic:"medium",examRelevance:5,source:"Core",question:"In the medium run a permanent increase in the money supply raises the price level proportionally and leaves real variables unchanged.",answer:true,explanation:"Monetary neutrality / classical dichotomy."},
  {id:"med06",type:"mcq",topic:"medium",examRelevance:5,source:"Core",question:"An adverse supply shock (higher μ) in the medium run produces:",options:["Higher natural unemployment and lower real wage","Lower natural unemployment","Unchanged u_n","Higher output"],answer:0,explanation:"PS shifts down → higher u_n, lower real wage."},
  {id:"med07",type:"truefalse",topic:"medium",examRelevance:5,source:"Core",question:"The medium-run equilibrium is characterized by u = u_n and π constant (or equal to expected inflation).",answer:true,explanation:"Definition of medium-run equilibrium in the IS-LM-PC model."},

  // ===== GROWTH =====
  {id:"gr01",type:"truefalse",topic:"growth",examRelevance:3,source:"Core Solow",question:"In the Solow model, a higher saving rate permanently raises the growth rate of output per worker.",answer:false,explanation:"Higher s raises the level of capital and output per worker; long-run growth is determined by technical progress."},
  {id:"gr02",type:"mcq",topic:"growth",examRelevance:3,source:"Core Solow",question:"In the Solow steady state, output per effective worker is constant when:",options:["s increases","n or δ rises","sf(k) = (δ+n+g)k","The capital stock grows at rate n"],answer:2,explanation:"Investment equals break-even investment."},
  {id:"gr03",type:"truefalse",topic:"growth",examRelevance:3,source:"Core",question:"Countries with higher investment rates tend to have higher levels of output per worker, consistent with the Solow model.",answer:true,explanation:"Higher s → higher steady-state k and y."},

  // NEW GROWTH
  {id:"gr04",type:"numerical",topic:"growth",examRelevance:3,source:"Core",question:"Solow: s=0.3, δ+n+g=0.08, f(k)=k^{0.5}. Steady-state capital per effective worker k*?",answer:14.0625,tolerance:0.01,explanation:"0.3 √k = 0.08 k → √k = 0.3/0.08 = 3.75 → k* = 3.75² = 14.0625."},
  {id:"gr05",type:"truefalse",topic:"growth",examRelevance:3,source:"Core",question:"In the Solow model with technical progress, steady-state growth of output per worker equals the rate of technical progress g.",answer:true,explanation:"y grows at rate g."},
  {id:"gr06",type:"mcq",topic:"growth",examRelevance:3,source:"Core",question:"An increase in the depreciation rate δ leads to a new steady state with:",options:["Higher k* and y*","Lower k* and y*","Unchanged k*","Higher growth rate of y"],answer:1,explanation:"Higher break-even investment → lower steady-state capital intensity."},
  {id:"gr07",type:"truefalse",topic:"growth",examRelevance:3,source:"Core",question:"The golden-rule capital stock maximizes steady-state consumption per effective worker.",answer:true,explanation:"Definition of the golden rule."},

  // ===== OPEN ECONOMY =====
  {id:"o01",type:"truefalse",topic:"open",examRelevance:3,source:"Sample / Core",question:"Under interest parity, if the domestic interest rate is higher than the foreign rate, the domestic currency is expected to depreciate.",answer:false,explanation:"Higher domestic i requires expected appreciation of the domestic currency."},
  {id:"o02",type:"mcq",topic:"open",examRelevance:3,source:"Sample",question:"Under UIP, if r > r*, the domestic currency between t and t+1 must:",options:["Appreciate","Depreciate","Remain unchanged","The statement is false"],answer:0,explanation:"Expected appreciation is required for UIP to hold."},

  // NEW OPEN
  {id:"o03",type:"truefalse",topic:"open",examRelevance:3,source:"Core",question:"In an open economy the goods-market multiplier is smaller than in a closed economy because of the import leakage.",answer:true,explanation:"Additional leakage through imports reduces the multiplier."},
  {id:"o04",type:"mcq",topic:"open",examRelevance:3,source:"Core",question:"Under floating exchange rates and perfect capital mobility, a fiscal expansion typically causes:",options:["Appreciation and partial crowding-out via net exports","Depreciation and amplification","No change in the exchange rate","Full crowding-out via the interest rate only"],answer:0,explanation:"Higher i attracts capital inflows → appreciation → NX falls (Mundell-Fleming)."},
  {id:"o05",type:"truefalse",topic:"open",examRelevance:3,source:"Core",question:"Under fixed exchange rates and perfect capital mobility, independent monetary policy is impossible.",answer:true,explanation:"CB must intervene to defend the peg; money supply becomes endogenous."},
  {id:"o06",type:"mcq",topic:"open",examRelevance:3,source:"Core",question:"A rise in the foreign interest rate r* under floating rates tends to:",options:["Appreciate the domestic currency","Depreciate the domestic currency","Leave the exchange rate unchanged","Raise domestic Y unambiguously"],answer:1,explanation:"Capital outflows → depreciation."},

  // ===== NATIONAL ACCOUNTS =====
  {id:"a01",type:"mcq",topic:"accounts",examRelevance:2,source:"Sample Exam",question:"Income approach to GDP includes:",options:["Only wages of residents","Wages + profits + taxes on production (residency-adjusted)","Only final sales","Imports of intermediates"],answer:1,explanation:"Sum of factor incomes generated by domestic production."},
  {id:"a02",type:"truefalse",topic:"accounts",examRelevance:2,source:"Sample",question:"GNP = GDP + net factor payments from abroad.",answer:true,explanation:"GNP = GDP + NFP."},

  // NEW ACCOUNTS
  {id:"a03",type:"numerical",topic:"accounts",examRelevance:2,source:"Sample-style",question:"GDP = 2000, net factor payments from abroad = −50. What is GNP?",answer:1950,tolerance:0,explanation:"GNP = 2000 − 50 = 1950."},
  {id:"a04",type:"truefalse",topic:"accounts",examRelevance:2,source:"Core",question:"Private saving + public saving = investment + net exports (current account).",answer:true,explanation:"S − I = NX (fundamental identity)."},
  {id:"a05",type:"mcq",topic:"accounts",examRelevance:2,source:"Core",question:"Which of the following is a leakage from the circular flow in an open economy?",options:["Investment","Government spending","Imports","Exports"],answer:2,explanation:"Imports are a leakage; exports are an injection."},
  {id:"a06",type:"truefalse",topic:"accounts",examRelevance:2,source:"Core",question:"GDP measures production within the geographic borders of a country; GNP measures production by the residents of a country.",answer:true,explanation:"Standard distinction."},

  // ===== ADDITIONAL NUMERICAL SYSTEMS (high exam value) =====

  // --- Full IS-LM System 2 ---
  {id:"i22",type:"numerical",topic:"islm",examRelevance:5,source:"New system",question:"IS: Y = 1500 − 40i (i in %). LM: Y = 900 + 30i. Equilibrium interest rate i (in %)?",answer:8.571,tolerance:0.01,explanation:"1500−40i = 900+30i → 600 = 70i → i = 600/70 ≈ 8.571%."},
  {id:"i23",type:"numerical",topic:"islm",examRelevance:5,source:"New system",question:"Same IS-LM. Equilibrium output Y?",answer:1157.14,tolerance:0.5,explanation:"Y = 1500 − 40×(600/70) ≈ 1157.14."},
  {id:"i24",type:"numerical",topic:"islm",examRelevance:5,source:"Derivative",question:"Same LM, but IS becomes Y = 1600 − 40i (G↑). New equilibrium Y?",answer:1200,tolerance:0.5,explanation:"1600−40i = 900+30i → 700=70i → i=10; Y=900+300=1200."},

  // --- Goods market with accelerator ---
  {id:"g15",type:"numerical",topic:"goods",examRelevance:5,source:"Accelerator",question:"C = 100 + 0.8 Y_D, I = 50 + 0.15 Y, T = 50, G = 100. What is the multiplier?",answer:20,tolerance:0,explanation:"1/(1−0.8−0.15)=1/0.05=20."},
  {id:"g16",type:"numerical",topic:"goods",examRelevance:5,source:"Accelerator",question:"Same accelerator economy. Equilibrium output Y?",answer:4200,tolerance:0,explanation:"Autonomous spending = 100 − 0.8×50 + 50 + 100 = 210. Y = 20×210 = 4200."},
  {id:"g17",type:"numerical",topic:"goods",examRelevance:5,source:"Derivative",question:"C = 100 + 0.6 Y_D, I = 50 + 0.2 Y, T = 100, G = 150. Multiplier?",answer:5,tolerance:0,explanation:"1/(1−0.6−0.2)=1/0.2=5."},
  {id:"g18",type:"numerical",topic:"goods",examRelevance:5,source:"Derivative",question:"Same (MPC=0.6, b1=0.2). Equilibrium Y?",answer:1200,tolerance:0,explanation:"Autonomous = 100 − 0.6×100 + 50 + 150 = 240. Y=5×240=1200."},

  // --- Solow numerical ---
  {id:"gr08",type:"numerical",topic:"growth",examRelevance:3,source:"Solow",question:"Solow: s=0.25, δ=0.04, n=0.01, g=0.02, f(k)=√k. Steady-state k*?",answer:12.755,tolerance:0.01,explanation:"s√k=(δ+n+g)k → 0.25√k=0.07k → √k=0.25/0.07≈3.571 → k*=(3.571)²≈12.755."},
  {id:"gr09",type:"numerical",topic:"growth",examRelevance:3,source:"Solow",question:"Same Solow parameters. Steady-state output per effective worker y*?",answer:3.571,tolerance:0.01,explanation:"y*=√k*≈3.571."},
  {id:"gr10",type:"numerical",topic:"growth",examRelevance:3,source:"Derivative",question:"Solow: s=0.3, δ=0.05, n=0.02, g=0.03, f(k)=√k. Steady-state k*?",answer:9,tolerance:0,explanation:"0.3√k = 0.1 k → √k = 3 → k*=9."},
  {id:"gr11",type:"numerical",topic:"growth",examRelevance:3,source:"Derivative",question:"Same as gr10. If s rises to 0.4, new k*?",answer:16,tolerance:0,explanation:"0.4√k=0.1k → √k=4 → k*=16."},

  // --- Phillips curve numerical ---
  {id:"p11",type:"numerical",topic:"pc",examRelevance:5,source:"Numerical",question:"Accelerationist PC: Δπ = −0.4 (u − 0.05). If u=0.07, by how many percentage points does inflation change?",answer:-0.8,tolerance:0.01,explanation:"Δπ = −0.4×(0.07−0.05)= −0.4×0.02= −0.008 → −0.8 pp."},
  {id:"p12",type:"numerical",topic:"pc",examRelevance:5,source:"Derivative",question:"Same PC. What u keeps Δπ = 0?",answer:0.05,tolerance:0,explanation:"u = u_n = 0.05."},
  {id:"p13",type:"numerical",topic:"pc",examRelevance:5,source:"Derivative",question:"Δπ = −0.5 (u − 0.06). If the central bank wants Δπ = −0.01 (disinflation of 1 pp), what u is required?",answer:0.08,tolerance:0.001,explanation:"−0.01 = −0.5(u−0.06) → 0.02 = u−0.06 → u=0.08."},

  // --- Money market / multiplier ---
  {id:"m11",type:"numerical",topic:"money",examRelevance:4,source:"Multiplier",question:"Currency-deposit ratio c=0.25, reserve ratio θ=0.1. Money multiplier?",answer:3.571,tolerance:0.01,explanation:"(1+c)/(c+θ)=1.25/0.35≈3.571."},
  {id:"m12",type:"numerical",topic:"money",examRelevance:4,source:"Derivative",question:"Same ratios. If high-powered money H=200, equilibrium money supply M?",answer:714.29,tolerance:0.5,explanation:"M = multiplier × H ≈ 3.571×200 ≈ 714.29."},
  {id:"m13",type:"numerical",topic:"money",examRelevance:4,source:"Derivative",question:"M^D = Y(0.3 − 2i), Y=2000, M^s=400. Equilibrium i?",answer:0.05,tolerance:0.001,explanation:"2000(0.3−2i)=400 → 0.3−2i=0.2 → 2i=0.1 → i=0.05."},

  // --- Open economy / UIP ---
  {id:"o07",type:"numerical",topic:"open",examRelevance:3,source:"UIP",question:"Domestic r=0.04, foreign r*=0.02. Under UIP, what expected appreciation of the domestic currency (as a decimal) is required?",answer:0.0196,tolerance:0.001,explanation:"(1+r)/(1+r*) − 1 = 1.04/1.02 − 1 ≈ 0.0196 (≈1.96%)."},
  {id:"o08",type:"numerical",topic:"open",examRelevance:3,source:"Derivative",question:"r=0.05, r*=0.03. Required expected appreciation of domestic currency (decimal)?",answer:0.0194,tolerance:0.001,explanation:"1.05/1.03 − 1 ≈ 0.0194."},

  // --- Balanced budget & tax multiplier ---
  {id:"g19",type:"numerical",topic:"goods",examRelevance:5,source:"Core",question:"MPC=0.75. Tax multiplier?",answer:-3,tolerance:0,explanation:"−c₁/(1−c₁)=−0.75/0.25=−3."},
  {id:"g20",type:"numerical",topic:"goods",examRelevance:5,source:"Core",question:"MPC=0.75. If G and T both rise by 80, change in Y?",answer:80,tolerance:0,explanation:"Balanced-budget multiplier = 1 → ΔY=80."},

  // --- Simple open-economy goods ---
  {id:"o09",type:"numerical",topic:"open",examRelevance:3,source:"Open goods",question:"Closed-economy multiplier=4. Marginal propensity to import m=0.15. Approximate open-economy multiplier?",answer:2.5,tolerance:0.1,explanation:"1/(1−c₁+m). If original 1/(1−c₁)=4 → 1−c₁=0.25 → new denom=0.25+0.15=0.4 → 1/0.4=2.5."}
];
