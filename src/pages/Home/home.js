import { useState } from 'react';
import HousingCards from '../../components/HousingCards';
import BackgroundBanner from '../../assets/img/homepage-background.png';
import Logements from '../../assets/mock-location.json';

export default function Home() {
  const [logements, setLogements] = useState(Logements);

  return (
    <main>
      <div className="banner">
        <img src={BackgroundBanner} alt="image background banner" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <HousingCards logements={logements} />
    </main>
  );
}
