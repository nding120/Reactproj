import React, { Component } from 'react';

import { Route,Switch } from 'react-router-dom';
import './App.css';

import Login from './containers/login/login';
import Register from './containers/register/register';
//import Search from './containers/search/search';
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
            <Route path='/art' component={this.Art}/>
            <Route path='/' exact component={Login}/>
            <Route path='/register'component={Register}/>
            {/* <Route parth='/search' component={Search}/> */}

        </Switch>    
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
