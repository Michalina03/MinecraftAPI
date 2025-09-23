import React, { useState, useEffect } from 'react';
import Block from './Block';

function Blocks() {
  const [blocks, setBlocks] = useState([]);
  const [visibleCount, setVisibleCount] = useState(24);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/blocks.json')
      .then((res) => res.json())
      .then((data) => {
        setBlocks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blocks list:", error);
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
