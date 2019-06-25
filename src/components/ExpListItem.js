import React, { Component } from 'react';
//import { ViewButton } from './styles/ButtonStyles';
import styled from 'styled-components';

class ExpListItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick = (event) => {
      console.log("go to {this.props.} page");
  }

  render() {
    const { text, desc, opacity, img, SEL, tech, mywork, sectionsColor } = this.props;
    return (
        <div key={text} className={SEL} style={{opacity: `${opacity}`, transition: 'opacity 0.5s ease-out'}}>
            <ContentStyle className="background" style={{backgroundImage: `url(${img})`}} color={sectionsColor}>
            <h1>{text}</h1>
                <div className="content-box" >
                    <p>{desc}</p>
                    <h2>What I did: </h2>
                    <p>{mywork}</p>
                    <h2>What I used: </h2>
                    <p>{tech}</p>
                    <button type="button" value={text} onClick={this.handleClick}>View ❯❯</button>
                </div>
            </ContentStyle>
        </div> 
    );
  }
}

export default ExpListItem;

const ContentStyle = styled.div`
.content-box{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 85px 15px;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8), rgba(0,0,0,1));
  }

h1{
    position: absolute;
    top: -97px;
    
    font-size: 5.5rem;
    color: ${(props) => props.color};
    margin: 0px;
    font-family: 'Roboto',sans-serif;
    font-weight: 700; 
    -webkit-text-stroke-width: 3px;
    text-shadow: 0px 0px 4px rgba(57,62,97,0.33);
  }
h2{
      font-weight: 600;
  }
h2, p{
    float: left;
    max-width: 25%;
    padding-left: 25px;
    color: white;
    font-size: 1.2rem;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
  }
  button{
      float: right;
      width: 150px;
      height: 38px;
      border-color: white;
      border-radius: 5px;
      margin: 15px;
      color: white;
      font-size: 0.8rem;
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      font-weight: 400;
      background-color: rgba(255,255,255,0);
      transition: all 0.3s ease-in-out;
  }
  button:hover{
    font-weight: 600;
    border-color: ${(props) => props.color};
    color: ${(props) => props.color};
    background-color: rgba(255,255,255,0.95);
    transition: all 0.3s ease-in-out;
}
`;