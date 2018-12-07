const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser= require('body-parser')
const serverPath=process.env.PORT|| 2000; //set localHost server path

//const post = require("./post");

///////////////解决cors问题有两种方法：1code如下。2，npm install cors，然后const cors如上，添加到middleware：app.use()如下。
///////////////////////////////////////////////////////
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
      //allows this server to accept packets with headers from different ports
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    //allows for the use of GET, POST, PATCH, DELETE, and OPTIONS methods
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });
//app.use(cors());
app.use(express.json());///transfer obj to json
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

//database
mongoose
    .connect('mongodb+srv://Daisy_D:Stevens366Daisy_D@cluster0-xskpm.mongodb.net/reactTest?retryWrites=true',
        {useNewUrlParser:true}
    )
.then(()=>{
    console.log('connected to dataBase!');
})
.catch(err=>{
    console.log('connrction failed!',err);
});

/////////////////import router from another folder///////////////////////////
const dataRouter=require('./routing/data');
const UserRouter=require('./routing/users');
// middleware
//routers
app.use('/',dataRouter);//this just for try
app.use('/user',UserRouter);//如果middleware是router的话，先给一个api的前缀“/user”,userRouter是子路由，后缀在users.js文件里：/profile

//app.use("/api/posts", post);



//running the proj on localhost2000
app.listen(serverPath,()=>{
    console.log('the project is running on '+serverPath);
});