const {generaSchema} = require('./geners');
const mongoose = require('mongoose');
const Joi = require('joi');

const Movie = mongoose.model('Movie' , new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:255,
    },
    genera:{
        type:generaSchema,
        required:true,
    },
    numberInstock:{
        type:Number,
        required:true,
        min:0,
        max:255
    },
    dailyRentalRate:{
        type:Number,
        required:true,
        min:0,
        max:255   
    }
}));

function validateMovie(movie){
    const schema = Joi.object({
        title: Joi.string().min(5).max(255).required(),
        generaId: Joi.string().required(),
        numberInstock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(0).required()
    });
    return schema.validate(movie);
}

module.exports.Movie = Movie
module.exports.validate = validateMovie ;