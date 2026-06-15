import { tools } from "../data/tools";
import Reveal from "../motion/Reveal";

export default function Tools() {
  return (
    <section id="tools" className="sec tools">
      <Reveal className="sec-head">
        <span className="sec-eyebrow">Tools</span>
        <h2 className="sec-title">The stack behind the storytelling.</h2>
      </Reveal>

      <div className="tools-grid">
        {tools.map((tool, i) => (
          <Reveal as="span" key={tool} delay={i * 0.04} y={16} className="tool-chip">
            {tool}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
