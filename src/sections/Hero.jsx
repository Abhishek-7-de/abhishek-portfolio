import { useMemo, useState } from "react";
import heroCutout from "../assets/hero-cutout.png";
import { topStripVideos, brandCloud, eventCloud } from "../data/heroMedia";

export default function Hero() {
  const allItems = useMemo(() => [...brandCloud, ...eventCloud], []);
  const [selectedItem, setSelectedItem] = useState(allItems[0]);
  const [brokenVideos, setBrokenVideos] = useState([]);
  const [openTray, setOpenTray] = useState(null);

  const visibleVideos = topStripVideos.filter((v) => !brokenVideos.includes(v.id));
  const repeatedVideos = visibleVideos.length > 0 ? [...visibleVideos, ...visibleVideos] : [];
  const handleVideoError = (id) => setBrokenVideos((p) => p.includes(id) ? p : [...p, id]);

  const openItem = (item) => {
    setSelectedItem(item);
    setOpenTray(null);
    requestAnimationFrame(() => {
      document.getElementById("m-sheet")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  };

  const toggleTray = (name) => setOpenTray((p) => (p === name ? null : name));

  return (
    <div className="hero-wrap">

      {/* ═══════════════════════════════════════
          ROW 1 — copy + desktop visual side by side
      ═══════════════════════════════════════ */}
      <div className="hero-top-row">

        {/* Copy — always shown */}
        <div className="hero-copy hero-reveal hero-reveal-1">
          <p className="eyebrow hero-kicker">Brand strategist • content creator • host</p>
          <h1 className="hero-name">Abhishek De</h1>
          <p className="hero-role-line">
            Social-first ideas, campaign direction, and content built to stop the scroll and stay in memory.
          </p>
          <div className="hero-actions">
            <a href="#selected-works" className="btn btn-primary hero-btn">Enter Work</a>
            <a href="#contact" className="btn btn-secondary hero-btn">Let's Build</a>
          </div>
        </div>

        {/* Desktop visual — hidden on mobile via CSS */}
        <div className="hero-desktop-col hero-reveal hero-reveal-2">
          <div className="hero-cutout-stage">
            <div className="hero-cutout-glow glow-1" />
            <div className="hero-cutout-glow glow-2" />
            <div className="hero-cutout-ring" />
            <img src={heroCutout} alt="Abhishek De" className="hero-cutout-image" />
            <div className="cloud cloud-brands">
              <div className="cloud-label-wrap">
                <span className="cloud-label">Brands & Agencies</span>
                <span className="cloud-sub">Tap a logo</span>
              </div>
              <div className="cloud-grid cloud-grid-horizontal">
                {brandCloud.map((item, i) => (
                  <button key={item.id} type="button"
                    className={`logo-chip clean-chip ${selectedItem.id === item.id ? "logo-chip-active" : ""} float-${(i%4)+1}`}
                    onClick={() => openItem(item)}>
                    {item.logo ? <img src={item.logo} alt={item.name} className="logo-chip-img" /> : <span className="logo-chip-text">{item.name}</span>}
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
                {eventCloud.map((item, i) => (
                  <button key={item.id} type="button"
                    className={`logo-chip clean-chip ${selectedItem.id === item.id ? "logo-chip-active" : ""} float-${((i+1)%4)+1}`}
                    onClick={() => openItem(item)}>
                    {item.logo ? <img src={item.logo} alt={item.name} className="logo-chip-img" /> : <span className="logo-chip-text">{item.name}</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-side-panel">
            <div className="hero-action-panel">
              <p className="eyebrow">Selected</p>
              <h3 className="hero-action-title">{selectedItem.name}</h3>
              <p className="hero-action-kind">{selectedItem.kind}</p>
              {selectedItem.links.length > 0
                ? <div className="hero-link-list">{selectedItem.links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="hero-link-btn">{l.label}</a>)}</div>
                : <p className="hero-empty-note">Links coming soon.</p>}
            </div>
          </div>
        </div>

      </div>
      {/* end hero-top-row */}

      {/* ═══════════════════════════════════════
          ROW 2 — mobile visual (hidden on desktop)
      ═══════════════════════════════════════ */}
      <div className="hero-mobile-row">

        {/* Photo stage */}
        <div className="m-stage">
          <div className="m-glow m-glow-1" />
          <div className="m-glow m-glow-2" />
          <div className="m-ring" />
          <img src={heroCutout} alt="Abhishek De" className="m-cutout" />
          <button type="button" className="m-chip m-chip-brands" onClick={() => toggleTray("brands")}>
            <span className="m-chip-title">Brands & Agencies</span>
            <span className="m-chip-sub">Tap to open ↗</span>
          </button>
          <button type="button" className="m-chip m-chip-events" onClick={() => toggleTray("events")}>
            <span className="m-chip-title">Events</span>
            <span className="m-chip-sub">Tap to open ↗</span>
          </button>
        </div>

        {/* Tray — below photo in normal flow */}
        {openTray === "brands" && (
          <div className="m-tray">
            <p className="m-tray-label">Brands & Agencies</p>
            {brandCloud.map((item) => (
              <button key={item.id} type="button" className={`m-tray-item ${selectedItem.id === item.id ? "m-tray-item-active" : ""}`} onClick={() => openItem(item)}>{item.name}</button>
            ))}
          </div>
        )}
        {openTray === "events" && (
          <div className="m-tray">
            <p className="m-tray-label">Events</p>
            {eventCloud.map((item) => (
              <button key={item.id} type="button" className={`m-tray-item ${selectedItem.id === item.id ? "m-tray-item-active" : ""}`} onClick={() => openItem(item)}>{item.name}</button>
            ))}
          </div>
        )}

        {/* Selected panel */}
        <div id="m-sheet" className="hero-action-panel m-selected">
          <p className="eyebrow">Selected</p>
          <h3 className="hero-action-title">{selectedItem.name}</h3>
          <p className="hero-action-kind">{selectedItem.kind}</p>
          {selectedItem.links.length > 0
            ? <div className="hero-link-list">{selectedItem.links.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="hero-link-btn">{l.label}</a>)}</div>
            : <p className="hero-empty-note">Links coming soon.</p>}
        </div>

      </div>
      {/* end hero-mobile-row */}

      {/* ═══════════════════════════════════════
          ROW 3 — video strip (always shown)
      ═══════════════════════════════════════ */}
      {visibleVideos.length > 0 && (
        <div className="hero-video-strip-wrap hero-reveal hero-reveal-4">
          <div className="hero-video-strip">
            <div className="hero-video-track track-left">
              {repeatedVideos.map((video, index) => (
                <div className="hero-video-panel video-square" key={`${video.id}-${index}`}>
                  <video className="hero-strip-video" autoPlay muted loop playsInline preload="auto"
                    onError={() => handleVideoError(video.id)}>
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

    </div>
  );
}
