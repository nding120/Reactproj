import React, { Component } from 'react';
import jwt_decode from 'jwt_decode';// or jwt_decode=require('jwt_decode')

class product extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            errors:{}
        }
    }
    componentDidMount(){
        const token=localStorage.usertoken
        const decode=jwt_decode(token)
        this.setState({
            email:decode.email
        })
    }
    render() {
        return (
            <div>
                <p>product page</p>
            </div>
        );
    }
}

export default product;