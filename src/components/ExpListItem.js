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
            <div className="background" style={{backgroundImage: `url(${img})`}}>
                <div className="content-box" style={{backgroundColor: `${sectionsColor[0]}`}}>
                    <h1>{sectionsColor[0]}</h1>
                    <p>{desc}</p>
                    <h2>What I did: </h2>
                    <p>{mywork}</p>
                    <h2>What I used: </h2>
                    <p>{tech}</p>
                    <button type="button" value={text} onClick={this.handleClick}>View This Project</button>
                </div>
            </div>
        </div> 
    );
  }
}

export default ExpListItem;