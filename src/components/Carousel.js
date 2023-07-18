import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCarousel } from '../hooks/useCarousel';
import LeftArrow from '../assets/icons/left-arrow.png';
import RightArrow from '../assets/icons/right-arrow.png';

function Carousel(props) {
  const logements = props.logements;
  const { id } = useParams();

  const { logement, picsturesLength, currentBanner, handleClick } = useCarousel(
    logements,
    id
  );

  return (
    <div className="carousel">
      {logement ? (
        <>
          <img src={logement.pictures[currentBanner]} alt={logement.title} />
          <img
            src={LeftArrow}
            alt="left-arrow"
            className="left-arrow"
            onClick={() => handleClick(-1)}
          />
          <img
            src={RightArrow}
            alt="right-arrow"
            className="right-arrow"
            onClick={() => handleClick(1)}
          />
          <span key={logement.id}>
            {currentBanner + 1}/{picsturesLength}
          </span>
        </>
      ) : (
        <p>ok</p>
      )}
    </div>
  );
}

export default Carousel;
