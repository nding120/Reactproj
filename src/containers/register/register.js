import React, { Component } from 'react';
import Logo from '../../components/logo/logo';
import  UserInfo  from '../../components/userInfo/userInfo';
import './register.css';
import {register} from '../../components/authRoute/userFuncRoute';

class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            // errors:{}
        }
        this.InputHandler=this.InputHandler.bind(this)
        this.SubmitHandler=this.SubmitHandler.bind(this)
    }
    InputHandler(event){
        console.log(event.target.name+": "+event.target.value)
        this.setState({[event.target.name]: event.target.value})
    }
    // InputPswHandler(e){
    //     console.log(e.target.value)
    //     this.setState({password:e.target.value})
    // }
    SubmitHandler(e){
        e.preventDefault()
        /////
       const newUser={
           email:this.state.email,
           password: this.state.password
       }
        register(newUser).then(res=>{
            // if(res.status===200){
            //     //如果已有登陆信息的：
            //     if(res.data.code===0){
            //         //has registered info already
            //     }
            //     //if no have, 使用history来控制路由跳转
            //     else{
                    console.log("this is props: "+this.props.history);//会有很多的props出现，只关心其中的push，
                this.props.history.push('/');
                //}
            //}
        })
    }
///////UserInfo 里面的change等等自己建立的props， 在<input>里都是default attri，不能自己创造，{props.change}指的是UserInfo的change
    render() {
        return (
            <div className="signinContainer">
                <Logo/>
                <h2>Welcome to Van Gogh World(sign up)</h2>
                <UserInfo className="userInput" name="email" change={this.InputHandler} firstway={this.state.email} placeholder="email"/>
                <br></br>
                <UserInfo id="passwordInput" name="password" change={this.InputHandler} firstway={this.state.password} placeholder="passwaord"/>
                <br></br>
                <div id="button">
                <button id="signinButton" onClick={this.SubmitHandler}>Sign In</button>
                </div>
            </div>
        );
    }
}

export default Register;