export default function Manifesto() {
  return (
    <section id="manifesto" className="manifesto-section fade-up">
      <div className="manifesto-left">
        <p className="eyebrow">Why me</p>
        <h2 className="manifesto-title">
          I don’t make content for the sake of content.
        </h2>
      </div>

      <div className="manifesto-right">
        <div className="manifesto-block">
          <p>
            I build ideas with <span className="text-highlight">shape</span>,
            campaigns with <span className="text-highlight">timing</span>, and
            communication with <span className="text-highlight">recall</span>.
          </p>
        </div>

        <div className="manifesto-block small">
          <p>
            Less clutter. More identity.
          </p>
        </div>

        <div className="manifesto-block small">
          <p>
            Less noise. More momentum.
          </p>
        </div>
      </div>
    </section>
  );
}