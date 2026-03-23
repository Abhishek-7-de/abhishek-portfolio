const experiences = [
  {
    src: "/photos/photo-1.jpg",
    title: "Hosting a Live Event",
    label: "College fest — on stage solo",
    tag: "Host",
    year: "2024",
  },
  {
    src: "/photos/photo-2.jpg",
    title: "Panel at Buzz Confluence '24",
    label: "Industry panel discussion",
    tag: "Speaker",
    year: "2024",
  },
  {
    src: "/photos/photo-3.jpg",
    title: "BPL Interview",
    label: "Bengal Premier League — field interview",
    tag: "Interview",
    year: "2024",
  },
  {
    src: "/photos/photo-4.jpg",
    title: "Voxpop at ComicCon India",
    label: "Street interviews with cosplayers",
    tag: "Voxpop",
    year: "2023",
  },
  {
    src: "/photos/photo-5.jpg",
    title: "BTS with Tridha Choudhury",
    label: "Behind-the-scenes content creation",
    tag: "BTS Content",
    year: "2024",
  },
  {
    src: "/photos/photo-6.jpg",
    title: "Standup with Akash Gupta",
    label: "Live event — stage moment",
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
