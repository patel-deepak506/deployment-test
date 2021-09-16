const express = require("express");
const mongoose = require('mongoose')
const authRoute = require('./routes/auth');
const customerRoute = require('./routes/customer');
const genresRoute = require('./routes/geners');
const movieRoute = require('./routes/movies');
const rentalsRoute = require('./routes/rentals');
const returnsRoute = require('./routes/returns');
const usersRoute = require('./routes/users');
require('dotenv').config();
const app = express();
// require('./startup/routes')(app);
// require('./startup/db')();
// require('./startup/config')();
// require('./startup/prod');

mongoose.connect(process.env.DATABASE)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

  app.use(express.json());
  app.use('/api/users',usersRoute);
  app.use('/api/returns',returnsRoute);
  app.use('/api/rentals',rentalsRoute);
  app.use('/api/movie',movieRoute);
  app.use('/api/genre',genresRoute);
  app.use('/api/customer',customerRoute);
  app.use('/api/auth',authRoute)


const port = process.env.PORT || 4000; 
const server =  app.listen(port, () => {
  console.log(`vidly is running on ${port}`);
});

module.exports = server ;