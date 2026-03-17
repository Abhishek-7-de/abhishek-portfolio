import { selectedWorks } from "../data/selectedWorks";

export default function SelectedWorks() {
  return (
    <section id="selected-works" className="section fade-up">
      <p className="eyebrow">Selected Works</p>
      <h2 className="section-title compact-title">
        Click into the work.
      </h2>

      <div className="selected-grid">
        {selectedWorks.map((item) => (
          <a key={item.title} href={item.href} className="selected-card">
            <div className="selected-number-wrap">
              <span className="selected-number">{item.number}</span>
            </div>

            <div className="selected-content">
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}