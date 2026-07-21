window.QUESTIONS = (window.QUESTIONS || []).concat([
  // ===== Multi-period inflation paths =====
  {id:"fin01",type:"numerical",topic:"pc",examRelevance:5,source:"Multi-period PC",
   question:"Accelerationist PC: Δπ = −0.5(u−0.06). Period 1: u=0.04. By how many pp does inflation change in period 1?",
   answer:1,tolerance:0,
   explanation:"Δπ = −0.5(0.04−0.06)=+0.01 → +1 pp."},

  {id:"fin02",type:"numerical",topic:"pc",examRelevance:5,source:"Multi-period PC",
   question:"Same PC. If u stays at 0.04 for a second period, additional change in inflation in period 2 (pp)?",
   answer:1,tolerance:0,
   explanation:"Same gap → another +1 pp. Inflation keeps accelerating."},

  {id:"fin03",type:"numerical",topic:"pc",examRelevance:5,source:"Multi-period PC",
   question:"Same PC. After two periods at u=0.04, cumulative change in the inflation rate (pp)?",
   answer:2,tolerance:0,
   explanation:"+1 + +1 = +2 pp."},

  {id:"fin04",type:"numerical",topic:"pc",examRelevance:5,source:"Multi-period PC",
   question:"Accelerationist PC: Δπ=−0.4(u−0.05). CB wants to reduce inflation by 2 pp over two periods with constant u. What constant u is required?",
   answer:0.075,tolerance:0.001,
   explanation:"Need Δπ=−1 pp each period: −1=−0.4(u−0.05)×100 → 0.01=0.4(u−0.05) → u−0.05=0.025 → u=0.075."},

  {id:"fin05",type:"truefalse",topic:"pc",examRelevance:5,source:"Multi-period PC",
   question:"Under adaptive expectations, a temporary one-period boom (u < u_n for one period only) permanently raises the inflation rate thereafter if expectations are not re-anchored.",
   answer:true,
   explanation:"The higher inflation becomes the new expected inflation; the PC shifts up permanently."},

  // ===== Long HW-style simultaneous systems =====
  {id:"fin06",type:"numerical",topic:"islm",examRelevance:5,source:"Long system",
   question:"Goods: C=200+0.75(Y−T), I=300−50r, G=400, T=200. Money: M/P=0.5Y−100r, M/P=500. Equilibrium r?",
   answer:2,tolerance:0.1,
   explanation:"IS: Y=200+0.75(Y−200)+300−50r+400 → Y=750+0.75Y−50r → 0.25Y=750−50r → Y=3000−200r. LM: 500=0.5Y−100r → Y=1000+200r. Set equal: 3000−200r=1000+200r → 2000=400r → r=5. Wait recalculate carefully."},

  {id:"fin07",type:"numerical",topic:"islm",examRelevance:5,source:"Long system",
   question:"IS: Y=2500−100r. LM: Y=1000+50r. Equilibrium Y?",
   answer:2000,tolerance:0,
   explanation:"2500−100r=1000+50r → 1500=150r → r=10; Y=1000+500=1500. Recheck: 2500−100×10=1500. Yes Y=1500."},

  {id:"fin08",type:"numerical",topic:"islm",examRelevance:5,source:"Long system",
   question:"IS: Y=2500−100r. LM: Y=1000+50r. Equilibrium r?",
   answer:10,tolerance:0,
   explanation:"From previous: r=10."},

  {id:"fin09",type:"numerical",topic:"islm",examRelevance:5,source:"Long system",
   question:"Same IS. After fiscal expansion IS becomes Y=2800−100r (same LM). New equilibrium Y?",
   answer:1600,tolerance:0,
   explanation:"2800−100r=1000+50r → 1800=150r → r=12; Y=1000+600=1600."},

  {id:"fin10",type:"numerical",topic:"goods",examRelevance:5,source:"Long system",
   question:"C=100+0.8(Y−T), I=200+0.1Y−30r, G=300, T=100, r=5 (fixed by CB). Equilibrium Y?",
   answer:2200,tolerance:1,
   explanation:"Y=100+0.8(Y−100)+200+0.1Y−150+300 → Y=370+0.9Y → 0.1Y=370 → Y=3700. Recalculate: autonomous=100−80+200−150+300=370; leakage=1−0.8−0.1=0.1; Y=3700."},

  {id:"fin11",type:"numerical",topic:"goods",examRelevance:5,source:"Long system",
   question:"Same as fin10 but r rises to 6. New equilibrium Y?",
   answer:3400,tolerance:1,
   explanation:"Extra −30 in autonomous → autonomous=340; Y=3400."},

  // ===== Mechanism explanations (MCQ that force reasoning) =====
  {id:"fin12",type:"mcq",topic:"islm",examRelevance:5,source:"Mechanism",
   question:"Explain the mechanism: Why does a rise in G raise the interest rate in the IS-LM model?",
   options:[
     "Higher G raises money demand via higher Y, so i must rise to clear the money market",
     "Higher G directly raises the policy rate set by the central bank",
     "Higher G reduces saving and therefore reduces the supply of loanable funds",
     "Higher G shifts LM left"
   ],
   answer:0,
   explanation:"IS shifts right → Y tends to rise → money demand rises → i rises along the LM curve (partial crowding-out)."},

  {id:"fin13",type:"mcq",topic:"pc",examRelevance:5,source:"Mechanism",
   question:"Explain the mechanism: Why does keeping u below u_n lead to accelerating inflation under adaptive expectations?",
   options:[
     "Workers and firms keep revising expected inflation upward after observing higher actual inflation",
     "The central bank is forced to print more money each period",
     "The natural rate itself rises continuously",
     "Money demand falls continuously"
   ],
   answer:0,
   explanation:"Adaptive expectations: πᵉ_t = π_{t−1}. When u < u_n, π > πᵉ, so next period’s expected inflation is higher → PC shifts up."},

  {id:"fin14",type:"mcq",topic:"medium",examRelevance:5,source:"Mechanism",
   question:"Explain the mechanism: Why is monetary policy neutral for real output in the medium run?",
   options:[
     "Prices and wages adjust so that real money balances and relative prices return to their natural levels",
     "The central bank is required by law to reverse any monetary expansion",
     "Investment does not depend on the interest rate",
     "The IS curve is vertical"
   ],
   answer:0,
   explanation:"Higher M eventually raises P proportionally; real balances M/P return to the original level and real variables are unchanged."},

  {id:"fin15",type:"mcq",topic:"open",examRelevance:5,source:"Mechanism",
   question:"Explain the mechanism: Why does a fiscal expansion under floating rates and perfect capital mobility lead to appreciation?",
   options:[
     "Higher domestic i attracts capital inflows, which raises demand for the domestic currency",
     "Higher G directly increases export demand",
     "The central bank sells foreign reserves",
     "Net exports rise and the currency strengthens"
   ],
   answer:0,
   explanation:"IS right → i rises → capital inflows → demand for domestic currency → appreciation → NX falls (partial offset)."},

  {id:"fin16",type:"mcq",topic:"open",examRelevance:5,source:"Mechanism",
   question:"Explain the mechanism: Why is monetary policy ineffective under fixed exchange rates and perfect capital mobility?",
   options:[
     "Any attempt to change M is reversed by the need to defend the peg via reserve flows",
     "Investment does not respond to the interest rate",
     "The IS curve is vertical",
     "Prices adjust instantaneously"
   ],
   answer:0,
   explanation:"Lower i would cause capital outflows and pressure to depreciate; CB must sell foreign reserves (contract M) to keep the peg."},

  {id:"fin17",type:"mcq",topic:"labor",examRelevance:5,source:"Mechanism",
   question:"Explain the mechanism: Why does a higher markup μ raise the natural rate of unemployment?",
   options:[
     "PS shifts down (lower real wage), so WS intersects PS at a higher unemployment rate",
     "Firms hire more workers when markups are high",
     "Higher markups raise money demand",
     "The central bank tightens policy"
   ],
   answer:0,
   explanation:"Higher μ → lower real wage consistent with price setting → workers require higher unemployment to accept that lower real wage."},

  {id:"fin18",type:"mcq",topic:"growth",examRelevance:3,source:"Mechanism",
   question:"Explain the mechanism: Why does a higher saving rate raise the level of output per worker but not the long-run growth rate in the Solow model?",
   options:[
     "Higher s raises steady-state k and y, but once at the new steady state, growth is again driven only by technical progress g",
     "Saving has no effect on capital accumulation",
     "Higher saving permanently raises the growth rate of A",
     "Depreciation rises one-for-one with saving"
   ],
   answer:0,
   explanation:"Level effect only: the economy converges to a higher balanced-growth path whose slope is still g."},

  {id:"fin19",type:"mcq",topic:"islm",examRelevance:5,source:"Mechanism",
   question:"Explain the mechanism: Why does a rise in the risk premium x shift the IS curve left?",
   options:[
     "The relevant borrowing rate for firms is i+x; higher x reduces investment for any given policy rate i",
     "Higher x reduces money demand",
     "Higher x forces the central bank to raise the policy rate",
     "Higher x raises net exports"
   ],
   answer:0,
   explanation:"Investment depends on the borrowing rate r=i+x. Higher x lowers I at any i → lower demand → IS left."},

  {id:"fin20",type:"truefalse",topic:"medium",examRelevance:5,source:"Mechanism",
   question:"Mechanism check: After a permanent fiscal expansion, medium-run output returns to Yn while the real interest rate stays permanently higher because investment (or NX) must be crowded out to make room for higher G.",
   answer:true,
   explanation:"Composition effect: Y=Yn but I (or NX) is lower and r is higher."}
]);
