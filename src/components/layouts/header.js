import React from 'react';
import { NavLink } from 'react-router-dom';
import LOGO from '../../assets/LOGO.svg';

function Header() {
  return (
    <header>
      <div>
        <NavLink to="/">
          <img id="Logo" src={LOGO} alt="logo de l'entreprise KASA" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/a-propos">
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
