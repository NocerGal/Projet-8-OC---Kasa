import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageNotFound from '../pages/PageNotFound';
import LeftArrow from '../assets/icons/left-arrow.png';
import RightArrow from '../assets/icons/right-arrow.png';

function Gallery(props) {
  const housings = props.housings;
  const maxwidth = props.maxwidth;
  const { id } = useParams();
  const [housing, setHousing] = useState(null);
  const [picturesLength, setPicturesLength] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const index = housings.findIndex((housing) => housing.id === id.toString());
    setHousing(housings[index]);
    setPicturesLength(housings[index].pictures.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextBanner = (currentBanner + 1) % picturesLength;
      setCurrentBanner(nextBanner);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentBanner, picturesLength]);

  function handleClick(i) {
    const nextBanner = (currentBanner + i + picturesLength) % picturesLength;
    setCurrentBanner(nextBanner);
  }

  const getSlideStyleAsBackground = (slideIndex) => ({
    backgroundImage: `url(${housing.pictures[slideIndex]})`,
    width: `${maxwidth}px`,
  });
  const widthRegardingLength = (childs) => ({
    width: `${childs * maxwidth}px`,
    transform: `translateX(${-(currentBanner * maxwidth)}px)`,
  });

  return (
    <div className="carousel">
      {housing ? (
        <>
          <div className="banners" style={widthRegardingLength(picturesLength)}>
            {housing.pictures.map((_, index) => (
              <div
                className="banner"
                alt={housing.title}
                style={getSlideStyleAsBackground(index)}
                key={index}
              ></div>
            ))}
          </div>

          <img
            src={LeftArrow}
            alt="left arrow"
            className="left arrow"
            onClick={() => handleClick(-1)}
          />
          <img
            src={RightArrow}
            alt="right arrow"
            className="right arrow"
            onClick={() => handleClick(1)}
          />
          <span key={housing.id}>
            {currentBanner + 1}/{picturesLength}
          </span>
        </>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}

export default Gallery;
