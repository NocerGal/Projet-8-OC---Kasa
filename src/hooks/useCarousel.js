import { useState, useEffect } from 'react';

export function useCarousel(logements, id) {
  const [logement, setLogement] = useState(null);
  const [picsturesLength, setPicturesLength] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const index = logements.findIndex(
      (logement) => logement.id === id.toString()
    );
    setLogement(logements[index]);
    setPicturesLength(logements[index].pictures.length);
    setCurrentBanner(0);
  }, [logements, id]);

  function handleClick(i) {
    const nextBanner = (currentBanner + i + picsturesLength) % picsturesLength;
    setCurrentBanner(nextBanner);
  }

  return {
    logement,
    picsturesLength,
    currentBanner,
    handleClick,
  };
}
