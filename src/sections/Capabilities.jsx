import Reveal from "../motion/Reveal";
import CountUp from "../motion/CountUp";

const icons = {
  understand: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="13" cy="13" r="8" stroke="currentColor" strokeWidth="1.5" />
      <line x1="19" y1="19" x2="27" y2="27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="13" cy="13" r="3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  plan: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <line x1="4" y1="12" x2="28" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="10" y1="17" x2="22" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <line x1="10" y1="21" x2="18" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <rect x="7" y="4" width="3" height="5" rx="1.5" fill="currentColor" />
      <rect x="22" y="4" width="3" height="5" rx="1.5" fill="currentColor" />
    </svg>
  ),
  reference: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect x="5" y="4" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="10" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(10,10,8,0.9)" />
      <line x1="16" y1="15" x2="24" y2="15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
      <line x1="16" y1="19" x2="22" y2="19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  execute: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M16 4 L20 14 L30 14 L22 20 L25 30 L16 24 L7 30 L10 20 L2 14 L12 14 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
};

const stats = [
  { to: 10, suffix: "+", label: "Campaign launches" },
  { to: 30, suffix: "+", label: "Voxpop, UGC & outlet content" },
  { to: 50, suffix: "+", label: "Campaign decks & research docs" },
  { text: "Multi", label: "Brands, outlets & event formats" },
];

const steps = [
  { step: "01", key: "understand", title: "Understand", text: "Market, audience, rivals, and what people actually care about." },
  { step: "02", key: "plan", title: "Plan", text: "Calendar logic, hero-hub-hygiene, and where attention should go." },
  { step: "03", key: "reference", title: "Research & Reference", text: "Moodboards, briefs, competitor decks, and sharp context before execution." },
  { step: "04", key: "execute", title: "Execute", text: "Rollout, content, deck support, and on-ground or digital delivery." },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="sec caps">
      <Reveal className="sec-head">
        <span className="sec-eyebrow">Capabilities</span>
        <h2 className="sec-title">
          Numbers, process,
          <br />
          and proof.
        </h2>
      </Reveal>

      <div className="caps-stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} y={20} className="caps-stat">
            <span className="caps-stat-num">
              {s.text ? s.text : <CountUp to={s.to} suffix={s.suffix} />}
            </span>
            <span className="caps-stat-label">{s.label}</span>
          </Reveal>
        ))}
      </div>

      <div className="caps-process">
        {steps.map((st, i) => (
          <Reveal key={st.step} delay={i * 0.08} y={24} className="caps-step">
            <div className="caps-step-top">
              <span className="caps-step-icon">{icons[st.key]}</span>
              <span className="caps-step-num">{st.step}</span>
            </div>
            <h3 className="caps-step-title">{st.title}</h3>
            <p className="caps-step-text">{st.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
