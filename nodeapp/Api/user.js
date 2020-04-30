const express = require('express');
const mongoose= require('mongoose');
const User = require('../model/user');
const route = express.Router()

route.post('/', async(req,res)=>{
    const{firstName,lastName, userName,password}= req.body;
    let user= {};
    user.firstName= firstName;
    user.lastName = lastName;
    user.userName = userName;
    user.password= password;
    let userModel= new User(user);
    await userModel.save();
    res.json(userModel);
});

module.exports = route;