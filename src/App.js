import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import PageA from './pages/PageA'
import PageB from './pages/PageB'
class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/pagea">Page A</Link></li>
          <li><Link to="/pageb">Page B</Link></li>
        </ul>
        <Switch>
          <Route path="/pagea" component={ PageA }></Route>
          <Route path="/pageb" component={ PageB }></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
