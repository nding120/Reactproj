const express= require('express');
const router= express.Router();

router.get('/info',(req,res)=>{
    //还有进一步验证用户是和否有cookie... 
    return res.json({code:1})//set up forbidden,0 is release
})

module.exports=router;