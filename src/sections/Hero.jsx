import { useMemo, useState, useEffect } from "react";
import heroCutout from "../assets/hero-cutout.png";
import { topStripVideos, brandCloud, eventCloud } from "../data/heroMedia";

export default function Hero() {
  const allItems = useMemo(() => [...brandCloud, ...eventCloud], []);
  const [selectedItem, setSelectedItem] = useState(allItems[0]);
  const [brokenVideos, setBrokenVideos] = useState([]);
  const [openTray, setOpenTray] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const visibleVideos = topStripVideos.filter((v) => !brokenVideos.includes(v.id));
  const repeatedVideos = visibleVideos.length > 0 ? [...visibleVideos, ...visibleVideos] : [];

  const handleVideoError = (id) => {
    setBrokenVideos((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const openItem = (item) => {
    setSelectedItem(item);
    setOpenTray(null);
    if (isMobile) {
      requestAnimationFrame(() => {
        const panel = document.getElementById("hero-mobile-sheet");
        if (panel) panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }
  };

  const toggleTray = (trayName) => {
    setOpenTray((prev) => (prev === trayName ? null : trayName));
  };

  /* ── shared button style ── */
  const chipBtn = (extra = {}) => ({
    display: "flex", flexDirection: "column", gap: "4px",
    padding: "10px 12px", borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(10,14,24,0.82)", backdropFilter: "blur(16px)",
    textAlign: "left", cursor: "pointer", ...extra,
  });

  const chipTitle = { fontSize: "10px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)" };
  const chipSub   = { fontSize: "10px", color: "rgba(255,255,255,0.6)" };

  const pickerItem = (active) => ({
    width: "100%", textAlign: "left", padding: "10px 12px", borderRadius: "12px",
    border: active ? "1px solid rgba(255,255,255,0.22)" : "1px solid rgba(255,255,255,0.12)",
    background: active ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.95)", fontSize: "0.82rem", fontWeight: 700, cursor: "pointer",
  });

  return (
    <section className="hero-v17">

      {/* ── COPY ── */}
      <div className="hero-copy hero-reveal hero-reveal-1">
        <p className="eyebrow hero-kicker">Brand strategist • content creator • host</p>
        <h1 className="hero-name hero-name-main">Abhishek De</h1>
        <p className="hero-role-line">
          Social-first ideas, campaign direction, and content built to stop the scroll and stay in memory.
        </p>
        <div className="hero-actions">
          <a href="#selected-works" className="btn btn-primary hero-btn">Enter Work</a>
          <a href="#contact" className="btn btn-secondary hero-btn">Let's Build</a>
        </div>
      </div>

      {/* ── DESKTOP visual ── */}
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
                {brandCloud.map((item, i) => (
                  <button key={item.id} type="button"
                    className={`logo-chip clean-chip ${selectedItem.id === item.id ? "logo-chip-active" : ""} float-${(i % 4) + 1}`}
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
                    className={`logo-chip clean-chip ${selectedItem.id === item.id ? "logo-chip-active" : ""} float-${((i + 1) % 4) + 1}`}
                    onClick={() => openItem(item)}>
                    {item.logo ? <img src={item.logo} alt={item.name} className="logo-chip-img" /> : <span className="logo-chip-text">{item.name}</span>}
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
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hero-link-btn">{link.label}</a>
                ))}
              </div>
            ) : <p className="hero-empty-note">Links for this will be added here later.</p>}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MOBILE — conditional render, no CSS conflict
      ══════════════════════════════════════ */}
      {isMobile && (
        <>
          {/* Photo stage — fixed height, no overlap */}
          <div style={{ position: "relative", width: "100%", height: "300px", marginTop: "8px" }}>
            {/* glows */}
            <div style={{ position:"absolute", borderRadius:"999px", filter:"blur(44px)", opacity:0.8, zIndex:0, width:"140px", height:"140px", background:"rgba(124,58,237,0.36)", left:"12%", top:"20px" }} />
            <div style={{ position:"absolute", borderRadius:"999px", filter:"blur(44px)", opacity:0.8, zIndex:0, width:"120px", height:"120px", background:"rgba(0,212,255,0.26)", right:"12%", top:"10px" }} />
            {/* ring */}
            <div style={{ position:"absolute", width:"220px", height:"220px", borderRadius:"999px", border:"1px solid rgba(255,255,255,0.12)", background:"radial-gradient(circle at center,rgba(255,255,255,0.04),transparent 70%)", bottom:"0px", left:"50%", transform:"translateX(-50%)", zIndex:0 }} />
            {/* photo — centered, no pointer events so chips stay clickable */}
            <img src={heroCutout} alt="Abhishek De" style={{
              display:"block", position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)",
              width:"190px", height:"auto", objectFit:"contain", zIndex:2,
              filter:"drop-shadow(0 14px 24px rgba(0,0,0,0.3))", pointerEvents:"none",
            }} />
            {/* Brands chip — top-left, above photo z */}
            <button type="button" onClick={() => toggleTray("brands")} style={chipBtn({ position:"absolute", zIndex:3, left:0, top:"20px" })}>
              <span style={chipTitle}>Brands & Agencies</span>
              <span style={chipSub}>Tap to open ↗</span>
            </button>
            {/* Events chip — bottom-right */}
            <button type="button" onClick={() => toggleTray("events")} style={chipBtn({ position:"absolute", zIndex:3, right:0, bottom:"20px" })}>
              <span style={chipTitle}>Events</span>
              <span style={chipSub}>Tap to open ↗</span>
            </button>
          </div>

          {/* Picker trays — BELOW the stage, not overlapping */}
          {openTray === "brands" && (
            <div style={{ width:"100%", marginTop:"8px", padding:"10px", borderRadius:"16px", border:"1px solid rgba(255,255,255,0.14)", background:"rgba(10,14,24,0.92)", backdropFilter:"blur(18px)", display:"flex", flexDirection:"column", gap:"8px" }}>
              <p style={{ margin:"0 0 4px", fontSize:"10px", fontWeight:800, letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(255,255,255,0.5)" }}>Brands & Agencies</p>
              {brandCloud.map((item) => (
                <button key={item.id} type="button" onClick={() => openItem(item)} style={pickerItem(selectedItem.id === item.id)}>
                  {item.name}
                </button>
              ))}
            </div>
          )}

          {openTray === "events" && (
            <div style={{ width:"100%", marginTop:"8px", padding:"10px", borderRadius:"16px", border:"1px solid rgba(255,255,255,0.14)", background:"rgba(10,14,24,0.92)", backdropFilter:"blur(18px)", display:"flex", flexDirection:"column", gap:"8px" }}>
              <p style={{ margin:"0 0 4px", fontSize:"10px", fontWeight:800, letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(255,255,255,0.5)" }}>Events</p>
              {eventCloud.map((item) => (
                <button key={item.id} type="button" onClick={() => openItem(item)} style={pickerItem(selectedItem.id === item.id)}>
                  {item.name}
                </button>
              ))}
            </div>
          )}

          {/* Selected panel */}
          <div id="hero-mobile-sheet" style={{ display:"block", marginTop:"12px" }}>
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
              ) : <p className="hero-empty-note">Links for this will be added here later.</p>}
            </div>
          </div>
        </>
      )}

      {/* ── VIDEO STRIP ── */}
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

    </section>
  );
}
