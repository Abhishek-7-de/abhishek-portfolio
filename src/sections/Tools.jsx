import { tools } from "../data/tools";

export default function Tools() {
  return (
    <section id="tools" className="section">
      <p className="eyebrow">Tools</p>
      <h2 className="section-title">The stack behind the storytelling.</h2>

      <div className="chips">
        {tools.map((tool) => (
          <span key={tool} className="chip">
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}