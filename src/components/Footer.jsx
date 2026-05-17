import { FiSend } from 'react-icons/fi';
import { BsInstagram, BsTiktok, BsWhatsapp, BsShop } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="footer" id="tentang">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo">
              <div className="nav-logo-icon">R</div>
              <div className="nav-logo-text">
                <h1>Rennskie</h1>
                <span>RENTAL</span>
              </div>
            </div>
            <p>Platform rental sepatu bola, futsal & mini soccer terpercaya dengan koleksi premium, bersih, dan nyaman untuk setiap permainanmu.</p>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="Instagram"><BsInstagram size={16} /></a>
              <a href="#" className="footer-social" aria-label="TikTok"><BsTiktok size={16} /></a>
              <a href="#" className="footer-social" aria-label="WhatsApp"><BsWhatsapp size={16} /></a>
              <a href="#" className="footer-social" aria-label="Shopee"><BsShop size={16} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Menu</h4>
            <ul>
              <li><a href="#beranda">Beranda</a></li>
              <li><a href="#koleksi">Koleksi</a></li>
              <li><a href="#cara-sewa">Cara Sewa</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#tentang">Tentang Kami</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Informasi</h4>
            <ul>
              <li><a href="#">Syarat & Ketentuan</a></li>
              <li><a href="#">Kebijakan Privasi</a></li>
              <li><a href="#">Cara Pembayaran</a></li>
              <li><a href="#">Pengiriman</a></li>
              <li><a href="#">Pengembalian</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Bantuan</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Hubungi Kami</a></li>
              <li><a href="#">Panduan Sewa</a></li>
              <li><a href="#">Status Pesanan</a></li>
            </ul>
          </div>

          <div className="footer-col footer-newsletter">
            <h4>Newsletter</h4>
            <p>Dapatkan info promo dan koleksi terbaru dari kami.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Masukkan email kamu" />
              <button aria-label="Subscribe"><FiSend size={18} /></button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2024 Rennskie Rental. All rights reserved.</span>
          <span>Dibuat dengan <span className="heart">❤</span> untuk pemain futsal Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
