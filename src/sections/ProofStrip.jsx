// Dual-row achievement marquee — quick social proof under the hero.
export default function ProofStrip() {
  const items1 = [
    "3.9M Reel Views",
    "Coca-Cola Partnership",
    "10+ Campaigns Executed",
    "Durga Puja OOTD — 100+ Tags",
    "35+ Outlets Managed",
    "3000+ Leads — Shagun Wali Diwali",
    "Spykar Brand Collab",
    "50+ Campaign Decks",
  ];
  const items2 = [
    "Bengal Premier League",
    "ComicCon India",
    "Buzz Confluence '24",
    "MCRA — 50K+ Followers",
    "Wasooli Bhaiyya — 20K+ Followers",
    "CCU Festival Host",
    "Tridha Choudhury BTS",
    "Mr. Xavrang Winner",
  ];

  const doubled1 = [...items1, ...items1];
  const doubled2 = [...items2, ...items2];

  return (
    <div className="pstrip" aria-hidden="true">
      <div className="pstrip-row">
        <div className="pstrip-track pstrip-track-fwd">
          {doubled1.map((label, i) => (
            <span className="pstrip-item" key={i}>
              <span className="pstrip-dot" />
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="pstrip-row">
        <div className="pstrip-track pstrip-track-rev">
          {doubled2.map((label, i) => (
            <span className="pstrip-item pstrip-item-muted" key={i}>
              <span className="pstrip-dot" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
