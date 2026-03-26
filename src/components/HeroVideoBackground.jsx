// src/components/HeroVideoBackground.jsx
// Looping ambient background video for hero section
// Usage: add <HeroVideoBackground /> as first child inside hero-wrap div in Hero.jsx
//
// HOW TO USE YOUR OWN VIDEO:
// 1. Export a short 10-30 sec ambient clip (dark, moody — city, studio, events footage)
// 2. Compress to ~3-5MB using HandBrake or Cloudinary
// 3. Put it in public/ as hero-bg.mp4
// 4. The fallback gradient shows if video fails or on mobile

export default function HeroVideoBackground({ src = "/hero-bg.mp4" }) {
  return (
    <div className="hero-video-bg-wrap">
      {/* Ambient looping video */}
      <video
        className="hero-video-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Dark overlay — keeps text readable */}
      <div className="hero-video-overlay" />

      {/* Gradient overlay — bottom fade into page */}
      <div className="hero-video-gradient" />
    </div>
  );
}
