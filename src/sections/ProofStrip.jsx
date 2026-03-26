// src/sections/ProofStrip.jsx
// Continuous marquee ticker — two rows, opposite directions
// Replace your existing ProofStrip.jsx with this

export default function ProofStrip() {
  const items1 = [
    { label: "3.9M Reel Views" },
    { label: "Coca-Cola Partnership" },
    { label: "10+ Campaigns Executed" },
    { label: "Durga Puja OOTD — 100+ Tags" },
    { label: "35+ Outlets Managed" },
    { label: "3000+ Leads — Shagun Wali Diwali" },
    { label: "Spykar Brand Collab" },
    { label: "50+ Campaign Decks" },
  ];

  const items2 = [
    { label: "Bengal Premier League" },
    { label: "ComicCon India" },
    { label: "Buzz Confluence '24" },
    { label: "MCRA — 50K+ Followers" },
    { label: "Wasooli Bhaiyya — 20K+ Followers" },
    { label: "CCU Festival Host" },
    { label: "Tridha Choudhury BTS" },
    { label: "Mr. Xavrang Winner" },
  ];

  const doubled1 = [...items1, ...items1];
  const doubled2 = [...items2, ...items2];

  return (
    <div className="proof-strip-wrap">

      {/* Row 1 — left to right */}
      <div className="proof-strip-row">
        <div className="proof-strip-track proof-track-fwd">
          {doubled1.map((item, i) => (
            <div key={i} className="proof-item">
              <span className="proof-dot" />
              <span className="proof-text">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="proof-strip-row proof-strip-row-2">
        <div className="proof-strip-track proof-track-rev">
          {doubled2.map((item, i) => (
            <div key={i} className="proof-item proof-item-2">
              <span className="proof-dot proof-dot-2" />
              <span className="proof-text">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
