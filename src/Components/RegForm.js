import React, { Component } from "react"
import axios from "axios"
import './CSS/todo.css'

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
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <h1>JobSwap Registeration Page</h1>
                    </div>


                    <div>
                        <label>First Name </label>
                        <input
                            type='text'
                            name='fname'
                            onChange={this.changeHandler}
                            value={fname}></input>
                    </div>
                    <div>
                        <label>Last Name </label>
                        <input
                            type='text'
                            name='lname'
                            onChange={this.changeHandler}
                            value={lname}></input>
                    </div>
                    <div>
                        <label>Email Address </label>
                        <input
                            type='text'
                            name='email'
                            onChange={this.changeHandler}
                            value={email}></input>
                    </div>
                    <div>
                        <label>Password </label>
                        <input
                            type='password'
                            name='password'
                            onChange={this.changeHandler}
                            value={password}></input>
                    </div>
                    <div>
                        <label>Confirm Password </label>
                        <input
                            type='password'
                            name='confirmPassword'
                            onChange={this.changeHandler}
                            value={confirmPassword}></input>
                    </div>
                    <div>
                        <label>Street Address </label>
                        <input
                            type='text'
                            name='streetAddress'
                            onChange={this.changeHandler}
                            value={streetAddress}></input>
                    </div>

                    <div>
                        <label>City </label>
                        <input
                            type='text'
                            name='city'
                            onChange={this.changeHandler}
                            value={city}></input>
                    </div>
                    <div>
                        <label>State </label>
                        <input
                            type='text'
                            name='state'
                            onChange={this.changeHandler}
                            value={state}></input>
                    </div>
                    <div>
                        <label>ZipCode </label>
                        <input
                            type='text'
                            name='zipCode'
                            onChange={this.changeHandler}
                            value={zipCode}></input>
                    </div>

                    <button type='submit'>Submit Now</button>
                </form>
            </div>
        )
    }

}

export default regForm