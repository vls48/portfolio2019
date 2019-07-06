import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';
import ExpListItem from './ExpListItem';
import listdata from '../js/listdata.js';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;
const originalColors = ['#7653C1', '#168DCA', '#D41E29', '#5AC3DA', '#F7F8F9'];

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

  componentWillMount(){
    const fullpages = { ...this.state.fullpages };
    if (fullpages[0].opacity === "0"){
      fullpages[0].opacity = '1';
    }
  }
  componentWillUnmount(){
    console.log('unmount');
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
        if (fullpages[dkey].opacity === '0'){
          fullpages[dkey].opacity = '1';
        }

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
    const { sectionsColor } = this.state;
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
              {fullpages.map(({ text, desc, opacity, img, mywork, tech, id, accentColor, casestudy, demo }) => (
                  <ExpListItem
                        key={id}
                        index={id}
                        text={text}
                        desc={desc} 
                        opacity={opacity}
                        img={img}
                        mywork={mywork}
                        tech={tech} 
                        SEL={SEL}
                        accentColor={accentColor}
                        sectionsColor={sectionsColor[id]}
                        lastItem={fullpages.length-1}
                        demo={demo}
                        casestudy={casestudy}
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

  .fullpage-wrapper{
      pointer-events: none;
  }

  .wapper{
      margin: 15px;
  }

  .background{
    margin: auto;
    height: 100%;
    width: 100%;
    border-radius: 15px;
    background-size: cover;
    position: relative;   
    background-position: right center;
    overflow:auto;
  }

  .custom-section{
    overflow: auto;
    margin: 5px 0px 25px 0px;
    border-radius: 15px;
    position: relative;
    -webkit-box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.33);
    -moz-box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.33);
    box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.33);
  }
  @media (max-width: 26em) {
    padding: 0px 15px;
  }
`;


