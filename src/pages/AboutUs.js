import BackgroundBanner from '../assets/img/a-propos-background.png';
import TopArrow from '../assets/icons/top-arrow.png';
import { useState } from 'react';

function AboutUs() {
  const [selected, setSelected] = useState(null);

  const toggle = () => {
    if (selected === 'selected') {
      return setSelected(null);
    }
    setSelected('selected');
  };

  return (
    <main>
      <div className="banner">
        <img src={BackgroundBanner} alt="image background banner" />
      </div>
      <div className="colapses-container">
        {
          <div className="colapse-nav">
            <div className="details-title" onClick={toggle}>
              <h3>Fiabilité</h3>
              <img
                src={TopArrow}
                alt="top-arrow"
                className={
                  selected === 'selected' ? 'bottom-arrow' : 'top-arrow'
                }
              />
            </div>
            <div
              className={selected === 'selected' ? 'text display' : 'text hide'}
            >
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
              </p>
            </div>
          </div>
        }

        <div className="colapse-nav">
          <div className="details-title">
            <h3>Respect</h3>
            <img src={TopArrow} alt="top-arrow" />
          </div>
          <div className="text">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </div>
        </div>
        <div className="colapse-nav">
          <div className="details-title">
            <h3>Service</h3>
            <img src={TopArrow} alt="top-arrow" />
          </div>
          <div className="text">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </div>
        </div>
        <div className="colapse-nav">
          <div className="details-title">
            <h3>Sécurité</h3>
            <img src={TopArrow} alt="top-arrow" />
          </div>
          <div className="text">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En faisant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
