import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

const CarList: React.FC = () => {
  const [activeTransmission, setActiveTransmission] = useState<'automatic' | 'manual' | 'all'>('all');
  
  const filteredCars = activeTransmission === 'all' 
    ? cars 
    : cars.filter(car => car.transmission === activeTransmission);
  
  const automaticCars = cars.filter(car => car.transmission === 'automatic');
  const manualCars = cars.filter(car => car.transmission === 'manual');

  return (
    <section id="daftar-mobil" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Daftar Mobil</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Berbagai pilihan mobil berkualitas untuk memenuhi kebutuhan transportasi Anda. Tersedia mobil transmisi automatic dan manual.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTransmission === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-secondary-700 hover:bg-primary-50'
            }`}
            onClick={() => setActiveTransmission('all')}
          >
            Semua ({cars.length})
          </button>
          
          <button
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTransmission === 'automatic'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-secondary-700 hover:bg-primary-50'
            }`}
            onClick={() => setActiveTransmission('automatic')}
          >
            Automatic ({automaticCars.length})
          </button>
          
          <button
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTransmission === 'manual'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-secondary-700 hover:bg-primary-50'
            }`}
            onClick={() => setActiveTransmission('manual')}
          >
            Manual ({manualCars.length})
          </button>
        </div>

        <div className="car-grid">
          {filteredCars.map((car, index) => (
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
      </div>
    </section>
  );
};

export default CarList;