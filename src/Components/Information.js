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
import searchBYZIP from "./searchBYZIP";





class Information extends Component {



    render() {
        
        return (



            <div class="container2">
              
                    <div>



                        <h1>Welcome to JobSwap</h1>
                        <img className="logo" src={Logo} />

                        <h2>Online bartering system that promotes money less transactions.</h2> 
                        <h2>Permits people to use their talents for their benefits.</h2> 
                        <h2>Removes the hassle of government taxation.</h2>
                        <h2>Online tool to find people with a certain skill set.</h2> 
                        <h2>Online tool to share skills.</h2>
                        <h2>Simple and easy to use design and concept.</h2> 


                    </div>

                    <div>
                        <Link to="/">
                            <button type='button'>
                                <p>Home</p>
                            </button>
                        </Link>


                    </div>


               

            </div>

        )
    }



}

export default Information