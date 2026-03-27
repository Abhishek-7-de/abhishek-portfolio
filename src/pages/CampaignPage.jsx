import { useState } from "react";

// ─── ALL CAMPAIGNS ────────────────────────────────────────────────────────────
const MID_YEAR = [
  {
    id: "friendship-day",
    title: "Friendship Day",
    subtitle: "Metaverse Keychain Campaign",
    tagline: "Boosting Brand Recall Through Innovation",
    period: "1st – 3rd August 2025",
    brand: "Chai Break",
    color: "#f5c842",
    stats: [
      { n: "75+", l: "Redemptions" },
      { n: "24", l: "Outlets" },
      { n: "6", l: "Keychain Designs" },
    ],
    description: "Conceptualised and executed the Metaverse Keychain Campaign where customers received a collectible keychain with every bill. Built recall, created a shareable friend moment, and drove repeat engagement.",
    insight: "The Metaverse naming gave the campaign a cool, shareable identity. Customers felt like they were part of something bigger than just a keychain.",
    deliverables: [
      "Full content strategy & rollout deck",
      "6 collectible keychain concepts (Kal Se Pakka, Full Senti, Kaleshi, Certified Bhookad, Meme Material, Rizz Master)",
      "MateVerse video series — 3 parts",
      "Social media storytelling & rollout",
      "In-store campaign across 24 outlets",
    ],
  },
  {
    id: "korean-festival",
    title: "K-Dish Carnival",
    subtitle: "Korean Food Festival",
    tagline: "A Month-Long Korean Food Festival",
    period: "4th – 31st August 2025",
    brand: "Chai Break x Coca-Cola",
    color: "#ef4444",
    stats: [
      { n: "1 Month", l: "Duration" },
      { n: "35+", l: "Outlets" },
      { n: "Coca-Cola", l: "Partner" },
    ],
    description: "Led the full content of Chai Break's Korean Food Festival. Introduced a curated Korean-inspired menu for an entire month. Handled theme development, pitch deck, content plan, and all creative assets. Landed Coca-Cola as strategic partner.",
    insight: "Landing a Coca-Cola partnership positioned Chai Break as a brand serious enough to sit at the same table as a global brand.",
    deliverables: [
      "Theme development & pitch deck",
      "Coca-Cola strategic partnership proposal",
      "Full creative asset suite — posters, reels, stories",
      "Menu design & promotional content",
      "Month-long content calendar across 8 cities",
    ],
  },
  {
    id: "durga-puja",
    title: "Glam The Gram",
    subtitle: "Durga Puja OOTD Challenge",
    tagline: "UGC-Driven Festive Fashion Campaign",
    period: "21st Sept – 5th Oct 2025",
    brand: "Chai Break x Spykar",
    color: "#a855f7",
    stats: [
      { n: "100+", l: "Redemptions" },
      { n: "3.9M", l: "Reel Views" },
      { n: "70+", l: "OOTD Tags" },
    ],
    description: "Designed a festive UGC-driven campaign where customers posted OOTD selfies with our hashtags. Generated 100+ tags, increased store footfall during Puja week, and spiked organic reach. Spykar fashion vouchers as incentives.",
    insight: "UGC works when the incentive is aspirational, not just transactional. Fashion vouchers + Puja FOMO = people actually wanted to participate.",
    deliverables: [
      "Full UGC campaign strategy & hashtag system",
      "Spykar partnership & voucher integration",
      "Blogger activation across 7 outlets",
      "Glam The Gram creative reels — 3.9M views",
      "70+ OOTD fashion tags, 30+ cafe tags",
    ],
  },
];

