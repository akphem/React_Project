
import React from 'react';
import Card from './Card';
import Button from './Button';
import Input from './Input';
import Section from './Section';

function SearchSection() {
  return (
    <Section className="bg-blue-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <h2 className="text-lg font-bold mb-2">The Best Platform for Car Rental</h2>
          <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
          <Button className="mt-4">Rental Car</Button>
        </Card>
        <Card>
          <h2 className="text-lg font-bold mb-2">Easy way to rent a car at a low price</h2>
          <p>Providing cheap car rental services and safe and comfortable facilities.</p>
          <Button className="mt-4">Rental Car</Button>
        </Card>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-2">
          <Input placeholder="Pick-Up Location" />
          <Input type="date" />
          <Input type="time" />
        </div>
        <Button>Swap</Button>
        <div className="flex space-x-2">
          <Input placeholder="Drop-Off Location" />
          <Input type="date" />
          <Input type="time" />
        </div>
      </div>
    </Section>
  );
}

export default SearchSection;
