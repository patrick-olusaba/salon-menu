import { useState } from "react";
import { categories, CONTACT } from "../data/salonData";
import heroImg from "../assets/hero.png";

export default function SalonMenu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const selected = categories.find((c) => c.id === activeCategory);

  return (
    <>
      {/* ── Hero ── */}
      {!activeCategory && (
        <section className="hero" aria-label="Services hero">
          <img src={heroImg} alt="" className="hero-bg" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-eyebrow">Master Stylists Salon & Barbershop</p>
            <h1 className="hero-title">
              Where Every Visit Leaves<br />
              <em>a Lasting Impression</em>
            </h1>
            <p className="hero-sub">
              Premium salon and barbershop services crafted for you.<br />
              Select a category below to explore our offerings and pricing.
            </p>
          </div>
        </section>
      )}

      {/* ── Services ── */}
      <section className="section">
        <div className="container">
          {!activeCategory ? (
            <>
              <div className="section-header">
                <p className="section-label">All Services</p>
                <h2 className="section-title">Choose a Category</h2>
                <p className="section-sub">{CONTACT.address} · {CONTACT.hours} · {CONTACT.hoursSun}</p>
              </div>

              <div className="grid">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="category-card"
                    aria-label={`View ${cat.title} services`}
                    style={{
                      "--accent-color": cat.accent,
                      "--icon-bg": `${cat.accent}14`,
                      "--icon-bg-hover": `${cat.accent}26`,
                    } as React.CSSProperties}
                  >
                    <div className="card-image-wrap">
                      <img src={cat.image} alt={cat.title} className="card-image" />
                      <div className="card-image-overlay" />
                      <span className="card-count-badge">{cat.services.length}</span>
                    </div>
                    <div className="card-body">
                      <div className="card-top">
                        <div className="card-icon-wrap">{cat.icon}</div>
                      </div>
                      <h3 className="card-title">{cat.title}</h3>
                      <p className="card-sub">{cat.subtitle}</p>
                      <div className="card-footer">
                        <span className="card-footer-label">View services</span>
                        <span className="card-count-arrow">→</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* ── Detail Pane ── */
            <div className="detail-pane">
              <button onClick={() => setActiveCategory(null)} className="back-btn">
                ← All services
              </button>

              {selected && (
                <>
                  <div className="detail-header">
                    <div
                      className="detail-icon"
                      style={{ color: selected.accent, borderColor: `${selected.accent}40` }}
                    >
                      {selected.icon}
                    </div>
                    <div>
                      <h2 className="detail-title">{selected.title}</h2>
                      <p className="detail-sub">{selected.subtitle}</p>
                    </div>
                  </div>

                  <div className="service-list" role="list">
                    {selected.services.map((svc, i) => (
                      <div key={i} className="service-card" role="listitem">
                        {svc.image && (
                          <div className="service-card-img-wrap">
                            <img src={svc.image} alt={svc.name} className="service-card-img" />
                          </div>
                        )}
                        <div className="service-card-body">
                          <div className="service-name">{svc.name}</div>
                          {svc.description && <div className="service-desc">{svc.description}</div>}
                          <div className="service-card-footer">
                            {svc.duration && (
                              <span className="service-duration">⏱ {svc.duration}</span>
                            )}
                            <span className="service-price" style={{ color: selected.accent }}>
                              {svc.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="book-banner">
                    <div className="book-text-wrap">
                      <p className="book-heading">Ready to book?</p>
                      <p className="book-sub">Call us or walk in — we'd love to see you.</p>
                    </div>
                    <a href={`tel:${CONTACT.phone}`} className="book-btn">
                      Call {CONTACT.phone}
                    </a>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
