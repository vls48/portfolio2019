import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => (
  <HeaderStyle>
    <div class="tooltip"><h2>i</h2>
      <span class="tooltiptext">site built with react</span>
    </div>
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

  h2, .tooltiptext{
    font-size: 1rem;
    font-family: script;
    font-weight: 500;
    text-align: center;
  }

  h2{margin: -5px;}

  .tooltip {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: solid rgb(30,30,30) 1px;
    border-radius: 5px;
    padding: 5px;
    margin: 25px;
  }
  
  .tooltip .tooltiptext {
    opacity: 0;
    font-size: 0.8rem;
    width: 135px;
    background-color: transparent;
    border: 1px solid rgb(60,60,60);
    color: rgb(60,60,60);
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    top: -5px;
    left: 105%; 
    position: absolute;
    z-index: 1;
    transition: 0.3s all ease-in;
    margin-left: 15px;
  }

  .tooltip:hover .tooltiptext {
    opacity: 1;
  }
  .tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    top: 50%;
    right: 100%; /* To the left of the tooltip */
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent black transparent transparent;
  }
`;


export default Header;