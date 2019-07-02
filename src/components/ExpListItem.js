import React, { Component } from 'react';
import ButtonStyle from './styles/ButtonStyle';
import Underline from './styles/Underline';
import H1 from './styles/H1';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class ExpListItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick = (event) => {
      console.log(event.currentTarget.value);
  }

  render() {
    const { text, desc, opacity, img, SEL, tech, mywork, sectionsColor, accentColor, index, lastItem, casestudy, demo } = this.props;


    let content;
    if (index == lastItem) {
    
      content = <div className="content-buttons">
                    <Link to='/more'><ButtonStyle color={sectionsColor} type="button">A Work In Progress</ButtonStyle></Link>
                </div>
    } else {
      content = <><div className="content-text-sec role">
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
                    {demo.exists ? (<Link to={{pathname: `${demo.link}`}}><ButtonStyle color={sectionsColor} type="button" >View Demo ❯❯</ButtonStyle></Link>) : ''}

                    {casestudy.exists ? (<Link to={{
                        pathname: `${text}`}}><ButtonStyle color={sectionsColor} type="button" value={casestudy.content}>View Case Study ❯❯</ButtonStyle></Link>) : ''}
                </div></>
            }

    return (
        <ContentStyle key={text} className={SEL} style={{opacity: `${opacity}`, transition: 'opacity 0.5s ease-out'}} color={sectionsColor} accentColor={accentColor}>  
            <div className="background" style={{backgroundImage: `url(${img})`}} >
                <div className={"content-box entry" + (index)}>    
                    <div className="content-text">
                        <H1 content={text}></H1> 
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
    background-color: rgba(0,0,0,0.15);
    height: 100%;
  }
.entry1{
    background-color: rgba(255,255,255,0.09);
    h1{
       -webkit-text-stroke-color: #168DCA; 
    }
    .content-text h2, p, h3{
        color: #313131;
        text-shadow: 0px 0px 4px #00000014;
    }
    .content-text p, h3{
        opacity: 0.8;
    }
    button{
        color: #168DCA;
        border-color: #168DCA;
    }
    button:hover{
        color:white;
    }
    @media (max-width: 84em) {
        .content-text h2, p, h3{
            color: white;
        }
    }
}
.entry2{
    h1{
        font-size: 6.75rem;
        padding-right: 0px;
    }
    @media (max-width: 84em) {
        h1{
            font-size: 4.8rem;
        }   
    }
}
.content-box:nth-child(2){
    background-color: rgba(0,0,0,0);
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
        -webkit-text-stroke-color: ${(props) => props.color};
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
        border-color: ${(props) => props.color};
        color: ${(props) => props.color};
    }
    button:hover{
        color: white;
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
  @media (max-width: 26em) {
    .content-text{
        bottom: 120px;
    }
    h1, .entry2 h1{
        font-size: 3.6rem;
        transition: all 0.3s ease-in-out;
    }
    button{
        width: 85%;
        height: 48px;
    }
  }
`;