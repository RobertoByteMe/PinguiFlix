import React from 'react';
import { FooterBase, LogoFooter } from './styles';
import logo from '../../assets/images/logo.svg';

function Footer() {
  return (
    <FooterBase>
      <a href="https://pingui.com.br/">
        {/* <LogoFooter> */}
        <img className="Logo" src={logo} alt="Logo Pingui" />
        {/* </LogoFooter> */}
      </a>
      <p>
        Apoiando o empreendedor a VENDER MAIS e de forma CONSISTENTE!
      </p>
    </FooterBase>
  );
}

export default Footer;
