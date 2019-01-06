//import axios from 'axios';
import instance from '../../axios';

 ///////post user info 完成这个动作需要三个文件，这个+server.js+user.js，得到全部的用户信息//////////////
export const register= newUser =>{
    return instance
    .post('user/register',{
        first_name:newUser.first_name,
        last_name:newUser.last_name,
        email:newUser.email
    })
    .then(res=>{
        console.log("registered!")
    })
}

export const login= user=>{
    return instance
    .post('user/login',{
        email:user.email,
        password:user.password
    })
    .then(res=>{
        localStorage.setItem('usertoken',res.data)
        return res.data
    }).catch(err=>{
        console.log(err);
    })
}
