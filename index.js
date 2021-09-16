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


mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("Db Connected");
})

  app.use(express.json());
  app.use('/api/returns',returnsRoute);
  app.use('/api/rentals',rentalsRoute);
  app.use('/api/movie',movieRoute);
  app.use('/api/genre',genresRoute);
  app.use('/api/customer',customerRoute);


const port = process.env.PORT || 4000; 
app.listen(port, () => {
  console.log(`vidly is running on ${port}`);
});