import { useState } from "react";

// Premium gold SVG icons
const icons = {
  understand: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="13" cy="13" r="8" stroke="#c9a84c" strokeWidth="1.5"/>
      <line x1="19" y1="19" x2="27" y2="27" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="13" cy="13" r="3" fill="rgba(201,168,76,0.25)" stroke="#c9a84c" strokeWidth="1"/>
    </svg>
  ),
  plan: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="6" width="24" height="20" rx="3" stroke="#c9a84c" strokeWidth="1.5"/>
      <line x1="4" y1="12" x2="28" y2="12" stroke="#c9a84c" strokeWidth="1" opacity="0.5"/>
      <line x1="10" y1="17" x2="22" y2="17" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
      <line x1="10" y1="21" x2="18" y2="21" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <rect x="7" y="4" width="3" height="5" rx="1.5" fill="#c9a84c"/>
      <rect x="22" y="4" width="3" height="5" rx="1.5" fill="#c9a84c"/>
    </svg>
  ),
  reference: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="5" y="4" width="14" height="18" rx="2" stroke="#c9a84c" strokeWidth="1.5"/>
      <rect x="13" y="10" width="14" height="18" rx="2" stroke="#c9a84c" strokeWidth="1.5" fill="rgba(10,10,8,0.8)"/>
      <line x1="16" y1="15" x2="24" y2="15" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
      <line x1="16" y1="19" x2="22" y2="19" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      <line x1="16" y1="23" x2="24" y2="23" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
    </svg>
  ),
  execute: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4 L20 14 L30 14 L22 20 L25 30 L16 24 L7 30 L10 20 L2 14 L12 14 Z" stroke="#c9a84c" strokeWidth="1.5" fill="rgba(201,168,76,0.1)" strokeLinejoin="round"/>
    </svg>
  ),
};

const process = [
  { step:"01", key:"understand", title:"Understand", text:"Market, audience, rivals, and what people actually care about.", color:"#c9a84c" },
  { step:"02", key:"plan",       title:"Plan",        text:"Calendar logic, hero-hub-hygiene, and where attention should go.", color:"#b8945a" },
  { step:"03", key:"reference",  title:"Reference",   text:"Moodboards, briefs, examples, and sharp context before execution.", color:"#a08040" },
  { step:"04", key:"execute",    title:"Execute",     text:"Rollout, content, deck support, and on-ground or digital delivery.", color:"#c9a84c" },
];

const stats = [
  { number: "10+", label: "Campaign launches" },
  { number: "30+", label: "Voxpop, UGC & outlet content" },
  { number: "50+", label: "Decks, refs & brand docs" },
  { number: "Multi", label: "Brands, outlets & event formats" },
];

export default function Capabilities() {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section id="capabilities" className="section fade-up">
      <p className="eyebrow">Capabilities</p>
      <h2 className="section-title compact-title cap-title-mobile">
        Numbers, process,<br />and proof.
      </h2>

      <div className="stats-grid-mobile">
        {stats.map((item) => (
          <div key={item.label} className="stat-card-mobile">
            <span className="stat-number-mobile">{item.number}</span>
            <span className="stat-label-mobile">{item.label}</span>
          </div>
        ))}
      </div>

      {/* DESKTOP — zigzag tree */}
      <div className="process-tree process-tree-desktop">
        <div className="process-tree-line" />
        {process.map((item, i) => (
          <div key={item.step} className={`process-node ${i%2===0?"node-left":"node-right"}`}>
            <div className="process-node-dot" style={{ background: item.color }} />
            <div className="process-node-card" style={{ borderColor:`${item.color}30` }}>
              <div className="process-node-header">
                <div className="process-node-icon-wrap">{icons[item.key]}</div>
                <span className="process-node-step" style={{ color: item.color }}>{item.step}</span>
              </div>
              <h3 className="process-node-title">{item.title}</h3>
              <p className="process-node-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE — icon row with tap-to-reveal */}
      <div className="process-mobile-tree">
        {/* Horizontal connector line */}
        <div className="process-mobile-line" />

        <div className="process-mobile-icons">
          {process.map((item, i) => (
            <button
              key={item.step}
              type="button"
              className={`process-mobile-icon-btn ${activeNode===i?"active":""}`}
              onClick={() => setActiveNode(activeNode===i ? null : i)}
            >
              <div className="process-mobile-dot" style={{ background: activeNode===i ? item.color : "rgba(201,168,76,0.3)" }} />
              <div className="process-mobile-icon" style={{ borderColor: activeNode===i ? item.color : "rgba(201,168,76,0.2)" }}>
                {icons[item.key]}
              </div>
              <span className="process-mobile-step" style={{ color: activeNode===i ? item.color : "rgba(201,168,76,0.4)" }}>
                {item.step}
              </span>
            </button>
          ))}
        </div>

        {/* Pop-up text panel */}
        {activeNode !== null && (
          <div className="process-mobile-popup" style={{ borderColor: `${process[activeNode].color}40` }}>
            <div className="process-mobile-popup-header">
              <div className="process-mobile-popup-icon">{icons[process[activeNode].key]}</div>
              <div>
                <span className="process-mobile-popup-step" style={{ color: process[activeNode].color }}>
                  {process[activeNode].step}
                </span>
                <h3 className="process-mobile-popup-title">{process[activeNode].title}</h3>
              </div>
            </div>
            <p className="process-mobile-popup-text">{process[activeNode].text}</p>
          </div>
        )}

        <p className="process-mobile-hint">Tap an icon to learn more</p>
      </div>
    </section>
  );
}
