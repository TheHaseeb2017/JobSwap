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
          <Route path='/addJob' component={addJob} />
          <Route path='/home' component={Home2} />
          <Route path='/changePassword' component={ChangePassword} />
          <Route path='/changeEmail' component={ChangeEmail} />
          <Route path='/searchByCat' component={searchByCat} />



        </div>
      </Switch>
    </Router>
  )
}

export default App


