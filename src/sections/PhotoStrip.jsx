// Photo strip — place AFTER ProofStrip, BEFORE WhyMe
// Import photos from public folder (place in /public/photos/)

const photos = [
  { src: "/photos/photo-1.jpg", alt: "Hosting on stage" },
  { src: "/photos/photo-2.jpg", alt: "Panel at Buzz Confluence" },
  { src: "/photos/photo-3.jpg", alt: "BPL interview" },
  { src: "/photos/photo-4.jpg", alt: "ComicCon hosting" },
  { src: "/photos/photo-5.jpg", alt: "Shoot direction" },
  { src: "/photos/photo-6.jpg", alt: "CCU Festival stage" },
];

// Duplicate for seamless loop
const doubled = [...photos, ...photos];

export default function PhotoStrip() {
  return (
    <div className="photo-strip-section">
      <div className="photo-strip-track">
        {doubled.map((p, i) => (
          <div className="photo-strip-item" key={i}>
            <img src={p.src} alt={p.alt} loading="lazy" />
            <div className="photo-strip-overlay" />
          </div>
        ))}
      </div>
    </div>
  );
}
