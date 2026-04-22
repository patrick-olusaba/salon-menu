import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CONTACT, SOCIAL } from "../data/salonData";
import logo from "../assets/logo.png";
import "../styles/SalonMenu.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <div className="salon-root">
      <ScrollToTop />
      <header className="salon-header">
        <div className="header-inner">
          <NavLink to="/" className="logo" style={{ textDecoration: "none" }}>
            <img src={logo} alt="Master Stylists Salon & Barbershop" className="logo-img" />
            <div>
              <div className="logo-name">Master Stylists</div>
              <div className="logo-tagline">Salon & Barbershop · Nairobi</div>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <nav className="nav" aria-label="Main navigation">
            <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " nav-link--active" : "")}>
              Services
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => "nav-link" + (isActive ? " nav-link--active" : "")}>
              Products
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => "nav-link" + (isActive ? " nav-link--active" : "")}>
              Our Work
            </NavLink>
          </nav>

          <a href={`tel:${CONTACT.phone}`} className="header-cta">Book Now</a>

          {/* Hamburger */}
          <button
            className={"hamburger" + (menuOpen ? " hamburger--open" : "")}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <NavLink to="/" className={({ isActive }) => "mobile-nav-link" + (isActive ? " mobile-nav-link--active" : "")}>
              Services
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => "mobile-nav-link" + (isActive ? " mobile-nav-link--active" : "")}>
              Products
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => "mobile-nav-link" + (isActive ? " mobile-nav-link--active" : "")}>
              Our Work
            </NavLink>
            <a href={`tel:${CONTACT.phone}`} className="mobile-nav-cta">
              Book Now — {CONTACT.phone}
            </a>
          </nav>
        )}
      </header>

      <Outlet />

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logo} alt="Master Stylists" className="footer-logo-img" />
                <div>
                  <div className="footer-logo-name">Master Stylists</div>
                  <div className="footer-logo-sub">Salon & Barbershop</div>
                </div>
              </div>
              <p className="footer-brand-sub">{CONTACT.address}</p>
            </div>
            <div className="footer-cols">
              <div>
                <p className="footer-col-label">Contact</p>
                <a href={`tel:${CONTACT.phone}`} className="footer-col-item">{CONTACT.phone}</a>
                <a href={`mailto:${CONTACT.email}`} className="footer-col-item">{CONTACT.email}</a>
              </div>
              <div>
                <p className="footer-col-label">Hours</p>
                <span className="footer-col-item">{CONTACT.hours}</span>
                <span className="footer-col-item">{CONTACT.hoursSun}</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© {new Date().getFullYear()} Master Stylists Salon & Barbershop. All rights reserved.</p>
            <div className="footer-social">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={s.name}
                  dangerouslySetInnerHTML={{ __html: s.icon }}
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
