// src/pages/CampaignPage.jsx
// Route: /campaigns/chai-break
// Shows all 3 Chai Break campaigns from the PDF

import { useState } from "react";

const campaigns = [
  {
    id: "friendship-day",
    title: "Friendship Day",
    subtitle: "Metaverse Keychain Campaign",
    tagline: "Boosting Brand Recall Through Innovation",
    color: "#f5c842",
    accentColor: "#1a1a00",
    period: "1st – 3rd August",
    brand: "Chai Break",
    role: "Brand Strategist · Content Creator",
    stats: [
      { number: "75+", label: "Redemptions" },
      { number: "24", label: "Outlets" },
      { number: "6", label: "Keychain Designs" },
    ],
    description: "I conceptualised and executed the Metaverse Keychain Campaign where customers received a collectible keychain with every bill. The idea was to build recall, create a fun "share-with-your-friend" moment, and drive repeat engagement. I created the full content series, strategy deck, and social storytelling for the rollout.",
    deliverables: [
      "Full content strategy & rollout deck",
      "6 collectible keychain concepts (Kal Se Pakka, Full Senti, Kaleshi, Certified Bhookad, Meme Material, Rizz Master)",
      "MateVerse video series (3 parts)",
      "Social media storytelling series",
      "In-store campaign rollout across 24 outlets",
    ],
    keyInsight: "The 'Metaverse' naming wasn't random — it gave the campaign a cool, shareable identity that made customers feel like they were part of something bigger than just a keychain.",
  },
  {
    id: "korean-festival",
    title: "Korean Festival",
    subtitle: "K-Dish Carnival",
    tagline: "A Month-Long Korean Food Festival",
    color: "#c0392b",
    accentColor: "#2d0000",
    period: "4th – 31st August",
    brand: "Chai Break × Coca-Cola",
    role: "Brand Strategist · Content Creator",
    stats: [
      { number: "1 Month", label: "Duration" },
      { number: "35+", label: "Outlets" },
      { number: "Coca-Cola", label: "Partnership" },
    ],
    description: "I led the full content of Chai Break's Korean Food Festival, where we introduced a curated Korean-inspired menu for an entire month. I handled the theme development, pitch deck, content plan, and all creative assets, ensuring the festival looked fresh, trendy, and culturally on-point. We also partnered with Coca-Cola to elevate the campaign visibility and in-store experience.",
    deliverables: [
      "Theme development & pitch deck",
      "Coca-Cola strategic partnership proposal",
      "Full creative asset suite (posters, reels, stories)",
      "Menu design & promotional content",
      "Month-long content calendar",
    ],
    keyInsight: "Landing a Coca-Cola partnership for a month-long campaign isn't just about reach — it's about positioning Chai Break as a brand serious enough to sit at the same table as a global brand.",
  },
  {
    id: "durga-puja",
    title: "Durga Puja",
    subtitle: "Glam The Gram",
    tagline: "OOTD Challenge",
    color: "#7c3aed",
    accentColor: "#1a0030",
    period: "21st Sept – 5th Oct",
    brand: "Chai Break × Spykar",
    role: "Brand Strategist · Content Creator",
    stats: [
      { number: "100+", label: "Redemptions" },
      { number: "70+", label: "OOTD Tags" },
      { number: "3.9M", label: "Reel Views" },
    ],
    description: "Designed a festive UGC-driven campaign where customers posted OOTD selfies with our hashtags. This generated 100+ tags, increased store footfall during Puja week, and spiked organic reach across all outlets. Partnered with Spykar for fashion vouchers as incentives.",
    deliverables: [
      "Full UGC campaign strategy",
      "Spykar partnership integration",
      "Blogger activation across 7 outlets (Sector 5, Golpark, Kakurgachi, Dunlop, Howrah A.C. Market, Tollygunge, Jessore Road)",
      "Creative reels — 3.9M views",
      "70+ OOTD fashion tags, 30+ café tags",
      "Customer review compilation content",
    ],
    keyInsight: "UGC campaigns work when the incentive is aspirational not just transactional. Fashion vouchers + Puja FOMO = people actually wanted to participate.",
  },
];

export default function CampaignPage() {
  const [active, setActive] = useState(0);
  const camp = campaigns[active];

  return (
    <div className="camp-page">
      {/* Header */}
      <div className="camp-header">
        <a href="/" className="camp-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <line x1="19" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <polyline points="12 19 5 12 12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Portfolio
        </a>
        <div className="camp-header-brand">
          <span className="eyebrow">Campaign Work</span>
          <h1 className="camp-header-title">Chai Break Campaigns</h1>
          <p className="camp-header-sub">Oct – Dec 2025 · Brand Strategy & Content Direction</p>
        </div>
      </div>

      {/* Tab selector */}
      <div className="camp-tabs">
        {campaigns.map((c, i) => (
          <button
            key={c.id}
            className={`camp-tab ${active === i ? "camp-tab-active" : ""}`}
            style={{ "--tab-color": c.color }}
            onClick={() => setActive(i)}
          >
            <span className="camp-tab-num">0{i + 1}</span>
            <span className="camp-tab-name">{c.title}</span>
          </button>
        ))}
      </div>

      {/* Campaign detail */}
      <div className="camp-detail" key={camp.id}>

        {/* Hero banner */}
        <div className="camp-hero-banner" style={{ "--camp-color": camp.color, "--camp-accent": camp.accentColor }}>
          <div className="camp-hero-bg" />
          <div className="camp-hero-content">
            <div className="camp-hero-left">
              <span className="camp-label" style={{ color: camp.color }}>{camp.brand}</span>
              <h2 className="camp-title">{camp.title}</h2>
              <h3 className="camp-subtitle">{camp.subtitle}</h3>
              <p className="camp-tagline">{camp.tagline}</p>
              <div className="camp-meta">
                <span>📅 {camp.period}</span>
                <span>👤 {camp.role}</span>
              </div>
            </div>
            <div className="camp-stats-wrap">
              {camp.stats.map((s) => (
                <div key={s.label} className="camp-stat">
                  <span className="camp-stat-num" style={{ color: camp.color }}>{s.number}</span>
                  <span className="camp-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className="camp-content-grid">

          {/* Description */}
          <div className="camp-card">
            <div className="camp-card-label">The Campaign</div>
            <p className="camp-card-text">{camp.description}</p>
          </div>

          {/* Key insight */}
          <div className="camp-card camp-card-insight" style={{ borderColor: `${camp.color}30` }}>
            <div className="camp-card-label" style={{ color: camp.color }}>Strategic Insight</div>
            <p className="camp-card-text camp-insight-text">"{camp.keyInsight}"</p>
          </div>

          {/* Deliverables */}
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

        {/* Canva link */}
        <div className="camp-canva-link">
          <p>Want to see the full creative assets & decks?</p>
          <a
            href="https://abhishek-portfolio07.my.canva.site/oct-dec-2025"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary camp-cta-btn"
          >
            View Full Campaign Deck ↗
          </a>
          <a href="#contact" className="btn btn-secondary camp-cta-btn" onClick={() => window.location.href = "/#contact"}>
            Work With Me
          </a>
        </div>
      </div>

      {/* Nav to next campaign */}
      <div className="camp-nav">
        {active > 0 && (
          <button className="camp-nav-btn" onClick={() => setActive(active - 1)}>
            ← {campaigns[active - 1].title}
          </button>
        )}
        {active < campaigns.length - 1 && (
          <button className="camp-nav-btn camp-nav-next" onClick={() => setActive(active + 1)}>
            {campaigns[active + 1].title} →
          </button>
        )}
      </div>
    </div>
  );
}
