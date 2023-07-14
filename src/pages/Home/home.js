import React, { FunctionComponent, useState } from 'react';
import Logement_Cards from '../../components/logement-card';
import Logements from '../../assets/mock-location.json';

export default function Home() {
  const [logements, setLogements] = useState(Logements);

  return (
    <main>
      <div className="banner">
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <Logement_Cards logements={logements} />
    </main>
  );
}
