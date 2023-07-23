import Housings from '../assets/mock-location.json';
import HousingPresentations from '../components/HousingPresentations';

function FichesHousings() {
  return <HousingPresentations housings={Housings} maxwidth={1240} />;
}

export default FichesHousings;
