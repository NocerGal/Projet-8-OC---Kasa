import { useState } from 'react';
import Logements from '../assets/mock-location.json';
import HousingPresentations from '../components/HousingPresentations';

function FichesLogements() {
  return <HousingPresentations logements={Logements} />;
}

export default FichesLogements;
