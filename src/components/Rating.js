import React from 'react';
import { useState, useEffect } from 'react';
import redStarImage from '../assets/icons/red-star.svg';
import greyStarImage from '../assets/icons/grey-star.svg';

function fullFillRating(rating) {
  return [0, 1, 2, 3, 4].map((i) => {
    return (
      <img key={i} src={i < rating ? redStarImage : greyStarImage} alt="Star" />
    );
  });
}

function Rating(props) {
  const [rating, setRating] = useState(null);
  useEffect(function () {
    setRating(props.rating);
  }, []);

  return <div className="rating">{fullFillRating(rating)}</div>;
}

export default Rating;
