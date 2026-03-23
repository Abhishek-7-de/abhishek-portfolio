import { useMemo, useState } from "react";
import heroCutout from "../assets/hero-cutout.png";
import { topStripVideos, brandCloud, eventCloud } from "../data/heroMedia";

export default function Hero() {
  const allItems = useMemo(() => [...brandCloud, ...eventCloud], []);
  const [selectedItem, setSelectedItem] = useState(allItems[0]);
  const [brokenVideos, setBrokenVideos] = useState([]);
  const [openTray, setOpenTray] = useState(null);

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
    setOpenTray(null);
    if (window.innerWidth < 768) {
      requestAnimationFrame(() => {
        const panel = document.getElementById("hero-mobile-sheet");
        if (panel) {
          panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      });
    }
  };

  const toggleTray = (trayName) => {
    setOpenTray((prev) => (prev === trayName ? null : trayName));
  };

  return (
    <section className="hero-v17">

      {/* ── COPY (both mobile + desktop) ── */}
      <div className="hero-copy hero-reveal hero-reveal-1">
        <p className="eyebrow hero-kicker">
          Brand strategist • content creator • host
        </p>
        <h1 className="hero-name hero-name-main">Abhishek De</h1>
        <p className="hero-role-line">
          Social-first ideas, campaign direction, and content built to stop the
          scroll and stay in memory.
        </p>
        <div className="hero-actions">
          <a href="#selected-works" className="btn btn-primary hero-btn">
            Enter Work
          </a>
          <a href="#contact" className="btn btn-secondary hero-btn">
            Let's Build
          </a>
        </div>
      </div>

      {/* ── DESKTOP visual (cutout + clouds + side panel) ── */}
      <div className="hero-desktop-only hero-reveal hero-reveal-2">
        <div className="hero-visual-clean">
          <div className="hero-cutout-stage">
            <div className="hero-cutout-glow glow-1" />
            <div className="hero-cutout-glow glow-2" />
            <div className="hero-cutout-ring" />

            <img
              src={heroCutout}
              alt="Abhishek De"
              className="hero-cutout-image"
            />

            <div className="cloud cloud-brands">
              <div className="cloud-label-wrap">
                <span className="cloud-label">Brands & Agencies</span>
                <span className="cloud-sub">Tap a logo</span>
              </div>
              <div className="cloud-grid cloud-grid-horizontal">
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
                <span className="cloud-sub">Tap a logo</span>
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

      {/* ── MOBILE visual (cutout + mini-cloud buttons) ── */}
      <div className="hero-mobile-only hero-mobile-visual hero-reveal hero-reveal-3">
        <div className="hero-mobile-cutout-wrap">
          {/* glows */}
          <div className="hero-mobile-glow hero-mobile-glow-1" />
          <div className="hero-mobile-glow hero-mobile-glow-2" />
          {/* ring */}
          <div className="hero-mobile-ring" />

          {/* cutout photo */}
          <img
            src={heroCutout}
            alt="Abhishek De"
            className="hero-mobile-cutout"
          />

          {/* brand chip */}
          <button
            type="button"
            className="hero-mini-cloud mini-cloud-brands"
            onClick={() => toggleTray("brands")}
          >
            <span className="mini-cloud-title">Brands & Agencies</span>
            <span className="mini-cloud-sub">Tap to open ↗</span>
          </button>

          {/* events chip */}
          <button
            type="button"
            className="hero-mini-cloud mini-cloud-events"
            onClick={() => toggleTray("events")}
          >
            <span className="mini-cloud-title">Events</span>
            <span className="mini-cloud-sub">Tap to open ↗</span>
          </button>

          {/* brand picker tray */}
          {openTray === "brands" && (
            <div className="hero-mini-picker picker-brands">
              {brandCloud.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`hero-picker-item ${
                    selectedItem.id === item.id ? "hero-picker-item-active" : ""
                  }`}
                  onClick={() => openItem(item)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}

          {/* events picker tray */}
          {openTray === "events" && (
            <div className="hero-mini-picker picker-events">
              {eventCloud.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`hero-picker-item ${
                    selectedItem.id === item.id ? "hero-picker-item-active" : ""
                  }`}
                  onClick={() => openItem(item)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── MOBILE selected panel ── */}
      <div
        id="hero-mobile-sheet"
        className="hero-mobile-only hero-mobile-sheet hero-reveal hero-reveal-4"
      >
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

      {/* ── VIDEO STRIP ── */}
      {visibleVideos.length > 0 && (
        <div className="hero-video-strip-wrap hero-reveal hero-reveal-4">
          <div className="hero-video-strip single-strip">
            <div className="hero-video-track track-left">
              {repeatedVideos.map((video, index) => (
                <div
                  className="hero-video-panel video-square"
                  key={`${video.id}-${index}`}
                >
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

            <div className="reactions-layer" aria-hidden="true">
              <span className="reaction-chip rc-1">♥ 2.4K</span>
              <span className="reaction-chip rc-2">↗ Share</span>
              <span className="reaction-chip rc-3">💬 148</span>
              <span className="reaction-chip rc-4">🔥 Trending</span>
              <span className="reaction-chip rc-5">♥ 8.7K</span>
              <span className="reaction-chip rc-6">💬 92</span>
              <span className="reaction-chip rc-7">↗ Viral</span>
              <span className="reaction-chip rc-8">♥ 1.3K</span>
              <span className="reaction-chip rc-9">💬 301</span>
              <span className="reaction-chip rc-10">★ Saved</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
