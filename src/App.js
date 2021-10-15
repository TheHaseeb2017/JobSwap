import React from 'react';
import logo from './logo.svg';
import './Components/CSS/todo.css';
import RegForm from './Components/RegForm'
import Login from './Components/Login'
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import searchBYZIP from './Components/searchBYZIP';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/regform' component={RegForm} />
        <Route path='/login' component={Login} />
        <div>
          <NavBar />
          <Route path='/searchBYZIP' component={searchBYZIP} />
        </div>
      </Switch>
    </Router>
  )
}

export default App


