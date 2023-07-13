function LogementsList(props) {
  const logements = props.logements;

  return (
    <div className="card-container">
      {logements.map((logement) => (
        <div key={logement.id} className="card-logement">
          <img src={logement.cover} alt={logement.title} />
          <span>{logement.title}</span>
        </div>
      ))}
    </div>
  );
}

export default LogementsList;
