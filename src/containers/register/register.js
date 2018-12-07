import React, { Component } from 'react';
import Logo from '../../components/logo/logo';
import  UserInfo  from '../../components/userInfo/userInfo';
import './register.css';

class Register extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            errors:{}
        }
        this.InputHandler=this.InputHandler.bind(this)
        this.SubmitHandler=this.SubmitHandler.bind(this)
    }
    InputHandler(e){
        this.setState({[e.target.name]: e.target.value})
    }
    SubmitHandler(e){
        e.preventDefault()
        /////
        // const newUser={
        //     email: this.state.email,
        //     password: this.state.password
        // }
        // Register(newUser).then()
    }
    render() {
        return (
            <div className="signinContainer">
                <Logo/>
                <h2>Welcome to Van Gogh World(sign up)</h2>
                <UserInfo submit={(event)=>this.SubmitHandler()} change={(event)=>this.InputHandler()}/>
                <br></br>
                <div id="button">
                <button id="signinButton">Log In</button>
                </div>
            </div>
        );
    }
}

export default Register;