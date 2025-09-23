import React from 'react';

function Block({ identifier, name, hardness, blast_resistance, flammable, render_image }) {
  return (
    <div className="block">
      <h3 className="block__title">{name}</h3>
      <p className="block__field"><strong>ID:</strong> {identifier}</p>
      <p className="block__field"><strong>Hardness:</strong> {hardness}</p>
      <p className="block__field"><strong>Blast Resistance:</strong> {blast_resistance}</p>
      <p className="block__field"><strong>Flammable:</strong> {flammable ? 'Yes' : 'No'}</p>
      <img className="block__image" src={render_image} alt={name} />
    </div>
  );
}

export default Block;

