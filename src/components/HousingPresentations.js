import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import PageNotFOund from '../pages/PageNotFound';
import Carousel from './Carousel';
import Collapse from './Collapse';
import Rating from './Rating';

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
              <Rating rating={logement.rating} />
            </div>
            <div className="description-equipements">
              <Collapse
                title="Description"
                description={logement.description}
              />
              <Collapse title="Équipements" description={logement.equipments} />
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
