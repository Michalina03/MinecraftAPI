import React, { useState, useEffect } from "react";
import Item from "./Item";

function Items() {
  const [items, setItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(24);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/items.json')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching items list:", error);
        setLoading(false);
      });
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + 24);
  };

  return (
    <div className="page__container">
      {loading ? (
        <p className="loader">Loading items...</p>
      ) : (
        <>
          {items.slice(0, visibleCount).map((item) => (
            <Item key={item.identifier} {...item} />
          ))}
          {visibleCount < items.length && (
            <button onClick={showMore}>Pokaż więcej itemów</button>
          )}
        </>
      )}
    </div>
  );
}

export default Items;
