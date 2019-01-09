import React, { Component } from 'react'
import PageRouter from '../routers/PageRouter'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from '../components/LoadableComponent/index'
// import Home from ''
// import BasicForm from '../views/InputComponents/BasicForm'
// import UploadForm from '../views/InputComponents/UploadForm'

const Home = LoadableComponent(()=>import('../views/HomePage/index')) 
const BasicForm = LoadableComponent(()=>import('../views/InputComponents/BasicForm')) 
const UploadForm = LoadableComponent(()=>import('../views/InputComponents/UploadForm')) 

// const Home = function() { return () => import('../views/HomePage/index')}
// const BasicForm = function() { return () => import('../views/InputComponents/BasicForm')}
// const UploadForm = function() { return () => import('../views/InputComponents/UploadForm')}
@withRouter
class PageMain extends Component {
  render() {
    return (
      <div>
        <Switch>
          <PageRouter exact path='/home' component={Home}/>
          <PageRouter exact path='/home/entry/form/basic-form' component={BasicForm}/>
          <PageRouter exact path='/home/entry/upload' component={UploadForm}/>
          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default PageMain;
