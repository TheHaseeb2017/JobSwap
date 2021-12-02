import React, { Component } from "react"
import axios from "axios"
import './CSS/todo.css'
import Logo from './../Images/jobswap.png'
import { uidContext, tokenContext } from './State'

const apiUrl = 'http://localhost:5000/api';

const myAxios = axios.create({



    baseURL: apiUrl,
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Authorization': `Bearer ${tokenContext.Provider}`,
    },

});

class viewAllJobs extends Component {


    constructor(props) {
        super(props)

        this.state = {
            jobId: '',
            userID: '',
            jobs: []

        }
        this.submitHandler = this.submitHandler.bind(this)
    }


    submitHandler = (e) => {


        e.preventDefault()


        console.log(tokenContext.Provider);
        myAxios.get('/SwapJobs/ViewMyJob?UserID=' + uidContext.Provider)


            .then(response => response.data)
            .then(response => this.setState({ 'jobs': response }))


            .catch((error) => {
                alert("Looks like you have no jobs!!!")
                console.log(error)
            });

    }

    submitHandler2 = (e) => {
        e.preventDefault()
        console.log(tokenContext.Provider);
        myAxios.post('/SwapJobs/RemoveMyJob?jobID=' + this.state.jobId, {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        )


            .then(response => {
                console.log(response)

                if (response.status === 200) {
                    alert('The job with and ID of: ' + this.state.jobId + ' has been deleted!!!')
                }
                else {
                    alert('There no Job with an ID of: ' + this.state.jobId + ' ,please try agian!!!')
                }
            })

    }


    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const { jobId } = this.state
        return (
            <div class="container">
                <form onSubmit={this.submitHandler}>
                    <div>
                        <img className="logo" src={Logo} />
                        <h1>Find your Jobs</h1>

                    </div>



                    <input type="submit" value="Show My Jobs" />




                </form>
                <div class="inline fields">
                    <div class="fields">
                        <div>
                            <label></label>
                            <input
                                type='text'
                                name='jobId'
                                ref='jobId'
                                onChange={this.changeHandler}
                                value={jobId}
                                placeholder="Job ID..."

                            />

                        </div>
                    </div>
                    <div class="fields">
                        <form onSubmit={this.submitHandler2}>
                            <input type="submit" value="Delete your Job" />

                        </form>
                    </div>
                </div>


                <div>

                    <ul>

                        {this.state.jobs.map(function (jobs, index) {
                            return (

                                <div class="container2" key={index}>

                                    <h1> {'Job ID: ' + jobs.id}</h1>
                                    <h2> {'Job: ' + jobs.jobTitle} </h2>
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

export default viewAllJobs