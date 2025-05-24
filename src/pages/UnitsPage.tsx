import React from 'react';
import CarList from '../sections/CarList';

const UnitsPage: React.FC = () => {
  return (
    <div className="pt-24">
      <CarList showAll={true} />
    </div>
  );
};

export default UnitsPage;