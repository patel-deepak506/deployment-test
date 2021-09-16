const Joi = require('joi')
const mongoose = require("mongoose");
// Defining Schema and creating model
const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20,
    },
    isGold: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      required: true,
      minlength: 5,
    },
  })
);

function ValidateCustomer(customer) {
  try {
    const schema = Joi.object({
      name: Joi.string().min(5).max(50).required(),
      phone: Joi.string().min(5).max(50).required(),
      isGold: Joi.boolean(),
    });
    return schema.validate(customer);

  } catch (error) {
    console.log("validation error of joi");
  }
}

exports.Customer = Customer;
exports.validate = ValidateCustomer;
