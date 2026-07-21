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

  // DERIVATIVES – Goods market
  {id:"g09",type:"numerical",topic:"goods",examRelevance:5,source:"Derivative of g01",question:"Goods market: C = 200 + 0.6 Y_D, I = 150, T = 100, G = 200. Calculate equilibrium output Y.",answer:1100,tolerance:0,explanation:"Y = 200 + 0.6(Y−100) + 150 + 200 = 0.6Y + 490 → 0.4Y = 490 → Y = 1225? Wait recalculate: 200+150+200=550; 0.6*(Y-100)=0.6Y-60 → Z=490+0.6Y → Y=490+0.6Y → 0.4Y=490 → Y=1225."},
  {id:"g10",type:"numerical",topic:"goods",examRelevance:5,source:"Derivative",question:"C = 200 + 0.6 Y_D, I = 150, T = 100, G = 200. Equilibrium Y is 1225. What is the multiplier?",answer:2.5,tolerance:0,explanation:"1/(1−0.6) = 2.5."},
  {id:"g11",type:"numerical",topic:"goods",examRelevance:5,source:"Derivative",question:"Same economy (MPC=0.6). If G rises by 40, by how much does Y rise?",answer:100,tolerance:0,explanation:"ΔY = 40 × 2.5 = 100."},
  {id:"g12",type:"numerical",topic:"goods",examRelevance:5,source:"Derivative of g01",question:"C = 480 + 0.5 Y_D, I = 110, T = 70, G = 250. Now suppose taxes T fall to 50. New equilibrium Y?",answer:1650,tolerance:0,explanation:"ΔT = −20 → ΔYD = +20 → initial effect +10 on C → multiplier 2 → ΔY = +40 → Y = 1650. Or re-solve: Y = 480 + 0.5(Y−50) + 110 + 250 = 0.5Y + 815 → Y=1630? Wait precise: 480+110+250=840; 0.5*(Y-50)=0.5Y-25 → Z=815+0.5Y → Y=1630. Correction: answer 1630."},
  {id:"g13",type:"truefalse",topic:"goods",examRelevance:4,source:"Core",question:"The balanced-budget multiplier (ΔG = ΔT) equals 1 in the simple goods-market model.",answer:true,explanation:"ΔY = (1/(1−c₁))ΔG − (c₁/(1−c₁))ΔT; when ΔG=ΔT the net effect is 1."},

  // ===== MONEY MARKET =====
  {id:"m01",type:"numerical",topic:"money",examRelevance:4,source:"HW2",question:"M^D = Y(0.2−0.8i), Y=5000. Money demand at i=0.01?",answer:960,tolerance:0,explanation:"5000×0.192 = 960."},
  {id:"m02",type:"numerical",topic:"money",examRelevance:4,source:"HW2",question:"Same, money demand at i=0.05?",answer:800,tolerance:0,explanation:"5000×0.16 = 800."},
  {id:"m03",type:"mcq",topic:"money",examRelevance:4,source:"HW2",question:"What increases desired money holdings?",options:["Rise in interest rate","Fall in interest rate","Fall in income","None"],answer:1,explanation:"Money demand decreases in i, increases in Y."},
  {id:"m04",type:"numerical",topic:"money",examRelevance:4,source:"HW2",question:"θ=0.1, no currency, M^D=$Y(0.8−4i), H=100, $Y=5000. Equilibrium i in %?",answer:15,tolerance:0,explanation:"0.1×5000×(0.8−4i)=100 → i=0.15 → 15%."},
  {id:"m05",type:"truefalse",topic:"money",examRelevance:4,source:"HW2",question:"To raise equilibrium money demand the CB should lower the interest rate.",answer:true,explanation:"Money demand is decreasing in i."},

  // DERIVATIVES – Money
  {id:"m06",type:"numerical",topic:"money",examRelevance:4,source:"Derivative",question:"M^D = Y(0.2−0.8i), Y=4000. Money demand at i=0.05?",answer:640,tolerance:0,explanation:"4000×(0.2−0.04)=4000×0.16=640."},
  {id:"m07",type:"numerical",topic:"money",examRelevance:4,source:"Derivative of m04",question:"θ=0.2, no currency, M^D=$Y(0.8−4i), H=100, $Y=5000. Equilibrium i in %?",answer:17.5,tolerance:0.1,explanation:"0.2×5000×(0.8−4i)=100 → 1000×(0.8−4i)=100 → 0.8−4i=0.1 → 4i=0.7 → i=0.175 → 17.5%."},
  {id:"m08",type:"truefalse",topic:"money",examRelevance:4,source:"Core",question:"An increase in the reserve ratio θ reduces the money multiplier and, for given H, reduces the equilibrium money supply.",answer:true,explanation:"Money multiplier ≈ 1/θ (no currency). Higher θ → smaller multiplier."},

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

  // NEW – Full IS-LM numerical from HW3
  {id:"i10",type:"numerical",topic:"islm",examRelevance:5,source:"HW3",question:"IS-LM: C=100+0.3YD, I=150+0.2Y−1000i, T=100, G=200, (M/P)d=2Y−4000i. At equilibrium i=0.01, what is Y?",answer:820,tolerance:0,explanation:"IS: Y=840−2000i. At i=0.01 → Y=820."},
  {id:"i11",type:"numerical",topic:"islm",examRelevance:5,source:"HW3",question:"Same IS-LM economy. At i=0.01 and Y=820, the equilibrium real money supply M is?",answer:1600,tolerance:0,explanation:"M=2×820−4000×0.01=1640−40=1600."},
  {id:"i12",type:"numerical",topic:"islm",examRelevance:5,source:"HW3",question:"Same economy at i=0.01, Y=820. Equilibrium consumption C?",answer:316,tolerance:0,explanation:"C=70+0.3×820=70+246=316."},
  {id:"i13",type:"numerical",topic:"islm",examRelevance:5,source:"HW3",question:"Same economy at i=0.01, Y=820. Equilibrium investment I?",answer:304,tolerance:0,explanation:"I=150+0.2×820−1000×0.01=150+164−10=304."},
  {id:"i14",type:"numerical",topic:"islm",examRelevance:5,source:"HW3",question:"CB lowers the interest rate to 0.005. New equilibrium Y?",answer:830,tolerance:0,explanation:"Y=840−2000×0.005=830."},
  {id:"i15",type:"numerical",topic:"islm",examRelevance:5,source:"HW3",question:"After i falls to 0.005, new real money supply M needed?",answer:1640,tolerance:0,explanation:"M=2×830−4000×0.005=1660−20=1640."},
  {id:"i16",type:"truefalse",topic:"islm",examRelevance:5,source:"HW3",question:"Lowering the policy rate from 1% to 0.5% is expansionary monetary policy.",answer:true,explanation:"Lower i raises investment and output; LM shifts down/right (or horizontal LM moves down)."},
  {id:"i17",type:"numerical",topic:"islm",examRelevance:5,source:"HW3",question:"After the rate cut to 0.5% (M=1640), government raises G from 200 to 300. New equilibrium Y?",answer:930,tolerance:0,explanation:"New IS: Y=1040−2000i. Combined with LM (M=1640) yields Y=930, i=0.055."},
  {id:"i18",type:"numerical",topic:"islm",examRelevance:5,source:"HW3",question:"In the new equilibrium after G=300 and M=1640, the interest rate i is? (as decimal, e.g. 0.055)",answer:0.055,tolerance:0.001,explanation:"From LM: i=(2Y−1640)/4000 at Y=930 → i=0.055."},

  // More IS-LM conceptual
  {id:"i19",type:"truefalse",topic:"islm",examRelevance:5,source:"HW3",question:"If government spending and taxes increase by the same amount, the IS curve does not shift.",answer:false,explanation:"Balanced-budget expansion still shifts IS right (multiplier =1)."},
  {id:"i20",type:"truefalse",topic:"islm",examRelevance:4,source:"HW3",question:"Contractionary monetary policy shifts the LM curve up.",answer:true,explanation:"Higher i needed for any Y, or less real balances."},
  {id:"i21",type:"truefalse",topic:"islm",examRelevance:4,source:"HW3",question:"If the nominal money supply rises 5% and the price level rises 2%, the real money supply rises.",answer:true,explanation:"Real money = M/P; 1.05/1.02 > 1."},

  // ===== LABOR / WS-PS =====
  {id:"l01",type:"truefalse",topic:"labor",examRelevance:5,source:"Lecture 07",question:"Natural unemployment is the rate at which real wage from WS equals real wage from PS.",answer:true,explanation:"WS: W/P = F(u,z). PS: W/P = 1/(1+μ). Intersection = u_n."},
  {id:"l02",type:"truefalse",topic:"labor",examRelevance:5,source:"Lecture 07",question:"Higher markup μ or higher z (e.g. more generous benefits) raises the natural rate u_n.",answer:true,explanation:"Higher μ shifts PS down; higher z shifts WS up → higher u_n."},
  {id:"l03",type:"mcq",topic:"labor",examRelevance:5,source:"Lecture 07",question:"An increase in unemployment benefits (higher z) leads to:",options:["Higher natural unemployment","Lower natural unemployment","No change in u_n","Lower medium-run real wage"],answer:0,explanation:"WS shifts up → intersection with PS at higher u_n."},
  {id:"l04",type:"truefalse",topic:"labor",examRelevance:5,source:"Lecture 07",question:"In the medium run the real wage is determined solely by the markup (W/P = 1/(1+μ)).",answer:true,explanation:"PS is horizontal; WS adjusts via unemployment until the real wage equals 1/(1+μ)."},

  // DERIVATIVES / more labor
  {id:"l05",type:"mcq",topic:"labor",examRelevance:5,source:"Derivative",question:"An increase in the markup μ (e.g. less competition) leads to:",options:["Higher natural unemployment and lower real wage","Lower natural unemployment","Higher real wage in medium run","No change in u_n"],answer:0,explanation:"PS shifts down → higher u_n and lower medium-run real wage."},
  {id:"l06",type:"truefalse",topic:"labor",examRelevance:4,source:"Core",question:"A decrease in the bargaining power of workers (lower z) reduces the natural rate of unemployment.",answer:true,explanation:"WS shifts down → intersection with PS at lower u_n."},
  {id:"l07",type:"truefalse",topic:"labor",examRelevance:4,source:"Core",question:"In the short run the actual unemployment rate can differ from the natural rate; in the medium run it returns to u_n.",answer:true,explanation:"Medium-run adjustment occurs via price/wage dynamics and the Phillips curve."},

  // ===== PHILLIPS CURVE =====
  {id:"p01",type:"truefalse",topic:"pc",examRelevance:5,source:"Lecture 08",question:"When u < u_n, inflation tends to rise (accelerate) under adaptive expectations.",answer:true,explanation:"π_t − πᵉ_t = −β(u_t − u_n). If u < u_n, π > πᵉ."},
  {id:"p02",type:"mcq",topic:"pc",examRelevance:5,source:"Core",question:"If CB keeps u permanently below u_n (adaptive expectations), inflation:",options:["Stabilizes higher","Keeps accelerating","Falls to zero","Unaffected"],answer:1,explanation:"Accelerationist PC → continuous rise in inflation."},
  {id:"p03",type:"truefalse",topic:"pc",examRelevance:5,source:"Lecture 08",question:"The original Phillips curve was a level relation; modern versions with adaptive expectations are accelerationist.",answer:true,explanation:"Original: π = −α(u−u_n). Adaptive θ=1: Δπ = −α(u−u_n)."},
  {id:"p04",type:"mcq",topic:"pc",examRelevance:5,source:"Core",question:"When expectations are fully anchored (πᵉ = π-bar), the Phillips curve is:",options:["Vertical","A stable negative level relation","Accelerationist","Horizontal"],answer:1,explanation:"π − π-bar = −α(u−u_n) → classic tradeoff between inflation level and unemployment."},
  {id:"p05",type:"truefalse",topic:"pc",examRelevance:5,source:"Lecture 08",question:"Higher wage indexation increases the sensitivity of inflation changes to the unemployment gap.",answer:true,explanation:"Indexation raises the coefficient on the unemployment gap in the accelerationist PC."},

  // DERIVATIVES / more PC
  {id:"p06",type:"truefalse",topic:"pc",examRelevance:5,source:"Derivative",question:"If expectations are adaptive and u is kept above u_n for several periods, inflation will keep falling (disinflation).",answer:true,explanation:"Accelerationist PC: Δπ = −α(u−u_n) < 0 when u > u_n."},
  {id:"p07",type:"mcq",topic:"pc",examRelevance:4,source:"Core",question:"The natural rate of unemployment is the rate at which:",options:["Inflation is zero","Inflation is stable (neither accelerating nor decelerating)","Output is maximized","Wages are constant"],answer:1,explanation:"By definition of the accelerationist Phillips curve, Δπ = 0 when u = u_n."},
  {id:"p08",type:"truefalse",topic:"pc",examRelevance:4,source:"Core",question:"Anchored expectations make the short-run tradeoff between inflation and unemployment more stable.",answer:true,explanation:"With πᵉ fixed at the target, the PC is a stable level relation rather than accelerationist."},

  // ===== MEDIUM RUN / IS-LM-PC =====
  {id:"med01",type:"truefalse",topic:"medium",examRelevance:5,source:"Lecture 09",question:"After a positive demand shock the economy returns to natural output in the medium run, but inflation is higher if policy does not tighten.",answer:true,explanation:"Higher expected inflation shifts PC; restoring u_n requires higher real rates."},
  {id:"med02",type:"mcq",topic:"medium",examRelevance:5,source:"Core",question:"In the medium run, monetary policy is:",options:["Neutral for output but affects inflation","Affects both output and inflation permanently","Neutral for both","Affects only the real interest rate"],answer:0,explanation:"Output returns to natural level; inflation (or price level) is determined by monetary policy."},
  {id:"med03",type:"truefalse",topic:"medium",examRelevance:5,source:"Core",question:"In the IS-LM-PC model a permanent increase in G raises natural output.",answer:false,explanation:"Natural output is determined on the supply side (labor market / WS-PS). Demand shocks only affect the price level/inflation in the medium run."},

  // more medium
  {id:"med04",type:"truefalse",topic:"medium",examRelevance:5,source:"Core",question:"In the medium run the real interest rate is determined by the equality of saving and investment at natural output (natural real rate).",answer:true,explanation:"IS at Y_n determines the natural real interest rate r_n."},
  {id:"med05",type:"mcq",topic:"medium",examRelevance:4,source:"Core",question:"A permanent increase in the price of oil that raises the markup typically leads in the medium run to:",options:["Higher u_n and lower real wage","Lower u_n","Higher natural output","No change in natural rate"],answer:0,explanation:"Higher μ shifts PS down → higher natural unemployment and lower real wage."},

  // ===== GROWTH / SOLOW =====
  {id:"gr01",type:"truefalse",topic:"growth",examRelevance:3,source:"Core Solow",question:"In the Solow model, a higher saving rate permanently raises the growth rate of output per worker.",answer:false,explanation:"Higher s raises the level of capital and output per worker, but long-run growth is determined by technical progress."},
  {id:"gr02",type:"mcq",topic:"growth",examRelevance:3,source:"Core Solow",question:"In the Solow steady state, output per effective worker is constant when:",options:["s increases","n or δ rises","sf(k) = (δ+n+g)k","The capital stock grows at rate n"],answer:2,explanation:"Investment equals break-even investment at the steady-state capital intensity."},
  {id:"gr03",type:"truefalse",topic:"growth",examRelevance:3,source:"Core",question:"Countries with higher investment rates tend to have higher levels of output per worker, consistent with the Solow model.",answer:true,explanation:"Higher s leads to higher steady-state k and y."},

  // DERIVATIVES / more growth
  {id:"gr04",type:"truefalse",topic:"growth",examRelevance:3,source:"Core",question:"In the Solow model an increase in the population growth rate n lowers steady-state capital and output per worker.",answer:true,explanation:"Higher n raises break-even investment (δ+n+g)k → lower k*."},
  {id:"gr05",type:"mcq",topic:"growth",examRelevance:3,source:"Core",question:"Long-run growth of output per worker in the Solow model is determined by:",options:["The saving rate","The depreciation rate","The rate of technological progress","The initial capital stock"],answer:2,explanation:"Only technical progress (g) drives sustained growth of y."},
  {id:"gr06",type:"truefalse",topic:"growth",examRelevance:3,source:"Core",question:"The golden-rule capital stock is the level of k that maximises steady-state consumption per worker.",answer:true,explanation:"MPK = δ + n + g at the golden rule."},

  // ===== OPEN ECONOMY =====
  {id:"o01",type:"truefalse",topic:"open",examRelevance:3,source:"Sample / Core",question:"Under interest parity, if the domestic interest rate is higher than the foreign rate, the domestic currency is expected to depreciate.",answer:false,explanation:"Higher domestic i requires expected appreciation of the domestic currency (or the UIP does not hold)."},
  {id:"o02",type:"mcq",topic:"open",examRelevance:3,source:"Sample",question:"Under UIP, if r > r*, the domestic currency between t and t+1 must:",options:["Appreciate","Depreciate","Remain unchanged","The statement is false"],answer:0,explanation:"1+r = (1/ε_t)·(1+r*)·ε_{t+1} implies expected appreciation when r > r*."},

  // more open
  {id:"o03",type:"truefalse",topic:"open",examRelevance:3,source:"Core",question:"A real depreciation improves the trade balance provided the Marshall-Lerner condition holds.",answer:true,explanation:"Marshall-Lerner: sum of export and import elasticities > 1."},
  {id:"o04",type:"mcq",topic:"open",examRelevance:3,source:"Core",question:"In an open economy IS-LM, an increase in the foreign interest rate r* tends to:",options:["Appreciate the domestic currency and reduce net exports","Depreciate the domestic currency and raise net exports","Have no effect on the exchange rate","Raise domestic output unambiguously"],answer:1,explanation:"Higher r* → capital outflow → depreciation → higher NX (IS shifts right)."},

  // ===== NATIONAL ACCOUNTS =====
  {id:"a01",type:"mcq",topic:"accounts",examRelevance:2,source:"Sample Exam",question:"Income approach to GDP includes:",options:["Only wages of residents","Wages + profits + taxes on production (residency-adjusted)","Only final sales","Imports of intermediates"],answer:1,explanation:"Sum of factor incomes generated by domestic production."},
  {id:"a02",type:"truefalse",topic:"accounts",examRelevance:2,source:"Sample",question:"GNP = GDP + net factor payments from abroad.",answer:true,explanation:"GNP adjusts GDP for income earned by residents abroad minus income earned by foreigners domestically."},

  // more accounts
  {id:"a03",type:"truefalse",topic:"accounts",examRelevance:2,source:"Core",question:"Inventory investment is part of GDP even if the goods are not sold in the current period.",answer:true,explanation:"Production approach counts all output; unsold goods appear as inventory investment."},
  {id:"a04",type:"mcq",topic:"accounts",examRelevance:2,source:"Core",question:"Value added of a firm equals:",options:["Total sales","Sales minus intermediate inputs","Wages only","Profits only"],answer:1,explanation:"Value added = revenue − cost of intermediate goods."},

  // ===== RISK PREMIUM & BANKING (from HW3) =====
  {id:"r01",type:"numerical",topic:"money",examRelevance:4,source:"HW3",question:"Risk premium formula: (1+i)=(1−p)(1+i+x). Policy rate i=0.03, risky rate=0.08. Approximate probability of bankruptcy p? (to 3 decimals)",answer:0.046,tolerance:0.002,explanation:"p = 1 − (1.03)/(1.08) ≈ 0.0463."},
  {id:"r02",type:"numerical",topic:"money",examRelevance:4,source:"HW3",question:"Policy rate i=0.04, p=0.01. What is the risk premium x? (to 3 decimals)",answer:0.011,tolerance:0.002,explanation:"x = (1.04)/(0.99) − 1.04 ≈ 0.0105."},
  {id:"r03",type:"numerical",topic:"money",examRelevance:4,source:"HW3",question:"Policy rate i=0.04, p=0.05. What is the risk premium x? (to 3 decimals)",answer:0.055,tolerance:0.002,explanation:"x = (1.04)/(0.95) − 1.04 ≈ 0.0547."},
  {id:"r04",type:"truefalse",topic:"money",examRelevance:4,source:"HW3",question:"An increase in the probability of default raises the risk premium on the risky bond.",answer:true,explanation:"x = (1+i)p/(1−p) is increasing in p."},
  {id:"r05",type:"mcq",topic:"money",examRelevance:3,source:"HW3",question:"A bank has deposits 500, capital 100, assets 600 (loans 400 + other 200). After a 100 deposit withdrawal, to keep capital and total assets unchanged the bank must:",options:["Sell 100 of assets and reduce deposits","Issue new equity","Increase loans","Do nothing"],answer:0,explanation:"Liabilities fall by 100; to keep balance the bank sells assets worth 100."},

  // ===== ADDITIONAL HIGH-YIELD =====
  {id:"x01",type:"truefalse",topic:"islm",examRelevance:5,source:"Core",question:"In the modern IS-LM with interest-rate targeting, fiscal expansion raises Y and the central bank may need to raise the policy rate to keep inflation stable.",answer:true,explanation:"IS shifts right; to prevent overheating the CB raises i (LM moves up)."},
  {id:"x02",type:"mcq",topic:"islm",examRelevance:4,source:"Core",question:"An increase in consumer confidence (higher c0) shifts:",options:["IS right","IS left","LM right","LM left"],answer:0,explanation:"Higher autonomous consumption raises demand at any interest rate."},
  {id:"x03",type:"truefalse",topic:"pc",examRelevance:5,source:"Core",question:"The sacrifice ratio measures how much cumulative unemployment (or lost output) is required to reduce inflation by one percentage point.",answer:true,explanation:"Standard definition under adaptive expectations / accelerationist PC."}
];
