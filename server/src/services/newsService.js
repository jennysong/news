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
    perspectives: [
      {
        viewpoint: "Pro-Regulation",
        summary:
          "Strict oversight is necessary to prevent algorithmic bias, protect privacy, and ensure AI systems are safe before deployment. Without guardrails, powerful AI could cause widespread harm.",
        sentiment: "supportive",
        articleCount: 42,
      },
      {
        viewpoint: "Pro-Innovation",
        summary:
          "Heavy-handed regulation will stifle technological progress and push AI development to less regulated regions. A light-touch, industry-led approach would preserve competitiveness while addressing risks.",
        sentiment: "critical",
        articleCount: 35,
      },
      {
        viewpoint: "Balanced / Third Way",
        summary:
          "A tiered, risk-based framework can protect citizens from high-risk applications while giving low-risk innovation room to grow. International coordination is key.",
        sentiment: "neutral",
        articleCount: 18,
      },
    ],
  },
  {
    id: 2,
    title: "Global Housing Affordability Crisis Deepens",
    summary:
      "Housing prices continue to outpace wages in major cities, reigniting debates about market solutions versus government intervention.",
    category: "Economy",
    perspectives: [
      {
        viewpoint: "Market-Based Solutions",
        summary:
          "Easing zoning restrictions and incentivizing private development will increase supply and naturally bring prices down without distorting the market.",
        sentiment: "supportive",
        articleCount: 29,
      },
      {
        viewpoint: "Government Intervention",
        summary:
          "Public housing programs, rent controls, and taxes on speculative investment are essential to guarantee affordable housing as a basic right.",
        sentiment: "critical",
        articleCount: 38,
      },
      {
        viewpoint: "Community-Led Approaches",
        summary:
          "Community land trusts and cooperative housing models offer a middle ground, keeping homes affordable long-term without heavy top-down regulation.",
        sentiment: "neutral",
        articleCount: 12,
      },
    ],
  },
  {
    id: 3,
    title: "Climate Summit Sets Ambitious New Targets",
    summary:
      "World leaders have announced accelerated emissions reduction pledges, but critics question whether the commitments are realistic.",
    category: "Environment",
    perspectives: [
      {
        viewpoint: "Aggressive Action Needed",
        summary:
          "The new targets still fall short of what climate science demands. Governments must phase out fossil fuels faster and fund a just transition for affected communities.",
        sentiment: "critical",
        articleCount: 45,
      },
      {
        viewpoint: "Economic Pragmatism",
        summary:
          "Rapid decarbonization risks economic disruption. A gradual transition that leverages natural gas as a bridge fuel protects jobs while still reducing emissions.",
        sentiment: "supportive",
        articleCount: 30,
      },
      {
        viewpoint: "Technological Optimism",
        summary:
          "Breakthroughs in carbon capture, nuclear fusion, and green hydrogen could make aggressive targets achievable without sacrificing economic growth.",
        sentiment: "neutral",
        articleCount: 20,
      },
    ],
  },
  {
    id: 4,
    title: "Debate Over Universal Basic Income Intensifies",
    summary:
      "Several pilot programs have released results, fueling fresh arguments for and against providing unconditional cash payments to all citizens.",
    category: "Policy",
    perspectives: [
      {
        viewpoint: "Supporters",
        summary:
          "Pilot data shows UBI reduces poverty, improves mental health, and gives people freedom to pursue education or caregiving. It is a necessary safety net for the automation age.",
        sentiment: "supportive",
        articleCount: 33,
      },
      {
        viewpoint: "Opponents",
        summary:
          "UBI is fiscally irresponsible, could reduce work incentives, and diverts funds from targeted programs that more effectively help those in need.",
        sentiment: "critical",
        articleCount: 28,
      },
      {
        viewpoint: "Reform Advocates",
        summary:
          "Rather than a full UBI, expanding existing programs like earned income tax credits and job training achieves similar goals at lower cost.",
        sentiment: "neutral",
        articleCount: 15,
      },
    ],
  },
  {
    id: 5,
    title: "Social Media's Impact on Teen Mental Health",
    summary:
      "New research links heavy social media use to rising anxiety and depression among teenagers, prompting calls for platform accountability.",
    category: "Health",
    perspectives: [
      {
        viewpoint: "Platform Accountability",
        summary:
          "Social media companies profit from addictive design patterns that harm young users. Legislation should mandate age verification, algorithmic transparency, and duty-of-care standards.",
        sentiment: "critical",
        articleCount: 40,
      },
      {
        viewpoint: "Parental Responsibility",
        summary:
          "Government bans are hard to enforce and may backfire. Parents, educators, and families should lead with digital literacy and reasonable screen-time limits.",
        sentiment: "supportive",
        articleCount: 22,
      },
      {
        viewpoint: "Nuanced View",
        summary:
          "Social media has both positive and negative effects. Research should guide evidence-based policy rather than blanket restrictions or complete inaction.",
        sentiment: "neutral",
        articleCount: 16,
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
