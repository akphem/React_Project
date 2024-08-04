
import React from 'react';

function Input({ type = "text", placeholder, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border rounded p-2 ${className}`}
    />
  );
}

export default Input;
