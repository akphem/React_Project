
import React from 'react';
import Input from './Input';
import Button from './Button';

function Header() {
  return (
    <header className="bg-white shadow p-4 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600 mb-2 md:mb-0">MORENT</h1>
      <Input type="text" placeholder="Search something here" className="w-full md:w-1/3 mb-2 md:mb-0" />
      <div className="flex items-center space-x-4">
        <Button className="text-blue-600 bg-transparent">Sign In</Button>
        <Button className="text-blue-600 bg-transparent">Sign Up</Button>
      </div>
    </header>
  );
}

export default Header;
