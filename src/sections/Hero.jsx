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
        if (panel) panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }
  };

  const toggleTray = (trayName) => {
    setOpenTray((prev) => (prev === trayName ? null : trayName));
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section className="hero-v17">

      {/* ── COPY ── */}
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

      {/* ── DESKTOP visual (hidden on mobile via CSS class) ── */}
      <div className="hero-desktop-only hero-reveal hero-reveal-2">
        <div className="hero-visual-clean">
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
                {brandCloud.map((item, index) => (
                  <button
                    key={item.id} type="button"
                    className={`logo-chip clean-chip ${selectedItem.id === item.id ? "logo-chip-active" : ""} float-${(index % 4) + 1}`}
                    onClick={() => openItem(item)}
                  >
                    {item.logo
                      ? <img src={item.logo} alt={item.name} className="logo-chip-img" />
                      : <span className="logo-chip-text">{item.name}</span>}
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
                    key={item.id} type="button"
                    className={`logo-chip clean-chip ${selectedItem.id === item.id ? "logo-chip-active" : ""} float-${((index + 1) % 4) + 1}`}
                    onClick={() => openItem(item)}
                  >
                    {item.logo
                      ? <img src={item.logo} alt={item.name} className="logo-chip-img" />
                      : <span className="logo-chip-text">{item.name}</span>}
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
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hero-link-btn">
                    {link.label}
                  </a>
                ))}
              </div>
            ) : (
              <p className="hero-empty-note">Links for this will be added here later.</p>
            )}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          MOBILE VISUAL — 100% inline styles, zero CSS dependency
      ══════════════════════════════════════════════════ */}
      <div
        className="hero-reveal hero-reveal-3"
        style={{ display: "block", position: "relative", width: "100%", height: "320px", marginTop: "8px" }}
      >
        {/* glow 1 */}
        <div style={{ position: "absolute", borderRadius: "999px", filter: "blur(44px)", opacity: 0.8, zIndex: 0, width: "140px", height: "140px", background: "rgba(124,58,237,0.36)", left: "12%", top: "40px" }} />
        {/* glow 2 */}
        <div style={{ position: "absolute", borderRadius: "999px", filter: "blur(44px)", opacity: 0.8, zIndex: 0, width: "120px", height: "120px", background: "rgba(0,212,255,0.26)", right: "12%", top: "20px" }} />
        {/* ring */}
        <div style={{ position: "absolute", width: "230px", height: "230px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", background: "radial-gradient(circle at center,rgba(255,255,255,0.04),transparent 70%)", bottom: "10px", left: "50%", transform: "translateX(-50%)", zIndex: 0 }} />

        {/* ★ THE PHOTO ★ */}
        <img
          src={heroCutout}
          alt="Abhishek De"
          style={{
            display: "block",
            visibility: "visible",
            opacity: 1,
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "200px",
            height: "auto",
            objectFit: "contain",
            zIndex: 2,
            filter: "drop-shadow(0 14px 24px rgba(0,0,0,0.3))",
            pointerEvents: "none",
          }}
        />

        {/* Brands button */}
        <button
          type="button"
          onClick={() => toggleTray("brands")}
          style={{ position: "absolute", zIndex: 3, left: 0, top: "40px", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 12px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.14)", background: "rgba(10,14,24,0.72)", backdropFilter: "blur(16px)", textAlign: "left", minWidth: "126px", cursor: "pointer" }}
        >
          <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)" }}>Brands & Agencies</span>
          <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)" }}>Tap to open ↗</span>
        </button>

        {/* Events button */}
        <button
          type="button"
          onClick={() => toggleTray("events")}
          style={{ position: "absolute", zIndex: 3, right: 0, bottom: "40px", display: "flex", flexDirection: "column", gap: "4px", padding: "10px 12px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.14)", background: "rgba(10,14,24,0.72)", backdropFilter: "blur(16px)", textAlign: "left", minWidth: "100px", cursor: "pointer" }}
        >
          <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)" }}>Events</span>
          <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)" }}>Tap to open ↗</span>
        </button>

        {/* Brand picker */}
        {openTray === "brands" && (
          <div style={{ position: "absolute", zIndex: 4, left: 0, top: "110px", display: "flex", flexDirection: "column", gap: "8px", padding: "10px", width: "148px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.14)", background: "rgba(10,14,24,0.92)", backdropFilter: "blur(18px)" }}>
            {brandCloud.map((item) => (
              <button key={item.id} type="button" onClick={() => openItem(item)}
                style={{ width: "100%", textAlign: "left", padding: "10px 12px", borderRadius: "12px", border: selectedItem.id === item.id ? "1px solid rgba(255,255,255,0.22)" : "1px solid rgba(255,255,255,0.12)", background: selectedItem.id === item.id ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.95)", fontSize: "0.82rem", fontWeight: 700, cursor: "pointer" }}>
                {item.name}
              </button>
            ))}
          </div>
        )}

        {/* Events picker */}
        {openTray === "events" && (
          <div style={{ position: "absolute", zIndex: 4, right: 0, bottom: "110px", display: "flex", flexDirection: "column", gap: "8px", padding: "10px", width: "148px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.14)", background: "rgba(10,14,24,0.92)", backdropFilter: "blur(18px)" }}>
            {eventCloud.map((item) => (
              <button key={item.id} type="button" onClick={() => openItem(item)}
                style={{ width: "100%", textAlign: "left", padding: "10px 12px", borderRadius: "12px", border: selectedItem.id === item.id ? "1px solid rgba(255,255,255,0.22)" : "1px solid rgba(255,255,255,0.12)", background: selectedItem.id === item.id ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.95)", fontSize: "0.82rem", fontWeight: 700, cursor: "pointer" }}>
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── MOBILE selected panel ── */}
      <div id="hero-mobile-sheet" className="hero-reveal hero-reveal-4" style={{ display: "block", marginTop: "10px" }}>
        <div className="hero-action-panel">
          <p className="eyebrow">Selected</p>
          <h3 className="hero-action-title">{selectedItem.name}</h3>
          <p className="hero-action-kind">{selectedItem.kind}</p>
          {selectedItem.links.length > 0 ? (
            <div className="hero-link-list">
              {selectedItem.links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hero-link-btn">{link.label}</a>
              ))}
            </div>
          ) : (
            <p className="hero-empty-note">Links for this will be added here later.</p>
          )}
        </div>
      </div>

      {/* ── VIDEO STRIP ── */}
      {visibleVideos.length > 0 && (
        <div className="hero-video-strip-wrap hero-reveal hero-reveal-4">
          <div className="hero-video-strip single-strip">
            <div className="hero-video-track track-left">
              {repeatedVideos.map((video, index) => (
                <div className="hero-video-panel video-square" key={`${video.id}-${index}`}>
                  <video className="hero-strip-video" autoPlay muted loop playsInline preload="metadata" onError={() => handleVideoError(video.id)}>
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
