export default function Contact() {
  const actions = [
    {
      label: "Email Me",
      href: "mailto:baban07dey@gmail.com",
      primary: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M2 8 L12 14 L22 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      label: "Call Me",
      href: "tel:+917001684412",
      primary: false,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14.2 14.4C14.5 14.1 14.9 14 15.3 14.2C16.6 14.6 18 14.9 19.5 14.9C20.3 14.9 21 15.5 21 16.4V19.5C21 20.3 20.3 21 19.5 21C10.4 21 3 13.6 3 4.5C3 3.7 3.7 3 4.5 3H7.6C8.4 3 9 3.7 9 4.5C9 6 9.3 7.4 9.7 8.7C9.9 9.1 9.8 9.5 9.5 9.8L7.6 11.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/abhishek7.exe?igsh=NGZqYm5wZmozMGVk&utm_source=qr",
      primary: false,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.8"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/>
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abhishek-de-157819221",
      primary: false,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8"/>
          <line x1="7" y1="10" x2="7" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="7" cy="7.5" r="1.2" fill="currentColor"/>
          <path d="M11 10 V17 M11 13 C11 11 17 10.5 17 13 V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="section fade-up">
      <div className="contact-v10-card">
        <p className="eyebrow contact-kicker">Contact</p>
        <h2 className="contact-v10-title">
          Let's build something<br />people remember.
        </h2>
        <p className="contact-v10-text">
          Open to brand strategy, content creation, campaign work, hosting, decks, briefs, and creative collaborations.
        </p>
        <div className="contact-actions centered-actions">
          {actions.map((a) => (
            <a
              key={a.label}
              className={`btn contact-icon-btn ${a.primary ? "btn-primary" : "btn-secondary"}`}
              href={a.href}
              target={a.href.startsWith("http") ? "_blank" : undefined}
              rel={a.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {a.icon}
              <span>{a.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
