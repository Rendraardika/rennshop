import { useState } from 'react';
import { FiSearch, FiShoppingBag, FiUser, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Beranda', href: '#beranda', active: true },
  { label: 'Koleksi', href: '#koleksi' },
  { label: 'Cara Sewa', href: '#cara-sewa' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Tentang Kami', href: '#tentang' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-inner">
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">R</div>
          <div className="nav-logo-text">
            <h1>Rennskie</h1>
            <span>RENTAL</span>
          </div>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={link.active ? 'active' : ''}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-search">
          <FiSearch size={16} />
          <input type="text" placeholder="Cari sepatu..." />
        </div>

        <div className="nav-actions">
          <button className="nav-action-btn" aria-label="Keranjang">
            <FiShoppingBag size={20} />
            <span className="badge">2</span>
          </button>
          <button className="nav-avatar" aria-label="Akun">
            <FiUser size={18} />
          </button>
          <button className="mobile-menu-btn nav-action-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
