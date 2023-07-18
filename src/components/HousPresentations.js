import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LeftArrow from '../assets/icons/left-arrow.png';
import RightArrow from '../assets/icons/right-arrow.png';
import TopArrow from '../assets/icons/top-arrow.png';

function LogementPresentation(props) {
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

  function testConsole() {
    console.log(logement.host.name);
  }

  return (
    <main>
      {logement ? (
        <>
          <div className="caroussel">
            <img src={logement.pictures[0]} alt={logement.title} />
            <img src={LeftArrow} alt="left-arrow" />
            <img src={RightArrow} alt="right-arrow" />
            <span>1/4</span>
          </div>
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
        <p>Chargement en cours...</p>
      )}
    </main>
  );
}

export default LogementPresentation;
