import { NavLink } from 'react-router-dom';

function PageNotFOund() {
  return (
    <div className="error_404">
      <p className="error">404</p>
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <NavLink to="/">
        <span>Retour à la page d'accueil</span>
      </NavLink>
    </div>
  );
}

export default PageNotFOund;
