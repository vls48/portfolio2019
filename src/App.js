import React from 'react';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/experience#" component={Experience} />  
      </Switch>
    </div>
  );
}

export default App;
