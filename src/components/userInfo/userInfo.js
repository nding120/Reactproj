import React from 'react';
import './userInfo.css';
import { Button } from 'react-bootstrap';

const userInfo = ()=>{
    return(
        <div className="userInformation"> 
            <input id="userInput" type="text" placeholder="user name or Email"/>
            <br></br>
            <input id="passwordInput" type="text" placeholder="passward"/>
            <br></br>
            <Button bsStyle="primary">Log In</Button>
        </div>
    )
}

export default userInfo;
