import React, { useState, useEffect } from 'react';
import Mob from "./Mob";

function Mobs() {
  const [mobs, setMobs] = useState([]);
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
    fetch('https://mcdata.nalo.dev/mob')
      .then((response) => response.json())
      .then(async (data) => {
        const identifiers = data.data;

        const detailPromises = identifiers.map(async (id) => {
          try {
            const res = await fetch(`https://mcdata.nalo.dev/mob/${id}`);
            const result = await res.json();
            const mob = result.data;

            const validImage = mob.render_image && (await imageExists(mob.render_image));
            return validImage ? mob : null;
          } catch {
            return null;
          }
        });

        const detailedMobs = await Promise.all(detailPromises);
        setMobs(detailedMobs.filter(Boolean));
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

