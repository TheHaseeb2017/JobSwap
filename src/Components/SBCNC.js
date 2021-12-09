import React, { Component } from "react"
import './CSS/todo.css'
import Logo from './../Images/jobswap.png'
import { Link } from "react-router-dom";


class SBCNC extends Component {


    constructor(props) {
        super(props)

        this.state = {
            catergory: '',
            jobs: []

        }
        this.submitHandler = this.submitHandler.bind(this)
    }


    submitHandler = (e) => {
        e.preventDefault()

        const catergory = document.querySelector('input').value;


        fetch('http://localhost:5000/api/SwapJobs/GetJobByCat?category=' + catergory, this.state,)

            .then(response => response.json())
            .then(response => this.setState({ 'jobs': response }))

    }


    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const { catergory } = this.state
        return (
            <div class="container">
                <form onSubmit={this.submitHandler}>
                    <div>
                        <img className="logo" src={Logo} />
                        <h1>Search for Jobs by Category</h1>

                    </div>

                    <div>
                        <label></label>
                        <input
                            type='text'
                            name='catergory'
                            ref='catergory'
                            onChange={this.changeHandler}
                            value={catergory}
                            placeholder="Catergory..."

                        />

                    </div>


                    <input type="submit" value="Submit" />
                    <Link to="/Home">
                        <button type='button'>
                            <p>Home</p>
                        </button>
                    </Link>



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

export default SBCNC