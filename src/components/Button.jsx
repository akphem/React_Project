
import React from 'react';

function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`bg-blue-600 text-white py-2 px-4 rounded ${className}`}>
      {children}
    </button>
  );
}

export default Button;
