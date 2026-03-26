import { useMemo, useState, useEffect, useRef } from "react";
import heroCutout from "../assets/hero-cutout.png";
import { topStripVideos, brandCloud, eventCloud } from "../data/heroMedia";

export default function Hero() {
  const allItems = useMemo(() => [...brandCloud, ...eventCloud], []);
  const [selectedItem, setSelectedItem] = useState(allItems[0]);
  const [brokenVideos, setBrokenVideos] = useState([]);
  const [openTray, setOpenTray] = useState(null);
  const [tickerPaused, setTickerPaused] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const nameRef = useRef(null);

  const visibleVideos = topStripVideos.filter((v) => !brokenVideos.includes(v.id));
  const repeatedVideos = visibleVideos.length > 0 ? [...visibleVideos, ...visibleVideos] : [];
  const handleVideoError = (id) => setBrokenVideos((p) => p.includes(id) ? p : [...p, id]);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openItem = (item) => {
    setSelectedItem(item);
    setOpenTray(null);
    setTimeout(() => {
      document.getElementById("m-sheet")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const toggleTray = (name) => {
    const next = openTray === name ? null : name;
    setOpenTray(next);
    if (next) setTimeout(() => {
      document.getElementById("hero-tray-area")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const allBrands = [...brandCloud, ...eventCloud];
  const tripled = [...allBrands, ...allBrands, ...allBrands];

  return (
    <div className="hero-wrap">

      {/* ── DESKTOP: editorial cinematic layout ── */}
      <div className="hero-top-row">

        {/* LEFT: editorial copy */}
        <div className="hero-copy hero-reveal hero-reveal-1">

          {/* Eyebrow line like Koto */}
          <div className="hero-eyebrow-row">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Brand Strategist · Content Creator · Host</span>
          </div>

          {/* MASSIVE editorial name — Koto/Nikola style */}
          <h1 className="hero-name hero-name-main hero-name-editorial" ref={nameRef}>
            <span className="hero-name-line hero-name-first">Abhishek</span>
            <span className="hero-name-line hero-name-last">De</span>
          </h1>

          {/* Role descriptor — clean and bold */}
          <p className="hero-role-line hero-role-editorial">
            Social-first ideas, campaign direction,<br />
            and content built to stop the scroll.
          </p>

          {/* CTA row */}
          <div className="hero-actions hero-actions-editorial">
            <a href="#selected-works" className="btn btn-primary hero-btn hero-btn-editorial">
              <span>View Work</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <polyline points="12 5 19 12 12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-ghost hero-btn">Let's Build</a>
          </div>

          {/* Stat pills — horizontal, clean */}
          <div className="hero-stat-pills hero-stats-editorial">
            <div className="hero-stat-pill">
              <span className="hsp-num">10+</span>
              <span className="hsp-label">Campaigns</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-pill">
              <span className="hsp-num">3.9M</span>
              <span className="hsp-label">Reel Views</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-pill">
              <span className="hsp-num">50+</span>
              <span className="hsp-label">Decks</span>
            </div>
          </div>

          {/* Scroll indicator like Nikola */}
          <div className="hero-scroll-hint">
            <div className="hero-scroll-line" />
            <span className="hero-scroll-text">Scroll</span>
          </div>
        </div>

        {/* RIGHT: photo + clouds */}
        <div className="hero-desktop-col hero-reveal hero-reveal-2">
          <div className="hero-cutout-stage"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}>

            {/* Rings */}
            <div className="hero-ring hero-ring-1" />
            <div className="hero-ring hero-ring-2" />
            <div className="hero-ring hero-ring-3" />
            <div className="hero-cutout-glow glow-1" />
            <div className="hero-cutout-glow glow-2" />
            <div className="hero-cutout-ring" />

            <img
              src={heroCutout}
              alt="Abhishek De"
              className="hero-cutout-image"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            />

            {/* Brand cloud */}
            <div className="cloud cloud-brands">
              <div className="cloud-label-wrap">
                <span className="cloud-label">Brands & Agencies</span>
                <span className="cloud-sub">Tap to explore</span>
              </div>
              <div className="cloud-grid cloud-grid-horizontal">
                {brandCloud.map((item, i) => (
                  <button key={item.id} type="button"
                    className={`logo-chip clean-chip ${selectedItem.id === item.id ? "logo-chip-active" : ""} float-${(i % 4) + 1}`}
                    onClick={() => openItem(item)}>
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
                <span className="cloud-sub">Tap to explore</span>
              </div>
              <div className="cloud-grid">
                {eventCloud.map((item, i) => (
                  <button key={item.id} type="button"
                    className={`logo-chip clean-chip ${selectedItem.id === item.id ? "logo-chip-active" : ""} float-${((i + 1) % 4) + 1}`}
                    onClick={() => openItem(item)}>
                    {item.logo
                      ? <img src={item.logo} alt={item.name} className="logo-chip-img" />
                      : <span className="logo-chip-text">{item.name}</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Side panel */}
          <div className="hero-side-panel">
            <div className="hero-action-panel">
              <p className="eyebrow">Selected</p>
              <h3 className="hero-action-title">{selectedItem.name}</h3>
              <p className="hero-action-kind">{selectedItem.kind}</p>
              {selectedItem.links?.length > 0
                ? <div className="hero-link-list">{selectedItem.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="hero-link-btn">{l.label}</a>
                  ))}</div>
                : <p className="hero-empty-note">Links coming soon.</p>}
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE layout ── */}
      <div className="hero-mobile-row">
        <div className="hero-mobile-editorial-header">
          <span className="hero-eyebrow-text">Brand Strategist · Content Creator · Host</span>
          <h1 className="hero-name hero-name-main hero-name-mobile-editorial" ref={nameRef}>
            <span className="hero-name-line hero-name-first">Abhishek</span>
            <span className="hero-name-line hero-name-last">De</span>
          </h1>
        </div>

        <div className="m-stage">
          <div className="m-glow m-glow-1" />
          <div className="m-glow m-glow-2" />
          <div className="m-ring" />
          <div className="m-pulse-ring m-pr-1" />
          <div className="m-pulse-ring m-pr-2" />
          <img src={heroCutout} alt="Abhishek De" className="m-cutout" />
          <button type="button" className="m-chip m-chip-brands" onClick={() => toggleTray("brands")}>
            <span className="m-chip-title">Brands & Agencies</span>
            <span className="m-chip-sub">Tap ↗</span>
          </button>
          <button type="button" className="m-chip m-chip-events" onClick={() => toggleTray("events")}>
            <span className="m-chip-title">Events</span>
            <span className="m-chip-sub">Tap ↗</span>
          </button>
        </div>

        {/* Mobile stats */}
        <div className="hero-stats-mobile-editorial">
          <div className="hero-stat-pill"><span className="hsp-num">10+</span><span className="hsp-label">Campaigns</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-pill"><span className="hsp-num">3.9M</span><span className="hsp-label">Views</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-pill"><span className="hsp-num">50+</span><span className="hsp-label">Decks</span></div>
        </div>

        {/* Mobile CTAs */}
        <div className="hero-actions-mobile">
          <a href="#selected-works" className="btn btn-primary">View Work</a>
          <a href="#contact" className="btn btn-ghost">Let's Build</a>
        </div>

        {/* Brand ticker */}
        <div
          className="brand-ticker-wrap"
          onMouseEnter={() => setTickerPaused(true)}
          onMouseLeave={() => setTickerPaused(false)}
        >
          <div className={`brand-ticker-track ${tickerPaused ? "brand-ticker-paused" : ""}`}>
            {tripled.map((item, i) => (
              <button
                key={i}
                type="button"
                className={`brand-ticker-item ${selectedItem.id === item.id ? "brand-ticker-active" : ""}`}
                onClick={() => openItem(item)}
              >
                {item.logo
                  ? <img src={item.logo} alt={item.name} className="brand-ticker-logo" />
                  : <span className="brand-ticker-text">{item.name}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Tray */}
        <div id="hero-tray-area">
          {openTray === "brands" && (
            <div className="m-tray">
              <p className="m-tray-label">Brands & Agencies — tap to see work</p>
              <div className="m-tray-grid">
                {brandCloud.map((item) => (
                  <button key={item.id} type="button"
                    className={`m-tray-item ${selectedItem.id === item.id ? "m-tray-item-active" : ""}`}
                    onClick={() => openItem(item)}>
                    {item.logo && <img src={item.logo} alt={item.name} className="m-tray-logo" />}
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          {openTray === "events" && (
            <div className="m-tray">
              <p className="m-tray-label">Events — tap to see work</p>
              <div className="m-tray-grid">
                {eventCloud.map((item) => (
                  <button key={item.id} type="button"
                    className={`m-tray-item ${selectedItem.id === item.id ? "m-tray-item-active" : ""}`}
                    onClick={() => openItem(item)}>
                    {item.logo && <img src={item.logo} alt={item.name} className="m-tray-logo" />}
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div id="m-sheet" className="hero-action-panel m-selected">
          <p className="eyebrow">Selected</p>
          <h3 className="hero-action-title">{selectedItem.name}</h3>
          <p className="hero-action-kind">{selectedItem.kind}</p>
          {selectedItem.links?.length > 0
            ? <div className="hero-link-list">{selectedItem.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="hero-link-btn">{l.label}</a>
              ))}</div>
            : <p className="hero-empty-note">Links coming soon.</p>}
        </div>
      </div>

      {/* VIDEO STRIP */}
      {visibleVideos.length > 0 && (
        <div className="hero-video-strip-wrap hero-reveal hero-reveal-4">
          <div className="video-strip-label">CONTENT · CAMPAIGNS · REELS · VIRAL ·</div>
          <div className="hero-video-strip">
            <div className="hero-video-track track-left">
              {repeatedVideos.map((video, index) => (
                <div className="hero-video-panel video-square" key={`${video.id}-${index}`}>
                  <video className="hero-strip-video" autoPlay muted loop playsInline preload="auto" onError={() => handleVideoError(video.id)}>
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="video-panel-shine" />
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