const OCT_DEC = [
  {
    id: "shagun-diwali",
    title: "Shagun Wali Diwali",
    subtitle: "Spin-The-Wheel Festival Campaign",
    tagline: "Buzz That Converts",
    period: "Oct – Nov 2025",
    brand: "Chai Break",
    color: "#f59e0b",
    stats: [
      { n: "11.7M", l: "Campaign Views" },
      { n: "13.1K", l: "Content Interactions" },
      { n: "2.9K+", l: "Wheel Spins" },
      { n: "11.4L+", l: "Sales Driven" },
    ],
    description: "Diwali campaign built around a Spin-The-Wheel mechanic at Chai Break outlets — customers won free pizzas, desserts, beverages, and discounts. Combined festival energy with in-store gamification and digital storytelling to drive both footfall and social buzz.",
    insight: "Gamification at the point of sale is underused. When you make the checkout experience exciting, people share it. 2,900 spins means 2,900 organic moments created.",
    deliverables: [
      "Shagun Wali Diwali campaign concept & brand identity",
      "Spin-The-Wheel mechanic design & in-store activation",
      "Full digital creative suite — reels, stories, static posts",
      "Seasonal content calendar & rollout plan",
      "QR-code-based Shagun greeting integration",
    ],
  },
  {
    id: "sizzler-festival",
    title: "Sizzler Festival",
    subtitle: "The Big Sizzle",
    tagline: "Whole Lot Hotter",
    period: "Nov – Dec 2025",
    brand: "Chai Break",
    color: "#ef4444",
    stats: [
      { n: "9.3M", l: "Campaign Views" },
      { n: "9.8K", l: "Content Interactions" },
      { n: "1500+", l: "Sizzlers Served" },
      { n: "7.7L+", l: "Sales Driven" },
    ],
    description: "Led the launch of Chai Break's first-ever Sizzler Festival — a new F&B format introducing sizzler platters across outlets. Built the entire campaign identity, partnered with food bloggers for amplification, and created a content push that positioned Chai Break as a serious food destination.",
    insight: "Chai Break needed a reason for people to visit beyond chai. A sizzler festival does three things: introduces a new SKU, creates shareworthy food moments, and expands brand perception.",
    deliverables: [
      "Sizzler Festival concept — The Big Sizzle brand identity",
      "Full campaign creative: hero video, reels, thumbnails",
      "Food blogger partnerships & UGC amplification",
      "Menu design & in-store communication",
      "Sales tracking integration with campaign rollout",
    ],
  },
  {
    id: "choc-n-roll",
    title: "Choc N Roll",
    subtitle: "Winter Beverage Festival",
    tagline: "Choc-n-Roll Festival",
    period: "Dec 2025",
    brand: "Chai Break (ALP Retail Pvt Ltd)",
    color: "#92400e",
    stats: [
      { n: "6.4M", l: "Campaign Views" },
      { n: "5.9K", l: "Content Interactions" },
      { n: "3.6K+", l: "Beverages Served" },
      { n: "7.5L+", l: "Sales Driven" },
    ],
    description: "Winter beverage festival built around a chocolate and indulgence theme. Introduced a new seasonal menu of chocolate-forward drinks. Campaign created a cosy, aspirational winter aesthetic to drive repeat visits during the coldest months.",
    insight: "Winter is the most competitive F&B season. The Choc N Roll identity gave Chai Break a distinct personality during a time when every cafe is running the same Christmas content.",
    deliverables: [
      "Choc N Roll winter campaign concept & identity",
      "Seasonal beverage menu creative direction",
      "Full content calendar for December",
      "Reels, stories & in-store visual communication",
      "Blogger content partnerships for amplification",
    ],
  },
  {
    id: "other-campaigns",
    title: "More From Oct–Dec",
    subtitle: "Glam The Gram · Break A Boo · Great Mix Carnival",
    tagline: "Always-On Marketing Ecosystem",
    period: "Oct – Dec 2025",
    brand: "Chai Break",
    color: "#22c55e",
    stats: [
      { n: "7", l: "Campaigns in Quarter" },
      { n: "Seasonal", l: "Content System" },
      { n: "Always", l: "On Strategy" },
    ],
    description: "Beyond the hero campaigns, the Oct–Dec quarter included Glam The Gram OOTD (3.9M views), Break A Boo Halloween filter engagement, The Great Mix Carnival cocktail launch, Shagun Wali Diwali combos, and hyperlocal outlet-specific activations.",
    insight: "The real work isn't one viral campaign. It's building an always-on ecosystem where every month has a reason for customers to visit, post, and come back.",
    deliverables: [
      "Break A Boo — Halloween AR filter concept & rollout",
      "The Great Mix Carnival — cocktail launch content",
      "Combos @ 999 — promotional content system",
      "Hyperlocal outlet-specific content strategy",
      "Full Q4 content calendar & campaign roadmap",
    ],
  },
];

