// src/pages/CVPage.jsx — styled CV page at /cv

export default function CVPage() {
  return (
    <div className="cv-page">
      <div className="cv-top-bar">
        <a href="/" className="cv-back-btn">← Portfolio</a>
        <a href="/cv.pdf" download className="cv-download-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Download PDF
        </a>
      </div>

      <div className="cv-container">
        {/* Header */}
        <div className="cv-header">
          <div className="cv-header-left">
            <h1 className="cv-name">Abhishek De</h1>
            <p className="cv-title-line">Brand Strategist · Content Creator · Host</p>
          </div>
          <div className="cv-header-right">
            <a href="mailto:abhishek7de@gmail.com" className="cv-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M2 8L12 14L22 8" stroke="currentColor" strokeWidth="1.5"/></svg>
              abhishek7de@gmail.com
            </a>
            <a href="tel:+917001684412" className="cv-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14.2 14.4C14.5 14.1 14.9 14 15.3 14.2C16.6 14.6 18 14.9 19.5 14.9C20.3 14.9 21 15.5 21 16.4V19.5C21 20.3 20.3 21 19.5 21C10.4 21 3 13.6 3 4.5C3 3.7 3.7 3 4.5 3H7.6C8.4 3 9 3.7 9 4.5C9 6 9.3 7.4 9.7 8.7C9.9 9.1 9.8 9.5 9.5 9.8L7.6 11.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              +91 7001684412
            </a>
            <a href="https://www.instagram.com/abhishek7.exe" target="_blank" rel="noreferrer" className="cv-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
              @abhishek7.exe
            </a>
            <a href="https://www.linkedin.com/in/abhishek-de-157819221" target="_blank" rel="noreferrer" className="cv-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5"/><line x1="7" y1="10" x2="7" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="7" cy="7.5" r="1" fill="currentColor"/><path d="M11 10V17M11 13C11 11 17 10.5 17 13V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="cv-section">
          <div className="cv-section-label">About</div>
          <p className="cv-summary">Brand strategist and content creator with hands-on experience in campaign direction, social media management, and live hosting. I build ideas that stop the scroll and stay in memory — from Coca-Cola partnership decks to UGC campaigns hitting 3.9M views.</p>
        </div>

        {/* Experience */}
        <div className="cv-section">
          <div className="cv-section-label">Experience</div>

          <div className="cv-exp-item">
            <div className="cv-exp-header">
              <div>
                <h3 className="cv-exp-title">Brand Strategist & Content Creator</h3>
                <p className="cv-exp-company">Chai Break · CB Marketing</p>
              </div>
              <span className="cv-exp-date">2024 – Present</span>
            </div>
            <ul className="cv-exp-points">
              <li>Conceptualised and executed the Metaverse Keychain Campaign — 75+ redemptions across 24 outlets</li>
              <li>Led K-Dish Carnival Korean Food Festival (Aug 2025) — secured Coca-Cola as strategic partner</li>
              <li>Designed Durga Puja "Glam The Gram" OOTD challenge — 3.9M reel views, 100+ redemptions, Spykar partnership</li>
              <li>Managed full Instagram presence, content calendar, and rollout strategy for 35+ outlets across 8 cities</li>
              <li>Created 50+ campaign decks, brand research docs, and creative briefs</li>
            </ul>
          </div>

          <div className="cv-exp-item">
            <div className="cv-exp-header">
              <div>
                <h3 className="cv-exp-title">Host & Content Creator</h3>
                <p className="cv-exp-company">Freelance · Multiple Events</p>
              </div>
              <span className="cv-exp-date">2023 – Present</span>
            </div>
            <ul className="cv-exp-points">
              <li>Hosted Buzz Confluence '24 panel — industry discussion event for content creators</li>
              <li>CCU Festival — solo stage host for college fest (2024)</li>
              <li>Bengal Premier League — field interviews and player interactions (2025)</li>
              <li>ComicCon India — voxpop and street interview content (2025)</li>
              <li>Stage interaction with stand-up comedian Akash Gupta</li>
              <li>BTS content creation with actress Tridha Choudhury</li>
              <li>30+ voxpop and UGC content pieces across brands and events</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="cv-section cv-two-col">
          <div>
            <div className="cv-section-label">Core Skills</div>
            <div className="cv-skills-list">
              {["Brand Strategy", "Campaign Direction", "Content Creation", "Social Media Management", "Hosting & Moderation", "Voxpop & Interviews", "Shoot Direction", "Content Calendars", "Campaign Decks & Research", "Rollout Planning"].map(s => (
                <span key={s} className="cv-skill-chip">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="cv-section-label">Tools</div>
            <div className="cv-skills-list">
              {["ChatGPT", "Claude", "Gemini", "Perplexity", "Canva", "Instagram", "Meta Ads Manager"].map(s => (
                <span key={s} className="cv-skill-chip">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Numbers */}
        <div className="cv-section">
          <div className="cv-section-label">By the Numbers</div>
          <div className="cv-stats-row">
            {[
              { n: "10+", l: "Campaign Launches" },
              { n: "30+", l: "Voxpop & UGC Pieces" },
              { n: "50+", l: "Campaign Decks & Docs" },
              { n: "3.9M", l: "Reel Views (single campaign)" },
            ].map(s => (
              <div key={s.l} className="cv-stat-box">
                <span className="cv-stat-n">{s.n}</span>
                <span className="cv-stat-l">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="cv-footer">
          <span>Portfolio: abhishek-portfolio-neon-zeta.vercel.app</span>
          <span>·</span>
          <span>Available for brand strategy, campaigns, hosting & content work</span>
        </div>
      </div>
    </div>
  );
}
