import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Menu.css';
import Button from '../Button';

// import ButtonLink from '../ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="Pingui Logo Branca" />
      </a>

      <Button className="ButtonLink" href="https://pingui.com.br/" target="_blank">
        Crie o seu!
      </Button>
    </nav>
  );
}

export default Menu;
