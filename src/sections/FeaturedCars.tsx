import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

const FeaturedCars: React.FC = () => {
  const featuredCars = cars.slice(0, 8);

  return (
    <section id="daftar-mobil" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unit Unggulan Kami</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto mb-8">
            Pilihan mobil berkualitas dengan kondisi prima untuk memenuhi kebutuhan transportasi Anda.
          </p>
        </motion.div>

        <div className="car-grid mb-12">
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CarCard car={car} phone="082245756875" />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/units"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            Lihat Semua Unit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;