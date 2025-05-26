import React from 'react';
import { motion } from 'framer-motion';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
  phone: string;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { name, year, image } = car;

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-primary-700 text-white px-3 py-1 text-sm font-medium">
          24 JAM
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-secondary-900">
          {name} {year && <span className="text-primary-700">{year}</span>}
        </h3>
      </div>
    </motion.div>
  );
};

export default CarCard;