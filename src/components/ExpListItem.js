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


    let last;
    if (index === lastItem) {
      last = <button type="button" > last </button>;
    } else {
      last = <div>{lastItem} {index}</div>;
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
                        <div className="content-text-sec role">
                            <h2>My role </h2>
                            <p>{mywork}</p>
                        </div>
                        <div className="content-text-sec">
                            <h2>My tools </h2>
                            <p>{tech}</p>
                        </div>
                        <Underline color={sectionsColor} width={"80px"}>
                        </Underline>
                        <div className="content-buttons">
                            <button type="button" value={text} onClick={this.handleClick}>View Demo ❯❯</button> 
                            <button type="button" value={text} onClick={this.handleClick}>View Case Study ❯❯</button> 
                            {last}
                        </div>
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
    position: absolute;
    bottom: 110px;
  }

.content-text{
    width: 50%;
    height: 100%;
}

.content-text-sec{
    margin: 5px 15px 0px 0px;
}

.role{
    padding-top: 20px;
}
.content-buttons{
    padding-left: 45px;
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
}

h3{
    color: white;
    font-weight: 300;
    font-size: 1.2rem;
    margin: 0;
    padding-left: 45px;
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

  }
 p{
    color: white;
    max-width: 75%;
    word-spacing: 10px;
    font-size: 0.8rem;
    display: inline-block;
    margin: 0px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    text-transform: capitalize;
    padding-left: 45px;

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
`;