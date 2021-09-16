const express = require("express");
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
// require('./startup/routes')(app);
// require('./startup/db')();
// require('./startup/config')();
// require('./startup/prod');

mongoose.connect(process.env.DATABASE)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));


const port = process.env.PORT || 4000; 
const server =  app.listen(port, () => {
  console.log(`vidly is running on ${port}`);
});

module.exports = server ;