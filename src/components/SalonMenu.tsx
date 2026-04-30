import { useState } from "react";
import { categories, CONTACT } from "../data/salonData";
import heroImg from "../assets/hero.png";

// ── Opening hours helper (Nairobi = UTC+3) ──────────────────────
function getOpenStatus(): { open: boolean; label: string } {
  const now = new Date();
  const nairobiOffset = 3 * 60;
  const utcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  const localMinutes = (utcMinutes + nairobiOffset) % (24 * 60);
  const localHour = Math.floor(localMinutes / 60);
  const utcDayMinutes = now.getUTCDay() * 24 * 60 + utcMinutes;
  const nairobiTotalMinutes = utcDayMinutes + nairobiOffset;
  const nairobiDay = Math.floor(nairobiTotalMinutes / (24 * 60)) % 7;

  const isSunday = nairobiDay === 0;
  const openHour = isSunday ? 10 : 8;
  const closeHour = isSunday ? 18 : 20;
  const isOpen = localHour >= openHour && localHour < closeHour;

  if (isOpen) return { open: true, label: "Open Now" };

  let nextOpen: string;
  if (localHour < openHour) {
    nextOpen = `${openHour > 12 ? openHour - 12 : openHour}${openHour >= 12 ? "PM" : "AM"} today`;
  } else {
    const tomorrowSunday = (nairobiDay + 1) % 7 === 0;
    const tomorrowOpen = tomorrowSunday ? 10 : 8;
    nextOpen = `${tomorrowOpen > 12 ? tomorrowOpen - 12 : tomorrowOpen}${tomorrowOpen >= 12 ? "PM" : "AM"} tomorrow`;
  }
  return { open: false, label: `Closed · Opens ${nextOpen}` };
}

// ── Testimonials ─────────────────────────────────────────────────
const testimonials = [
  { name: "Amina W.", service: "Box Braids", text: "Best braiding in Nairobi! The attention to detail is incredible. My braids lasted 3 months.", rating: 5 },
  { name: "James K.", service: "Fade & Taper", text: "Clean fade every time. The barbers here really know their craft. Won't go anywhere else.", rating: 5 },
  { name: "Grace M.", service: "Bridal Makeup", text: "Made me feel like a queen on my wedding day. Professional, patient and so talented.", rating: 5 },
  { name: "David O.", service: "Hot Towel Shave", text: "The hot towel shave experience is next level. Relaxing and the closest shave I've ever had.", rating: 5 },
];

export default function SalonMenu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const selected = categories.find((c) => c.id === activeCategory);
  const status = getOpenStatus();

  return (
    <>
      {/* ── Hero ── */}
      {!activeCategory && (
        <section className="hero" aria-label="Services hero">
          <img src={heroImg} alt="Master Stylists Salon" className="hero-bg" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-eyebrow">Valley Arcade Mini Mall · Nairobi</p>
            <h1 className="hero-title">
              Look Good.<br />
              <em>Feel Unstoppable.</em>
            </h1>
            <p className="hero-sub">
              Nairobi's go-to salon & barbershop for cuts, braids, color,<br />
              nails, facials and more — all under one roof.
            </p>
            <div className="hero-actions">
              <a
                href="#services"
                className="hero-btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Services
              </a>
              <a href={`tel:${CONTACT.phone}`} className="hero-btn-secondary">
                Call to Book
              </a>
            </div>
            <div className="hero-badges">
              <div className="hero-badge">
                <span className="hero-badge-num">11+</span>
                <span className="hero-badge-label">Service Categories</span>
              </div>
              <div className="hero-badge-divider" />
              <div className="hero-badge">
                <span className="hero-badge-num">5★</span>
                <span className="hero-badge-label">Client Rated</span>
              </div>
              <div className="hero-badge-divider" />
              <div className="hero-badge">
                <span className="hero-badge-num">Walk-ins</span>
                <span className="hero-badge-label">Always Welcome</span>
              </div>
            </div>
            <div className="hero-status-row">
              <span className={`hero-status-badge ${status.open ? "hero-status-badge--open" : "hero-status-badge--closed"}`}>
                <span className="hero-status-dot" />
                {status.label}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* ── Services ── */}
      <section className="section" id="services">
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

              {/* ── Testimonials ── */}
              <div className="testimonials-section">
                <div className="section-header" style={{ marginTop: "72px" }}>
                  <p className="section-label">Client Stories</p>
                  <h2 className="section-title">What Our Clients Say</h2>
                </div>
                <div className="testimonials-grid">
                  {testimonials.map((t, i) => (
                    <div key={i} className="testimonial-card">
                      <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                        {Array.from({ length: t.rating }).map((_, si) => (
                          <span key={si} className="testimonial-star" aria-hidden="true">✦</span>
                        ))}
                      </div>
                      <p className="testimonial-text">"{t.text}"</p>
                      <div className="testimonial-footer">
                        <span className="testimonial-name">{t.name}</span>
                        <span className="testimonial-service">{t.service}</span>
                      </div>
                    </div>
                  ))}
                </div>
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
                    {selected.services.map((svc, i) => {
                      const msg = encodeURIComponent(
                        `Hi, I'd like to book:\n\n*Service:* ${svc.name}\n*Price:* ${svc.price}${svc.duration ? `\n*Duration:* ${svc.duration}` : ""}\n\nPlease confirm availability.`
                      );
                      return (
                        <a
                          key={i}
                          href={`https://wa.me/254701530443?text=${msg}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="service-card"
                          role="listitem"
                        >
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
                            <div className="service-book-hint">
                              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="service-wa-icon">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                              </svg>
                              Book this service
                            </div>
                          </div>
                        </a>
                      );
                    })}
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
