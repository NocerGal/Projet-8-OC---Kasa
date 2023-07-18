import { useState } from 'react';
import Logements from '../assets/mock-location.json';
import HousingPresentations from '../components/HousPresentations';

function FichesLogements() {
  const [logements, setLogements] = useState(Logements);

  return <HousingPresentations logements={logements} />;
}

export default FichesLogements;
