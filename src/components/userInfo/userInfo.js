import React from 'react';
import './userInfo.css';


const userInfo = ()=>{
    return(
        <div className="userInformation"> 
            <input id="userInput" type="text" placeholder="user name or Email"/>
            <br></br>
            <input id="passwordInput" type="text" placeholder="passward"/>
            <br></br>
            
        </div>
    )
}

export default userInfo;
