const express = require('express');
const router = express.Router();

const users = [{id:"1",name:"Mr.Fluffy",email:"flyffy@uia.no",password:"12345678"}];

router.get('/', (req,res,next) => {
    res.status(200).json(users);
});

module.exports = router;