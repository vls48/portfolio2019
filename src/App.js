import React from 'react';
import Header from './components/Header';
import { Route, withRouter, Switch } from 'react-router-dom';
import styled from "styled-components";
import About from './components/About';
import Experience from './components/Experience';
import Souvinear from './components/Souvinear';
import IBX from './components/IBX';
import Work from './components/MoreWork';
import './App.css';

function App({ location }) {
  return (
    <div className="App">
    <Header location={location === '/' ? "true" : "false"}/>
    <Wrapper>
          <Switch>
            <Route path="/" exact component={AboutComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/experience" component={ExperienceComponent} />
            <Route path="/experience#" component={ExperienceComponent} /> 
            <Route path="/souvinear" component={SouvinearComponent}/> 
            <Route path="/more" component={WorkComponent}/> 
            <Route path="/ibx" component={IBXComponent} />    
          </Switch>
      </Wrapper>
    </div>
  );
}

const AboutComponent = withRouter(props => <About {...props}/>);
const ExperienceComponent = withRouter(props => <Experience {...props}/>);
const SouvinearComponent = withRouter(props => <Souvinear {...props}/>);
const IBXComponent = withRouter(props => <IBX {...props}/>);
const WorkComponent = withRouter(props => <Work {...props}/>);

const Wrapper = styled.div`

position: relative;

.page-enter {
  opacity: 0;
  z-index: 1;
}

.switch-wrapper {
  position: relative;
}

.switch-wrapper > div {
  position: absolute;
} 
.page-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms ease-in;
}

.page-exit {
  opacity: 1;
}

.page-exit.fade-exit-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}
`;

export default withRouter(App);
