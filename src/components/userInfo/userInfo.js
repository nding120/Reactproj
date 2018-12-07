import React from 'react';
import './userInfo.css';


const userInfo = (props)=>{ //通过props传递参数进到userinfo，props是从login来的，这样就可以调用props.change
    return(
        <div className="userInformation"> 
            <input onChange={props.change} id="userInput" type="text" placeholder="user name or Email"/>
            <br></br>
            <input onChange={props.change} id="passwordInput" type="text" placeholder="passward"/>
            <br></br>
            
        </div>
    )
}

export default userInfo;
