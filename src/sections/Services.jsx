export default function Services() {
  const services = [
    {
      title: "Campaign Strategy",
      text: "Big ideas shaped for social, culture, and brand recall.",
    },
    {
      title: "Content Systems",
      text: "Reels, launches, storytelling, and content that stays consistent.",
    },
    {
      title: "Brand Positioning",
      text: "Sharper identity, stronger voice, more memorable communication.",
    },
  ];

  return (
    <section id="services" className="section fade-up">
      <p className="eyebrow">What I Do</p>
      <h2 className="section-title compact-title">
        Less noise.
        More impact.
      </h2>

      <div className="services-grid">
        {services.map((item) => (
          <div key={item.title} className="card service-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}