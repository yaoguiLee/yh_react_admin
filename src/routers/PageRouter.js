import React from 'react'
import { Route, Redirect, } from 'react-router-dom'
import { getCookie } from '../tools/Cookie'

const PageRouter = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) =>{
    return (
    getCookie() 
    ? <Component {...props}/> 
    : <Redirect to={{
      pathname: '/login',
      state: {from: props.location}
    }}/>
  )}
  }/>
)

export default PageRouter;