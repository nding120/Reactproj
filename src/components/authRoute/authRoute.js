import React, { Component } from 'react';
//import axios from 'axios';
import instance from '../../axios';
import {withRouter} from 'react-router-dom';

//@withRouter//有其他问题出现，换种写法，在最下面export default
class authRoute extends Component {///因为authRoute不是一个标准的路由，并没有应用操作路由的方法，使用方法就是
    componentDidMount(){
        //**********先判断一下，现在是否已经在register page or sign up page，如果已经在，就返回无***************** */
        const publicList = ['/','/register']
        console.log(this.props);//location obj -> pathname 可以获取到/register路径信息
        const pathname=this.props.location.pathname
        if(publicList.indexOf(pathname)> -1){ //如果有这个用户信息，就什么都不用返回
            return null;
        }
        //************************************************ */
        
        instance.post('user/register',{///////????????????????
            first_name:this.props.first_name,
            // last_name:newUser.last_name,
            // email:newUser.email
        }).then(res=>{
            console.log("registered!")
        })

        instance.post('user/login',{///////????????????????
            // email:user.email,
            // password:user.password
        }).then(res=>{
            localStorage.setItem('usertoken',res.data)
            return res.data
        }).catch(err=>{
            console.log(err);
        })
        
        ///////get user info 完成这个动作需要三个文件，这个+server.js+user.js，得到全部的用户信息//////////////
        //////.then()是一个promise，有顺序性
        instance.get('/user/profile').then(res=>{
            console.log('aaa')
            if(res.status===200){
                //如果已有登陆信息的：
                if(res.data.code===0){
                    //has registered info already
                }
                //if no have, 使用history来控制路由跳转
                else{
                    console.log(this.props.history);//会有很多的props出现，只关心其中的push，
                    this.props.history.push('/')//go to homepage:login page，设立门禁，只能先访问login page

                }
                console.log(res.data);
            }
        })
    }
    render() {
        return (
            <div>
                {/* <p>judge switch page</p> */}
            </div>
        );
    }
}

export default withRouter(authRoute);