const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');
const mongoose = require('mongoose');
const _ = require('lodash');
const {User, validate} = require('../models/users'); 


exports.getallusers = async(req,res , next)=>{
    console.log(req.user._id);
    const myData = await User.findById(req.user._id).select('-password')
    res.send(myData);
}

exports.createuser = async(req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email:req.body.email})
    if (user) return res.status(400).send('User alrady ragistered.');

    user = new User(_.pick(req.body, ['name', 'email' , 'password']))
    const genslt  = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, genslt);
    await user.save(); 

    const token = user.generateAuthToken();
    res.header('token',token).send(_.pick(user, [ '_id' ,'name', 'email' ,'password']));
}