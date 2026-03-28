const topics = [
  {
    id: 'ai-regulation',
    title: 'AI Regulation & Safety',
    description: 'Debate over how governments should regulate artificial intelligence development and deployment',
    trendScore: 98,
    category: 'Technology',
    articles: [
      {
        id: 'ai-left-1',
        title: 'Big Tech\'s AI Promises Are a Smokescreen for Regulatory Capture',
        source: 'Jacobin',
        perspective: 'left',
        summary: 'Corporate giants are flooding Washington with lobbyists to shape AI regulations in their favor, effectively writing the rules that govern themselves. The result is a regulatory framework that protects incumbents while squashing competition and ignoring worker impacts. We need democratic oversight, not industry self-governance.',
        url: 'https://jacobin.com/2025/ai-regulatory-capture',
        publishedAt: '2025-06-10T10:00:00Z'
      },
      {
        id: 'ai-left-2',
        title: 'AI Systems Are Perpetuating Racial and Economic Inequalities, Advocates Warn',
        source: 'The Guardian',
        perspective: 'left',
        summary: 'Civil rights organizations are raising alarms about AI systems used in hiring, lending, and criminal justice that show measurable bias against Black and Latino communities. Studies show algorithmic decision-making can amplify historical discrimination at unprecedented scale. Regulators must mandate bias audits and provide meaningful enforcement.',
        url: 'https://theguardian.com/technology/2025/ai-bias-inequality',
        publishedAt: '2025-06-09T14:30:00Z'
      },
      {
        id: 'ai-centerleft-1',
        title: 'Congress Moves Toward Bipartisan AI Safety Framework After Months of Hearings',
        source: 'NPR',
        perspective: 'center-left',
        summary: 'Senate lawmakers have introduced a comprehensive AI safety bill requiring pre-deployment testing for high-risk AI systems and establishing a new federal oversight body. The legislation drew support from both parties, though tech industry groups expressed concern about compliance costs. Consumer advocates praised transparency requirements.',
        url: 'https://npr.org/2025/technology/ai-safety-framework-congress',
        publishedAt: '2025-06-11T09:00:00Z'
      },
      {
        id: 'ai-centerleft-2',
        title: 'The EU\'s AI Act Is Already Reshaping How American Companies Build Products',
        source: 'The Atlantic',
        perspective: 'center-left',
        summary: 'European AI regulations are forcing US technology companies to implement safety standards globally, even in markets without similar rules. Experts call this the "Brussels Effect" in action, arguing strong consumer protections can be exported through market power. Critics worry about fragmented global standards creating barriers to innovation.',
        url: 'https://theatlantic.com/technology/2025/eu-ai-act-american-companies',
        publishedAt: '2025-06-08T11:00:00Z'
      },
      {
        id: 'ai-center-1',
        title: 'White House Issues Executive Order Updating AI Safety Guidelines for Federal Agencies',
        source: 'Reuters',
        perspective: 'center',
        summary: 'The Biden administration has issued updated executive guidance requiring federal agencies to conduct risk assessments before deploying AI in public-facing services. The order establishes minimum standards for transparency and appeals processes. Implementation timelines vary by agency with most compliance required by end of 2025.',
        url: 'https://reuters.com/technology/ai-executive-order-federal-agencies-2025',
        publishedAt: '2025-06-07T16:00:00Z'
      },
      {
        id: 'ai-center-2',
        title: 'Global AI Governance Summit Produces Non-Binding Safety Commitments From 28 Nations',
        source: 'Associated Press',
        perspective: 'center',
        summary: 'Representatives from 28 countries signed a non-binding accord at the Paris AI Safety Summit pledging cooperation on frontier AI risk assessment and information sharing between national safety bodies. The agreement stops short of binding international law but establishes working groups on autonomous weapons and critical infrastructure protection. China and Russia did not participate.',
        url: 'https://apnews.com/article/ai-safety-summit-paris-2025',
        publishedAt: '2025-06-06T13:00:00Z'
      },
      {
        id: 'ai-centerright-1',
        title: 'Overzealous AI Regulation Could Cost the US Its Technological Edge, Study Finds',
        source: 'Wall Street Journal',
        perspective: 'center-right',
        summary: 'A new analysis from the Information Technology and Innovation Foundation warns that poorly designed AI regulations could reduce US AI investment by $50 billion annually and cede leadership to China. The study recommends targeting regulation to specific high-risk applications rather than imposing blanket rules on the entire industry. Sector-specific guidance is preferable to comprehensive legislation.',
        url: 'https://wsj.com/tech/ai-regulation-us-competitiveness-study',
        publishedAt: '2025-06-10T08:00:00Z'
      },
      {
        id: 'ai-centerright-2',
        title: 'America\'s AI Advantage Depends on Keeping Regulation Light and Targeted',
        source: 'The Economist',
        perspective: 'center-right',
        summary: 'The United States maintains a commanding lead in AI development, but that position is not guaranteed if Washington imposes European-style precautionary regulation. Liability frameworks and voluntary commitments may achieve safety goals without stifling the innovation that keeps American firms globally competitive. Policymakers should resist the temptation to regulate the technology before its impacts are fully understood.',
        url: 'https://economist.com/technology/2025/ai-light-regulation-america',
        publishedAt: '2025-06-09T10:00:00Z'
      },
      {
        id: 'ai-right-1',
        title: 'Biden\'s AI Regulations Are Bureaucratic Overreach That Will Crush American Innovation',
        source: 'The Daily Wire',
        perspective: 'right',
        summary: 'The administration\'s AI executive orders represent yet another example of federal overreach into the private sector, threatening to strangle the golden goose of American technological leadership. Small AI startups will bear the brunt of compliance costs while big tech giants with armies of lawyers thrive. Congress must act to rein in this regulatory expansion.',
        url: 'https://dailywire.com/news/biden-ai-regulations-overreach-innovation',
        publishedAt: '2025-06-08T07:00:00Z'
      },
      {
        id: 'ai-right-2',
        title: 'China Is Winning the AI Race While Washington Obsesses Over Woke AI Bias Rules',
        source: 'Fox News',
        perspective: 'right',
        summary: 'While American regulators spend their time crafting diversity mandates for AI systems, China\'s government is pumping billions into AI development with zero bureaucratic friction. Former defense officials warn the US is trading away strategic advantage for progressive politics. The focus should be on national security applications and maintaining technological supremacy.',
        url: 'https://foxnews.com/tech/china-winning-ai-race-washington-bias-rules',
        publishedAt: '2025-06-07T09:00:00Z'
      }
    ]
  },
  {
    id: 'climate-policy',
    title: 'Climate & Energy Policy',
    description: 'Tensions over renewable energy transition, fossil fuel regulation, and climate funding commitments',
    trendScore: 94,
    category: 'Environment',
    articles: [
      {
        id: 'climate-left-1',
        title: 'Climate Scientists Say 2024 Emissions Data Confirms We Are in "Uncharted Territory"',
        source: 'The Nation',
        perspective: 'left',
        summary: 'New data released by the International Energy Agency confirms that global carbon emissions hit a record high in 2024, prompting leading scientists to warn that the window for limiting warming to 1.5°C is effectively closed. Activists are calling for immediate fossil fuel non-proliferation treaties and massive wealth transfers to developing nations for climate adaptation. The political class continues to fail on the scale of action needed.',
        url: 'https://thenation.com/article/environment/2025-emissions-record-uncharted-territory',
        publishedAt: '2025-06-11T08:00:00Z'
      },
      {
        id: 'climate-left-2',
        title: 'How Oil Companies Used Greenwashing to Delay Climate Action for 30 Years',
        source: 'Mother Jones',
        perspective: 'left',
        summary: 'Newly uncovered internal documents show ExxonMobil and BP systematically funded climate denial campaigns while internally acknowledging catastrophic warming risks. Investigative reporting reveals that deception stretched from the 1980s through the early 2020s and shaped federal policy for generations. Calls grow for criminal accountability and a windfall profits tax to fund renewables.',
        url: 'https://motherjones.com/environment/2025/oil-greenwashing-delayed-climate-action',
        publishedAt: '2025-06-09T12:00:00Z'
      },
      {
        id: 'climate-centerleft-1',
        title: 'IRA Clean Energy Investments Surpass $300 Billion as Republicans Debate Rollbacks',
        source: 'New York Times',
        perspective: 'center-left',
        summary: 'The Inflation Reduction Act\'s climate provisions have catalyzed over $300 billion in private clean energy investment, creating more than 150,000 jobs in red and purple states. Economists warn that partial repeal proposals could strand billions in capital and damage manufacturing communities that voted Republican. The law\'s industrial policy is reshaping the energy map in unexpected ways.',
        url: 'https://nytimes.com/2025/climate/ira-investments-300-billion',
        publishedAt: '2025-06-10T10:00:00Z'
      },
      {
        id: 'climate-centerleft-2',
        title: 'The Political Math of Killing Green Energy Subsidies Has Gotten Much Harder',
        source: 'Vox',
        perspective: 'center-left',
        summary: 'Republican lawmakers from solar and wind-heavy districts are quietly opposing their own party\'s IRA repeal efforts because constituents and local businesses have come to depend on the tax credits. The political dynamics of clean energy have shifted fundamentally as solar panels appear on farms and factories across conservative America. This is what successful industrial policy looks like.',
        url: 'https://vox.com/climate/2025/green-energy-subsidies-political-math',
        publishedAt: '2025-06-08T14:00:00Z'
      },
      {
        id: 'climate-center-1',
        title: 'US Renewable Capacity Surpasses Coal for First Time in Nation\'s History',
        source: 'Bloomberg',
        perspective: 'center',
        summary: 'US Energy Information Administration data shows renewable energy sources now account for more installed generating capacity than coal, marking a historic milestone in the American energy transition. Solar additions in 2024 alone exceeded total nuclear capacity. Grid operators warn that transmission infrastructure investment must accelerate to fully realize the transition\'s benefits.',
        url: 'https://bloomberg.com/news/articles/2025/us-renewable-surpasses-coal-capacity',
        publishedAt: '2025-06-07T11:00:00Z'
      },
      {
        id: 'climate-center-2',
        title: 'UN Climate Finance Gap Widens as Developed Nations Fall Short of $100B Pledge',
        source: 'BBC',
        perspective: 'center',
        summary: 'A UN assessment finds wealthy nations have delivered only $83 billion of their pledged $100 billion annual climate finance commitment to developing countries, creating mounting diplomatic tensions ahead of COP30. Island nations and African states are threatening to walk out of negotiations without concrete accountability mechanisms. The gap between pledges and delivery has become a defining faultline in global climate diplomacy.',
        url: 'https://bbc.com/news/world/un-climate-finance-gap-2025',
        publishedAt: '2025-06-06T09:00:00Z'
      },
      {
        id: 'climate-centerright-1',
        title: 'Energy Realism: Why Nuclear Power Must Be Central to Any Credible Climate Plan',
        source: 'Politico',
        perspective: 'center-right',
        summary: 'Serious analysts across the political spectrum are converging on nuclear energy as the indispensable low-carbon baseload source that wind and solar cannot replace. The Biden administration\'s hesitance to fully embrace new nuclear construction has slowed grid decarbonization. Advanced reactor designs from US companies deserve the same policy support given to renewables.',
        url: 'https://politico.com/news/2025/nuclear-power-climate-plan-realism',
        publishedAt: '2025-06-09T08:00:00Z'
      },
      {
        id: 'climate-centerright-2',
        title: 'Carbon Taxes Work Better Than Mandates—If Politicians Have the Spine to Pass Them',
        source: 'Wall Street Journal',
        perspective: 'center-right',
        summary: 'Market-based climate solutions consistently outperform regulatory mandates in economic analyses, but politicians of both parties have avoided carbon pricing in favor of hidden subsidies and complex mandates. A well-designed revenue-neutral carbon tax would let markets find the most efficient emissions reductions while maintaining economic dynamism. The absence of price signals is the central failure of US climate policy.',
        url: 'https://wsj.com/opinion/carbon-taxes-climate-policy-2025',
        publishedAt: '2025-06-08T09:00:00Z'
      },
      {
        id: 'climate-right-1',
        title: 'Biden\'s War on American Energy Is Driving Up Prices and Empowering Our Enemies',
        source: 'Washington Examiner',
        perspective: 'right',
        summary: 'By restricting domestic oil and gas production while showering subsidies on unreliable wind and solar, the administration has engineered higher energy prices for working-class Americans while enriching adversaries like Russia and Iran. Energy independence built on fossil fuels was the most strategic asset the US has ever possessed. The green energy agenda sacrifices national security on the altar of climate ideology.',
        url: 'https://washingtonexaminer.com/energy/biden-war-american-energy-prices-enemies',
        publishedAt: '2025-06-10T07:00:00Z'
      },
      {
        id: 'climate-right-2',
        title: 'The Climate Cult\'s Electric Vehicle Mandate Is Dying on Contact With Reality',
        source: 'New York Post',
        perspective: 'right',
        summary: 'Consumer rejection of overpriced electric vehicles with inadequate range has forced the Biden EPA to quietly walk back its de facto EV mandate, proving that government cannot override market preferences. Charging infrastructure remains woefully inadequate outside major cities and rural Americans have been completely ignored in the green transition agenda. Real energy freedom means letting Americans choose what cars to drive.',
        url: 'https://nypost.com/2025/climate-cult-ev-mandate-dying-reality',
        publishedAt: '2025-06-07T08:00:00Z'
      }
    ]
  },
  {
    id: 'immigration-reform',
    title: 'Immigration Reform',
    description: 'Ongoing battles over border security, asylum processes, and pathways to legal status',
    trendScore: 91,
    category: 'Politics',
    articles: [
      {
        id: 'immig-left-1',
        title: 'Mass Deportation Raids Are Terrorizing Immigrant Communities Across America',
        source: 'Democracy Now',
        perspective: 'left',
        summary: 'Reports from immigrant advocacy organizations document widespread fear among undocumented and even legal immigrant communities following high-profile ICE enforcement operations. Witnesses describe children being separated from parents in workplace raids and U.S. citizens being detained due to racial profiling. Legal observers warn the operations represent a constitutional crisis in the making.',
        url: 'https://democracynow.org/2025/immigration-raids-terrorizing-communities',
        publishedAt: '2025-06-11T07:00:00Z'
      },
      {
        id: 'immig-left-2',
        title: 'The Real Border Crisis: How US Foreign Policy Created the Refugee Emergency',
        source: 'The Guardian',
        perspective: 'left',
        summary: 'Scholars of Latin American history argue that the migration crisis at the US southern border is the direct consequence of decades of US-backed coups, drug war militarization, and trade policies that devastated Central American economies. Treating symptoms with enforcement while ignoring root causes has failed for forty years. Comprehensive development investment in sending countries is the only sustainable solution.',
        url: 'https://theguardian.com/us-news/2025/us-foreign-policy-refugee-border-crisis',
        publishedAt: '2025-06-09T11:00:00Z'
      },
      {
        id: 'immig-centerleft-1',
        title: 'Senate Immigration Deal Collapses Again as House Republicans Refuse to Negotiate',
        source: 'Washington Post',
        perspective: 'center-left',
        summary: 'A bipartisan Senate immigration reform package that included significant border security funding alongside expanded legal pathways was blocked for the second time this year after House Republican leadership refused to bring it to the floor. Moderate senators from both parties expressed frustration that electoral politics are preventing practical solutions to genuine administrative backlogs. The asylum court backlog has now reached four million cases.',
        url: 'https://washingtonpost.com/politics/2025/senate-immigration-deal-collapses',
        publishedAt: '2025-06-10T09:00:00Z'
      },
      {
        id: 'immig-centerleft-2',
        title: 'Undocumented Immigrants Pay $100 Billion in Taxes. The Budget Fight Ignores Them.',
        source: 'NPR',
        perspective: 'center-left',
        summary: 'New research from the Institute on Taxation and Economic Policy calculates that undocumented immigrants contribute approximately $100 billion annually in federal, state, and local taxes, including Social Security and Medicare payroll taxes for benefits they cannot legally claim. Budget analysts say mass deportation would remove essential workers from healthcare, construction, and agriculture while costing more than it saves. The economic argument for legalization is strong.',
        url: 'https://npr.org/2025/economy/undocumented-immigrants-100-billion-taxes',
        publishedAt: '2025-06-08T12:00:00Z'
      },
      {
        id: 'immig-center-1',
        title: 'Border Crossings Fall 40% Following New Asylum Processing Restrictions',
        source: 'Associated Press',
        perspective: 'center',
        summary: 'US Customs and Border Protection data shows irregular border crossings declined approximately 40% in the six months following executive action restricting asylum eligibility at the southern border. Officials attribute the decrease to both policy deterrence and increased Mexican enforcement cooperation. Advocates contest the data methodology and point to increased deaths along alternative crossing routes.',
        url: 'https://apnews.com/article/border-crossings-fall-asylum-restrictions-2025',
        publishedAt: '2025-06-07T14:00:00Z'
      },
      {
        id: 'immig-center-2',
        title: 'Immigration Courts Face Historic Backlog as Congress Refuses Funding',
        source: 'Reuters',
        perspective: 'center',
        summary: 'The Department of Justice reports the immigration court backlog has grown to a record 4.2 million pending cases, with average wait times exceeding five years in major jurisdictions. Immigration judges handle an average of 700 cases annually, a caseload experts call "impossibly large." Both parties acknowledge the administrative crisis but cannot agree on funding or policy solutions.',
        url: 'https://reuters.com/world/us/immigration-courts-backlog-record-2025',
        publishedAt: '2025-06-06T10:00:00Z'
      },
      {
        id: 'immig-centerright-1',
        title: 'Secure the Border First: Why Enforcement Must Precede Any Legalization',
        source: 'Politico',
        perspective: 'center-right',
        summary: 'Immigration experts from the center-right argue that the fundamental sequencing question of immigration reform has been answered by history: the 1986 amnesty without enforcement created the current crisis. Any reform package must establish credible border security metrics before creating new legal pathways. A merit-based immigration system would better serve national economic interests while discouraging illegal entry.',
        url: 'https://politico.com/news/2025/secure-border-first-legalization',
        publishedAt: '2025-06-09T09:00:00Z'
      },
      {
        id: 'immig-centerright-2',
        title: 'The Case for Expanding High-Skilled Visas While Reducing Illegal Immigration',
        source: 'The Economist',
        perspective: 'center-right',
        summary: 'America\'s immigration system fails on both ends: it offers too few legal pathways for the workers the economy actually needs while inadequately discouraging illegal entry. Dramatically expanding H-1B and agricultural worker visas while investing in border infrastructure would serve national interests better than the current political impasse. Legal immigration reform should be decoupled from enforcement politics.',
        url: 'https://economist.com/united-states/2025/high-skilled-visas-illegal-immigration',
        publishedAt: '2025-06-08T08:00:00Z'
      },
      {
        id: 'immig-right-1',
        title: 'Open Border Policies Are Enabling Cartel Infiltration of American Cities',
        source: 'Fox News',
        perspective: 'right',
        summary: 'Law enforcement officials from border states are warning that Mexican drug cartels are exploiting Biden\'s border policies to establish distribution networks deep inside US cities. Fentanyl seizures at ports of entry have increased 400% in five years, yet the administration refuses to complete the border wall or implement remain-in-Mexico protocols. American lives are being lost to cartel poison while politicians play games with border security.',
        url: 'https://foxnews.com/politics/open-border-cartel-infiltration-american-cities',
        publishedAt: '2025-06-10T08:00:00Z'
      },
      {
        id: 'immig-right-2',
        title: 'New Report: Illegal Immigration Costs American Taxpayers $150 Billion Annually',
        source: 'Breitbart',
        perspective: 'right',
        summary: 'A new study from the Federation for American Immigration Reform estimates illegal immigration costs federal, state, and local governments $150 billion annually in education, healthcare, and law enforcement expenses. The burden falls disproportionately on communities with large undocumented populations who see wages depressed and public services strained. Mass deportation would pay for itself many times over.',
        url: 'https://breitbart.com/immigration/2025/illegal-immigration-cost-150-billion',
        publishedAt: '2025-06-09T07:00:00Z'
      }
    ]
  },
  {
    id: 'healthcare-costs',
    title: 'Healthcare & Drug Prices',
    description: 'Medicare drug price negotiations, insulin costs, and the fight over pharmaceutical pricing',
    trendScore: 87,
    category: 'Health',
    articles: [
      {
        id: 'health-left-1',
        title: 'Insulin Costs $3 to Make. Americans Pay $300. This Is Systemic Corporate Theft.',
        source: 'Jacobin',
        perspective: 'left',
        summary: 'The obscene gap between insulin production costs and retail prices in the United States represents a form of legalized theft from diabetic patients who have no choice but to pay or die. While Congressional Democrats celebrate incremental price caps, insulin costs in Canada and Europe average $10-30 per vial. Only a Medicare-for-All system with public pharmaceutical manufacturing can end this exploitation permanently.',
        url: 'https://jacobin.com/2025/health/insulin-costs-corporate-theft',
        publishedAt: '2025-06-11T09:00:00Z'
      },
      {
        id: 'health-left-2',
        title: 'Pharma Spent $400 Million Lobbying Against Drug Pricing Reforms Last Year',
        source: 'The Guardian',
        perspective: 'left',
        summary: 'New lobbying disclosure filings reveal pharmaceutical companies spent a record $400 million fighting Medicare drug price negotiation and transparency requirements in 2024. The industry deployed former members of Congress and regulatory officials who moved through the revolving door to shape legislation in their favor. Campaign finance reform is inseparable from healthcare reform.',
        url: 'https://theguardian.com/us-news/2025/pharma-lobbying-400-million-drug-pricing',
        publishedAt: '2025-06-09T13:00:00Z'
      },
      {
        id: 'health-centerleft-1',
        title: 'Medicare Drug Price Negotiations Save $6 Billion in First Year, Administration Says',
        source: 'New York Times',
        perspective: 'center-left',
        summary: 'The Biden administration announced that the first round of Medicare drug price negotiations under the Inflation Reduction Act saved an estimated $6 billion in 2024, with additional negotiations covering 20 more drugs set to take effect. Patient advocates praised the results while acknowledging the program covers only a fraction of Medicare expenditure. Republicans who voted against the IRA are now quietly taking credit for the savings in their districts.',
        url: 'https://nytimes.com/2025/health/medicare-drug-negotiations-6-billion-savings',
        publishedAt: '2025-06-10T11:00:00Z'
      },
      {
        id: 'health-centerleft-2',
        title: 'Why Americans Pay More for the Same Drugs Than Every Other Developed Nation',
        source: 'Vox',
        perspective: 'center-left',
        summary: 'A comprehensive analysis finds Americans pay 2.5 to 4 times more for identical brand-name drugs than patients in Germany, Canada, or Japan due to the absence of government price negotiation and the complexity of a multi-layered pharmaceutical supply chain. Pharmacy benefit managers extract billions in middlemen fees that neither reduce costs nor improve outcomes. Structural reform requires addressing the entire supply chain, not just individual drug prices.',
        url: 'https://vox.com/health-care/2025/americans-pay-more-drugs-other-nations',
        publishedAt: '2025-06-08T13:00:00Z'
      },
      {
        id: 'health-center-1',
        title: 'FDA Approves Wave of Generic Drug Applications to Increase Competition',
        source: 'Reuters',
        perspective: 'center',
        summary: 'The FDA approved a record 1,200 generic drug applications in the first half of 2025 under an accelerated review program designed to increase competition and lower prices. Generic drug entry typically reduces prices by 80% within two years of market entry. However, analysts note the program does not address biologics and complex drugs where generics face higher barriers.',
        url: 'https://reuters.com/business/healthcare/fda-generic-drugs-record-approvals-2025',
        publishedAt: '2025-06-07T12:00:00Z'
      },
      {
        id: 'health-center-2',
        title: 'US Healthcare Spending Reaches $4.9 Trillion as Outcomes Lag Behind Peer Nations',
        source: 'Bloomberg',
        perspective: 'center',
        summary: 'CMS data shows US healthcare spending reached $4.9 trillion in 2024—approximately $14,500 per person—while life expectancy and preventive care metrics trail Canada, Japan, and Western Europe. Administrative costs alone account for roughly 30% of US healthcare spending compared to 12-15% in single-payer systems. Both parties agree the system is unsustainable but disagree sharply on solutions.',
        url: 'https://bloomberg.com/news/articles/2025/us-healthcare-spending-4-9-trillion',
        publishedAt: '2025-06-06T11:00:00Z'
      },
      {
        id: 'health-centerright-1',
        title: 'Drug Price Controls Will Destroy the Innovation Pipeline We Depend On',
        source: 'Wall Street Journal',
        perspective: 'center-right',
        summary: 'Economic analysis from the University of Chicago suggests aggressive Medicare drug price controls could reduce new drug approvals by 20-30% over two decades by cutting returns on R&D investment. The US pharmaceutical industry drives the majority of global drug innovation precisely because market pricing incentivizes risk-taking. Sacrificing tomorrow\'s cures for today\'s savings is a dangerous trade-off that policymakers are insufficiently weighing.',
        url: 'https://wsj.com/opinion/drug-price-controls-innovation-pipeline-2025',
        publishedAt: '2025-06-09T10:00:00Z'
      },
      {
        id: 'health-centerright-2',
        title: 'Fix the Pharmacy Benefit Manager Cartel Before Targeting Drug Makers',
        source: 'Politico',
        perspective: 'center-right',
        summary: 'Bipartisan consensus is growing that pharmacy benefit managers—the opaque middlemen between drug manufacturers and patients—extract billions in hidden fees while providing dubious value to the healthcare system. PBM reform enjoys unusual Republican support because it targets corporate rent-seeking without imposing price controls that could reduce pharmaceutical investment. Congress should address this low-hanging fruit before more disruptive interventions.',
        url: 'https://politico.com/news/2025/pharmacy-benefit-manager-reform',
        publishedAt: '2025-06-08T10:00:00Z'
      },
      {
        id: 'health-right-1',
        title: 'Biden Drug Price Controls Are Socialism in Healthcare, and They Will Fail',
        source: 'Washington Examiner',
        perspective: 'right',
        summary: 'The Medicare drug price "negotiation" program is price control by another name, and like all government price controls throughout history, it will reduce supply and quality over time. Pharmaceutical companies will redirect R&D spending away from drugs where government caps returns, leaving future diseases untreated. Free market competition through deregulation and insurance reform would achieve lower prices without destroying innovation.',
        url: 'https://washingtonexaminer.com/health/biden-drug-price-controls-socialism-fail',
        publishedAt: '2025-06-10T09:00:00Z'
      },
      {
        id: 'health-right-2',
        title: 'Let Americans Buy Drugs From Canada and Mexico—The Free Market Solution to High Prices',
        source: 'Newsmax',
        perspective: 'right',
        summary: 'Conservative lawmakers are pushing legislation to allow personal drug importation from Canada and Mexico, where government-negotiated prices are often 80% lower than US prices for identical medications. Unlike price controls, drug importation creates market competition by arbitrage rather than government mandate. The Trump administration\'s preliminary importation rules should be expanded and made permanent.',
        url: 'https://newsmax.com/health/drug-importation-canada-mexico-free-market-2025',
        publishedAt: '2025-06-08T08:00:00Z'
      }
    ]
  },
  {
    id: 'economy-inflation',
    title: 'Economy & Inflation',
    description: 'Debate over Fed interest rate policy, persistent inflation, and economic inequality',
    trendScore: 89,
    category: 'Economy',
    articles: [
      {
        id: 'econ-left-1',
        title: 'The Fed\'s Rate Hikes Were a Gift to Wall Street Paid for by Working People',
        source: 'Jacobin',
        perspective: 'left',
        summary: 'The Federal Reserve\'s aggressive rate hiking campaign successfully crushed inflation by increasing unemployment and suppressing wage growth—exactly as orthodox monetary theory intended. What mainstream economists celebrate as a "soft landing" was actually a deliberate policy choice to transfer income from labor to capital. The Fed\'s mandate to prioritize price stability over full employment serves the interests of creditors, not workers.',
        url: 'https://jacobin.com/2025/economy/fed-rate-hikes-wall-street-workers',
        publishedAt: '2025-06-11T08:00:00Z'
      },
      {
        id: 'econ-left-2',
        title: 'Corporate Profit Margins Hit Record Highs While Workers Blamed for Inflation',
        source: 'HuffPost',
        perspective: 'left',
        summary: 'Research from the Economic Policy Institute shows corporate profit margins reached historic highs during the 2021-2024 inflation period, accounting for roughly 53% of price increases compared to the historical norm of 11%. Companies used the cover of inflation narratives to increase prices beyond cost increases, pocketing the difference as profit. This "greedflation" is structurally invisible in mainstream monetary policy discussions.',
        url: 'https://huffpost.com/entry/corporate-profits-inflation-greedflation-2025',
        publishedAt: '2025-06-09T10:00:00Z'
      },
      {
        id: 'econ-centerleft-1',
        title: 'Inflation Has Fallen, But Grocery Prices Haven\'t. Here\'s Why That Matters Politically.',
        source: 'Washington Post',
        perspective: 'center-left',
        summary: 'Although headline CPI has returned to near-target levels, grocery and housing costs remain 20-30% higher than pre-pandemic levels, creating a persistent economic anxiety that aggregate statistics fail to capture. Political scientists note that voters experience prices as cumulative rather than rates of change, making "inflation is beaten" messaging tone-deaf to lived experience. Democrats face a structural communication challenge on kitchen-table economics.',
        url: 'https://washingtonpost.com/politics/2025/inflation-grocery-prices-politics',
        publishedAt: '2025-06-10T10:00:00Z'
      },
      {
        id: 'econ-centerleft-2',
        title: 'Biden\'s Industrial Policy Is Working. The Question Is Whether Anyone Will Notice.',
        source: 'The Atlantic',
        perspective: 'center-left',
        summary: 'Manufacturing employment is at its highest level since 2008, semiconductor fabs are under construction across six states, and clean energy investment has hit records—all results of the CHIPS Act and IRA. Yet polling consistently shows economic pessimism because wage gains are offset by cumulative price increases and housing affordability collapse. Structural economic success coexists with widespread financial insecurity.',
        url: 'https://theatlantic.com/politics/2025/biden-industrial-policy-working-unnoticed',
        publishedAt: '2025-06-08T11:00:00Z'
      },
      {
        id: 'econ-center-1',
        title: 'Fed Holds Rates Steady as Economic Data Sends Mixed Signals',
        source: 'Reuters',
        perspective: 'center',
        summary: 'The Federal Reserve held the federal funds rate unchanged at its June meeting as policymakers assessed an economy showing continued labor market strength alongside moderating but still-elevated services inflation. Chair Powell noted that rate cuts remain possible in 2025 but that the committee wants greater confidence inflation is sustainably returning to 2%. Markets are pricing in one to two cuts before year end.',
        url: 'https://reuters.com/markets/fed-holds-rates-steady-mixed-economic-data-2025',
        publishedAt: '2025-06-07T14:00:00Z'
      },
      {
        id: 'econ-center-2',
        title: 'US GDP Growth Revised Upward to 2.8% as Consumer Spending Remains Resilient',
        source: 'Bloomberg',
        perspective: 'center',
        summary: 'Bureau of Economic Analysis revised Q1 2025 GDP growth to 2.8% annualized, above initial estimates, driven by stronger-than-expected consumer spending and business investment. Labor market data continues to show resilience with unemployment at 4.1% and wage growth outpacing inflation for the third consecutive quarter. Most forecasters have reduced recession probability estimates for 2025.',
        url: 'https://bloomberg.com/news/articles/2025/gdp-revised-upward-consumer-spending',
        publishedAt: '2025-06-06T13:00:00Z'
      },
      {
        id: 'econ-centerright-1',
        title: 'The National Debt Is the Slow-Motion Crisis Washington Won\'t Talk About',
        source: 'The Economist',
        perspective: 'center-right',
        summary: 'US federal debt is on track to exceed 130% of GDP by 2035 under current policy trajectories, yet neither party has presented a credible fiscal stabilization plan. Interest payments on the national debt now exceed defense spending, crowding out investment in infrastructure and public services. The longer Congress waits to address the structural deficit, the more painful the eventual adjustment will be.',
        url: 'https://economist.com/united-states/2025/national-debt-crisis-washington',
        publishedAt: '2025-06-09T09:00:00Z'
      },
      {
        id: 'econ-centerright-2',
        title: 'Deregulation and Tax Reform Are the Keys to Sustained Productivity Growth',
        source: 'Wall Street Journal',
        perspective: 'center-right',
        summary: 'A study from the National Bureau of Economic Research finds that regulatory accumulation has reduced US productivity growth by an estimated 0.8 percentage points annually over the past two decades. Corporate tax rates above OECD averages incentivize profit-shifting offshore rather than domestic investment. A comprehensive deregulatory agenda and competitive corporate taxation would unlock the investment needed for broadly shared prosperity.',
        url: 'https://wsj.com/economy/deregulation-tax-reform-productivity-growth-2025',
        publishedAt: '2025-06-08T08:00:00Z'
      },
      {
        id: 'econ-right-1',
        title: 'Bidenomics Has Been a Disaster. Americans Know It Even If the Media Won\'t Admit It.',
        source: 'The Daily Wire',
        perspective: 'right',
        summary: 'Despite rosy economic statistics from the Biden White House, polling consistently shows two-thirds of Americans believe the economy is in poor condition—because it is. Cumulative inflation of 20% since Biden took office has wiped out wage gains for most workers, housing is unaffordable for first-time buyers, and credit card debt has hit record levels. Americans are not fooled by statistical manipulation.',
        url: 'https://dailywire.com/news/bidenomics-disaster-americans-know-media-wont-admit',
        publishedAt: '2025-06-10T07:00:00Z'
      },
      {
        id: 'econ-right-2',
        title: 'Massive Government Spending Created the Inflation That Devastated Middle-Class America',
        source: 'Fox News',
        perspective: 'right',
        summary: 'The inflation that hammered American families from 2021-2024 was not, as liberals claimed, caused by supply chains or corporate greed—it was caused by trillions of dollars in government spending that pumped money into the economy. Basic economics predicted this outcome; the only question was whether politicians would admit their mistake. Restoring fiscal discipline and cutting spending is the only path to genuine price stability.',
        url: 'https://foxnews.com/economy/government-spending-created-inflation-middle-class',
        publishedAt: '2025-06-09T08:00:00Z'
      }
    ]
  }
];

function getArticlesByTopic(topicId) {
  return topics.find(t => t.id === topicId);
}

module.exports = { topics, getArticlesByTopic };
