const mongoose = require('mongoose');
const slugify = require('slugify');
const teaSchema = new mongoose.Schema(() => {
  name: String
});


const Tea = mongoose.model('Tea', teaSchema)

const green = new Tea({ name: 'Green Tea' })
console.log(green.name);
