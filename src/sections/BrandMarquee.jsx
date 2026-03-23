// Add this inside Hero.jsx desktop col, BELOW the cutout stage
// Or import and place after hero-top-row as a standalone strip

import { brandCloud, eventCloud } from "../data/heroMedia";

const allBrands = [...brandCloud, ...eventCloud];
const doubled = [...allBrands, ...allBrands];

export default function BrandMarquee() {
  return (
    <div className="brand-marquee-wrap">
      <div className="brand-marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="brand-marquee-chip">
            {item.logo ? (
              <img src={item.logo} alt={item.name} />
            ) : null}
            <span>{item.name}</span>
            {i < doubled.length - 1 && <span className="brand-marquee-dot" />}
          </span>
        ))}
      </div>
    </div>
  );
}
