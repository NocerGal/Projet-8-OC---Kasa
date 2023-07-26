import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageNotFOund from '../pages/PageNotFound';
import Gallery from './Gallery';
import CollapseDescription from './Collapse';
import Rating from './Rating';

function HousingPresentations(props) {
  const housings = props.housings;
  const maxwidth = props.maxwidth;
  const { id } = useParams();

  const [housing, setHousing] = useState(null);
  useEffect(function () {
    housings.forEach((housing) => {
      if (housing.id === id.toString()) {
        setHousing(housing);
      }
    });
  }, []);

  return (
    <main>
      {housing ? (
        <>
          <Gallery housings={housings} maxwidth={maxwidth} />
          <div className="descriptions">
            <div className="location-tags">
              <div className="location">
                <h1>{housing.title}</h1>
                <h2>{housing.location}</h2>
              </div>
              <div className="tags">
                {housing.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="host-rating">
              <div className="host">
                <h2>{housing.host.name}</h2>
                <img src={housing.host.picture} alt="host picture" />
              </div>
              <Rating rating={housing.rating} />
            </div>
          </div>
          <div className="description-equipements">
            <CollapseDescription
              title="Description"
              text={housing.description}
            />
            <CollapseDescription
              title="Équipements"
              text={
                <ul>
                  {Array.from(housing.equipments).map((equipement, i) => (
                    <li key={i}>{equipement}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </>
      ) : (
        <PageNotFOund />
      )}
    </main>
  );
}

export default HousingPresentations;
