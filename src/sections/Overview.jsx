export default function Overview() {
  const stats = [
    { number: "3+", label: "Years in marketing" },
    { number: "5+", label: "Launch campaigns" },
    { number: "3000+", label: "Campaign leads" },
  ];

  return (
    <section id="overview" className="section fade-up">
      <p className="eyebrow">Overview</p>
      <h2 className="section-title compact-title">
        Quick snapshot.
        Big energy.
      </h2>

      <div className="overview-grid">
        {stats.map((item) => (
          <div key={item.label} className="card overview-card">
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}