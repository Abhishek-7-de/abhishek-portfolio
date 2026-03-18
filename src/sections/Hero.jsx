import { useMemo, useState } from "react";
import profile from "../assets/profile.png";
import {
  topStripVideos,
  bottomStripVideos,
  brandCloud,
  eventCloud,
} from "../data/heroMedia";

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

            <div className="floating-box overall-box">
              <span className="floating-box-title">Brands & Agencies</span>

              <div className="floating-logo-cloud">
                {brandCloud.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`logo-chip ${selectedItem.id === item.id ? "logo-chip-active" : ""}`}
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

            <div className="floating-box events-box">
              <span className="floating-box-title">Events</span>

              <div className="floating-logo-cloud">
                {eventCloud.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`logo-chip ${selectedItem.id === item.id ? "logo-chip-active" : ""}`}
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
        <div className="hero-video-strip top-strip">
          <div className="hero-video-track track-left">
            {[...topStripVideos, ...topStripVideos].map((video, index) => (
              <div className="hero-video-panel" key={`${video.id}-top-${index}`}>
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

        <div className="hero-video-strip bottom-strip">
          <div className="hero-video-track track-right">
            {[...bottomStripVideos, ...bottomStripVideos].map((video, index) => (
              <div
                className="hero-video-panel small-panel"
                key={`${video.id}-bottom-${index}`}
              >
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