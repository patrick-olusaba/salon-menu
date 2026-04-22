import "../styles/Gallery.css";

// Automatically picks up every image dropped into src/assets/gallery/
// No code changes needed — just add photos to that folder and they appear here.
const imageModules = import.meta.glob(
  "../assets/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

type ImageModule = { default: string };

const photos = Object.entries(imageModules).map(([path, mod]) => {
  const filename = path.split("/").pop() ?? "";
  // Turn filename into a readable label: "fade-cut-jan.jpg" → "Fade Cut Jan"
  const label = filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return { src: (mod as ImageModule).default, label, filename };
});

const hasPhotos = photos.length > 0;

export default function Gallery() {
  return (
    <>
      <section className="hero" aria-label="Gallery hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Portfolio</p>
          <h1 className="hero-title">
            Our Work,<br />
            <em>Your Inspiration</em>
          </h1>
          <p className="hero-sub">
            Every look tells a story. Browse our work and imagine what we can do for you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">From the Chair</p>
            <h2 className="section-title">Recent Work</h2>
            <p className="section-sub">
              {hasPhotos
                ? `${photos.length} photo${photos.length !== 1 ? "s" : ""} — drop more into src/assets/gallery/ to add`
                : "Add your photos to showcase your best looks"}
            </p>
          </div>

          {hasPhotos ? (
            <div className="gallery-grid">
              {photos.map((photo) => (
                <div key={photo.filename} className="gallery-item">
                  <img src={photo.src} alt={photo.label} className="gallery-img" />
                  <div className="gallery-label">{photo.label}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="gallery-empty">
              <div className="gallery-empty-icon">✦</div>
              <h3 className="gallery-empty-title">No photos yet</h3>
              <p className="gallery-empty-text">
                Drop your work photos into{" "}
                <code>src/assets/gallery/</code> and they'll appear here automatically.
              </p>
              <p className="gallery-empty-formats">Supports .jpg · .jpeg · .png · .webp</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
