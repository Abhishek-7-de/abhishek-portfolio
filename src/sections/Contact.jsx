export default function Contact() {
  return (
    <section id="contact" className="section fade-up">
      <div className="card contact-card">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title compact-title">
          Let’s build something people remember.
        </h2>

        <p className="section-text short-text">
          Open to campaigns, creative strategy, content systems, and brand collaborations.
        </p>

        <div className="contact-actions">
          <a className="btn btn-primary" href="mailto:baban07dey@gmail.com">
            Email Me
          </a>
          <a className="btn btn-secondary" href="tel:+917001684412">
            Call Me
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