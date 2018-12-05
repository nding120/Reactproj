import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';//需要把<App />放到<BrowserRouter>里面，
//否则会报错“you should not use route or withrouter() outside a router”


const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(
//////1，在各自的.js文件搭好框架；2，到App.js加入各个页面的route，上方自动import好。3,在这里加入<App />标签，
    app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
