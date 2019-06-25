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
    const { text, desc, opacity, img, SEL, tech, mywork, sectionsColor, accentColor } = this.props;
    return (
        <ContentStyle key={text} className={SEL} style={{opacity: `${opacity}`, transition: 'opacity 0.5s ease-out'}} color={sectionsColor} accentColor={accentColor}>  
            <div className="background" style={{backgroundImage: `url(${img})`}} >
                <div className="content-box" > 

                    
                    <div className="content-text">
                    <h1>{text}</h1> 
                    <div className="content-text-sec"><h3>{desc}</h3></div>
                        
                        <div className="content-text-sec">
                            <p>{mywork}</p>
                            <h2>What I Worked On </h2>
                        </div>
                        <div className="content-text-sec">
                            <p>{tech}</p>
                            <h2>Tools I Used </h2>
                        </div>
                        
                    </div>
                    <button type="button" value={text} onClick={this.handleClick}>View ❯❯</button> 
            
                </div>
            </div>
        </ContentStyle> 
    );
  }
}

export default ExpListItem;

const ContentStyle = styled.div`
.content-box{
    position: absolute;
    bottom: 100px;
    width: 100%;
    padding-bottom: 85px;
  }

.content-text{
    display: flex;
    margin-bottom: 10px;
    background-color: ${(props) => props.accentColor};
    width: 100%;
}

.content-text-sec{
    display: inline-block;
    margin: 15px 15px 0px 0px;
    width: 33%;
    text-align: right;
    position: relative;
}

h1{
    z-index: 1;
    font-size: 5.8rem;
    color: white;
    text-align: center;
    margin: auto;
    width: 100%;
    font-family: 'Roboto',sans-serif;
    font-weight: 700;
    -webkit-text-stroke-width: 1px;
    text-shadow: 0px 0px 4px ${(props) => props.accentColor};
  }
h3{
    color: white;
    font-weight: 300;
    padding-left: 15px;
    font-size: 1.3rem;
    float: left;
}
h2{
      font-weight: 700;
      color: white;
      margin-top: 10px;
      font-size: 0.9rem;
      letter-spacing: 1px
      text-transform: uppercase;
      text-decoration: overline;
      position: absolute;
      right: 0;
      bottom: 0;
  }
 p{
    color: white;
    font-size: 1rem;
    margin: 0px;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    text-transform: capitalize;
    position: absolute;
    right: 0;
    bottom: 40px;
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
    background-color: ${(props) => props.color};
    transition: all 0.3s ease-in-out;
}
`;