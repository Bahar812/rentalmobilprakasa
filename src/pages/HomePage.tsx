import React from 'react';
import Hero from '../sections/Hero';
import Benefits from '../sections/Benefits';
import FeaturedCars from '../sections/FeaturedCars';
import Testimonials from '../sections/Testimonials';
import RentalTerms from '../sections/RentalTerms';
import Contact from '../sections/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <FeaturedCars />
      <Testimonials />
      <RentalTerms />
      <Contact />
    </>
  );
};

export default HomePage;