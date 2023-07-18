import { useNavigate } from 'react-router-dom';

function LogementsCards(props) {
  const logements = props.logements;
  const navigate = useNavigate();
  const goToLogement = (id) => {
    navigate(`/fiches-logements/${id}`);
  };

  return (
    <div className="card-container">
      {logements.map((logement) => (
        <div
          key={logement.id}
          className="card-logement"
          onClick={() => goToLogement(logement.id)}
        >
          <img src={logement.cover} alt={logement.title} />
          <span>{logement.title}</span>
        </div>
      ))}
    </div>
  );
}

export default LogementsCards;
