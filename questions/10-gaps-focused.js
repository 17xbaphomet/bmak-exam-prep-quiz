window.QUESTIONS = (window.QUESTIONS || []).concat([
  // ===== WS-PS numericals =====
  {id:"gap01",type:"numerical",topic:"labor",examRelevance:5,source:"WS-PS numerical",
   question:"WS: W/P = 1 − u + z with z=0.1. PS: W/P = 1/(1+μ) with μ=0.25. Natural unemployment rate u_n?",
   answer:0.3,tolerance:0.01,
   explanation:"1/(1+0.25)=0.8. Set 1−u+0.1=0.8 → 1.1−u=0.8 → u_n=0.3."},

  {id:"gap02",type:"numerical",topic:"labor",examRelevance:5,source:"WS-PS numerical",
   question:"Same WS-PS (z=0.1). If μ falls to 0.1, new natural rate u_n?",
   answer:0.191,tolerance:0.01,
   explanation:"1/1.1≈0.909. 1−u+0.1=0.909 → u≈0.191."},

  {id:"gap03",type:"numerical",topic:"labor",examRelevance:5,source:"WS-PS numerical",
   question:"WS: W/P = 1.2 − u. PS: W/P = 1/(1+μ) with μ=0.5. Natural rate u_n?",
   answer:0.533,tolerance:0.01,
   explanation:"1/1.5≈0.667. 1.2−u=0.667 → u_n≈0.533."},

  {id:"gap04",type:"numerical",topic:"labor",examRelevance:5,source:"WS-PS numerical",
   question:"WS: W/P = 1 − 2u + z, z=0.05. PS: W/P=0.8. What is u_n?",
   answer:0.125,tolerance:0.01,
   explanation:"1−2u+0.05=0.8 → 1.05−2u=0.8 → 2u=0.25 → u_n=0.125."},

  {id:"gap05",type:"truefalse",topic:"labor",examRelevance:5,source:"WS-PS",
   question:"In the medium run the real wage is determined solely by the markup: W/P = 1/(1+μ).",
   answer:true,
   explanation:"PS is horizontal; WS adjusts via unemployment until the real wage equals 1/(1+μ)."},

  // ===== Joint IS-LM numerical systems =====
  {id:"gap06",type:"numerical",topic:"islm",examRelevance:5,source:"IS-LM system",
   question:"IS: Y = 1200 − 40 r. LM: Y = 4(M/P) + 10 r with M/P = 150. Equilibrium r?",
   answer:12,tolerance:0.1,
   explanation:"1200−40r = 600+10r → 600=50r → r=12."},

  {id:"gap07",type:"numerical",topic:"islm",examRelevance:5,source:"IS-LM system",
   question:"Same system as gap06. Equilibrium output Y?",
   answer:720,tolerance:0,
   explanation:"Y=1200−40×12=720."},

  {id:"gap08",type:"numerical",topic:"islm",examRelevance:5,source:"IS-LM system",
   question:"IS: Y=1000−50i. LM: M/P=0.5Y−100i with M/P=200. Equilibrium i?",
   answer:2.4,tolerance:0.05,
   explanation:"200=0.5(1000−50i)−100i → 200=500−25i−100i → 125i=300 → i=2.4."},

  {id:"gap09",type:"numerical",topic:"islm",examRelevance:5,source:"IS-LM system",
   question:"Same system as gap08. Equilibrium Y?",
   answer:880,tolerance:1,
   explanation:"Y=1000−50×2.4=880."},

  {id:"gap10",type:"numerical",topic:"islm",examRelevance:5,source:"IS-LM system",
   question:"IS: Y=1500−100i. LM: M/P=Y−200i, M/P=500. Equilibrium i?",
   answer:3.333,tolerance:0.01,
   explanation:"500=(1500−100i)−200i → 500=1500−300i → 300i=1000 → i=10/3≈3.333."},

  {id:"gap11",type:"numerical",topic:"islm",examRelevance:5,source:"IS-LM system",
   question:"Same as gap10. Equilibrium Y?",
   answer:1166.7,tolerance:1,
   explanation:"Y=1500−100×(10/3)=1500−1000/3≈1166.7."},

  // ===== Multi-step medium-run chains =====
  {id:"gap12",type:"mcq",topic:"medium",examRelevance:5,source:"Medium-run chain",
   question:"Permanent rise in G. Short run: Y↑, i↑. Medium run: Y returns to Yn. What happens to the real interest rate?",
   options:["Returns to original level","Permanently higher","Permanently lower","Unchanged throughout"],
   answer:1,
   explanation:"Higher G requires a higher natural real rate to crowd out investment so that Y=Yn."},

  {id:"gap13",type:"mcq",topic:"medium",examRelevance:5,source:"Medium-run chain",
   question:"Permanent monetary expansion. Short run: Y↑, i↓. Medium-run outcome for real variables?",
   options:["Y and r permanently higher","Y and r back to original natural levels; only P higher","Y permanently higher, r lower","No change even in the short run"],
   answer:1,
   explanation:"Monetary neutrality: real variables return to natural levels; the price level rises proportionally."},

  {id:"gap14",type:"truefalse",topic:"medium",examRelevance:5,source:"Medium-run chain",
   question:"After a permanent fiscal expansion, in the medium run the composition of output changes (more G, less I) even though total Y returns to Yn.",
   answer:true,
   explanation:"Composition effect via a permanently higher natural real rate."},

  {id:"gap15",type:"mcq",topic:"medium",examRelevance:5,source:"Medium-run chain",
   question:"Adverse supply shock (higher μ). Medium-run result?",
   options:["u_n rises and the real wage falls","u_n falls and the real wage rises","Only short-run effects","Natural output rises"],
   answer:0,
   explanation:"PS shifts down → higher natural unemployment and lower real wage."},

  {id:"gap16",type:"truefalse",topic:"medium",examRelevance:5,source:"Medium-run chain",
   question:"Under adaptive expectations, keeping u permanently below u_n requires ever-accelerating inflation.",
   answer:true,
   explanation:"Accelerationist Phillips curve."},

  {id:"gap17",type:"mcq",topic:"medium",examRelevance:5,source:"Medium-run chain",
   question:"After a positive demand shock, the central bank wants to stabilize inflation in the medium run. It should:",
   options:["Keep the real rate unchanged","Raise the real policy rate until u returns to u_n","Lower the real rate further","Permanently increase the money supply"],
   answer:1,
   explanation:"To prevent accelerating inflation the real rate must rise enough to bring unemployment back to the natural rate."},

  // ===== Banking / risk premium =====
  {id:"gap18",type:"truefalse",topic:"money",examRelevance:4,source:"Banking",
   question:"An increase in the risk premium x raises the interest rate relevant for investment (r=i+x) and shifts the IS curve left.",
   answer:true,
   explanation:"Higher x reduces investment for any given policy rate i."},

  {id:"gap19",type:"mcq",topic:"money",examRelevance:4,source:"Banking",
   question:"A bank run that raises the currency-deposit ratio c tends to:",
   options:["Raise the money multiplier","Lower the money multiplier","Leave the multiplier unchanged","Automatically raise high-powered money"],
   answer:1,
   explanation:"Money multiplier (1+c)/(c+θ) falls when c rises."},

  {id:"gap20",type:"numerical",topic:"money",examRelevance:4,source:"Banking",
   question:"Initially c=0.2, θ=0.1 (multiplier=4). A bank run raises c to 0.5. New money multiplier?",
   answer:2.5,tolerance:0.01,
   explanation:"(1+0.5)/(0.5+0.1)=1.5/0.6=2.5."},

  {id:"gap21",type:"truefalse",topic:"money",examRelevance:4,source:"Banking",
   question:"When the central bank sets the policy interest rate, the money supply becomes endogenous.",
   answer:true,
   explanation:"High-powered money (or M) adjusts so that the money market clears at the chosen rate."},

  // ===== Graph / description =====
  {id:"gap22",type:"mcq",topic:"islm",examRelevance:5,source:"Graph description",
   question:"In the IS-LM diagram, a fiscal + monetary expansion that leaves the interest rate unchanged means:",
   options:["Both IS and LM shift right so that the new intersection has higher Y and the same i","Only IS shifts","Only LM shifts","IS shifts left"],
   answer:0,
   explanation:"The two shifts are coordinated to keep i constant while raising Y."},

  {id:"gap23",type:"mcq",topic:"open",examRelevance:5,source:"Graph description",
   question:"Under floating rates, a fiscal expansion in the Mundell-Fleming model causes the exchange rate to:",
   options:["Depreciate","Appreciate","Remain fixed by definition","First depreciate then appreciate"],
   answer:1,
   explanation:"Higher domestic interest rate → capital inflows → appreciation."},

  {id:"gap24",type:"mcq",topic:"pc",examRelevance:5,source:"Graph description",
   question:"With adaptive expectations, a permanent reduction of u below u_n produces:",
   options:["A one-time higher inflation level","Continuous upward shifts of the PC (accelerating inflation)","A permanent leftward shift of the PC","No change in inflation"],
   answer:1,
   explanation:"Accelerationist dynamics: expected inflation keeps rising."},

  {id:"gap25",type:"truefalse",topic:"islm",examRelevance:5,source:"Graph description",
   question:"A vertical LM curve makes fiscal policy completely ineffective (full crowding-out).",
   answer:true,
   explanation:"Any tendency for Y to rise is fully offset by a rise in i that crowds out investment one-for-one."},

  {id:"gap26",type:"truefalse",topic:"islm",examRelevance:5,source:"Graph description",
   question:"A horizontal LM curve (liquidity trap or pure interest-rate targeting) makes fiscal policy fully effective (no crowding-out).",
   answer:true,
   explanation:"The interest rate does not rise, so there is no crowding-out of private investment."}
]);
