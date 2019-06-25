import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterStyle>
    <h1>Theme created by Victoria Stewart</h1>   
  </FooterStyle>
);

const FooterStyle = styled.footer`
  width: 100%;
  overflow: auto;
  postion: absolute;
  bottom: 0;
  h1{
    padding: 25px;
    font-size: 0.9rem;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
  }
  h1:hover{
      color: #ff0084;
      transition: color 0.3s ease-in;
  }
`;


export default Footer;