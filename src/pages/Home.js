import HousingCards from '../components/HousingCards';
import backgroundBanner from '../assets/img/homepage-background.png';
import housings from '../assets/mock-location.json';

export default function Home() {
  return (
    <main>
      <div className="banner">
        <img src={backgroundBanner} alt="image background banner" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <HousingCards housings={housings} />
    </main>
  );
}
