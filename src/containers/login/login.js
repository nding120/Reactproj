import React, { Component } from 'react';
import Logo from '../../components/logo/logo';
import  UserInfo from '../../components/userInfo/userInfo';
import  './login.css';

class Login extends Component {
    render() {
        return (//////////<Logo>是从component中的logo import进来的，一个tag就可以代表全部内容
            //"a"移动位置出现了问题，最好的方式，单独放到div里，有些tag对text-align管用，有些对float管用，float比align高一级，
            //“a”如果直接css，可以用display:block使它变成div一样的东西。
            <div>
                <div id="a">
                    <a href="google.com">Sign up</a>
                </div>
                <Logo/>
                <h2>Welcome to Van Goph World</h2>
                <UserInfo/>
                
            </div>
        );
    }
}

export default Login;