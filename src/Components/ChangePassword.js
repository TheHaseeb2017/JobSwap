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


class ChangePassword extends Component {


    constructor(props) {
        super(props)

        this.state = {

            email: "",
            password: "",
            confirmPassword: "",
            login: false,
            error: null,

            userInfo: []

        }
    }


    getUser = (user) => {




        const email = document.querySelector('input').value;
        const password = document.querySelector('input[name = password]').value;
        const confirmPassword = document.querySelector('input[name = confirmPassword]').value;



        myAxios.patch('/SwapJobs/ChangePassword?email=' + email + '&Password=' + password + '&confirmPassword=' + confirmPassword).then((response) => {






            if (response.status === 200) {


                alert('Your password has now been chnaged!!!')




                console.log('this is the user ID: ' + uidContext.Provider)




            }
            else {
                alert("Error occurred check to see if password match and you have the correct email address entered")
                throw new Error('Something went wrong');

            }



        })







            .catch((error) => {
                //alert("Seems like you provided the wrong information or are not registered with JobSwap you can either, register or try again")
                console.log(error)
            });



    }


    submitHandler = (e) => {
        e.preventDefault()

        this.getUser();


    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const { email, password, confirmPassword } = this.state
        return (

            <div class="container">
                <form onSubmit={this.submitHandler}>
                    <div>


                        <h1>JobSwap Change Password Page</h1>
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
                        <label></label>
                        <input
                            type='password'
                            name='confirmPassword'
                            onChange={this.changeHandler}
                            value={confirmPassword}
                            placeholder="Confirm Password..."

                        />
                        <br />
                    </div>
                    <div>
                        <input type="submit" value="Change Password" />

                    </div>



                </form>
            </div>
        )
    }



}

export default ChangePassword
