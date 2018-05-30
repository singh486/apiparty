import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'

import './App.css';
import Github from './Github'
import Nasa from './Nasa'
import Homework from './Homework'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3> Ain't no party like an API Party </h3>
          <h1> API Party </h1>
        </div>
        <ul className="navLinks">
          <li> 
            <NavLink to='/github'>Github API </NavLink>
          </li>
          <li>
            <NavLink to='/nasa'>Nasa API </NavLink>
          </li>
          <li>
            <NavLink to="/homework">Pixabay</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/github" component={Github} />
          <Route path="/nasa" component={Nasa} />
          <Route path="/homework" component={Homework} />
          <Route render={()=> <p> To get started, click one of the links </p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
