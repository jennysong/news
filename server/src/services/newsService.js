/**
 * News service that provides today's top trending topics with
 * multiple perspectives and coverage statistics.
 *
 * In production, replace the mock data with calls to a real news API
 * (e.g. NewsAPI.org, GNews, or Bing News Search) and an AI summarisation
 * service for perspective extraction.
 */

function getTodayDateString() {
  return new Date().toISOString().split("T")[0];
}

const MOCK_TOPICS = [
  {
    id: 1,
    title: "AI Regulation Debate Heats Up Globally",
    summary:
      "Governments worldwide are drafting new legislation to regulate artificial intelligence, sparking fierce debate between innovation advocates and safety proponents.",
    category: "Technology",
    imageUrl:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop",
    imageAlt: "Abstract visualization of artificial intelligence networks",
    perspectives: [
      {
        viewpoint: "Pro-Regulation",
        summary:
          "Strict oversight is necessary to prevent algorithmic bias, protect privacy, and ensure AI systems are safe before deployment. Without guardrails, powerful AI could cause widespread harm.",
        sentiment: "supportive",
        articleCount: 42,
        articles: [
          {
            title: "EU AI Act: What Businesses Need to Know",
            url: "https://example.com/eu-ai-act-guide",
          },
          {
            title: "Why Experts Say AI Guardrails Can't Wait",
            url: "https://example.com/ai-guardrails-urgency",
          },
          {
            title: "The Case for a Global AI Safety Treaty",
            url: "https://example.com/global-ai-safety-treaty",
          },
        ],
      },
      {
        viewpoint: "Pro-Innovation",
        summary:
          "Heavy-handed regulation will stifle technological progress and push AI development to less regulated regions. A light-touch, industry-led approach would preserve competitiveness while addressing risks.",
        sentiment: "critical",
        articleCount: 35,
        articles: [
          {
            title: "Silicon Valley Warns: Over-Regulation Will Cost US Its AI Lead",
            url: "https://example.com/ai-regulation-competitiveness",
          },
          {
            title: "Industry Self-Governance Has Worked — AI Should Be No Different",
            url: "https://example.com/ai-self-governance",
          },
          {
            title: "How Burdensome Rules Could Push AI Innovation Offshore",
            url: "https://example.com/ai-innovation-offshore",
          },
        ],
      },
      {
        viewpoint: "Balanced / Third Way",
        summary:
          "A tiered, risk-based framework can protect citizens from high-risk applications while giving low-risk innovation room to grow. International coordination is key.",
        sentiment: "neutral",
        articleCount: 18,
        articles: [
          {
            title: "Risk-Based AI Regulation: A Middle Path Forward",
            url: "https://example.com/risk-based-ai-regulation",
          },
          {
            title: "G7 Nations Explore Coordinated AI Governance Model",
            url: "https://example.com/g7-ai-governance",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Global Housing Affordability Crisis Deepens",
    summary:
      "Housing prices continue to outpace wages in major cities, reigniting debates about market solutions versus government intervention.",
    category: "Economy",
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
    imageAlt: "Rows of residential houses in a dense urban neighborhood",
    perspectives: [
      {
        viewpoint: "Market-Based Solutions",
        summary:
          "Easing zoning restrictions and incentivizing private development will increase supply and naturally bring prices down without distorting the market.",
        sentiment: "supportive",
        articleCount: 29,
        articles: [
          {
            title: "How Zoning Reform Transformed Minneapolis Housing Market",
            url: "https://example.com/minneapolis-zoning-reform",
          },
          {
            title: "Upzoning Urban Cores: The Supply-Side Answer to Affordability",
            url: "https://example.com/upzoning-urban-cores",
          },
          {
            title: "Private Developers Are Building More — So Why Are Prices Still High?",
            url: "https://example.com/private-development-analysis",
          },
        ],
      },
      {
        viewpoint: "Government Intervention",
        summary:
          "Public housing programs, rent controls, and taxes on speculative investment are essential to guarantee affordable housing as a basic right.",
        sentiment: "critical",
        articleCount: 38,
        articles: [
          {
            title: "Vienna's Social Housing Model: A Blueprint for the World",
            url: "https://example.com/vienna-social-housing",
          },
          {
            title: "Rent Control Comeback: Cities Revive Tenant Protections",
            url: "https://example.com/rent-control-comeback",
          },
          {
            title: "Taxing Empty Homes: Can Vacancy Levies Free Up Housing Stock?",
            url: "https://example.com/vacancy-tax-housing",
          },
        ],
      },
      {
        viewpoint: "Community-Led Approaches",
        summary:
          "Community land trusts and cooperative housing models offer a middle ground, keeping homes affordable long-term without heavy top-down regulation.",
        sentiment: "neutral",
        articleCount: 12,
        articles: [
          {
            title: "Community Land Trusts: Permanently Affordable Housing Explained",
            url: "https://example.com/community-land-trusts",
          },
          {
            title: "Co-op Housing Is Making a Comeback in Major Cities",
            url: "https://example.com/coop-housing-revival",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Climate Summit Sets Ambitious New Targets",
    summary:
      "World leaders have announced accelerated emissions reduction pledges, but critics question whether the commitments are realistic.",
    category: "Environment",
    imageUrl:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&auto=format&fit=crop",
    imageAlt: "Wind turbines against a dramatic sky at sunset",
    perspectives: [
      {
        viewpoint: "Aggressive Action Needed",
        summary:
          "The new targets still fall short of what climate science demands. Governments must phase out fossil fuels faster and fund a just transition for affected communities.",
        sentiment: "critical",
        articleCount: 45,
        articles: [
          {
            title: "IPCC Report: Current Pledges Leave 1.5°C Goal Out of Reach",
            url: "https://example.com/ipcc-pledges-gap",
          },
          {
            title: "Climate Scientists React: 'Too Little, Too Late'",
            url: "https://example.com/climate-scientists-react",
          },
          {
            title: "Fossil Fuel Phase-Out Timeline Must Accelerate, UN Warns",
            url: "https://example.com/fossil-fuel-phaseout-timeline",
          },
          {
            title: "Just Transition Fund Falls Billions Short of What's Needed",
            url: "https://example.com/just-transition-fund-gap",
          },
        ],
      },
      {
        viewpoint: "Economic Pragmatism",
        summary:
          "Rapid decarbonization risks economic disruption. A gradual transition that leverages natural gas as a bridge fuel protects jobs while still reducing emissions.",
        sentiment: "supportive",
        articleCount: 30,
        articles: [
          {
            title: "Natural Gas as a Bridge: Energy Security in the Transition",
            url: "https://example.com/natural-gas-bridge-fuel",
          },
          {
            title: "Steel, Coal, and the Communities That Can't Afford Fast Change",
            url: "https://example.com/industrial-communities-transition",
          },
          {
            title: "Economists Warn of Stagflation Risk From Abrupt Green Shift",
            url: "https://example.com/green-transition-economic-risk",
          },
        ],
      },
      {
        viewpoint: "Technological Optimism",
        summary:
          "Breakthroughs in carbon capture, nuclear fusion, and green hydrogen could make aggressive targets achievable without sacrificing economic growth.",
        sentiment: "neutral",
        articleCount: 20,
        articles: [
          {
            title: "Carbon Capture Costs Fall 40% in Five Years",
            url: "https://example.com/carbon-capture-cost-drop",
          },
          {
            title: "Green Hydrogen: The Fuel That Could Change Everything",
            url: "https://example.com/green-hydrogen-potential",
          },
          {
            title: "Fusion Energy Milestone Brings Commercial Power Closer",
            url: "https://example.com/fusion-energy-milestone",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Debate Over Universal Basic Income Intensifies",
    summary:
      "Several pilot programs have released results, fueling fresh arguments for and against providing unconditional cash payments to all citizens.",
    category: "Policy",
    imageUrl:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop",
    imageAlt: "Person holding cash, symbolizing economic support programs",
    perspectives: [
      {
        viewpoint: "Supporters",
        summary:
          "Pilot data shows UBI reduces poverty, improves mental health, and gives people freedom to pursue education or caregiving. It is a necessary safety net for the automation age.",
        sentiment: "supportive",
        articleCount: 33,
        articles: [
          {
            title: "Finland's UBI Trial: Happier, Healthier, and More Employed",
            url: "https://example.com/finland-ubi-results",
          },
          {
            title: "Stockton Pilot Shows UBI Boosts Full-Time Employment",
            url: "https://example.com/stockton-ubi-pilot",
          },
          {
            title: "Automation Is Coming — UBI May Be the Only Safety Net That Scales",
            url: "https://example.com/ubi-automation-safety-net",
          },
        ],
      },
      {
        viewpoint: "Opponents",
        summary:
          "UBI is fiscally irresponsible, could reduce work incentives, and diverts funds from targeted programs that more effectively help those in need.",
        sentiment: "critical",
        articleCount: 28,
        articles: [
          {
            title: "The $3 Trillion Question: Who Pays for Universal Basic Income?",
            url: "https://example.com/ubi-cost-analysis",
          },
          {
            title: "Labor Economists Warn UBI Could Shrink Workforce Participation",
            url: "https://example.com/ubi-work-incentives",
          },
          {
            title: "Targeted Programs Beat UBI on Cost-Effectiveness, Study Finds",
            url: "https://example.com/targeted-vs-universal-programs",
          },
        ],
      },
      {
        viewpoint: "Reform Advocates",
        summary:
          "Rather than a full UBI, expanding existing programs like earned income tax credits and job training achieves similar goals at lower cost.",
        sentiment: "neutral",
        articleCount: 15,
        articles: [
          {
            title: "Expanding the EITC: A Proven Alternative to UBI",
            url: "https://example.com/eitc-expansion-alternative",
          },
          {
            title: "Job Guarantee vs. UBI: Which Offers a Better Future of Work?",
            url: "https://example.com/job-guarantee-vs-ubi",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Social Media's Impact on Teen Mental Health",
    summary:
      "New research links heavy social media use to rising anxiety and depression among teenagers, prompting calls for platform accountability.",
    category: "Health",
    imageUrl:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
    imageAlt: "Teenager looking at a smartphone screen in the dark",
    perspectives: [
      {
        viewpoint: "Platform Accountability",
        summary:
          "Social media companies profit from addictive design patterns that harm young users. Legislation should mandate age verification, algorithmic transparency, and duty-of-care standards.",
        sentiment: "critical",
        articleCount: 40,
        articles: [
          {
            title: "Internal Meta Documents Show Company Knew of Teen Harm Risks",
            url: "https://example.com/meta-internal-documents-teens",
          },
          {
            title: "Senate Bill Would Require Algorithm Audits for Minors",
            url: "https://example.com/senate-algorithm-audit-bill",
          },
          {
            title: "UK Online Safety Act: A Model for Platform Duty of Care",
            url: "https://example.com/uk-online-safety-act",
          },
          {
            title: "Age Verification Tech Has Matured — Platforms Have No More Excuses",
            url: "https://example.com/age-verification-maturity",
          },
        ],
      },
      {
        viewpoint: "Parental Responsibility",
        summary:
          "Government bans are hard to enforce and may backfire. Parents, educators, and families should lead with digital literacy and reasonable screen-time limits.",
        sentiment: "supportive",
        articleCount: 22,
        articles: [
          {
            title: "Screen-Time Contracts: Families Finding Balance Together",
            url: "https://example.com/screen-time-family-contracts",
          },
          {
            title: "Digital Literacy Curriculum Gains Ground in Schools",
            url: "https://example.com/digital-literacy-schools",
          },
          {
            title: "Why Blanket Bans on Social Media Often Backfire for Teens",
            url: "https://example.com/social-media-ban-backfire",
          },
        ],
      },
      {
        viewpoint: "Nuanced View",
        summary:
          "Social media has both positive and negative effects. Research should guide evidence-based policy rather than blanket restrictions or complete inaction.",
        sentiment: "neutral",
        articleCount: 16,
        articles: [
          {
            title: "Not All Screen Time Is Equal: New Research Adds Nuance",
            url: "https://example.com/screen-time-nuance-research",
          },
          {
            title: "Social Media and LGBTQ+ Youth: A Source of Life-Saving Community",
            url: "https://example.com/social-media-lgbtq-youth",
          },
          {
            title: "Evidence-Based Policy for Social Media: What the Data Actually Shows",
            url: "https://example.com/social-media-evidence-policy",
          },
        ],
      },
    ],
  },
];

function getTopics() {
  const date = getTodayDateString();
  return {
    date,
    topics: MOCK_TOPICS.map((topic) => {
      const totalArticles = topic.perspectives.reduce(
        (sum, p) => sum + p.articleCount,
        0,
      );
      return {
        ...topic,
        totalArticles,
        perspectives: topic.perspectives.map((p) => ({
          ...p,
          percentage: Math.round((p.articleCount / totalArticles) * 100),
        })),
      };
    }),
  };
}

module.exports = { getTopics };
