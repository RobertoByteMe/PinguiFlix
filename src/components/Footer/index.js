import React from 'react';
import { FooterBase } from './styles';
import logo from '../../assets/images/logo.svg';

function Footer() {
  return (
    <FooterBase>
      <a href="https://pingui.com.br/" target="_blank" rel="noopener noreferrer">
        <img className="Logo" src={logo} alt="Logo Pingui" />
      </a>
      <p>
        Apoiando o empreendedor a VENDER MAIS e de forma CONSISTENTE!
      </p>
    </FooterBase>
  );
}

export default Footer;
