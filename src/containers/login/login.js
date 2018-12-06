import React, { Component } from 'react';
import Logo from '../../components/logo/logo';
import  UserInfo from '../../components/userInfo/userInfo';
import  './login.css';
import {Link} from 'react-router-dom';


class Login extends Component {
    // constructor(props){
    //     super(props);
    //     this.register= this.register.bind(this);
    // }
    // register(){
    //     console.log(this.props);
    //     this.props.history.push('/register');
    // }
    render() {
        return (//////////<Logo>是从component中的logo import进来的，一个tag就可以代表全部内容
            //"a"移动位置出现了问题，最好的方式，单独放到div里，有些tag对text-align管用，有些对float管用，float比align高一级，
            //“a”如果直接css，可以用display:block使它变成div一样的东西。
            //在react里，加链接直接用<Link to="">
            <div>
                <div id="a">
                    <Link to="/register">Sign up</Link>
                </div>
                <Logo/>
                <h2>Welcome to Van Gogh World</h2>
                <UserInfo/>
                <br></br>
                <button >Log In</button>
            </div>
        );
    }
}

export default Login;