import axios from 'axios';

export const register= newUser =>{
    return axios
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
    return axios
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
