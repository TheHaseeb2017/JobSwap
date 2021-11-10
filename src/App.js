import React from 'react';
import logo from './logo.svg';
import './Components/CSS/todo.css';
import RegForm from './Components/RegForm'
import Login from './Components/Login'
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import addJob from './Components/addJob';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import searchBYZIP from './Components/searchBYZIP';
import myJobs from './Components/myJobs';

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
          <Route path='/myJobs' component={myJobs} />
          <Route path='/addJob' component={addJob}/>
          <Route path='/home' component={Home} />

        </div>
      </Switch>
    </Router>
  )
}

export default App


