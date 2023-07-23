import { useNavigate } from 'react-router-dom';

function HousingsCards(props) {
  const housings = props.housings;
  const navigate = useNavigate();
  const goToHousing = (id) => {
    navigate(`/fiches-logements/${id}`);
  };

  return (
    <div className="card-container">
      {housings.map((housing) => (
        <div
          key={housing.id}
          className="card-housing"
          onClick={() => goToHousing(housing.id)}
        >
          <img src={housing.cover} alt={housing.title} />
          <span>{housing.title}</span>
        </div>
      ))}
    </div>
  );
}

export default HousingsCards;
