import { useState, useEffect } from "react";
import heroCutout from "../assets/hero-cutout.png";

export default function IntroFlip() {
  const [phase, setPhase] = useState("drop"); // drop → blink → settle → gone
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("intro-seen")) {
      setDismissed(true);
      return;
    }
    // avatar drops in immediately
    const t1 = setTimeout(() => setPhase("blink"), 900);   // blink
    const t2 = setTimeout(() => setPhase("settle"), 1600); // settle to normal
    const t3 = setTimeout(() => setPhase("wave"), 2000);   // wave + bubble
    const t4 = setTimeout(() => setPhase("gone"), 3800);   // fade out
    const t5 = setTimeout(() => {
      setDismissed(true);
      sessionStorage.setItem("intro-seen", "1");
    }, 4400);
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, []);

  const skip = () => {
    setPhase("gone");
    setTimeout(() => {
      setDismissed(true);
      sessionStorage.setItem("intro-seen", "1");
    }, 500);
  };

  if (dismissed) return null;

  return (
    <div className={`intro-overlay ${phase === "gone" ? "intro-overlay-out" : ""}`}>
      <div className="intro-bg" />
      <button className="intro-skip" onClick={skip}>Skip ↗</button>

      {/* No box — just the avatar floating freely */}
      <div className={`intro-avatar-free intro-phase-${phase}`}>
        <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="intro-avatar-svg">
          <circle cx="100" cy="100" r="88" fill="rgba(20,18,10,0.85)" stroke="#c9a84c" strokeWidth="1.2" opacity="0.6"/>
          <rect x="85" y="148" width="30" height="28" rx="8" fill="#d4a574"/>
          <path d="M60 185 Q100 170 140 185 L148 220 H52 Z" fill="#1a1a14"/>
          <path d="M85 176 L100 195 L115 176" fill="#c9a84c" opacity="0.5"/>
          <ellipse cx="100" cy="115" rx="42" ry="48" fill="#d4a574"/>
          <path d="M58 108 Q60 68 100 64 Q140 68 142 108 Q138 82 100 80 Q62 82 58 108Z" fill="#2a1a0a"/>
          <path d="M58 108 Q55 98 58 90 Q68 72 100 68 Q115 68 128 75 Q140 84 142 95 Q144 104 142 108" fill="#2a1a0a"/>
          <path d="M76 100 Q84 96 92 98" stroke="#2a1a0a" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M108 98 Q116 96 124 100" stroke="#2a1a0a" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Eyes — blink animation */}
          <ellipse cx="84" cy="108" rx="7" ry="7.5" fill="white" className={phase === "blink" ? "intro-eye-blink" : ""}/>
          <ellipse cx="116" cy="108" rx="7" ry="7.5" fill="white" className={phase === "blink" ? "intro-eye-blink" : ""}/>
          <circle cx="85" cy="109" r="4.5" fill="#1a0a00"/>
          <circle cx="117" cy="109" r="4.5" fill="#1a0a00"/>
          <circle cx="87" cy="107" r="1.5" fill="white" opacity="0.9"/>
          <circle cx="119" cy="107" r="1.5" fill="white" opacity="0.9"/>
          <rect x="74" y="102" width="22" height="14" rx="5" fill="none" stroke="#c9a84c" strokeWidth="1.8"/>
          <rect x="104" y="102" width="22" height="14" rx="5" fill="none" stroke="#c9a84c" strokeWidth="1.8"/>
          <line x1="96" y1="109" x2="104" y2="109" stroke="#c9a84c" strokeWidth="1.6"/>
          <line x1="72" y1="109" x2="67" y2="110" stroke="#c9a84c" strokeWidth="1.6"/>
          <line x1="126" y1="109" x2="131" y2="110" stroke="#c9a84c" strokeWidth="1.6"/>
          <path d="M98 118 Q100 124 102 118" stroke="#b8845a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M86 132 Q100 142 114 132" stroke="#2a1a0a" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
          <ellipse cx="58" cy="118" rx="5" ry="7" fill="#d4a574"/>
          <ellipse cx="142" cy="118" rx="5" ry="7" fill="#d4a574"/>
          <g style={{ transformOrigin: "155px 175px", animation: phase === "wave" ? "waveHand 0.5s ease-in-out 0s 5 alternate" : "none" }}>
            <ellipse cx="155" cy="165" rx="14" ry="18" fill="#d4a574" transform="rotate(-20 155 165)"/>
            <ellipse cx="162" cy="150" rx="4" ry="8" fill="#d4a574" transform="rotate(10 162 150)"/>
            <ellipse cx="168" cy="153" rx="4" ry="8" fill="#d4a574" transform="rotate(25 168 153)"/>
            <ellipse cx="172" cy="159" rx="4" ry="7" fill="#d4a574" transform="rotate(40 172 159)"/>
            <ellipse cx="173" cy="166" rx="3.5" ry="6.5" fill="#d4a574" transform="rotate(55 173 166)"/>
          </g>
        </svg>

        {/* Speech bubble — only in wave phase */}
        {phase === "wave" && (
          <div className="intro-bubble intro-bubble-free">
            <span>Hi there! 👋</span>
            <span className="intro-bubble-sub">Welcome to my world</span>
            <div className="intro-bubble-tail" />
          </div>
        )}

        {/* Subtle gold ring glow underneath — no box */}
        <div className="intro-avatar-glow" />
      </div>
    </div>
  );
}
