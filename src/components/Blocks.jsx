import React, { useState, useEffect } from 'react';
import Block from './Block';

function Blocks() {
  const [blocks, setBlocks] = useState([]);
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
    fetch('https://mcdata.nalo.dev/block')
      .then((response) => response.json())
      .then(async (data) => {
        const identifiers = data.data;

        const detailPromises = identifiers.map(async (id) => {
          try {
            const res = await fetch(`https://mcdata.nalo.dev/block/${id}`);
            const result = await res.json();
            const block = result.data;

            const validImage = block.render_image && (await imageExists(block.render_image));
            return validImage ? block : null;
          } catch {
            return null;
          }
        });

        const detailedBlocks = await Promise.all(detailPromises);
        setBlocks(detailedBlocks.filter(Boolean));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching block list:", error);
        setLoading(false);
      });
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + 24);
  };

  return (
    <div className="page__container">
      {loading ? (
        <p className="loader">Loading blocks...</p>
      ) : (
        <>
          {blocks.slice(0, visibleCount).map((block) => (
            <Block key={block.identifier} {...block} />
          ))}
          {visibleCount < blocks.length && (
            <button onClick={showMore}>Pokaż więcej bloków</button>
          )}
        </>
      )}
    </div>
  );
}

export default Blocks;


