import React, { Component } from "react"
import axios from "axios"
import './CSS/todo.css'
import Logo from './../Images/jobswap.png'
import { Link } from "react-router-dom";
import { uidContext, uidcontext, tokenContext } from './State'
//import { Button } from 'semantic-ui-react'

const apiUrl = 'http://localhost:5000/api';
//const test = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjM3NTMxOTc3LCJleHAiOjE2Mzc1MzkxNzcsImlhdCI6MTYzNzUzMTk3N30.hGreqXbDhJ0-UGQNPeHt4WTvblTjQw9ifw0j5KoePlE'

const myAxios = axios.create({



    baseURL: apiUrl,
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Authorization': `Bearer ${sessionStorage.getItem('myToken')}`,
    },

});



class addJob extends Component {


    constructor(props) {
        super(props)

        this.state = {
            jobTitle: "",
            jobDescription: "",
            location: "",
            userID: uidContext.Provider,
            category: ""

        }
    }


    submitHandler = (e) => {



        e.preventDefault()




        myAxios.post('/SwapJobs/AddJob', this.state, {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        ).then((response) => {


            if (response.status === 200) {

                alert('The Job "' + this.state.jobTitle + '" was added to the Board');

            }
            else {
                throw new Error('Something went wrong');

            }
        })


            .catch((error) => {
                alert('The Job "' + this.state.jobTitle + '" was not added to the board, please try again!!!');
                console.log(error)
            });



    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        const { jobTitle, jobDescription, location, category, userID } = this.state
        return (
            <div class="container">
                <form onSubmit={this.submitHandler}>
                    <div>
                        <img className="logo" src={Logo} />
                        <h1>Add a Job to the Board</h1>

                    </div>


                    <div>
                        <label></label>
                        <input
                            type='text'
                            name='jobTitle'
                            onChange={this.changeHandler}
                            value={jobTitle}
                            placeholder="Job Title..."

                        />

                    </div>
                    <div>
                        <label></label>
                        <input
                            type='text'
                            name='jobDescription'
                            onChange={this.changeHandler}
                            value={jobDescription}
                            placeholder="Description..."
                        />
                    </div>
                    <div>
                        <label></label>
                        <input
                            type='text'
                            name='location'
                            onChange={this.changeHandler}
                            value={location}
                            placeholder="Location..."
                        />

                    </div>
                    <div>
                        <label></label>
                        <input
                            type='text'
                            name='category'
                            onChange={this.changeHandler}
                            value={category}
                            placeholder="Category..."
                        />

                    </div>
                    <div>

                    </div>

                    <input type="submit" value="Submit" />
                    <Link to="/">
                        <button type='button'>
                            <p>Home</p>
                        </button>
                    </Link>

                </form>
            </div>
        )
    }

}

export default addJob