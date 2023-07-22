// useCarousel.js
import { useState, useEffect } from 'react';

export function useCarousel(logements, id) {
  const [logement, setLogement] = useState(null);
  const [picturesLength, setPicturesLength] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const index = logements.findIndex(
      (logement) => logement.id === id.toString()
    );
    setLogement(logements[index]);
    setPicturesLength(logements[index].pictures.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextBanner = (currentBanner + 1) % picturesLength;
      setCurrentBanner(nextBanner);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentBanner, picturesLength]);

  return {
    logement,
    picturesLength,
    currentBanner,
  };
}
