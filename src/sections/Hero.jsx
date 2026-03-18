import { useMemo, useState } from "react";
import profile from "../assets/profile.png";
import { topStripVideos, brandCloud, eventCloud } from "../data/heroMedia";

export default function Hero() {
  const allItems = useMemo(() => [...brandCloud, ...eventCloud], []);
  const [selectedItem, setSelectedItem] = useState(allItems[0]);

  return (
    <section className="hero-v12">
      <div className="hero-copy fade-up">
        <p className="eyebrow hero-kicker">Social-first creative operator</p>

        <h2 className="hero-name">Abhishek De</h2>

        <p className="hero-role-line">
          Content Creation • Hosting • Brand Strategy • Campaign Direction
        </p>

        <p className="hero-sub-vNext">
          Building campaigns, content worlds, and brand moments that feel sharp,
          current, and made to move.
        </p>

        <div className="hero-actions">
          <a href="#selected-works" className="btn btn-primary">
            Enter Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Let’s Build
          </a>
        </div>
      </div>

      <div className="hero-stage fade-up delay-2">
        <div className="hero-visual">
          <div className="hero-image-shell">
            <img src={profile} alt="Abhishek De" className="hero-image-vNext" />

            <div className="floating-box overall-box cloud-float">
              <div className="cloud-head">
                <span className="floating-box-title">Brands & Agencies</span>
                <span className="cloud-helper">Tap any logo to check it out</span>
              </div>

              <div className="floating-logo-cloud">
                {brandCloud.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`logo-chip ${
                      selectedItem.id === item.id ? "logo-chip-active" : ""
                    } float-${(index % 4) + 1}`}
                    onClick={() => setSelectedItem(item)}
                  >
                    {item.logo ? (
                      <img src={item.logo} alt={item.name} className="logo-chip-img" />
                    ) : (
                      <span className="logo-chip-text">{item.name}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="floating-box events-box cloud-float slow-float">
              <div className="cloud-head">
                <span className="floating-box-title">Events</span>
                <span className="cloud-helper">Tap any logo to check it out</span>
              </div>

              <div className="floating-logo-cloud">
                {eventCloud.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`logo-chip ${
                      selectedItem.id === item.id ? "logo-chip-active" : ""
                    } float-${((index + 1) % 4) + 1}`}
                    onClick={() => setSelectedItem(item)}
                  >
                    {item.logo ? (
                      <img src={item.logo} alt={item.name} className="logo-chip-img" />
                    ) : (
                      <span className="logo-chip-text">{item.name}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero-action-panel">
          <p className="eyebrow">Click a brand or event</p>
          <h3 className="hero-action-title">{selectedItem.name}</h3>
          <p className="hero-action-kind">{selectedItem.kind}</p>

          {selectedItem.links.length > 0 ? (
            <div className="hero-link-list">
              {selectedItem.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-link-btn"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            <p className="hero-empty-note">
              Links for this will be added here later.
            </p>
          )}
        </div>
      </div>

      <div className="hero-video-strip-wrap fade-up">
        <div className="hero-video-strip single-strip">
          <div className="hero-video-track track-left">
            {[...topStripVideos, ...topStripVideos].map((video, index) => (
              <div className="hero-video-panel video-square" key={`${video.id}-${index}`}>
                <video
                  className="hero-strip-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}