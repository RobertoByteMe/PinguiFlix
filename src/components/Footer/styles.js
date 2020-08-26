import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const FooterBase = styled.footer`
  background: var(--pinguiFrontend);
  border-top: 2px solid var(--pinguiPrimary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

// export const LogoFooter = styled.button`
//   padding-top: 32px;
//   padding-bottom: 32px;
//   height: 40px;
// `;
