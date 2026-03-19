import { useMemo, useState } from "react";
import profile from "../assets/profile.png";
import { topStripVideos, brandCloud, eventCloud } from "../data/heroMedia";

export default function Hero() {
  const allItems = useMemo(() => [...brandCloud, ...eventCloud], []);
  const [selectedItem, setSelectedItem] = useState(allItems[0]);
  const [brokenVideos, setBrokenVideos] = useState([]);

  const visibleVideos = topStripVideos.filter(
    (video) => !brokenVideos.includes(video.id)
  );

  const repeatedVideos =
    visibleVideos.length > 0 ? [...visibleVideos, ...visibleVideos] : [];

  const handleVideoError = (id) => {
    setBrokenVideos((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const openItem = (item) => {
    setSelectedItem(item);

    if (window.innerWidth < 768) {
      requestAnimationFrame(() => {
        const panel = document.getElementById("hero-mobile-sheet");
        if (panel) {
          panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      });
    }
  };

  return (
    <section className="hero-v13">
      <div className="hero-copy fade-up">
        <p className="eyebrow hero-kicker">Social-first creative operator</p>

        <div className="hero-title-row">
          <h2 className="hero-name">Abhishek De</h2>
        </div>

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

      <div className="hero-main fade-up delay-2">
        <div className="hero-visual-clean">
          <div className="hero-image-shell clean-shell">
            <img src={profile} alt="Abhishek De" className="hero-image-vNext" />

            <div className="cloud cloud-brands">
              <div className="cloud-label-wrap">
                <span className="cloud-label">Brands & Agencies</span>
                <span className="cloud-sub">Tap to explore</span>
              </div>

              <div className="cloud-grid">
                {brandCloud.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`logo-chip clean-chip ${
                      selectedItem.id === item.id ? "logo-chip-active" : ""
                    } float-${(index % 4) + 1}`}
                    onClick={() => openItem(item)}
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

            <div className="cloud cloud-events">
              <div className="cloud-label-wrap">
                <span className="cloud-label">Events</span>
                <span className="cloud-sub">Tap to explore</span>
              </div>

              <div className="cloud-grid">
                {eventCloud.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`logo-chip clean-chip ${
                      selectedItem.id === item.id ? "logo-chip-active" : ""
                    } float-${((index + 1) % 4) + 1}`}
                    onClick={() => openItem(item)}
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

        <div className="hero-side-panel">
          <div className="hero-action-panel desktop-panel">
            <p className="eyebrow">Selected</p>
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
      </div>

      <div id="hero-mobile-sheet" className="hero-mobile-sheet">
        <div className="hero-action-panel mobile-panel">
          <p className="eyebrow">Selected</p>
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

      {visibleVideos.length > 0 && (
        <div className="hero-video-strip-wrap fade-up">
          <div className="hero-video-strip single-strip">
            <div className="hero-video-track track-left">
              {repeatedVideos.map((video, index) => (
                <div className="hero-video-panel video-square" key={`${video.id}-${index}`}>
                  <video
                    className="hero-strip-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onError={() => handleVideoError(video.id)}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}