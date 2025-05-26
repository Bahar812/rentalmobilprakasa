import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { NavItem } from '../types';
import { Car, Menu, X } from 'lucide-react';

const navItems: NavItem[] = [
  { id: 'beranda', label: 'Beranda', path: '/' },
  { id: 'daftar-mobil', label: 'Daftar Mobil', path: '/units' },
  { id: 'ketentuan', label: 'Ketentuan Sewa', path: '/' },
  { id: 'kontak', label: 'Kontak', path: '/' }
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink: React.FC<{ item: NavItem }> = ({ item }) => {
    if (item.path === location.pathname) {
      return (
        <ScrollLink
          to={item.id}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer font-medium transition-colors hover:text-primary-400 text-white"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </ScrollLink>
      );
    }

    return (
      <RouterLink
        to={item.path}
        className="font-medium transition-colors hover:text-primary-400 text-white"
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </RouterLink>
    );
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary-900/80 backdrop-blur-md shadow-md py-4' : 'bg-secondary-900/50 backdrop-blur-sm py-8'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex justify-between items-center">
        <RouterLink to="/" className="flex items-center">
          <Car className="h-8 w-8 text-primary-400 mr-2" />
          <h1 className="text-xl md:text-2xl font-bold text-white">
            Prakasa Rent Car
          </h1>
        </RouterLink>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink key={item.id} item={item} />
          ))}
        </nav>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-secondary-900/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-6 flex flex-col space-y-6">
            {navItems.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;