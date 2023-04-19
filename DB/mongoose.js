const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

console.log(process.env.DATABASE);
mongoose.connect(`${process.env.DATABASE}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then (() => console.log('Connected to DB'))

mongoose.connection.on('error', (err) => {
  console.log(`${err.message}`)
})