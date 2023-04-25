const mongoose = require('mongoose');
const slugify = require('slugify');
const teaSchema = new mongoose.Schema(() => {
  name: {
    type: String;
    trim: true;
    required: 'Please enter a Tea type';
  };
  slug: String;
  description: {
    type: String;
    trim: true;
  };
  tags: [String];
});

teaSchema.pre('save', (next) => {
    if(!this.isModified('name')) {
      next();
      return;
    }
    this.slug = slugify(this.name);
    next();
})
mongoose.modules.exports = mongoose.model('Tea', teaSchema);