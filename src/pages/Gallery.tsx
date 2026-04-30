import "../styles/Gallery.css";

const imageModules = import.meta.glob(
  "../assets/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const beforeAfterModules = import.meta.glob(
  "../assets/before-after/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

type ImageModule = { default: string };

const photos = Object.entries(imageModules).map(([path, mod]) => {
  const filename = path.split("/").pop() ?? "";
  const label = filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return { src: (mod as ImageModule).default, label, filename };
});

type BAPair = { id: string; before: string; after: string };

function buildBAPairs(): BAPair[] {
  const beforeMap = new Map<string, string>();
  const afterMap  = new Map<string, string>();

  for (const [path, mod] of Object.entries(beforeAfterModules)) {
    const filename = path.split("/").pop() ?? "";
    const match = filename.match(/^(\d+)-(before|after)\.[^.]+$/i);
    if (!match) continue;
    const [, id, side] = match;
    if (side.toLowerCase() === "before") beforeMap.set(id, (mod as ImageModule).default);
    else afterMap.set(id, (mod as ImageModule).default);
  }

  const pairs: BAPair[] = [];
  for (const [id, before] of beforeMap.entries()) {
    const after = afterMap.get(id);
    if (after) pairs.push({ id, before, after });
  }
  return pairs.sort((a, b) => Number(a.id) - Number(b.id));
}

const baPairs   = buildBAPairs();
const hasPhotos = photos.length > 0;
const hasBAPairs = baPairs.length > 0;

export default function Gallery() {
  return (
    <>
      <section className="hero" aria-label="Gallery hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Portfolio</p>
          <h1 className="hero-title">
            Our Work,<br /><em>Your Inspiration</em>
          </h1>
          <p className="hero-sub">
            Every look tells a story. Browse our work and imagine what we can do for you.
          </p>
        </div>
      </section>

      {/* ── Before & After ── */}
      {hasBAPairs && (
        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="section-label">Transformations</p>
              <h2 className="section-title">Before &amp; After</h2>
              <p className="section-sub">{baPairs.length} transformation{baPairs.length !== 1 ? "s" : ""}</p>
            </div>
            <div className="ba-grid">
              {baPairs.map((pair) => (
                <div key={pair.id} className="ba-card">
                  <div className="ba-side">
                    <img src={pair.before} alt={`Before ${pair.id}`} className="ba-img" />
                    <span className="ba-label ba-label--before">Before</span>
                  </div>
                  <div className="ba-divider" aria-hidden="true" />
                  <div className="ba-side">
                    <img src={pair.after} alt={`After ${pair.id}`} className="ba-img" />
                    <span className="ba-label ba-label--after">After</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Gallery ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">From the Chair</p>
            <h2 className="section-title">Recent Work</h2>
            <p className="section-sub">
              {hasPhotos ? `${photos.length} photo${photos.length !== 1 ? "s" : ""}` : "Photos coming soon"}
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
                Drop your work photos into <code>src/assets/gallery/</code> and they'll appear here automatically.
              </p>
              <p className="gallery-empty-formats">Supports .jpg · .jpeg · .png · .webp</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
