const express= require('express');
const Data= require('../modal/modalData');
const router= express.Router();

//getting localhost2000/data
router.get('/data',(req,res)=>{
    const dataFind=Data.find();//

    dataFind.then(doc=>{
        res.json({
            message:"successfully pulled",
            data:doc
        })
    })
})

//posting localhost2000/data
router.post('/data',(req,res)=>{
    const data=new Data({
        itemName:req.body.itemName,
        color: req.body.color
    });

    data.save().then(response=>res.json({
        message:"success",
        res:response
    }))
    .catch(error => {res.json({error})} 
    )
});

//updating localhost2000/data
// router.patch('/data/:id',(req,res)=>{
//     Data.findOneAndUpdate({_id:req.params.id},{
//         $set:{
//             itemName:req.body.resource,
//             color: req.body.code
//         }
//     },
//     function(err,result){
//         if(err){
//             res.json(err)
//         }
//         else{
//             res.json({result})
//         }
//     })
// })

module.exports=router;