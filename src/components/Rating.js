import React from 'react';
import { useState, useEffect } from 'react';
import redStarImage from '../assets/icons/red-star.svg';
import greyStarImage from '../assets/icons/grey-star.svg';

function fullFillRating(rating) {
  const qtyStars = 5;
  const emptyStars = qtyStars - rating;
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<img key={i} src={redStarImage} alt="Star" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<img key={rating + i} src={greyStarImage} alt="Star" />);
  }

  return stars;
}

function Rating(props) {
  const [rating, setRating] = useState(null);
  useEffect(function () {
    setRating(props.rating);
  }, []);

  return <div className="rating">{fullFillRating(rating)}</div>;
}

export default Rating;
