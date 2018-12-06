const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require("./user");
const cors = require('cors')
//const post = require("./post");

///////////////解决cors问题有两种方法：1code如下。2，npm install cors，然后const cors如上，添加到middleware：app.use()如下。
///////////////////////////////////////////////////////
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.setHeader(
//       //allows this server to accept packets with headers from different ports
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     //allows for the use of GET, POST, PATCH, DELETE, and OPTIONS methods
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PATCH, DELETE, OPTIONS"
//     );
//     next();
//   });
app.use(cors());


const serverPath=2000; //set localHost server path

////import router from another folder
const dataRouter=require('./routing/data');
//routers
app.use('/',dataRouter);//this just for try

// middleware

app.use(express.json());///rnsfer obj to json
app.use("/user", userRouter);///如果middleware是router的话，先给一个api的前缀“/user”,userRouter是子路由，后缀在user.js文件里：/info
//app.use("/api/posts", post);


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


//running the proj on localhost2000
app.listen(serverPath,()=>{
    console.log('the project is running on '+serverPath);
});


// const port = process.env.PORT || 3000;

// app.set('port', port);

// console.log("Server is up and running!");

// const server = http.createServer(app);