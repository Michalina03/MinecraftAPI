import React, { useState, useEffect } from "react";
import Item from "./Item";

function Items() {
  const [items, setItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(24);
  const [loading, setLoading] = useState(true);

  const imageExists = async (url) => {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      return res.ok;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    fetch('https://mcdata.nalo.dev/item')
      .then((response) => response.json())
      .then(async (data) => {
        const identifiers = data.data;

        const detailPromises = identifiers.map(async (id) => {
          try {
            const res = await fetch(`https://mcdata.nalo.dev/item/${id}`);
            const result = await res.json();
            const item = result.data;

            const validImage = item.inventory_image && (await imageExists(item.inventory_image));
            return validImage ? item : null;
          } catch {
            return null;
          }
        });

        const detailedItems = await Promise.all(detailPromises);
        setItems(detailedItems.filter(Boolean));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching item list:", error);
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

