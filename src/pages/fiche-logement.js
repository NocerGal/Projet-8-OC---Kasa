import React, { FunctionComponent, useState } from 'react';
import Logements from '../assets/mock-location.json';
import Logement_Presentation from '../components/logement-presentation';

function FichesLogements() {
  const [logements, setLogements] = useState(Logements);

  return <Logement_Presentation logements={logements} />;
}

export default FichesLogements;