function CampaignCard({ camp }) {
  return (
    <div className="camp-hero-banner" style={{ "--camp-color": camp.color }}>
      <div className="camp-hero-bg" />
      <div className="camp-hero-content">
        <div className="camp-hero-left">
          <span className="camp-label" style={{ color: camp.color }}>{camp.brand}</span>
          <h2 className="camp-title">{camp.title}</h2>
          <h3 className="camp-subtitle" style={{ color: camp.color }}>{camp.subtitle}</h3>
          <p className="camp-tagline">{camp.tagline}</p>
          <div className="camp-meta">
            <span>📅 {camp.period}</span>
          </div>
        </div>
        <div className="camp-stats-wrap">
          {camp.stats.map((s) => (
            <div key={s.l} className="camp-stat">
              <span className="camp-stat-num" style={{ color: camp.color }}>{s.n}</span>
              <span className="camp-stat-label">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CampaignDetail({ camp }) {
  return (
    <div key={camp.id} className="camp-detail-block">
      <CampaignCard camp={camp} />
      <div className="camp-content-grid">
        <div className="camp-card">
          <div className="camp-card-label">The Campaign</div>
          <p className="camp-card-text">{camp.description}</p>
        </div>
        <div className="camp-card camp-card-insight" style={{ borderColor: `${camp.color}25` }}>
          <div className="camp-card-label" style={{ color: camp.color }}>Strategic Insight</div>
          <p className="camp-card-text camp-insight-text">"{camp.insight}"</p>
        </div>
        <div className="camp-card camp-card-full">
          <div className="camp-card-label">What I Built</div>
          <ul className="camp-deliverables">
            {camp.deliverables.map((d, i) => (
              <li key={i} className="camp-deliverable">
                <span className="camp-deliverable-dot" style={{ background: camp.color }} />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function CampaignPage() {
  const path = window.location.pathname;

  // Route: /campaigns/oct-dec
  if (path.startsWith("/campaigns/oct-dec")) {
    return <OctDecPage />;
  }

  // Default: /campaigns/chai-break (mid-year)
  return <MidYearPage />;
}

function MidYearPage() {
  const [active, setActive] = useState(0);
  const camp = MID_YEAR[active];

  return (
    <div className="camp-page">
      <div className="camp-header">
        <a href="/" className="camp-back">← Portfolio</a>
        <div style={{ marginTop: 16 }}>
          <span className="eyebrow">Chai Break · Mid-Year Campaigns</span>
          <h1 className="camp-header-title">Mid-Year 2025</h1>
          <p className="camp-header-sub">Brand Strategy & Content Direction · Aug–Oct 2025</p>
        </div>
        <a href="/campaigns/oct-dec" className="camp-season-link" style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 999, border: '1px solid rgba(201,168,76,0.3)', color: 'rgba(201,168,76,0.8)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', transition: 'all 0.2s' }}>
          Also see: Oct–Dec 2025 ↗
        </a>
      </div>

      <div className="camp-tabs">
        {MID_YEAR.map((c, i) => (
          <button key={c.id} className={`camp-tab ${active === i ? "camp-tab-active" : ""}`}
            style={{ "--tab-color": c.color }} onClick={() => setActive(i)}>
            <span className="camp-tab-num">0{i + 1}</span>
            <span className="camp-tab-name">{c.title}</span>
          </button>
        ))}
      </div>

      <CampaignDetail camp={camp} />

      <div className="camp-canva-link">
        <p>See the full creative assets, decks and strategy docs</p>
        <a href="https://abhishek-portfolio07.my.canva.site/oct-dec-2025" target="_blank" rel="noreferrer" className="btn btn-primary">View Full Campaign Deck ↗</a>
        <a href="/#contact" className="btn btn-secondary">Work With Me</a>
      </div>

      <div className="camp-nav">
        {active > 0 && <button className="camp-nav-btn" onClick={() => setActive(active - 1)}>← {MID_YEAR[active - 1].title}</button>}
        {active < MID_YEAR.length - 1 && <button className="camp-nav-btn camp-nav-next" onClick={() => setActive(active + 1)}>{MID_YEAR[active + 1].title} →</button>}
      </div>
    </div>
  );
}

function OctDecPage() {
  const [active, setActive] = useState(0);
  const camp = OCT_DEC[active];

  return (
    <div className="camp-page">
      <div className="camp-header">
        <a href="/" className="camp-back">← Portfolio</a>
        <div style={{ marginTop: 16 }}>
          <span className="eyebrow">Chai Break · Oct–Dec 2025</span>
          <h1 className="camp-header-title">Oct – Dec 2025</h1>
          <p className="camp-header-sub">Always-On Marketing Ecosystem · 7 Campaigns · Q4 Strategy</p>
        </div>
        <a href="/campaigns/chai-break" style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 999, border: '1px solid rgba(201,168,76,0.3)', color: 'rgba(201,168,76,0.8)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          Also see: Mid-Year 2025 ↗
        </a>
      </div>

      {/* Quarter overview stats */}
      <div className="oct-dec-overview">
        {[
          { n: "11.7M", l: "Peak Campaign Views", color: "#f59e0b" },
          { n: "7", l: "Campaigns in Quarter", color: "#22c55e" },
          { n: "27.3L+", l: "Total Sales Driven", color: "#3b82f6" },
          { n: "28.8K+", l: "Total Interactions", color: "#a855f7" },
        ].map(s => (
          <div key={s.l} className="oct-dec-stat" style={{ borderTopColor: s.color }}>
            <span className="oct-dec-stat-n" style={{ color: s.color }}>{s.n}</span>
            <span className="oct-dec-stat-l">{s.l}</span>
          </div>
        ))}
      </div>

      <div className="camp-tabs">
        {OCT_DEC.map((c, i) => (
          <button key={c.id} className={`camp-tab ${active === i ? "camp-tab-active" : ""}`}
            style={{ "--tab-color": c.color }} onClick={() => setActive(i)}>
            <span className="camp-tab-num">0{i + 1}</span>
            <span className="camp-tab-name">{c.title}</span>
          </button>
        ))}
      </div>

      <CampaignDetail camp={camp} />

      <div className="camp-canva-link">
        <p>See the full creative assets, decks and strategy docs</p>
        <a href="https://abhishek-portfolio07.my.canva.site/oct-dec-2025" target="_blank" rel="noreferrer" className="btn btn-primary">View Full Oct–Dec Deck ↗</a>
        <a href="/#contact" className="btn btn-secondary">Work With Me</a>
      </div>

      <div className="camp-nav">
        {active > 0 && <button className="camp-nav-btn" onClick={() => setActive(active - 1)}>← {OCT_DEC[active - 1].title}</button>}
        {active < OCT_DEC.length - 1 && <button className="camp-nav-btn camp-nav-next" onClick={() => setActive(active + 1)}>{OCT_DEC[active + 1].title} →</button>}
      </div>
    </div>
  );
}
