import React, { Component } from 'react';

import { Route,Switch } from 'react-router-dom';
import './App.css';

import Login from './containers/login/login';
import Register from './containers/register/register';

import AuthRoute from './components/authRoute/authRoute';

class App extends Component {
   Art=()=>{
     return <h1>Ning</h1>
  }
  render() {
    return (
      <div>
        <AuthRoute></AuthRoute>
        <Switch>
           {/* {this.state.isauthenticated?  <Route path='/art' component={this.Art}/> : null} */}
            <Route path='/' exact component={Login}/>
            <Route path='/register'component={Register}/>


        </Switch>    
      </div>
  
      // {this.state.isauthenticated? 这个是网页的auth gaurd，如果true，才可以进入art页面
    );
  }
}

export default App;
