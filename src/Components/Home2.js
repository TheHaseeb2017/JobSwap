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





class Home2 extends Component {


    constructor(props) {
        super(props)

        this.state = {

            zipCode: '',
            jobs: []




        }
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler = (e) => {
        e.preventDefault()

        const zipCode = document.querySelector('input').value;


        fetch('http://localhost:5000/api/SwapJobs/GetJobByZipr?zip=' + zipCode, this.state,)

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
                <form onSubmit={this.submitHandler}>
                    <div>



                        <h1>Welcome to JobSwap</h1>
                        <img className="logo" src={Logo} />
                    </div>

                    <div>


                    </div>


                    <div>
                        <label></label>
                        <h1>  Look for Jobs near you!!! </h1>
                        <input
                            type='text'
                            name='zipCode'
                            ref='zipCode'
                            onChange={this.changeHandler}
                            value={zipCode}
                            placeholder="ZipCode..."

                        />

                    </div>


                    <input type="submit" value="Submit" />



                </form>

                <div>

                    <ul>

                        {this.state.jobs.map(function (jobs, index) {
                            return (

                                <div class="container2" key={index}>
                                    <h1> {'User: ' + jobs.firstName + ' ' + jobs.lastName}</h1>
                                    <h2> {'Job: ' + jobs.jobTitle} </h2>
                                    <p>  {'Job Descirption: ' + jobs.jobDescription} </p>
                                    <p>  {'Location: ' + jobs.location} </p>
                                    <p>  {'Contact Information: ' + jobs.emailAddress} </p>

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

export default Home2