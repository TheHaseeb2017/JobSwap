import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegForm from './Components/RegForm'
import Login from './Components/Login'
//import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
//import { Switch } from 'react-router';


function App() {
  return (
    <div>
      <BrowserRouter> 
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/regform" component={RegForm}></Route>

      </Switch>

      <ul>
        <li><Link to="/">
          <button>
            Login
          </button>
        </Link></li>
        <li><Link to="/regform">
          <button>
            Register
          </button>
        </Link></li>
      </ul>
      </BrowserRouter>

    </div>
  )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
export default App


