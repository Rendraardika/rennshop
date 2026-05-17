import { FiCheckCircle, FiCalendar, FiTruck, FiRefreshCw } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

const stepsData = [
  { number: 1, icon: <FiCheckCircle size={28} />, title: 'Pilih Sepatu', desc: 'Pilih sepatu favoritmu dari koleksi terbaik kami' },
  { number: 2, icon: <FiCalendar size={28} />, title: 'Pilih Durasi', desc: 'Tentukan durasi sewa sesuai kebutuhanmu' },
  { number: 3, icon: <FiTruck size={28} />, title: 'Ambil / Dikirim', desc: 'Ambil di tempat atau kirim ke alamatmu' },
  { number: 4, icon: <FiRefreshCw size={28} />, title: 'Pakai & Kembalikan', desc: 'Nikmati permainanmu lalu kembalikan tepat waktu' },
];

export default function CaraSewa() {
  return (
    <section className="cara-sewa" id="cara-sewa">
      <div className="container">
        <div className="section-label">CARA SEWA</div>
        <h2 className="section-title">Gampang, Cuma 4 Langkah!</h2>

        <div className="cara-sewa-inner">
          <div className="cara-sewa-left">
            <div className="cara-sewa-steps">
              {stepsData.map((step) => (
                <div key={step.number} className="cara-sewa-step">
                  <div className="cara-sewa-step-number">{step.number}</div>
                  <div className="cara-sewa-step-icon">{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cara-sewa-cta">
            <h3>Butuh Sepatu<br />Sekarang?</h3>
            <p>Chat admin untuk bantuan cepat melalui WhatsApp.</p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <BsWhatsapp size={20} />
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
