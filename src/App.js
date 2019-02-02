import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/about' component = {About} />
          <Route exact path = '/projects' component = {Projects} />
        </Switch>
      </div>
    );
  }
}

export default App;
