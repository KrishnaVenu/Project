const express = require('express');
const registerRouter = express.Router();
const Userdata = require('../models/user');

registerRouter.get('/user',(req,res)=>{
    //console.log(5);
    Userdata.find()
    .then((user)=>res.send(user))
});
registerRouter.post('/insert',(req,res)=>{
    console.log(req.body);
    var item = {
        userName: req.body.user.userName,
           email: req.body.user.email,
         address: req.body.user.address,
           phone: req.body.user.phone
     }
     var user = Userdata(item);
     user.save((req,res)=>{
         console.log(item);
     });
});

registerRouter.post('/update/:id',(req,res)=>{
    console.log(id);
    var id = req.body.id;
    //console.log(id);
    var item = {
        userName: req.body.user.userName,
           email: req.body.user.email,
         address: req.body.user.address,
           phone: req.body.user.phone
    }
    console.log(item);
    //var user = Userdata(item);
    Userdata.findByIdAndUpdate(id,item,(result,err)=>{
        if(result){
            res.send(item);
        }
        else{
            console.log(err);
        }
    })
})
module.exports = registerRouter;