import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CreditCard, AlertTriangle, ShieldCheck } from 'lucide-react';

const RentalTerms: React.FC = () => {
  return (
    <section id="ketentuan" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ketentuan Sewa</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Berikut adalah persyaratan dan ketentuan yang berlaku saat menyewa mobil di Prakasa Rent Car.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-6"
          >
            <div className="flex items-start mb-4">
              <Clock className="h-6 w-6 text-primary-600 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Jam Operasional</h3>
                <p className="text-secondary-700">
                  Prakasa Rent Car buka setiap hari dari pukul 06.00 – 22.00 WIB. 
                  Pengambilan dan pengembalian mobil hanya dapat dilakukan selama jam operasional.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-6"
          >
            <div className="flex items-start mb-4">
              <ShieldCheck className="h-6 w-6 text-primary-600 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Verifikasi Data</h3>
                <p className="text-secondary-700">
                  Wajib melakukan verifikasi data melalui WhatsApp: 082245756875 
                  sebelum proses pemesanan mobil dapat diproses.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card p-6"
          >
            <div className="flex items-start mb-4">
              <CreditCard className="h-6 w-6 text-primary-600 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Pembayaran</h3>
                <ul className="text-secondary-700 space-y-2">
                  <li>• DP minimal Rp150.000 ke BCA an. Bahrudin - 7880547709</li>
                  <li>• Pembatalan = DP hangus</li>
                  <li>• Pelunasan dilakukan saat unit diterima</li>
                  <li>• Ada biaya antar-jemput unit</li>
                  <li>• Tambahan biaya jika ke luar provinsi Jawa Timur</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card p-6"
          >
            <div className="flex items-start mb-4">
              <AlertTriangle className="h-6 w-6 text-primary-600 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Denda & Keterlambatan</h3>
                <ul className="text-secondary-700 space-y-2">
                  <li>• Denda jika unit rusak/tidak sesuai saat kembali</li>
                  <li>• Keterlambatan: 3 jam pertama Rp30.000/jam</li>
                  <li>• Lebih dari 3 jam dihitung 1 hari sewa</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 bg-primary-50 p-6 rounded-xl border border-primary-100"
        >
          <p className="text-center text-secondary-800">
            Untuk informasi lebih lanjut mengenai ketentuan sewa, silakan hubungi kami melalui WhatsApp di 082245756875.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RentalTerms;