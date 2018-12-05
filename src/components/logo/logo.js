import React, { Component } from 'react';
import logoImg from '../../assets/imgs/sunflower.jpg'
import './logo.css'; 


//////logo comonent 设置好了，在需要用他的地方import，比如：login, register。。。
class Logo extends Component {
    render() {
        return (
            <div className="logo-container">
                <img src={logoImg} alt="this is logo pic"/>
            </div>
        );
    }
}

export default Logo;