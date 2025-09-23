import React from "react";

function Item({ identifier, name, inventory_image, rarity_id, renewable, stack_size }) {
  return (
    <div className="item">
      <h3 className="item__title">{name}</h3>
      <p className="item__field"><strong>ID:</strong> {identifier}</p>
      <p className="item__field"><strong>Stack size:</strong> {stack_size}</p>
      <p className="item__field"><strong>Rarity:</strong> {rarity_id}</p>
      <p className="item__field"><strong>Renewable:</strong> {renewable ? "Yes" : "No"}</p>
      <img className="item__image" src={inventory_image} alt={name} />
    </div>
  );
}

export default Item;

