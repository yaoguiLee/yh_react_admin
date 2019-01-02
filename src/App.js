import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import login from './static/login.jpg'
import './styles/app.css'
class App extends Component {
  render() {
    const loginImage = {background: `url(${login})` }
    return (
      <div className="app_container">
        <h1 style={{ color: '#fff'}}>App</h1>
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
