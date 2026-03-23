// Experience Strip — scrolling photos WITH context cards
// Place photos in /public/photos/

const experiences = [
  {
    src: "/photos/photo-1.jpg",
    title: "Hosting on Stage",
    label: "CCU Festival",
    tag: "Live Event",
    year: "2024",
  },
  {
    src: "/photos/photo-2.jpg",
    title: "Panel Speaker",
    label: "Buzz Confluence '24",
    tag: "Industry Talk",
    year: "2024",
  },
  {
    src: "/photos/photo-3.jpg",
    title: "Player Interview",
    label: "Bengal Premier League",
    tag: "Sports Media",
    year: "2024",
  },
  {
    src: "/photos/photo-4.jpg",
    title: "Convention Host",
    label: "ComicCon India",
    tag: "Entertainment",
    year: "2023",
  },
  {
    src: "/photos/photo-5.jpg",
    title: "Creative Direction",
    label: "Brand Shoot",
    tag: "Content",
    year: "2024",
  },
  {
    src: "/photos/photo-6.jpg",
    title: "Stage Engagement",
    label: "CCU Festival",
    tag: "Live Event",
    year: "2023",
  },
];

const doubled = [...experiences, ...experiences];

export default function PhotoStrip() {
  return (
    <div className="exp-strip-section fade-up">
      <div className="exp-strip-header">
        <p className="eyebrow">In the Field</p>
        <h3 className="exp-strip-title">Where the work happened.</h3>
      </div>

      <div className="exp-strip-outer">
        <div className="exp-strip-track">
          {doubled.map((item, i) => (
            <div className="exp-card" key={i}>
              <div className="exp-card-img-wrap">
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="exp-card-img-overlay" />
                <span className="exp-card-tag">{item.tag}</span>
              </div>
              <div className="exp-card-info">
                <span className="exp-card-year">{item.year}</span>
                <h4 className="exp-card-title">{item.title}</h4>
                <p className="exp-card-label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
