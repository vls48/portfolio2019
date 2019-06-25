import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => (
  <HeaderStyle>
    <Link to="/experience"><h1>Experience</h1> </Link> 
    <Link to="/about"><h1>About</h1> </Link>       
  </HeaderStyle>
);

const HeaderStyle = styled.header`
  width: 100%;
  overflow: auto;
  postion: absolute;
  h1{
    display: inline-block;
    float: right;
    padding: 25px;
    font-size: 1.1rem;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
  }
  a{
      color: rgb(60,60,60);
      text-decoration: none;
  }
  a:hover{
      color: rgb(230,160,60);
      transition: color 0.3s ease-in;
  }
`;


export default Header;