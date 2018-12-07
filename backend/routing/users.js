const express=require('express')
const users=express.Router()
const cors=require('cors')
const jswebtoken=require('jsonwebtoken')
const bcrypt=require('bcrypt')
//body parser
const User=require('../modal/modalUserSchema')
users.use(cors())

process.env.SECRET_KEY='secret'//jsonwebtoen, require for hash data

users.post('/register',(req,res)=>{
    const today= new Date()
    const userData= new User ({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created:today
    })
    User.findOne({
        email:req.body.email
    })
    .then(user=>{
        if(!user){
            bcrypt.hash(req.body.password,10,(err,hash)=>{ //10 is slatorround
                userData.password=hash
                User.create(userData)
                .then(user=>{
                    res.json({status:user.email +'Registered!'})
                })
                .catch(err=>{
                    res.send('err: '+err)
                })
            })
        }
        else{
            res.json({error:'user already existed'})
        }
    })
    .catch(err=>{
        res.send('err: '+err)
    })
})
////////////////////post login page//////////////////
users.post('/login',(req,res)=>{ 
    User.findOne({
        email:req.body.email
    })
    .then(user=>{
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){//compareSync is a boolean
                //password match
                const payload={ //form a token using in frontend
                    _id: user._id,
                    first_name:user.first_name,
                    last_name:user.last_name,
                    email:user.email
                }
                let token = jswebtoken.sign(payload, process.env.SECRET_KEY,{ //sign 3 PARAMS
                    expiresIn:1000
                })
                res.send(token)
            }
            else{
                //password no match
                res.json({error:'user does not exist'})
            }
        }
        else{
            res.json({error:'user does not exist'})
        }
    })
    .catch(err=>{
        res.send('error: '+ err)
    })
})

users.get('/profile',(req,res)=>{ //user 的后缀
    var decode = jswebtoken.verify(req.headers['authorization'],process.env.SECRET_KEY)

    User.findOne({
        _id:decode._id
    })
    .then(user=>{
        if(user){
            res.json(user)
        }
        else{
            res.send('user does not exist')
        }
    })
    .catch(err=>{
        res.send('error: '+err)
    })
})

module.exports=users