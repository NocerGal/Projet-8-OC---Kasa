import React from 'react';
import { NavLink } from 'react-router-dom';
import LOGO_FOOTER from '../../assets/LOGO-footer.svg';

function Footer() {
  return (
    <footer>
      <NavLink to="/">
        <img src={LOGO_FOOTER} alt="logo de l'entreprise KASA" />
      </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
