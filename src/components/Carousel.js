// Carousel.jsx
import { useParams } from 'react-router-dom';
import { useCarousel } from '../hooks/useCarousel';
import PageNotFound from '../pages/PageNotFound';
import LeftArrow from '../assets/icons/left-arrow.png';
import RightArrow from '../assets/icons/right-arrow.png';

function handleClick(i) {
  const nextBanner = (currentBanner + i + picturesLength) % picturesLength;
  setCurrentBanner(nextBanner);
}

function Carousel(props) {
  const logements = props.logements;
  const { id } = useParams();
  const { logement, picturesLength, currentBanner } = useCarousel(
    logements,
    id
  );

  const getSlideStyleAsBackground = (slideIndex) => ({
    backgroundImage: `url(${logement.pictures[slideIndex]})`,
    width: `${1240}px`,
  });
  const widthRegardingLength = (childs) => ({
    width: `${childs * 1240}px`,
    transform: `translateX(${-(currentBanner * 1240)}px)`,
  });

  return (
    <div className="carousel">
      {logement ? (
        <>
          <div className="banners" style={widthRegardingLength(picturesLength)}>
            {logement.pictures.map((_, index) => (
              <div
                className="banner"
                alt={logement.title}
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
          <span key={logement.id}>
            {currentBanner + 1}/{picturesLength}
          </span>
        </>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
}

export default Carousel;
