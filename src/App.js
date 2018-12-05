import React, { Component } from 'react';
//import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import Logo from './components/logo/logo';

import Login from './containers/login/login';
import Register from './containers/register/register';

class App extends Component {
  navbarList(){
    return (
      <ul style={{"float":"left"}}>
        <li>product color</li>
        <li>product price</li>
        <li>product size</li>
      </ul>
    )
  }
  render() {
    return (
      <div>
        <Route path='/' component={Login}/>
        <Route path='/register' component={Register}/>     
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <h1 className="search">React Proj search:</h1>
      //     {3>8?"a":"b"}
      //     {this.navbarList()}
      //     <div className="container">
      //       <div className="row">
      //         <div className="col-lg-6" style={{"float":"left"}}>
      //            <p>this is item1</p>
      //         </div>
      //         <div className="col-lg-6" style={{"float":"left"}}>
      //            <p>this is item2</p>
      //         </div>
      //       </div>
      //     </div>
      //   </header>
      // </div>
    );
  }
}

export default App;
