import { useState, type FormEvent } from "react";
import { categories } from "../data/salonData";
import "../styles/Booking.css";

const TIME_SLOTS: string[] = [];
for (let h = 8; h <= 19; h++) {
  const suffix = h >= 12 ? "PM" : "AM";
  const display = h > 12 ? h - 12 : h;
  TIME_SLOTS.push(`${display}:00 ${suffix}`);
}

function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function Booking() {
  const [name, setName]       = useState("");
  const [phone, setPhone]     = useState("");
  const [service, setService] = useState("");
  const [date, setDate]       = useState("");
  const [time, setTime]       = useState("");
  const [notes, setNotes]     = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const msg = [
      `Hi, I'd like to book an appointment.`,
      ``,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Service:* ${service}`,
      `*Date:* ${date}`,
      `*Time:* ${time}`,
      notes ? `*Notes:* ${notes}` : null,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/254701530443?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <section className="booking-hero">
        <div className="booking-hero-content">
          <p className="hero-eyebrow">Master Stylists · Nairobi</p>
          <h1 className="hero-title">
            Book an<br /><em>Appointment</em>
          </h1>
          <p className="hero-sub">
            Fill in the form and we'll confirm your slot via WhatsApp.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="booking-wrap">
            <form className="booking-form" onSubmit={handleSubmit} noValidate>
              <div className="booking-form-grid">
                <div className="booking-field">
                  <label className="booking-label" htmlFor="b-name">Full Name</label>
                  <input id="b-name" type="text" className="booking-input" placeholder="e.g. Amina Wanjiku"
                    value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
                </div>

                <div className="booking-field">
                  <label className="booking-label" htmlFor="b-phone">Phone Number</label>
                  <input id="b-phone" type="tel" className="booking-input" placeholder="e.g. +254 712 345 678"
                    value={phone} onChange={(e) => setPhone(e.target.value)} required autoComplete="tel" />
                </div>

                <div className="booking-field booking-field--full">
                  <label className="booking-label" htmlFor="b-service">Service</label>
                  <select id="b-service" className="booking-input booking-select"
                    value={service} onChange={(e) => setService(e.target.value)} required>
                    <option value="" disabled>Select a service…</option>
                    {categories.map((cat) => (
                      <optgroup key={cat.id} label={cat.title}>
                        {cat.services.map((svc) => (
                          <option key={svc.name} value={`${cat.title} — ${svc.name}`}>
                            {svc.name} ({svc.price})
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div className="booking-field">
                  <label className="booking-label" htmlFor="b-date">Preferred Date</label>
                  <input id="b-date" type="date" className="booking-input"
                    min={todayStr()} value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>

                <div className="booking-field">
                  <label className="booking-label" htmlFor="b-time">Preferred Time</label>
                  <select id="b-time" className="booking-input booking-select"
                    value={time} onChange={(e) => setTime(e.target.value)} required>
                    <option value="" disabled>Select a time slot…</option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                <div className="booking-field booking-field--full">
                  <label className="booking-label" htmlFor="b-notes">
                    Notes <span className="booking-optional">(optional)</span>
                  </label>
                  <textarea id="b-notes" className="booking-input booking-textarea"
                    placeholder="Any special requests…" rows={4}
                    value={notes} onChange={(e) => setNotes(e.target.value)} />
                </div>
              </div>

              <button type="submit" className="booking-submit">
                <svg viewBox="0 0 24 24" fill="currentColor" className="booking-submit-icon" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                Send via WhatsApp
              </button>
              <p className="booking-note">
                Tapping the button opens WhatsApp with your details pre-filled. We'll confirm your appointment shortly.
              </p>
            </form>

            <aside className="booking-info">
              <div className="booking-info-card">
                <h3 className="booking-info-title">Opening Hours</h3>
                <ul className="booking-info-list">
                  <li><span>Mon – Sat</span><span>8:00 AM – 8:00 PM</span></li>
                  <li><span>Sunday</span><span>10:00 AM – 6:00 PM</span></li>
                </ul>
              </div>
              <div className="booking-info-card">
                <h3 className="booking-info-title">Location</h3>
                <p className="booking-info-text">Valley Arcade Mini Mall, Nairobi</p>
              </div>
              <div className="booking-info-card">
                <h3 className="booking-info-title">Walk-ins Welcome</h3>
                <p className="booking-info-text">No appointment? No problem — walk in any time during business hours.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
