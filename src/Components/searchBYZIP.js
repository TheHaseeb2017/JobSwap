import React, { Component } from "react"
import axios from "axios"
import './CSS/todo.css'
import Logo from './../Images/jobswap.png'
import { Link } from "react-router-dom";
//import { Button } from 'semantic-ui-react

class searchBYZIP extends Component {


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


        fetch('http://localhost:5000/api/SwapJobs/GetJobByZipr?zip=' + zipCode, this.state, {


        }


        )



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
                        <img className="logo" src={Logo} />
                        <h1>Search for Jobs by ZipCode</h1>

                    </div>

                    <div>
                        <label></label>
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
                    <Link to="/">
                        <button type='button'>
                            <p>Search</p>
                        </button>
                    </Link>



                </form>
                <div>
                    <p>Jobs Returned</p>
                    <ul>
                        {this.state.jobs.map(function (jobs, index) {
                            return (
                                <div class = "container2" key ={index}>
                                    <h1> { 'User: ' + jobs.firstName +' ' + jobs.lastName}</h1>
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

export default searchBYZIP