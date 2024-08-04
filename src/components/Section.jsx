
import React from 'react';

function Section({ title, children, className }) {
  return (
    <section className={`p-4 ${className}`}>
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      {children}
    </section>
  );
}

export default Section;
