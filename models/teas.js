const mongoose = require('mongoose');
const { Schema } = mongoose;

const teaSchema = new Schema({ _id: Number });
const Tea = mongoose.model('Tea', teaSchema);

const green = new Tea();
