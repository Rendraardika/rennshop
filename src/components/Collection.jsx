import { useState } from 'react';
import { FiHeart, FiChevronRight, FiStar } from 'react-icons/fi';
import { products, categories } from '../data/products';

export default function Collection() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filtered = activeFilter === 'Semua'
    ? products
    : products.filter(p => p.category === activeFilter || p.brand === activeFilter);

  const displayProducts = filtered.slice(0, 5);

  return (
    <section className="collection" id="koleksi">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-label">KOLEKSI TERBAIK</div>
            <h2 className="section-title">Browse Our Collection</h2>
          </div>
          <a href="#" className="section-link">
            Lihat semua <FiChevronRight />
          </a>
        </div>

        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
          <select className="sort-select" defaultValue="terbaru">
            <option value="terbaru">Terbaru</option>
            <option value="termurah">Termurah</option>
            <option value="termahal">Termahal</option>
            <option value="rating">Rating Tertinggi</option>
          </select>
        </div>

        <div className="products-grid">
          {displayProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card-image">
                <span className={`product-badge ${
                  product.isBestSeller ? 'bestseller' :
                  product.status === 'Full Booked' ? 'booked' : 'available'
                }`}>
                  {product.isBestSeller ? 'Best Seller' : product.status}
                </span>
                <button className="product-wishlist" aria-label="Wishlist">
                  <FiHeart size={16} />
                </button>
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-card-info">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <div className="product-price">
                  <strong>Rp {product.price.toLocaleString('id-ID')}</strong>
                  <span>/hari</span>
                </div>
                <div className="product-rating">
                  <FiStar size={13} fill="#fbbf24" stroke="#fbbf24" />
                  <span>{product.rating} ({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
