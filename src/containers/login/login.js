import React, { Component } from 'react';
import Logo from '../../components/logo/logo';
import  UserInfo from '../../components/userInfo/userInfo';
import  './login.css';
import {Link} from 'react-router-dom';
import {login} from '../../components/authRoute/userFuncRoute';

class Login extends Component {
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
    // InputHandler(e){
    //     this.setState({[e.target.name]: e.target.value})
    // }
    SubmitHandler(e){
        e.preventDefault()
        /////
        const user={
            email: this.state.email,
            password: this.state.password
        }
        login(user).then(res=>{
            if(res.status===200){
                //如果已有登陆信息的：
                if(res.data.code===0){
                    //has registered info already
                }
                //if no have, 使用history来控制路由跳转
                else{
                this.props.history.push('/profile')/////PRODUCT PAGE
                }
            }
        })
    }
    
    render() {
        const style={
            color:"black"
        }
        return (//////////<Logo>是从component中的logo import进来的，一个tag就可以代表全部内容
            //"a"移动位置出现了问题，最好的方式，单独放到div里，有些tag对text-align管用，有些对float管用，float比align高一级，
            //“a”如果直接css，可以用display:block使它变成div一样的东西。
            //在react里，加链接直接用<Link to="">
            //chang and submit是UserInfo的props，内容就是调用上面写好的两个函数，需要传递参数进如UserInfo，使input拿到user输入的内容
            <div className="loginContainer">
                <div id="a">
                    <Link to="/register" style={style}>Sign up</Link>
                </div>
                <Logo/>
                <h2>Welcome to Van Gogh World</h2>
                <table id="userPlace">
                    <tbody>
                        <tr>
                            <td>
                                <UserInfo submit={(event)=>this.SubmitHandler()} change={(event)=>this.InputHandler()}/>
                                <br></br>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="button">
                                <button id="loginButton">Log In</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Login;