const mongoose=require('mongoose');
// const Schema=mongoose.Schema

//create user schema
const userSchema= mongoose.Schema({
    fisrt_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

})
module.exports=mongoose.model('modalUser',userSchema)//在mongodb->collection下的文件夹名称为modalUser，存储user的信息