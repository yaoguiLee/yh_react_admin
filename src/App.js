import React, { Component } from 'react';
import './App.css'
import {Route,Switch} from 'react-router-dom'
import LoginForm from './views/Login/index';
// import PageMain from './routers/PageMain'
import Index from './views/LayoutView'
import PageRouter from './routers/PageRouter'
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginForm}></Route>
        <PageRouter path="/" component={Index} />
      </Switch> 
    );
  }
}

export default App;
