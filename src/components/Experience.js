import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';
import ExpListItem from './ExpListItem';
import listdata from '../js/listdata.js';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;
const originalColors = ['#a98cc19e', '#add8e6bf', '#f01a21', '#55c3dc', '#dfe0e53d'];

const pluginWrapper = () => {
    /**
     * require('fullpage.js/vendors/scrolloverflow'); // Optional. When using scrollOverflow:true
     */
  };

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: listdata
    };
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
    let okey = origin.index;
    let dkey = destination.index;
    const fullpages = { ...this.state.fullpages };
    if (direction === "down"){
        console.log("scrolled down");
        fullpages[okey].opacity = '0';
        console.log(fullpages)
        //this.setState( {fullpages} );
    } else {
        console.log("scrolled up!");
        fullpages[dkey].opacity = '1';
        console.log(fullpages)
    }
  }

  handleChangeColors() {
    const newColors =
      this.state.sectionsColor[0] === 'yellow'
        ? [...originalColors]
        : ['yellow', 'blue', 'white', 'blue'];
    this.setState({
      sectionsColor: newColors,
    });
  }

  render() {
    const { fullpages } = this.state;
    return (
      <ExperienceStyle>
        <ReactFullpage
          debug /* Debug logging */
          navigation
          anchors={['experience#souvinear', 'experience#ibx', 'experience#bitepick', 'experience#obey', 'experience#design']}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          pluginWrapper={pluginWrapper}
          render={comp => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text, desc, opacity, img, mywork, tech }) => (
                  <ExpListItem
                    
                        text={text}
                        desc={desc}
                        opacity={opacity}
                        tech={tech}
                        mywork={mywork}
                        img={img}
                        SEL={SEL}
                        sectionsColor={this.state.sectionsColor}
                  />    
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </ExperienceStyle>
    );
  }
}

export default Experience;

const ExperienceStyle = styled.div`

  margin: auto;
  padding: 0px 65px;

  .wapper{
      margin: 15px;
  }

  .background{
    margin: auto;
    height: 97%;
    width: 98%;
    border-radius: 8px;
    background-size: cover;
  }

  .custom-section{
    overflow: auto;
    margin: 25px 0px;
    border-radius: 15px;
    position: relative;
    -webkit-box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.33);
    -moz-box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.33);
    box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.33);
  }

  .content-box{
    height: 100%;
    width: 25%;
  }

  h1{
    padding: 25px;
    font-size: 2rem;
    color: white;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
  }
  h2{font-weight: 600}
  h2, p, button{
    display: block;
    padding-left: 25px;
    color: white;
    font-size: 1.2rem;
    margin: 0px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }
`;


