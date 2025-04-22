const mongoose = require('mongoose');

const Contact = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  message:{
    type: String,
    required: true
  }
});

const Contactus = mongoose.model('Contactus', Contact);
module.exports = Contactus;