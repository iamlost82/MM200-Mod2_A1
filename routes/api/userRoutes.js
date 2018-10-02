const express = require('express');
const router = express.Router();

const users = [{id:"1",name:"Mr.Fluffy",email:"flyffy@uia.no",password:"12345678"}];

router.post('/new', (req,res,next) => {
    if(validateNewUserInput(req.body)===true){
        res.status(201).json({msg:"User sucessfully created"}).end();
    } else{
        res.status(400).json({msg:"Error while creating user. Read API documentation."}).end();
    }
});

router.post('/auth', (req,res,next) => {
    if(validateUserAuthInput(req.body)===true){
        res.status(200).json({msg:"Bruker er nå innlogget"}).end();
    } else{
        res.status(401).json({msg:"Authentication failed"}).end();
    }
});

function validateNewUserInput(userData){
    return true;
}

function validateUserAuthInput(userData){
    return true;
}

module.exports = router;