const validateObjectId = require('../middlewere/validateObjectId');
const {Genera} = require('../models/geners');
const { Mongoose } = require('mongoose');

exports.getallgenres = async(req,res)=>{
    res.send("this is findn api")
    const generas = await Genera.find();
    console.log(generas);
}


exports.creategenres = async(req,res)=>{
    const postData =new Genera(req.body)
    const sendDat= await postData.save();
    res.send(sendDat)
}

exports.updategenres = async(req, res)=>{
    const  findgen = await Genera.findOne();
    if(!findgen) return res.status(404)
    .send("there are no data such as find");

    const updateData = await Genera.updateOne({},
        {name:req.body.name},{new:true})
    res.send(updateData);
}


exports.deletegenres = async(req, res)=>{
    const deleteData = await Genera.deleteOne()
    if(!deleteData) return res.status(404)
    .send("In database data not include");
    res.send(deleteData)
}


exports.getonegenre = async(req,res)=>{
    if (!Mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(404).send('Invalid ID. ')

    const genera =  await Genera.findById(req.params.id);
    if(!genera) return res.status(404).send(`The genera with the id not found`)
    res.send("this is findn api")
    const generas = await Genera.find();
    console.log(generas);
}