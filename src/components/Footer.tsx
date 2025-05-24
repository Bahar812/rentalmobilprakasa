import React from 'react';
import { Car, Clock, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Car className="h-6 w-6 text-primary-500 mr-2" />
              <h3 className="text-xl font-semibold">Prakasa Rent Car</h3>
            </div>
            <p className="text-secondary-300 mb-4">
              Layanan rental mobil terpercaya di Surabaya dengan armada terawat dan pelayanan profesional.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Informasi Kontak</h3>
            <div className="space-y-3 text-secondary-300">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mr-2 mt-1 flex-shrink-0" />
                <p>Jl. Sidosermo V No.26, Surabaya, Jawa Timur</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <p>082245756875</p>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary-500 mr-2 mt-1 flex-shrink-0" />
                <p>Buka Setiap Hari<br />06.00 - 22.00 WIB</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-secondary-300">
              <li>• Antar Jemput Unit</li>
              <li>• Rental Harian</li>
              <li>• Rental Bulanan</li>
              <li>• Rental Perjalanan Luar Kota</li>
              <li>• Rental Perjalanan Bisnis</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-700 mt-8 pt-6 text-center text-secondary-400">
          <p>&copy; {new Date().getFullYear()} Prakasa Rent Car Surabaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;