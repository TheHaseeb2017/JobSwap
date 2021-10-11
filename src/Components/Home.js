import React, { Component } from "react"

import './RegForm'
import './CSS/todo.css'
import Logo from './../Images/jobswap.png'



class Home extends Component {


    constructor(props) {
        super(props)

        this.state = {



        }
    }

render() {
    
    return (

        <div class = "container">
            <form onSubmit={this.submitHandler}>
                <div>
                              
                    
                    <h1>Welcome to JobSwap</h1>
                    <img className="logo" src={Logo}/>
                </div>






            </form>
        </div>
    )
}



}

export default Home 