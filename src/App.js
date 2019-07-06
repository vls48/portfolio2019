import React from 'react';
import Header from './components/Header';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from "styled-components";
import About from './components/About';
import Experience from './components/Experience';
import Souvinear from './components/Souvinear';
import IBX from './components/IBX';
import Work from './components/MoreWork';
import { AnimatedSwitch } from 'react-router-transition';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css';


function App({ location }) {
  return (
    <div className="App">
    <Header/>
    <Wrapper>
          <AnimatedSwitch 
            atEnter={{ offset: 100 }}
            atLeave={{ offset: 100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              transform: `translateX(${styles.offset}%)`,
            })}
            className="switch-wrapper"
          >
            <Route path="/" exact component={About} />
            <Route path="/about" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/experience#" component={Experience} /> 
            <Route path="/souvinear" component={Souvinear}/> 
            <Route path="/more" component={Work}/> 
            <Route path="/ibx" component={IBX} />    
          </AnimatedSwitch>
      </Wrapper>
    </div>
  );
}

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
