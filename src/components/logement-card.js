function LogementsList(props) {
  const logements = props.logements;

  return (
    <div className="card-container">
      {logements.map((logement) => (
        <div key={logement.id} className="card-logement">
          <h2>{logement.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default LogementsList;
