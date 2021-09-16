const { request } = require("express");
const moment = require('moment');
const {Rental} =    require('../models/rental');
const moment = require("moment");

exports.createreturns = (req,res)=>{
    
    if(!req.body.customerId) return res.status(400).send('customerId not found');
    if(!req.body.movieId) return res.status(400).send('movieId not provided');
    
    // const rental = await Rental.findOne({
    //     'customer._id':req.body.customerId,
    //     'movie._id': req.body.movieId,
    // })
    // if(!rental) return res.status(404).send("Rental not found")

    // return res.status(200).send()

    res.status(401).send('Unauthorised')
  

}