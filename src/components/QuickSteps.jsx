import { FiCheckCircle, FiCalendar, FiTruck, FiRefreshCw } from 'react-icons/fi';

const quickStepsData = [
  { icon: <FiCheckCircle size={22} />, title: 'Pilih Sepatu', desc: 'Pilih sepatu sesuai kebutuhanmu' },
  { icon: <FiCalendar size={22} />, title: 'Pilih Durasi Sewa', desc: '1 - 7 hari, fleksibel sesuai jadwalmu' },
  { icon: <FiTruck size={22} />, title: 'Ambil / Terima', desc: 'Ambil di tempat atau kirim ke alamatmu' },
  { icon: <FiRefreshCw size={22} />, title: 'Pakai & Kembalikan', desc: 'Nikmati permainanmu dan kembalikan tepat waktu.' },
];

export default function QuickSteps() {
  return (
    <section className="quick-steps">
      <div className="container">
        <div className="quick-steps-grid">
          {quickStepsData.map((step, i) => (
            <div key={i} className="quick-step">
              <div className="quick-step-icon">{step.icon}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
