import { useEffect, useRef, useState } from "react";

/**
 * Seamless reel marquee for the hero. Videos autoplay muted, and the whole
 * strip pauses playback when scrolled out of view (perf). The track is the
 * content duplicated once so the CSS marquee loops without a seam.
 */
export default function HeroReels({ videos }) {
  const wrapRef = useRef(null);
  const [broken, setBroken] = useState([]);

  const visible = videos.filter((v) => !broken.includes(v.id));
  const loop = visible.length ? [...visible, ...visible] : [];

  // Play only while the strip is on screen.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        wrap.querySelectorAll("video").forEach((v) => {
          if (entry.isIntersecting) v.play?.().catch(() => {});
          else v.pause?.();
        });
      },
      { threshold: 0 }
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, [visible.length]);

  if (!visible.length) return null;

  return (
    <div className="reels" ref={wrapRef} aria-hidden="true">
      <div className="reels-track">
        {loop.map((v, i) => (
          <div className="reel" key={`${v.id}-${i}`}>
            <video
              src={v.src}
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              onError={() => setBroken((p) => (p.includes(v.id) ? p : [...p, v.id]))}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
