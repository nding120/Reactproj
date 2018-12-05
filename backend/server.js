const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const user = require("./user");
//const post = require("./post");

const serverPath=2000; //set localHost server path

//import router
const dataRouter=require('./routing/data');

// middleware
app.use(express.json());//trnsfer obj to json
//app.use("/api/users", user);
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

//routers
app.use('/',dataRouter);

//running the proj on localhost2000
app.listen(serverPath,()=>{
    console.log('the project is running on '+serverPath);
});

// const port = process.env.PORT || 3000;

// app.set('port', port);

// console.log("Server is up and running!");

// const server = http.createServer(app);