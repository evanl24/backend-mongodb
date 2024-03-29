const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

mongoose.set('strictQuery', true);
mongoose.connect(`${process.env.DATABASE}`, {})
.then (() => console.log('Connected to DB'))

mongoose.connection.on('error', (err) => {
  console.log(`${err.message}`)
})