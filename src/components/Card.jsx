
import React from 'react';
import Card from './Card';
import Button from './Button';

function CarCard({ car }) {
  return (
    <Card>
      <img src={car.img} alt={car.name} className="w-full h-32 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{car.name}</h3>
      <p className="text-gray-500">{car.type}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-lg font-bold">${car.price}.00/day</span>
        <Button>Rent Now</Button>
      </div>
    </Card>
  );
}

export default CarCard;
