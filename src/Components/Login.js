import React, { Component } from "react"
import RegForm from "./RegForm"
import './RegForm'
import './CSS/todo.css'
import Logo from './../Images/jobswap.png'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import searchBYZIP from "./searchBYZIP"
import axios from "axios"
import Home from "./Home"
import myJobs from "./myJobs"
import { uidContext, uidcontext } from './State'



class Login extends Component {


    constructor(props) {
        super(props)

        this.state = {

            email: "",
            password: "",
            login: false,
            error: null,

            userInfo: []

        }
    }


    submitHandler = (e) => {
        e.preventDefault()

        const email = document.querySelector('input').value;
        const password = document.querySelector('input[name = password]').value;


        fetch('http://localhost:5000/api/SwapJobs/Login?username=' + email + '&Password=' + password).then((response) => {


            if (response.ok) {


                this.props.history.push('/home');
                return response.json();


                // console.log('This is  the userID: ' + this.state.userId); 

            }
            else {
                throw new Error('Something went wrong');

            }
        })

            .then((json) => {
                //this.state.userId = json.id; 

                uidContext.Provider = json[0].id;

                console.log('this is the user ID: ' + uidContext.Provider)
            })
            .catch((error) => {
                alert("Seems like you provided the wrong information or are not registered with JobSwap you can either, register or try again")
                console.log(error)
            });



    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const { email, password } = this.state
        return (

            <div class="container">
                <form onSubmit={this.submitHandler}>
                    <div>


                        <h1>JobSwap Login Page</h1>
                        <img className="logo" src={Logo} />
                    </div>


                    <div>
                        <label></label>
                        <input
                            type='text'
                            name='email'
                            onChange={this.changeHandler}
                            value={email}
                            placeholder="Email Address..."

                        />
                        <br />

                    </div>
                    <div>
                        <label></label>
                        <input
                            type='password'
                            name='password'
                            onChange={this.changeHandler}
                            value={password}
                            placeholder="Password..."

                        />
                        <br />
                    </div>
                    <div>
                        <input type="submit" value="Login" />
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

export default Login
