import React, { Component } from 'react';
import Logo from '../../components/logo/logo';
import  UserInfo  from '../../components/userInfo/userInfo';

class Register extends Component {
    render() {
        return (
            <div>
                <Logo/>
                <h2>Welcome to Van Gogh World(sign up)</h2>
                <UserInfo/>
                <br></br>
                <button>Sign Up</button>
            </div>
        );
    }
}

export default Register;