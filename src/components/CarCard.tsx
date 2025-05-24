import React from 'react';
import { motion } from 'framer-motion';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
  phone: string;
}

const colors = [
  'bg-blue-50 from-blue-500/10 to-blue-500/5',
  'bg-purple-50 from-purple-500/10 to-purple-500/5',
  'bg-amber-50 from-amber-500/10 to-amber-500/5',
  'bg-emerald-50 from-emerald-500/10 to-emerald-500/5',
  'bg-rose-50 from-rose-500/10 to-rose-500/5',
];

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { name, year, image } = car;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div 
      className={`relative overflow-hidden rounded-2xl ${randomColor} bg-gradient-to-br group`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Decorative shapes */}
      <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full bg-white/10 blur-2xl" />
      
      <div className="relative z-10">
        <div className="relative overflow-hidden h-48">
          <motion.img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute top-0 right-0 bg-primary-600/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-bl-2xl text-sm font-medium">
            24 JAM
          </div>
        </div>
        
        <div className="p-5">
          <motion.h3 
            className="text-lg font-semibold text-secondary-900"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {name} {year && <span className="text-primary-600">{year}</span>}
          </motion.h3>
          
          <motion.div 
            className="mt-4 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="h-1 w-12 bg-primary-600/30 rounded-full" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;