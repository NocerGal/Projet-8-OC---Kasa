import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import TopArrow from '../assets/icons/top-arrow.png';
import PageNotFOund from '../pages/PageNotFound';
import Carousel from './Carousel';

function HousingPresentations(props) {
  const logements = props.logements;
  const { id } = useParams();

  const [logement, setLogement] = useState(null);
  useEffect(function () {
    logements.forEach((logement) => {
      if (logement.id === id.toString()) {
        setLogement(logement);
      }
    });
  }, []);

  return (
    <main>
      {logement ? (
        <>
          <Carousel logements={logements} />
          <div className="descriptions">
            <div className="location-host">
              <div className="location">
                <h1>{logement.title}</h1>
                <h2>{logement.location}</h2>
              </div>
              <div className="host">
                <h2>{logement.host.name}</h2>
                <img src={logement.host.picture} alt="host picture" />
              </div>
            </div>
            <div className="tag-rating">
              <div className="tags">
                {logement.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div>{logement.rating}</div>
            </div>
            <div className="description-equipements">
              <div className="colapse-nav">
                <div className="details-title">
                  <h3>Description</h3>
                  <img src={TopArrow} alt="top-arrow" />
                </div>
                <div className="text">{logement.description}</div>
              </div>
              <div className="colapse-nav">
                <div className="details-title">
                  <h3>Équipements</h3>
                  <img src={TopArrow} alt="top-arrow" />
                </div>
                <div className="text">
                  <ul>
                    {logement.equipments.map((equipment) => (
                      <li key={equipment}>{equipment}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <PageNotFOund />
      )}
    </main>
  );
}

export default HousingPresentations;
