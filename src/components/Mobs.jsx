import React, { useState, useEffect } from 'react';
import Mob from "./Mob";

function Mobs() {
  const [mobs, setMobs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(24);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/mobs.json')
      .then(res => res.json())
      .then(data => {
        setMobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching mob list:", error);
        setLoading(false);
      });
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + 24);
  };

  return (
    <div className="page__container">
      {loading ? (
        <p className="loader"> Loading mobs...</p>
      ) : (
        <>
          {mobs.slice(0, visibleCount).map((mob) => (
            <Mob key={mob.identifier} {...mob} />
          ))}
          {visibleCount < mobs.length && (
            <button onClick={showMore}>Pokaż więcej mobów</button>
          )}
        </>
      )}
    </div>
  );
}

export default Mobs;

