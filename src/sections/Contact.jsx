export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="card contact-card">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">
          Let’s build something people won’t scroll past.
        </h2>

        <p className="section-text contact-text">
          Available for campaigns, brand strategy, content systems, and
          creative collaborations.
        </p>

        <div className="contact-actions">
          <a className="btn btn-primary" href="mailto:baban07dey@gmail.com">
            baban07dey@gmail.com
          </a>

          <a className="btn btn-secondary" href="tel:+917001684412">
            70016 84412
          </a>

          <a
            className="btn btn-secondary"
            href="https://www.linkedin.com/in/abhishek-de-157819221"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}