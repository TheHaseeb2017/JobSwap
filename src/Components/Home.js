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





class Home extends Component {


    constructor(props) {
        super(props)

        this.state = {

            zipCode: '',
            jobs: []




        }
        this.submitHandler = this.submitHandler.bind(this)
    }

    componentDidMount() {
        this.submitHandler();
    }


    submitHandler = (e) => {
    


        fetch('http://localhost:5000/api/SwapJobs/ViewAllJob' , this.state,)

            .then(response => response.json())
            .then(response => this.setState({ 'jobs': response }))

    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        const { zipCode, firstName } = this.state
        return (



            <div class="container">
              
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
                        <Link to="/description">
                            <button type='button'>
                                <p>Information</p>
                            </button>
                        </Link>
                        <Link to="/SBZNC">
                            <button type='button'>
                                <p>Try Searching by ZipCode</p>
                            </button>
                        </Link>
                        <Link to="/SBCNC">
                            <button type='button'>
                                <p>Try Searching by Category</p>
                            </button>
                        </Link>

                    </div>


                    <div>
                        <label></label>
                        <h1>  Jobs Posted Now  </h1>
            

                    </div>


                <div>

                    <ul>

                        {this.state.jobs.map(function (jobs, index) {
                            return (

                                <div class="container2" key={index}>
                                    
                                    <h1> {'Job: ' + jobs.jobTitle} </h1>
                                    <h2> Sign in or create a account for contact info </h2>
                                    <p>  {'Job Descirption: ' + jobs.jobDescription} </p>
                                    <p>  {'Location: ' + jobs.location} </p>
                                    
                                    

                                </div>

                            )
                        }
                        )}
                    </ul>

                </div>
            </div>

        )
    }



}

export default Home