
import React from 'react';
import Card from './Card';
import Section from './Section';

const cars = [
  { id: 1, name: 'Koenigsegg', type: 'Sport', price: 99, img: 'https://placeimg.com/400/225/car' },
  { id: 2, name: 'Nissan GT - R', type: 'Sport', price: 80, img: 'https://placeimg.com/400/225/car' },
  { id: 3, name: 'Rolls - Royce', type: 'Sedan', price: 96, img: 'https://placeimg.com/400/225/car' },
  { id: 4, name: 'Nissan GT - R', type: 'Sport', price: 80, img: 'https://placeimg.com/400/225/car' },
  { id: 5, name: 'All New Rush', type: 'SUV', price: 72, img: 'https://placeimg.com/400/225/car' },
  { id: 6, name: 'CR - V', type: 'SUV', price: 80, img: 'https://placeimg.com/400/225/car' },
  { id: 7, name: 'All New Terios', type: 'SUV', price: 74, img: 'https://placeimg.com/400/225/car' },
  { id: 8, name: 'MG ZX Exclusive', type: 'Hatchback', price: 76, img: 'https://placeimg.com/400/225/car' },
];

function CarList() {
  return (
    <Section title="Popular Cars">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </Section>
  );
}

export default CarList;
