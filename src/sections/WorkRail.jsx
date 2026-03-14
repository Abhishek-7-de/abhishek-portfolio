import { workItems } from "../data/work";

export default function WorkRail() {
  return (
    <section id="work" className="work-rail-v10 fade-up">
      <div className="work-rail-left">
        <p className="eyebrow">Selected Work</p>
        <h2 className="work-rail-title-v10">
          Work that’s
          <br />
          built to move.
        </h2>
        <p className="work-rail-text">
          Not just visuals. Not just posts. Campaigns, launches, content
          systems, and storytelling shaped to leave a mark.
        </p>
      </div>

      <div className="work-rail-right">
        {workItems.map((item) => (
          <article key={item.number} className="work-rail-card-v10">
            <span className="work-no">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}