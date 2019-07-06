import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import H1 from './styles/H1';

const accentColor='#21B89A';
const baseColor='#747474';

class Header extends React.Component {
  render(){
  const { location, history } = this.props;
  return(
      <HeaderStyle path={location.pathname} accentColor={accentColor} baseColor={baseColor}>
        <div className="left">
        <div className="tooltip"><h3>i</h3>
          <span className="tooltiptext"><span role="img" aria-label="peace sign">✌️</span> built with react by:
          </span>
        </div>
        <div className="name">
                    <H1 color={baseColor} size="3.8rem;" content="VICTORIA STEWART"></H1>
                    <span> design / ux / code</span>
        </div>
        </div>

          <Link to="/experience"><h2>Experience</h2> </Link> 
          <Link to="/about"><h2>About</h2> </Link>   
    
      </HeaderStyle>
  );
  }
};

const HeaderStyle = styled.header`

  width: 100%;
  position: relative;
  z-index: 2;
  font-family: Roboto;
  overflow: ${(props) => props.path === "/about" ? 'initial' : 'auto'};

  .left{
    display: inline-flex;
  }
  .name{
     position: absolute;
      max-width: ${(props) => props.path === "/about" ? 'min-content' : '340px'};
      top: ${(props) => props.path === "/about" ? '20px' : '7px'};
      left: 47px;
      transition: 0.5s all ease-in-out;
    span{
        padding: 0px 0px 0px 30px;
        word-spacing: 5px;
        line-height: 2.2rem;
        color: ${(props) => props.path === "/about" ? props.accentColor : 'white'};
        font-weight: 700;
        letter-spacing: 0.045em;
        width: max-content;
        font-size: 1rem;
        transition: 0.5s color ease-in-out;
      }
  }
  h1{
      padding: 0px 0px 0px 25px;
      line-height: 3.5rem;
      font-size: ${(props) => props.path === "/about" ? '3.8rem' : '2rem'};
      -webkit-text-stroke-width: ${(props) => props.path === "/about" ? '1.5px' : '1px'};
      transition: all 0.5s ease-in-out;
    }

  h2{
    display: inline-block;
    float: right;
    padding: 25px;
    font-size: 1.1rem;
    margin: 0px;
    font-weight: 500;
  }
  a{
      color: rgb(60,60,60);
      text-decoration: none;
  }
  a:hover{
      color: #21B89A;
      transition: color 0.3s ease-in-out;
  }

  h3, .tooltiptext{
    font-size: 1rem;
    font-family: script;
    font-weight: 500;
    text-align: center;
    margin: -5px;
  }

  .tooltip {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: solid rgb(30,30,30) 1px;
    border-radius: 5px;
    padding: 5px;
    margin: 25px;
    transition: all 0.5s ease-in-out;
  }
  
  .tooltip .tooltiptext {
    opacity: 0;
    font-size: 0.8rem;
    width: 135px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    background-color: transparent;
    color: rgb(60,60,60);
    text-align: center;
    padding: 5px 5px;
    border-radius: 6px;
    top: -3px;
    left: 105%; 
    position: absolute;
    z-index: 1;
    margin-left: 15px;
    transition: 0.2s all ease-in-out;
  }

  .tooltip:hover ~ .name {
    left: 180px;
  }

  .tooltip:hover .tooltiptext {
    opacity: 1;
  }
  
  @media (max-width: 26em) {
    
    .tooltip .tooltiptext {
      width: 135px;
      transition: 0.3s all ease-in;
    }
`;


export default withRouter(Header);