import React, { Component } from "react"

import './RegForm'
import './CSS/todo.css'
import Logo from './../Images/jobswap.png'


class Login extends Component {


    constructor(props) {
        super(props)

        this.state = {

            email: "",
            password: "",
            login: false

        }
    }

    /*submitHandler = (e) => {
        e.preventDefault()
      
        axios.post('http://localhost:5000/api/SwapJobs/Register', this.state, {
         headers: {
               'Content-Type': 'application/json',
          }
        }
        )
    
    
        .then(response => {
            console.log(response)
        })
    
    }
    */
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const { fname, lname, email, password, confirmPassword, streetAddress, city, state, zipCode } = this.state
        return (

            <div class = "container">
                <form onSubmit={this.submitHandler}>
                    <div>
                     
                        
                        <h1>JobSwap Login Page</h1>
                        <img className="logo" src={Logo}/>
                    </div>


                    <div>
                    <label></label>
                        <input
                            type='text'
                            name='email'
                            onChange={this.changeHandler}
                            value={lname}
                            placeholder ="Email Address..."
                            
                        />
                        <br/> 
                      
                    </div>
                    <div>
                        <label></label>
                        <input
                            type='password'
                            name='password'
                            onChange={this.changeHandler}
                            value={lname}
                            placeholder="Password..."
                            
                        />
                        <br/> 
                    </div>



                </form>
            </div>
        )
    }



}

export default Login
