import React, { Component } from "react"
import axios from "axios"
import './CSS/todo.css'
import Logo from './../Images/jobswap.png'

class regForm extends Component {


    constructor(props) {
        super(props)

        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            confirmPassword: "",
            streetAddress: "",
            city: "",
            state: "", 
            zipCode: "",
        }
    }


    submitHandler = (e) => {
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
                        <img className="logo" src={Logo}/>
                        <h1>JobSwap Registeration Page</h1>
                        
                    </div>


                    <div>
                        <label></label>
                        <input
                            type='text'
                            name='fname'
                            onChange={this.changeHandler}
                            value={fname}
                            placeholder = "First Name..."
                            
                        />
                            
                    </div>
                    <div>
                        <label></label>
                        <input
                            type='text'
                            name='lname'
                            onChange={this.changeHandler}
                            value={lname}
                            placeholder="Last Name..."
                        />
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
                    </div>
                    <div>
                        <label></label>
                        <input
                            type='text'
                            name='streetAddress'
                            onChange={this.changeHandler}
                            value={streetAddress}
                            placeholder="Street Address..."
                        />
                    </div>

                    <div>
                        <label></label>
                        <input
                            type='text'
                            name='city'
                            onChange={this.changeHandler}
                            value={city}
                            placeholder="City..."
                        />
                    </div>
                    <div>
                        <label></label>
                        <input
                            type='text'
                            name='state'
                            onChange={this.changeHandler}
                            value={state}
                            placeholder="State..."
                        
                        />
                    </div>
                    <div>
                        <label></label>
                        <input
                            type='text'
                            name='zipCode'
                            onChange={this.changeHandler}
                            value={zipCode}
                            placeholder="ZipCode..."
                            
                        />
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default regForm