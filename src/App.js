import React from 'react';
import logo from './logo.svg';
import './Components/CSS/todo.css'; 
import RegForm from './Components/RegForm'
import Login from './Components/Login'
//import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home'


import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { Switch } from 'react-router';


function App() {
  return (
    <Router>
    <NavBar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/regform' component={RegForm} />
      <Route path='/login' component={Login} />
      
    </Switch>
  </Router>

  )
}

export default App


