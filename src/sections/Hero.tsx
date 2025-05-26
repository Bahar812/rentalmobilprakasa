import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section 
      id="beranda" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-secondary-900 to-secondary-800 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Car rental background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container relative z-10 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Rental Mobil <span className="text-primary-700">Premium</span> di Surabaya
            </h1>
            <p className="text-lg text-secondary-200 mb-8">
              Berbagai pilihan mobil berkualitas dengan harga terjangkau untuk kebutuhan transportasi Anda di Surabaya dan sekitarnya.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="daftar-mobil"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.button 
                  className="btn bg-primary-700 text-white hover:bg-primary-800 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Lihat Daftar Mobil
                </motion.button>
              </Link>
              
              <a 
                href="https://api.whatsapp.com/send?phone=082245756875&text=Halo%2C%20saya%20tertarik%20untuk%20menyewa%20mobil%20di%20Prakasa%20Rent%20Car.%20Bisa%20minta%20informasi%20lebih%20lanjut%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button 
                  className="btn btn-outline text-white border-white hover:bg-white/10 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hubungi Kami
                </motion.button>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Car rental hero" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Brand Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm py-8 overflow-hidden">
        <div className="flex justify-center items-center gap-12 animate-marquee">
          <motion.div 
            className="flex gap-12 items-center"
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <img src="https://www.car-logos.org/wp-content/uploads/2011/09/toyota.png" alt="Toyota" className="h-12 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://www.car-logos.org/wp-content/uploads/2011/09/honda.png" alt="Honda" className="h-12 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://www.car-logos.org/wp-content/uploads/2011/09/mitsubishi.png" alt="Mitsubishi" className="h-12 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://www.car-logos.org/wp-content/uploads/2011/09/nissan.png" alt="Nissan" className="h-12 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://www.car-logos.org/wp-content/uploads/2011/09/hyundai.png" alt="Hyundai" className="h-12 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://www.car-logos.org/wp-content/uploads/2011/09/suzuki.png" alt="Suzuki" className="h-12 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;