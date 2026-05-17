import { FiArrowRight, FiShield, FiClock, FiDollarSign } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="hero" id="beranda">
      <div className="container hero-inner">
        <div className="hero-content">
          <h2>
            Rent Premium<br />
            <span className="accent">Futsal Shoes</span><br />
            Easily.
          </h2>
          <p>
            Sewa sepatu bola, futsal & mini soccer berkualitas dengan harga terjangkau.
            Nyaman, bersih, dan siap pakai.
          </p>
          <div className="hero-buttons">
            <a href="#koleksi" className="btn-primary">
              Rent Now <FiArrowRight />
            </a>
            <a href="#koleksi" className="btn-secondary">
              Browse Collection
            </a>
          </div>
          <div className="hero-badges">
            <div className="hero-badge">
              <div className="hero-badge-icon"><FiShield size={18} /></div>
              <div className="hero-badge-text">
                <strong>Bersih & Higienis</strong>
                <span>Setiap sewa dicuci</span>
              </div>
            </div>
            <div className="hero-badge">
              <div className="hero-badge-icon"><FiClock size={18} /></div>
              <div className="hero-badge-text">
                <strong>Ready Today</strong>
                <span>Siap kirim / ambil</span>
              </div>
            </div>
            <div className="hero-badge">
              <div className="hero-badge-icon"><FiDollarSign size={18} /></div>
              <div className="hero-badge-text">
                <strong>Best Price</strong>
                <span>Harga terbaik</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/hero-shoe.png" alt="Sepatu Futsal Premium" />
          <div className="hero-price-tag">
            <span>Mulai dari</span>
            <strong>Rp 35.000</strong>
            <small> /hari</small>
          </div>
        </div>
      </div>
      <div className="hero-dots">
        <span className="hero-dot active"></span>
        <span className="hero-dot"></span>
        <span className="hero-dot"></span>
        <span className="hero-dot"></span>
      </div>
    </section>
  );
}
