import React from 'react';
import './userInfo.css';


const userInfo = (props)=>{ //通过props传递user输入的信息参数进到userinfo.js，props是register的props，这样就可以调用props.change里的函数inpurhandler()
    return(
        <div className="userInformation"> 
            <input onChange={props.change} type="text" value={props.firstway} placeholder={props.placeholder} name={props.name}/>
            <br></br>
            {/* <input onChange={props.change} id="passwordInput" type="text" placeholder="passward"/>
            <br></br> */}  
        </div>
    )
}

export default userInfo;
