import React from 'react';

function Mob({ identifier, health, name, height, width, render_image }) {
  return (
    <div className="mob">
      <h3 className="mob__title">{name}</h3>
      <p className="mob__field"><strong>ID:</strong> {identifier}</p>
      <p className="mob__field"><strong>Health:</strong> {health}</p>
      <p className="mob__field"><strong>Height:</strong> {height}</p>
      <p className="mob__field"><strong>Width:</strong> {width}</p>
      <img className="mob__image" src={render_image} alt={name} />
    </div>
  );
}

export default Mob;
