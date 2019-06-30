import React, { Component } from 'react';
//import { ViewButton } from './styles/ButtonStyles';
import Underline from './styles/Underline';
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
    const { text, desc, opacity, img, SEL, tech, mywork, sectionsColor, accentColor, index, lastItem } = this.props;


    let content;
    if (index == lastItem) {
      content = null;
    } else {
      content = 
      <><div className="content-text-sec role">
            <h2>My role </h2>
            <p>{mywork}</p>
        </div>
        <div className="content-text-sec">
            <h2>My tools </h2>
            <p>{tech}</p>
        </div>
        <Underline className="secondDivider" color={sectionsColor} width={"80px"}>
        </Underline>
        <div className="content-buttons">
            <button type="button" value={text} onClick={this.handleClick}>View Demo ❯❯</button> 
            <button type="button" value={text} onClick={this.handleClick}>View Case Study ❯❯</button> 
        </div></>
    }

    return (
        <ContentStyle key={text} className={SEL} style={{opacity: `${opacity}`, transition: 'opacity 0.5s ease-out'}} color={sectionsColor} accentColor={accentColor}>  
            <div className="background" style={{backgroundImage: `url(${img})`}} >
                <div className="content-box">    
                    <div className="content-text">
                        <h1>{text}</h1> 
                        <h3>{desc}</h3>
                        <Underline color={sectionsColor} width={"45px"}>
                        </Underline>
                        {content}
                    </div>
                </div>
            </div>
        </ContentStyle> 
    );
  }
}

export default ExpListItem;

const ContentStyle = styled.div`
.content-box{
    width: 100%;
    background-color: rgba(0,0,0,0.25);
    height: 100%;
  }

.content-text{
    width: 50%;
    position: absolute;
    bottom: 100px;
}

.content-text-sec{
    margin: 5px 15px 0px 0px;
}

.role{
    padding-top: 20px;
}
.content-buttons{
    padding-left: 45px;
    pointer-events: initial;
}

h1{
    z-index: 1;
    font-size: 7.5rem;
    color: transparent;
    margin: 0;
    padding: 45px 45px 10px 45px;
    width: 100%;
    font-family: 'Roboto',sans-serif;
    font-weight: 700;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
    letter-spacing: 0.025em;
}

h3{
    color: white;
    font-weight: 300;
    font-size: 1.2rem;
    margin: 0;
    padding-left: 45px;
    text-shadow: 0px 0px 5px #0000005e;
}
h2{
      font-weight: 700;
      color: white;
      margin: 0px;
      font-size: 0.9rem;
      letter-spacing: 1px;
      display: inline-block;
      text-transform: uppercase;
      padding: 3px 0px 0px 45px;
      width: 130px;
      text-shadow: 0px 0px 5px #0000005e;

  }
 p{
    color: white;
    max-width: 75%;
    word-spacing: 10px;
    font-size: 0.8rem;
    display: inline-block;
    margin: 0px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    text-transform: capitalize;
    padding-left: 45px;
    opacity: 0.75;
    text-shadow: 0px 0px 5px #0000005e;

  }
  button{
      width: 165px;
      height: 38px;
      border-color: white;
      border-radius: 5px;
      margin-right: 15px;
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
    background-color: ${(props) => props.color};
    transition: all 0.3s ease-in-out;
}

@media (max-width: 84em) {
    .content-box{
        background-color: rgba(0,0,0,0.65);
        transition: all 0.3s ease-in;
    }
  }
  @media (max-width: 64em) {
    .content-box{
        background-color: rgba(0,0,0,0.80);
        transition: all 0.3s ease-in;
    }
    .content-text{
        width: 100%;
        text-align: center;
        transition: all 0.3s ease-in;
    }
    .content-text-sec{
        margin: 10px 15px;
    }
    h2{
        width: 100%;
        padding: 0;
    }
    h1{
        font-size: 6rem;
        padding: 0px 0px 5px 0px;
    }
    .divider{
        width: 100%;
        padding: 0px;
        height: 1px;
        margin: 25px 0px;
        transition: all 0.5s ease-in;
    }
    .divider ~ .divider {
        opacity: 0;
        display: none;
        transition: all 0.3s ease-in;
    }
    h3{
        padding-right: 45px;
        font-size: 1rem;
        transition: all 0.3s ease-in-out;
        line-height: 1.3rem;
    }
    button{
        width: 225px;
        margin: 15px 15px 0px 15px;
    }
    .content-buttons{
        padding-left: 0;
        margin-top: 30px;
    }
    p{
        max-width: 90%;
        line-height: 1.3rem;
        padding: 5px 0px;
        opacity: 0.65;

    }
  }
  @media (max-width: 54em) {
    h1{
        font-size: 5rem;
        transition: all 0.3s ease-in-out;
    }
  }
  @media (max-width: 36em) {
    .content-text{
        bottom: 120px;
    }
    h1{
        font-size: 4rem;
        transition: all 0.3s ease-in-out;
    }
    button{
        width: 90%;
        height: 48px;
    }
  }
`;