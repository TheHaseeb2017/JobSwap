import React, { Component } from "react"
import './RegForm'
import './CSS/todo.css'
import Logo from './../Images/jobswap.png'
import { Link } from "react-router-dom";
import Navbar from "./NavBar";

import RegForm from './RegForm'
import Login from './Login'

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";





class Home extends Component {


    constructor(props) {
        super(props)

        this.state = {



        }
    }

    render() {

        return (

                

                <div class="container">
                    <form onSubmit={this.submitHandler}>
                        <div>
                  


                            <h1>Welcome to JobSwap</h1>
                            <img className="logo" src={Logo} />
                        </div>

                        <div>
                            <Link to="/login">
                                <button type='button'>
                                    <p>Login</p>
                                </button>
                            </Link>
                            <Link to="/regform">
                                <button type='button'>
                                    <p>Register</p>
                                </button>
                            </Link>

                        </div>



                    </form>
                </div>
                )
    }



}

                export default Home