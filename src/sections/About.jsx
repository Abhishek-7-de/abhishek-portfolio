export default function About() {
  const skills = [
    "Social Media Strategy",
    "Content Creation",
    "Creative Direction",
    "Campaign Planning",
    "Brand Storytelling",
    "Influencer Coordination",
  ];

  return (
    <section id="about" className="section about-grid">
      <div className="card">
        <p className="eyebrow">About</p>
        <h2 className="section-title">
          The intersection of strategy, storytelling, and culture.
        </h2>

        <p className="section-text">
          I’m a social media strategist and content creator working at the
          intersection of creativity and marketing performance. I build
          campaigns, launch narratives, and social content systems for brands
          that want attention and engagement.
        </p>

        <p className="section-text">
          My experience is rooted in hospitality, lifestyle, and creator-led
          brands where communication needs to feel visually sharp, culturally
          relevant, and built for real traction.
        </p>
      </div>

      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill} className="card skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}