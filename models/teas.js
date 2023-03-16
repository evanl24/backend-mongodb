const mongoose = require('mongoose');

const teaSchema = new mongoose.Schema(() => {
  name: {
    type: String;
    trim: true;
    required: 'Please enter a Tea type';
  };
  description: {
    type: String;
    trim: true;
  };
  tags: [String];
});


mongoose.modules.exports = mongoose.model('Tea', teaSchema);