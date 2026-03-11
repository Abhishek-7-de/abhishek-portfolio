import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="work" className="section">
      <p className="eyebrow">Featured Campaigns</p>
      <h2 className="section-title">
        Work that earned attention, interaction, and recall.
      </h2>

      <div className="grid projects-grid">
        {projects.map((item) => (
          <article key={item.id} className="card project-card">
            <div className="project-top">
              <span className="project-id">{item.id}</span>
              <span className="badge">{item.category}</span>
            </div>

            <div>
              <p className="impact">{item.impact}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}