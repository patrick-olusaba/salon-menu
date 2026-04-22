import { useState } from "react";
import { products, productCategories } from "../data/productsData";
import { CONTACT } from "../data/salonData";
import "../styles/Products.css";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="hero" aria-label="Products hero">
        <div className="hero-content">
          <p className="hero-eyebrow">In-Store Products</p>
          <h1 className="hero-title">
            Take the Experience<br />
            <em>Home With You</em>
          </h1>
          <p className="hero-sub">
            Professional-grade products we use and trust — available to purchase in-store.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Our Products</p>
            <h2 className="section-title">Shop In-Store</h2>
            <p className="section-sub">Ask our stylists for a recommendation</p>
          </div>

          {/* Filter tabs */}
          <div className="product-filters">
            {productCategories.map((cat) => {
              const count = cat.id === "all" ? products.length : products.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={"filter-btn" + (activeCategory === cat.id ? " filter-btn--active" : "")}
                >
                  {cat.label}
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Product grid */}
          <div className="product-grid">
            {filtered.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-img-wrap">
                  <img src={product.image} alt={product.name} className="product-img" />
                  <span className="product-category-tag">
                    {productCategories.find((c) => c.id === product.category)?.label}
                  </span>
                </div>
                <div className="product-body">
                  <p className="product-brand">{product.brand}</p>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <a href={`tel:${CONTACT.phone}`} className="product-enquire">
                      Enquire →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="products-note">
            <span className="products-note-icon">✦</span>
            <p>Product availability may vary. Call us or visit in-store to check stock.</p>
          </div>
        </div>
      </section>
    </>
  );
}
