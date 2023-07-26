import BackgroundBanner from '../assets/img/a-propos-background.png';
import Collapse from '../components/Collapse';

function AboutUs() {
  return (
    <main>
      <div className="banner aboutus">
        <img src={BackgroundBanner} alt="image background banner" />
      </div>
      <div className="colapses-container">
        <Collapse
          title={'Fiabilité'}
          text={
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
            </p>
          }
        />
        <Collapse
          title={'Respect'}
          text={
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          }
        />
        <Collapse
          title={'Service'}
          text={
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          }
        />
        <Collapse
          title={'Sécurité'}
          text={
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En faisant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          }
        />
      </div>
    </main>
  );
}

export default AboutUs;
