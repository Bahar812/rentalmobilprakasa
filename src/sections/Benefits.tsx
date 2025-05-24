import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Car, MapPin, CreditCard, HeartHandshake } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Terpercaya',
    description: 'Lebih dari 5 tahun melayani pelanggan di Surabaya dengan ribuan perjalanan sukses. Kami mengutamakan kualitas pelayanan dan kepuasan pelanggan dalam setiap rental mobil.'
  },
  {
    icon: Clock,
    title: 'Fleksibel 24/7',
    description: 'Layanan rental mobil yang fleksibel dengan durasi sewa harian hingga bulanan. Proses booking yang mudah dan cepat, dengan dukungan customer service 24/7 untuk membantu Anda.'
  },
  {
    icon: Car,
    title: 'Armada Berkualitas',
    description: 'Semua unit mobil kami terawat dengan baik dan selalu dalam kondisi prima. Maintenance rutin dan pengecekan berkala menjamin kenyamanan dan keamanan perjalanan Anda.'
  },
  {
    icon: MapPin,
    title: 'Antar Jemput',
    description: 'Layanan antar jemput unit ke lokasi Anda di area Surabaya. Tidak perlu repot datang ke garasi, kami siap mengantarkan mobil pilihan Anda ke tempat yang ditentukan.'
  },
  {
    icon: CreditCard,
    title: 'Pembayaran Mudah',
    description: 'Sistem pembayaran yang mudah dan transparan. DP ringan mulai dari Rp150.000 dengan berbagai metode pembayaran yang dapat disesuaikan dengan kebutuhan Anda.'
  },
  {
    icon: HeartHandshake,
    title: 'Pelayanan Prima',
    description: 'Tim profesional kami siap membantu Anda 24/7 dengan pelayanan ramah dan responsif. Kami berkomitmen memberikan pengalaman rental mobil yang nyaman dan tanpa hambatan.'
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Mengapa Memilih Kami?</h2>
          <p className="text-secondary-600 max-w-3xl mx-auto text-lg">
            Prakasa Rent Car hadir sebagai solusi transportasi terpercaya di Surabaya dengan berbagai keunggulan untuk memenuhi kebutuhan Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-secondary-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;