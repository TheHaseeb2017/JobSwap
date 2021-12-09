import React from 'react';
import logo from './logo.svg';
import './Components/CSS/todo.css';
import RegForm from './Components/RegForm'
import Login from './Components/Login'
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import addJob from './Components/addJob';
import Home2 from './Components/Home2';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import searchBYZIP from './Components/searchBYZIP';
import myJobs from './Components/myJobs';
import ChangePassword from './Components/ChangePassword';
import ChangeEmail from './Components/ChangeEmail';
import searchByCat from './Components/searchByCat';
import viewAllJobs from './Components/viewAllJobs';
import Information from './Components/Information';
import SBZNC from './Components/SBZNC';
import SBCNC from './Components/SBCNC';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/regform' component={RegForm} />
        <Route path='/login' component={Login} />
        <Route path='/SBZNC' component={SBZNC} />
        <Route path='/SBCNC' component={SBCNC} />
        <Route path='/description' component={Information} />

        <div>
          <NavBar />
          <Route path='/searchBYZIP' component={searchBYZIP} />
          <Route path='/myJobs' component={myJobs} />
          <Route path='/addJob' component={addJob} />
          <Route path='/home' component={Home2} />
          <Route path='/changePassword' component={ChangePassword} />
          <Route path='/changeEmail' component={ChangeEmail} />
          <Route path='/searchByCat' component={searchByCat} />
          <Route path='/description' component={Information} />
  
        </div>
      </Switch>
    </Router>
  )
}

export default App


