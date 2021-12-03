import React, { Component } from "react"
import './RegForm'
import './CSS/todo.css'
import Logo from './../Images/jobswap.png'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"
import { tokenContext, uidContext, uidcontext } from './State'

const apiUrl = 'http://localhost:5000/api';
//const test = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwibmJmIjoxNjM3NTMxOTc3LCJleHAiOjE2Mzc1MzkxNzcsImlhdCI6MTYzNzUzMTk3N30.hGreqXbDhJ0-UGQNPeHt4WTvblTjQw9ifw0j5KoePlE'

const myAxios = axios.create({



    baseURL: apiUrl,
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Authorization': `Bearer ${sessionStorage.getItem('myToken')}`,
    },

});


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


    getUser = (user) => {

        const email = document.querySelector('input').value;
        const password = document.querySelector('input[name = password]').value;

        myAxios.get('/SwapJobs/Login?username=' + email + '&Password=' + password).then((response) => {

            console.log(response.status);

            if (response.status === 200) {


                this.props.history.push('/home');

                uidContext.Provider = response.data[0].id
            }
            else {
                throw new Error('Something went wrong');

            }

        })

            .catch((error) => {

                console.log(error)
            });



    }


    submitHandler = (e) => {


        e.preventDefault()

        const email = document.querySelector('input').value;
        const password = document.querySelector('input[name = password]').value;


        axios.post('http://localhost:5000/api/SwapJobs/Authenticate?username=' + email + '&password=' + password)
            
            .then(res => {

                //console.log(res)

                const token = res.data;

                sessionStorage.setItem('myToken', token)
                console.log(sessionStorage.getItem('myToken'))
                this.getUser();
                


            })

            .catch(err => {
                alert("Seems like you provided the wrong information or are not registered with JobSwap you can either, register or try again")
                console.log(err)
            })


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
