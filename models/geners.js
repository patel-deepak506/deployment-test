const mongoose = require("mongoose");

const generaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
})

module.exports.Genera = mongoose.model("Schama" ,generaSchema);
module.exports.generaSchema = generaSchema ;