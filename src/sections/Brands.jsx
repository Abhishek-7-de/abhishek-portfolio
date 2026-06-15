import { brandCloud, eventCloud } from "../data/heroMedia";
import Reveal from "../motion/Reveal";

// All brand + event logos; clicking a chip opens that collaborator's primary
// link (Instagram page / featured reel). Preserves the links that previously
// lived in the hero's brand cloud.
const all = [...brandCloud, ...eventCloud];
const doubled = [...all, ...all];

export default function Brands() {
  return (
    <section className="sec brands" id="brands">
      <Reveal className="sec-head">
        <span className="sec-eyebrow">Brands &amp; Collaborations</span>
        <h2 className="sec-title">Trusted by the rooms I work in.</h2>
      </Reveal>

      <div className="brands-marquee">
        <div className="brands-track">
          {doubled.map((item, i) => {
            const href = item.links?.[0]?.href;
            const inner = (
              <>
                {item.logo ? <img src={item.logo} alt={item.name} /> : null}
                <span>{item.name}</span>
              </>
            );
            return href ? (
              <a
                key={i}
                className="brand-chip"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {inner}
              </a>
            ) : (
              <span key={i} className="brand-chip">
                {inner}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
