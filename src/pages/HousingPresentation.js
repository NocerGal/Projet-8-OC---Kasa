import Logements from '../assets/mock-location.json';
import HousingPresentations from '../components/HousingPresentations';

function FichesLogements() {
  return <HousingPresentations logements={Logements} maxwidth={1240} />;
}

export default FichesLogements;
